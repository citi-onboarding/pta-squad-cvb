import React from "react";
import Image from "next/image";
import 

const TopBar =() =>{
    return(
        /*espaço da div em si*/

        <div className="w-[1920px] h-[114px] justify-between items-center pt-[20px]
        pb-[20px] pr-[48px] pl-[48px] border-b border-[#d9d9d9]">

            {/* imagem da esquerda*/}
            <div className=" flex-1 flex justify-start">
                <Image
                    src={}
                />

            </div> 

            {/*iteráveis no centro*/}
            <div className=" flex-1 flex justify-center">

            </div>

            {/*imagem da direita*/}
            <div className="flex-1 flex justify-end">

            </div>
        </div>



    );
};