import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function OnclickVideo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <div
          className="w-28 h-28 bg-secondary rounded-full items-center flex justify-center cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <FaPlay className="text-white text-4xl" />
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <button
            className="absolute top-2 right-2 text-black text-4xl"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
          <div className="bg-white rounded-lg overflow-hidden relative w-full max-w-2xl">
            <div className="aspect-w-16 aspect-h-9">
              <video
                width="560"
                height="315"
                className="w-full h-full object-cover"
                title="Video"
                controls
                muted
                playsInline
              >
                <source
                  src="https://raw.githubusercontent.com/Ashish-Kaintura/risezonic2025-/main/src/video/Website%20Front%20page%20video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
