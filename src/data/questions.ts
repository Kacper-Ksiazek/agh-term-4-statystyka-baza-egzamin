import type {Question} from "../@types/Question";


export const QUESTIONS: Question[] = [
    {
        id: 1,
        question: "Populacja nieskończona ma zawsze rozkład ciągły",
        answer: false,
        explanation: "🟥 Populacja nieskończona może mieć zarówno rozkład ciągły, jak i dyskretny."
    },
    {
        id: 2,
        question: "Populacja skończona jest typowa dla eksperymentów naukowych",
        answer: false,
        explanation: "🟥  Fałsz, dla społeczno ekonomicznych jest skończona, eksperymenty naukowe przez ich powtarzanie mają populacje nieskończona."
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
        answer: false,
        explanation: "🟥  Nierówność Rao-Cramera określa dolną granicę wariancji nieobciążonych estymatorów."
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
        answer: false,
        explanation: "🟥  1-a jest wielkością to prawdopodobieństwo wyznaczenia takiego przedziału, że rzeczywista wartość parametru 𝜃 w populacji znajdzie się w tym przedziale, czyli ze na 0.99 wyznaczymy przedzial który obejmie wartość szacowanego parametru, a nie ze na 0.99 ta wartość trafi do przedziału. "
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
        explanation: "🟥 Przedział ufności dla współczynnika korelacji opiera się na rozkładzie normalnym N(0,1)"
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
    },
    {
        id: 21,
        question: "Statystyka służąca do weryfikacji hipotezy o wielkości wariancji populacji o rozkładzie normalnym ma dla dużej próby rozkład asymptotyczny chi 2",
        answer: false,
        explanation: "🟥  W dużych próbach, statystyka testu wariancji zbliża się do rozkładu normalnego N(0,1)"
    },
    {
        id: 22,
        question: "W analizie wariancji według klasyfikacji podwójnej istotny wpływ czynnika A na wynik eksperymentu wyklucza wystąpienie istotnego wpływu czynnika B na wynik tego eksperymentu",
        answer: false,
        explanation: "🟥 Wpływ jednego czynnika nie wyklucza wpływu drugiego; oba mogą mieć jednocześnie istotny wpływ."
    },
    {
        id: 23,
        question: "Test istotności dla hipotezy precyzującej dowolną wartość współczynnika korelacji w dwuwymiarowej populacji normalnej oparty jest na statystyce mającej rozkład t Studenta.",
        answer: true,
        explanation: "🟩 Test istotności współczynnika korelacji w populacji normalnej rzeczywiście oparty jest na rozkładzie t Studenta."
    },
    {
        id: 24,
        question: "Odrzucenie hipotezy H0 w teście niezależności chi2 oznacza występowanie korelacji między cechami X i Y.",
        answer: false,
        explanation: "🟥 FAŁSZ: Odrzucenie hipotezy H0 w teście niezależności chi2 oznacza, że istnieje zależność (statystycznie istotny związek) między cechami X i Y, ale niekoniecznie korelacja, która odnosi się do siły i kierunku liniowego związku między zmiennymi."
    },
    {
        id: 25,
        question: "Używając nielosowej ale reprezentatywnej próby można ocenić stopień dokładności wnioskowania o cechach populacji generalnej",
        answer: true,
        explanation: "🟩 Nielosowa, ale reprezentatywna próba może dostarczyć dokładnych oszacowań cech populacji, choć może być trudniej ocenić precyzję tych oszacowań bez formalnych narzędzi statystycznych."
    },
    {
        id: 26,
        question: "Jeżeli t jest zmienną o rozkładzie t Studenta z k stopniami swobody to zmienna losowa F=t^2 ma rozkład F Snedecora z k1 = k i k2 = 1 stopniami swobody.",
        answer: false,
        explanation: "🟥 Gdy t ma rozkład t Studenta z k stopniami swobody, t^2 ma rozkład F Snedecora z k1 = 1 i k2 = k stopniami swobody."
    },
    {
        id: 27,
        question: "Histogram daje więcej informacji z próby niż szereg rozdzielczy",
        answer: true,
        explanation: "🟩 Histogram przedstawia rozkład próby w sposób graficzny, co pozwala na lepszą wizualizację danych i identyfikację cech takich jak asymetria czy obecność mod."
    },
    {
        id: 28,
        question: "Przy liczebności z próby n > 30 zawsze można korzystać z granicznego rozkładu statystyki",
        answer: false,
        explanation: "🟥 FAŁSZ: Choć liczebność próby n > 30 często jest uznawana za wystarczającą do stosowania centralnego twierdzenia granicznego i przybliżenia rozkładu normalnego, nie zawsze jest to odpowiednie dla wszystkich statystyk i rozkładów. Czasami wymagane są większe próby lub inne założenia muszą być spełnione, aby graniczny rozkład statystyki był dokładny."
    },
    {
        id: 29,
        question: "Średnia z próby avg X jest estymatorem nieobciążonym odchyleniu standardowego w populacji o rozkładzie Poissona",
        answer: false,
        explanation: "🟥 Średnia z próby jest estymatorem nieobciążonym średniej, a nie odchylenia standardowego."
    },
    {
        id: 30,
        question: "Estymator zgodny zapewnia dla dostatecznie dużej próby małe prawdopodobieństwo dużego błędu szacunku",
        answer: true,
        explanation: "🟩 Estymator zgodny, przy dostatecznie dużej próbie, z dużym prawdopodobieństwem znajduje się blisko rzeczywistej wartości parametru, co oznacza małe prawdopodobieństwo dużego błędu."
    },
    {
        id: 31,
        question: "Przedział ufności dla współczynnika korelacji p w dwuwymiarowej populacji normalnej oparty jest na rozkładzie t Studenta",
        answer: false,
        explanation: "🟥 Przedział ufności dla współczynnika korelacji oparty jest na rozkładzie normalnym N(0,1)"
    },
    {
        id: 32,
        question: "Warunkiem dostatecznym zgodności estymatora jest dla n → ∞ zbieżność do zera jego wariancji",
        answer: false,
        explanation: "🟥 Nie, musi być on też estymatorem nieobciążonym albo obciążonym ale asymptotycznie nieobciążonym."
    },
    {
        id: 33,
        question: "Estymator uzyskany metodą momentów jest zawsze zgodny",
        answer: false,
        explanation: "🟥 Estymator uzyskany metodą momentów nie jest zawsze zgodny; zależy to od właściwości rozkładu i momentów populacji."
    },
    {
        id: 34,
        question: "Do wyznaczenia najwiarygodniejszej oceny parametru populacji konieczna jest znajomość postaci funkcji rozkładu populacji",
        answer: true,
        explanation: "🟩 Metoda największej wiarygodności wymaga znajomości postaci funkcji rozkładu populacji, aby wyznaczyć estymatory parametrów."
    },
    {
        id: 35,
        question: "Metoda najmniejszych kwadratów wymaga znajomości funkcji gęstości prawdopodobieństwa rozkładu populacji",
        answer: false,
        explanation: "🟥 Metoda najmniejszych kwadratów nie wymaga znajomości funkcji gęstości rozkładu populacji, opiera się na minimalizacji sumy kwadratów odchyleń. Wystarczy zbiór danych w postaci par liczb"
    },
    {
        id: 36,
        question: "Im większy współczynnik ufności 1 - alfa przyjmuje się przy budowaniu przedziału ufności, tym mniej precyzyjny jest wynik przedziałowej estymacji przy ustalonej wielkości próby n",
        answer: true,
        explanation: "🟩 Wyższy współczynnik ufności prowadzi do szerszego przedziału ufności, co zmniejsza precyzję estymacji przy danej wielkości próby."
    },
    {
        id: 37,
        question: "Długość przedziału ufności dla wariancji σ^2 w populacji o rozkładzie normalnym ma dla wszystkich prób n-elementowych stałą długość",
        answer: false,
        explanation: "🟥 Długość przedziału ufności dla wariancji zależy od wielkości próby n i zmienia się w zależności od jej wartości."
    },
    {
        id: 38,
        question: "Długość przedziału ufności dla średniej m każdej populacji o rozkładzie normalnym jest wielkością nielosową",
        answer: false,
        explanation: "🟥 Długość przedziału ufności dla średniej zależy od wariancji próby, która jest zmienną losową, a więc sama długość przedziału jest losowa."
    },
    {
        id: 39,
        question: "Wyznaczone z próby wartości końców przedziału ufności dla wariancji σ^2 w populacji o rozkładzie normalnym są położone symetrycznie względem wartości statystyki S.",
        answer: false,
        explanation: "🟥 Przedziały ufności dla wariancji nie są symetryczne względem wartości statystyki, ponieważ rozkład chi-kwadrat nie jest symetryczny."
    },
    {
        id: 40,
        question: "Do estymacji przedziałowej współczynnika regresji B w liniowej regresji wielowymiarowej konieczne jest punktowe oszacowanie całego wektora B=[ B1, B2, … ] parametrów regresji",
        answer: true,
        explanation: "🟩 Estymacja przedziałowa współczynnika regresji wymaga punktowego oszacowania każdego z parametrów wektora B."
    },
    {
        id: 41,
        question: "Za pomocą statystyk pozycyjnych można zbudować przedział ufności dla wartości średniej w populacji ciągłej o symetrycznym rozkładzie.",
        answer: true,
        explanation: "🟩 Statystyki pozycyjne, takie jak mediana i kwartyle, mogą być używane do budowy przedziałów ufności dla średniej w populacji o symetrycznym rozkładzie."
    },
    {
        id: 42,
        question: "Losowanie warstwowe optymalne jest efektywniejsze od losowania proporcjonalnego.",
        answer: true,
        explanation: "🟩 Losowanie warstwowe optymalne jest bardziej efektywne od losowania proporcjonalnego, ponieważ minimalizuje wariancję estymatora."
    },
    {
        id: 43,
        question: "Stwierdzenie, że m1 = m2 gdzie m1 i m2 są średnimi dwóch rozkładów normalnych A i B o identycznych wariancjach jest hipotezą parametryczną prostą.",
        answer: true,
        explanation: "🟩 Stwierdzenie równości średnich dwóch rozkładów normalnych o identycznych wariancjach jest hipotezą parametryczną prostą."
    },
    {
        id: 44,
        question: "Obszar krytyczny ω w teście istotności jest zawsze zbiorem jednowymiarowym.",
        answer: false,
        explanation: "🟥 Obszar krytyczny w teście istotności może być zarówno jednostronny, jak i wielowymiarowy, w zależności od liczby testowanych parametrów."
    },
    {
        id: 45,
        question: "Moc testu to prawdopodobieństwo podjęcia decyzji polegającej na przyjęciu testowanej hipotezy H0, gdy jest ona prawdziwa.",
        answer: false,
        explanation: "🟥 Moc testu to prawdopodobieństwo odrzucenia fałszywej hipotezy H0, a nie przyjęcia jej, gdy jest ona prawdziwa."
    },
    {
        id: 46,
        question: "Test istotności o średnich w dwóch populacjach dla hipotezy H0: m1 = m2 wobec hipotezy alternatywnej H1: m1 > m2 opiera się na lewostronnym obszarze krytycznym.",
        answer: false,
        explanation: "🟥 Dla H1: m1 > m2, obszar krytyczny jest prawostronny, ponieważ badamy, czy średnia m1 jest większa od m2."
    },
    {
        id: 47,
        question: "Test najmocniejszy to test, który minimalizuje błędy I i II rodzaju.",
        answer: false,
        explanation: "🟥 Test najmocniejszy maksymalizuje moc testu (minimalizuje błąd II rodzaju) przy zadanym poziomie istotności (stały błąd I rodzaju)."
    },
    {
        id: 48,
        question: "W teście zgodności chi2 stosowanym dla n-elementowej próby z której nie szacowano żadnego parametru hipotetycznego rozkładu odpowiada statystyka ma n-1 stopni swobody.",
        answer: false,
        explanation: "🟥 Dla testu chi2 zgodności z n-elementową próbą, statystyka ma k-1 stopni swobody,gdzie k to liczba przedziałów klasowych, ponieważ nie szacujemy żadnych parametrów rozkładu."
    },
    {
        id: 49,
        question: "Test Bartletta nie wymaga losowania prób o jednakowej liczebności z analizowanej populacji.",
        answer: true,
        explanation: "🟩 Test Bartletta nie wymaga równej liczebności prób, ale zakłada, że każda próbka pochodzi z populacji o normalnym rozkładzie."
    },
    {
        id: 50,
        question: "Podstawą klasyfikacji pojedynczej w testach ANOVA są poszczególne, ustalone z góry, poziomy jednego kontrolowanego w danym doświadczeniu czynnika.",
        answer: true,
        explanation: "🟩 W analizie wariancji (ANOVA) klasyfikujemy dane na podstawie poziomów jednego czynnika, który jest kontrolowany w eksperymencie."
    },
    {
        id: 51,
        question: "Hipotezę o zgodności rozkładu empirycznego z rozkładem dwumianowym można sprawdzić między innymi testem zgodności λ Kołmogorowa.",
        answer: true,
        explanation: "🟩 Test zgodności Kolmogorowa-Smirnowa (test K-S) służy do porównania rozkładu empirycznego z określonym rozkładem teoretycznym."
    },
    {
        id: 52,
        question: "W teście niezależności chi2 stosowanym dla tablicy kontyngencji o wymiarach 3x5 statystyka chi2 ma 8 stopni swobody.",
        answer: true,
        explanation: "🟩 Dla tablicy kontyngencji 3x5, statystyka chi2 ma (3-1)*(5-1) = 8 stopni swobody."
    },
    {
        id: 53,
        question: "Dokładny rozkład statystyki nie zależy od parametrów rozkładów populacji.",
        answer: false,
        explanation: "🟥 Dokładny rozkład statystyki często zależy od parametrów rozkładów populacji, zwłaszcza w przypadku małych prób."
    },
    {
        id: 54,
        question: "Nierówność Rao-Cramera określa kres górny wariancji estymatora nieobciążonego.",
        answer: false,
        explanation: "🟥 Nierówność Rao-Cramera określa dolny kres wariancji estymatora nieobciążonego, wskazując najmniejszą możliwą wariancję, jaką może mieć taki estymator."
    },
    {
        id: 55,
        question: "W teście istotności Fishera nie ma decyzji o przyjęciu sprawdzanej hipotezy H0.",
        answer: true,
        explanation: "🟩 W teście istotności Fishera albo odrzucamy hipotezę H0, albo nie mamy wystarczających dowodów, aby ją odrzucić; nigdy jej formalnie nie przyjmujemy."
    },
    {
        id: 56,
        question: "Obszar krytyczny ω w teście istotności może być jednostronny lub dwustronny.",
        answer: true,
        explanation: "🟩 Obszar krytyczny w teście istotności może być zarówno jednostronny, jak i dwustronny, w zależności od formułowanej hipotezy alternatywnej."
    },
    {
        id: 57,
        question: "W teście istotności dla hipotezy H0: m1 = m2 o średnich w dwóch populacjach o rozkładzie normalnym można nic nie zakładać o ich wariancjach.",
        answer: false,
        explanation: "🟥 Przy teście dla H0: m1 = m2 w dwóch populacjach normalnych, zakłada się, że wariancje mogą być równe lub różne, co wpływa na wybór odpowiedniego testu (np. test t-Studenta lub Welch'a)."
    },
    {
        id: 58,
        question: "Test Bartletta jest często wstępnym etapem pracy analizie wariacji (ANOVA).",
        answer: true,
        explanation: "🟩 Test Bartletta jest używany do sprawdzenia homogeniczności wariancji przed przeprowadzeniem analizy wariancji (ANOVA)."
    },
    {
        id: 60,
        question: "Próba nielosowa może być próbą reprezentatywną.",
        answer: true,
        explanation: "🟩 Próba nielosowa może być reprezentatywna, jeśli jest starannie dobrana, aby odzwierciedlała strukturę populacji."
    },
    {
        id: 61,
        question: "Rozkład t-Studenta jest związany z rozkładem normalnym wyłącznie zależnością graniczną (dla b. dużych prób).",
        answer: false,
        explanation: "🟥 FAŁSZ: Rozkład t-Studenta jest związany z rozkładem normalnym nie tylko granicznie. Dla mniejszych prób uwzględnia dodatkową zmienność wynikającą z szacowania odchylenia standardowego z próby. Granicznie, przy dużych próbach, rozkład t-Studenta rzeczywiście zbliża się do rozkładu normalnego, ale powiązanie jest bardziej fundamentalne."
    },
    {
        id: 62,
        question: "Przedziały klasowe szeregu rozdzielczego cechy ciągłej są zbiorami rozłącznymi.",
        answer: true,
        explanation: "🟩 Przedziały klasowe są zawsze rozłączne, aby każda wartość zmiennej losowej należała tylko do jednego przedziału."
    },
    {
        id: 63,
        question: "Estymator najefektywniejszy jest również estymatorem asymptotycznie najefektywniejszym.",
        answer: false,
        explanation: "🟥 Estymator najefektywniejszy w małych próbach nie musi być asymptotycznie najefektywniejszy; te właściwości mogą się różnić."
    },
    {
        id: 64,
        question: "Średnia z próby avg X jest estymatorem dostatecznym wartości oczekiwanej w populacji o rozkładzie Poissona.",
        answer: true,
        explanation: "🟩 W populacji o rozkładzie Poissona średnia z próby jest estymatorem dostatecznym dla wartości oczekiwanej."
    },
    {
        id: 65,
        question: "Estymatory uzyskane metodą momentów są zawsze obciążone.",
        answer: false,
        explanation: "🟥 Fałsz, Średnia z próby, uzyskana metodą momentów, jest nieobciążonym estymatorem wartości oczekiwanej μ w populacji o rozkładzie normalnym. Jest to przykład estymatora uzyskanego metodą momentów, który jest nieobciążony."
    },
    {
        id: 66,
        question: "W metodzie największej wiarygodności posługujemy się logarytmem funkcji wiarygodności, gdyż zachodzi max L = max ln L.",
        answer: true,
        explanation: "🟩 Posługiwanie się logarytmem funkcji wiarygodności jest wygodne matematycznie i nie zmienia miejsca maksimum, ponieważ logarytm jest funkcją monotoniczną."
    },
    {
        id: 67,
        question: "Dla próby o liczebności n układ równań normalnych w metodzie najmniejszych kwadratów składa się z n równań.",
        answer: false,
        explanation: "🟥 W metodzie najmniejszych kwadratów liczba równań normalnych wynosi tyle, ile jest parametrów do oszacowania, a nie liczba obserwacji n."
    },
    {
        id: 68,
        question: "Do wyznaczenia przedziału ufności dla parametru θ z małej próby konieczna jest znajomość dokładnego rozkładu dowolnego estymatora tego parametru.",
        answer: true,
        explanation: "🟩 W przypadku małych prób znajomość dokładnego rozkładu estymatora jest konieczna do dokładnej konstrukcji przedziału ufności."
    },
    {
        id: 69,
        question: "Długość przedziału ufności dla średniej m populacji o rozkładzie N(m,5) jest wielkością nielosową.",
        answer: true,
        explanation: "🟩 Długość przedziału ufności zależy od  odchylenia standardowego, ktore jest znane, wiec jest wielkoscia nielosowa bo dla tej samej liczebnosci proby zawsze bedzie mial ta sama dlugosc"
    },
    {
        id: 70,
        question: "Wartości współczynnika korelacji r oraz jej liczebność n oraz nα dla dużej próby jest wystarczającą informacją do wyznaczenia oceny przedziałowej współczynnika korelacji ρ w populacji o rozkładzie normalnym.",
        answer: true,
        explanation: "🟩 Dla dużych prób wartości współczynnika korelacji r, liczebności próby n i poziomu istotności α są wystarczające do konstrukcji przedziału ufności dla ρ."
    },
    {
        id: 71,
        question: "Jeśli dla dwóch testów zachodzi nierówność α1 < α2 to test drugi jest testem o większej mocy niż test pierwszy.",
        answer: false,
        explanation: "🟥 Mniejsza wartość α (poziom istotności) nie oznacza automatycznie większej mocy testu; moc zależy również od innych czynników, takich jak rozkład statystyki testowej i próba."
    },
    {
        id: 72,
        question: "Hipotezę, że w populacji o normalnym rozkładzie wariancja jest równa pewnej określonej liczbie sprawdzić możemy między innymi testem Bartletta.",
        answer: false,
        explanation: "🟥 Test Bartletta służy do sprawdzania jednorodności wariancji między kilkoma grupami, a nie porównania wariancji z określoną wartością."
    },
    {
        id: 73,
        question: "Hipotezę o równości wariancji w dwóch populacjach normalnych można zweryfikować zarówno testem Bartletta, jak i testem opartym na statystyce Snedecora.",
        answer: false,
        explanation: "🟥Hipotezę o równości wariancji w dwóch populacjach weryfikuje się najczęściej testem F (Snedecora), natomiast test Bartletta używany jest dla więcej niż dwóch grup."
    },
    {
        id: 74,
        question: "Tablice kontyngencji tworzone do testów niezależności nie mogą zawierać komórek o zerowych liczebnościach (tzw. „dziur”).",
        answer: true,
        explanation: "🟩 Komórki o zerowych liczebnościach mogą znacząco wpłynąć na wyniki testu chi-kwadrat, dlatego zwykle unika się takich sytuacji."
    },
    {
        id: 75,
        question: "Statystyka Dn1n2 Smirnowa w teście zgodności ma rozkład identyczny jak statystyka Dn Kołmogorowa.",
        answer: false,
        explanation: "🟥 Test jednopróbkowy Kolmogorova sprawdza zgodność rozkładu empirycznego z określonym rozkładem teoretycznym, Test dwupróbkowy Smirnova porównuje dwie empiryczne dystrybuanty z dwóch niezależnych prób. Maja one podobne rozkłady, ale nie identyczne"
    },
]
