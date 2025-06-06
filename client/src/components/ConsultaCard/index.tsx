import React from 'react';
import Link from 'next/link';

export default function ConsultaCard() {
  return (
    <div className="w-full max-w-[650px] mx-auto bg-white p-12 rounded-xl ">
      <div className="flex mb-6">
        <Link
          href={"/"}
        >
          <button className=" px-4 py-1 hover:bg-gray-50 font-bold text-2x1 font-stretch-ultra-condensed">
            <img src="/img/arrow.png" className="w-4 h-6 object-contain" />
          </button>
        </Link>
        
        <h1 className="text-5xl font-bold ">Detalhes da Consulta</h1>
      </div>


      <h2 className="text-2xl font-bold">Paciente</h2> 
      <div className="flex items-center gap-6 mb-12 mt-8 ">
        <img
          src="/img/gato.png"
          className="w-1/2 h-3/5 object-contain"
        />
        <div>
          <h3 className="text-2xl font-bold">Luna</h3>
          <p className="text-2xl font-light">5 anos</p>
          <div className="mt-4">
            <p className="text-base text-gray-700">Lucas Gomes</p>
            <p className="text-base text-gray-700">Dr. José Carlos</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-1">Descrição do problema:</h3>
        <p className="text-base text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries
        </p>
      </div>

      <div className="mb-8">
        <span className="font-bold">Tipo de consulta: </span>
        <span className="inline-block bg-sky-200 text-black text-base font-light px-4 py-1 rounded-sm ml-2">
          Vacinação
        </span>
      </div>

      <div className="border border-stone-300 rounded-3xl p-6 text-center">
        <p className="mb-3 text-base font-bold">Deseja realizar outra consulta?</p>
        <button className="w-full text-base bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium shadow-md transition">
          &#9745; Agendamento
        </button>
      </div>
    </div>
  );
}
