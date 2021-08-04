import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import i18n from "../../redux/language-reducer";
import s from "./Settings.module.css";
import { useTranslation } from "react-i18next";

const Settings = (props) => {
  console.log(props);

  const [isShowed, show] = useState(false);

  const sel = React.createRef();

  const cancel = () => {
    show(!isShowed);
    if (props.languageReducer.language === "en") {
      sel.current.value = "en";
    } else if (props.languageReducer.language === "ru") {
      sel.current.value = "ru";
    }
  };

  const confirm = () => {
    show(!isShowed);
    props.changeLanguage(sel.current.value);
  };

  const changeLanguage = () => {
    return () => {
      console.log(sel.current.value);
      show(!isShowed);
    };
  };
  const { t } = useTranslation();
  return (
    <div className={s.settings}>
      <div className={s.main}>
        <NavLink className={s.header} to="/store/main">
          <div className={s.back}>
            <span></span>
          </div>
          <div className={s.text}>{t("settings.settings")}</div>
        </NavLink>
        <div className={s.language}>
          <div className={s.lText}>{t("settings.language")}</div>
          <form>
            <select
              className={s.select}
              ref={sel}
              name="language"
              onChange={changeLanguage()}
            >
              {props.languageReducer.language === "en" ? (
                <option selected value="en">
                  English
                </option>
              ) : (
                <option value="en">English</option>
              )}
              {props.languageReducer.language === "en" ? (
                <option value="ru">Russia</option>
              ) : (
                <option selected value="ru">
                  Russia
                </option>
              )}
            </select>
          </form>
        </div>
      </div>
      <div className={`${s.changeLng} + ${isShowed ? s.show : s.hidden}`}>
        <div className={s.container}>
          <div className={s.content}>
            <div className={s.title}>Change Language</div>
            <div className={s.text}>
              If you confirm, the language will be changed.
            </div>
          </div>
          <div className={s.btns}>
            <div className={s.btnConfirm}>
              <a onClick={confirm}>Confirm</a>
            </div>
            <div className={s.btnCancel}>
              <a onClick={cancel}>Cancel</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
