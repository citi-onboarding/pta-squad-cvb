import Image from "next/image";
import { calendario } from "@/assets";

export default function Inputdata() {
  return (
    <div>
      <input
        type="text"
        placeholder="dd/mm/aa"
        className="w-[125px] h-[56px] rounded-xl border-2 border-gray-300"
      />
      <Image
        src={calendario}
        alt=""
        className="ml-auto mt-[-40px] mr-[8px]"
      ></Image>
      {/* <image src={calendario} alt="calendar" className="" /> */}
    </div>
  );
}
