"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TopBar from "@/components/topbar";
import ConsultaCard from "@/components/ConsultaCard";

export default function DetalhesConsultaPage() {
  // Pega o id da URL
  const params = useParams();
  const id = params?.id as string;

  // Estado para consulta e carregamento
  const [consulta, setConsulta] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchConsulta() {
      setLoading(true);
      try {
        // Faça o fetch no seu backend para pegar a consulta pelo id
        const res = await fetch(`http://localhost:3001/Consulta/${id}`);
        const data = await res.json();
        // Aqui supõe que a resposta é { values: [ { ... } ] }
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

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <div className="flex-1 flex justify-center items-center">
        <ConsultaCard
          key={id}
          nomepet={consulta.nomepet}
          idade={consulta.idade}
          nomedono={consulta.nomedono}
          nomedr={consulta.nomedr}
          descricao={consulta.descricao}
          tipodaconsulta={consulta.tipodaconsulta}
          data={consulta.data}
          horario={consulta.horario}
          tipopet={consulta.tipopet}
        />
      </div>
    </div>
  );
}
