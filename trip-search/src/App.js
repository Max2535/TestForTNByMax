import React, { useState, useEffect } from "react";
import axios from "axios";
import { Globe, MapPin, Clock,Search } from "lucide-react";
import TravelCard from "./Component/TravelCard";
const App = () => {
  const [trips, setTrips] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchTrips = async (keyword) => {
      try {
        if (keyword) {
          const response = await axios.get(
            `http://localhost:3000/api/trips?keyword=${keyword}`
          );
          setTrips(response.data.trips);
        } else {
          const response = await axios.get(`http://localhost:3000/api/trips`);
          setTrips(response.data.trips);
        }
        console.log(trips);
      } catch (error) {
        console.error("Error fetching trips", error);
      }
    };

    fetchTrips(keyword);
  }, [keyword]);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-blue-400 mb-8">
        เที่ยวไหนดี
      </h1>
      <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
      <div class="max-w-md mx-auto">          
          <div class="relative py-4">
            <input
              type="text"
              id="search"
              class="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="ค้นหาทริป..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Search className="mr-1" size={16} />
            </div>
          </div>
        </div>


      {trips.map((trip) => (
        <TravelCard
          key={trip.eid}
          title={trip.title}
          description={trip.description}
          mainImage={trip.photos[0]}
          smallImages={trip.photos}
          url={trip.url}
          tags={trip.tags}
          onClickTag={setKeyword}
        />
      ))}

      <div className="mt-8 text-center text-gray-600">
        <div className="flex justify-center space-x-4">
          <span
            className="flex items-center"
          >
            <Globe className="mr-1" size={16}/> <button className="text-blue-500 underline" onClick={() => {setKeyword("เกาะ");setTitle("เกาะ");}}> เกาะ</button>
          </span>
          <span className="flex items-center" >
            <MapPin className="mr-1" size={16} /> <button className="text-blue-500 underline" onClick={() => {setKeyword("ทะเล");setTitle("ทะเล");}}> ทะเล</button>
          </span>
          <span className="flex items-center">
            <Clock className="mr-1" size={16} /> <button className="text-blue-500 underline" onClick={() => {setKeyword("ธรรมชาติ");setTitle("ธรรมชาติ");}}> ธรรมชาติ</button>            
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
