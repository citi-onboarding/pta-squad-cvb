"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TopBar from "@/components/topbar/index";
import { useState } from "react";
import {
  SetaVoltar,
  cow,
  cachorro,
  horse,
  pig,
  sheep,
  calendar,
  alarm,
  cat,
} from "@/assets";

// Funções de formatação
const formattimeInput = (tempoDigitado: string): string => {
  let apenasNumeros = "";
  for (let char of tempoDigitado) {
    if ("0123456789".includes(char)) {
      apenasNumeros += char;
    }
  }
  if (apenasNumeros.length > 4) {
    apenasNumeros = apenasNumeros.slice(0, 4);
  }
  if (apenasNumeros.length > 2) {
    return `${apenasNumeros.slice(0, 2)}:${apenasNumeros.slice(2)}`;
  } else {
    return apenasNumeros;
  }
};

const formatDateInput = (valorDigitado: string): string => {
  let apenasNumeros = "";
  for (let char of valorDigitado) {
    if ("0123456789".includes(char)) {
      apenasNumeros += char;
    }
  }
  if (apenasNumeros.length > 8) {
    apenasNumeros = apenasNumeros.slice(0, 8);
  }
  let parteDia = apenasNumeros.slice(0, 2);
  let parteMes = apenasNumeros.slice(2, 4);
  let parteAno = apenasNumeros.slice(4, 8);
  if (apenasNumeros.length > 4) {
    return `${parteDia}/${parteMes}/${parteAno}`;
  } else if (apenasNumeros.length > 2) {
    return `${parteDia}/${parteMes}`;
  } else {
    return parteDia;
  }
};

