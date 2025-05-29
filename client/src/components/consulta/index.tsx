
"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { LogotipoSVG } from "@/assets";
import { pataSVG } from "@/assets";
import { calendar } from "@/assets";
import { alarm } from "@/assets";
import { Botaoclose } from "@/assets";


const formattimeInput =(tempoDigitado:string) => {


 let apenasNumeros = '';
  for (let char of tempoDigitado) {
    if ('0123456789'.includes(char)) {
      apenasNumeros += char;
    }
}


    if(apenasNumeros.length > 4){
        apenasNumeros = apenasNumeros.slice(0,4);
    }


    if (apenasNumeros.length > 2){
        return `${apenasNumeros.slice(0,2)}:${apenasNumeros.slice(2)}`;
    }else{
        return apenasNumeros;
    }
  };




const formatDateInput = (valorDigitado:string) => {
  // 1. Remove TUDO que não for número (deixa só dígitos)
  let apenasNumeros = '';
  for (let char of valorDigitado) {
    if ('0123456789'.includes(char)) {
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




const ConsultaForm = () => {
  const [date, setDate] = useState(''); {/* date é onde eu guardo o que vai ser digitado, setDate permite setar date e useState inicia a caixa como vazia */}
  const handleDateChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    setDate(formatDateInput(input.target.value));
  };


  const [time, setTime] = useState(''); // Novo estado para o horário


  const handleTimeChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    setTime(formattimeInput(input.target.value));
    };


  return (
    <div className="relative w-[800px] mx-auto p-[45px] bg-white rounded-[20px] border border-gray-200 shadow-sm">
      {/* parte de cima*/}


      <div className="absolute top-6 right-6 p-4 flex items-center justify-center">
        <Image
          src={Botaoclose.src}
          alt = "Ícone"
          width ={24}
          height={24}
          className="rounded-[5px] block"
        />
      </div>




      <div className="flex items-center flex justify-center ">
        <img src={LogotipoSVG.src} alt="logo do citi" className="w-[150px] h-[100px] -mr-5"/>
        <img src={pataSVG.src} alt="logo da pata com coração" className="w-[75px] h-[50px] mt-4"/>
      </div>
     
      <p className="text-gray-700 mb-6 font-medium text-[16px] text-center">
        <strong>O pet já está cadastrado no sistema!</strong> Preencha os dados da <strong>consulta</strong>
      </p>


      {/* Linha 1: Tipo de Consulta + Médico Responsável */}
      <div className="flex gap-4 mb-6">
        {/* Tipo de Consulta */}
        <div className="flex-1">
          <label className="block text-gray-1000 font-medium mb-2">Tipo de consulta</label>
          <select className="w-full p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400">
            <option>Selecione aqui</option>
          </select>
        </div>


        {/* Médico Responsável */}
        <div className="flex-1">
          <label className="block text-gray-1000 font-medium mb-2">Médico Responsável</label>
          <input
            type="text"
            placeholder="Digite aqui..."
            className="w-full p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>


      {/* Linha 2: Data + Horário */}
      <div className="flex gap-4 mb-6">
        {/* Data do Atendimento */}
        <div className="flex-1">
          <label className="block text-gray-1000 font-medium mb-2">Data do atendimento</label>
          <div className="relative">
            <img
              src={calendar.src}
              alt="Ícone calendário"
              className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2"
            />
            <input
              type="text"
              value={date}
              onChange={handleDateChange} /* quando tiver uma mudança = digitação ele  */
              placeholder="dd/mm/aa"
              maxLength={10}
              className="w-full p-3 pl-5 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>


        {/* Horário do Atendimento */}
        <div className="flex-1">
          <label className="block text-gray-1000 font-medium mb-2">Horário do atendimento</label>
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
              className="w-full p-3 pl-5 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>


      {/* Divisor */}
      <div className="border-t border-gray-200 my-6"></div>


      {/* Botão Finalizar Cadastro */}
      <button
        className="w-full py-3 px-4 text-white font-medium rounded-[20px] transition duration-200"
        style={{ backgroundColor: '#50E678' }}
      >
        Finalizar cadastro
      </button>




    </div>
  );
};

export default ConsultaForm;
