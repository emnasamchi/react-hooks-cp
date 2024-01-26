import { useState, useEffect } from "react";
import List from "./components/List";
import CardDefault from "./components/Card";
import {NavbarDefault} from "./components/Navbar";
import New from "./components/New";
import Filter from "./components/Filter";
import { Input } from "@material-tailwind/react";



function App() {
  const [movies, setMovies] = useState([]);
  const [filtred, setFiltred] = useState([]);
  const [rate,setRate]=useState([]);

  const getMovies = async () => {
    const response = await fetch("http://localhost:3000/movies", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      }, 
    });
    if (response.ok) {
      const data = await response.json();
      setMovies(data);
    }
  };
 
  useEffect(() => {
    getMovies();
  }, []);


  return (
    <div>
      <NavbarDefault/>
     { window.location.pathname =="/" && <List  movies={filtred.length> 0 ? filtred : movies}/>}
     { window.location.pathname =="/new" && <New />}
<Filter movies={movies}  setFiltred={setFiltred} />

    </div>
  );
}
export default App;
