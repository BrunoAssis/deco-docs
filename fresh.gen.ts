// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $admin_catchall_ from "./routes/admin/[...catchall].tsx";
import * as $api_calc from "./routes/api/calc.tsx";
import * as $api_case from "./routes/api/case.tsx";
import * as $api_leads from "./routes/api/leads.tsx";
import * as $api_platform from "./routes/api/platform.tsx";
import * as $api_ranking from "./routes/api/ranking.ts";
import * as $api_webinar from "./routes/api/webinar.tsx";
import * as $bugbounty from "./routes/bugbounty.ts";
import * as $docs_css from "./routes/docs.css.ts";
import * as $hackathon4 from "./routes/hackathon4.ts";
import * as $hackathon5 from "./routes/hackathon5.ts";
import * as $proxy_image_index from "./routes/proxy/image/index.tsx";
import * as $Article from "./islands/Article.tsx";
import * as $ButtonTab from "./islands/ButtonTab.tsx";
import * as $CampHeader from "./islands/CampHeader.tsx";
import * as $CampMentor from "./islands/CampMentor.tsx";
import * as $Case from "./islands/Case.tsx";
import * as $ChangeDevice from "./islands/ChangeDevice.tsx";
import * as $ChangeTheme from "./islands/ChangeTheme.tsx";
import * as $ChartIsland from "./islands/ChartIsland.tsx";
import * as $Cms from "./islands/Cms.tsx";
import * as $ContactUs from "./islands/ContactUs.tsx";
import * as $FaviconImage from "./islands/FaviconImage.tsx";
import * as $ForwardBackButtons_ForwardBackButtons from "./islands/ForwardBackButtons/ForwardBackButtons.tsx";
import * as $Graph from "./islands/Graph.tsx";
import * as $Header from "./islands/Header.tsx";
import * as $HelpFaq from "./islands/HelpFaq.tsx";
import * as $Home_BuildShowcase from "./islands/Home/BuildShowcase.tsx";
import * as $Home_Dropdown from "./islands/Home/Dropdown.tsx";
import * as $Home_Header from "./islands/Home/Header.tsx";
import * as $ImpactCalculator from "./islands/ImpactCalculator.tsx";
import * as $LiveProjects from "./islands/LiveProjects.tsx";
import * as $NRF_BackgroundGrid from "./islands/NRF/BackgroundGrid.tsx";
import * as $NRF_Contact from "./islands/NRF/Contact.tsx";
import * as $NRF_Editor from "./islands/NRF/Editor.tsx";
import * as $NRF_EditorMobile from "./islands/NRF/EditorMobile.tsx";
import * as $NRF_Features from "./islands/NRF/Features.tsx";
import * as $NRF_FeaturesWithImage from "./islands/NRF/FeaturesWithImage.tsx";
import * as $NRF_Hero from "./islands/NRF/Hero.tsx";
import * as $NRF_HeroEditorTabbed from "./islands/NRF/HeroEditorTabbed.tsx";
import * as $NRF_PageWrapper from "./islands/NRF/PageWrapper.tsx";
import * as $NRF_ShowcaseEditorAccordion from "./islands/NRF/ShowcaseEditorAccordion.tsx";
import * as $NRF_ShowcaseEditorTabbed from "./islands/NRF/ShowcaseEditorTabbed.tsx";
import * as $NRF_TextLines from "./islands/NRF/TextLines.tsx";
import * as $OnThisPage from "./islands/OnThisPage.tsx";
import * as $PopUp from "./islands/PopUp.tsx";
import * as $PopularDocuments from "./islands/PopularDocuments.tsx";
import * as $Projects from "./islands/Projects.tsx";
import * as $RankingAnalyze from "./islands/RankingAnalyze.tsx";
import * as $RankingHeader from "./islands/RankingHeader.tsx";
import * as $Sidebar from "./islands/Sidebar.tsx";
import * as $SliderCampJS from "./islands/SliderCampJS.tsx";
import * as $SliderJS from "./islands/SliderJS.tsx";
import * as $WasThisPageHelpful from "./islands/WasThisPageHelpful.tsx";
import * as $pricing_PricingCard from "./islands/pricing/PricingCard.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
    "./routes/_middleware.ts": $_middleware,
    "./routes/admin/[...catchall].tsx": $admin_catchall_,
    "./routes/api/calc.tsx": $api_calc,
    "./routes/api/case.tsx": $api_case,
    "./routes/api/leads.tsx": $api_leads,
    "./routes/api/platform.tsx": $api_platform,
    "./routes/api/ranking.ts": $api_ranking,
    "./routes/api/webinar.tsx": $api_webinar,
    "./routes/bugbounty.ts": $bugbounty,
    "./routes/docs.css.ts": $docs_css,
    "./routes/hackathon4.ts": $hackathon4,
    "./routes/hackathon5.ts": $hackathon5,
    "./routes/proxy/image/index.tsx": $proxy_image_index,
  },
  islands: {
    "./islands/Article.tsx": $Article,
    "./islands/ButtonTab.tsx": $ButtonTab,
    "./islands/CampHeader.tsx": $CampHeader,
    "./islands/CampMentor.tsx": $CampMentor,
    "./islands/Case.tsx": $Case,
    "./islands/ChangeDevice.tsx": $ChangeDevice,
    "./islands/ChangeTheme.tsx": $ChangeTheme,
    "./islands/ChartIsland.tsx": $ChartIsland,
    "./islands/Cms.tsx": $Cms,
    "./islands/ContactUs.tsx": $ContactUs,
    "./islands/FaviconImage.tsx": $FaviconImage,
    "./islands/ForwardBackButtons/ForwardBackButtons.tsx":
      $ForwardBackButtons_ForwardBackButtons,
    "./islands/Graph.tsx": $Graph,
    "./islands/Header.tsx": $Header,
    "./islands/HelpFaq.tsx": $HelpFaq,
    "./islands/Home/BuildShowcase.tsx": $Home_BuildShowcase,
    "./islands/Home/Dropdown.tsx": $Home_Dropdown,
    "./islands/Home/Header.tsx": $Home_Header,
    "./islands/ImpactCalculator.tsx": $ImpactCalculator,
    "./islands/LiveProjects.tsx": $LiveProjects,
    "./islands/NRF/BackgroundGrid.tsx": $NRF_BackgroundGrid,
    "./islands/NRF/Contact.tsx": $NRF_Contact,
    "./islands/NRF/Editor.tsx": $NRF_Editor,
    "./islands/NRF/EditorMobile.tsx": $NRF_EditorMobile,
    "./islands/NRF/Features.tsx": $NRF_Features,
    "./islands/NRF/FeaturesWithImage.tsx": $NRF_FeaturesWithImage,
    "./islands/NRF/Hero.tsx": $NRF_Hero,
    "./islands/NRF/HeroEditorTabbed.tsx": $NRF_HeroEditorTabbed,
    "./islands/NRF/PageWrapper.tsx": $NRF_PageWrapper,
    "./islands/NRF/ShowcaseEditorAccordion.tsx": $NRF_ShowcaseEditorAccordion,
    "./islands/NRF/ShowcaseEditorTabbed.tsx": $NRF_ShowcaseEditorTabbed,
    "./islands/NRF/TextLines.tsx": $NRF_TextLines,
    "./islands/OnThisPage.tsx": $OnThisPage,
    "./islands/PopUp.tsx": $PopUp,
    "./islands/PopularDocuments.tsx": $PopularDocuments,
    "./islands/Projects.tsx": $Projects,
    "./islands/RankingAnalyze.tsx": $RankingAnalyze,
    "./islands/RankingHeader.tsx": $RankingHeader,
    "./islands/Sidebar.tsx": $Sidebar,
    "./islands/SliderCampJS.tsx": $SliderCampJS,
    "./islands/SliderJS.tsx": $SliderJS,
    "./islands/WasThisPageHelpful.tsx": $WasThisPageHelpful,
    "./islands/pricing/PricingCard.tsx": $pricing_PricingCard,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
