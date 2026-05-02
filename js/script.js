console.log('Տրված է իրական թվերի հաջորդականություն (Մասիվ): Արտածել այդ հաջորդականության')

console.log('ա) տարրերի քանակը, որոնք փոքր են իրենց կարգահամարի քառակուսուց,')

let arrSquareCheck = [14, 24, 98, 5, 66, 100, 5, 84, 2];
let countSquareCondition = 0;

for(let i = 0; i < arrSquareCheck.length; i++) {
    if(i * i > arrSquareCheck[i]) {
        countSquareCondition++;
    }
}

console.log(countSquareCondition);

console.log('--------------------------------------------------');

console.log('բ) այն տարրերի քանակը, որոնք փոքր են իրենց ձախ և աջ հարևանների կիսագումարից,')

let arrNeighbors = [10, 20, 6, 89, 72, 56, 24, 77];
let countNeighborsCondition = 0;

for(let i = 1; i < arrNeighbors.length - 1; i++) {
    if((arrNeighbors[i - 1] + arrNeighbors[i + 1]) / 2 > arrNeighbors[i]) {
        countNeighborsCondition++;
    }
}

console.log(countNeighborsCondition);

console.log('--------------------------------------------------');

console.log('գ) մեծագույն տարրը և նրա կարգահամարը,')

let arrMaxSearch = [44, 89, 63, 87, 10, 23, 91, 89];
let maxValue = arrMaxSearch[0];
let maxIndex = 0;

for(let i = 1; i < arrMaxSearch.length; i++) {
    if(arrMaxSearch[i] > maxValue) {
        maxValue = arrMaxSearch[i];
        maxIndex = i;
    }
}

console.log(maxValue, maxIndex);

console.log('--------------------------------------------------');

console.log('դ) մեծագույն և փոքրագույն տարրերի տարբերությունը,')

let arrDiff = [45, 89, 636, 782, 87, 290, 22, 450, 453];

let maxDiff = arrDiff[0];
let minDiff = arrDiff[0];

for(let i = 1; i < arrDiff.length; i++) {
    if(arrDiff[i] > maxDiff) maxDiff = arrDiff[i];
    if(arrDiff[i] < minDiff) minDiff = arrDiff[i];
}

console.log(maxDiff - minDiff);

console.log('--------------------------------------------------');

console.log('ե) մեծագույն և մեծությամբ երկրորդ տարրերը,')

let arrTwoMax = [20, 30, 100, 40, 50, 60, 70, 10, 80, 90];

let firstMax = -Infinity;
let secondMax = -Infinity;

for(let i = 0; i < arrTwoMax.length; i++) {
    if(arrTwoMax[i] > firstMax) {
        secondMax = firstMax;
        firstMax = arrTwoMax[i];
    }else if(arrTwoMax[i] > secondMax) {
        secondMax = arrTwoMax[i];
    }
}

console.log(firstMax, secondMax);

console.log('--------------------------------------------------');

console.log('զ) դրական տարրերից փոքրագույնի արժեքը (եթե դրական տարր չկա, արտածել համապատասխան հաղորդագրություն):')

let arrPositive = [33, 29, -77, 89, 896, 41, -90];

let minPositive = Infinity;
let hasPositive = false;

for(let i = 0; i < arrPositive.length; i++) {
    if(arrPositive[i] > 0) {
        hasPositive = true;
        if(arrPositive[i] < minPositive) {
            minPositive = arrPositive[i];
        }
    }
}

if(hasPositive) {
    console.log(minPositive);
}else {
    console.log('Չկան դրական տարրեր');
}

console.log('--------------------------------------------------');

console.log('1-1000 թվերի շարքում հաշվել բոլոր այն թվերի քանակը, որոնք պարունակում են 3 թվանշանը:')

let countWithDigit3 = 0;

for(let i = 1; i <= 1000; i++) {
    if(i.toString().includes('3')) {
        countWithDigit3++;
    }
}

console.log(countWithDigit3);

console.log('--------------------------------------------------');

