import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import Footer from './_common/Footer/Footer'
import Navbar from './_common/Navbar/Navbar'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import "antd/dist/antd.css";
import './all.sass'


i18n
  // .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "confirm password": "Confirm passworddd",
          "already have an account": "already have an account",
          "by creating this account, you agree to our":
            "By creating this account, you agree to our",
          "privacy policy": "Privacy Policy",
          "terms of use": "Terms of Use",
          "sign up successfull, please check your":
            "Sign up successful, please check your email to activate your account",
          "home page": "Home Page"
        }
      },
      ar: {
        translation: {
          "confirm password": "تأكيد كلمة المرور",
          "already have an account": "يوجد حساب مسبق لهذه البيانات",
          "by creating this account, you agree to our":
            "بإنشاء هذا الحساب، أنت توافق على",
          "privacy policy": "سياسة الخصوصية",
          "terms of use": "شروط الاستخدام",
          "sign up successfull, please check your":
            "تم التسجيل بنجاح، يرجى فحص البريد الالكتروني الخاص بكم لتفعيل الحساب",
          "home page": "الصفحة الرئيسية"
        }
      },

      tr: {
        translation: {
          "confirm password": "Şifreyi Onayla",
          "already have an account": "Zaten hesab var",
          "by creating this account, you agree to our":
            "Bu hesabı oluşturarak, kabul eden",
          "privacy policy": "Gizlilik Politikası",
          "terms of use": "Kullanım Şartları",
          "sign up successfull, please check your":
            "Başarılı bir şekilde kayıt olun, lütfen hesabınızı etkinleştirmek için e-postanızı kontrol edin",
          "home page": "Ana Sayfa"
        }
      }
    },
    lng: "en",
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  const path = global && global.window ? global.window.location.pathname : "";
  const locale = path ? path.split('/')[1] : 'en'
  useEffect(() => {
    // console.log('locale',locale)
    i18n.changeLanguage(locale);
    
    // const AOS = require("aos");
    // AOS.init();
  }, [
    
  ]);

  return (
    <div dir={locale === "ar" || locale === "pr" ? "rtl" : "ltr"}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
