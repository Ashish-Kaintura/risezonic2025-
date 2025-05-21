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
                    <div className="bg-white rounded-lg overflow-hidden relative w-full max-w-2xl">
                        <button
                            className="absolute top-2 right-2 text-black text-2xl"
                            onClick={() => setOpen(false)}
                        >
                            &times;
                        </button>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="Video"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