console.log('Найти самое длинное слово в строке')
console.log('Напишите функцию find_longest_word(str), которая принимает строку')
console.log('в качестве параметра и находит самое длинное слово в строке.')

function extractLongestToken(textInput){
    let wordsList = textInput.split(' ');
    let maxLenValue = wordsList[0].length;
    let longestToken = wordsList[0];

    for(let i = 1; i < wordsList.length; i++) {
        if(wordsList[i].length > maxLenValue) {
            maxLenValue = wordsList[i].length;
            longestToken = wordsList[i];
        }
    }

    return longestToken;
}

console.log(extractLongestToken('Lorem ipsum dolor assumenda amet'));

console.log('--------------------------------------------------');

console.log('գրել ֆունկցիա, որը որպես արգումենտ ընդունում է ստրինգ, և')
console.log('վերադարձնում է, առաջին չկրկնվող սինվոլը։')

function detectFirstUniqueChar(textValue){
    if(typeof textValue !== 'string') {
        return 'invalid argument';
    }

    let compactString = textValue.split(' ').join('');
    let resultChar = 'no unique character';

    for(let i = 0; i < compactString.length; i++) {
        if(compactString.indexOf(compactString[i]) === compactString.lastIndexOf(compactString[i])) {
            resultChar = compactString[i];
            break;
        }
    }

    return resultChar;
}

console.log(detectFirstUniqueChar('Lorem ipsum dolor'));
console.log(detectFirstUniqueChar('Lorem ipsum Lorem ipsum'));
console.log(detectFirstUniqueChar([1,'a',2,'b']));

console.log('--------------------------------------------------');

console.log('Տրված է բնական թվերի հաջորդականություն: Արտածել այդ հաջորդականության')

console.log('ա) այն տարրերի քանակը, որոնց թվանշանների գումարը հավասար է տրված c թվին,')

let numericSeries = [123, 456, 789, 321, 654, 987, 111, 222];

function countMatchingDigitSum(dataArray, targetSum){
    let matchedCount = 0;

    for(let i = 0; i < dataArray.length; i++) {
        let tempValue = dataArray[i];
        let digitAccumulator = 0;

        while(tempValue > 0) {
            let lastDigit = tempValue % 10;
            digitAccumulator += lastDigit;
            tempValue = (tempValue - lastDigit) / 10;
        }

        if(digitAccumulator === targetSum) {
            matchedCount++;
        }
    }

    return matchedCount;
}

console.log(countMatchingDigitSum(numericSeries, 6));

console.log('--------------------------------------------------');

console.log('բ) Ֆիբոնաչիի թվերի քանակը,')

let mixedNumbers = [1, 200, 5, 8, 144, 66, 233, 88, 610];

function isFiboValue(checkNumber){
    let firstVal = 1;
    let secondVal = 1;

    while(firstVal <= checkNumber) {
        if(firstVal === checkNumber) {
            return true;
        }
        let nextVal = firstVal + secondVal;
        firstVal = secondVal;
        secondVal = nextVal;
    }

    return false;
}

function collectFiboMatches(inputList){
    let fiboMatches = [];

    for(let i = 0; i < inputList.length; i++) {
        if(isFiboValue(inputList[i])) {
            fiboMatches.push(inputList[i]);
        }
    }

    return fiboMatches.length > 0 ? fiboMatches : 0;
}

console.log(collectFiboMatches(mixedNumbers));

console.log('--------------------------------------------------');

console.log('Նկարագրել ֆունկցիա, որն արգումենտում ստանում է իրական թվերի զանգված և վերադարձնում է՝')

console.log('ա) true, եթե զանգվածը պարունակում է կրկնվող տարրեր, և վերադարձնում է false՝ հակառակ դեպքում,')

function hasDuplicateEntries(sequenceInput){
    let uniqueStorage = [];

    sequenceInput.forEach((itemVal)=>{
        if(!uniqueStorage.includes(itemVal)) {
            uniqueStorage.push(itemVal);
        }
    });

    return sequenceInput.length !== uniqueStorage.length;
}

console.log(hasDuplicateEntries([1,2,3]));
console.log(hasDuplicateEntries([1,2,1]));

