import { useEffect, useState } from "react";
import "./App.css";
import { getRandomDimension } from "./utils/random";
import axios from "axios";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";

function App() {
   const [currentLocation, setCurrentLocation] = useState(null);

   const fetchDimension = (idLocation) => {
      const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
      axios
         .get(url)
         .then(({ data }) => setCurrentLocation(data))
         .catch((err) => console.log(err));
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      const newLocation = e.target.newLocation.value;
      fetchDimension(newLocation);
   };

   useEffect(() => {
      const randomDimension = getRandomDimension(126);
      fetchDimension(randomDimension);
   }, []);
   return (
      <main className="bg-black min-h-screen font-firacode text-white">
         <div className="">TITLE</div>
         <LocationForm handleSubmit={handleSubmit} />
         <LocationInfo currentLocation={currentLocation} />
         <ResidentList
            residents={currentLocation?.residents ?? []}
            currentLocation={currentLocation}
         />
      </main>
   );
}

export default App;
