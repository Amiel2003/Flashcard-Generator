import { useState } from 'react';
import { Flashcard, CarouselProps } from './carouselInterface';
import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselHolder({ flashcards }: CarouselProps) {
    const [showAnswer, setShowAnswer] = useState<number | null>(null);

    const cards: Flashcard[] = [
        {
            question: "HDSHJH",
            answer: "dadasd"
        },
        {
            question: "ASJDKJAD",
            answer: "andkasd"
        }
    ];

    return (
        <div className="w-2/3 mx-auto p-4 mt-5">
            <Carousel>
                <CarouselContent>
                    {flashcards.map((card, index) => (
                        <CarouselItem key={index}>
                            <div className="bg-gray-300 w-full rounded-2xl shadow-lg p-4 lg:p-10 h-64 flex flex-col justify-center items-center text-center transition-all duration-500">
                                <p className="lg:text-2xl text-sm">{card.question}</p>
                                {showAnswer === index && (
                                    <p className="mt-4 text-green-600 text-xs lg:text-lg font-bold">{card.answer}</p>
                                )}
                                <Button variant={'outline'}
                                    onClick={() =>
                                        setShowAnswer(showAnswer === index ? null : index)
                                    }
                                    className={`mt-6 ${showAnswer === index ? 'bg-orange-600' : 'bg-green-600'} text-white px-4 py-2 rounded hover:bg-blue-600 transition text-xs lg:text-md`}
                                >
                                    {showAnswer === index ? 'Hide Answer' : 'Show Answer'}
                                </Button>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
