import { lazy, Suspense } from "react"
import LoadingScreen from "./components/Loading/LoadingScreen"
import ErrorPage from "./components/Error/ErrorPage"
import Layout from "./Layout"
import CrossReference from "./components/Cross_Reference/CrossReference"
import RegisterForm from "./components/Account/components/RegisterForm"
import Login from "./components/Account/Login"
import CatalogPdfs from "./components/CatalogPdfs/CatalogPdfs"
const LandingPage = lazy(() => import("./components/Landing/LandingPage"))
const News = lazy(() => import("./components/News/News"))
const DashBoard = lazy(() => import("./components/Dashboard/Dashboard"))
const ProductPage = lazy(() => import("./components/All_Categories/ProductPage"))
const NotFound = lazy(() => import("./components/Error/NotFound"))
const CartPage = lazy(() => import("./components/Cart/CartPage"))
const IndustryPage = lazy(() => import("./components/Industries/components/IndustryPage"))
const BlogDetail = lazy(() => import("./components/News/components/BlogTempate"))
const AuthAndInquiryPage = lazy(() => import("./components/Auth/AuthAndInquiryPage"))
const ProductGallery = lazy(() => import("./components/Product_Gallery/components/ProductGallery"))
const AboutUs = lazy(() => import("./components/About_Us/AboutUs"))
const Industries = lazy(() => import("./components/Industries/Industries"))
import ProductDetailPage from "./components/Product_Details/ProductDetails"
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
            <LandingPage />
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
    element: <Suspense fallback={<LoadingScreen />}><ProductGallery /></Suspense>,
  },
  {
        path: ":detailId",
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
        path: "blog/:slug",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <BlogDetail />
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
      { path: "*", element: <NotFound /> },
    ],
  },
]
