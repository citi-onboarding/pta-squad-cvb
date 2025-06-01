import React  from "react";
import HistoricoCard from "@/components/historico-consulta";

export default function HistoricoConsultasPage() {
  // Dados mockados diretamente no componente da página
  const consultas = [
    {
      type: "Primeira consulta" as const,
      data: "18/02",
      horario: "14:00",
      medico: "José Carlos"
    },
    {
      type: "Primeira consulta" as const,
      data: "20/02",
      horario: "10:30",
      medico: "Ana Silva"
    },
    {
      type: "Primeira consulta" as const,
      data: "25/02",
      horario: "09:15",
      medico: "Carlos Andrade"
    },
    {
      type: "Primeira consulta" as const,
      data: "18/02",
      horario: "14:00",
      medico: "José Carlos"
    },
 
  ];

  return (
    <div className="w-[558px] mx-auto">
        <h2 className="text-2xl font-bold mb-6 w-[558px] text-left">
        Histórico de Consulta
        </h2>
        <div className=" h-[450px]  p-5 space-y-6 border border-dashed border-gray-300 rounded-[30px] flex flex-col items-center overflow-y-auto ">
     
            {consultas.map((consulta, index) => (
                <HistoricoCard
                key={index}
                type={consulta.type}
                data={consulta.data}
                horario={consulta.horario}
                medico={consulta.medico}
                />
            ))}
        </div>
    </div>
    
  );
}
