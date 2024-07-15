import React from "react";

const Motivacion = () => {
  return (
    <div className="relative w-full h-screen md:h-96">
      <img
        src="/motivacion.jpg"
        alt="Motivacion"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-24 md:top-28 w-full text-center px-20 md:px-40">
        <p className="text-white font-bold text-2xl mb-20 md:mb-5">
          SEMBRAMOS CONOCIMIENTO, COSECHAMOS GRANDES SUEÑOS Y CONSTRUIMOS UN
          FUTURO BRILLANTE JUNTOS
        </p>

        <div className="flex flex-col gap-20 md:gap-0 md:flex-row md:px-28 md:justify-around">
          <div className="relative border-0 py-6 px-14 rounded-lg">
            <div className="absolute inset-0 bg-white opacity-20 hover:opacity-50 transition-opacity duration-500 rounded-lg"></div>
            <div className="relative text-2xl text-white pointer-events-none">
              MOTÌVATE
            </div>
          </div>
          <div className="relative border-0 py-6 px-14 rounded-lg">
            <div className="absolute inset-0 bg-white opacity-20 hover:opacity-50 transition-opacity duration-500 rounded-lg"></div>
            <div className="relative text-2xl text-white pointer-events-none">
              APRENDE
            </div>
          </div>
          <div className="relative border-0 py-6 px-14 rounded-lg">
            <div className="absolute inset-0 bg-white opacity-20 hover:opacity-50 transition-opacity duration-500 rounded-lg"></div>
            <div className="relative text-2xl text-white pointer-events-none">
              JUEGA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motivacion;
