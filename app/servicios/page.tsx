import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CAROUSEL_SERVICIOS } from "@/constants";

const Servicios = () => {
  return (
    <div>
      <section>
        <div className="bg-blue-500 text-center text-white py-10 px-5 md:mx-52 rounded-lg md:mb-20">
          <h1 className="font-bold text-4xl mb-5 md:text-6xl">
            NUESTROS SERVICIOS
          </h1>
          <p className="text-xl">
            En "San José School", nos enorgullecemos de ofrecer una amplia gama
            de servicios educativos y extracurriculares diseñados para
            proporcionar una formación integral y de alta calidad a nuestros
            estudiantes. Nuestro objetivo es fomentar el desarrollo académico,
            personal y social de cada alumno, preparándolos para enfrentar los
            desafíos del futuro con confianza y habilidad.
          </p>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row md:justify-around md:w-full w-11/12 mx-auto py-10">
          <div>
            <h1 className="text-center text-blue-600 text-5xl font-bold mb-10">
              Servicios que brindamos
            </h1>
            <div className="text-xl mb-5">
              <p>Profesoras especializadas en pedagogía.</p>
              <p>Infraestructura moderna, adecuada y segura.</p>
              <p>Enseñanza personalizada.</p>
              <p>Inglés intensivo.</p>
              <p>Centro de cómputo.</p>
              <p>Material educativo multimedia.</p>
              <p>Evaluación y ranking permanente.</p>
              <p>Curso de Ajedrez.</p>
              <p>Música: Cajón, flauta, guitarra, mandolina, violín, órgano.</p>
              <p>
                Talleres: dibujo, pintura, kung fu, minicheff, danza y natación.
              </p>
              <p>Servicio Psicológico gratuito.</p>
              <p>Área verde con juegos infantiles y campo de césped.</p>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src="/imagen2.jpg"
              alt="servicios"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      <section className="md:px-40 mb-20">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="md:flex">
            {CAROUSEL_SERVICIOS.map((item) => (
              <CarouselItem key={item.key} className="md:flex">
                <div>
                  <h1 className="text-6xl text-orange-500 font-bold text-center">
                    {item.title}
                  </h1>
                  <p className="text-xl text-center">{item.content}</p>
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
};

export default Servicios;
