export type Flashcard = {
    question: string,
    answer: string,
}

export type CarouselProps = {
    flashcards: Flashcard[],
}