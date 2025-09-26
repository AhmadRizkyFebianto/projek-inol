import KataSandiBaru from "../component/Fragments/KataSandiBaru";
import LupaKataSandi from "../component/Fragments/LupaKataSandi";
import Login from "../component/Fragments/Login";
import Register from "../component/Fragments/Register";
import SK from "../component/Fragments/SK";
import OTPInput from "../component/Fragments/VerifikasiKode";
import { DetailLayout, SKLayout } from "../component/Layouts/LayoutUtama";
import { KSBLayout } from "../component/Layouts/LayoutUtama";
import { LoginLayout } from "../component/Layouts/LayoutUtama";
import { RegisterLayout } from "../component/Layouts/LayoutUtama";
import { LKSLayout } from "../component/Layouts/LayoutUtama";
import { VerifLayout } from "../component/Layouts/LayoutUtama";

const HalamanKSB = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      <div className="absolute inset-0 bg-white blur-sm"></div>
      <div className="relative z-10">
        <KSBLayout title="Kata Sandi Baru">
          <KataSandiBaru />
        </KSBLayout>
      </div>
    </div>
  );
};

const HalamanLKS = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      <div className="absolute inset-0 bg-white blur-sm"></div>
      <div className="relative z-10">
        <LKSLayout title="Lupa Kata Sandi">
          <LupaKataSandi />
        </LKSLayout>
      </div>
    </div>
  );
};

const HalamanLogin = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      <div className="absolute inset-0 bg-white blur-sm"></div>
      <div className="relative z-10">
        <LoginLayout title="Masuk">
          <Login />
        </LoginLayout>
      </div>
    </div>
  );
};

const HalamanRegister = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      <div className="absolute inset-0 bg-white blur-sm"></div>
      <div className="relative z-10">
        <RegisterLayout title={"Daftar"}>
          <Register />
        </RegisterLayout>
      </div>
    </div>
  );
};

const Halamansk = () => {
  return (
    <div>
      <div className="relative min-h-screen flex items-center justify-center ">
        <div className="absolute inset-0 bg-white blur-sm"></div>
        <div className="relative z-10">
          <SKLayout>
            <SK />
          </SKLayout>
        </div>
      </div>
    </div>
  );
};

const HalamanVerif = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      <div className="absolute inset-0 bg-white blur-sm"></div>
      <div className="relative z-10">
        <VerifLayout title="Verifikasi Kode">
          <OTPInput />
        </VerifLayout>
      </div>
    </div>
  );
};

const HalamanDetail = () => {
  return <DetailLayout />;
};

export {
  HalamanKSB,
  HalamanLKS,
  HalamanLogin,
  HalamanRegister,
  HalamanVerif,
  Halamansk,
  HalamanDetail,
};