console.log('--------------------------------------------------');

console.log('բ) այն տարրերի քանակը, որոնք զանգվածում հանդիպում են ճիշտ 1 անգամ:')

function countSingleOccurrences(seriesInput){
    let uniqueCounter = 0;

    seriesInput.forEach((elem)=>{
        if(seriesInput.indexOf(elem) === seriesInput.lastIndexOf(elem)) {
            uniqueCounter++;
        }
    });

    return uniqueCounter;
}

console.log(countSingleOccurrences([1,2,3,1,5]));
console.log(countSingleOccurrences([10,20,30]));

console.log('--------------------------------------------------');

console.log('Гипотеза Коллатца 3n+1 проблема')
console.log('Берём любое натуральное число n. Если оно чётное, то делим его на 2,')
console.log('а если нечётное, то умножаем на 3 и прибавляем 1 (получаем 3n + 1).')
console.log('Над полученным числом выполняем те же самые действия, и так далее.')
console.log('Гипотеза Коллатца заключается в том, что какое бы начальное число n мы ни взяли,')
console.log('рано или поздно мы получим единицу:')

function runCollatzProcess(startNumber){
    let currentVal = startNumber;

    while(currentVal > 1) {
        if(currentVal % 2 === 0) {
            currentVal = currentVal / 2;
        }else {
            currentVal = currentVal * 3 + 1;
        }

        console.log(currentVal);
    }
}

runCollatzProcess(10);

console.log('--------------------------------------------------');

console.log('Պատահական տարր զանգվածից')
console.log('Գեներացնել պատահական տարր տվյալ զանգվածից:')

let randomSourcePool = [12, 24, true, 'boo', 56, 'foo', false, 99];

function pickRandomItem(poolData){
    let randomIndexValue = Math.floor(Math.random() * poolData.length);
    return poolData[randomIndexValue];
}

console.log(pickRandomItem(randomSourcePool));

console.log('--------------------------------------------------');

console.log('Պատահական տառ')
console.log('Գեներացնել պատահական տառ (A-Z):')

function generateRandomAlphabetChar(){
    let upperStart = 65;
    let lowerStart = 97;

    if(Math.random() < 0.5) {
        return String.fromCharCode(Math.floor(Math.random()*26 + upperStart));
    }else {
        return String.fromCharCode(Math.floor(Math.random()*26 + lowerStart));
    }
}

console.log(generateRandomAlphabetChar());

console.log('--------------------------------------------------');

console.log('Պատահական  գույն (RGB)')
console.log('Գեներացնել պատահական RGB գույնի արժեք:')

function buildRandomRgbColor(){
    let redChannel = Math.floor(Math.random()*256);
    let greenChannel = Math.floor(Math.random()*256);
    let blueChannel = Math.floor(Math.random()*256);

    return `rgb(${redChannel}, ${greenChannel}, ${blueChannel})`;
}

console.log(buildRandomRgbColor());

console.log('--------------------------------------------------');

console.log('Պատահական գաղտնաբառ')
console.log('Գեներացնել պատահական գաղտնաբառ նշված երկարությամբ:')

function createRandomPassword(passLength){
    let passwordChars = [];

    for(let i = 0; i < passLength; i++) {
        let codeVal = Math.floor(Math.random() * 122);

        if(codeVal >= 65 && codeVal <= 90) {
            passwordChars.push(generateRandomAlphabetChar());
        }else if(codeVal >= 97 && codeVal <= 122) {
            passwordChars.push(generateRandomAlphabetChar());
        }else {
            passwordChars.push(codeVal);
        }
    }

    return passwordChars.join('');
}

console.log(createRandomPassword(6));

console.log('--------------------------------------------------');

console.log('փոխել զանգվածի սկզբնական և վերջավոր թվերի դիրքերը')

let swapDatasetAlpha = [1, 2, 3, 4, 5, 6];

let bufferEdgeValue = swapDatasetAlpha[0];
swapDatasetAlpha[0] = swapDatasetAlpha[swapDatasetAlpha.length - 1];
swapDatasetAlpha[swapDatasetAlpha.length - 1] = bufferEdgeValue;

