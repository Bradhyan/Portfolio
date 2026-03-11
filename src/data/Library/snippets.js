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
}

];