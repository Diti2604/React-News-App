import "./App.css";
import Landing from "./Components/Landing";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchingNews from "./Components/SearchingNews";
import News from "./Components/News";
import { useEffect, useState } from "react";

function App() {
  const [location, setLocation] = useState(null);
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      const apiKey = process.env.REACT_APP_GEO_API_KEY;
      try {
        const response = await fetch(
          `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`
        );
        const data = await response.json();
        setLocation(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    async function getNews() {
      if (location && location.country_code2) {
        try {
          const response = await fetch(
            `
            https://newsdata.io/api/1/latest?country=al&apikey=pub_5183157ef4068d283f2eb9bda1b4dd3516f51
           `
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          console.log(data);
          setNews(data);
        } catch (error) {
          console.error("Error fetching news data: ", error);
        }
      }
      // else {
      //   try {
      //     const response = await fetch(
      //       `
      //       https://newsdata.io/api/1/latest?country=al&apikey=pub_5183157ef4068d283f2eb9bda1b4dd3516f51
      //      `
      //     );

      //     if (!response.ok) {
      //       throw new Error(`HTTP error! Status: ${response.status}`);
      //     }

      //     const data = await response.json();
      //     console.log(data);
      //     setNews(data);
      //   } catch (error) {
      //     console.error("Error fetching news data: ", error);
      //   }
      // }
    }

    getNews();
  }, [location]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact>
          <Landing location={location} news={news} />{" "}
        </Route>
        <Route path="/search" exact component={SearchingNews} />
        <Route path="/news">
          <News news={news} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
