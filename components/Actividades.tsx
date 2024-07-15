import React from "react";
import { CARDS_ACTIVIDADES } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Actividades = () => {
  // interface Actividades {
  //   image: string;
  //   alt: string;
  //   title: string;
  //   description: string;
  // }

  return (
    <div className="flex-col mt-10">
      <h1 className="w-full text-center text-5xl py-6">Actividades</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-200 py-4">
        {CARDS_ACTIVIDADES.map((card) => (
          <Card key={card.key}>
            <CardHeader className="text-center">
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={card.image}
                alt={card.alt}
                width={300}
                height={300}
                className="mx-auto"
              />
            </CardContent>
            {/* <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Actividades;
