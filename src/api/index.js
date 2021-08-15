import axios from "axios";

const url =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(url, {
      method: "GET",
      url: url,
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
        "x-rapidapi-key": "ae51490b8emsh67da63f5f8fc3e4p1ed85fjsn23aabce93548",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