console.log(swapDatasetAlpha);

console.log('--------------------------------------------------');

console.log('զանգվածում թողնել միայն պարզ թվեր')

let primeFilterSourceBeta = [100, 212, 332, 449, 587, 684, 757, 860, 929];
let primeWriteCursorBeta = 0;

outerPrimeLoop:
for(let i = 0; i < primeFilterSourceBeta.length; i++) {
    for(let j = 2; j <= Math.sqrt(primeFilterSourceBeta[i]); j++){
        if(primeFilterSourceBeta[i] % j === 0) {
            continue outerPrimeLoop;
        }
    }

    primeFilterSourceBeta[primeWriteCursorBeta++] = primeFilterSourceBeta[i];
}

primeFilterSourceBeta.length = primeWriteCursorBeta;

console.log(primeFilterSourceBeta);

console.log('--------------------------------------------------');

console.log('Ստացեք զանգվածի առաջին և երկրորդ կեսերի պարզ թվերը և ստուգեք, թե որ մասում է ամենաշատ պարզ թվերը')

let dualSegmentGamma = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let firstHalfPrimesGamma = [];
let secondHalfPrimesGamma = [];

for(let i = 0; i < dualSegmentGamma.length; i++) {

    let candidateGamma = dualSegmentGamma[i];
    let isPrimeGamma = true;

    if(candidateGamma < 2) isPrimeGamma = false;

    for(let j = 2; j <= Math.sqrt(candidateGamma); j++) {
        if(candidateGamma % j === 0) {
            isPrimeGamma = false;
            break;
        }
    }

    if(isPrimeGamma) {
        if(i < dualSegmentGamma.length / 2) {
            firstHalfPrimesGamma.push(candidateGamma);
        }else {
            secondHalfPrimesGamma.push(candidateGamma);
        }
    }
}

if(firstHalfPrimesGamma.length > secondHalfPrimesGamma.length) {
    console.log('FIRST HALF DOMINATES');
}else if(firstHalfPrimesGamma.length < secondHalfPrimesGamma.length) {
    console.log('SECOND HALF DOMINATES');
}else {
    console.log('EQUAL DISTRIBUTION');
}

console.log('--------------------------------------------------');

console.log('գումարել իրար զանգվածի զույք և կենտ թվերը հասկանալ որն է մեծ')

let parityArrayDelta = [1, 2, 3, 4, 5, 6, 7];

let evenAccumulatorDelta = 0;
let oddAccumulatorDelta = 0;

for(let i = 0; i < parityArrayDelta.length; i++) {
    if(parityArrayDelta[i] % 2 === 0) {
        evenAccumulatorDelta += parityArrayDelta[i];
    }else {
        oddAccumulatorDelta += parityArrayDelta[i];
    }
}

console.log(
    evenAccumulatorDelta > oddAccumulatorDelta 
    ? `even wins ${evenAccumulatorDelta}` 
    : `odd wins ${oddAccumulatorDelta}`
);

console.log('--------------------------------------------------');

console.log('զանգվածները վերադասավորել նվազման և աճման կարգով')

let bubbleAscEpsilon = [10,22,3,48,5,66];
let bubbleDescEpsilon = [...bubbleAscEpsilon];

for(let i = 0; i < bubbleAscEpsilon.length; i++) {
    for(let j = 0; j < bubbleAscEpsilon.length - 1; j++) {
        if(bubbleAscEpsilon[j] > bubbleAscEpsilon[j + 1]) {
            let tempSwapEpsilon = bubbleAscEpsilon[j];
            bubbleAscEpsilon[j] = bubbleAscEpsilon[j + 1];
            bubbleAscEpsilon[j + 1] = tempSwapEpsilon;
        }
    }
}

