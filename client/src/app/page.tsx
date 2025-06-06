"use client";
import Image from "next/image";
import PetCard from "@/components/pet-card";
import { useState } from "react";
import BtFiltro from "@/components/btfiltro";
import { PetCardProps } from "@/components/pet-card";
import Inputdata from "@/components/btdata";
import TopBar from "@/components/topbar";
import { SetaVoltar, xbotao } from "@/assets";
import { calendar } from "@/assets";
import { sheep } from "@/assets";
import { horse } from "@/assets";
import { pig } from "@/assets";
import { cat } from "@/assets";
import { cow } from "@/assets";
import { cachorro } from "@/assets";
import Link from "next/link";
import ConsultaCard from "@/components/ConsultaCard";
import ConsultaForm from "@/components/nova-consulta";



export default function disporcards() {
  const [ativo, setAtivo] = useState("agendamento");
  const [showPopup, setShowPopup] = useState(false);

  const cardsMock: PetCardProps[] = [
    {
      type: "Primeira consulta",
      nomepet: "Rex",
      nomedono: "João",
      nomedr: "Dra. Ana",
      data: "10/05",
      horario: "14:00",
      imagem: horse,
      idDaConsulta:1,
      idadePet:5,
    },
    {
      type: "Checkup",
      nomepet: "Mia",
      nomedono: "Carla",
      nomedr: "Dr. Pedro",
      data: "11/05",
      horario: "10:30",
      imagem: cachorro,
      idDaConsulta:2,
      idadePet:6,
    },
    {
      type: "Vacinacao",
      nomepet: "Thor",
      nomedono: "Lucas",
      nomedr: "Dra. Julia",
      data: "12/05",
      horario: "16:00",
      imagem: pig,
      idDaConsulta:3,
      idadePet:7,
    },
    {
      type: "Primeira consulta",
      nomepet: "Rex",
      nomedono: "João",
      nomedr: "Dra. Ana",
      data: "13/05",
      horario: "14:00",
      imagem: sheep,
      idDaConsulta:4,
      idadePet:8,
    },
    {
      type: "Checkup",
      nomepet: "Mia",
      nomedono: "Carla",
      nomedr: "Dr. Pedro",
      data: "14/05",
      horario: "10:30",
      imagem: cat,
      idDaConsulta:5,
      idadePet:9,
    },
    {
      type: "Vacinacao",
      nomepet: "Thor",
      nomedono: "Lucas",
      nomedr: "Dra. Julia",
      data: "15/05",
      horario: "16:00",
      imagem: cow,
      idDaConsulta:6,
      idadePet:10,
    },
    {
      type: "Historico",
      nomepet: "Thor",
      nomedono: "Lucas",
      nomedr: "Dra. Julia",
      data: "10/05",
      horario: "16:00",
      imagem: pig,
      idDaConsulta:7,
      idadePet:11,
    },
    {
      type: "Historico",
      nomepet: "Thor",
      nomedono: "Lucas",
      nomedr: "Dra. Julia",
      data: "11/05",
      horario: "16:00",
      imagem: pig,
      idDaConsulta:8,
      idadePet:12,
    },
    {
      type: "Historico",
      nomepet: "Thor",
      nomedono: "Lucas",
      nomedr: "Dra. Julia",
      data: "12/05",
      horario: "16:00",
      imagem: pig,
      idDaConsulta:9,
      idadePet:13,
    },
    {
      type: "Vacinacao",
      nomepet: "Thor",
      nomedono: "Lucas",
      nomedr: "Dra. Julia",
      data: "13/05",
      horario: "16:00",
      imagem: pig,
      idDaConsulta:10,
      idadePet:14,
    },
  ];

  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");

  function formatardata(novoValor: string, valorAnterior: string) {
    const estaApagando = novoValor.length < valorAnterior.length;
    const digitos = novoValor.replace(/\D/g, "").slice(0, 6); // máx 6: ddmmaa
    const n = digitos.length;
    if (n === 0) return "";

    let saida = "";

    if (n <= 2) {
      //ta digitando o dia
      // 1 → "1", 11 → "11/"
      saida = digitos + (!estaApagando && n === 2 ? "/" : ""); //se nao esta apagando e ja tem 2 digitos de dia ja, coloca a /
    } else if (n <= 4) {
      //se a string tem mais de 2 digitos
      // 110  → "11/0", 1105 → "11/05/"
      saida = `${digitos.slice(0, 2)}/${digitos.slice(2)}`; //pega a string de dia vetor[0,1], coloca a barra e adiciona tudo q vem dps da barra da string dd/mm
      if (!estaApagando && n === 4) saida += "/"; //se nao esta apagando e a string "ddmmaa" tem exatamente 4 digitos, adiciona a / na saida dd/mm/
    } else {
      //aqui so entra se estiver escrevendo o ano
      // 11052  → "11/05/2", 110525 → "11/05/25"
      saida = `${digitos.slice(0, 2)}/${digitos.slice(2, 4)}/${digitos.slice(
        4
      )}`;
    } //aqui eu basicamente vou ter um vetor de digitos de tamanho 6 que sera ddmmaa sem as barras e uma saida que sera construida colocando essas barras alem de uma variavel n que diz a qtd de digitos digitados

    return saida;
  }

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
    <div className="flex flex-1 flex-col justify-around items-center bg-white">
      <div className="w-full">
        <TopBar />
      </div>

      <div className="flex-row flex items-center mt-[25px] mr-[1170px]">
        <Image src={SetaVoltar} alt="setavoltar" />
        <div className="font-sf font-bold text-4xl tracking-wide ">
          Atendimento
        </div>
      </div>

      <div className="font-sf text-lg mr-[1270px] mt-[15px] ">
        Qual e o médico?
      </div>

      <div className="flex items-center mr-[765px]">
        <input
          type="text"
          placeholder="Pesquise aqui..."
          value={dataInicio}
          onChange={(e) =>
            setDataInicio(formatardata(e.target.value, dataInicio))
          }
          className="w-[520px] h-[50px] rounded-lg border-[1px] border-gray-400 pl-5 mr-[20px] mt-[10px]"
        />

        <button className="font-sf font-bold w-[116px] h-[42px] self-center rounded-full mt-[10px] shadow-md bg-btbuscar text-white">
          Buscar
        </button>
      </div>

      <div className="flex w-[1532] mt-[35px]">
        <div className="mr-[921px]">
          <BtFiltro ativo={ativo} setAtivo={setAtivo} />
        </div>
        <div className="mr-[15px]">
          <div>
            <input
              type="text"
              placeholder="dd/mm/aa"
              value={dataInicio}
              onChange={(e) =>
                setDataInicio(formatardata(e.target.value, dataInicio))
              }
              className="w-[125px] h-[56px] rounded-xl border-2 border-gray-300 pl-1"
            />
            <Image
              src={calendar}
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
              onChange={(e) =>
                setDataFim(formatardata(e.target.value, dataFim))
              }
              className="w-[125px] h-[56px] rounded-xl border-2 border-gray-300 pl-1"
            />
            <Image
              src={calendar}
              alt=""
              className="ml-auto mt-[-40px] mr-[8px]"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[18px] mt-[40px] h-[258px] overflow-y-auto">
        {cardsfiltrados.map((conteudodoindicedoarray, indicedoarray) => (
          <PetCard key={indicedoarray} {...conteudodoindicedoarray} />
        ))}
      </div>

      <button
        onClick={() => setShowPopup(true)}
        className="flex justify-center items-center font-sf font-bold w-[205px] h-[42px] self-center rounded-full mt-[25px] ml-auto mr-[50px] shadow-md bg-btnovaconsulta text-white"
      >
        <Image src={xbotao} alt="Ícone" className="" />
        <div className="ml-[12px]">Nova Consulta</div>
      </button>

      {/* Pop-up (aparece apenas quando showPopup = true) */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <ConsultaForm onClose={() => setShowPopup(false)}/>
        </div>
        
      )}
    </div>
  );
}
