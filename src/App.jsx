import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import Map from "./components/Map/Map";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./api/index";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [childClicked, setChiledClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  useEffect(() => {
    setIsLoading(true);
    if (bounds)
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        setPlaces(data);
        setIsLoading(false);
      });
  }, [bounds]);

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spaceing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChiledClicked={setChiledClicked}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
