import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import TVShowList from "./components/TVShowList/TVShowList";
import Logo from "./components/Logo/Logo";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import { TVShowAPI } from "./api/tv-show";
import logoImg from "./assets/images/logo.png";
import s from "./style.module.css";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList && popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  return (
    <div></div>
  )
}

export default App;
