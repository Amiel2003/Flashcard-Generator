"use client";
import { WaypointsIcon } from "lucide-react";

export default function Home() {
  return (
    <section className="bg-black bg-opacity-60 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl text-center text-white">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4">Welcome to Flash<span className="text-blue-300">Ai</span></h2>
              <p className="text-lg">
              Helps you instantly generate smart, personalized flashcards using the power of AI. Study faster, remember longer.
              </p>
            </div>

            <form className="bg-gray-300 rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-4 flex items-center rounded px-3 py-2 bg-gray-500">
                <input
                  type="text"
                  name="keyword"
                  id="keyword"
                  placeholder="Topic"
                  className="w-full outline-none text-sm "
                />
              </div>

              <div className="md:col-span-3 bg-gray-500 flex items-center rounded px-3 py-2">
                <select
                  name="category"
                  id="category"
                  className="w-full bg-gray-500 outline-none text-sm"
                  defaultValue=""
                >
                  <option value="" disabled className="text-white">
                    Number
                  </option>
                  <option value={3}>3</option>
                  <option value={5}>5</option>
                  <option value={8}>8</option>
                  <option value={10}>10</option>
                </select>
              </div>

              <div className="md:col-span-3 flex items-center rounded px-3 py-2 bg-gray-500">
                <select
                  name="location"
                  id="location"
                  className="w-full bg-gray-500 outline-none text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Difficulty
                  </option>
                  <option value={"Easy"}>Beginner</option>
                  <option value={"Medium"}>Intermediate</option>
                  <option value={"Hard"}>Expert</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded flex gap-2"
                >
                  <WaypointsIcon color="white" size={24}/> Generate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
