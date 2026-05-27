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

      //valves-url
      { path: "/valves", element: <ValvesPage /> },

      //needle-valves-url
      { path: "/valves/needle-valves", element: <NeedleValvesPage /> },
      { path: "/valves/needle-valves/needle-valves-ib", element: <NeedleValveIBPage /> },
      { path: "/valves/needle-valves/needle-valves-hb", element: <NeedleValveHBPage /> },
      { path: "/valves/needle-valves/needle-valves-hp", element: <NeedleValveHPPage /> },
      { path: "/valves/needle-valves/needle-valves-sb", element: <NeedleValveSBPage /> },
      { path: "/valves/needle-valves/needle-valves-mini", element: <MiniValvePage /> },
      //ball-valves-url
      { path: "/valves/ball-valves", element: <BallValvesIndexPage /> },
      { path: "/valves/ball-valves/two-way", element: <TwoWayBallValves /> },
      { path: "/valves/ball-valves/three-way", element: <ThreeWayBallValves /> },
      { path: "/valves/ball-valves/high-bore", element: <HighBoreBallValves /> },
      //check-and-relif-valves
      { path: "/valves/check-valves", element: <PCVPage /> },
      { path: "/valves/relief-valves", element: <ReliefValvePage /> },

      { path: "/instrumentation-fittings", element: <FittingsPage /> },
      //Tube Fittings
      { path: "/instrumentation-fittings/tube-fittings", element: <TubeFittingsPage /> },
      { path: "/instrumentation-fittings/tube-fittings/connectors", element: <ConnectorElbowPage /> },
      { path: "/instrumentation-fittings/tube-fittings/union", element: <UnionPage /> },
      { path: "/instrumentation-fittings/tube-fittings/reducer", element: <ReducerPage /> },
      { path: "/instrumentation-fittings/tube-fittings/adapter", element: <AdapterPage /> },
      { path: "/instrumentation-fittings/tube-fittings/port-connector", element: <PortConnectorPage /> },
      { path: "/instrumentation-fittings/tube-fittings/weld-gauge", element: <WeldGaugeConnectorPage /> },
      { path: "/instrumentation-fittings/tube-fittings/accessories", element: <AccessoryPage /> },
      { path: "/instrumentation-fittings/tube-fittings/die-electric", element: <DielectricGasketPage /> },

      //Jic
      { path: "/instrumentation-fittings/jic-fittings", element: <JICFittingsIndexPage /> },
      { path: "/instrumentation-fittings/jic-fittings/all", element: <JICFittingPage /> },
      { path: "/instrumentation-fittings/jic-fittings/connectors", element: <JICConnectors /> },
      { path: "/instrumentation-fittings/jic-fittings/unions-swivel", element: <JICUnionsSwivel /> },
      { path: "/instrumentation-fittings/jic-fittings/adapters-reducers", element: <JICAdaptersReducers /> },
      { path: "/instrumentation-fittings/jic-fittings/elbows", element: <JICElbows /> },
      { path: "/instrumentation-fittings/jic-fittings/tees", element: <JICTees /> },
      { path: "/instrumentation-fittings/jic-fittings/plugs-caps-nuts", element: <JICPlugsCapsNuts /> },

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

      //Jic
      { path: "/instrumentation-fittings/weld-fittings/all", element: <WeldFittingPage /> },
      { path: "/instrumentation-fittings/weld-fittings", element: <WeldFittingsIndexPage /> },
      { path: "/instrumentation-fittings/weld-fittings/connectors", element: <WeldFittingConnectors /> },
      { path: "/instrumentation-fittings/weld-fittings/elbows", element: <WeldFittingElbows /> },
      { path: "/instrumentation-fittings/weld-fittings/tees", element: <WeldFittingTees /> },

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

      //manifolds
      { path: "/manifolds/2VM", element: <TwoVMManifoldsPage /> },
      { path: "/manifolds/3VM", element: <Manifolds3VMPage /> },
      { path: "/manifolds/5VM", element: <Manifolds5VMPage /> },
      { path: "/manifolds", element: <ManifoldsIndexPage /> },

      //double block and bleed valves
       { path: "/double-block-and-bleed-valves/pipe-to-pipe", element: <PipexPipeDBB /> },
      { path: "/double-block-and-bleed-valves/flange-to-pipe", element: <FlangexPipeDBB /> },
      { path: "/double-block-and-bleed-valves/flange-to-flange", element: <FlangexFlangeDBB /> },
      { path: "/double-block-and-bleed-valves", element: < DBBIndexPage/> },
      { path: "/quick-coupling-and-tubing", element: < QuickCouplingIndexPage/> },
      { path: "/quick-coupling-and-tubing/quick-coupling", element: < QuickCouplingPage/> },
      { path: "/quick-coupling-and-tubing/tubing", element: < TubingPage/> },
      { path: "*", element: <NotFound /> },
    ],
  },
]
