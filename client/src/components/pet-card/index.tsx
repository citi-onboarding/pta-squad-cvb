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
        <view className="w-[495px] h-[135px] bg-primeiraconsulta rounded-2xl flex items-center">
          <view className="w-[51px] h-[90px] bg-white rounded-sm ml-[24px] flex-col">
            <Image src={Alarm} alt="alarme" className="ml-[17px] mt-[12px]" />

            <view className="font-sf font-bold mt-[6px] ml-[5px]">
              {props.data}
            </view>

            <view className="font-sf font-bold ml-[5px]">{props.horario}</view>
          </view>

          <view className="ml-[20px] font-bold font-sf">{props.nomedono}</view>

          <view className="ml-[0px] font-sf">/{props.nomepet}</view>

          <view className="ml-[20px] font-sf">{props.nomedr}</view>

          <view className="flex-col flex justify-center items-center ml-auto mr-[20px]">
            <Image
              src={props.imagem}
              alt="gato"
              className="w-[70px] h-[70px] mb-[5px]"
            />

            <view className="w-[101px] h-[25px] bg-white rounded-sm font-sf text-[12px] flex justify-center items-center">
              <view className="">{props.type}</view>
            </view>
          </view>
        </view>
      );

    case "Vacinacao":
      return (
        <view className="w-[495px] h-[135px] bg-vacinacao rounded-2xl flex items-center">
          <view className="w-[51px] h-[90px] bg-white rounded-sm ml-[24px] flex-col">
            <Image src={Alarm} alt="alarme" className="ml-[17px] mt-[12px]" />

            <view className="font-sf font-bold mt-[6px] ml-[5px]">
              {props.data}
            </view>

            <view className="font-sf font-bold ml-[5px]">{props.horario}</view>
          </view>

          <view className="ml-[20px] font-bold font-sf">{props.nomedono}</view>

          <view className="ml-[0px] font-sf">/{props.nomepet}</view>

          <view className="ml-[20px] font-sf">{props.nomedr}</view>

          <view className="flex-col flex justify-center items-center ml-auto mr-[20px]">
            <Image
              src={props.imagem}
              alt="gato"
              className="w-[70px] h-[70px] mb-[5px]"
            />

            <view className="w-[101px] h-[25px] bg-white rounded-sm font-sf text-[12px] flex justify-center items-center">
              <view className="">{props.type}</view>
            </view>
          </view>
        </view>
      );

    case "Checkup":
      return (
        <view className="w-[495px] h-[135px] bg-checkup rounded-2xl flex items-center">
          <view className="w-[51px] h-[90px] bg-white rounded-sm ml-[24px] flex-col">
            <Image src={Alarm} alt="alarme" className="ml-[17px] mt-[12px]" />

            <view className="font-sf font-bold mt-[6px] ml-[5px]">
              {props.data}
            </view>

            <view className="font-sf font-bold ml-[5px]">{props.horario}</view>
          </view>

          <view className="ml-[20px] font-bold font-sf">{props.nomedono}</view>

          <view className="ml-[0px] font-sf">/{props.nomepet}</view>

          <view className="ml-[20px] font-sf">{props.nomedr}</view>

          <view className="flex-col flex justify-center items-center ml-auto mr-[20px]">
            <Image
              src={props.imagem}
              alt="gato"
              className="w-[70px] h-[70px] mb-[5px]"
            />

            <view className="w-[101px] h-[25px] bg-white rounded-sm font-sf text-[12px] flex justify-center items-center">
              <view className="">{props.type}</view>
            </view>
          </view>
        </view>
      );

    case "Retorno":
      return (
        <view className="w-[495px] h-[135px] bg-retorno rounded-2xl flex items-center">
          <view className="w-[51px] h-[90px] bg-white rounded-sm ml-[24px] flex-col">
            <Image src={Alarm} alt="alarme" className="ml-[17px] mt-[12px]" />

            <view className="font-sf font-bold mt-[6px] ml-[5px]">
              {props.data}
            </view>

            <view className="font-sf font-bold ml-[5px]">{props.horario}</view>
          </view>

          <view className="ml-[20px] font-bold font-sf">{props.nomedono}</view>

          <view className="ml-[0px] font-sf">/{props.nomepet}</view>

          <view className="ml-[20px] font-sf">{props.nomedr}</view>

          <view className="flex-col flex justify-center items-center ml-auto mr-[20px]">
            <Image
              src={props.imagem}
              alt="gato"
              className="w-[70px] h-[70px] mb-[5px]"
            />

            <view className="w-[101px] h-[25px] bg-white rounded-sm font-sf text-[12px] flex justify-center items-center">
              <view className="">{props.type}</view>
            </view>
          </view>
        </view>
      );

    case "Historico":
      return (
        <view className="w-[495px] h-[135px] bg-historico rounded-2xl flex items-center">
          <view className="w-[51px] h-[90px] bg-white rounded-sm ml-[24px] flex-col">
            <Image src={Alarm} alt="alarme" className="ml-[17px] mt-[12px]" />

            <view className="font-sf font-bold mt-[6px] ml-[5px]">
              {props.data}
            </view>

            <view className="font-sf font-bold ml-[5px]">{props.horario}</view>
          </view>

          <view className="ml-[20px] font-bold font-sf">{props.nomedono}</view>

          <view className="ml-[0px] font-sf">/{props.nomepet}</view>

          <view className="ml-[20px] font-sf">{props.nomedr}</view>

          <view className="flex-col flex justify-center items-center ml-auto mr-[20px]">
            <Image
              src={props.imagem}
              alt="gato"
              className="w-[70px] h-[70px] mb-[5px]"
            />

            <view className="w-[101px] h-[25px] bg-white rounded-sm font-sf text-[12px] flex justify-center items-center">
              <view className="">{props.type}</view>
            </view>
          </view>
        </view>
      );
  }
}
