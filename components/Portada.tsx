import React from "react";

const Portada = () => {
  return (
    <div className="relative">
      <img src="/header-img1-recortada.png" alt="Portada" className="w-full hidden md:block" />
      <img src="/header-img1.png" alt="Portada" className="w-full md:hidden" />
      <div className="absolute bottom-0 md:bottom-10 w-full text-center backdrop-blur-md md:py-3">
        <h1 className="text-white font-bold text-lg md:text-6xl">"FABRICANDO MENTES BRILLANTES"</h1>
        <p className="text-white font-bold text-base md:text-4xl">Un colegio comprometido con el éxito académico y personal de cada estudiante</p>
      </div>
    </div>
  );
};

export default Portada;
