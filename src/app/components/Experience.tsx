import SectionTitle from "./SectionTitle";
import { getLocale, getTranslations } from "next-intl/server";
import { getExp } from "@/hooks/useFetchJson";
import ReactMarkdown from "react-markdown";

export default async function Experience() {
  const t = await getTranslations();
  const locale = await getLocale();
  const data = await getExp();
  return (
    <>
      <div id="Experience" className="w-full xl:w-3/5 md:w-4/5 m-auto">
        <SectionTitle title={t("section.experience")} />
        { data === null ? (
          <p>Loading...</p>
        ) : (
          <ul className="m-8">
            {data.map((item) => (
              <li key={item.id} className="group relative pl-7 pb-8 last:pb-0">
                <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-black/10 group-first:top-2 duration-500"></div>
                <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#7284a1] group-hover:bg-teal-800"></div>
                <div className="text-[16px]/8 font-thin">
                  <h3 className="text-gray-500 font-thin text-sm mb-2 group-hover:text-shadow-sm duration-200 bg-stone-200 px-3 py-1 rounded-md w-fit relative before:absolute before:size-[9px] before:bg-stone-200 before:top-[10px] before:-left-[4px] before:rotate-[-45deg] before:skew-x-12 before:skew-y-8">
                    {item.startDate} - {item.endDate}
                  </h3>
                  <h2 className="font-thin tracking-[0.5px] mb-2 group-hover:text-shadow-sm duration-200">
                    <span className="font-semibold tracking-[1px] text-xl group-hover:text-teal-800/70 duration-200">
                      { item.translations?.[locale].title }
                    </span>{" "}
                    /{" "}
                    { item.translations?.[locale].company }
                  </h2>
                  { <ReactMarkdown>
                    { item.translations?.[locale].content.join("\n\n")}
                  </ReactMarkdown> }
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

