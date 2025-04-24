"use client";
import { WaypointsIcon } from "lucide-react";
import { useEffect, useState } from "react";
import CarouselHolder from "../../components/Carousel/carousel";
import EmptyState from "../../components/Empty/empty";
import LoadingDots from "../../components/Loading/loadingdots";
import { showToast } from "../../functions/toast";
import verifyAccess from "../../functions/verifyAccess";
import axios from "axios";

export default function Home() {

  const [verifying, setVerifying] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [empty, setEmpty] = useState(true)
  const [loading, setLoading] = useState(false)
  const [flashcards, setFlashcards] = useState([])
  const [data, setData] = useState({
    prompt: "",
    number: 3,
    difficulty: "Easy",
  })

  useEffect(() => {
    setMounted(true)
    verifyer()
  }, [])

  async function verifyer() {
    const status = await verifyAccess()
    if (status == 200) setVerifying(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent, retry = false) => {
    e.preventDefault()
    console.log("This is what you will send from frontend to backend:", data)
    try {

      setEmpty(false)
      setLoading(true)
      console.log("Loading")

      const token = localStorage.getItem('token')

      console.log(process.env.NEXT_PUBLIC_BACKEND_ROUTE)
      if (data.prompt != "" && data.number != 0) {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}`, data, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
          }
        })

        setFlashcards(response.data.flashcards)
        setLoading(false)

        console.log(response.data.flashcards)
      } else {
        showToast("Topic must not be empty, number should not be zero!", "error")
      }

    } catch (error) {
      console.error("Error submitting response: ", error)
      setLoading(false)
      setEmpty(true)
      const shouldRetry = error?.response?.data?.shouldRetry;

      if (shouldRetry && !retry) {
        // Retries POST whenever there is parsing error in backend
        showToast("Retrying...", "default")
        setTimeout(() => { handleSubmit(e, true), 1000 })
      }
    }
  }

  if (!mounted) return null;
  if (verifying)
    return (
      <section className="bg-gray-950 bg-opacity-60 py-16 pb-[100%]">

        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl text-center text-white">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">In order to use FlashAi, please log in</h2>
                <a href="/login">
                  <p className="text-lg text-blue-200">Login Here</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

  return (
    <section className="bg-gray-950 bg-opacity-60 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl text-center text-white">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4">Welcome to Flash<span className="text-blue-300">Ai</span></h2>
              <p className="text-lg">
                Helps you instantly generate smart, personalized flashcards using the power of AI. Study faster, remember longer.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-300 rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

              <div className="md:col-span-4 flex items-center rounded px-3 py-2 bg-gray-500">
                <label htmlFor="topic" className="text-sm text-blue-100">Topic:</label>
                <input
                  type="text"
                  name="prompt"
                  id="prompt"
                  placeholder="Ex: Volcanology"
                  onChange={handleInputChange}
                  className="w-full outline-none text-sm ml-2"
                />
              </div>

              <div className="md:col-span-3 bg-gray-500 flex items-center rounded px-3 py-2">
                <label htmlFor="number" className="text-sm text-blue-100">Number:</label>

                <select
                  name="number"
                  id="number"
                  className="w-full bg-gray-500 outline-none text-sm ml-1"
                  onChange={handleInputChange}
                >
                  <option disabled className="text-white">
                    Number
                  </option>
                  <option value={3}>3</option>
                  <option value={5}>5</option>
                  <option value={8}>8</option>
                  <option value={10}>10</option>
                </select>
              </div>

              <div className="md:col-span-3 flex items-center rounded px-3 py-2 bg-gray-500">
                <label htmlFor="difficulty" className="text-sm text-blue-100">Difficulty:</label>

                <select
                  name="difficulty"
                  id="difficulty"
                  className="w-full bg-gray-500 outline-none text-sm"
                  onChange={handleInputChange}
                  defaultValue=""
                >
                  <option disabled>
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
                  <WaypointsIcon color="white" size={24} /> Generate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {(empty) ? <EmptyState />
        : (loading) ? <LoadingDots /> : < CarouselHolder flashcards={flashcards} />
      }
    </section>
  );
}
