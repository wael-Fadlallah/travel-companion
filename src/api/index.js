import axios from "axios";

export const getPlacesData = async (type = "restaurants", sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        method: "GET",
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          // restaurant_tagcategory_standalone: "10591",
          // restaurant_tagcategory: "10591",
          // limit: "30",
          // currency: "USD",
          // open_now: "false",
          // lunit: "km",
          // lang: "en_US",
        },
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
