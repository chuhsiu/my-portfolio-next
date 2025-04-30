import { RxCross1 } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { TiArrowForwardOutline } from "react-icons/ti";

import ReactMarkdown from "react-markdown";
import { ProjectData } from "@/hooks/useFetchJson";

interface Props {
  detail: ProjectData | null;
  open: boolean;
  closeDialog: () => void;
  locale: string;
  }

function Dialog({ detail, open, closeDialog, locale } : Props) {
  return (
    <>
      <div
        className={
          open ? "z-5 fixed top-0 left-0 size-full bg-black/50" : "hidden"
        }
      >
        <div className="relative bg-white w-6/7 md:w-3/5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-[20px] overflow-hidden">
          <a
            className="float-right border-[0.5px] border-gray-300 bg-gray-100 rounded-full size-[35px] relative m-2 hover:bg-gray-300"
            onClick={() => closeDialog()}
          >
            <RxCross1 className="size-[25p] relative top-[9px] left-[9px]" />
          </a>
          {detail === null ? (
            <p>Loading...</p>
          ) : (
            <>
              <h2 className="w-fit h-[60px] p-4 m-auto text-[#7284a1] font-bold">
                {/* {getLocalizedText(detail.translations, i18n.language).name} */}
                { detail.translations?.[locale].name }
              </h2>
              <div className="text-sm text-sm/6 px-7 pb-5 tracking-[1px] font-thin">
                <ReactMarkdown>
                  {/* {getLocalizedText(
                    detail.translations,
                    i18n.language
                  ).content.join("\n\n")} */}
                  { detail.translations?.[locale].content.join("\n\n") }
                </ReactMarkdown>
              </div>
              <div className="flex justify-center pb-[20px]">
                {detail.code !== "" ? (
                  <a
                    className="border-[0.5px] border-gray-300 bg-gray-100 rounded-full size-[35px] relative mx-2 mb-2 hover:bg-gray-300"
                    href={detail.code}
                    target="_blank"
                  >
                    <FaGithub className="size-[25p] relative top-[9px] left-[9px]" />
                  </a>
                ) : (
                  ""
                )}
                {detail.link !== "" ? (
                  <a
                    className="border-[0.5px] border-gray-300 bg-gray-100 rounded-full size-[35px] relative mx-2 mb-2 hover:bg-gray-300"
                    href={detail.link}
                    target="_blank"
                  >
                    <TiArrowForwardOutline className="size-[25p] relative top-[9px] left-[9px]" />
                  </a>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Dialog;
