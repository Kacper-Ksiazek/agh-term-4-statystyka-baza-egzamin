<script lang="ts">
    const currentGame = {
        isGameStarted: false,
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

    function startGame() {
        currentGame.isGameStarted = true;
        currentGame.questionNumber = 0;
        currentGame.answers.positive = 0;
        currentGame.answers.negative = 0;
    }

    function onAnswerButtonClick(choice: boolean) {
        if (choice) {
            currentGame.answers.positive++;
        } else {
            currentGame.answers.negative++;
        }

        currentGame.questionNumber++;

        //TODO: Fetch next question
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
            class="bg-stone-600 pt-2 pb-2 px-8 rounded-2xl my-10 w-screen max-w-[800px]"
    >
        <h2 id="question" class="my-6 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.?
        </h2>

        <div class="mt-2">
            <button
                    class="bg-green-700 hover:bg-green-500" id="true"
                    on:click={() => onAnswerButtonClick(true)}
            >
                Prawda
            </button>

            <button
                    class="bg-red-700 hover:bg-red-500" id="false"
                    on:click={() => onAnswerButtonClick(false)}
            >
                Fałsz
            </button>
        </div>

    </div>

    <h4 class="text-xl mb-2">Wyjaśnienie: </h4>

    <p class="opacity-700">
        lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quod quae. Quisquam, quod. Quisquam, quod.
    </p>

    <button class="mt-6">Następne pytanie</button>

</main>

<style>

</style>
