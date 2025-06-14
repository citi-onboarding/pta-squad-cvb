import React from 'react';

interface CadastroProps {
  onClose: () => void;
}

export default function CardEmail({ onClose }: CadastroProps) {
  return (
    <div className="bg-white w-96 h-auto shadow-xl rounded-3xl p-12 flex-col items-center justify-center relative">
      <div className="flex items-center justify-center mb-6">
        <img src="/img/CITiPet.png" alt="Logo CITi Pet" className="h-auto justify-center" />
      </div>
      <button 
        onClick={onClose}
        className="w-6 h-6 rounded text-xl font-light top-4 right-4 absolute hover:bg-gray-300 "
      >
        &#10005;
      </button>
      <h1 className="text-center text-base w-full mb-6">
        <strong>Cadastro finalizado!</strong> Envie o comprovante para o <strong>tutor</strong>
      </h1>
      <label className="text-base font-bold mb-6">Email</label>
      <input type="email" placeholder="Digite aqui..." className="w-full h-auto p-3 border border-black rounded-md mb-6"/>
      <button type="submit" className="w-full h-auto bg-green-400 hover:bg-green-500 text-white text-base font-semibold py-3 rounded-full shadow-md transition-colors">
        Enviar
      </button>

    </div>
  )

}
