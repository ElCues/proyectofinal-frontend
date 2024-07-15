import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CARDS_OBJETIVOS } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Colegio = () => {
  return (
    <div>
      <section className="bg-gray-100 mb-20 py-10">
        <h1 className="text-blue-600 font-bold text-4xl text-center mb-5 md:text-5xl md:mb-10">
          SOBRE NOSOTROS
        </h1>
        <p className="text-xl px-6 md:text-lg md:px-80">
          En San José School, nos dedicamos a brindar una educación de calidad
          que forma ciudadanos comprometidos con el desarrollo del país y la
          transformación de la sociedad. Nuestra misión y visión reflejan
          nuestro compromiso con los valores católicos y el carisma de San José,
          ofreciendo una educación integral que responde a las necesidades
          actuales y promueve una cultura de paz y sostenibilidad. Aspiramos a
          ser referentes en el uso de nuevas tecnologías y metodologías
          pedagógicas, asegurando una formación completa y actualizada para
          nuestros estudiantes, preparándolos para ser líderes y agentes de
          cambio en un mundo globalizado.
        </p>
      </section>
      <section className="md:px-40 mb-20">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="md:flex">
            <CarouselItem className="md:flex">
              <div>
                <h1 className="text-6xl text-orange-500 font-bold text-center">
                  MISIÓN
                </h1>
                <p className="text-xl text-center">
                  Somos una institución educativa católica que, inspirada en el
                  carisma de San José, forma ciudadanos comprometidos con el
                  desarrollo del país a través de un currículo integral,
                  promoviendo valores morales y una cultura de paz.
                </p>
              </div>
              <Image
                src="/colegio_imagen1.jpg"
                alt=""
                width={500}
                height={500}
              />
            </CarouselItem>
            <CarouselItem className="md:flex">
              <div>
                <h1 className="text-6xl text-orange-500 font-bold text-center">
                  VISIÓN
                </h1>
                <p className="text-xl text-center">
                  Somos una institución educativa católica que, inspirada en el
                  carisma de San José, forma ciudadanos comprometidos con el
                  desarrollo del país a través de un currículo integral,
                  promoviendo valores morales y una cultura de paz.
                </p>
              </div>
              <Image
                src="/colegio_imagen2.jpg"
                alt=""
                width={500}
                height={500}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section>
        <h1 className="text-blue-600 font-bold text-4xl text-center mb-5 md:text-5xl md:mb-10">
          OBJETIVOS
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-200 py-8 md:px-40">
          {CARDS_OBJETIVOS.map((card) => (
            <Card key={card.key}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription className="hidden">
                  Card Description
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{card.description}</p>
              </CardContent>
              <CardFooter className="hidden">
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Colegio;
