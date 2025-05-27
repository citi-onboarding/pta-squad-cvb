import Image from "next/image";
import TopBar from "@/components/TopBar";
import { LogoCITi } from "@/assets";
import { Buttongroup,Logopet } from "@/assets";
import { SetaVoltar } from "@/assets";



export default function TelaCadastro(){
    return(
        <div className="flex flex-col items-start  min-h-screen bg-white">
            <div className="w-full">
                <TopBar/>
            </div>

            <div className=" flex flex-row gap-[10px] ml-[135px] mt-[35px]">
                <div className="flex flex-row gap-[8px] items-center ">
                    <button>
                        <Image 
                            src={SetaVoltar}
                            alt ="seta de voltar"
                            className="w-[32px] h-[27px]"
                        />
                    </button>
                    <h1 className="text-[36px] font-bold">Cadastro</h1>
                </div>

                <div className="flex flex-row">   {/* nome do paciente e tutor aqui */}

                </div>
                    
            </div>
        </div>
    );
}