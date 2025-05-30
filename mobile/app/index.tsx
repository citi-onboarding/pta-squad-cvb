import { View, Text } from "react-native";
import { PetCardmbProps } from "../src/components/PetCardMobile";
import PetCardMobile from "../src/components/PetCardMobile";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";

import { Sol } from "@assets";
import { Lua } from "@assets";
import { Nuvem } from "@assets";

import Logocitipet from "@assets/Logo CITi Pet.svg";
import Cat1Svg from "@assets/cat1.svg";
import Cat2Svg from "@assets/cat2.svg";
import Cat3Svg from "@assets/cat3.svg";
import Cat4Svg from "@assets/cat4.svg";
import Cat5Svg from "@assets/cat5.svg";
import Cat6Svg from "@assets/cat6.svg";

const cardsMock: PetCardmbProps[] = [
  {
    type: "Primeira consulta",
    nomepet: "Rex",
    nomedono: "João",
    nomedr: "Dra. Ana",
    data: "10/05",
    horario: "14:00",
    imagem: Cat1Svg,
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
    imagem: Cat3Svg,
  },
  {
    type: "Retorno",
    nomepet: "Rex",
    nomedono: "João",
    nomedr: "Dra. Ana",
    data: "13/05",
    horario: "14:00",
    imagem: Cat4Svg,
  },
  {
    type: "Historico",
    nomepet: "Rex",
    nomedono: "João",
    nomedr: "Dra. Ana",
    data: "13/05",
    horario: "14:00",
    imagem: Cat4Svg,
  },
];

const App: React.FC = () => (
  <View className="flex-1 justify-center items-center bg-gray-100 ">
    <View className="mt-[39px]">
      <Logocitipet width={120} height={40} className="w-[143px] h[54px]" />
    </View>

    <View className="rounded-2xl w-[252px] h-[70px] mt-[39px] flex-row flex justify-around items-center shadow-lg p-4">
      <Sol />
      <Nuvem />
      <Lua />
    </View>

    <View className="w-[358px] mt-[39px]">
      <Text className="text-xl font-barlowBold mr-auto">Sua agenda</Text>

      <Text className="text-sm font-barlow mt-[8px]">
        Veja aqui todos os seus pacientes agendados para hoje.
      </Text>
    </View>

    <ScrollView contentContainerStyle={{ gap: 16, alignItems: "center" }}>
      {cardsMock.map((item, idx) => (
        <PetCardMobile key={idx} {...item} />
      ))}
    </ScrollView>

    {/* <View className="grid grid-cols-1 gap-[16px]">
      <PetCardMobile
        type="Primeira consulta"
        nomepet="Rex"
        nomedono="João"
        nomedr="Dra. Ana"
        data="10/05"
        horario="14:00"
        imagem={cat1}
      />
      <PetCardMobile
        type="Vacinacao"
        nomepet="Rex"
        nomedono="João"
        nomedr="Dra. Ana"
        data="10/05"
        horario="14:00"
        imagem={cat1}
      />
      <PetCardMobile
        type="Checkup"
        nomepet="Rex"
        nomedono="João"
        nomedr="Dra. Ana"
        data="10/05"
        horario="14:00"
        imagem={cat1}
      />
      <PetCardMobile
        type="Retorno"
        nomepet="Rex"
        nomedono="João"
        nomedr="Dra. Ana"
        data="10/05"
        horario="14:00"
        imagem={cat1}
      />
      <PetCardMobile
        type="Historico"
        nomepet="Rex"
        nomedono="João"
        nomedr="Dra. Ana"
        data="10/05"
        horario="14:00"
        imagem={cat1}
      />
    </View> */}
  </View>
);

export default App;
