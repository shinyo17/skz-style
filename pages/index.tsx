import NavigationButton from "@/components/NavigationButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10 items-center justify-start w-full min-h-screen bg-slate-50">
      <div className="py-3 w-full text-center bg-gray-500">
        <p className="text-2xl text-white font-medium">SKZ 취향표</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <Link
          href="https://twitter.com/DeveloperTyga"
          className="text-xl text-gray-900 font-medium"
        >
          개발자 타이가 @DeveloperTyga
        </Link>
        <div className="text-xs py-1 text-gray-400 text-center">
          상업적인 목적은 절대 없음을 알립니다.
        </div>
      </div>
      <div className="grid grid-cols-1 space-x-3 items-center justify-center">
        <NavigationButton href={"/eight"} title={"8문항 버전"} />
      </div>
    </div>
  );
}
