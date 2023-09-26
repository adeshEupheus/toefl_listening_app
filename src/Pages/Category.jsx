import React from "react";
import Navbar from "../Components/Material/Navbar";
import senior from "../Components/assest/senior-logo.png";
import { useNavigate, useParams } from "react-router-dom";
import localinstance from "../localinstance";
import { useLayoutEffect } from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import Swal from "sweetalert2";
import Junior from "../Components/assest/toefl_junior.png";
import Primary from "../Components/assest/toefl_primary.png";

const Category = () => {
  const [data, setData] = useState([]);
  const { category } = useParams();
  const [junior, setJunior] = useState(false);

  useLayoutEffect(() => {
    TestByCategory();
  }, []);

  const navigate = useNavigate();
  //   const handleJunior = () => {
  //     navigate("/junior_playlist");
  //   };
  const handlePlaylist = (id) => {
    console.log(id);

    navigate(`${id}`);
  };

  const TestByCategory = async () => {
    const res = await localinstance({
      url: `test/getTest/${category}`,
      method: "GET",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }).catch((err) => {
      console.log(err.response.status);
      if (err.response.status === 401) {
        Swal.fire({
          text: "Session Expired",
          icon: "error",
        });
        navigate("/");
      }
    });
    setData(res.data.message);
    if (res.data.message[0].Title.includes("Step 1")) {
      setJunior(true);
    }
  };
  return (
    <>
      <div className=" w-full">
        <Navbar status={"home"} />
        <div className="flex flex-col gap-2 mt-4 ml-[5vw]">
          <img
            src={junior ? Junior : Primary}
            alt="logo"
            className="sm:w-[15rem] w-[10rem] h-auto object-cover"
          />
          <p className="sm:text-3xl text-xl text-blue-400 italic ">
            Listening Comprehension
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-[3rem] justify-center items-center mt-[15vh]">
          {data.map((item) => (
            <div
              className="flex justify-center items-center text-center rounded-md  mx-[4.5rem] sm:mx-0 !w-[50%] !h-[200px] sm:!w-[30%]  sm:!h-[300px] border-2 border-black cursor-pointer text-xl sm:text-3xl font-bold shadow-md shadow-black bg-gradient-to-b from-sky-400 to-sky-200"
              // onClick={handleJunior}
              onClick={() => handlePlaylist(item.id)}
            >
              <p className="w-fit ">{item.Title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
