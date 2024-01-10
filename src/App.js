import "./App.css";
import React from "react";
import NavC from "./components/NavC.jsx";
import FooterC from "./components/FooterC.jsx";
import SelectC from "./components/SelectC.jsx";
import SliderC from "./components/SliderC.jsx";
import DetailsC from "./components/DetailsC.jsx";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <BrowserRouter>
      <NavC
        searchText={searchQuery}
        onSearchSubmit={(a) => setSearchQuery(a)}
      />
      <main>
        <Container fluid className="d-flex align-items-center gap-5 py-4">
          <h1>Collections</h1>
          <SelectC />
        </Container>
        <Routes>
          {searchQuery == "" && (
            <>
              <Route
                path="/"
                element={<SliderC key="potter" searchText="harry potter" />}
              />

              <Route
                path="/tvshows"
                element={<SliderC key="wheels" searchText="breaking bad" />}
              />
              <Route
                path="/movies"
                element={<SliderC key="birbs" searchText="hitchcock" />}
              />
            </>
          )}
          <Route path="/details/:movieId" element={<DetailsC />} />
        </Routes>{" "}
        {searchQuery !== "" && <SliderC searchText={searchQuery} />}
      </main>
      <FooterC />
    </BrowserRouter>
  );
}

export default App;
