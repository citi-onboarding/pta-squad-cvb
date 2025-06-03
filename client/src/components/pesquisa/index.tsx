import React from 'react';

export default function Pesquisa() {
    return (
        <div className="w-full h-auto bg-white p-12">
            <div className="flex mb-6">
                <button className=" px-4 py-1 hover:bg-gray-50 font-bold text-2x1 font-stretch-ultra-condensed">
                    <img src="/img/arrow.png" className="w-4 h-6 object-contain" />
                </button>
                <h1 className="text-5xl font-bold ">Atendimento</h1>
            </div>
            <label className="text-2xl font-medium mb-7">Qual é o médico?</label>
            <div className="flex flex-center items-start">
                <input type="email" placeholder=" Pesquise aqui... " className="w-full h-12 p-3 border border-black rounded-md mb-6 mr-5" />
                <button type="submit" className="w-fit h-fit bg-purple-700 hover:bg-purple-900 text-white text-base font-bold px-10 py-3 rounded-full shadow-md transition-colors">Buscar</button>
            </div>
        </div>






    )
}
