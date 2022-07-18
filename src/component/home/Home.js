import React from "react";
import { useDispatch } from "react-redux";
import { movieAxios } from "../../apis/movieApiKey";
import MovieListing from "../movielisting/MovieListing";

function Home() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    getApiCall()
  }, []);

  const getApiCall = async () => {
    try {
      const response = await movieAxios.get("/users");
      dispatch(addMovies(response));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <MovieListing />
    </div>
  );
}

export default Home;
