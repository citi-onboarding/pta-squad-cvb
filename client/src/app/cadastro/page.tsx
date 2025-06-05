"use client";
import Image from "next/image";
import TopBar from "@/components/topbar/index";
import { useState } from "react";
import { LogoCITi } from "@/assets";
import { Buttongroup, Logopet } from "@/assets";
import { SetaVoltar } from "@/assets";
import {
  cow,
  cachorro,
  horse,
  pig,
  sheep,
  calendar,
  alarm,
  cat,
} from "@/assets";
import CardEmail from "@/components/cadastro";



const formattimeInput = (tempoDigitado: string) => {
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

const formatDateInput = (valorDigitado: string) => {
  // 1. Remove TUDO que não for número (deixa só dígitos)
  let apenasNumeros = "";
  for (let char of valorDigitado) {
    if ("0123456789".includes(char)) {
      apenasNumeros += char;
    }
  }

  // 2. Limita a 8 caracteres (DDMMYYYY)
  if (apenasNumeros.length > 8) {
    apenasNumeros = apenasNumeros.slice(0, 8);
  }

  // 3. Formata com barras
  let parteDia = apenasNumeros.slice(0, 2);
  let parteMes = apenasNumeros.slice(2, 4);
  let parteAno = apenasNumeros.slice(4, 8);

  // Monta o resultado conforme o tamanho
  if (apenasNumeros.length > 4) {
    return `${parteDia}/${parteMes}/${parteAno}`;
  } else if (apenasNumeros.length > 2) {
    return `${parteDia}/${parteMes}`;
  } else {
    return parteDia;
  }
};

export default function TelaCadastro() {
  const [selecionado, setSelecionado] = useState("");
  const [date, setDate] = useState("");
  const handleDateChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    setDate(formatDateInput(input.target.value));
  };
  const [showCadastroPopup, setShowCadastroPopup] = useState(false);

  const [time, setTime] = useState(""); // Novo estado para o horário

  const handleTimeChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    setTime(formattimeInput(input.target.value));
  };
  return (
    <div className="flex flex-col items-start  min-h-screen bg-white">
      <div className="w-full">
        <TopBar />
      </div>

      <div className=" flex flex-col gap-[10px] ml-[135px]  mt-[35px] mb-[60px] w-[calc(100%-135px-150px)] ">
        <div className="flex flex-row gap-[8px] items-center ">
          <button>
            <Image
              src={SetaVoltar}
              alt="seta de voltar"
              className="w-[32px] h-[27px]"
            />
          </button>
          <h1 className="text-[36px] font-bold">Cadastro</h1>
        </div>

        <div className="flex flex-row gap-4 mt-[10px] ">
          {" "}
          {/* nome do paciente e tutor aqui */}
          <div className="flex flex-col w-full">
            <h2 className="font-bold">Nome de Paciente</h2>
            <input
              type="text"
              placeholder="Digite aqui..."
              className="w-full border-2 border-gray-500 rounded-[8px] p-4 h-[40px] flex items-center"
            />
          </div>
          <div className="flex flex-col w-full">
            <h2 className="font-bold">Nome do Tutor</h2>
            <input
              type="text"
              placeholder="Digite aqui..."
              className="w-full border-2 border-gray-500 rounded-[8px] p-4 h-[40px] flex items-center"
            />
          </div>
        </div>

        <div className="flex-col mt-[8px]">
          {" "}
          {/* imagens do animais com hover  */}
          <h2 className="font-bold">Qual é a espécie do paciente?</h2>
          <div className="mt-[15px] flex flex-row gap-[35px]">
            {[
              { id: "ovelha", src: sheep, alt: "imagem de ovelha" },
              { id: "gato", src: cat, alt: "imagem de gato" },
              { id: "porco", src: pig, alt: "imagem de porco" },
              { id: "boi", src: cow, alt: "imagem de boi" },
              { id: "cavalo", src: horse, alt: "imagem de cavalo" },
              { id: "cachorro", src: cachorro, alt: "imagem de cachorro" },
            ].map((img) => (
              <div
                key={img.id}
                onClick={() => setSelecionado(img.id)}
                className={`h-[120px] w-[120px] rounded-lg cursor-pointer flex items-center justify-center ${
                  selecionado === img.id ? "bg-gray-300" : ""
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

        <div className="flex flex-row gap-4 mt-[10px] ">
          {" "}
          {/*barras de idade e tipo de consulta */}
          <div className="flex flex-col w-full">
            <h2 className="font-bold">Idade do Paciente</h2>
            <input
              type="text"
              placeholder="Digite aqui..."
              className="w-full border-2 border-gray-500 rounded-[8px] p-4 h-[40px] flex items-center"
            />
          </div>
          <div className="flex flex-col w-full">
            <h2 className="font-bold">Tipo de Consulta</h2>
            <select
              className="w-full   border-2 border-gray-500 rounded-[8px]  h-[40px] flex items-center
                        focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 pl-3 "
            >
              <option>Selecione aqui...</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4 mb-6 mt-[8px]">
          {" "}
          {/* terceira linha com médio, horário e data */}
          {/* Médico Responsável */}
          <div className="w-[45%]">
            <label className="block text-gray-1000 mb-2 font-bold">
              Médico Responsável
            </label>
            <input
              type="text"
              placeholder="Digite aqui..."
              className="w-full   border-2 border-gray-500 rounded-[8px]  h-[40px] flex items-center
                            focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 pl-3"
            />
          </div>
          {/* Data + horário */}
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
                  onChange={
                    handleDateChange
                  } /* quando tiver uma mudança = digitação ele  */
                  placeholder="dd/mm/aa"
                  maxLength={10}
                  className="w-full   border-2 border-gray-500 rounded-[8px]  h-[40px] flex items-center
                            focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 pl-3"
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
                  maxLength={5} // Permite "00:00" (5 caracteres)
                  className="w-full border-2 border-gray-500 rounded-[8px] h-[40px] flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 pl-3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Descrição do problema */}
        <div>
          <h2 className="font-bold">Descrição do Problema</h2>
          <textarea
            placeholder="Digite aqui..."
            className="w-full border-2 border-gray-500 rounded-[8px] p-4 h-[95px] resize-none"
          />
        </div>

        {/* botão de finalização */}
        <div className="flex justify-end mt-[30px]">
          <button
            onClick={() => setShowCadastroPopup(true)}
            className=" py-3 px-4 text-white font-medium rounded-[24px] transition duration-200 w-[205px] h-[48px]"
            style={{ backgroundColor: "#50E678" }}
          >
            Finalizar cadastro
          </button>

          {showCadastroPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">                       
              <CardEmail onClose={() => setShowCadastroPopup(false)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
