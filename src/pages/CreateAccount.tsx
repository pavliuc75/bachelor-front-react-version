import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function CreateAccount() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>CreateAccount</h1>
      <FontAwesomeIcon icon={["fas", "coffee"]} />
      {t("createAnAccount")} {process.env.REACT_APP_URL}
    </div>
  );
}

export default CreateAccount;
