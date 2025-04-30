import SectionTitle from "./SectionTitle";
import { getTranslations, getLocale } from "next-intl/server";
import { getSkill } from "@/hooks/useFetchJson";
export default async function Skills() {
  const t = await getTranslations();
  const locale = await getLocale();
  const data = await getSkill();

  return (
    <>
      <div id="Skill" className="w-full xl:w-3/5 md:w-4/5 m-auto">
        <SectionTitle title={t("section.skill")} />
        {data === null? (
          <p>Loading...</p>
        ) : (
          <ul className="mb-[40px] flex flex-wrap">
            {data.map((item) => (
              <li
                className="w-full sm:w-1/2 lg:w-1/4 mt-5 sm:mx-0 mx-[20px] group relative"
                key={item.id}
              >
                {/* <div className="pt-[10px] relative mx-8 h-full before:top-[50px] before:left-0 before:w-full before:h-[1px] before:absolute before:bg-[#7284a1]"> */}
                <div className="pt-[10px] relative mx-8 md:mx-3 h-full rounded-[20px] group-hover:inset-shadow-sm duration-100">
                  <h2 className="relative w-fit h-[60px] p-4 m-auto z-2 border-b-1 border-[#7284a1] group-hover:text-teal-800/70 group-hover:text-lg group-hover:font-semibold group-hover:border-b-3 group-hover:border-teal-800/70 duration-200">
                    {/* {getLocalizedText(item.name, i18n.language)} */}
                    { item.name?.[locale]}
                  </h2>
                  {item.skills.length === 0 ? (
                    ""
                  ) : (
                    <ul className="flex px-1 my-4 flex-wrap justify-start">
                      {item.skills.map((skill) => (
                        <li
                          key={`item_${skill.id}`}
                          className="rounded-full bg-gray-100 opacity-60 w-fit text-xs py-2 px-5 m-2 text-center transform hover:scale-120 duration-200 ease-in-out hover:opacity-100 hover:cursor-pointer"
                        >
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
