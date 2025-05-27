"use client";
import { useState } from "react";

type BtFiltroProps = {
  ativo: string;
  setAtivo: (valor: string) => void;
};

export default function BtFiltro({ ativo, setAtivo }: BtFiltroProps) {
  return (
    <div className="flex flex-1 flex-col h-full justify-around items-center bg-black">
      <div className="w-[243px] h-[58px] bg-btfiltro rounded-xl flex items-center p-1">
        <button
          onClick={() => setAtivo("agendamento")}
          className={`flex-1 rounded-xl transition-all w-[92px] h-[42px] font-sf ${
            ativo === "agendamento" ? "bg-white" : "bg-btfiltro"
          }`}
        >
          agendamento
        </button>

        <button
          onClick={() => setAtivo("Historico")}
          className={`flex-1 rounded-xl transition-all w-[92px] h-[42px] font-sf ${
            ativo === "Historico" ? "bg-white" : "bg-btfiltro"
          }`}
        >
          historico
        </button>
      </div>
    </div>
  );
}
