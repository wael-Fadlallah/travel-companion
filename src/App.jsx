import React from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import Map from "./components/Map/Map";
import { CssBaseline, Grid } from "@material-ui/core";
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spaceing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
