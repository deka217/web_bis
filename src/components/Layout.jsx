import Navbar from "./Navbar";
import Footer from "./Footer";

// function Layout({ activePage, onNavigate, children }) {
//   return (
//     <main className="ui-shell">
//       <Navbar activeItem={activePage} onNavigate={onNavigate} />
//       {children}
//       <Footer />
//     </main>
//   );
// }

function Layout({ children }) {
  return (
    <main className="ui-shell">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;