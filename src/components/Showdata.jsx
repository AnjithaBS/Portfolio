import React,{useState,useEffect} from "react";
import axios from "axios";
import Showphotos from "./Showphotos";
function Showdata({ users }) {
const [photos, setPhotos] = useState([]);

  async function fetchPhotos() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setPhotos(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

    useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-8">
      
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10 tracking-wide">
        User Directory
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Avatar */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-500 text-white text-2xl font-bold shadow-md">
                {user.name?.charAt(0)}
              </div>
            </div>

            {/* Name */}
            <h2 className="text-xl font-semibold text-center text-gray-900">
              {user.name}
            </h2>

            {/* Email */}
            <p className="text-sm text-gray-600 text-center mt-2 break-words">
              {user.email}
            </p>

            {/* Button */}
            <div className="mt-5 flex justify-center">
              <button className="px-4 py-2 bg-indigo-500 text-white text-sm rounded-full hover:bg-indigo-600 transition">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>

    <Showphotos photos={photos}/>
    </>
  );
}

export default Showdata;