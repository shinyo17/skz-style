import CustomModal from "@/components/CustomModal";
import SelectButton from "@/components/SelectButton";
import { EIGHT_ITEMS, SKZ } from "@/shared/data/constants";
import { setMember } from "@/shared/helper/setMember";
import { setShowModal } from "@/shared/helper/setShowModal";
import { MemberStateMap } from "@/shared/types/MemberStateMap";
import saveAs from "file-saver";
import html2canvas from "html2canvas";
import Link from "next/link";
import { useState } from "react";

export default function EightVersionLayout() {
  const initialStateMap: MemberStateMap = EIGHT_ITEMS.reduce(
    (obj: MemberStateMap, item: string) => {
      obj[item] = { showModal: false, memberImg: "", memberName: "" };
      return obj;
    },
    {}
  );

  const [stateMap, setStateMap] = useState(initialStateMap);

  const handleImageDownload = () => {
    try {
      const element = document.getElementById("card");

      html2canvas(element as HTMLElement, {
        useCORS: true,
        allowTaint: true,
        foreignObjectRendering: false,
      }).then((canvas) => {
        canvas.toBlob((blob) => {
          saveAs(blob as Blob, "skz.png");
        });
      });
    } catch (_) {}
  };

  return (
    <div>
      <div className="flex flex-col space-y-10 items-center justify-start w-full min-h-screen bg-slate-200">
        <div className="p-4 w-full text-start bg-gray-500">
          <Link href="/" className="text-xl text-gray-900 font-medium">
            ←
          </Link>
        </div>
        <div className="m-1 w-12/13 items-center justify-center">
          <div
            id="card"
            className="p-1.5 w-full grid grid-cols-4 items-center justify-center shadow-lg rounded-xl bg-white"
          >
            {EIGHT_ITEMS.map((item: string) => (
              <SelectButton
                title={item}
                setShowModal={() => setShowModal(item, setStateMap)}
                memberImg={stateMap[item].memberImg}
                memberName={stateMap[item].memberName}
              />
            ))}
            <div className="p-2">
              <p className="text-[6px] text-gray-900 font-light whitespace-nowrap">
                개발자 타이가 @DeveloperTyga
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={handleImageDownload}
          className="mt-5 bg-black hover:bg-black text-white py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-black focus:outline-none"
        >
          다운로드
        </button>
      </div>
      {EIGHT_ITEMS.map((item: string) =>
        stateMap[item].showModal ? (
          <CustomModal
            members={SKZ}
            title={item}
            setStateMap={setStateMap}
            memberType={item}
          />
        ) : null
      )}
    </div>
  );
}
