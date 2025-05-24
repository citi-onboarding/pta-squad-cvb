"use client";
import Image from "next/image";
import PetCard from "@/components/pet-card";
import { useState } from "react";
import BtFiltro from "@/components/btfiltro";
import { PetCardProps } from "@/components/pet-card";
import Inputdata from "@/components/btdata";

import { calendario } from "@/assets";
import { cat1 } from "@/assets";
import { cat2 } from "@/assets";
import { cat3 } from "@/assets";
import { cat4 } from "@/assets";
import { cat5 } from "@/assets";
import { cat6 } from "@/assets";

// ... (importações iguais)

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
      data: "21/05",
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
      data: "28/05",
      horario: "16:00",
      imagem: cat3,
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
  ];

  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");

  function parseDataBR(dataStr: string): Date | null {
    const partes = dataStr.split("/");
    if (partes.length !== 3) return null; //se a data nao tem os 3 parametros dd/mm/aa da nulo

    const [diaStr, mesStr, anoStr] = partes;
    const dia = parseInt(diaStr);
    const mes = parseInt(mesStr) - 1;
    const ano = parseInt(anoStr.length === 2 ? "20" + anoStr : anoStr); //nao enterndi essa linha

    if (
      isNaN(dia) ||
      isNaN(mes) ||
      isNaN(ano) ||
      ano === 1 ||
      ano === 2 ||
      ano === 3 ||
      ano === 4 ||
      ano === 5 ||
      ano === 6 ||
      ano === 7 ||
      ano === 8 ||
      ano === 9 ||
      ano === 0
    )
      //adicionei a limitacao do ano nao poder ter so 1 digito
      return null; //se alguma parte for nulo

    return new Date(ano, mes, dia);
  }

  const cardsfiltrados = cardsMock.filter((card) => {
    const [dia, mes] = card.data.split("/").map(Number);
    const datacard = new Date(2025, mes - 1, dia);

    const datainicial = parseDataBR(dataInicio);
    const datafinal = parseDataBR(dataFim);

    const noIntervalo =
      (!datainicial || datacard >= datainicial) &&
      (!datafinal || datacard <= datafinal);

    return ativo === "Historico"
      ? card.type === "Historico" && noIntervalo
      : card.type !== "Historico" && noIntervalo;
  });

  return (
    <div className="flex flex-1 flex-col h-full justify-around items-center bg-black">
      <div className="flex w-[1532]">
        <div className="mr-[1021px]">
          <BtFiltro ativo={ativo} setAtivo={setAtivo} />
        </div>
        <div className="mr-[15px]">
          <div>
            <input
              type="text"
              placeholder="dd/mm/aa"
              value={dataInicio}
              onChange={(evento) => setDataInicio(evento.target.value)}
              className="w-[125px] h-[56px] rounded-xl border-2 border-gray-300"
            />
            <Image
              src={calendario}
              alt=""
              className="ml-auto mt-[-40px] mr-[8px]"
            />
          </div>
        </div>
        <div>
          <div>
            <input
              type="text"
              placeholder="dd/mm/aa"
              value={dataFim}
              onChange={(evento) => setDataFim(evento.target.value)}
              className="w-[125px] h-[56px] rounded-xl border-2 border-gray-300"
            />
            <Image
              src={calendario}
              alt=""
              className="ml-auto mt-[-40px] mr-[8px]"
            />
          </div>
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
