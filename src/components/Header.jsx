import React from "react";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang: String) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <div>
        {" "}
        <div>{t("header.title")}</div>
        <p>{t("header.body")}</p>
        <button onClick={() => handleChangeLanguage("en")}>EN</button>
        <button onClick={() => handleChangeLanguage("fr")}>FR</button>
      </div>
    </>
  );
};
