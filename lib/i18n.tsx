"use client";

import { createContext, useContext, useState, useMemo, ReactNode } from "react";

export type Lang = "en" | "ta";

const dictionary = {
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_timeline: "Timeline",
    nav_blog: "Blog",
    nav_contact: "Contact",
    hero_cta_work: "View My Work",
    hero_cta_contact: "Get In Touch",
    section_about: "About Me",
    section_skills: "Skills",
    section_stack: "Tech Stack",
    section_projects: "Projects",
    section_timeline: "Timeline",
    section_education: "Education",
    section_contact: "Contact",
    contact_lead: "Have a project, an opportunity, or just want to talk technology? My inbox is open.",
    form_name: "Your name",
    form_email: "Your email",
    form_message: "Your message",
    form_send: "Send Message",
    form_sending: "Sending...",
    form_success: "Message sent. I'll get back to you soon.",
    form_error: "Something went wrong. Please try again or email me directly.",
    view_case_study: "Case Study",
    view_github: "GitHub",
    view_demo: "Live Demo",
  },
  ta: {
    nav_about: "எனைப் பற்றி",
    nav_skills: "திறன்கள்",
    nav_projects: "திட்டங்கள்",
    nav_timeline: "காலவரிசை",
    nav_blog: "வலைப்பதிவு",
    nav_contact: "தொடர்பு",
    hero_cta_work: "எனது பணியைப் பார்க்க",
    hero_cta_contact: "தொடர்பு கொள்ள",
    section_about: "எனைப் பற்றி",
    section_skills: "திறன்கள்",
    section_stack: "தொழில்நுட்ப அடுக்கு",
    section_projects: "திட்டங்கள்",
    section_timeline: "காலவரிசை",
    section_education: "கல்வி",
    section_contact: "தொடர்பு கொள்ளுங்கள்",
    contact_lead: "ஒரு திட்டமா, வாய்ப்பா, அல்லது தொழில்நுட்பம் பற்றி பேச விரும்புகிறீர்களா? எனது இன்பாக்ஸ் திறந்திருக்கிறது.",
    form_name: "உங்கள் பெயர்",
    form_email: "உங்கள் மின்னஞ்சல்",
    form_message: "உங்கள் செய்தி",
    form_send: "செய்தி அனுப்பு",
    form_sending: "அனுப்புகிறது...",
    form_success: "செய்தி அனுப்பப்பட்டது. விரைவில் பதிலளிப்பேன்.",
    form_error: "ஏதோ தவறு நடந்தது. மீண்டும் முயற்சிக்கவும் அல்லது நேரடியாக மின்னஞ்சல் அனுப்பவும்.",
    view_case_study: "வழக்கு ஆய்வு",
    view_github: "GitHub",
    view_demo: "நேரடி டெமோ",
  },
} as const;

type DictKey = keyof typeof dictionary.en;

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: DictKey) => string;
}>({
  lang: "en",
  setLang: () => {},
  t: (key) => dictionary.en[key],
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: (key: DictKey) => dictionary[lang][key] ?? dictionary.en[key],
    }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
