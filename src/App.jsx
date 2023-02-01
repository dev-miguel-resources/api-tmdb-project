import { useState, useEffect } from "react";
import Logo from "./components/Logo/Logo";
import SearchBar from "./components/SearchBar/SearchBar";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import TVShowList from "./components/TVShowList/TVShowList";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import logoImg from "./assets/images/logo.png";
import s from "./style.module.css";

// STATEFULL - CON ESTADO / COMPORTAMIENTO
function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList && popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  console.log(currentTVShow);

  useEffect(() => {
    fetchPopulars();
  }, []);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.200), rgba(0, 0, 0, 0.200)),
            url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo title="WatchShows" image={logoImg} />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar />
          </div>
          <div className={s.tv_show_details}>
            {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
          </div>
          <div className={s.recommended_shows}>
            {currentTVShow && <TVShowList />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
