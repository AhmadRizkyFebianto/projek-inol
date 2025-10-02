import React, { useEffect, useState } from "react";
import Input from "../Elements/Input";
import Button from "../Elements/Button";
import { useNavigate } from "react-router-dom";
import API from "../../Config/Endpoint";

const Register = ({}) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setProfile({
      nama: localStorage.getItem("auth_fullname"),
      email: localStorage.getItem("auth_email"),
      phone: localStorage.getItem("auth_phone"),
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  return (
    <>
      <form
        className={`w-full flex flex-col items-center gap-6 transition-all duration-200 ${
          showPopup ? "blur-sm" : ""
        }`}
        method="POST"
      >
        <div className="mt-10 flex flex-col gap-5 ml-5 ">
          <div>
            <label className="font-jakarta text-xs">Nama lengkap</label>
            <Input
              type="text"
              name="nama_lengkap"
              value={profile.name}
              className="font-jakarta text-xs text-black"
            />
          </div>

          <div>
            <label className="font-jakarta text-xs">Email</label>
            <Input
              type="email"
              name="email"
              value={profile.email}
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
              value={profile.phone}
              className="font-jakarta text-xs text-black"
              maxLength="15"
            />
          </div>

          <Button
            type="submit"
            className="w-auto mt-4 mx-auto bg-green-500"
            onClick={handleSubmit}
          >
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
              <Button>Iya</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
