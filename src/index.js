import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './modules/App/App';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import common_en from  "./translations/en/common.json";
import common_pt from  "./translations/pt/common.json";
import header_en from "./translations/en/header.json";
import header_pt from "./translations/pt/header.json";
import attribute_en from  "./translations/en/attributes.json";
import attribute_pt from  "./translations/pt/attributes.json";
import skill_en from "./translations/en/skill.json";
import skill_pt from "./translations/pt/skill.json";
import labels_en from "./translations/en/labels.json";
import labels_pt from "./translations/pt/labels.json";
import disciplines_en from "./translations/en/disciplines.json";
import disciplines_pt from "./translations/pt/disciplines.json";
import 'bootstrap/dist/css/bootstrap.min.css';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        common: common_en,
        header: header_en,
        attributes: attribute_en,
        skill: skill_en,
        labels: labels_en,
        disciplines: disciplines_en
      },
      pt: {
        common: common_pt,
        header: header_pt,
        attributes: attribute_pt,
        skill: skill_pt,
        labels: labels_pt,
        disciplines: disciplines_pt
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
