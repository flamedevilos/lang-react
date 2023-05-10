import React from "react";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div>{t("home.title")}</div>
      <p>{t("home.body")}</p>
    </>
  );
};
