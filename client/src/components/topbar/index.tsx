import React from "react";
import Image from "next/image";
import { Logopet, Buttongroup } from "@/assets";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full h-[80px] flex justify-between items-center py-5 px-12 border-b border-[#d9d9d9] bg-white mx-auto">
      {/* Logo à esquerda */}
      <div className="flex-none">
        <Image
          src={Logopet} 
          alt="logo do citi pet"
          className="w-[140px] h-[50px] object-contain"
        />
      </div>

      {/* Botões centrais */}
      <div className="flex-1 flex justify-center gap-8 text-center">
        <Link
          href={"/"}
        >
          <ButtonWithHover label="Atendimento" />
        </Link>


        <Link
          href={"/cadastro"}
        >
          <ButtonWithHover label="Cadastro"/>
        </Link>
        
      </div>

      {/* Logo à direita */}
      <div className="flex-none">
        <Image
          src={Buttongroup}
          alt="feito com amor pelo Citi"
          className="w-[150px] h-[16px] object-contain"
        />
      </div>
    </div>
  );
};

const ButtonWithHover = ({ label }: { label: string }) => (
  <button className="relative group pb-1 px-2">
    <span className=" text-xs font-medium text-gray-700 transition-colors group-hover:text-gray-900">
      {label}
    </span>
    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
  </button>
);

export default TopBar; 
