import React from "react";
import { LogotipoSVG } from "@/assets";
import { pataSVG } from "@/assets";
import { calendar } from "@/assets";
import { alarm } from "@/assets";
const ConsultaForm = () => {
  return (
    <div className="w-[800px] mx-auto p-[45px] bg-white rounded-[20px] border border-gray-200 shadow-sm">
      {/* parte de cima*/}
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
              placeholder="dd/mm/aa"
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
              placeholder="00:00"
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