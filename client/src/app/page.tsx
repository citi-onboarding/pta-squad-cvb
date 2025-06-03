import Image from "next/image";
<<<<<<< HEAD
import Pesquisa from "@/components/pesquisa/index"

import { LogoCITi } from "../assets";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col h-full justify-around items-center bg-black">
      <div>
        <Pesquisa />
=======
import TopBar from "@/components/topbar";
import { LogoCITi } from "@/assets";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col min-h-screen  items-center bg-white">
      <div className = "w-full">
        <TopBar />
>>>>>>> 2a921b938943042ad2679177fb47ccdc3cfa10c2
      </div>
      <div className="my-auto">
        <Image src={LogoCITi} alt="Logo citi" />
      </div>
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-white text-4xl font-bold">NextJS Boilerplate</h1>
        <p className="text-white text-xl">
          Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}
          <strong>&hearts;</strong> by CITi
        </p>
      </div>
    </div>
  );
}

