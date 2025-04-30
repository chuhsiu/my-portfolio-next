import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React from "react";
import { getTranslations } from "next-intl/server";

export default async function  About(){
  const t = await getTranslations('about');
  return (
    <>
      <div
        id="About"
        className={`bg-[url(/images/bg.jpg)] bg-cover py-[20px] h-fit`}
      >
        <div className="relative group bg-white/30 backdrop-blur-sm p-10 md:max-w-3/5 md:w-fit w-full max-w-90 m-auto rounded-md shadow-md hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-400 ease-in-out">
          <div className="relative mx-auto rounded-full h-[120px] w-[120px] overflow-hidden duration-300 ease-in-out group-hover:scale-105">
             <Image className="scale-110 object-cover duration-300 ease-in-out group-hover:scale-100"
                 src='/images/avatar.png'
                 alt="avatar"
                 fill
             ></Image>
          </div>
          <div className="flex justify-center items-center my-2 group-hover:my-5 duration-300 ease-in-out">
            <div>
              <CiMail className="mr-0 cursor-pointer" />
            </div>
            <div>
              <FaGithub className="mx-2 cursor-pointer" />
            </div>
            <div>
              <FaLinkedin className="mr-2 cursor-pointer" />
            </div>
          </div>
          <h4 className="text-teal-900 tracking-[1px] font-thin my-2">
            {t("name")}
          </h4>
          <h5 className="tracking-[0.5px] font-thin">{t("title")}</h5>
          <p className="opacity-0 h-0 group-hover:h-fit group-hover:opacity-100 transition-all text-xs text-xs/5 mt-0 group-hover:mt-3 duration-300 ease-in-out tracking-[0.8px] font-thin">
          {t('line1')}<br/>
          {t('line2')}<br/>
          {t('line3')}<br/>
          {t('line4')}
          </p>
        </div>
      </div>
    </>
  );
}
