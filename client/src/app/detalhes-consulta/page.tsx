import React  from "react";
import HistoricoCard from "@/components/historico-consulta";
import ConsultaCard from "@/components/ConsultaCard";
import TopBar from "@/components/topbar";

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
    
  <div className="flex flex-col min-h-screen">
  
  <div className="w-full">
    <TopBar />
  </div>

  
  <div className="flex flex-1">
    
    <div className="flex-1 flex justify-center p-8 overflow-auto ">
      <ConsultaCard />
    </div>

   
    <div className="flex-1 p-8   border-gray-200 mt-20">
      <div className="w-full max-w-[558px] mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-left">
          Histórico de Consulta
        </h2>
        <div className="h-[450px] p-5 space-y-6 border border-dashed border-gray-300 rounded-[30px] flex flex-col items-center overflow-y-auto">
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
    </div>
  </div>
</div>
    
    
  );
}