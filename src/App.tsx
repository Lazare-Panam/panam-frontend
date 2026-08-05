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

const SwivelGaugeAdaptersBlog = lazy(() => import("./components/News/components/SwivelGaugeBlog"))
const ResourcesPage = lazy(() => import("./components/Resources/ResourcesPage"))
const CertificationsPage = lazy(() => import("./components/Resources/components/Certifications"))
//const PipeFittingPage = lazy(() => import("./PipeFittings/PipeFittings"))
const ResetPasswordPage = lazy(() => import("./components/Account/components/ResetPasswordPage"))
import Landing2 from "./components/Landing2/Landing2"
import NeedleValveHBPage from "./components/ProductGrids/NeedleValveGrid/HBGrid/HBGridPage"
import NeedleValveIBPage from "./components/ProductGrids/NeedleValveGrid/IBGrid/NeedleValveIBPage"
import NeedleValveHPPage from "./components/ProductGrids/NeedleValveGrid/HPGrid/NeedleValvesHPPage"
import ProductPage2 from "./components/AllCategoriesNew/ProductPage2"
import NeedleValvesPage from "./components/NeedleValves/NeedleValvePage"
import NeedleValveSBPage from "./components/ProductGrids/NeedleValveGrid/SBGrid/SBGrid"
import MiniValvePage from "./components/ProductGrids/NeedleValveGrid/MiniGrid/MiniValves"
import ValvesPage from "./components/Valves/Valve"
import PCVPage from "./components/CheckValvesGrid/CheckValves"
import ReliefValvePage from "./components/ReliefValvesGrid/ReliefValvesGrid"
import ConnectorElbowPage from "./components/ProductGrids/TubeFittingsGrids/ConnectorElbowsGrid/ConnectorElbowPage"
import UnionPage from "./components/ProductGrids/TubeFittingsGrids/UnionGrid/UnionPage"
import FittingsPage from "./components/Fittings/Fittings"
import TubeFittingsPage from "./components/Fittings/TubeFittingsPage"
import ReducerPage from "./components/ProductGrids/TubeFittingsGrids/ReducerGrid/ReducerGrid"
import AdapterPage from "./components/ProductGrids/TubeFittingsGrids/AdapterGrid/AdapaterGridPage"
import PortConnectorPage from "./components/ProductGrids/TubeFittingsGrids/PortConnectorGrid/PortConnector"
import WeldGaugeConnectorPage from "./components/ProductGrids/TubeFittingsGrids/WeldConnectorGrid/WeldConnectorGrid"
import AccessoryPage from "./components/ProductGrids/TubeFittingsGrids/AccessoriesGrid/AccessoryPage"
import DielectricGasketPage from "./components/ProductGrids/TubeFittingsGrids/DieElectricGrid/DieElectricPage"
import NipplesCouplings from "./PipeFittings/pages/PipeFittingsNipplesCouplings"
import Elbows from "./PipeFittings/pages/Elbows"
import UnionsConnectors from "./PipeFittings/pages/UnionsConnectors"
import AdaptersPlugs from "./PipeFittings/pages/AdaptersPlugs"
import TeesCross from "./PipeFittings/pages/TeesCross"
import PipeFittingsIndexPage from "./PipeFittings/PipeFittingsIndexPage"
import ThreeWayValveBlog from "./components/News/components/ThreeWayBlog"
import NeedleValveBlog from "./components/News/components/NeedleValveBlog"
import JICFittingPage from "./components/JICFittingsGrid/JICFittingsGrid"
import JICUnionsSwivel from "./components/JICFittingsGrid/components/JICUnionsSwivel"
import JICConnectors from "./components/JICFittingsGrid/components/JICConnectors"
import JICAdaptersReducers from "./components/JICFittingsGrid/components/JICAdaptersReducers"
import JICFittingsIndexPage from "./components/JICFittingsGrid/components/JICFittingsIndexPage"
import JICElbows from "./components/JICFittingsGrid/components/JICElbows"
import JICTees from "./components/JICFittingsGrid/components/JICTees"
import JICPlugsCapsNuts from "./components/JICFittingsGrid/components/JICPlugsCapsNuts"
import WeldFittingPage from "./components/WeldFittingsGrid/components/WeldFittingsAll"
import WeldFittingsIndexPage from "./components/WeldFittingsGrid/components/WeldFittingsIndex"
import WeldFittingConnectors from "./components/WeldFittingsGrid/components/WeldFittingConnectors"
import WeldFittingElbows from "./components/WeldFittingsGrid/components/WeldFittingElbows"
import WeldFittingTees from "./components/WeldFittingsGrid/components/WeldFittingTees"
import TwinSeriesTubeClampPage from "./components/TubClampGrid/TwinSeries/TwinSeriesTubeClampPage"
import SingleLayerTubeClampPage from "./components/TubClampGrid/SingleLayer/SingleLayerTubeClampPage"
import DoubleLayerTubeClampPage from "./components/TubClampGrid/DoubleLayer/DoubleLayerTubeClampPage"
import HeavySeriesTubeClampPage from "./components/TubClampGrid/HeavySeries/HeavySeriesTubeClampPage"
import TubeClampIndexPage from "./components/TubClampGrid/TubeClampGrid"
import HeavySeriesDoubleLayerPage from "./components/TubClampGrid/HeavySeriesDoubleLayer/HeavySeriesDoubleLayerPage"
import BallValvesIndexPage from "./components/BallValves/BallValvesIndexPage"
import TwoWayBallValves from "./components/BallValves/pages/TwoWayBallValves"
import ThreeWayBallValves from "./components/BallValves/pages/ThreeWayBallValves"
import HighBoreBallValves from "./components/BallValves/pages/HighBoreBallValves"
import PTFFiltersPage from "./components/Filters/Filters"
import PIFFiltersPage from "./components/Filters/IFilters"
import FiltersIndexPage from "./components/Filters/FiltersIndex"
import TwoVMManifoldsPage from "./components/Manifolds/TwoWay/TwoWay"
import Manifolds3VMPage from "./components/Manifolds/ThreeWay/ThreeWay"
import Manifolds5VMPage from "./components/Manifolds/FiveWay/FiveWay"
import ManifoldsIndexPage from "./components/Manifolds/Manifold"
import SwivelGaugeAdaptorsPage from "./components/SwivelGauge-Grid/SwivelGaugeGrid"
import FlangexFlangeDBB from "./components/DBB/Flange-to-Flange/Flange-to-Flange"
import FlangexPipeDBB from "./components/DBB/Flange-to-Pipe/Flange-to-Pipe"
import PipexPipeDBB from "./components/DBB/Pipe-to-Pipe/Pipe-to-Pipe"
import DBBIndexPage from "./components/DBB/DBBPage"
import QuickCouplingIndexPage from "./components/Quick_Coupling/components/QCIndexPage"
import QuickCouplingPage from "./components/Quick_Coupling/Quick_Coupling"
import NPTBSPPBSPTBlog from "./components/News/components/ThreadTypesBlog"
import TubingPage from "./components/Tubing/TubePage"
import SystemIntegrationIndexPage from "./components/SystemIntegration/SystemIntegration"
import HPNeedleValvePage from "./components/High_Pressure/HP_NV/HP_NV"
import HPDBBPage from "./components/High_Pressure/HP_DBB/HP_DBB"
import HPBallValvePage from "./components/High_Pressure/HP_BV/HP_BV"
import HPNipplePage from "./components/High_Pressure/HP_TN/HP_TN"
import HPManifoldPage from "./components/High_Pressure/HP_VM/HP_VM"
import HighPressureIndexPage from "./components/High_Pressure/High_Pressure"
import HPFittingConnectorsPage from "./components/High_Pressure/HP_Fittings/Connectors/HPConnectors"
import HPUnionPage from "./components/High_Pressure/HP_Fittings/Union/HPUnionPage"
import HPAdapterPage from "./components/High_Pressure/HP_Fittings/Adaptors/HP_Adaptors"
import HPJunctionPage from "./components/High_Pressure/HP_Fittings/JunctionFittigs/JunctionFittings"
import HPEndFittingPage from "./components/High_Pressure/HP_Fittings/EndConnections/HPEndFittingPage"
import HPSealPage from "./components/High_Pressure/Seals-Glands/HPSealPage"
import HPFittingsIndexPage from "./components/High_Pressure/HP_Fittings/HP_Fittings"
import ManifoldValvesBlog from "./components/News/components/ManifoldsBlog"
import PipeNipplePage from "./components/High_Pressure/HP_PF/Hex_Nipples/PipeNipplePage"
import PipeCouplingPage from "./components/High_Pressure/HP_PF/Hex_Couplings/HPCouplings"
import HPPipeFittingsIndexPage from "./components/High_Pressure/HP_PF/HP_PF"
import PipeAdapterPage from "./components/High_Pressure/HP_PF/HP_Adapters/HP_Adapters"
import PipeElbowPage from "./components/High_Pressure/HP_PF/HP_Elbows/HP_Elbow"
import PipeTeeCrossPage from "./components/High_Pressure/HP_PF/HP_Tees_Cross/HP_Tess_Cross"
import PipeEndFittingPage from "./components/High_Pressure/HP_PF/HP_End_Connection/HP_End_Connection"
import HPBallValveProductPage from "./components/High_Pressure/HP_BV/components/HPBallValveProductPage"
import HPDBBProductPage from "./components/High_Pressure/HP_DBB/components/HPDBBProductPage"
import HPNippleProductPage from "./components/High_Pressure/HP_TN/components/HPNippleProductPage"
import HPNeedleValveProductPage from "./components/High_Pressure/HP_NV/components/HPNeedleValveProductPage"
import HPManifoldProductPage from "./components/High_Pressure/HP_VM/components/HPManifoldProductPage"
import HPAdapterProductPage from "./components/High_Pressure/HP_Fittings/Adaptors/components/HPAdapterProductPage"
import HPFittingProductPage from "./components/High_Pressure/HP_Fittings/Connectors/components/HPFittingProductPage"
import HPUnionProductPage from "./components/High_Pressure/HP_Fittings/Union/components/HPUnionProductPage"
import HPJunctionProductPage from "./components/High_Pressure/HP_Fittings/JunctionFittigs/components/HPJunctionProductPage"
import HPEndFittingProductPage from "./components/High_Pressure/HP_Fittings/EndConnections/components/HPEndFittingProductPage"
import HPSealProductPage from "./components/High_Pressure/Seals-Glands/components/HPSealProductPage"
import PipeNippleProductPage from "./components/High_Pressure/HP_PF/Hex_Nipples/components/PipeNippleProductPage"
import PipeCouplingProductPage from "./components/High_Pressure/HP_PF/Hex_Couplings/components/PipeCouplingProductPage"
import PipeAdapterProductPage from "./components/High_Pressure/HP_PF/HP_Adapters/components/PipeAdapterProductPage"
import PipeElbowProductPage from "./components/High_Pressure/HP_PF/HP_Elbows/components/PipeElbowProductPage"
import PipeTeeCrossProductPage from "./components/High_Pressure/HP_PF/HP_Tees_Cross/components/PipeTeeCrossProductPage"
import PipeEndFittingProductPage from "./components/High_Pressure/HP_PF/HP_End_Connection/components/PipeEndFittingProductPage"
import IBNeedleValveProductPage from "./components/ProductGrids/NeedleValveGrid/IBGrid/components/IBNeedleValveProductPage"
import HBNeedleValveProductPage from "./components/ProductGrids/NeedleValveGrid/HBGrid/components/HBNeedleValveProductPage"
import SBNeedleValveProductPage from "./components/ProductGrids/NeedleValveGrid/SBGrid/components/SBNeedleValveProductPage"
import MiniValveProductPage from "./components/ProductGrids/NeedleValveGrid/MiniGrid/components/MiniValveProductPage"
import SearchPage from "./components/SearchResults/SearchPage"
import ConnectorElbowProductPage from "./components/ProductGrids/TubeFittingsGrids/ConnectorElbowsGrid/components/ConnectorElbowProductPage"
import UnionProductPage from "./components/ProductGrids/TubeFittingsGrids/UnionGrid/components/UnionProductPage"
import ReducerProductPage from "./components/ProductGrids/TubeFittingsGrids/ReducerGrid/components/ReducerProductPage"
import AdapterProductPage from "./components/ProductGrids/TubeFittingsGrids/AdapterGrid/components/AdapterProductPage"
import PortConnectorProductPage from "./components/ProductGrids/TubeFittingsGrids/PortConnectorGrid/PortConnectorProductPage"
import WeldGaugeProductPage from "./components/ProductGrids/TubeFittingsGrids/WeldConnectorGrid/WeldGaugeProductPage"
import AccessoryProductPage from "./components/ProductGrids/TubeFittingsGrids/AccessoriesGrid/AccessoryProductPage"
import DielectricProductPage from "./components/ProductGrids/TubeFittingsGrids/DieElectricGrid/DielectricProductPage"
import GasketProductPage from "./components/ProductGrids/TubeFittingsGrids/DieElectricGrid/GasketProductPage"
import AirHeaderDetailPage from "./components/SystemIntegration/AirHeaderPage"
import PIFProductPage from "./components/Filters/components/PIFDetailPage"
import PTFProductPage from "./components/Filters/components/PTFProductPage"
import QuickCouplingProductPage from "./components/Quick_Coupling/components/QuickCouplingProductPage "
import JICFittingProductPage from "./components/JICFittingsGrid/components/JICFittingsProductPage"
import PCVProductPage from "./components/CheckValvesGrid/components/PCVProductPage"
import NipplesCouplingProductPage from "./PipeFittings/components/NipplesCouplingProductPage"
import UnionsConnectorsProductPage from "./PipeFittings/components/UnionsConnectorsProductPage"
import TeesCrossProductPage from "./PipeFittings/components/TeesCrossProductPage"
import ElbowsProductPage from "./PipeFittings/components/ElbowsProductPage"
import AdaptersPlugsProductPage from "./PipeFittings/components/AdaptersPlugsProductPage"
import WeldFittingProductPage from "./components/WeldFittingsGrid/components/Weldfittingproductpage"
import WeldFittingTeeProductPage from "./components/WeldFittingsGrid/components/WeldFittingTeeProductPage"
import WeldFittingConnectorProductPage from "./components/WeldFittingsGrid/components/WeldFittingConnectorProductPage"
import WeldFittingElbowProductPage from "./components/WeldFittingsGrid/components/WeldFittingElbowProductPage"
import TwoVMProductPage from "./components/Manifolds/TwoWay/components/Twovmproductpage"
import ThreeVMProductPage from "./components/Manifolds/ThreeWay/components/Manifold3VMProductPage"
import UKBuyersGuideBlog from "./components/News/components/UKBuyerGuide"
import CheckValveGuideBlog from "./components/News/components/CheckValveGuidBlog"
import BallValvesBlog from "./components/News/components/BallValvesBlog"
import DeliveryReturnsPage from "./components/Landing/components/DeliveryInformation"
import CreditApplicationForm from "./components/CreditLineApplication/CreditApplicationForm"
import AllPipeFittings from "./PipeFittings/pages/PipeFittingsAll"

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
        path: "credit-application",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <CreditApplicationForm />
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
        path: "blog/hp-series-needle-valves-high-pressure-flow-control",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <NeedleValveBlog />
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
        path: "blog/stainless-steel-ball-valve-guide",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <BallValvesBlog />
          </Suspense>
        ),
      },
      {
        path: "blog/check-valve-guide",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <CheckValveGuideBlog />
          </Suspense>
        ),
      },
      { path: "/blog/three-way-valve-l-port-t-port-guide", element: <ThreeWayValveBlog /> },
      {
        path: "blog/hydrogen-blog",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <HydrogenValvesBlog />
          </Suspense>
        ),
      },
      {
        path: "blog/uk-industrial-valves-buyers-guide",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <UKBuyersGuideBlog />
          </Suspense>
        ),
      },
      {
        path: "/blog/npt-vs-bspp-vs-bspt-thread-standards",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <NPTBSPPBSPTBlog />
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
        path: "blog/manifold-valves-for-accurate-safe-instrumentation",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ManifoldValvesBlog />
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
      { path: "/search", element: <SearchPage /> },
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

      //valves-url
      { path: "/valves", element: <ValvesPage /> },

      //needle-valves-url//
      { path: "/valves/needle-valves", element: <NeedleValvesPage /> },
      { path: "/valves/needle-valves/needle-valves-ib", element: <NeedleValveIBPage /> },
      { path: "/valves/needle-valves/needle-valves-ib/:partNumber", element: <IBNeedleValveProductPage /> },
      { path: "/valves/needle-valves/needle-valves-hb", element: <NeedleValveHBPage /> },
      { path: "/valves/needle-valves/needle-valves-hb/:partNumber", element: <HBNeedleValveProductPage /> },
      { path: "/valves/needle-valves/needle-valves-hp", element: <NeedleValveHPPage /> },
      { path: "/valves/needle-valves/needle-valves-hp/:partNumber", element: <HPNeedleValveProductPage /> },
      { path: "/valves/needle-valves/needle-valves-sb", element: <NeedleValveSBPage /> },
      { path: "/valves/needle-valves/needle-valves-sb/:partNumber", element: <SBNeedleValveProductPage /> },
      { path: "/valves/needle-valves/needle-valves-mini", element: <MiniValvePage /> },
      { path: "/valves/needle-valves/needle-valves-mini/:partNumber", element: <MiniValveProductPage /> },
      //ball-valves-url
      { path: "/valves/ball-valves", element: <BallValvesIndexPage /> },
      { path: "/valves/ball-valves/two-way", element: <TwoWayBallValves /> },
      { path: "/valves/ball-valves/three-way", element: <ThreeWayBallValves /> },
      { path: "/valves/ball-valves/high-bore", element: <HighBoreBallValves /> },
      //check-and-relif-valves
      { path: "/valves/check-valves", element: <PCVPage /> },
      { path: "/valves/check-valves/:partNumber", element: <PCVProductPage /> },
      { path: "/valves/relief-valves", element: <ReliefValvePage /> },

      { path: "/instrumentation-fittings", element: <FittingsPage /> },
      //Tube Fittings
      { path: "/instrumentation-fittings/tube-fittings", element: <TubeFittingsPage /> },
      { path: "/instrumentation-fittings/tube-fittings/connectors", element: <ConnectorElbowPage /> },
      { path: "/instrumentation-fittings/tube-fittings/connectors/:partNumber", element: <ConnectorElbowProductPage /> },
      { path: "/instrumentation-fittings/tube-fittings/union", element: <UnionPage /> },
      { path: "/instrumentation-fittings/tube-fittings/union/:partNumber", element: <UnionProductPage /> },
      { path: "/instrumentation-fittings/tube-fittings/reducer", element: <ReducerPage /> },
      { path: "/instrumentation-fittings/tube-fittings/reducer/:partNumber", element: <ReducerProductPage /> },
      { path: "/instrumentation-fittings/tube-fittings/adapter", element: <AdapterPage /> },
      { path: "/instrumentation-fittings/tube-fittings/adapter/:partNumber", element: <AdapterProductPage /> },
      { path: "/instrumentation-fittings/tube-fittings/port-connector", element: <PortConnectorPage /> },
      { path: "/instrumentation-fittings/tube-fittings/port-connector/:partNumber", element: <PortConnectorProductPage /> },
      { path: "/instrumentation-fittings/tube-fittings/weld-gauge", element: <WeldGaugeConnectorPage /> },
      { path: "/instrumentation-fittings/tube-fittings/weld-gauge/:partNumber", element: <WeldGaugeProductPage /> },
      { path: "/instrumentation-fittings/tube-fittings/accessories", element: <AccessoryPage /> },
      { path: "/instrumentation-fittings/tube-fittings/accessories/:partNumber", element: <AccessoryProductPage /> },
      { path: "/instrumentation-fittings/tube-fittings/die-electric", element: <DielectricGasketPage /> },
      { path: "/instrumentation-fittings/tube-fittings/die-electric/:partNumber", element: <DielectricProductPage /> },
      { path: "/instrumentation-fittings/tube-fittings/die-electric/gasket/:partNumber", element: <GasketProductPage /> },
      {
        path: "/delivery-returns",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <DeliveryReturnsPage />
          </Suspense>
        ),
      },
      //Jic
      { path: "/instrumentation-fittings/jic-fittings", element: <JICFittingsIndexPage /> },
      { path: "/instrumentation-fittings/jic-fittings/all", element: <JICFittingPage /> },
      { path: "/instrumentation-fittings/jic-fittings/connectors", element: <JICConnectors /> },
      { path: "/instrumentation-fittings/jic-fittings/unions-swivel", element: <JICUnionsSwivel /> },
      { path: "/instrumentation-fittings/jic-fittings/adapters-reducers", element: <JICAdaptersReducers /> },
      { path: "/instrumentation-fittings/jic-fittings/elbows", element: <JICElbows /> },
      { path: "/instrumentation-fittings/jic-fittings/tees", element: <JICTees /> },
      { path: "/instrumentation-fittings/jic-fittings/plugs-caps-nuts", element: <JICPlugsCapsNuts /> },
      { path: "/instrumentation-fittings/jic-fittings/all/:partNumber", element: <JICFittingProductPage section="all" /> },
      { path: "/instrumentation-fittings/jic-fittings/connectors/:partNumber", element: <JICFittingProductPage section="connectors" /> },
      { path: "/instrumentation-fittings/jic-fittings/unions-swivel/:partNumber", element: <JICFittingProductPage section="unions-swivel" /> },
      { path: "/instrumentation-fittings/jic-fittings/adapters-reducers/:partNumber", element: <JICFittingProductPage section="adapters-reducers" /> },
      { path: "/instrumentation-fittings/jic-fittings/elbows/:partNumber", element: <JICFittingProductPage section="elbows" /> },
      { path: "/instrumentation-fittings/jic-fittings/tees/:partNumber", element: <JICFittingProductPage section="tees" /> },
      { path: "/instrumentation-fittings/jic-fittings/plugs-caps-nuts/:partNumber", element: <JICFittingProductPage section="plugs-caps-nuts" /> },

      //Pipe
      {
        path: "/instrumentation-fittings/pipe-fittings",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <PipeFittingsIndexPage />
          </Suspense>
        ),
      },
      { path: "/instrumentation-fittings/pipe-fittings/nipples-couplings", element: <NipplesCouplings /> },
      { path: "/instrumentation-fittings/pipe-fittings/adapters-plugs", element: <AdaptersPlugs /> },
      { path: "/instrumentation-fittings/pipe-fittings/unions-connectors", element: <UnionsConnectors /> },
      { path: "/instrumentation-fittings/pipe-fittings/elbows", element: <Elbows /> },
      { path: "/instrumentation-fittings/pipe-fittings/tees-cross", element: <TeesCross /> },
      { path: "/instrumentation-fittings/pipe-fittings/nipples-couplings/:partNumber", element: <NipplesCouplingProductPage /> },
      { path: "/instrumentation-fittings/pipe-fittings/unions-connectors/:partNumber", element: <UnionsConnectorsProductPage /> },
      { path: "/instrumentation-fittings/pipe-fittings/tees-cross/:partNumber", element: <TeesCrossProductPage /> },
      { path: "/instrumentation-fittings/pipe-fittings/elbows/:partNumber", element: <ElbowsProductPage /> },
      { path: "/instrumentation-fittings/pipe-fittings/adapters-plugs/:partNumber", element: <AdaptersPlugsProductPage /> },
      { path: "/instrumentation-fittings/pipe-fittings/all", element: <AllPipeFittings /> },

      //Jic
      { path: "/instrumentation-fittings/weld-fittings/all", element: <WeldFittingPage /> },
      { path: "/instrumentation-fittings/weld-fittings", element: <WeldFittingsIndexPage /> },
      { path: "/instrumentation-fittings/weld-fittings/connectors", element: <WeldFittingConnectors /> },
      { path: "/instrumentation-fittings/weld-fittings/elbows", element: <WeldFittingElbows /> },
      { path: "/instrumentation-fittings/weld-fittings/tees", element: <WeldFittingTees /> },
      { path: "/instrumentation-fittings/weld-fittings/all/:partNo", element: <WeldFittingProductPage /> },
      { path: "/instrumentation-fittings/weld-fittings/connectors/:partNo", element: <WeldFittingConnectorProductPage /> },
      { path: "/instrumentation-fittings/weld-fittings/elbows/:partNo", element: <WeldFittingElbowProductPage /> },
      { path: "/instrumentation-fittings/weld-fittings/tees/:partNo", element: <WeldFittingTeeProductPage /> },

      //Tube Clamps
      { path: "/instrumentation-fittings/tube-clamps/twin-series", element: <TwinSeriesTubeClampPage /> },
      { path: "/instrumentation-fittings/tube-clamps/single-layer", element: <SingleLayerTubeClampPage /> },
      { path: "/instrumentation-fittings/tube-clamps/double-layer", element: <DoubleLayerTubeClampPage /> },
      { path: "/instrumentation-fittings/tube-clamps/heavy-single-layer", element: <HeavySeriesTubeClampPage /> },
      { path: "/instrumentation-fittings/tube-clamps/heavy-double-layer", element: <HeavySeriesDoubleLayerPage /> },
      { path: "/instrumentation-fittings/tube-clamps", element: <TubeClampIndexPage /> },

      { path: "/instrumentation-fittings/swivel-gauge-adaptors", element: <SwivelGaugeAdaptorsPage /> },

      // filters
      { path: "/filters", element: <FiltersIndexPage /> },
      { path: "/filters/t-type", element: <PTFFiltersPage /> },
      { path: "/filters/i-type", element: <PIFFiltersPage /> },
      { path: "/filters/i-type/:partNumber", element: <PIFProductPage /> },
      { path: "/filters/t-type/:partNumber", element: <PTFProductPage /> },
      //manifolds
      { path: "/manifolds/2VM", element: <TwoVMManifoldsPage /> },
      { path: "/manifolds/2VM/:partNumber", element: <TwoVMProductPage /> },
      { path: "/manifolds/3VM", element: <Manifolds3VMPage /> },
      { path: "/manifolds/3VM/:partNumber", element: <ThreeVMProductPage /> },
      { path: "/manifolds/5VM", element: <Manifolds5VMPage /> },
      { path: "/manifolds", element: <ManifoldsIndexPage /> },

      //double block and bleed valves
      { path: "/double-block-and-bleed-valves/pipe-to-pipe", element: <PipexPipeDBB /> },
      { path: "/double-block-and-bleed-valves/flange-to-pipe", element: <FlangexPipeDBB /> },
      { path: "/double-block-and-bleed-valves/flange-to-flange", element: <FlangexFlangeDBB /> },
      { path: "/double-block-and-bleed-valves", element: <DBBIndexPage /> },
      { path: "/quick-coupling-and-tubing", element: <QuickCouplingIndexPage /> },
      { path: "/quick-coupling-and-tubing/quick-coupling", element: <QuickCouplingPage /> },
      { path: "/quick-coupling-and-tubing/quick-coupling/:partNumber", element: <QuickCouplingProductPage /> },
      { path: "/quick-coupling-and-tubing/tubing", element: <TubingPage /> },

      { path: "/system-integration", element: <SystemIntegrationIndexPage /> },
      { path: "/system-integration/air-header", element: <AirHeaderDetailPage /> },
      //high pressure
      { path: "/high-pressure/needle-valves", element: <HPNeedleValvePage /> },
      { path: "/high-pressure/needle-valves/:partNumber", element: <HPNeedleValveProductPage /> },
      { path: "/high-pressure/double-block-and-valves", element: <HPDBBPage /> },
      { path: "/high-pressure/double-block-and-valves/:partNumber", element: <HPDBBProductPage /> },
      { path: "/high-pressure/ball-valves", element: <HPBallValvePage /> },
      { path: "/high-pressure/ball-valves/:partNumber", element: <HPBallValveProductPage /> },
      { path: "/high-pressure/cones-threaded-nipples", element: <HPNipplePage /> },
      { path: "/high-pressure/cones-threaded-nipples/:partNumber", element: <HPNippleProductPage /> },
      { path: "/high-pressure/2-valve-manifolds", element: <HPManifoldPage /> },
      { path: "/high-pressure/2-valve-manifolds/:partNumber", element: <HPManifoldProductPage /> },

      { path: "/high-pressure/fittings", element: <HPFittingsIndexPage /> },
      { path: "/high-pressure/fittings/connectors", element: <HPFittingConnectorsPage /> },
      { path: "/high-pressure/fittings/connectors/:partNumber", element: <HPFittingProductPage /> },
      { path: "/high-pressure/fittings/unions", element: <HPUnionPage /> },
      { path: "/high-pressure/fittings/unions/:partNumber", element: <HPUnionProductPage /> },
      { path: "/high-pressure/fittings/adaptors", element: <HPAdapterPage /> },
      { path: "/high-pressure/fittings/adaptors/:partNumber", element: <HPAdapterProductPage /> },
      { path: "/high-pressure/fittings/elbows-tees-cross", element: <HPJunctionPage /> },
      { path: "/high-pressure/fittings/elbows-tees-cross/:partNumber", element: <HPJunctionProductPage /> },
      { path: "/high-pressure/fittings/end-connections", element: <HPEndFittingPage /> },
      { path: "/high-pressure/fittings/end-connections/:partNumber", element: <HPEndFittingProductPage /> },
      { path: "/high-pressure/fittings/seals-glads", element: <HPSealPage /> },
      { path: "/high-pressure/fittings/seals-glads/:partNumber", element: <HPSealProductPage /> },
      { path: "/high-pressure", element: <HighPressureIndexPage /> },

      //pipe fittings
      { path: "/high-pressure/pipe-fittings", element: <HPPipeFittingsIndexPage /> },
      { path: "/high-pressure/pipe-fittings/hex-nipples", element: <PipeNipplePage /> },
      { path: "/high-pressure/pipe-fittings/hex-nipples/:partNumber", element: <PipeNippleProductPage /> },
      { path: "/high-pressure/pipe-fittings/hex-couplings", element: <PipeCouplingPage /> },
      { path: "/high-pressure/pipe-fittings/hex-couplings/:partNumber", element: <PipeCouplingProductPage /> },
      { path: "/high-pressure/pipe-fittings/adapters", element: <PipeAdapterPage /> },
      { path: "/high-pressure/pipe-fittings/adapters/:partNumber", element: <PipeAdapterProductPage /> },
      { path: "/high-pressure/pipe-fittings/elbows", element: <PipeElbowPage /> },
      { path: "/high-pressure/pipe-fittings/elbows/:partNumber", element: <PipeElbowProductPage /> },
      { path: "/high-pressure/pipe-fittings/tees-crosses", element: <PipeTeeCrossPage /> },
      { path: "/high-pressure/pipe-fittings/tees-crosses/:partNumber", element: <PipeTeeCrossProductPage /> },
      { path: "/high-pressure/pipe-fittings/plugs-caps", element: <PipeEndFittingPage /> },
      { path: "/high-pressure/pipe-fittings/plugs-caps/:partNumber", element: <PipeEndFittingProductPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]
