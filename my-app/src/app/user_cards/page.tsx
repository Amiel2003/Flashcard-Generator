export default function YourCards() {
    return (
        <section className="bg-gray-900 bg-opacity-60 py-16">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <div className="w-full max-w-4xl text-center text-white">
                        <div className="mb-8">
                            <h2 className="text-4xl font-bold mb-4">Your Flash<span className="text-blue-300">Ai</span> Card/s</h2>
                            <p className="text-lg">
                                The flashcards you generated with FlashAi! Feel free to review them.
                            </p>
                        </div>

                        <form className="bg-gray-300 rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

                            <div className="md:col-span-4 flex items-center rounded px-3 py-2 bg-gray-500">
                                <label htmlFor="topic" className="text-sm text-blue-100">Topic:</label>
                                <input
                                    type="text"
                                    name="prompt"
                                    id="prompt"
                                    placeholder="Ex: Volcanology"
                                    className="w-full outline-none text-sm ml-2"
                                />
                            </div>

                            <div className="md:col-span-3 bg-gray-500 flex items-center rounded px-3 py-2">
                                <label htmlFor="number" className="text-sm text-blue-100">Number:</label>

                                <select
                                    name="number"
                                    id="number"
                                    className="w-full bg-gray-500 outline-none text-sm ml-1"
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
                                    Generate
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
}