import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PetCardmbProps } from "../src/components/PetCardMobile";
import PetCardMobile from "../src/components/PetCardMobile";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";
import { useState } from "react";

import { Sol } from "@assets";
import { Lua } from "@assets";
import { Nuvem } from "@assets";

import Logocitipet from "@assets/Logo CITi Pet.svg";
import Sheep from "@assets/sheep.svg";
import Cat2Svg from "@assets/cat2.svg";
import Pig from "@assets/pig.svg";
import Cat from "@assets/cat.svg";
import Cow from "@assets/cow.svg";
import Horse from "@assets/horse.svg";

const cardsMock: PetCardmbProps[] = [
  {
    type: "Primeira consulta",
    nomepet: "Rex",
    nomedono: "João",
    nomedr: "Dra. Ana",
    data: "10/05",
    horario: "14:00",
    imagem: Sheep,
  },
  {
    type: "Checkup",
    nomepet: "Mia",
    nomedono: "Carla",
    nomedr: "Dr. Pedro",
    data: "11/05",
    horario: "10:30",
    imagem: Cat2Svg,
  },
  {
    type: "Vacinacao",
    nomepet: "Thor",
    nomedono: "Lucas",
    nomedr: "Dra. Julia",
    data: "12/05",
    horario: "16:00",
    imagem: Pig,
  },
  {
    type: "Retorno",
    nomepet: "Rex",
    nomedono: "João",
    nomedr: "Dra. Ana",
    data: "13/05",
    horario: "14:00",
    imagem: Cat,
  },
  {
    type: "Historico",
    nomepet: "Rex",
    nomedono: "João",
    nomedr: "Dra. Ana",
    data: "13/05",
    horario: "14:00",
    imagem: Cat,
  },
];

const App: React.FC = () => {
  const [selecionado, setSelecionado] = useState("");

  const filtrarPorHorario = () => {
    return cardsMock.filter((card) => {
      const [hora, minuto] = card.horario.split(":").map(Number);
      const minutos = hora * 60 + minuto;

      if (selecionado === "sol") return minutos < 12 * 60; // manhã
      if (selecionado === "nuvem")
        return minutos >= 12 * 60 && minutos < 18 * 60; // tarde
      if (selecionado === "lua") return minutos >= 18 * 60; // noite

      return true;
    });
  };

  return (
    <View className="flex-1 h-full items-center bg-gray-100 ">
      <View className="mt-[39px]">
        <Logocitipet width={120} height={40} className="w-[143px] h[54px]" />
      </View>

      <View className="w-[340px] mt-[39px]">
        <Text className="text-xl font-barlowBold mr-auto">Sua agenda</Text>
        <Text className="text-sm font-barlow mt-[8px]">
          Veja aqui todos os seus pacientes agendados para hoje.
        </Text>
      </View>

      <View
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
        }}
        className="bg-white rounded-full w-[252px] h-[70px] mt-[39px] flex-row justify-around items-center"
      >
        <Pressable
          onPress={() => setSelecionado(selecionado === "sol" ? "" : "sol")}
          className={`w-12 h-12 rounded-full items-center justify-center ${
            selecionado === "sol" ? "bg-gray-300" : "bg-transparent"
          }`}
        >
          <Sol />
        </Pressable>

        <Pressable
          onPress={() => setSelecionado(selecionado === "nuvem" ? "" : "nuvem")}
          className={`w-12 h-12 rounded-full items-center justify-center ${
            selecionado === "nuvem" ? "bg-gray-300" : "bg-transparent"
          }`}
        >
          <Nuvem />
        </Pressable>

        <Pressable
          onPress={() => setSelecionado(selecionado === "lua" ? "" : "lua")}
          className={`w-12 h-12 rounded-full items-center justify-center ${
            selecionado === "lua" ? "bg-gray-300" : "bg-transparent"
          }`}
        >
          <Lua />
        </Pressable>
      </View>

      <View className="h-[440px]">
        <ScrollView
          contentContainerStyle={{ gap: 16, alignItems: "center" }}
          className="mt-[39px]"
        >
          {filtrarPorHorario().map((item, idx) => (
            <PetCardMobile key={idx} {...item} />
          ))}
        </ScrollView>
      </View>

      <SafeAreaView
        className=""
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -40,
          backgroundColor: "#48D17C", // substitua pela sua cor ou classe Tailwind
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 75,
        }}
      />
    </View>
  );
};

export default App;
