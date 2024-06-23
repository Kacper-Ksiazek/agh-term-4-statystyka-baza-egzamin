<script lang="ts">
    import {MetaTags} from 'svelte-meta-tags'

    import {QUESTIONS} from "./data/questions";

    import {QuestionRandomizer} from "./utils/QuestionRandomizer";

    const questions = new QuestionRandomizer(QUESTIONS);

    $: currentQuestion = questions.getNewQuestion();

    const currentGame = {
        currentTurnIsOver: false,
        lastAnswerWasCorrect: false,
        questionNumber: 1,
        numberOfRemainingQuestions: QUESTIONS.length - 1,
        answers: {
            positive: 0,
            negative: 0,

            getWinsRate() {
                return this.positive / (this.positive + this.negative) * 100;
            },

            getLosesRate() {
                return this.negative / (this.positive + this.negative) * 100;
            }
        }

    }

    function onAnswerButtonClick(choice: boolean) {
        if (choice === currentQuestion.answer) {
            currentGame.answers.positive++;
            currentGame.lastAnswerWasCorrect = true;
        } else {
            currentGame.answers.negative++;
            currentGame.lastAnswerWasCorrect = false;
        }
        currentGame.currentTurnIsOver = true;
    }

    function nextTurn() {
        currentGame.questionNumber++;
        currentGame.currentTurnIsOver = false;

        setTimeout(() => {
            currentGame.numberOfRemainingQuestions--;
            currentQuestion = questions.getNewQuestion();
        }, 100)
    }

</script>

<MetaTags
        title="Statystyka Baza | AGH IiAD"
/>

<main>
    <h1 class="mb-2">Statystyka ({currentGame.numberOfRemainingQuestions})</h1>

    <div class="grid grid-cols-3 mt-6">
        <h4>Numer pytania: <strong>{currentGame.questionNumber}</strong></h4>
        <h4>Poprawne odpowiedzi: <strong class="text-green-500">{currentGame.answers.positive}</strong></h4>
        <h4>Błędne odpowiedzi: <strong class="text-red-500">{currentGame.answers.negative}</strong></h4>
    </div>

    <div class="flex h-[6px] mt-4 before:bg-stone-600 before:w-full before:h-full before:absolute relative">
        <div
                class="bg-green-700 h-full transition-all relative z-1"
                style="width: {currentGame.answers.getWinsRate()}%;"
        />
        <div
                class="bg-red-700 h-full transition-all relative z-1"
                style="width: {currentGame.answers.getLosesRate()}%;"
        />
    </div>

    <div
            id="question-wrapper"
            class="bg-stone-600 pt-2 pb-2 rounded-2xl my-10 px-2 sm:px-8"
    >
        <h2 id="question" class="my-6 text-xl  min-h-[180px] sm:min-h-[84px]">
            {currentQuestion.question}
        </h2>

        <div class="mt-2">
            <button
                    class="bg-green-700 hover:bg-green-500 disabled:bg-stone-800 disabled:text-black transition-colors"
                    id="true"
                    disabled={currentGame.currentTurnIsOver}
                    on:click={() => onAnswerButtonClick(true)}
            >
                Prawda
            </button>

            <button
                    class="bg-red-700 hover:bg-red-500 disabled:bg-stone-800 disabled:text-black transition-colors"
                    id="false"
                    disabled={currentGame.currentTurnIsOver}
                    on:click={() => onAnswerButtonClick(false)}
            >
                Fałsz
            </button>
        </div>

    </div>

    <div class="transition-opacity h-[260px]" style="opacity: {Number(currentGame.currentTurnIsOver)}">
        <h4 class="text-xl mb-2 flex gap-2 justify-center align-middle">
            <strong
                    class={currentGame.lastAnswerWasCorrect ? "text-green-500": "text-red-500"}
            >
                ODPOWIEDŹ {currentGame.lastAnswerWasCorrect ? "POPRAWNA" : "BŁĘDNA"}
            </strong>
            <span>|</span>
            <span>Wyjaśnienie: </span>
        </h4>

        <p class="opacity-700">
            {currentQuestion.explanation}
        </p>

        <button
                class="mt-6"
                on:click={nextTurn}
                disabled={!currentGame.currentTurnIsOver}
        >Następne pytanie
        </button>

    </div>

</main>

<style>

</style>
