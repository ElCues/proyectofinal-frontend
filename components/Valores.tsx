import { VALORES } from "@/constants";
import Image from "next/image";
import React from "react";

const Valores = () => {
  return (
    <div className="w-full bg-red-700 text-white text-center py-10 px-10 md:px-40">
      <h1 className="font-bold text-3xl mb-5">VALORES DEL COLEGIO</h1>
      <p className="text-2xl mb-5">
        En nuestro colegio, creemos firmemente en la importancia de formar no
        solo mentes brillantes, sino también corazones íntegros. Nuestros
        valores fundamentales guían cada aspecto de nuestra comunidad educativa
        y preparan a nuestros estudiantes para ser ciudadanos responsables y
        compasivos.
      </p>
      <div className="flex flex-col items-center md:flex-row md:justify-around">
        {VALORES.map((valor) => (
          <div key={valor.key} className="flex flex-col items-center my-10">
            <p className="mb-10 font-bold text-xl">{valor.title}</p>
            <Image
              src={valor.image}
              alt={valor.alt}
              width={150}
              height={150}
              className="rounded-full object-cover w-40 h-40"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Valores;