for(let i = 0; i < bubbleDescEpsilon.length; i++) {
    for(let j = 0; j < bubbleDescEpsilon.length - 1; j++) {
        if(bubbleDescEpsilon[j] < bubbleDescEpsilon[j + 1]) {
            let tempSwapDesc = bubbleDescEpsilon[j];
            bubbleDescEpsilon[j] = bubbleDescEpsilon[j + 1];
            bubbleDescEpsilon[j + 1] = tempSwapDesc;
        }
    }
}

console.log(bubbleAscEpsilon);
console.log(bubbleDescEpsilon);

console.log('--------------------------------------------------');

console.log('գրել ֆուկցիա, որը պարզում է')
console.log('տրված բնական թվի թվանշանների գումարը զույգ է թե կենտ։')

function evaluateDigitParityZeta(inputNumberZeta){
    let sumZeta = 0;

    while(inputNumberZeta > 0) {
        let digitZeta = inputNumberZeta % 10;
        sumZeta += digitZeta;
        inputNumberZeta = Math.floor(inputNumberZeta / 10);
    }

    return sumZeta % 2 === 0 ? 'EVEN_SUM' : 'ODD_SUM';
}

console.log(evaluateDigitParityZeta(202));
console.log(evaluateDigitParityZeta(203));

console.log('--------------------------------------------------');

console.log('Գտնել ֆունկցիա որը ստանում է, որպես պարամետր իրարից պրաբելով առանձնացված ստրինգ')
console.log('և մասիվ, որի էլէմենտները ստրինգներ են: Գտնել մասիվում առկա բառերը ստրնգում')
console.log('և փոխարինել այդ բառիը սինվոլների քանակի ասղանիշներով։')

function starBuilderEta(lengthEta){
    return '*'.repeat(lengthEta);
}

function maskWordsTheta(sourceSentenceTheta, dictionaryTheta){
    let tokenListTheta = sourceSentenceTheta.split(' ');
    let resultTheta = [];

    for(let i = 0; i < dictionaryTheta.length; i++) {
        if(tokenListTheta.includes(dictionaryTheta[i])) {
            resultTheta.push(starBuilderEta(dictionaryTheta[i].length));
        }else {
            resultTheta.push(dictionaryTheta[i]);
        }
    }

    return resultTheta.join(' ');
}

console.log(maskWordsTheta(
    'Lorem ipsum dolor sit amet quod officiis quam maxime fuga',
    ['sint', 'ipsum', 'elit', 'incidunt', 'quisquam', 'sit', 'delectus']
));

console.log('--------------------------------------------------');

console.log('Պատահական Hexadecimal Գույնի Գեներացիա')
console.log('Գեներացնել պատահական հեքսադեցիմալ գույնի արժեք:')

function hexSegmentIota(){
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
}

function composeHexColorIota(){
    return `#${hexSegmentIota()}${hexSegmentIota()}${hexSegmentIota()}`;
}

console.log(composeHexColorIota());

console.log('--------------------------------------------------');

console.log('Պատահական ժամանակ գեներացիա (HH:MM)')
console.log('Գեներացնել պատահական ժամանակ ձևաչափով HH:MM:')

function buildClockValueKappa(){
    let hoursKappa = Math.floor(Math.random() * 24).toString().padStart(2,'0');
    let minutesKappa = Math.floor(Math.random() * 60).toString().padStart(2,'0');

    return `${hoursKappa}:${minutesKappa}`;
}

console.log(buildClockValueKappa());

console.log('--------------------------------------------------');

console.log('Форматировать строку даты: Используйте методы, такие как getFullYear(), getMonth() и getDate(), для создания отформатированной строки даты.')

let todayLambda = new Date();

console.log(
    todayLambda.getDate().toString().padStart(2, '0'),
    (todayLambda.getMonth() + 1).toString().padStart(2, '0'),
    todayLambda.getFullYear()
);

console.log('--------------------------------------------------');

console.log('Вычислить разницу между двумя датами: Создайте два объекта Date и вычтите один из другого, чтобы получить разницу в миллисекундах. Переведите ее в другие единицы при необходимости.')

let startEpochMu = new Date(1997, 1, 4).getTime();
let endEpochMu = Date.now();

let totalDaysMu = Math.floor((endEpochMu - startEpochMu) / (1000*60*60*24));

