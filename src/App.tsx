import { lazy, Suspense } from "react"
import LoadingScreen from "./components/Loading/LoadingScreen"
import ErrorPage from "./components/Error/ErrorPage"
import Layout from "./Layout"
import CrossReference from "./components/Cross_Reference/CrossReference"
import RegisterForm from "./components/Account/components/RegisterForm"
import Login from "./components/Account/Login"
import CatalogPdfs from "./components/CatalogPdfs/CatalogPdfs"
//const LandingPage = lazy(() => import("./components/Landing/LandingPage"))

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
import ProductDetailPage from "./components/Product_Details/ProductDetails"
import Landing2 from "./components/Landing2/Landing2"
import MarineSubseaPage from "./components/Industries/components/MaineSubSea"
import OilGasPage from "./components/Industries/components/OilGas"
import HydrogenPage from "./components/Industries/components/Hydrogen"
import AerospaceDefensePage from "./components/Industries/components/AeroSpaceDefense"
import ChemicalsPage from "./components/Industries/components/Chemicals"
import FoodBeveragePage from "./components/Industries/components/FoodBeverage"
import PartnershipAnnouncementPage from "./components/News/components/PartnershipAnnoucement"
import DoubleBlockBleedBlog from "./components/News/components/DoubleBlockBleedBlog"
import CheckValveBlog from "./components/News/components/CheckValveBlog"
import AdminLogin from "./components/Admin/components/AdminLogin"
import AdminDashboard from "./components/Admin/components/AdminDashboard"
import HydrogenValvesBlog from "./components/News/components/HydrogenBlog"
import SearchResults from "./components/SearchResults/SearchResults"
import PartNumberDetail from "./components/ProductDetail/PartNumberDetail"
import AdminCreateRFQ from "./components/Admin/components/AdminCreateRFQ"
import SwivelGaugeAdaptersBlog from "./components/News/components/SwivelGaugeBlog"
const ResetPasswordPage = lazy(() => import("./components/Account/components/ResetPasswordPage"))
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
        path: "products",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ProductPage />
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
  path: "adminDashboard/create-rfq/:enquiryId",
  element: (
    <Suspense fallback={<LoadingScreen />}>
      <AdminCreateRFQ />
    </Suspense>
  ),
},

      { path: "*", element: <NotFound /> },
    ],
  },
]
