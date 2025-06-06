"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { getConsultas } from "@/services/users";
import PetCard, { PetCardProps } from "@/components/pet-card";
import BtFiltro from "@/components/btfiltro";
import Inputdata from "@/components/btdata";
import TopBar from "@/components/topbar";
import {
  SetaVoltar,
  xbotao,
  calendar,
  sheep,
  horse,
  pig,
  cat,
  cow,
  cachorro,
} from "@/assets";

// Função utilitária para escolher imagem conforme o TIPO do pet (usando tipopet agora!)
function getImagem(tipopet: string) {
  if (!tipopet) return cachorro; // valor padrão
  switch (tipopet.toLowerCase()) {
    case "cachorro":
      return cachorro;
    case "gato":
      return cat;
    case "vaca":
      return cow;
    case "cavalo":
      return horse;
    case "porco":
      return pig;
    case "ovelha":
      return sheep;
    // Acrescente outros tipos se necessário!
    default:
      return cachorro;
  }
}

export default function Disporcards() {
  const [ativo, setAtivo] = useState("agendamento");
  const [cards, setCards] = useState<PetCardProps[]>([]);
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");

  // Buscar consultas do banco ao carregar a tela
  useEffect(() => {
    async function fetchConsultas() {
      try {
        const dados = await getConsultas();

        // Aqui usa o tipopet ao invés do nomepet para a imagem!
        const adaptados: PetCardProps[] = dados.map((item: any) => ({
          ...item,
          type: item.tipodaconsulta,
          imagem: getImagem(item.tipopet), // <-- ALTERADO AQUI!
        }));

        setCards(adaptados);
      } catch (error) {
        console.error("Erro ao buscar consultas:", error);
      }
    }
    fetchConsultas();
  }, []);

  function formatardata(novoValor: string, valorAnterior: string) {
    const estaApagando = novoValor.length < valorAnterior.length;
    const digitos = novoValor.replace(/\D/g, "").slice(0, 6); // máx 6: ddmmaa
    const n = digitos.length;
    if (n === 0) return "";

    let saida = "";

    if (n <= 2) {
      saida = digitos + (!estaApagando && n === 2 ? "/" : "");
    } else if (n <= 4) {
      saida = `${digitos.slice(0, 2)}/${digitos.slice(2)}`;
      if (!estaApagando && n === 4) saida += "/";
    } else {
      saida = `${digitos.slice(0, 2)}/${digitos.slice(2, 4)}/${digitos.slice(
        4
      )}`;
    }
    return saida;
  }

  function parseDataBR(dataStr: string): Date | null {
    const partes = dataStr.split("/");
    if (partes.length !== 3) return null;
    const [diaStr, mesStr, anoStr] = partes;
    const dia = parseInt(diaStr);
    const mes = parseInt(mesStr) - 1;
    const ano = parseInt(anoStr.length === 2 ? "20" + anoStr : anoStr);

    if (isNaN(dia) || isNaN(mes) || isNaN(ano) || ano < 1000) return null;
    return new Date(ano, mes, dia);
  }

  const cardsfiltrados = cards.filter((card) => {
    // Supondo que o card.data é no formato "dd/mm"
    const partesData = card.data.split("/");
    if (partesData.length < 2) return false;
    const [dia, mes] = partesData.map(Number);
    const datacard = new Date(2025, mes - 1, dia); // Ajuste o ano conforme sua regra

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

      <div className="flex-row flex items-center mt-[20px] mr-[1170px]">
        <Image src={SetaVoltar} alt="setavoltar" />
        <div className="font-sf font-bold text-4xl tracking-wide ">
          Atendimento
        </div>
      </div>

      <div className="font-sf text-lg mr-[1270px] mt-[10px] ">
        Qual é o médico?
      </div>

      <div className="flex items-center mr-[765px]">
        <input
          type="text"
          placeholder="Pesquise aqui..."
          // Aqui você pode adicionar lógica para buscar por médico se quiser!
          className="w-[520px] h-[50px] rounded-lg border-[1px] border-gray-400 pl-5 mr-[20px] mt-[10px]"
        />
        <button className="font-sf font-bold w-[116px] h-[42px] self-center rounded-full mt-[10px] shadow-md bg-btbuscar text-white">
          Buscar
        </button>
      </div>

      <div className="flex w-[1532] mt-[25px]">
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
      <div className="grid grid-cols-3 gap-[18px] mt-[30px] h-[258px] overflow-y-auto">
        {cardsfiltrados.map((conteudodoindicedoarray, indicedoarray) => (
          <PetCard key={indicedoarray} {...conteudodoindicedoarray} />
        ))}
      </div>

      <button className="flex justify-center items-center font-sf font-bold w-[205px] h-[42px] self-center rounded-full mt-[25px] ml-auto mr-[50px] shadow-md bg-btnovaconsulta text-white ">
        <Image src={xbotao} alt="" className="" />
        <div className="ml-[12px]">Nova Consulta</div>
      </button>
    </div>
  );
}
