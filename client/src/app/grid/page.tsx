"use client";
import Image from "next/image";
import PetCard from "@/components/pet-card";
import { useState } from "react";
import BtFiltro from "@/components/btfiltro";
import { PetCardProps } from "@/components/pet-card";
import Inputdata from "@/components/btdata";

import { cat1 } from "@/assets";
import { cat2 } from "@/assets";
import { cat3 } from "@/assets";
import { cat4 } from "@/assets";
import { cat5 } from "@/assets";
import { cat6 } from "@/assets";

export default function gg() {
  const [ativo, setAtivo] = useState("Historico");

  const cardsMock: PetCardProps[] = [
    {
      type: "Primeira consulta",
      nomepet: "Rex",
      nomedono: "João",
      nomedr: "Dra. Ana",
      data: "22/05",
      horario: "14:00",
      imagem: cat1,
    },
    {
      type: "Checkup",
      nomepet: "Mia",
      nomedono: "Carla",
      nomedr: "Dr. Pedro",
      data: "23/05",
      horario: "10:30",
      imagem: cat2,
    },
    {
      type: "Vacinacao",
      nomepet: "Thor",
      nomedono: "Lucas",
      nomedr: "Dra. Julia",
      data: "24/05",
      horario: "16:00",
      imagem: cat3,
    },
    {
      type: "Primeira consulta",
      nomepet: "Rex",
      nomedono: "João",
      nomedr: "Dra. Ana",
      data: "22/05",
      horario: "14:00",
      imagem: cat1,
    },
    {
      type: "Checkup",
      nomepet: "Mia",
      nomedono: "Carla",
      nomedr: "Dr. Pedro",
      data: "23/05",
      horario: "10:30",
      imagem: cat2,
    },
    {
      type: "Vacinacao",
      nomepet: "Thor",
      nomedono: "Lucas",
      nomedr: "Dra. Julia",
      data: "24/05",
      horario: "16:00",
      imagem: cat3,
    },
    {
      type: "Historico",
      nomepet: "Thor",
      nomedono: "Lucas",
      nomedr: "Dra. Julia",
      data: "24/05",
      horario: "16:00",
      imagem: cat3,
    },
    {
      type: "Historico",
      nomepet: "Thor",
      nomedono: "Lucas",
      nomedr: "Dra. Julia",
      data: "24/05",
      horario: "16:00",
      imagem: cat3,
    },
    {
      type: "Historico",
      nomepet: "Thor",
      nomedono: "Lucas",
      nomedr: "Dra. Julia",
      data: "24/05",
      horario: "16:00",
      imagem: cat3,
    },
  ];

  const cardsfiltrados = cardsMock.filter((card) =>
    ativo === "Historico"
      ? card.type === "Historico"
      : card.type !== "Historico"
  );

  return (
    <div className="flex flex-1 flex-col h-full justify-around items-center bg-black">
      <div className="flex w-[1532]">
        <div className="mr-[1021px]">
          <BtFiltro ativo={ativo} setAtivo={setAtivo} />
        </div>
        <div className="mr-[15px]">
          <Inputdata />
        </div>
        <div className="mr-[]">
          <Inputdata />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[24px]">
        {cardsfiltrados.map((conteudodoindicedoarray, indicedoarray) => (
          <PetCard key={indicedoarray} {...conteudodoindicedoarray} />
        ))}
      </div>
    </div>
  );
}
