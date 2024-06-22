<script lang="ts">
    const currentGame = {
        isGameStarted: false,
        questionNumber: 0,
        answers: {
            positive: 0,
            negative: 0
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

    <div
            id="question-wrapper"
            class="bg-stone-600 pt-2 pb-2 px-8 rounded-2xl my-10"
    >
        <h2 id="question" class="my-10 text-2xl">
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

</main>

<style>

</style>
