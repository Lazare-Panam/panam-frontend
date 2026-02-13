import { lazy, Suspense } from "react"
import LandingPage from "./components/Landing/LandingPage"
import Layout from "./Layout"
import News from "./components/News/News"
import Contact from "./components/Contact/Contact"
import LoadingScreen from "./components/Loading/LoadingScreen"
import ProductPage from "./components/All_Categories/ProductPage"
import NotFound from "./components/Error/NotFound"
import ErrorPage from "./components/Error/ErrorPage"
import CartPage from "./components/Cart/CartPage"
import IndustryTemplate from "./components/Industries/components/IndustriesTemplate"
import IndustryPage from "./components/Industries/components/IndustryPage"
import BlogDetail from "./components/News/components/BlogTempate"

const ProductGallery = lazy(() => import("./components/Product_Gallery/components/ProductGallery"))
const AboutUs = lazy(() => import("./components/About_Us/AboutUs"))
const Industries = lazy(() => import("./components/Industries/Industries"))

export const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "products", element: <Suspense fallback={<LoadingScreen />}><ProductPage /></Suspense> },
      { path: "products/:id", element: <Suspense fallback={<LoadingScreen />}><ProductGallery /></Suspense> },
      { path: "about", element: <Suspense fallback={<LoadingScreen />}><AboutUs /></Suspense> },
      { path: "industries", element: <Suspense fallback={<LoadingScreen />}><Industries /></Suspense> },
      { path: "industries/:id", element: <Suspense fallback={<LoadingScreen />}><IndustryPage /></Suspense>},
      { path: "news", element: <Suspense fallback={<LoadingScreen />}><News /></Suspense> },
      { path: "blog/:slug", element: <Suspense fallback={<LoadingScreen />}><BlogDetail /></Suspense>},
      { path: "contact", element: <Suspense fallback={<LoadingScreen />}><Contact /></Suspense> },
      { path: "cart", element: <Suspense fallback={<LoadingScreen />}><CartPage /></Suspense> },
      { path: "*", element: <NotFound /> },
    ],
  },
]

