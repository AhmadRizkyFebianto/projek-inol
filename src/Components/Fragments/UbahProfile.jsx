import React, { useEffect, useState } from "react";
import Input from "../Elements/Input";
import Button from "../Elements/Button";
import { useNavigate } from "react-router-dom";
import API from "../../Config/Endpoint";

const UbahProfile = ({}) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    nama: "",
    email: "",
    phone: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const endPoint = API.endpointUpdate;

  // Mengambil data dari localStorage dan memperbarui state profile
  useEffect(() => {
    setProfile({
      nama: localStorage.getItem("auth_fullname") || "",
      email: localStorage.getItem("auth_email") || "",
      phone: localStorage.getItem("auth_phone") || "",
    });
  }, []);

  // Menghandle perubahan input nama lengkap
  const handleNamaLengkapChange = (newValue) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      nama: newValue, // update profile.nama langsung
    }));
  };

  // Menghandle perubahan input nomor telepon dan memastikan hanya angka
  const handleNomorTeleponChange = (newValue) => {
    const numericValue = newValue.replace(/[^0-9]/g, "");
    if (numericValue === "") {
      setProfile((prevProfile) => ({
        ...prevProfile,
        phone: "", // clear phone jika input kosong
      }));
      return;
    }

    let correctedValue = numericValue;
    if (correctedValue.length === 1 && correctedValue.startsWith("8")) {
      correctedValue = "0" + correctedValue;
    }

    if (correctedValue.startsWith("08")) {
      const limitedValue = correctedValue.slice(0, 13);
      setProfile((prevProfile) => ({
        ...prevProfile,
        phone: limitedValue, // update phone dengan nilai yang telah dibatasi
      }));
    }
  };

  // Fungsi untuk mengirimkan data ke API
  function updateProfileData() {
    const payload = {
      name: profile.nama || localStorage.getItem("auth_fullname"), // Gunakan localStorage jika profile.nama kosong
      phone: profile.phone || localStorage.getItem("auth_phone"), // Gunakan localStorage jika profile.phone kosong
      mode: "UPDATE",
      action: "profile",
    };

    fetch(endPoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.status === "success") {
          console.log("Profile updated successfully");
          navigate("/profile");
        } else {
          alert(
            response.message || "Ubah Data gagal. Periksa kembali data Anda."
          );
        }
      })
      .catch((error) => {
        console.error("Error saat fetch:", error);
        alert("Terjadi kesalahan pada jaringan. Silakan coba lagi.");
      });
  }

  // Menghandle submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true); // Menampilkan popup untuk konfirmasi sebelum mengupdate
  };

  // Menghandle konfirmasi update saat popup muncul
  const handleConfirmUpdate = () => {
    updateProfileData(); // Panggil fungsi untuk update data ke server
    setShowPopup(false); // Menutup popup setelah update
  };

  return (
    <>
      <form
        className={`w-full flex flex-col items-center gap-6 transition-all duration-200 ${
          showPopup ? "blur-sm" : ""
        }`}
        method="POST"
        onSubmit={handleSubmit} // pastikan form submit menggunakan onSubmit
      >
        <div className="mt-10 flex flex-col gap-5 ml-5">
          <div>
            <label className="font-jakarta text-xs">Nama lengkap</label>
            <Input
              type="text"
              name="nama_lengkap"
              value={profile.nama || ""} // Menggunakan profile.nama untuk value input
              className="font-jakarta text-xs text-black"
              onChange={(e) => handleNamaLengkapChange(e.target.value)} // update nama
            />
          </div>

          <div>
            <label className="font-jakarta text-xs">Email</label>
            <Input
              type="email"
              name="email"
              value={profile.email || ""} // Menggunakan profile.email untuk value input
              className="font-jakarta text-xs text-black"
              disabled
            />
          </div>

          <div>
            <label className="font-jakarta text-xs">No Telepon</label>
            <Input
              type="text"
              inputMode="numeric"
              name="nomer_telepon"
              value={profile.phone || ""} // Menggunakan profile.phone untuk value input
              className="font-jakarta text-xs text-black"
              maxLength="15"
              onChange={(e) => handleNomorTeleponChange(e.target.value)} // update phone
            />
          </div>

          <Button type="submit" className="w-auto mt-4 mx-auto bg-green-500">
            Simpan Perubahan
          </Button>
        </div>
      </form>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#EBEDF0] w-[533px] h-[186px] rounded-[20px] shadow-lg flex flex-col items-center px-8 pt-5 pb-8 relative animate-[popup_0.2s_ease-out]">
            <h1 className="font-jakarta text-base text-center">
              Apakah kamu sudah yakin <br /> untuk mengubah data?
            </h1>

            <div className="flex gap-[73px] mt-[50px]">
              <Button onClick={() => setShowPopup(false)}>Tidak</Button>
              <Button onClick={handleConfirmUpdate}>Iya</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UbahProfile;
