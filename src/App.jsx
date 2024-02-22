import MainScreen from "./components/MainScreen";
import "./App.css";
import "./fonts/GeistVariableVF.ttf";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IntroScreen from "./components/IntroScreen";
import ItineraryScreen from "./components/ItineraryScreen";
import Loading from "./components/Common/Loading/index.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IntroScreen />,
      // element: <Loading />,
    },
    {
      path: "/fill-details",
      element: <MainScreen />,
    },
    {
      path: "/your-itinerary",
      element: <ItineraryScreen />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
