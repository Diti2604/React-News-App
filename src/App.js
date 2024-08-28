import "./App.css";
import Landing from "./Components/Landing";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchingNews from "./Components/SearchingNews";
import News from "./Components/News";
import { useEffect, useState } from "react";

function App() {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    const fetchLocation = async () => {
      const apiKey = process.env.REACT_APP_GEO_API_KEY;

      try {
        const response = await fetch(
          `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`
        );
        const data = await response.json();
        setLocation(data);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchLocation();
  }, []);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact>
          <Landing location = {location} />{" "}
        </Route>
        <Route path="/search" exact component={SearchingNews} />
        <Route path="/news" exact component={News} />
      </div>
    </Router>
  );
}

export default App;
