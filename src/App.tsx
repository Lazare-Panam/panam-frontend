import { lazy, Suspense } from "react"

const LoadingScreen = lazy(() => import("./components/Loading/LoadingScreen"))
const ErrorPage = lazy(() => import("./components/Error/ErrorPage"))
const Layout = lazy(() => import("./Layout"))
const CrossReference = lazy(() => import("./components/Cross_Reference/CrossReference"))
const RegisterForm = lazy(() => import("./components/Account/components/RegisterForm"))
const Login = lazy(() => import("./components/Account/Login"))
const CatalogPdfs = lazy(() => import("./components/Auth/CatalogPdfs/CatalogPdfs"))
const News = lazy(() => import("./components/News/News"))
const DashBoard = lazy(() => import("./components/Dashboard/Dashboard"))
const ProductPage = lazy(() => import("./components/All_Categories/ProductPage"))
const NotFound = lazy(() => import("./components/Error/NotFound"))
const CartPage = lazy(() => import("./components/Cart/CartPage"))
const IndustryPage = lazy(() => import("./components/Industries/components/IndustryPage"))
const AuthAndInquiryPage = lazy(() => import("./components/Auth/AuthAndInquiryPage"))
const ProductGallery = lazy(() => import("./components/Product_Gallery/components/ProductGallery"))
const AboutUs = lazy(() => import("./components/About_Us/AboutUs"))
const Industries = lazy(() => import("./components/Industries/Industries"))
const ProductDetailPage = lazy(() => import("./components/Product_Details/ProductDetails"))
const MarineSubseaPage = lazy(() => import("./components/Industries/components/MaineSubSea"))
const OilGasPage = lazy(() => import("./components/Industries/components/OilGas"))
const HydrogenPage = lazy(() => import("./components/Industries/components/Hydrogen"))
const AerospaceDefensePage = lazy(() => import("./components/Industries/components/AeroSpaceDefense"))
const ChemicalsPage = lazy(() => import("./components/Industries/components/Chemicals"))
const FoodBeveragePage = lazy(() => import("./components/Industries/components/FoodBeverage"))
const PartnershipAnnouncementPage = lazy(() => import("./components/News/components/PartnershipAnnoucement"))
const DoubleBlockBleedBlog = lazy(() => import("./components/News/components/DoubleBlockBleedBlog"))
const CheckValveBlog = lazy(() => import("./components/News/components/CheckValveBlog"))
const AdminLogin = lazy(() => import("./components/Admin/components/AdminLogin"))
const AdminDashboard = lazy(() => import("./components/Admin/components/AdminDashboard"))
const HydrogenValvesBlog = lazy(() => import("./components/News/components/HydrogenBlog"))
const SearchResults = lazy(() => import("./components/SearchResults/SearchResults"))
const PartNumberDetail = lazy(() => import("./components/ProductDetail/PartNumberDetail"))
const SwivelGaugeAdaptersBlog = lazy(() => import("./components/News/components/SwivelGaugeBlog"))
const ResourcesPage = lazy(() => import("./components/Resources/ResourcesPage"))
const CertificationsPage = lazy(() => import("./components/Resources/components/Certifications"))
const TwoWayManifoldPage = lazy(() => import("./TwoVMGrid/TwoVmGrid"))
//const PipeFittingPage = lazy(() => import("./PipeFittings/PipeFittings"))
const BallValvePage = lazy(() => import("./components/BallValves/BallValves"))
const ResetPasswordPage = lazy(() => import("./components/Account/components/ResetPasswordPage"))
import Landing2 from "./components/Landing2/Landing2"
import NeedleValveHBPage from "./components/NeedleValves/NeedleValveGrid/HBGrid/HBGridPage"
import NeedleValveIBPage from "./components/NeedleValves/NeedleValveGrid/IBGrid/NeedleValveIBPage"
import NeedleValveHPPage from "./components/NeedleValves/NeedleValveGrid/HPGrid/NeedleValvesHPPage"
import ProductPage2 from "./components/AllCategoriesNew/ProductPage2"
import NeedleValvesPage from "./components/NeedleValves/NeedleValvePage"
import NeedleValveSBPage from "./components/NeedleValves/NeedleValveGrid/SBGrid/SBGrid"
import MiniValvePage from "./components/NeedleValves/NeedleValveGrid/MiniGrid/MiniValves"
import ValvesPage from "./components/Valves/Valve"
import PCVPage from "./components/CheckValvesGrid/CheckValves"
import ReliefValvePage from "./components/ReliefValvesGrid/ReliefValvesGrid"
import ConnectorElbowPage from "./components/TubeFittingsGrid/TubeFittingsGrid"
import UnionPage from "./components/UnionGrid/UnionPage"
import FittingsPage from "./components/Fittings/Fittings"
import TubeFittingsPage from "./components/Fittings/TubeFittingsPage"
import ReducerPage from "./components/ReducerGrid/ReducerGrid"
import AdapterPage from "./components/AdapterGrid/AdapaterGridPage"
import PortConnectorPage from "./components/PortConnectorGrid/PortConnector"
import WeldGaugeConnectorPage from "./components/WeldConnectorGrid/WeldConnectorGrid"
import AccessoryPage from "./components/AccessoriesGrid/AccessoryPage"
import DielectricGasketPage from "./components/DieElectricGrid/DieElectricPage"
import NipplesCouplings from "./PipeFittings/pages/PipeFittingsNipplesCouplings"
import Elbows from "./PipeFittings/pages/Elbows"
import UnionsConnectors from "./PipeFittings/pages/UnionsConnectors"
import AdaptersPlugs from "./PipeFittings/pages/AdaptersPlugs"
import TeesCross from "./PipeFittings/pages/TeesCross"
import PipeFittingsIndexPage from "./PipeFittings/PipeFittingsIndexPage"
export const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Landing2 />
          </Suspense>
        ),
      },
      {
        path: "products2",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ProductPage />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ProductPage2 />
          </Suspense>
        ),
      },
      {
        path: "products/:id",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ProductGallery />
          </Suspense>
        ),
      },
      {
        path: "products/:id/:subId",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ProductGallery />
          </Suspense>
        ),
      },
      {
        path: "catalogPDFs/:detailId",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ProductDetailPage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "industries",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Industries />
          </Suspense>
        ),
      },
      {
        path: "industries/:id",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <IndustryPage />
          </Suspense>
        ),
      },
      {
        path: "blog",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <News />
          </Suspense>
        ),
      },
      {
        path: "blog/panam-valves-rg-fluid-power-partnership",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <PartnershipAnnouncementPage />
          </Suspense>
        ),
      },
      {
        path: "blog/double-blog-and-bleed",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <DoubleBlockBleedBlog />
          </Suspense>
        ),
      },
      {
        path: "blog/check-valves-blog",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <CheckValveBlog />
          </Suspense>
        ),
      },
      {
        path: "blog/hydrogen-blog",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <HydrogenValvesBlog />
          </Suspense>
        ),
      },
      {
        path: "blog/swivel-gauge-blog",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <SwivelGaugeAdaptersBlog />
          </Suspense>
        ),
      },
      {
        path: "industries/marine-subsea",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <MarineSubseaPage />
          </Suspense>
        ),
      },
      {
        path: "industries/oil-gas",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <OilGasPage />
          </Suspense>
        ),
      },
      {
        path: "industries/hydrogen",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <HydrogenPage />
          </Suspense>
        ),
      },
      {
        path: "industries/aerospace-defense",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AerospaceDefensePage />
          </Suspense>
        ),
      },
      {
        path: "industries/chemicals-petrochemical",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ChemicalsPage />
          </Suspense>
        ),
      },
      {
        path: "industries/food-beverages",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <FoodBeveragePage />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <RegisterForm />
          </Suspense>
        ),
      },

      {
        path: "dashboard",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <DashBoard />
          </Suspense>
        ),
      },
      {
        path: "dashboard/:section",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <DashBoard />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: "enquiry",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AuthAndInquiryPage />
          </Suspense>
        ),
      },
      {
        path: "cross-reference",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <CrossReference />
          </Suspense>
        ),
      },
      {
        path: "catalogPDFs",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <CatalogPdfs />
          </Suspense>
        ),
      },
      {
        path: "reset-password",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ResetPasswordPage />
          </Suspense>
        ),
      },
      {
        path: "landing2",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Landing2 />
          </Suspense>
        ),
      },
      {
        path: "adminLogin",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AdminLogin />
          </Suspense>
        ),
      },
      {
        path: "adminDashboard",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AdminDashboard />
          </Suspense>
        ),
      },
      {
        path: "search/results",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <SearchResults />
          </Suspense>
        ),
      },
      {
        path: "partNumber/:partNumber",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <PartNumberDetail />
          </Suspense>
        ),
      },

      {
        path: "resources",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ResourcesPage />
          </Suspense>
        ),
      },
      {
        path: "certificates",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <CertificationsPage />
          </Suspense>
        ),
      },
      {
        path: "certificates/:tab",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <CertificationsPage />
          </Suspense>
        ),
      },
      {
        path: "product-grid/2-way-manifolds",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <TwoWayManifoldPage />
          </Suspense>
        ),
      },
      {
        path: "/pipe-fittings",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <PipeFittingsIndexPage />
          </Suspense>
        ),
      },
      { path: "/product-grid/ball-valves", element: <BallValvePage /> },
      { path: "/needle-valves/needle-valves-ib", element: <NeedleValveIBPage /> },
      { path: "/needle-valves/needle-valves-hb", element: <NeedleValveHBPage /> },
      { path: "/needle-valves/needle-valves-hp", element: <NeedleValveHPPage /> },
      { path: "/needle-valves/needle-valves-sb", element: <NeedleValveSBPage /> },
      { path: "/needle-valves/needle-valves-mini", element: <MiniValvePage /> },
      { path: "/needle-valves", element: <NeedleValvesPage /> },
      { path: "/valves", element: <ValvesPage /> },
      { path: "/valves/pcv", element: <PCVPage /> },
      { path: "/valves/relief-valves", element: <ReliefValvePage /> },
      { path: "/fittings/connectors", element: <ConnectorElbowPage /> },
      { path: "/fittings/union", element: <UnionPage /> },
      { path: "/fittings", element: <FittingsPage /> },
      { path: "/tube-fittings", element: <TubeFittingsPage /> },
      { path: "/fittings/reducer", element: <ReducerPage /> },
      { path: "/fittings/adapter", element: <AdapterPage /> },
      { path: "/fittings/port-connector", element: <PortConnectorPage /> },
      { path: "/fittings/weld-gauge", element: <WeldGaugeConnectorPage /> },
      { path: "/fittings/accessories", element: <AccessoryPage /> },
      { path: "/fittings/die-electric", element: <DielectricGasketPage /> },
      { path: "/pipe-fittings/nipples-couplings", element: <NipplesCouplings /> },
      { path: "/pipe-fittings/adapters-plugs", element: <AdaptersPlugs /> },
      { path: "/pipe-fittings/unions-connectors", element: <UnionsConnectors /> },
      { path: "/pipe-fittings/elbows", element: <Elbows /> },
      { path: "/pipe-fittings/tees-cross", element: <TeesCross /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]
