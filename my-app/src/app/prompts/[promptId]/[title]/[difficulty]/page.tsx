"use client";

import { useEffect, useState } from "react";
import { getCardsByPrompt } from "../../../../../../functions/getUserCards";
import { useParams } from "next/navigation";
import CarouselHolder from "../../../../../../components/Carousel/carousel";
import LoadingDots from "../../../../../../components/Loading/loadingdots";

export default function PromptPage() {
    const { promptId, title, difficulty } = useParams();
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCards = async () => {
            const result = await getCardsByPrompt(promptId as string);
            if (result) setCards(result);
            setLoading(false);
        };

        if (promptId) fetchCards();
    }, [promptId]);


    return (
        <section className="bg-gray-950 bg-opacity-60 py-16">
            <div className="container mx-auto px-4 pb-4">
                <div className="flex justify-center">
                    <div className="w-full max-w-4xl text-center text-white">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">
                                {(title as string)?.replaceAll('%20', ' ') ?? 'Untitled'}
                                <span className="text-blue-300">
                                    {(difficulty == 'Easy') ? " (Beginner)" :
                                        (difficulty == 'Medium') ? " (Intermediate)" : " (Experts)"}
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {(loading)
                ?
                <LoadingDots />
                : <div className="pb-19">
                    <CarouselHolder flashcards={cards} />
                </div>
            }


        </section>
    )

}