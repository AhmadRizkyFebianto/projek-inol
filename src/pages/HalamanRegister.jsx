import RegisterLayout from "../component/Layouts/RegisterLayout";
import Register from "../component/Fragments/Register";

const HalamanRegister = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      <div className="absolute inset-0 blur-sm"></div>
      <div className="relative z-10">
        <RegisterLayout title={"Daftar"}>
          <Register />
        </RegisterLayout>
      </div>
    </div>
  );
};

export default HalamanRegister;