console.log(totalDaysMu);

console.log('--------------------------------------------------');

console.log('Получить текущее время: Используйте методы, такие как getHours(), getMinutes() и getSeconds(), чтобы получить текущее время.')

let realtimeNu = new Date();

console.log(
    realtimeNu.getHours().toString().padStart(2, '0') + ':' +
    realtimeNu.getMinutes().toString().padStart(2, '0') + ':' +
    realtimeNu.getSeconds().toString().padStart(2, '0')
);

console.log('--------------------------------------------------');

console.log('Получить день в году: Используйте методы getMonth() и getDate() для получения номера дня в году.')

function computeOrdinalDayXi(dateXi){
    let startXi = new Date(dateXi.getFullYear(), 0, 0).getTime();
    let nowXi = dateXi.getTime();

    return Math.floor((nowXi - startXi) / (1000*60*60*24));
}

console.log(computeOrdinalDayXi(new Date()));

console.log('--------------------------------------------------');

console.log('Получить день недели для определенной даты: Используйте метод getDay() для получения дня недели для определенной даты.')

let weekdayNamesOmicron = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

console.log(weekdayNamesOmicron[new Date().getDay()]);

console.log('--------------------------------------------------');

console.log('Получить первый день текущего месяца: Создайте новый объект Date и установите день месяца в 1.')

let firstOfMonthPi = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
console.log(firstOfMonthPi);

console.log('--------------------------------------------------');

console.log('Получить последний день текущего месяца: Создайте новый объект Date, установите месяц на следующий, а день месяца на 0.')

let lastOfMonthRho = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
console.log(lastOfMonthRho);

console.log('--------------------------------------------------');
////////////////////////////////////////////////////////////

console.log('գրել ֆունկցիա, որը վերցնում է միայն զանգվածը և վերադարձնում է զանգվածի')
console.log('ամենամեծ և ամենափոքր թվերը, ինչպես նաև ամենամեծ թվի ամենափոքր թվով աստիճանը')

function elevateExtremesOmega(inputCollectionOmega){
    if(!Array.isArray(inputCollectionOmega)) {
        return 'invalid argument';
    }

    let highestOmega = Math.max(...inputCollectionOmega);
    let lowestOmega = Math.min(...inputCollectionOmega);

    return Math.pow(highestOmega, lowestOmega);
}

let datasetOmega = [3, 44, 5, 66, 17, 8, 99, 10];

console.log(elevateExtremesOmega(datasetOmega));

console.log('--------------------------------------------------');

console.log('գրել ֆունկցիա, որը վերցնում է միայն զանգվածը և թիվը, վերադարձնում է նոր զանգված')
console.log('որի մեջ միայն զանգվածի այն թվերնեն որոնք առանց մնացորդ բաժանվում են այն թվին որը')
console.log('տվել ենք ֆունկցային')

function extractDivisibleSigma(seriesSigma, divisorSigma){
    if(!Array.isArray(seriesSigma) || typeof divisorSigma !== 'number') {
        return 'invalid argument';
    }

    let filteredSigma = [];

    for(let i = 0; i < seriesSigma.length; i++) {
        if(seriesSigma[i] % divisorSigma === 0) {
            filteredSigma.push(seriesSigma[i]);
        }
    }

    return filteredSigma;
}

console.log(extractDivisibleSigma([5, 15, 20, 30, 40, 35], 2));

console.log('--------------------------------------------------');

console.log('գրել ռեկուրսիվ ֆունկցիա, որը կգումարի զանգվածի բոլոր թվերը և կվերադարձնի');

function recursiveAggregatorTau(sequenceTau, pointerTau = 0){
    if(pointerTau === sequenceTau.length) {
        return 0;
    }

    return sequenceTau[pointerTau] + recursiveAggregatorTau(sequenceTau, pointerTau + 1);
}

let recursionInputTau = [10, 10, 10, 10, 10, 10];

console.log(recursiveAggregatorTau(recursionInputTau));

console.log('--------------------------------------------------');

