import SectionTitle from "./SectionTitle.tsx";
import { getTranslations } from "next-intl/server";
export default async function Education() {
  const t = await getTranslations();
  return (
    <>
      <div id="Education" className="bg-gray-200">
        <div className="w-full xl:w-3/5 md:w-4/5 m-auto">
          <SectionTitle title={t("section.education")} />
          <ul className="p-8">
            <li className="group relative pl-7 pb-8 last:pb-0 hover:cursor-pointer">
              <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-black/10 group-first:top-2 duration-500 group-hover:animate-colorChange"></div>
              <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#7284a1] group-hover:bg-teal-800"></div>
              <h3 className="text-gray-100 font-thin text-sm mb-2 group-hover:shadow-lg group-hover:shadow-grey-500 group-hover:text-shadow-2xs group-hover:text-shadow-white/40 duration-200 bg-[#7284a1] px-3 py-1 rounded-md w-fit relative before:absolute before:size-[9px] before:bg-[#7284a1] before:top-[10px] before:-left-[4px] before:rotate-[-45deg] before:skew-x-12 before:skew-y-8">
                2020.09 - 2022.06
              </h3>
              <h2 className="tracking-[0.5px] mb-2 font-semibold group-hover:text-shadow-lg group-hover:text-shadow-white duration-200  group-hover:text-teal-800/70">
                {t("master.major")}
              </h2>
              <h3 className="tracking-[0.5px] font-thin mb-2 group-hover:text-shadow-lg group-hover:text-shadow-white duration-200">
                {t("master.school")}
              </h3>
            </li>
            <li className="group relative pl-7 pb-8 last:pb-0 hover:cursor-pointer">
              <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-black/10 group-first:top-2 duration-500 group-hover:animate-colorChange"></div>
              <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#7284a1] group-hover:bg-teal-800"></div>
              <h3 className="text-gray-100 font-thin text-sm mb-2 group-hover:shadow-lg group-hover:shadow-grey-500 group-hover:text-shadow-2xs group-hover:text-shadow-white/40 duration-200 bg-[#7284a1] px-3 py-1 rounded-md w-fit relative before:absolute before:size-[9px] before:bg-[#7284a1] before:top-[10px] before:-left-[4px] before:rotate-[-45deg] before:skew-x-12 before:skew-y-8">
                2016.09 - 2020.06
              </h3>
              <h2 className="tracking-[0.5px] mb-2 font-semibold group-hover:text-shadow-lg group-hover:text-shadow-white duration-200 group-hover:text-teal-800/70">
                {t("bachelor.major")}
              </h2>
              <h3 className="tracking-[0.5px] font-thin mb-2 group-hover:text-shadow-lg group-hover:text-shadow-white duration-200">
                {t("bachelor.school")}
              </h3>
              {/* <p className="text-xs text-sm/6 text-sky-500">
                研究主題 : 互動式資料視覺化的探索分析-以2018
                年性平公投與台灣六都之社經因素為例
              </p> */}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
