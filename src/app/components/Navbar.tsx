'use client';

// import { GrLanguage } from "react-icons/gr";
import "@/assets/nav.css";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useCloseMenuOnResize } from "@/hooks/useCloseMenuOnResize";

export default function Navbar() {
  useCloseMenuOnResize();
  const t = useTranslations();
  const locale = useLocale();
 
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const localeLabels: Record<string, string> = {
    en: 'Eng',
    zh: '繁中',
  };

  function onSelectChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  }

  function toggleMenu (e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    const button = e.currentTarget;
    button.classList.toggle("open");

    const menu = document.getElementById("menu");
    if (button.classList.contains("open")) {
      menu?.classList.add("show");
    } else {
      menu?.classList.remove("show");
    }
  };

  function clickMenu (e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();

    const menu = document.getElementById("menu");
    const menuBtn = document.getElementById("menu-button");

    if (menu?.classList.contains("show")) {
      menu.classList.remove("show");
    }
    if (menuBtn?.classList.contains("open")) {
      menuBtn.classList.remove("open");
    }
  };

  function scrollToSection (id?: string) {
    if (id == null) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }
    const target = document.getElementById(id);
    window.scrollTo({
      top: target ? target.offsetTop - 70 : 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="sticky top-0 flex flex-row justify-center py-[20px] shadow-md bg-white text-gray tracking-[1px] font-thin text-sm z-4 w-full">
        <nav className="flex w-full justify-between sm:justify-center items-center">
          <div className="mx-4 hidden sm:block cursor-pointer">
            <a onClick={() => scrollToSection()}>
              {t("section.about").toUpperCase()}
            </a>
          </div>
          <div className="mx-4 hidden sm:block cursor-pointer">
            <a onClick={() => scrollToSection("Experience")}>
              {t("section.experience").toUpperCase()}
            </a>
          </div>{" "}
          <div className="mx-4 hidden sm:block cursor-pointer">
            <a onClick={() => scrollToSection("Education")}>
              {t("section.education").toUpperCase()}
            </a>
          </div>
          <div className="mx-4 hidden sm:block cursor-pointer">
            <a onClick={() => scrollToSection("Skill")}>
              {t("section.skill").toUpperCase()}
            </a>
          </div>
          <div className="mx-4 hidden sm:block cursor-pointer">
            <a onClick={() => scrollToSection("Project")}>
              {t("section.project").toUpperCase()}
            </a>
          </div>
          <div className="ml-5 sm:ml-0">
              <Select defaultValue={locale} onValueChange={onSelectChange}>
                <SelectTrigger>
                  <SelectValue className="text-xs" />
                </SelectTrigger>
                <SelectContent>
                  {routing.locales.map((cur) => (
                    <SelectItem className="text-xs" key={cur} value={cur}>
                      {localeLabels[cur] || cur}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
          </div>
          <button
            id="menu-button"
            className="sm:hidden w-[30px] h-[30px] mr-4 relative mobile-munu cursor-pointer"
            type="button"
            onClick={toggleMenu}
          >
            <span className="absolute top-1/3 left-[5px] w-[20px] border-b-1 border-gray-800 transition-all duration-300"></span>
            <span className="absolute top-2/3 left-[5px] w-[20px] border-b-1 border-gray-800 transition-all duration-300"></span>
          </button>
        </nav>
      </header>
      <div
        className="fixed top-[70px] flex flex-col w-full hidden z-3 bg-white shadow-md"
        id="menu"
      >
        <a
          className="p-4 hover:bg-gray-200 duration-300"
          onClick={(e) => {
            scrollToSection();
            clickMenu(e);
          }}
        >
          {t("section.about").toUpperCase()}
        </a>
        <a
          className="p-4 hover:bg-gray-200 duration-300"
          onClick={(e) => {
            scrollToSection("Experience");
            clickMenu(e);
          }}
        >
          {t("section.experience").toUpperCase()}
        </a>{" "}
        <a
          className="p-4 hover:bg-gray-200 duration-300"
          onClick={(e) => {
            scrollToSection("Education");
            clickMenu(e);
          }}
        >
          {t("section.education").toUpperCase()}
        </a>
        <a
          className="p-4 hover:bg-gray-200 duration-300"
          onClick={(e) => {
            scrollToSection("Skill");
            clickMenu(e);
          }}
        >
          {t("section.skill").toUpperCase()}
        </a>
        <a
          className="p-4 hover:bg-gray-200 duration-300"
          onClick={(e) => {
            scrollToSection("Project");
            clickMenu(e);
          }}
        >
          {t("section.project").toUpperCase()}
        </a>
      </div>
    </>
  );
}