export default function TelaCadastro() {
  const router = useRouter();

  // Estados do formulário
  const [nomepet, setNomepet] = useState<string>("");
  const [nomedono, setNomedono] = useState<string>("");
  const [tipopet, setTipopet] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [tipodaconsulta, setTipodaconsulta] = useState<string>("");
  const [nomedr, setNomedr] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");

  // Handlers
  const handleDateChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    setDate(formatDateInput(input.target.value));
  };
  const handleTimeChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    setTime(formattimeInput(input.target.value));
  };

  // Validação dos campos obrigatórios
  const camposObrigatoriosPreenchidos =
    nomepet.trim() &&
    nomedono.trim() &&
    tipopet.trim() &&
    idade.trim() &&
    tipodaconsulta.trim() &&
    nomedr.trim() &&
    date.trim() &&
    time.trim();

  // Função para extrair somente dd/mm da data digitada
  function getDiaMes(data: string): string {
    // Aceita "dd/mm", "dd/mm/aa", "ddmmaaaa"
    const partes = data.split("/");
    if (partes.length >= 2) {
      return `${partes[0]}/${partes[1]}`;
    }
    // Se não tiver /, tenta pegar manualmente (caso o usuário digitou sem barra)
    if (data.length >= 4) {
      return `${data.slice(0, 2)}/${data.slice(2, 4)}`;
    }
    return data;
  }

  // Envia o cadastro para o backend
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!camposObrigatoriosPreenchidos) {
      setMensagem("Preencha todos os campos obrigatórios!");
      return;
    }

    const body = {
      nomepet,
      nomedono,
      nomedr,
      idade, // string
      tipodaconsulta,
      data: getDiaMes(date), // Apenas dd/mm
      horario: time,
      descricao,
      tipopet,
    };

    try {
      const res = await fetch("http://localhost:3001/Consulta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const errorJson = await res.json();
        setMensagem(errorJson.message || "Erro ao cadastrar.");
      } else {
        setMensagem("Cadastro realizado com sucesso!");
        setNomepet("");
        setNomedono("");
        setTipopet("");
        setIdade("");
        setTipodaconsulta("");
        setNomedr("");
        setDate("");
        setTime("");
        setDescricao("");
      }
    } catch {
      setMensagem("Erro de conexão com servidor.");
    }
  };

  return (
    <div className="flex flex-col items-start min-h-screen bg-white">
      <div className="w-full">
        <TopBar />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[10px] ml-[135px] mt-[35px] mb-[60px] w-[calc(100%-135px-150px)]"
      >
        <div className="flex flex-row gap-[8px] items-center ">
          <button type="button" onClick={() => router.back()}>
            <Image
              src={SetaVoltar}
              alt="seta de voltar"
              width={32}
              height={27}
            />
          </button>
          <h1 className="text-[36px] font-bold">Cadastro</h1>
        </div>

        <div className="flex flex-row gap-4 mt-[10px]">
          <div className="flex flex-col w-full">
            <h2 className="font-bold">Nome de Paciente</h2>
            <input
              type="text"
              placeholder="Digite aqui..."
              className="w-full border-2 border-gray-500 rounded-[8px] p-4 h-[40px] flex items-center"
              value={nomepet}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNomepet(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <h2 className="font-bold">Nome do Tutor</h2>
            <input
              type="text"
              placeholder="Digite aqui..."
              className="w-full border-2 border-gray-500 rounded-[8px] p-4 h-[40px] flex items-center"
              value={nomedono}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNomedono(e.target.value)
              }
            />
          </div>
        </div>

        {/* Tipo do pet */}
        <div className="flex-col mt-[8px]">
          <h2 className="font-bold">Qual é a espécie do paciente?</h2>
          <div className="mt-[15px] flex flex-row gap-[35px]">
            {[
              { id: "ovelha", src: sheep, alt: "imagem de ovelha" },
              { id: "gato", src: cat, alt: "imagem de gato" },
              { id: "porco", src: pig, alt: "imagem de porco" },
              { id: "vaca", src: cow, alt: "imagem de vaca" },
              { id: "cavalo", src: horse, alt: "imagem de cavalo" },
              { id: "cachorro", src: cachorro, alt: "imagem de cachorro" },
            ].map((img) => (
              <div
                key={img.id}
                onClick={() => setTipopet(img.id)}
                className={`h-[120px] w-[120px] rounded-lg cursor-pointer flex items-center justify-center ${
                  tipopet === img.id ? "bg-gray-300" : ""
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  className={`object-cover ${
                    img.id === "cachorro"
                      ? "h-[100px] w-[90px]"
                      : "h-[110px] w-[110px]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-4 mt-[10px]">
          <div className="flex flex-col w-full">
            <h2 className="font-bold">Idade do Paciente</h2>
            <input
              type="text"
              placeholder="Digite aqui..."
              className="w-full border-2 border-gray-500 rounded-[8px] p-4 h-[40px] flex items-center"
              value={idade}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setIdade(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <h2 className="font-bold">Tipo de Consulta</h2>
            <select
              className="w-full border-2 border-gray-500 rounded-[8px] h-[40px] flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 pl-3"
              value={tipodaconsulta}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setTipodaconsulta(e.target.value)
              }
            >
              <option value="">Selecione aqui...</option>
              <option value="Primeira consulta">Primeira consulta</option>
              <option value="Vacinacao">Vacinação</option>
              <option value="Checkup">Checkup</option>
              <option value="Retorno">Retorno</option>
              <option value="Historico">Histórico</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4 mb-6 mt-[8px]">
          <div className="w-[45%]">
            <label className="block text-gray-1000 mb-2 font-bold">
              Médico Responsável
            </label>
            <input
              type="text"
              placeholder="Digite aqui..."
              className="w-full border-2 border-gray-500 rounded-[8px] h-[40px] flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 pl-3"
              value={nomedr}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNomedr(e.target.value)
              }
            />
          </div>
          <div className=" flex  w-[55%] gap-4">
            <div className="flex-1">
              <label className="block text-gray-1000 mb-2 font-bold">
                Data do atendimento
              </label>
              <div className="relative">
                <img
                  src={calendar.src}
                  alt="Ícone calendário"
                  className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="text"
                  value={date}
                  onChange={handleDateChange}
                  placeholder="dd/mm/aa"
                  maxLength={10}
                  className="w-full border-2 border-gray-500 rounded-[8px] h-[40px] flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 pl-3"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-gray-1000 mb-2 font-bold">
                Horário do atendimento
              </label>
              <div className="relative">
                <img
                  src={alarm.src}
                  alt="Ícone relógio"
                  className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="text"
                  value={time}
                  onChange={handleTimeChange}
                  placeholder="00:00"
                  maxLength={5}
                  className="w-full border-2 border-gray-500 rounded-[8px] h-[40px] flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 pl-3"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-bold">Descrição do Problema</h2>
          <textarea
            placeholder="Digite aqui..."
            className="w-full border-2 border-gray-500 rounded-[8px] p-4 h-[95px] resize-none"
            value={descricao}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDescricao(e.target.value)
            }
          />
        </div>

        {mensagem && (
          <div
            className={`mt-3 ${
              mensagem.includes("sucesso") ? "text-green-700" : "text-red-700"
            }`}
          >
            {mensagem}
          </div>
        )}

        <div className="flex justify-end mt-[30px]">
          <button
            type="submit"
            className=" py-3 px-4 text-white font-medium rounded-[24px] transition duration-200 w-[205px] h-[48px]"
            style={{ backgroundColor: "#50E678" }}
          >
            Finalizar cadastro
          </button>
        </div>
      </form>
    </div>
  );
}
