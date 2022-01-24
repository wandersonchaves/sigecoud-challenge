import React from "react";
import Formulario from "../../components/Formulario";

import "./styles.css";
import welcomeImg from "../../assets/img-boas-vindas.png";

export default function index() {
  return (
    <>
      {/* <div className="welcome-container backdrop-blur-sm rounded-full">
      <div className="welcome-content max-w-full max-h-full">
        <Formulario />
        <img src={welcomeImg} alt="Welcome IMG" />
      </div>
    </div> */}

      <div className="flex items-center justify-center text-center">
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="max-w-4xl space-x-5 grid grid-cols-2 align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all">
          <Formulario />
          <img src={welcomeImg} alt="Welcome IMG" />
        </div>
      </div>
    </>
  );
}
