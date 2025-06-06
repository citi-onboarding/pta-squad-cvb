import { View, Text, Image, ImageSourcePropType } from "react-native";
import { SvgProps } from "react-native-svg";
import { FC } from "react";
import { alarmmobilepng } from "@assets";

export interface PetCardmbProps {
  type: "Primeira consulta" | "Vacinacao" | "Checkup" | "Retorno" | "Historico";
  nomepet: string;
  nomedono: string;
  nomedr: string;
  data: string;
  horario: string;
  imagem: FC<SvgProps>;
}

export default function PetCard(props: PetCardmbProps) {
  switch (props.type) {
    case "Primeira consulta":
      return (
        <View
          className={`w-[358px] h-[122px] rounded-2xl flex-row items-center bg-primeiraconsulta
      }`}
        >
          <View className="w-[51px] h-[90px] bg-white rounded-sm ml-[24px] items-center">
            <Image source={alarmmobilepng} className="w-6 h-6 mt-[12px]" />
            <Text className="font-bold mt-[6px] text-center">{props.data}</Text>
            <Text className="font-bold text-center">{props.horario}</Text>
          </View>
          <View className="flex-col ml-[15px]">
            <View className="flex-row mb-[6px]">
              <Text className="ml-[20px] font-bold">{props.nomedono}</Text>
              <Text className="ml-[0px]">/{props.nomepet}</Text>
            </View>
            <Text className="ml-[20px]">{props.nomedr}</Text>
          </View>
          <View className="flex-col justify-center items-center ml-auto mr-[20px]">
            {typeof props.imagem === "function" ? (
              // se for um componente SVG, renderiza ele com tamanho ajustado
              <props.imagem
                width={70}
                height={70}
                style={{ marginBottom: 5 }}
              />
            ) : (
              // se for uma imagem estática, renderiza com <Image>
              <Image
                source={props.imagem}
                className="w-[70px] h-[70px] mb-[5px]"
              />
            )}
            <View className="w-[101px] h-[25px] bg-white rounded-sm text-[12px] justify-center items-center">
              <Text className="text-[12px] text-center font-sf">
                {props.type}
              </Text>
            </View>
          </View>
        </View>
      );
    case "Vacinacao":
      return (
        <View
          className={`w-[358px] h-[122px] rounded-2xl flex-row items-center bg-vacinacao
      }`}
        >
          <View className="w-[51px] h-[90px] bg-white rounded-sm ml-[24px] items-center">
            <Image source={alarmmobilepng} className="w-6 h-6 mt-[12px]" />
            <Text className="font-bold mt-[6px] text-center">{props.data}</Text>
            <Text className="font-bold text-center">{props.horario}</Text>
          </View>
          <View className="flex-col ml-[15px]">
            <View className="flex-row mb-[6px]">
              <Text className="ml-[20px] font-bold">{props.nomedono}</Text>
              <Text className="">/{props.nomepet}</Text>
            </View>
            <Text className="ml-[20px]">{props.nomedr}</Text>
          </View>
          <View className="flex-col justify-center items-center ml-auto mr-[20px]">
            {typeof props.imagem === "function" ? (
              // se for um componente SVG, renderiza ele com tamanho ajustado
              <props.imagem
                width={70}
                height={70}
                style={{ marginBottom: 5 }}
              />
            ) : (
              // se for uma imagem estática, renderiza com <Image>
              <Image
                source={props.imagem}
                className="w-[70px] h-[70px] mb-[5px]"
              />
            )}
            <View className="w-[101px] h-[25px] bg-white rounded-sm text-[12px] justify-center items-center">
              <Text className="text-[12px] text-center font-sf">
                {props.type}
              </Text>
            </View>
          </View>
        </View>
      );
    case "Checkup":
      return (
        <View
          className={`w-[358px] h-[122px] rounded-2xl flex-row items-center bg-checkup
      }`}
        >
          <View className="w-[51px] h-[90px] bg-white rounded-sm ml-[24px] items-center">
            <Image source={alarmmobilepng} className="w-6 h-6 mt-[12px]" />
            <Text className="font-bold mt-[6px] text-center">{props.data}</Text>
            <Text className="font-bold text-center">{props.horario}</Text>
          </View>
          <View className="flex-col ml-[15px]">
            <View className="flex-row mb-[6px]">
              <Text className="ml-[20px] font-bold">{props.nomedono}</Text>
              <Text className="ml-[0px]">/{props.nomepet}</Text>
            </View>
            <Text className="ml-[20px]">{props.nomedr}</Text>
          </View>
          <View className="flex-col justify-center items-center ml-auto mr-[20px]">
            {typeof props.imagem === "function" ? (
              // se for um componente SVG, renderiza ele com tamanho ajustado
              <props.imagem
                width={70}
                height={70}
                style={{ marginBottom: 5 }}
              />
            ) : (
              // se for uma imagem estática, renderiza com <Image>
              <Image
                source={props.imagem}
                className="w-[70px] h-[70px] mb-[5px]"
              />
            )}
            <View className="w-[101px] h-[25px] bg-white rounded-sm text-[12px] justify-center items-center">
              <Text className="text-[12px] text-center font-sf">
                {props.type}
              </Text>
            </View>
          </View>
        </View>
      );
    case "Retorno":
      return (
        <View
          className={`w-[358px] h-[122px] rounded-2xl flex-row items-center bg-retorno
      }`}
        >
          <View className="w-[51px] h-[90px] bg-white rounded-sm ml-[24px] items-center">
            <Image source={alarmmobilepng} className="w-6 h-6 mt-[12px]" />
            <Text className="font-bold mt-[6px] text-center">{props.data}</Text>
            <Text className="font-bold text-center">{props.horario}</Text>
          </View>
          <View className="flex-col ml-[15px]">
            <View className="flex-row mb-[6px]">
              <Text className="ml-[20px] font-bold">{props.nomedono}</Text>
              <Text className="ml-[0px]">/{props.nomepet}</Text>
            </View>
            <Text className="ml-[20px]">{props.nomedr}</Text>
          </View>
          <View className="flex-col justify-center items-center ml-auto mr-[20px]">
            {typeof props.imagem === "function" ? (
              // se for um componente SVG, renderiza ele com tamanho ajustado
              <props.imagem
                width={70}
                height={70}
                style={{ marginBottom: 5 }}
              />
            ) : (
              // se for uma imagem estática, renderiza com <Image>
              <Image
                source={props.imagem}
                className="w-[70px] h-[70px] mb-[5px]"
              />
            )}
            <View className="w-[101px] h-[25px] bg-white rounded-sm text-[12px] justify-center items-center">
              <Text className="text-[12px] text-center font-sf">
                {props.type}
              </Text>
            </View>
          </View>
        </View>
      );
    case "Historico":
      return (
        <View
          className={`w-[358px] h-[122px] rounded-2xl flex-row items-center bg-historico
      }`}
        >
          <View className="w-[51px] h-[90px] bg-white rounded-sm ml-[24px] items-center">
            <Image source={alarmmobilepng} className="w-6 h-6 mt-[12px]" />
            <Text className="font-bold mt-[6px] text-center">{props.data}</Text>
            <Text className="font-bold text-center">{props.horario}</Text>
          </View>
          <View className="flex-col ml-[15px]">
            <View className="flex-row mb-[6px]">
              <Text className="ml-[20px] font-bold">{props.nomedono}</Text>
              <Text className="ml-[0px]">/{props.nomepet}</Text>
            </View>
            <Text className="ml-[20px]">{props.nomedr}</Text>
          </View>
          <View className="flex-col justify-center items-center ml-auto mr-[20px]">
            {typeof props.imagem === "function" ? (
              // se for um componente SVG, renderiza ele com tamanho ajustado
              <props.imagem
                width={70}
                height={70}
                style={{ marginBottom: 5 }}
              />
            ) : (
              // se for uma imagem estática, renderiza com <Image>
              <Image
                source={props.imagem}
                className="w-[70px] h-[70px] mb-[5px]"
              />
            )}
            <View className="w-[101px] h-[25px] bg-white rounded-sm text-[12px] justify-center items-center">
              <Text className="text-[12px] text-center font-sf">
                {props.type}
              </Text>
            </View>
          </View>
        </View>
      );
  }
}
