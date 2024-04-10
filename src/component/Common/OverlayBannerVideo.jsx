import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";


function OverlayBannerVideo({ imageUrl, videoId }) {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="relative border-4 border-wsDark">
      {/* Background image */}
      <div
        className="bg-cover bg-center h-64 md:h-96"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black opacity-40 h-64 md:h-96 flex justify-center items-center cursor-pointer ${showVideo ? 'hidden' : ''}`}
          onClick={openVideo}
        >
          {/* Overlay text */}
          <p className="text-white text-7xl font-bold"><FaPlayCircle /></p>
        </div>
        {/* Video overlay */}
        {showVideo && (
          <div className="absolute inset-0 h-64 md:h-96 flex justify-center items-center">
            <div className="relative w-full h-full">
              <button
                className="absolute top-0 right-0 m-4 p-2 text-white bg-black bg-opacity-50 rounded-full"
                onClick={closeVideo}
              >
                Close
              </button>
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OverlayBannerVideo;
