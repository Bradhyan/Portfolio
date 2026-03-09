import GlassCard from "@/components/ui/snippets/GlassCard";
import { glassCardCode } from "@/components/ui/snippets/GlassCard.code";
import BaseNavbar from "../../components/ui/snippets/BaseNavbar";
import { BaseNavbarCode } from "../../components/ui/snippets/BaseNavbar.code";

export const snippets = [
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
}


];