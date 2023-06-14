import "normalize.css";
import "./App.css";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import NoMatch from "./Pages/NoMatch";
import Experience from "./Pages/Experience";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="experience" element={<Experience />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
