import React from "react";

type ConsultaCardProps = {
  nomepet: string;
  idade: string;
  nomedono: string;
  nomedr: string;
  descricao?: string;
  tipodaconsulta: string;
  data: string;
  horario: string;
  tipopet: string;
};

export default function ConsultaCard(props: ConsultaCardProps) {
  return (
    <div className="w-full max-w-[600px] mx-auto bg-white p-12 rounded-xl shadow-lg shadow-xl">
      <div className="flex mb-6">
        <button className=" px-4 py-1 hover:bg-gray-50 font-bold text-2x1 font-stretch-ultra-condensed">
          <img src="/img/arrow.png" className="w-4 h-6 object-contain" />
        </button>
        <h1 className="text-5xl font-bold ">Detalhes da Consulta</h1>
      </div>

      <h2 className="text-2xl font-bold">Paciente</h2>
      <div className="flex items-center gap-6 mb-12 mt-8 ">
        {/* Mostra a imagem baseada no tipo do pet (opcional, pode adaptar!) */}
        <img
          src={`/img/${props.tipopet}.png`}
          className="w-1/2 h-3/5 object-contain"
          alt={`imagem de ${props.tipopet}`}
        />
        <div>
          <h3 className="text-2xl font-bold">{props.nomepet}</h3>
          <p className="text-2xl font-light">{props.idade} anos</p>
          <div className="mt-4">
            <p className="text-base text-gray-700">{props.nomedono}</p>
            <p className="text-base text-gray-700">Dr. {props.nomedr}</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-1">Descrição do problema:</h3>
        <p className="text-base text-gray-700">
          {props.descricao || "Nenhuma descrição informada."}
        </p>
      </div>

      <div className="mb-8">
        <span className="font-bold">Tipo de consulta: </span>
        <span className="inline-block bg-sky-200 text-black text-base font-light px-4 py-1 rounded-sm ml-2">
          {props.tipodaconsulta}
        </span>
      </div>

      <div className="mb-8">
        <span className="font-bold">Data: </span>
        <span>{props.data}</span>
        <span className="ml-6 font-bold">Horário: </span>
        <span>{props.horario}</span>
      </div>

      <div className="border border-stone-300 rounded-3xl p-6 text-center">
        <p className="mb-3 text-base font-bold">
          Deseja realizar outra consulta?
        </p>
        <button className="w-full text-base bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium shadow-md transition">
          &#9745; Agendamento
        </button>
      </div>
    </div>
  );
}
