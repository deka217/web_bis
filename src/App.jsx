import { useState } from "react";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import AboutUsPage from "./pages/AboutUs";
import ProductPage from "./pages/ProductPage";
import ContactusPage from "./pages/ContactusPage";
import ProductDetailPage from "./pages/ProductdetailPage";
import { Routes, Route } from "react-router-dom";

const pageContent = {
  Home: (
    <LandingPage />
  ),
  "About Us": (
    <AboutUsPage />
  ),
  "Products": (
    <ProductPage />
  ),
  "Contact Us": (
    <ContactusPage />
    // <PlaceholderPage
    //   title="About Us"
    //   description="This page now uses the shared site layout. The landing page remains the home experience, while About Us can grow into its own dedicated page inside the same Navbar and Footer shell."
    // />
  ),
  // Products: (
  //   <PlaceholderPage
  //     title="Products"
  //     description="This page sits inside the default layout too. We can build the actual product catalogue here next without touching the shared Navbar and Footer structure."
  //   />
  // ),
  // "Contact Us": (
  //   <PlaceholderPage
  //     title="Contact Us"
  //     description="The contact page also inherits the same global shell. We can turn this into a real inquiry form or distributor contact page whenever you’re ready."
  //   />
  // )
};

// function App() {
//   const [activePage, setActivePage] = useState("Home");

//   return (
//     <Layout activePage={activePage} onNavigate={setActivePage}>
//       {pageContent[activePage] ?? pageContent.Home}
//     </Layout>
//   );
// }

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/about" element={<AboutUsPage />} />

        <Route path="/products" element={<ProductPage />} />

        <Route
          path="/products/:id"
          element={<ProductDetailPage key={window.location.pathname}/>}
        />

        <Route path="/contact" element={<ContactusPage />} />

        <Route
          path="*"
          element={
            <PlaceholderPage
              title="404"
              description="Page not found."
            />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;