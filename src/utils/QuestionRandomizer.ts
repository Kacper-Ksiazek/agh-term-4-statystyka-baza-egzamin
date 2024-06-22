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

    public getRandomQuestion(): Question {
        if (this.remainingQuestions.length === 0) {
            throw new Error("No more questions left");
        }

        const randomIndex = Math.floor(Math.random() * this.remainingQuestions.length);
        const randomQuestion = this.remainingQuestions[randomIndex];
        this.remainingQuestions.splice(randomIndex, 1);

        return randomQuestion;
    }
}