import "./style.css";
import BrandHeader from "../Common/BrandHeader/index.jsx";
import Card from "../Common/Card/index.jsx";
import Button from "../Common/Button/index.jsx";
import { Link, useLocation } from "react-router-dom";
import useFetchAPI from "../../hooks/useFetchAPI.js";
import Loading from "../Common/Loading/index.jsx";
import ErrorScreen from "../ErrorScreen/index.jsx";
import { createTripPrompt } from "../../utils/prompt.js";

const ItineraryScreen = () => {
  // data = {
  //   success: true,
  //   response:
  //     '{\n  "itinerary": [\n    {\n      "day": "Day 1",\n      "activities": [\n        {\n          "time": "08:00 AM",\n          "name": "Breakfast at Cafe Bodega",\n          "location": "Panaji",\n          "price": 500,\n          "duration": "1 hour",\n          "description": "Start your day with a delightful breakfast at this quaint cafe known for its continental menu."\n        },\n        {\n          "time": "09:30 AM",\n          "name": "Fort Aguada visit",\n          "location": "Sinquerim",\n          "price": 100,\n          "duration": "2 hours",\n          "description": "Explore the 17th-century Portuguese fort with sweeping views of the Arabian Sea."\n        },\n        {\n          "time": "12:00 PM",\n          "name": "Lunch at Fisherman\'s Wharf",\n          "location": "Cavelossim",\n          "price": 1000,\n          "duration": "1.5 hours",\n          "description": "Enjoy Goan cuisine at this seaside restaurant offering a mix of local and international dishes."\n        },\n        {\n          "time": "02:00 PM",\n          "name": "Shopping at Mapusa Market",\n          "location": "Mapusa",\n          "price": 0,\n          "duration": "1.5 hours",\n          "description": "Experience the local market scene and shop for souvenirs, spices, and handcrafted items."\n        },\n        {\n          "time": "04:30 PM",\n          "name": "Baga Beach relaxation",\n          "location": "Baga",\n          "price": 200,\n          "duration": "3 hours",\n          "description": "Unwind on the popular beach, try water sports or simply soak in the sunset."\n        },\n        {\n          "time": "08:00 PM",\n          "name": "Dinner at Tito\'s Restaurant",\n          "location": "Baga",\n          "price": 1200,\n          "duration": "2 hours",\n          "description": "End your day with a lively dinner at one of Goa\'s iconic dining and nightlife spots."\n        }\n      ]\n    },\n    {\n      "day": "Day 2",\n      "activities": [\n        {\n          "time": "08:00 AM",\n          "name": "Yoga session at Ashiyana",\n          "location": "Mandrem Beach",\n          "price": 800,\n          "duration": "1.5 hours",\n          "description": "Begin with a refreshing yoga session on the serene Mandrem Beach."\n        },\n        {\n          "time": "10:00 AM",\n          "name": "Dudhsagar Falls trek",\n          "location": "Sonaulim",\n          "price": 1500,\n          "duration": "4 hours",\n          "description": "A guided trek to the stunning four-tiered waterfall located in the Mollem National Park."\n        },\n        {\n          "time": "03:00 PM",\n          "name": "Lunch at Spice Plantation",\n          "location": "Ponda",\n          "price": 900,\n          "duration": "1.5 hours",\n          "description": "Enjoy an organic meal at a spice plantation and learn about local spices and herbs."\n        },\n        {\n          "time": "05:00 PM",\n          "name": "Old Goa churches tour",\n          "location": "Old Goa",\n          "price": 300,\n          "duration": "2 hours",\n          "description": "Visit the historical churches of Old Goa, a UNESCO World Heritage site."\n        },\n        {\n          "time": "08:00 PM",\n          "name": "Dinner and Feni tasting",\n          "location": "Panaji",\n          "price": 1100,\n          "duration": "2 hours",\n          "description": "Savor traditional Goan cuisine paired with local feni liquor at Viva Panjim."\n        }\n      ]\n    }\n  ]\n}',
  // };
  const location = useLocation();
  const { inputValues } = location.state || {};
  const prompt = createTripPrompt({
    where_to: inputValues[1],
    number_of_days: inputValues[2],
    when_your_trip_start: inputValues[3],
    itinerary_type: inputValues[4],
    budget: inputValues[5],
    travel_preference: "",
  });
  const { data, loading, error } = useFetchAPI(
    "https://trip-planner-ai-api.onrender.com/wanderlust",
    {
      method: "POST",
      body: JSON.stringify({
        prompt,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log({ data, loading, error });
  const itineraries = data ? JSON.parse(data?.response).itinerary : [];
  if (loading) return <Loading />;
  if (error && !loading)
    return (
      <div>
        <ErrorScreen errorMessage={"dummy"} />
      </div>
    );
  return (
    <div className="itinerary-screen">
      <BrandHeader />
      <div className="cards-wrapper">
        {itineraries?.map((itinerary, index) => {
          return <Card itinerary={itinerary} key={index} />;
        })}
      </div>
      <Link to="/fill-details" className="back-button">
        <Button text="Plan a new trip" />
      </Link>
    </div>
  );
};

export default ItineraryScreen;
