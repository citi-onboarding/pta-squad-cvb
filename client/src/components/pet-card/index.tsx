import Image from "next/image";
import { StaticImageData } from "next/image";

import { Alarm } from "@/assets";

export interface PetCardProps {
  type: "Primeira consulta" | "Vacinacao" | "Checkup" | "Retorno" | "Historico";
  nomepet: string;
  nomedono: string;
  nomedr: string;
  data: string;
  horario: string;
  imagem: StaticImageData;
}

export default function PetCard(props: PetCardProps) {
  switch (props.type) {
    case "Primeira consulta":
      return (
        <div className="w-[470px] h-[120px] bg-primeiraconsulta rounded-2xl flex items-center">
          <div className="w-[51px] h-[90px] bg-white rounded-sm ml-[24px] flex-col">
            <Image src={Alarm} alt="alarme" className="ml-[17px] mt-[12px]" />

            <div className="font-sf font-bold mt-[6px] ml-[5px]">
              {props.data}
            </div>

            <div className="font-sf font-bold ml-[5px]">{props.horario}</div>
          </div>

          <div className="ml-[20px] font-bold font-sf">{props.nomedono}</div>

          <div className="ml-[0px] font-sf">/{props.nomepet}</div>

          <div className="ml-[20px] font-sf">{props.nomedr}</div>

          <div className="flex-col flex justify-center items-center ml-auto mr-[20px]">
            <Image
              src={props.imagem}
              alt="gato"
              className="w-[70px] h-[70px] mb-[5px]"
            />

            <div className="w-[101px] h-[25px] bg-white rounded-sm font-sf text-[12px] flex justify-center items-center">
              <div className="">{props.type}</div>
            </div>
          </div>
        </div>
      );

    case "Vacinacao":
      return (
        <div className="w-[470px] h-[120px] bg-vacinacao rounded-2xl flex items-center">
          <div className="w-[51px] h-[90px] bg-white rounded-sm ml-[24px] flex-col">
            <Image src={Alarm} alt="alarme" className="ml-[17px] mt-[12px]" />

            <div className="font-sf font-bold mt-[6px] ml-[5px]">
              {props.data}
            </div>

            <div className="font-sf font-bold ml-[5px]">{props.horario}</div>
          </div>

          <div className="ml-[20px] font-bold font-sf">{props.nomedono}</div>

          <div className="ml-[0px] font-sf">/{props.nomepet}</div>

          <div className="ml-[20px] font-sf">{props.nomedr}</div>

          <div className="flex-col flex justify-center items-center ml-auto mr-[20px]">
            <Image
              src={props.imagem}
              alt="gato"
              className="w-[70px] h-[70px] mb-[5px]"
            />

            <div className="w-[101px] h-[25px] bg-white rounded-sm font-sf text-[12px] flex justify-center items-center">
              <div className="">{props.type}</div>
            </div>
          </div>
        </div>
      );

    case "Checkup":
      return (
        <div className="w-[470px] h-[120px] bg-checkup rounded-2xl flex items-center">
          <div className="w-[51px] h-[90px] bg-white rounded-sm ml-[24px] flex-col">
            <Image src={Alarm} alt="alarme" className="ml-[17px] mt-[12px]" />

            <div className="font-sf font-bold mt-[6px] ml-[5px]">
              {props.data}
            </div>

            <div className="font-sf font-bold ml-[5px]">{props.horario}</div>
          </div>

          <div className="ml-[20px] font-bold font-sf">{props.nomedono}</div>

          <div className="ml-[0px] font-sf">/{props.nomepet}</div>

          <div className="ml-[20px] font-sf">{props.nomedr}</div>

          <div className="flex-col flex justify-center items-center ml-auto mr-[20px]">
            <Image
              src={props.imagem}
              alt="gato"
              className="w-[70px] h-[70px] mb-[5px]"
            />

            <div className="w-[101px] h-[25px] bg-white rounded-sm font-sf text-[12px] flex justify-center items-center">
              <div className="">{props.type}</div>
            </div>
          </div>
        </div>
      );

    case "Retorno":
      return (
        <div className="w-[470px] h-[120px] bg-retorno rounded-2xl flex items-center">
          <div className="w-[51px] h-[90px] bg-white rounded-sm ml-[24px] flex-col">
            <Image src={Alarm} alt="alarme" className="ml-[17px] mt-[12px]" />

            <div className="font-sf font-bold mt-[6px] ml-[5px]">
              {props.data}
            </div>

            <div className="font-sf font-bold ml-[5px]">{props.horario}</div>
          </div>

          <div className="ml-[20px] font-bold font-sf">{props.nomedono}</div>

          <div className="ml-[0px] font-sf">/{props.nomepet}</div>

          <div className="ml-[20px] font-sf">{props.nomedr}</div>

          <div className="flex-col flex justify-center items-center ml-auto mr-[20px]">
            <Image
              src={props.imagem}
              alt="gato"
              className="w-[70px] h-[70px] mb-[5px]"
            />

            <div className="w-[470px] h-[120px] bg-white rounded-sm font-sf text-[12px] flex justify-center items-center">
              <div className="">{props.type}</div>
            </div>
          </div>
        </div>
      );

    case "Historico":
      return (
        <div className="w-[470px] h-[120px] bg-historico rounded-2xl flex items-center">
          <div className="w-[51px] h-[90px] bg-white rounded-sm ml-[24px] flex-col">
            <Image src={Alarm} alt="alarme" className="ml-[17px] mt-[12px]" />

            <div className="font-sf font-bold mt-[6px] ml-[5px]">
              {props.data}
            </div>

            <div className="font-sf font-bold ml-[5px]">{props.horario}</div>
          </div>

          <div className="ml-[20px] font-bold font-sf">{props.nomedono}</div>

          <div className="ml-[0px] font-sf">/{props.nomepet}</div>

          <div className="ml-[20px] font-sf">{props.nomedr}</div>

          <div className="flex-col flex justify-center items-center ml-auto mr-[20px]">
            <Image
              src={props.imagem}
              alt="gato"
              className="w-[70px] h-[70px] mb-[5px]"
            />

            <div className="w-[101px] h-[25px] bg-white rounded-sm font-sf text-[12px] flex justify-center items-center">
              <div className="">{props.type}</div>
            </div>
          </div>
        </div>
      );
  }
}