console.log('Գրել ֆունկցիա որը կստուգի որ արգումենտը պարտադիր')
console.log('թիվ լինի հակառակ դեպքում կվերադարձնի "invalid argument"')
console.log('արտահայտությունը, եթե ամեն բան ճիշտ է ապա թող') 
console.log('վերադարձնի տրված թվի ֆակտորիալը։')

function computeFactorialUpsilon(valueUpsilon){
    if(typeof valueUpsilon !== 'number' || valueUpsilon < 0) {
        return 'invalid argument';
    }

    let resultUpsilon = 1;

    for(let i = 1; i <= valueUpsilon; i++) {
        resultUpsilon *= i;
    }

    return resultUpsilon;
}

console.log(computeFactorialUpsilon(5));

console.log('--------------------------------------------------');

console.log('Напишите код, чтобы вы могли')
console.log('вызвать метод array.last() для любого массива,')
console.log('и он вернет последний элемент.')
console.log('Если в массиве нет элементов, он должен вернуть -1')

Array.prototype.peekLastLambda = function(){
    return this.length === 0 ? -1 : this[this.length - 1];
}

let probeLambdaA = [1, 2, 3];
let probeLambdaB = [];

console.log(probeLambdaA.peekLastLambda());
console.log(probeLambdaB.peekLastLambda());

console.log('--------------------------------------------------');

console.log('Перевернуть строку Написать функцию, которая принимает строку и возвращает ее в обратном порядке.')
console.log('Например, если входная строка "hello", то функция должна вернуть "olleh".')

function invertStringPhi(textPhi){
    return textPhi.split('').reverse().join('');
}

console.log(invertStringPhi('hello'));

console.log('--------------------------------------------------');

console.log('Реализовать функцию поиска дубликатов в массиве Написать функцию, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из входного массива.')
console.log('Например, если входной массив [1, 2, 2, 3, 4, 4, 5], то функция должна вернуть [1, 2, 3, 4, 5].')

function buildUniqueSetChi(inputChi){
    let storageChi = [];

    for(let i = 0; i < inputChi.length; i++){
        if(!storageChi.includes(inputChi[i])){
            storageChi.push(inputChi[i]);
        }
    }

    return storageChi;
}

console.log(buildUniqueSetChi([1, 2, 2, 3, 4, 4, 5]));

console.log('--------------------------------------------------');

console.log('Найти первое неповторяющееся число в массиве Написать функцию, которая принимает массив чисел и возвращает первое число в массиве, которое не повторяется.')
console.log('Например, если входной массив [1, 2, 3, 2, 4, 1], то функция должна вернуть 3.')

function locateSingleOccurrencePsi(poolPsi){
    for(let i = 0; i < poolPsi.length; i++){
        if(poolPsi.indexOf(poolPsi[i]) === poolPsi.lastIndexOf(poolPsi[i])){
            return poolPsi[i];
        }
    }
}

console.log(locateSingleOccurrencePsi([1, 2, 3, 2, 4, 1]));

console.log('--------------------------------------------------');

console.log('Реализовать функцию, которая проверяет,')
console.log('является ли заданное число совершенным Написать функцию,')
console.log('которая принимает число и проверяет, является ли оно совершенным')
console.log('(сумма всех делителей числа, кроме самого числа, равна этому числу).')
console.log('Например, если входное число 6, то функция должна вернуть true.')

function verifyPerfectOmegaX(candidateOmegaX){
    if(typeof candidateOmegaX !== 'number') {
        return 'invalid argument';
    }

    let divisorSumOmegaX = 0;

    for(let i = 1; i < candidateOmegaX; i++) {
        if(candidateOmegaX % i === 0) {
            divisorSumOmegaX += i;
        }
    }

    return divisorSumOmegaX === candidateOmegaX;
}

console.log(verifyPerfectOmegaX(6));
console.log(verifyPerfectOmegaX(7));
console.log(verifyPerfectOmegaX('10'));

console.log('--------------------------------------------------');

console.log('Напишите функцию, которая находит пропущенное число в массиве,')
console.log('содержащем числа от 1 до n')

