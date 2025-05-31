import Image from "next/image";

import { sheep } from "@/assets";
import { cat2 } from "@/assets";
import { pig } from "@/assets";
import { cat } from "@/assets";
import { cow } from "@/assets";
import { horse } from "@/assets";

import { LogoCITi } from "../assets";
import PetCard from "@/components/pet-card";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col h-full justify-around items-center bg-black">
      <div>
        <Image src={LogoCITi} alt="Logo citi" />
      </div>

      <PetCard
        type="Primeira consulta"
        nomedono="dono"
        nomepet="pet"
        nomedr="Dr. x"
        data="20/05"
        horario="18:30"
        imagem={sheep}
      />

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold">NextJS Boilerplate</h1>
        <p className="text-white text-xl">
          Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}
          <strong>&hearts;</strong> by CITi
        </p>
      </div>
    </div>
  );
}
