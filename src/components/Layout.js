import React, {useEffect, useState, Component} from 'react'
import { Helmet } from 'react-helmet'
import Footer from './_common/Footer/Footer'
import styled from 'styled-components'
import Navbar from './_common/Navbar/Navbar'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import company from "../_company/company";
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import "antd/dist/antd.css";
import "swiper/css/swiper.css";
import './all.sass'

const path = global && global.window ? global.window.location.pathname : "";
  const locale = path ? path.split('/')[1] : 'en'
  
i18n
  // .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "all projects": "All Projects",
          "projects": "Projects",
          "properties": "Properties",
          "other projects": "Other Properties",
          "home": "Home",
          "about us": "About us",
          "contact us": "Contact us",
          "education": "Education",
          "sign in": "Sign in",
          "languge": "Language",
          "for sale": "For Sale",
          "buy": "Buy",
          "rent": "Rent",
          "city": "City",
          "district": "District",
          "rooms": "Rooms",
          "max price": "Max Price",
          "search": "Search",
          "recent projects": "Recent Projects",
          "view more": "view more",
          "let us": "Let us",
          "sell your": "Sell Your",
          "property": "Property",
          "let us contact you": "let us call you",
          "recommended projects": "Recommended Projects",
          "please write your email": "please write your email",
          "apartments": "Apartments",
          "villas": "Villas",
          "offices": "Offices",
          "lands": "Lands",
          "shops": "Shops",
          "price starts": "Price Starts",
          "location": "Location",
          "installment": "Installment",
          "months": "Months",
          "cash": "Cash",
          "delivery": "Delivery",
          "ready": "Ready",
          "downpayment": "Downpayment",
          "our services": "Our Services",
          "real estate consultant":"Real Estate Consultant",
          "real estate consultant description":"Real Estate Consultant description",
          "property managment":"Property Managment",
          "property managment description": "",
          "legal process":"Legal Process",
          "legal process description": "",
          "university applications": "University Applications",
          "university applications description": "university applications description",
          "name": "Name",
          "email": "Email",
          "number": "Number",
          "message": "Message",
          "send": "send",
          "project information": "Project Information",
          "why this property": "Why this property",
          "prices & areas" : "Prices & Areas",
          "seaview" : "Sea View",
          "downtown" : "Downtown",
          "guaranty" : "Guaranty and Offices",
          "our goal is to help you choose": "Our goal is to help you choose",
          "the best investment": "the best investment possible",
          "sea view projects description": "",
          "we provide all consulting and legal services":"we provide all consulting and legal services regarding investing in turkey.",
          "bassin express": "bassin express",
          "bassin express description": "",
          "latest projects" : "Our latest projects",
          "latest projects description" : "you can view our latest projects that fits your needs",
          "our history": "our history ",
          "our history descrition": "our history descrition",
          "our mission": "our mission",
          "our mission description": "our mission",
          "our vision": "our vision",
          "our vision description": "our vision description",
          "education description": "education description",
          "project location": "Project Location",
          "our partners":"Our Partners",
          "total population": "TOTAL POPULATION",
          "annual increase": "Annual Increase",
          "MARITAL STATUS":"MARITAL STATUS",
          "married": "Married",
          "single": "Single",
          "socio economic":"SOCIO-ECONOMIC SITUATION",
          "price change": "Price Change",
          "1 month change": "1 Month Change",
          "3 year change": "3 Year Change",
          "5 year change": "5 Year Change",
          "location details": "Location Details"

        }
      },
      ar: {
        translation: {
          "all projects": "جميع المشاريع",
          "projects": "المشاريع",
          "properties": "العقارات",
          "other projects": "عقارات اخرى",
          "home": "الرئيسية",
          "about us": "من نحن",
          "contact us": "تواصل معنا",
          "education": "التعليم",
          "sign in": "تسجيل الدخول",
          "languge": "اللغة",
          "for sale": "للبيع",
          "buy": "بيع",
          "rent": "ايجار",
          "city": "المدينة",
          "district": "المنطقة",
          "rooms": "الغرف",
          "max price": "اعلى سعر",
          "search": "بحث",
          "recent projects": "اخر المشاريع",
          "view more": "المزيد",
          "let us": "دعنا",
          "sell your": "نبيع",
          "property": "عقارك",
          "let us contact you": "دعنا نتصل بك",
          "recommended projects": "اهم المشاريع",
          "please write your email": "من فضلك ادخل ايميلك",
          "apartments": "شقق",
          "villas": "فلل",
          "offices": "مكاتب",
          "lands": "اراضي",
          "shops": "محلات",
          "price starts": "تبدأ الاسعار",
          "location": "الموقع",
          "installment": "تقسيط",
          "months": "شهر",
          "cash": "كاش",
          "delivery": "تسليم",
          "ready": "جاهز",
          "downpayment": "دفعة اولى",
          "our services": "خدماتنا",
          "real estate consultant":"مستشار عقاري",
          "real estate consultant description":"نوفر فى شركة Homey خدمة الاستشارات العقارية عن طريق عرض مجموعة من المشاريع التى تتيح لعملائنا المقارنة فيما بينها واختيار المشروع المناسب لاحتياجاتهم وامكانياتهم سواء للسكن او للاستثمار ",
          "property managment":"ادارة عقارات",
          "property managment description": "خدمة ادارة العقار  هى خدمة نقدمها فى شركة Homey لعملائنا المستثمريين حيث نقوم بادارة العقار عن طريق الاعلان عن العقار  البحث عن مستأجر وانهاء كافة الاجراءات القانونية وتحصيل العائد الشهري وايداعة فى حساب المالك بعد دفع الفواتير وايضا الاهتمام بالعناية الدورية بالعقار من ترميم وتجديد ونظافة",
          "legal process":"خدمات قنونية",
          "legal process description": "الاستشارات القانونية هى خدمة نقدمها لعملائنا تشمل انهاء كافة الامور القانونية المتعلقة بشراء العقار والحصول على الطابو والتقديم على الجنسية التركية . كما نساعد في توضيح الصورة كاملة عن طريق الاجابة على كافة الاسئلة والاستفسارات التى يحتاجها المستثمر حتى يستثمر بشكل امن وقانونى",
          "university applications": "تقديم جامعات",
          "university applications description": "خدمة القبولات الجامعية تعتبر  من اهم عناصر الاستقرار فى تركيا لذلك فى شركة Homey نوفر لكم كافة الخدمات في مجال القبولات الجامعية والدراسة في تركيا عن طريق مساعدتك ف تحضير  اوراقك وتوثيقها  وتجهيز الملف الخاص بك ومساعدتك فى تقديم اوراقك لدي الجامعات والحصول علي القبولات في المجالات التي ترغب في دراستها ",
          "name": "الاسم",
          "email": "الايميل",
          "number": "الرقم",
          "message": "الرسالة",
          "send": "ارسال",
          "project information": "معلومات المشروع",
          "why this property": "لماذا هذا المشروع",
          "prices & areas" : "المساحات والاسعار",
          "seaview" : "مشاريع باطلالة بحرية",
          "downtown" : "مشاريع وسط المدينة",
          "guaranty" : "ضمان ومكاتب فندقية",
          "our goal is to help you choose": "هدفنا مساعدتك لاختيار ",
          "the best investment": "الاستثمار الافضل",
          "sea view projects description": "مشاريع تتميز بإطلالات خلابة تتنوع ما بين الإطلالات البحرية وإطلالات الغابات وإطلالات على وسط المدينة",
          "we provide all consulting and legal services":"نوفر لك جميع الخدمات الإستشارية والقانونية التى توفر لك المناخ المناسب للاستقرار  ومعرفة كل المعلومات المتعلقة بالإستثمار فى تركيا",
          "bassin express": "منطقة (Bassin Express)",
          "bassin express description": "مرحبا أنا صديقكم كريم حابب نبدأ رحلتا فى اسطنبول عن طريق مشاركتكم بعض المعلومات عن أهم المناطق الإستثمارية لنبدأ بالحديث عن منطقة من أهم المناطق الإستثمارية فى اسطنبول منطقة ( Bassin Express  ) هى منطقة تابعة لبلدية باغجلر تقع في القسم الأوروبي من اسطنبول وتعتبر من المناطق المركزية فى اسطنبول حيث تتوسط المسافة بين مطار اتاتورك و مدينة المعارض من ناحية وبين المطار الجديد من ناحية اخرى  كما تنتشر فيها المشاريع الاستثمارية على طرفي محور الباسين اكسبريس لذلك تعتبر من أهم المناطق الاستثمارية في اسطنبول بحيث شهدت السنوات العشرة الأخيرة زيادة في سعر العقارات بنسب وصلت إلى أكثر من 20 ضعف . كما انها تقع على محور  الباسين اكسبريس والذى يعتبر من أهم الطرق الواصلة بين خطوط المواصلات الرئيسية في اسطنبول والذى يؤدى ال اشهر مراكز التسوق Mall of istanbul  كما ان المنطقة تتمتع بتوفر جميع الخدمات والبنوك وايضا المدارس سواء حكومية أو دولية كما تحتوي المنطقة على أكثر من 30 فندق منها الجاهز و منها ما سيتم الانتهاء منه في أقرب وقت.",
          "latest projects" : "احدث العروض المضافة",
          "latest projects description" : "يمكنك الاطلاع على اخر مشاريعنا الجديدة التى تناسب احتياجاتك",
          "our history": "تاريخنا",
          "our history descrition": "وقد تمكنا على مدار فترة عملنا خدمة اكثر من ١٥٠٠ عميل قمنا بمساعدتهم وتوفير كافة الخدمات والتسهيلات لهم لان  مهمتنا الاساسية هى توفير صورة شاملة للبيئة الاستثمارية مما يدفع المستثمر للاختيار المناسب له من بين جميع الخيارات والفرص المتاحة امامه . كما ان خدماتنا لا تتوقف عند التسويق للمشاريع العقارية ولكن ايضا نقدم مجموعه من الخدمات التي تسهل على المستثمر الكثير من الامور  منها توفير تسهيلات الدفع ٫ المفاوضة و إعداد ملف التقديم على الجنسية التركية و الخدمات القانونية الأخرى من فتح حساب البنك و تسجيل الرقم الضريبيفي ايضا فى مرحلة ما بعد البيع نقدم خدمة ادارة العقار مما يوفر له عائد استثمارى مناسب ومجزى ",
          "our mission": "مهمتنا",
          "our mission description": "توفير صورة شاملة للبيئة الاستثمارية مما يدفع المستثمر للاختيار المناسب له من بين جميع  الخيارات والفرص المتاحة امامه ما بين الاستثمار فى شقة سكنية او محال تجارية",
          "our vision": "رؤيتنا",
          "our vision description": "ان نقوم بخدمة اكبر عدد من العملاء ومساعدتهم في الاستثمار الناجح وتحقيقهم اكبر عائد استثمارى",
          "education description": "تعتبر الدراسة فى تركيا من اهم عناصر الاستقرار لذلك فى شركة Homey نوفر لكم كافة الخدمات في مجال القبولات الجامعية والدراسة في تركيا عن طريق مساعدتك ف تحضير  اوراقك وتوثيقها  وتجهيز الملف الخاص بك ومساعدتك فى تقديم اوراقك لدي الجامعات والحصول علي القبولات في المجالات التي ترغب في دراستها ",
          "project location": "موقع المشروع",
          "our partners":"شركائنا",
          "total population": "عدد السكان",
          "annual increase": "الزيادة السنوية",
          "marital status":"الحالة الاجتماعية",
          "married": "متزوج",
          "single": "اعزب",
          "socio economic":"الحالة الاجتماعية-الاقتصادية",
          "price change": "تغير السعر",
          "1 month change": "تغير شهر",
          "3 year change": "تغير ٣ سنوات",
          "5 year change": "تغير ٥ سنوات",
          "location details": "تفاصيل المنطقة"

        }
      },
      pr: {
        translation: {
          "language": "زبان",
          "ready": "فوری",
          "delivery date": "اماده تحویل",
          "location": "موقعیت",
          "cash": "نقدی",
          "months": " اقساط ماهانه",
          "downpayment": "پیش پرداخت",
          "prices starts":"شروع قیمتها",
          "about project": "در باره پروژه",
          "project location": "موقعیت پروژه",
          "project images": "عکس",
          "project videos": "فيديو المشروع",
          "project features": "مزایا",
          "prices & rooms": "تعداد اتاقها وقیمتها",
          "from": "من",
          "to": "الى",
          "total population": "کل جمعیت",
          "annual increase": "افزایش سالانه",
          "marital status":"وضعیت تاهل",
          "married": "ازدواج",
          "single": "تک",
          "socio economic":"اقتصادی اجتماعی",
          "price change": "تغییر قیمت",
          "1 month change": "1 ماه تغییر",
          "3 year change": "تغییر سال 3",
          "5 year change": "تغییر سال 5",
          "location details": "اطلاعات مکان"
        }
      },
      fr: {
        translation: {
          "language": "la langue",
          "ready": "pret",
          "delivery date": "date de livraison",
          "location": "emplacement",
          "cash": "encaisser",
          "months": "mois",
          "downpayment": "acompte or verssement",
          "prices starts":"les prix commece",
          "about project": "a propos du projet",
          "project location": "lieu du projet",
          "project images": "les photos du project",
          "project videos": "mois du projet",
          "project features": "carecteristique du projet",
          "prices & rooms": "prix et pieces",
          "from": "de",
          "to": "a"
        }
      },
      tr: {
        translation: {
          language: "dil",
          "Ready": "Ready"
        }
      }
    },
    lng: 'en',
    // locale === 'ar' || locale === 'pr' || locale === 'fr' ? locale : 'en',
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });


const TemplateWrapper = ({ children }) => {
  // const path = global && global.window ? global.window.location.pathname : "";
  // const locale = path ? path.split('/')[1] : 'en'
  const [currentLang, setCurrentLang] = useState(locale)
  const { title, description } = useSiteMetadata()

  useEffect(() => {
    
    i18n.changeLanguage(locale === 'ar' || locale === 'pr' || locale === 'fr' ? locale : 'en'); 
    // handleGetCurrencies
  }, [
    
  ]);
  const AppWrapper = styled.div`
  .swiper-button-next-new,
  .swiper-button-prev-new {
    position: absolute;
    top: 50%;
    z-index: 99999999 !important;
    box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    width: 40px;
    height: 40px;
    background-color: ${company.colorPrimary};
    border-radius: 50%;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    opacity: 0.5;
    svg {
      margin: auto !important;
      transform: translateY(5px);
    }
  }
  @keyframes moveArrowRight {
    0% {
      background-color: rgba(64, 89, 93, 0.247);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
      right: 10px;
    }

    70% {
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }

    100% {
      // background-color: white;
      right: 15px;
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }

  @keyframes moveArrowLeft {
    0% {
      background-color: rgba(64, 89, 93, 0.247);
      left: 10px;
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
    }

    50% {
      left: 15px;
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }

    100% {
      // background-color: white;
      left: 10px;
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }

  .swiper-button-next-new {
    animation-name: moveArrowRight;
  }

  .swiper-button-prev-new {
    animation-name: moveArrowLeft;
  }
  h1,
    h2,
    h3,
    h4,
    h5,
    h6 
    p,
    a,
    input,
    button,
    label,
    span,
    div {
      font-family: ${props => props.arabic ? "Almarai" : ''};
    }
   
  
  `
  return (
    <AppWrapper dir={locale === "ar" || locale === "pr" ? "rtl" : "ltr"} arabic={locale === "ar" ? true : false}  >
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link href="https://fonts.googleapis.com/css?family=Almarai&display=swap" rel="stylesheet" />
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
      <Navbar data-aos="fade-up"/>
      
      <div>{children}</div>
      <Footer />
    </AppWrapper>
  )
}

export default TemplateWrapper
