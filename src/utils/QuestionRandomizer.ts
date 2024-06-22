import type {Question} from "../@types/Question";

export class QuestionRandomizer {
    private remainingQuestions: Question[];

    public constructor(private readonly _initialQuestions: Question[]) {
        this.reset();
    }

    public reset(): void {
        this.remainingQuestions = [...this._initialQuestions];
    }

    public get remainingQuestionsCount(): number {
        return this.remainingQuestions.length;
    }

    public getNewQuestion(): Question {
        if (this.remainingQuestions.length === 0) {
            alert(`Brawo! 🎉🎉 Odpowiedziałeś na wszystkie pytania! Teraz możesz zacząć od nowa.`);
            this.reset();
        }

        const randomIndex = Math.floor(Math.random() * this.remainingQuestions.length);
        const randomQuestion = this.remainingQuestions[randomIndex];
        this.remainingQuestions.splice(randomIndex, 1);

        return randomQuestion;
    }
}