function detectMissingRangeZetaX(collectionZetaX){
    if(!Array.isArray(collectionZetaX)){
        return 'invalid argument';
    }

    let missingBucketZetaX = [];
    let maxValueZetaX = Math.max(...collectionZetaX);

    for(let i = 1; i <= maxValueZetaX; i++) {
        if(!collectionZetaX.includes(i)) {
            missingBucketZetaX.push(i);
        }
    }

    return missingBucketZetaX;
}

console.log(detectMissingRangeZetaX([1, 2, 8, 3, 5, 10, 7, 6]));

console.log('--------------------------------------------------');

console.log('Учитывая массив строк-слов, верните первую палиндромную строку в массиве.')
console.log('Если такой строки нет, верните пустую строку «».')
console.log('Строка является палиндромной, если она читается одинаково и вперед, и назад.')

function findFirstPalindromeEtaX(stringArrayEtaX){
    if(!Array.isArray(stringArrayEtaX)){
        return 'invalid argument';
    }

    for(let i = 0; i < stringArrayEtaX.length; i++) {
        let candidateEtaX = stringArrayEtaX[i];

        if(typeof candidateEtaX !== 'string') {
            return 'invalid element type';
        }

        if(candidateEtaX.toLowerCase() === candidateEtaX.split('').reverse().join('').toLowerCase()) {
            return candidateEtaX;
        }
    }

    return '<< >>';
}

console.log(findFirstPalindromeEtaX(['laborum', 'iusto', 'Anna', 'totam']));
console.log(findFirstPalindromeEtaX(['laborum', 'iusto', 'labore', 'totam']));

console.log('--------------------------------------------------');

console.log('Учитывая целое число n, верните true, если оно является степенью двойки.')
console.log('В противном случае верните false')

function checkBinaryPowerThetaX(valueThetaX){
    if(valueThetaX <= 0) return false;

    while(valueThetaX > 1) {
        if(valueThetaX % 2 !== 0){
            return false;
        }
        valueThetaX /= 2;
    }

    return true;
}

console.log(checkBinaryPowerThetaX(8));
console.log(checkBinaryPowerThetaX(3));
console.log(checkBinaryPowerThetaX(10));

console.log('--------------------------------------------------');

console.log('Реализуйте класс Worker (Работник), который будет иметь следующие свойства:')
console.log('name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).')
console.log('Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.')
console.log('Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.')
console.log('И метод getFullName() - имя и фамиля работника.')

class Worket {
    constructor(name, surname, rete, days){
        this.name = name
        this.surname = surname
        this.rete = rete
        this.days = days
    }
    getSalary(){
        return `employee salary ${this.name} ${+this.rete * this.days}$`
    }
    getFullName(){
        return `${this.name} ${this.surname}`
    }
}

const employeeOne = new Worket('Anita', 'Jacobs', 25, 60)
const employeeTwo = new Worket('Kaylee', 'Rich', 30, 40)
const employeeThree = new Worket('Gregory', 'Dickson', 15, 90)

console.log(employeeOne)
console.log(employeeOne.getFullName())
console.log(employeeOne.getSalary())
console.log(employeeTwo)
console.log(employeeTwo.getFullName())
console.log(employeeTwo.getSalary())
console.log(employeeThree)
console.log(employeeThree.getFullName())
console.log(employeeThree.getSalary())

console.log('-----------------------------------------------------------------')

console.log('Напишите новый класс Boss, этот класс наследуется от класса Worker зи прошлого задания. ')
console.log('Появляется новые свойство: workers - количество работников. И зарплата считается по другому:')
console.log('произведение (умножение) ставки rate на количество отработанных дней и на количество работников')

class Boss extends Worket {
    constructor(name, surname, rete, days, workers){
        super(name, surname, rete, days)
        this.workers = workers
    }
    getSalary(){
        return `employee salary ${this.name} ${+this.rete * this.days * this.workers}$`
    }
}

const boss = new Boss('David', 'Harding', 35, 90, 3)

console.log(boss)
console.log(boss.getFullName())
console.log(boss.getSalary())