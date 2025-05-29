import { View, Text } from "react-native";
import { PetCardmbProps } from "../src/components/PetCardMobile";
import PetCardMobile from "../src/components/PetCardMobile";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";

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
    type: "Primeira consulta",
    nomepet: "Rex",
    nomedono: "João",
    nomedr: "Dra. Ana",
    data: "13/05",
    horario: "14:00",
    imagem: Cat4Svg,
  },
];

const App: React.FC = () => (
  <View className="flex-1 justify-center items-center bg-gray-100">
    <Text className="text-xl font-barlowBold text-[#58cbfb]">
      Made with &lt; / &gt; and 🩵 by CITi
    </Text>

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
