import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row pt-8 px-10 gap-10 md:gap-0justify-between items-center">
      <div>
        <Image src="/school2.png" alt="" width={400} height={400} />
      </div>
      <div>
        <p>
          <strong>Contactenos</strong>
        </p>
        <p>Asociación de Vivienda Virgen de la Candelaria (ASOVICH)</p>
        <p>Characato, Arequipa, Peru</p>
        <p>Teléfono: 930 645 576</p>
      </div>
      <div className="flex gap-5">
        <Image
          src="/facebook.svg"
          alt="Facebook"
          width={10}
          height={10}
          className="border border-black rounded-full object-cover w-16 h-16"
        />
        <Image
          src="/instagram.svg"
          alt="Instagram"
          width={50}
          height={50}
          className="border border-black rounded-full object-cover w-16 h-16"
        />
        <Image
          src="/twitter.svg"
          alt="Twitter"
          width={50}
          height={50}
          className="border border-black rounded-full object-cover w-16 h-16"
        />
      </div>
    </div>
  );
};

export default Footer;
