import React, { useEffect, useState } from "react";
function LoaderHome() {
  const [loder, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 2500);
  }, []);
  {
    if (loder === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }
  return (
    <>
      {loder ? (
        <div
          style={{ zIndex: "999999999" }}
          className="bg-white top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
        >
          <div className="flex justify-center">
            <div className=" relative flex justify-center items-center">
              <h2 className='text-center text-heading font-Merriweather text-[30px] sm:text-[36px] md:text-[42px] lg:text-3xl font-black leading-normal animate__animated  animate__backInDown animate__slow '>The Food Ninja Blog</h2>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default LoaderHome;