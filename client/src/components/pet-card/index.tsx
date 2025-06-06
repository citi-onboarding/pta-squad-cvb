import Image from "next/image";
import { StaticImageData } from "next/image";
import { Alarm } from "@/assets";
import Link from "next/link";

export interface PetCardProps {
  type: "Primeira consulta" | "Vacinacao" | "Checkup" | "Retorno" | "Historico";
  nomepet: string;
  nomedono: string;
  nomedr: string;
  data: string;
  horario: string;
  imagem: StaticImageData;
  idDaConsulta: number;
  onClick?: () => void;
  idadePet: number;
}

export default function PetCard(props: PetCardProps) {
  const handleClick = () => {
    console.log("Card clicado - Dados:", {
      pet: props.nomepet,
      dono: props.nomedono,
      tipo: props.type
    });
    
    if (props.onClick) {
      props.onClick();
    }
  };

  // Cor de fundo baseada no tipo
  const bgClasses = {
    "Primeira consulta": "bg-primeiraconsulta",
    "Vacinacao": "bg-vacinacao",
    "Checkup": "bg-checkup",
    "Retorno": "bg-retorno",
    "Historico": "bg-historico"
  };

  return (
    <Link
      href={`/detalhes-consulta/${props.idDaConsulta}`} 
      className={`w-[470px] h-[120px] rounded-2xl flex items-center ${bgClasses[props.type]}`}
    >
      <div className="w-[51px] h-[90px] bg-white rounded-sm ml-[24px] flex-col">
        <Image src={Alarm} alt="alarme" className="ml-[17px] mt-[12px]" />
        <div className="font-sf font-bold mt-[6px] ml-[5px]">{props.data}</div>
        <div className="font-sf font-bold ml-[5px]">{props.horario}</div>
      </div>

      <div className="ml-[20px] font-bold font-sf">{props.nomedono}</div>
      <div className="ml-[0px] font-sf">/{props.nomepet}</div>
      <div className="ml-[20px] font-sf">{props.nomedr}</div>

      <div className="flex-col flex justify-center items-center ml-auto mr-[20px]">
        <Image
          src={props.imagem}
          alt="imagem do animal"
          className="w-[70px] h-[70px] mb-[5px]"
        />
        <div className="w-[101px] h-[25px] bg-white rounded-sm font-sf text-[12px] flex justify-center items-center">
          <div>{props.type}</div>
        </div>
      </div>
    </Link>
  );
}