import SK from "../component/Fragments/SK";
import SKLayout from "../component/Layouts/SKLayout";

import React from "react";

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

export default Halamansk;
