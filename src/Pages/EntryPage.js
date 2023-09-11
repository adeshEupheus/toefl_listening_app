import React, { useState } from "react";
import Cover from "../Components/assest/Login.png";
import eupheus from "../Components/assest/eupheus.png";
import Tabs from "../Components/Material/Tabs";

const Login = () => {
  // const [loading, setLoading] = useState(false);

  return (
    <div className="flex justify-between h-screen">
      <div className="">
        <img
          src={Cover}
          className="h-0 w-0 sm:h-[712px] sm:w-[1500px] md:h-[712px] md:w-[2500px] lg:h-[712px] lg:w-[4800px]"
        ></img>
      </div>

      <form
        className="flex  flex-col  h-screen p-5 w-[100%] sm:w-[150%] rounded-lg  "
        style={{ "box-shadow": "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
      >
        <div className="flex justify-center mb-[3vh]">
          <img
            src={eupheus}
            className="!w-[150px] sm:!w-[280px]"
            alt="img"
          ></img>
        </div>

        <Tabs />
      </form>
    </div>
  );
};

export default Login;
