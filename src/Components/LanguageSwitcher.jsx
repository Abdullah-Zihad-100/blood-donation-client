import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TbWorld } from "react-icons/tb";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const [isVisible,setIsVisible]=useState(false);

console.log(isVisible);

  return (
    <div className="mt-2 mx-2 relative">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="text-white text-lg"
      >
        <TbWorld />
      </button>
      {isVisible && (
        <div className="absolute -right-1">
          <select value={i18n.language}
            onChange={changeLanguage}
          
          >
            <option value="en" >
              En
            </option>
            <option value="bn" >
              Bn
            </option>
          </select>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
