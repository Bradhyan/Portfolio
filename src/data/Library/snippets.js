import GlassCard from "@/components/ui/snippets/glassCard/GlassCard";
import { glassCardCode } from "@/components/ui/snippets/glassCard/GlassCard.code";
import BaseNavbar from "../../components/ui/snippets/baseNavbar/BaseNavbar";
import { BaseNavbarCode } from "../../components/ui/snippets/baseNavbar/BaseNavbar.code";
import LightNavbar from "@/components/ui/snippets/lightNavbar/LightNavbar";
import { lightNavbarCode } from "@/components/ui/snippets/lightNavbar/LightNavbar.code";
import PureNavbar from "@/components/ui/snippets/pureNavbar/PureNavbar";
import { pureNavbarCode } from "@/components/ui/snippets/pureNavbar/PureNavbar.code";
import SimpleCarousel from "@/components/ui/snippets/simpleCarousel/SimpleCarousel.jsx";
import { SimpleCarouselCode } from "@/components/ui/snippets/simpleCarousel/SimpleCarousel.code.js";
import PremiumCarousel from "@/components/ui/snippets/premiumCarousel/PremiumCarousel.jsx";
import { premiumCarouselCode } from "@/components/ui/snippets/premiumCarousel/PremiumCarousel.code.js";
import Hero from "@/components/ui/snippets/hero/Hero.jsx";
import { HeroCode } from "@/components/ui/snippets/hero/Hero.code.js";
import Modal from "@/components/ui/snippets/modal/Modal.jsx";
import { ModalCode } from "@/components/ui/snippets/modal/Modal.code.js";
import NeonCard from "@/components/ui/snippets/neonCard/NeonCard.jsx";
import { NeonCardCode } from "@/components/ui/snippets/neonCard/NeonCard.code.js";
import HoverCard from "@/components/ui/snippets/hoverCard/HoverCard.jsx";
import { HoverCardCode } from "@/components/ui/snippets/hoverCard/HoverCard.code.js"; 
import LibraryComponent from "@/components/ui/snippets/libraryComponent/LibraryComponent.jsx";
import { LibraryComponentCode } from "@/components/ui/snippets/libraryComponent/LibraryComponent.code.js";
import { OneTemplateCode } from "../../components/ui/snippets/template1/OneTemplate.code";
import { SecondTemplateCode } from "../../components/ui/snippets/template2/SecondTemplate.code";
import { SocialSidebarCode } from "../../components/ui/snippets/socialSidebar/SocialSidebar.code.js";
import  SocialSidebar  from "../../components/ui/snippets/socialSidebar/SocialSidebar.jsx";
import OneForm from "../../components/ui/snippets/oneForm/OneForm.jsx";
import { OneFormCode } from "../../components/ui/snippets/oneForm/OneForm.code.js";  
import {HtmlFormCode } from "../../components/ui/snippets/htmlForm/HtmlForm.code.js";
import Table from "../../components/ui/snippets/table/Table.jsx";
import { TableCode } from "../../components/ui/snippets/table/Table.code.js"; 
import { TableVanilla } from "../../components/ui/snippets/tableVanilla/TableVanilla.code.js";  
import { DashboardVanilla } from "../../components/ui/snippets/dashboardVanilla/DasboardVanilla.code.js";
import { DashboardCode } from "../../components/ui/snippets/dashboard/Dashboard.code.js";
import Dashboard from "../../components/ui/snippets/dashboard/Dashboard.jsx"; 




export const snippets = [

  //Card con efecto glassmorphism
{
  id: "glass-card",
  title: "Glass Card",
  category: "layout",
  language: "jsx",
  component: GlassCard,
  code: glassCardCode,
  previewType: "small"
},

//Navbar básica
{
  id: "base-navbar",
  title: "Base Navbar",
  category: "layout",
  language: "jsx",
  component: BaseNavbar,
  code: BaseNavbarCode,
  previewType: "small" //large
},

//Navbar con diseño claro
{
  id: "light-navbar",
  title: "Light Navbar",
  category: "layout",
  component: LightNavbar,
  code: lightNavbarCode,
  language: "jsx",
  previewType: "large"
},

//Navbar pura (HTML + CSS)
{
  id: "pure-navbar",
  title: "HTML CSS Navbar",
  category: "layout",
  component: PureNavbar,
  code: pureNavbarCode,
  language: "html",
  previewType: "large"
},

//Carousel simple
{
  id: "simple-carousel",
  title: "Simple Carousel",
  category: "layout",
  component: SimpleCarousel,
  code: SimpleCarouselCode,
  language: "jsx",
  previewType: "large"
},

//Carousel premium con animaciones y autoplay
{
  id: "premium-carousel",
  title: "Premium Carousel",
  category: "layout",
  component: PremiumCarousel,
  code: premiumCarouselCode,
  language: "jsx",
  previewType: "large"
},

//Hero
{
  id: "Hero",
  title: "Hero Section",
  category: "layout",
  component: Hero,
  code: HeroCode,
  language: "jsx",
  previewType: "large"
},

//Model 
{
  id: "Model",
  title: "Project Details Modal",
  category: "layout",
  component: Modal,
  code: ModalCode,
  language: "jsx",
  previewType: "small"
},

//neonCard
{
  id: "NeonCard",
  title: "Neon Card",
  category: "layout",
  component: NeonCard,
  code: NeonCardCode,
  language: "jsx",
  previewType: "large"
},

//HoverCard
{
  id: "HoverCard",
  title: "Hover Card",
  category: "layout",
  component: HoverCard,
  code: HoverCardCode,
  language: "jsx",
  previewType: "large"
},

//LibraryComponent
{
  id: "LibraryComponent",
  title: "Library Component",
  category: "layout",
  component: LibraryComponent,
  code: LibraryComponentCode,
  language: "jsx",
  previewType: "large"
}, 

//One Template
{
  id: "OneTemplate",
  title: "One Template",
  category: "layout",
  code: OneTemplateCode,
  language: "jsx",
  previewType: "small"
}, 

//Second Template
{
  id: "SecondTemplate",
  title: "Second Template",
  category: "layout",
  code: SecondTemplateCode,
  language: "jsx",
  previewType: "small"
},

//Social Sidebar
{
  id: "SocialSidebar",
  title: "Social Sidebar",
  category: "layout",
  component: SocialSidebar,
  code: SocialSidebarCode,
  language: "jsx",
  previewType: "large"
},

//One Form
{
  id: "OneForm",
  title: "Jsx Form",
  category: "layout",
  component: OneForm,
  code: OneFormCode,
  language: "jsx",
  previewType: "large"
},

{
  id: "HtmlForm",
  title: "HTML Form",
  category: "layout",
  code: HtmlFormCode,
  language: "html",
  previewType: "small"
}, 

{
  id: "Table",
  title: "Table",
  category: "layout",
  component: Table,
  code: TableCode,
  language: "jsx",
  previewType: "large"
}, 

{
  id: "TableVanilla",
  title: "Vanilla Table",
  category: "layout",
  code: TableVanilla,
  language: "jsx",
  previewType: "small"
}, 

{
  id: "DashboardVanilla",
  title: "Dashboard Vanilla",
  category: "layout",
  code: DashboardVanilla,
  language: "jsx",
  previewType: "large"
},

{
  id: "Dashboard",
  title: "Dashboard ",
  category: "layout",
  component: Dashboard,
  code: DashboardCode,
  language: "jsx",
  previewType: "large"
}

];