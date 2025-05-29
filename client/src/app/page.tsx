import TopBar from "@/components/topbar";
import ConsultaForm from "@/components/consulta";
import { LogoCITi } from "@/assets";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-1 flex-col min-h-screen  items-center bg-white">
      <div className = "w-full">
        <TopBar />
      </div>
      <div>
        <ConsultaForm/>
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


