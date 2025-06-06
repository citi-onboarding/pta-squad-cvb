"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TopBar from "@/components/topbar";
import ConsultaCard from "@/components/ConsultaCard";
import HistoricoCard from "@/components/historico-consulta";

export default function DetalhesConsultaPage() {
  const params = useParams();
  const id = params?.id as string;

  const [consulta, setConsulta] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchConsulta() {
      setLoading(true);
      try {
        // Use o endpoint real do seu backend!
        const res = await fetch(`http://localhost:3001/Consulta/${id}`);
        const data = await res.json();
        setConsulta(data.values[0]);
      } catch (e) {
        setConsulta(null);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchConsulta();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <div className="flex-1 flex items-center justify-center text-xl">
          Carregando...
        </div>
      </div>
    );
  }

  if (!consulta) {
    return (
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <div className="flex-1 flex items-center justify-center text-xl">
          Consulta não encontrada.
        </div>
      </div>
    );
  }

  // Aqui está adaptado ao seu modelo:
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full">
        <TopBar />
      </div>
      <div className="flex flex-1">
        <div className="flex-1 flex justify-center p-8 overflow-auto ">
          <ConsultaCard
            nomepet={consulta.nomepet}
            nomedono={consulta.nomedono}
            nomedr={consulta.nomedr}
            idade={consulta.idade}
            tipodaconsulta={consulta.tipodaconsulta}
            data={consulta.data}
            horario={consulta.horario}
            descricao={consulta.descricao}
            tipopet={consulta.tipopet}
          />
        </div>

        <div className="flex-1 p-8 border-gray-200 mt-20">
          {/* Coloque histórico se quiser */}
        </div>
      </div>
    </div>
  );
}
