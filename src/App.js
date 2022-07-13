import axios from "axios";
import { useEffect, useState } from "react";
import SongCard from "./components/song-card";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ChartCard from "./components/chart-card";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/getAll")
      .then(res => setData(res.data));
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar />

      <div className="p-10">
        <h1 className="text-5xl font-semibold mb-5 sm:text-2xl">
          Featured
        </h1>
        <hr />
        <div className="xl:flex xl:flex-row sm:flex-col md:flex-row">
          {data.map(item => (
            <div className="m-2 basis-4/12" key={item._id}>
              <SongCard key={item._id} song={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-800 p-12 text-white">
        <h1 className="text-3xl font-semibold mb-5 text-center">
          Charts
        </h1>

        <div className="flex flex-col p-3 mx-auto xl:w-3/5 md:w-auto sm:w-auto">
          {data.map((item, index) => (
            <div key={item._id}>
              <ChartCard key={item._id} song={item} index={index} />
            </div>
          ))}
        </div>
      </div>

      <Footer />

    </div>

  )
}

export default App;
