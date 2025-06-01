import React from "react"; 
import Image from "next/image"; 
import { arrow_back } from "@/assets";




export interface HistoricoCardProps {
  type: "Primeira consulta" | "Vacinacao" | "Checkup" | "Retorno" | "Historico";
  data: string; // Formato "DD/MM"
  horario: string; // Formato "HH:MM"
  medico: string;
}

export default function HistoricoCard({
  type,
  data,
  horario,
  medico,
}: HistoricoCardProps) {
  return (
    
    <div className="flex items-center justify-between p-4  bg-[#f0f0f0] rounded-[16px] border border-gray-200 shadow-sm
     hover:shadow-md transition-shadow w-[510px] h-[82px]">
      <div className="flex items-center gap-8">
        {/* Data */}
        <div className="flex flex-col items-center w-[51px] h-[50px] bg-white rounded-[4px] mr-4">
          <span className="text-sm font-bold text-gray-800">{data}</span>
          <span className="text-sm  font-bold text-gray-800 mt-1">{horario}</span>
        </div>
        
        
        
        {/* Detalhes */}
        <div className="flex flex-col mr-8">
          <span className="font-medium text-black font-bold ">{type}</span>
        </div>

        <div>
            <span className=" text-sm font-normal text-gray-900">Dr. {medico}</span>
        </div>
      </div>
      
      {/* Ícone de seta */}
      <Image 
        src={arrow_back} 
        alt="Seta" 
        width={16}
        height={16}
        className="text-gray-400"
      />
    </div>
    
  );
}