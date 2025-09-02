import { createBrowserRouter, Navigate } from "react-router-dom";
import ScrollToAnchor from "./hooks/useScrollToAnchor";
import { Layout } from "./components/Layout/Layout";
import {
  AboutUs,
  Agricola,
  Airpads,
  Ceramica,
  CodigoEtica,
  Confirmacion,
  Construccion,
  Contacto,
  Cotizacion,
  Envases,
  FibrasTextiles,
  FilmEmbalaje,
  Forestal,
  Home,
  MaquinasEnvolvedoras,
  Markets,
  Mineria,
  Papel,
  PoliticaCalidad,
  ProductDetails,
  Products,
  ServicioTecnico,
  Siderurgica,
  Solutions,
  Vidrio,
  Zunchos,
} from "./pages";
import ScrollToTop from "./components/ui/ScrollToTop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToAnchor />
        <ScrollToTop />
        <Layout />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/soluciones", element: <Solutions /> },
      { path: "/envolvedora", element: <MaquinasEnvolvedoras /> },
      { path: "/film-embalaje", element: <FilmEmbalaje /> },
      { path: "/productos", element: <Products /> },
      { path: "/productos/:slug", element: <ProductDetails /> },
      { path: "/cotizacion", element: <Cotizacion /> },
      { path: "/confirmacion", element: <Confirmacion /> },
      { path: "/servicio-tecnico", element: <ServicioTecnico /> },
      { path: "/zunchos-herramientas", element: <Zunchos /> },
      { path: "/Airpads", element: <Airpads /> },
      { path: "/mercados", element: <Markets /> },
      { path: "/mineria", element: <Mineria /> },
      { path: "/forestal", element: <Forestal /> },
      { path: "/siderurgica", element: <Siderurgica /> },
      { path: "/agricola", element: <Agricola /> },
      { path: "/construccion", element: <Construccion /> },
      { path: "/ceramica", element: <Ceramica /> },
      { path: "/envases", element: <Envases /> },
      { path: "/fibras-textiles", element: <FibrasTextiles /> },
      { path: "/papel", element: <Papel /> },
      { path: "/vidrio", element: <Vidrio /> },
      { path: "/nosotros", element: <AboutUs /> },
      { path: "/politica-calidad", element: <PoliticaCalidad /> },
      { path: "/codigo-etica", element: <CodigoEtica /> },
      { path: "/Contacto", element: <Contacto /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);
