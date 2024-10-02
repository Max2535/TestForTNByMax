const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

// เปิดใช้ CORS
app.use(cors());

// API สำหรับการค้นหาทริป
app.get('/api/trips', async (req, res) => {
  const keyword = req.query.keyword || '';
  
  try {
    const response = await axios.get('http://localhost:9000/trips');
    const trips = response.data;

    // ค้นหาข้อมูลที่ตรงกับ keyword
    const filteredTrips = trips.filter(trip => {
      const searchString = [trip.title, trip.description, ...trip.tags].join(' ').toLowerCase();
      return searchString.includes(keyword.toLowerCase());
    });

    res.status(200).json({ trips: filteredTrips });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
});

app.listen(port, () => {
  console.log(`API Gateway listening at http://localhost:${port}`);
});
