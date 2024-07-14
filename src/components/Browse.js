import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/*
        Maincontainer
          -videoBackground
          -videotitle
          SecoundaryContainer
             -Movielist * n
               -Crads * n

      */}
    </div>
  );
};

export default Browse;
