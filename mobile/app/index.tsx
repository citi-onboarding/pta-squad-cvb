import { View, Text } from "react-native";
import { PetCardProps } from "../src/components/PetCardMobile";
import PetCardMobile from "../src/components/PetCardMobile";
import { cat1 } from "@assets";

const App: React.FC = () => (
  <View className="flex-1 justify-center items-center bg-gray-100">
    <Text className="text-xl font-barlowBold text-[#58cbfb]">
      Made with &lt; / &gt; and 🩵 by CITi
    </Text>

    <View className="grid grid-cols-1 gap-[16px]">
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
    </View>
  </View>
);

export default App;
