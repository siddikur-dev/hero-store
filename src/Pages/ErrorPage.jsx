import React from "react";
// import { useRouteError } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import errorImage from "../assets/error-404.png";
import Button from "../Components/Button/Button";
const ErrorPage = () => {
  //   const error = useRouteError();
  return (
    <>
      <Navbar />
      <div className=" my-12  space-y-7">
        <img className="mx-auto w-[350px]" src={errorImage} alt="" />
        <div className="text-center space-y-7">
          <h1 className="font-bold text-4xl">Oops, page not found!</h1>
          <Button>Go Back!</Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
