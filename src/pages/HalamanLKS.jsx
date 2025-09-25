import LupaKataSandi from "../component/Fragments/LupaKataSandi";
import LKSLayout from "../component/Layouts/LKSLayout";

const HalamanLKS = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      <div className="absolute inset-0"></div>
      <div className="relative z-10">
        <LKSLayout title="Lupa Kata Sandi">
          <LupaKataSandi />
        </LKSLayout>
      </div>
    </div>
  );
};

export default HalamanLKS;
