import React from "react";

function Showphotos({photos}){
    return(
        <div className="min-h-screen bg-gray-100 p-6">
             <h1 className="text-3xl font-bold text-center text-gray-800 mb-8"> 
            User List </h1>
                 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> 
                    {photos.map((photo) => ( 
                    <div key={photo.id} className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition duration-300" > 
                    <h2 className="text-xl font-semibold text-gray-900"> {photo.title} </h2>
                        <p className="text-gray-600 mt-2">{user.url}</p> <img src={photo.url} alt="user" />
                        <img src={photo.thumbnailUrl} alt="thumbnail" /> </div> 
                    ))} 
                          
                    </div> 
        </div> 
        
    );
    
}
export default Showphotos;