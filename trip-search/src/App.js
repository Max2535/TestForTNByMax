
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Globe, MapPin, Clock } from "lucide-react";
import TravelCard from "./Component/TravelCard";
const App = () => {
  const [trips, setTrips] = useState([]);
  const [keyword, setKeyword] = useState("");

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

  useEffect(() => {
    fetchTrips(keyword);
  }, [keyword]);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-blue-400 mb-8">
        เที่ยวไหนดี
      </h1>
      <h2 className="text-2xl font-semibold mb-6 text-center">เกาะ</h2>

      {trips.map((trip) => (
        <TravelCard
          key={trip.eid}
          title={trip.title}
          description={trip.description}
          mainImage={trip.photos[0]}
          smallImages={trip.photos}
        />
      ))}

      <div className="mt-8 text-center text-gray-600">
        <div className="flex justify-center space-x-4">
          <span className="flex items-center">
            <Globe className="mr-1" size={16} /> เกาะ
          </span>
          <span className="flex items-center">
            <MapPin className="mr-1" size={16} /> ทะเล
          </span>
          <span className="flex items-center">
            <Clock className="mr-1" size={16} /> ธรรมชาติ
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
//       <input
//         type="text"
//         placeholder="ค้นหาทริป..."
//         value={keyword}
//         onChange={(e) => setKeyword(e.target.value)}
//       />