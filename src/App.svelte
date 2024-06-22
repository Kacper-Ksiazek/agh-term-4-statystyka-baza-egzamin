<script lang="ts">
    import {QUESTIONS} from "./data/questions";

    import {QuestionRandomizer} from "./utils/QuestionRandomizer";

    const questions = new QuestionRandomizer(QUESTIONS);

    $: currentQuestion = questions.getNewQuestion();

    const currentGame = {
        currentTurnIsOver: false,
        questionNumber: 0,
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
            currentQuestion = questions.getNewQuestion();
        } else {
            currentGame.answers.negative++;
            currentGame.currentTurnIsOver = true;
        }
    }

    function nextTurn() {
        currentGame.currentTurnIsOver = false;
        currentQuestion = questions.getNewQuestion();
    }

</script>

<main>
    <h1 class="mb-2">Statystyka baza</h1>

    <div class="grid grid-cols-3 mt-6">
        <h4>Numer pytania: <strong>{currentGame.questionNumber}</strong></h4>
        <h4>Poprawne odpowiedzi: <strong class="text-green-500">{currentGame.answers.positive}</strong></h4>
        <h4>Bledne odpowiedzi: <strong class="text-red-500">{currentGame.answers.negative}</strong></h4>
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
            class="bg-stone-600 pt-2 pb-2 px-8 rounded-2xl my-10 w-screen max-w-[1200px]"
    >
        <h2 id="question" class="my-6 text-xl">
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

    <div class="transition-opacity" style="opacity: {Number(currentGame.currentTurnIsOver)}">
        <h4 class="text-xl mb-2">Wyjaśnienie: </h4>

        <p class="opacity-700">
            {currentQuestion.explanation}
        </p>

        <button class="mt-6" on:click={nextTurn}>Następne pytanie</button>

    </div>

</main>

<style>

</style>
