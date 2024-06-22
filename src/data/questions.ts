import type {Question} from "../@types/Question";


export const QUESTIONS:  Question[] = [
    {
        id: 1,
        question: "Populacja nieskończona ma zawsze rozkład ciągły",
        answer: false,
        explanation: "🟥 Populacja nieskończona może mieć zarówno rozkład ciągły, jak i dyskretny."
    },
    {
        id: 2,
        question: "Populacja skończona jest typowa dla eksperymentów naukowych",
        answer: true,
        explanation: "🟩 Eksperymenty naukowe często operują na skończonych populacjach ze względu na ograniczone zasoby i czas."
    },
    {
        id: 3,
        question: "Próba losowa jest zawsze reprezentatywną",
        answer: false,
        explanation: "🟥 Próba losowa nie zawsze jest reprezentatywna, ponieważ może nie odzwierciedlać dokładnie struktury całej populacji."
    },
    {
        id: 4,
        question: "Losowanie warstwowe może mieć miejsce zarówno z nieskończonych jak i ze skończonych populacji",
        answer: true,
        explanation: "🟩 Losowanie warstwowe może być stosowane zarówno w populacjach skończonych, jak i nieskończonych."
    },
    {
        id: 5,
        question: "W populacji nieskończonej trudno jest uzyskać próbę prostą",
        answer: false,
        explanation: "🟥 Uzyskanie prostej próby z populacji nieskończonej nie jest trudniejsze niż z populacji skończonej, zależy to głównie od metod losowania."
    },
    {
        id: 6,
        question: "Poszczególne wyniki próby prostej są nieskorelowane między sobą",
        answer: true,
        explanation: "🟩 W próbie prostej, przy założeniu losowego doboru, wyniki są niezależne, a więc nieskorelowane."
    },
    {
        id: 7,
        question: "Nieobciążoność estymatora jest jego własnością w dużej próbie",
        answer: false,
        explanation: "🟥 Nieobciążoność estymatora nie zależy od wielkości próby, lecz od konstrukcji samego estymatora."
    },
    {
        id: 8,
        question: "Nierówność Rao-Cramera określa kres dolny wariancji dowolnego estymatora",
        answer: true,
        explanation: "🟩 Nierówność Rao-Cramera określa dolną granicę wariancji nieobciążonych estymatorów."
    },
    {
        id: 9,
        question: "Estymator zgodny to taki estymator, który jest stochastyczny zbieżny do zera",
        answer: false,
        explanation: "🟥 Estymator zgodny to taki, który zbiega stochastycznie do prawdziwej wartości estymowanego parametru, a nie do zera."
    },
    {
        id: 10,
        question: "Estymator dostateczny minimalizuje ilość informacji o parametrze zawartą w próbie losowej",
        answer: false,
        explanation: "🟥 Estymator dostateczny wykorzystuje całą informację zawartą w próbie o estymowanym parametrze."
    },
    {
        id: 11,
        question: "Estymator najwiarygodniejszy jest zawsze zgodny",
        answer: true,
        explanation: "🟩 Estymatory najwiarygodniejsze są zgodne, co oznacza, że z dużym prawdopodobieństwem zbliżają się do rzeczywistej wartości parametru przy dużej liczbie obserwacji."
    },
    {
        id: 12,
        question: "Przedział ufności to taki przedział, do którego z prawdopodobieństwem 1 - α trafia wartość szacowanego parametru",
        answer: true,
        explanation: "🟩 Przedział ufności jest skonstruowany tak, że z prawdopodobieństwem 1 - α zawiera szacowany parametr populacji."
    },
    {
        id: 13,
        question: "Do estymacji przedziałowej średniej m w rozkładzie normalnym populacji konieczna jest znajomość odchylenia standardowego σ populacji",
        answer: false,
        explanation: "🟥 Do estymacji przedziałowej średniej m nie jest konieczna znajomość odchylenia standardowego σ populacji. W przypadku nieznanego σ używa się odchylenia standardowego z próby i rozkładu t Studenta zamiast rozkładu normalnego."
    },
    {
        id: 14,
        question: "Przedział ufności dla wariancji σ² populacji o rozkładzie normalnym ma długość zależną od n-elementowej próby losowej",
        answer: true,
        explanation: "🟩 Długość przedziału ufności dla wariancji zależy od wielkości próby, ponieważ wpływa ona na oszacowanie wariancji."
    },
    {
        id: 15,
        question: "Przedział ufności dla współczynnika korelacji ϱ w dwuwymiarowej populacji normalnej oparty jest na rozkładzie t Studenta.",
        answer: false,
        explanation: "🟥 Przedział ufności dla współczynnika korelacji opiera się na transformacji Z Fishera, a nie bezpośrednio na rozkładzie t Studenta."
    },
    {
        id: 16,
        question: "Za pomocą statystyki λ Kołmogorowa można oszacować analityczną postać ciągłej dystrybuanty F(x) populacji",
        answer: false,
        explanation: "🟥 Statystyka λ Kołmogorowa służy do testowania zgodności empirycznej dystrybuanty z dystrybuantą teoretyczną, a nie do oszacowania analitycznej postaci F(x)."
    },
    {
        id: 17,
        question: "Losowanie niezależne próby z populacji skończonej jest efektywniejsze niż losowanie zależne",
        answer: false,
        explanation: "🟥 Losowanie niezależne z populacji skończonej nie jest koniecznie bardziej efektywne niż losowanie zależne, zależy to od konkretnej sytuacji i celów badania."
    },
    {
        id: 18,
        question: "Przypuszczenie, że w rozkładzie wykładniczym z parametrem a wartość tego parametru jest mniejsza od jedności jest hipotezą parametryczną złożoną",
        answer: true,
        explanation: "🟩 Jest to hipoteza złożona, ponieważ określa zakres wartości parametru, a nie konkretną wartość."
    },
    {
        id: 19,
        question: "Odrzucając hipotezę H0 popełniamy zawsze w teście istotności błąd pierwszego rodzaju określonej wartości α.",
        answer: false,
        explanation: "🟥 Odrzucenie H0 oznacza możliwość popełnienia błędu pierwszego rodzaju z określonym prawdopodobieństwem α, ale nie oznacza, że błąd ten popełniamy zawsze."
    },
    {
        id: 20,
        question: "W teście istotności z dużej próby dla średniej m o rozkładzie normalnym wartość krytyczna ma asymptotyczny rozkład normalny.",
        answer: true,
        explanation: "🟩 Przy dużych próbach wartość krytyczna dla średniej m zbliża się do rozkładu normalnego dzięki twierdzeniu granicznemu."
    }
]
