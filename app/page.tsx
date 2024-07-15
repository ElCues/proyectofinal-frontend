import Actividades from "@/components/Actividades";
import Motivacion from "@/components/Motivacion";
import Portada from "@/components/Portada";
import Valores from "@/components/Valores";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Portada />
      <Actividades />
      <Valores />
      <Motivacion />
    </>
  );
}
