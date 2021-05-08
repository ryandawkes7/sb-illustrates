import "./styles/main.scss";
import { Header } from "./components/globals/Header";
import { Footer } from "./components/globals/Footer";
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { ContactPage } from "./pages/ContactPage";

function App() {
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  const [headerH, setHeaderH] = useState(null);
  const [footerH, setFooterH] = useState(null);

  useEffect(() => {
    // Header height
    if (headerRef.current) {
      let hh = headerRef.current.offsetHeight;
      setHeaderH(hh);
    }

    // Footer height
    if (footerRef.current) {
      let fh = footerRef.current.offsetHeight;
      setFooterH(fh);
    }
  }, [headerRef, footerRef]);

  return (
    <Router>
      <Header headerRef={headerRef} />

      <main>
        <Switch>
          <Route exact path="/">
            <Home hh={headerH} fh={footerH} />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio hh={headerH} fh={footerH} />
          </Route>
          <Route exact path="/contact">
            <ContactPage hh={headerH} fh={footerH} />
          </Route>
        </Switch>
      </main>

      <Footer footerRef={footerRef} />
    </Router>
  );
}

export default App;
