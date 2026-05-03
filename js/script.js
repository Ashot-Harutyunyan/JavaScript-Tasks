console.log('Տրված է իրական թվերի հաջորդականություն (Մասիվ): Արտածել այդ հաջորդականության')

console.log('ա) տարրերի քանակը, որոնք փոքր են իրենց կարգահամարի քառակուսուց,')

let arr = [14, 24, 98, 5, 66, 100, 5, 84, 2];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (i * i > arr[i]) {
        count++;
    }
}

console.log(count);

console.log('--------------------------------------------------');

console.log('բ) այն տարրերի քանակը, որոնք փոքր են իրենց ձախ և աջ հարևանների կիսագումարից,')

let nums = [10, 20, 6, 89, 72, 56, 24, 77];
let neighborsCount = 0;

for (let i = 1; i < nums.length - 1; i++) {
    if ((nums[i - 1] + nums[i + 1]) / 2 > nums[i]) {
        neighborsCount++;
    }
}

console.log(neighborsCount);

console.log('--------------------------------------------------');

console.log('գ) մեծագույն տարրը և նրա կարգահամարը,')

let numbers = [44, 89, 63, 87, 10, 23, 91, 89];
let maxValue = numbers[0];
let maxIndex = 0;

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
        maxIndex = i;
    }
}

console.log(maxValue, maxIndex);

console.log('--------------------------------------------------');

console.log('դ) մեծագույն և փոքրագույն տարրերի տարբերությունը,')

let diffArr = [45, 89, 636, 782, 87, 290, 22, 450, 453];

let max = diffArr[0];
let min = diffArr[0];

for (let i = 1; i < diffArr.length; i++) {
    if (diffArr[i] > max) max = diffArr[i];
    if (diffArr[i] < min) min = diffArr[i];
}

console.log(max - min);

console.log('--------------------------------------------------');

console.log('ե) մեծագույն և մեծությամբ երկրորդ տարրերը,')

let twoMaxArr = [20, 30, 100, 40, 50, 60, 70, 10, 80, 90];

let first = -Infinity;
let second = -Infinity;

for (let i = 0; i < twoMaxArr.length; i++) {
    if (twoMaxArr[i] > first) {
        second = first;
        first = twoMaxArr[i];
    } else if (twoMaxArr[i] > second) {
        second = twoMaxArr[i];
    }
}

console.log(first, second);

console.log('--------------------------------------------------');

console.log('զ) դրական տարրերից փոքրագույնի արժեքը (եթե դրական տարր չկա, արտածել համապատասխան հաղորդագրություն):')

let positiveArr = [33, 29, -77, 89, 896, 41, -90];

let minPositive = Infinity;
let hasPositive = false;

for (let i = 0; i < positiveArr.length; i++) {
    if (positiveArr[i] > 0) {
        hasPositive = true;
        if (positiveArr[i] < minPositive) {
            minPositive = positiveArr[i];
        }
    }
}

if (hasPositive) {
    console.log(minPositive);
} else {
    console.log('Չկան դրական տարրեր');
}

console.log('--------------------------------------------------');

console.log('1-1000 թվերի շարքում հաշվել բոլոր այն թվերի քանակը, որոնք պարունակում են 3 թվանշանը:')

let countWithThree = 0;

for (let i = 1; i <= 1000; i++) {
    if (i.toString().includes('3')) {
        countWithThree++;
    }
}

console.log(countWithThree);

console.log('--------------------------------------------------');

console.log('Найти самое длинное слово в строке')
console.log('Напишите функцию find_longest_word(str), которая принимает строку')
console.log('в качестве параметра и находит самое длинное слово в строке.')

function longestWord(str) {
    let words = str.split(' ');
    let longest = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}

console.log(longestWord('Lorem ipsum dolor assumenda amet'));

console.log('--------------------------------------------------');

console.log('գրել ֆունկցիա, որը որպես արգումենտ ընդունում է ստրինգ, և')
console.log('վերադարձնում է, առաջին չկրկնվող սինվոլը։')

function firstUniqueChar(str) {
    if (typeof str !== 'string') {
        return 'invalid argument';
    }

    let compact = str.split(' ').join('');
    let result = 'no unique character';

    for (let i = 0; i < compact.length; i++) {
        if (compact.indexOf(compact[i]) === compact.lastIndexOf(compact[i])) {
            result = compact[i];
            break;
        }
    }

    return result;
}

console.log(firstUniqueChar('Lorem ipsum dolor'));
console.log(firstUniqueChar('Lorem ipsum Lorem ipsum'));
console.log(firstUniqueChar([1, 'a', 2, 'b']));

console.log('--------------------------------------------------');

console.log('Տրված է բնական թվերի հաջորդականություն: Արտածել այդ հաջորդականության')

console.log('ա) այն տարրերի քանակը, որոնց թվանշանների գումարը հավասար է տրված c թվին,')

let digitSumArr = [123, 456, 789, 321, 654, 987, 111, 222];

function countByDigitSum(arr, target) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let sum = 0;

        while (num > 0) {
            let digit = num % 10;
            sum += digit;
            num = (num - digit) / 10;
        }

        if (sum === target) {
            count++;
        }
    }

    return count;
}

console.log(countByDigitSum(digitSumArr, 6));

console.log('--------------------------------------------------');

console.log('բ) Ֆիբոնաչիի թվերի քանակը,')

let fiboArr = [1, 200, 5, 8, 144, 66, 233, 88, 610];

function isFibo(num) {
    let a = 1;
    let b = 1;

    while (a <= num) {
        if (a === num) {
            return true;
        }
        let next = a + b;
        a = b;
        b = next;
    }

    return false;
}

function findFiboNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (isFibo(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result.length > 0 ? result : 0;
}

console.log(findFiboNumbers(fiboArr));

console.log('--------------------------------------------------');

console.log('Նկարագրել ֆունկցիա, որն արգումենտում ստանում է իրական թվերի զանգված և վերադարձնում է՝')

console.log('ա) true, եթե զանգվածը պարունակում է կրկնվող տարրեր, և վերադարձնում է false՝ հակառակ դեպքում,')

function hasDuplicates(arr) {
    let unique = [];

    arr.forEach((item) => {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    });

    return arr.length !== unique.length;
}

console.log(hasDuplicates([1, 2, 3]));
console.log(hasDuplicates([1, 2, 1]));

console.log('--------------------------------------------------');

console.log('բ) այն տարրերի քանակը, որոնք զանգվածում հանդիպում են ճիշտ 1 անգամ:')

function countUnique(arr) {
    let count = 0;

    arr.forEach((item) => {
        if (arr.indexOf(item) === arr.lastIndexOf(item)) {
            count++;
        }
    });

    return count;
}

console.log(countUnique([1, 2, 3, 1, 5]));
console.log(countUnique([10, 20, 30]));

console.log('--------------------------------------------------');

console.log('Гипотеза Коллатца 3n+1 проблема')
console.log('Берём любое натуральное число n. Если оно чётное, то делим его на 2,')
console.log('а если нечётное, то умножаем на 3 и прибавляем 1 (получаем 3n + 1).')
console.log('Над полученным числом выполняем те же самые действия, и так далее.')
console.log('Гипотеза Коллатца заключается в том, что какое бы начальное число n мы ни взяли,')
console.log('рано или поздно мы получим единицу:')

function collatz(num) {
    let current = num;

    while (current > 1) {
        if (current % 2 === 0) {
            current = current / 2;
        } else {
            current = current * 3 + 1;
        }

        console.log(current);
    }
}

collatz(10);

console.log('--------------------------------------------------');

console.log('Պատահական տարր զանգվածից')
console.log('Գեներացնել պատահական տարր տվյալ զանգվածից:')

let randomArr = [12, 24, true, 'boo', 56, 'foo', false, 99];

function randomItem(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

console.log(randomItem(randomArr));

console.log('--------------------------------------------------');

console.log('Պատահական տառ')
console.log('Գեներացնել պատահական տառ (A-Z):')

function randomChar() {
    let upperStart = 65;
    let lowerStart = 97;

    if (Math.random() < 0.5) {
        return String.fromCharCode(Math.floor(Math.random() * 26 + upperStart));
    } else {
        return String.fromCharCode(Math.floor(Math.random() * 26 + lowerStart));
    }
}

console.log(randomChar());

console.log('--------------------------------------------------');

console.log('Պատահական  գույն (RGB)')
console.log('Գեներացնել պատահական RGB գույնի արժեք:')

function randomRgb() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

console.log(randomRgb());

console.log('--------------------------------------------------');

console.log('Պատահական գաղտնաբառ')
console.log('Գեներացնել պատահական գաղտնաբառ նշված երկարությամբ:')

function randomPassword(length) {
    let chars = [];

    for (let i = 0; i < length; i++) {
        let code = Math.floor(Math.random() * 122);

        if (code >= 65 && code <= 90) {
            chars.push(randomChar());
        } else if (code >= 97 && code <= 122) {
            chars.push(randomChar());
        } else {
            chars.push(code);
        }
    }

    return chars.join('');
}

console.log(randomPassword(6));

console.log('--------------------------------------------------');

console.log('փոխել զանգվածի սկզբնական և վերջավոր թվերի դիրքերը')

let swapArr = [1, 2, 3, 4, 5, 6];

let temp = swapArr[0];
swapArr[0] = swapArr[swapArr.length - 1];
swapArr[swapArr.length - 1] = temp;

console.log(swapArr);

console.log('--------------------------------------------------');

console.log('զանգվածում թողնել միայն պարզ թվեր')

let primeArr = [100, 212, 332, 449, 587, 684, 757, 860, 929];
let writeIndex = 0;

outerLoop:
for (let i = 0; i < primeArr.length; i++) {
    for (let j = 2; j <= Math.sqrt(primeArr[i]); j++) {
        if (primeArr[i] % j === 0) {
            continue outerLoop;
        }
    }

    primeArr[writeIndex++] = primeArr[i];
}

primeArr.length = writeIndex;

console.log(primeArr);

console.log('--------------------------------------------------');

console.log('Ստացեք զանգվածի առաջին և երկրորդ կեսերի պարզ թվերը և ստուգեք, թե որ մասում է ամենաշատ պարզ թվերը')

let halfArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let firstHalfPrimes = [];
let secondHalfPrimes = [];

for (let i = 0; i < halfArr.length; i++) {
    let num = halfArr[i];
    let isPrime = true;

    if (num < 2) isPrime = false;

    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        if (i < halfArr.length / 2) {
            firstHalfPrimes.push(num);
        } else {
            secondHalfPrimes.push(num);
        }
    }
}

if (firstHalfPrimes.length > secondHalfPrimes.length) {
    console.log('FIRST HALF DOMINATES');
} else if (firstHalfPrimes.length < secondHalfPrimes.length) {
    console.log('SECOND HALF DOMINATES');
} else {
    console.log('EQUAL DISTRIBUTION');
}

console.log('--------------------------------------------------');

console.log('գումարել իրար զանգվածի զույք և կենտ թվերը հասկանալ որն է մեծ')

let parityArr = [1, 2, 3, 4, 5, 6, 7];

let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < parityArr.length; i++) {
    if (parityArr[i] % 2 === 0) {
        evenSum += parityArr[i];
    } else {
        oddSum += parityArr[i];
    }
}

console.log(
    evenSum > oddSum
        ? `even wins ${evenSum}`
        : `odd wins ${oddSum}`
);

console.log('--------------------------------------------------');

console.log('զանգվածները վերադասավորել նվազման և աճման կարգով')

let ascArr = [10, 22, 3, 48, 5, 66];
let descArr = [...ascArr];

for (let i = 0; i < ascArr.length; i++) {
    for (let j = 0; j < ascArr.length - 1; j++) {
        if (ascArr[j] > ascArr[j + 1]) {
            let tmp = ascArr[j];
            ascArr[j] = ascArr[j + 1];
            ascArr[j + 1] = tmp;
        }
    }
}

for (let i = 0; i < descArr.length; i++) {
    for (let j = 0; j < descArr.length - 1; j++) {
        if (descArr[j] < descArr[j + 1]) {
            let tmp = descArr[j];
            descArr[j] = descArr[j + 1];
            descArr[j + 1] = tmp;
        }
    }
}

console.log(ascArr);
console.log(descArr);

console.log('--------------------------------------------------');

console.log('գրել ֆուկցիա, որը պարզում է')
console.log('տրված բնական թվի թվանշանների գումարը զույգ է թե կենտ։')

function digitSumParity(num) {
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }

    return sum % 2 === 0 ? 'EVEN_SUM' : 'ODD_SUM';
}

console.log(digitSumParity(202));
console.log(digitSumParity(203));

console.log('--------------------------------------------------');

console.log('Գտնել ֆունկցիա որը ստանում է, որպես պարամետր իրարից պրաբելով առանձնացված ստրինգ')
console.log('և մասիվ, որի էլէմենտները ստրինգներ են: Գտնել մասիվում առկա բառերը ստրնգում')
console.log('և փոխարինել այդ բառիը սինվոլների քանակի ասղանիշներով։')

function makeStars(length) {
    return '*'.repeat(length);
}

function maskWords(sentence, words) {
    let tokens = sentence.split(' ');
    let result = [];

    for (let i = 0; i < words.length; i++) {
        if (tokens.includes(words[i])) {
            result.push(makeStars(words[i].length));
        } else {
            result.push(words[i]);
        }
    }

    return result.join(' ');
}

console.log(maskWords(
    'Lorem ipsum dolor sit amet quod officiis quam maxime fuga',
    ['sint', 'ipsum', 'elit', 'incidunt', 'quisquam', 'sit', 'delectus']
));

console.log('--------------------------------------------------');

console.log('Պատահական Hexadecimal Գույնի Գեներացիա')
console.log('Գեներացնել պատահական հեքսադեցիմալ գույնի արժեք:')

function randomHexPart() {
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
}

function randomHexColor() {
    return `#${randomHexPart()}${randomHexPart()}${randomHexPart()}`;
}

console.log(randomHexColor());

console.log('--------------------------------------------------');

console.log('Պատահական ժամանակ գեներացիա (HH:MM)')
console.log('Գեներացնել պատահական ժամանակ ձևաչափով HH:MM:')

function randomTime() {
    let hours = Math.floor(Math.random() * 24).toString().padStart(2, '0');
    let minutes = Math.floor(Math.random() * 60).toString().padStart(2, '0');

    return `${hours}:${minutes}`;
}

console.log(randomTime());

console.log('--------------------------------------------------');

console.log('Форматировать строку даты: Используйте методы, такие как getFullYear(), getMonth() и getDate(), для создания отформатированной строки даты.')

let today = new Date();

console.log(
    today.getDate().toString().padStart(2, '0'),
    (today.getMonth() + 1).toString().padStart(2, '0'),
    today.getFullYear()
);

console.log('--------------------------------------------------');

console.log('Вычислить разницу между двумя датами: Создайте два объекта Date и вычтите один из другого, чтобы получить разницу в миллисекундах. Переведите ее в другие единицы при необходимости.')

let startDate = new Date(1997, 1, 4).getTime();
let endDate = Date.now();

let totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

console.log(totalDays);

console.log('--------------------------------------------------');

console.log('Получить текущее время: Используйте методы, такие как getHours(), getMinutes() и getSeconds(), чтобы получить текущее время.')

let now = new Date();

console.log(
    now.getHours().toString().padStart(2, '0') + ':' +
    now.getMinutes().toString().padStart(2, '0') + ':' +
    now.getSeconds().toString().padStart(2, '0')
);

console.log('--------------------------------------------------');

console.log('Получить день в году: Используйте методы getMonth() и getDate() для получения номера дня в году.')

function dayOfYear(date) {
    let startOfYear = new Date(date.getFullYear(), 0, 0).getTime();
    let current = date.getTime();

    return Math.floor((current - startOfYear) / (1000 * 60 * 60 * 24));
}

console.log(dayOfYear(new Date()));

console.log('--------------------------------------------------');

console.log('Получить день недели для определенной даты: Используйте метод getDay() для получения дня недели для определенной даты.')

let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(weekdays[new Date().getDay()]);

console.log('--------------------------------------------------');

console.log('Получить первый день текущего месяца: Создайте новый объект Date и установите день месяца в 1.')

let firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
console.log(firstDayOfMonth);

console.log('--------------------------------------------------');

console.log('Получить последний день текущего месяца: Создайте новый объект Date, установите месяц на следующий, а день месяца на 0.')

let lastDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
console.log(lastDayOfMonth);

console.log('--------------------------------------------------');

console.log('գրել ֆունկցիա, որը վերցնում է միայն զանգվածը և վերադարձնում է զանգվածի')
console.log('ամենամեծ և ամենափոքր թվերը, ինչպես նաև ամենամեծ թվի ամենափոքր թվով աստիճանը')

function maxPowMin(arr) {
    if (!Array.isArray(arr)) {
        return 'invalid argument';
    }

    let maxVal = Math.max(...arr);
    let minVal = Math.min(...arr);

    return Math.pow(maxVal, minVal);
}

let dataset = [3, 44, 5, 66, 17, 8, 99, 10];

console.log(maxPowMin(dataset));

console.log('--------------------------------------------------');

console.log('գրել ֆունկցիա, որը վերցնում է միայն զանգվածը և թիվը, վերադարձնում է նոր զանգված')
console.log('որի մեջ միայն զանգվածի այն թվերնեն որոնք առանց մնացորդ բաժանվում են այն թվին որը')
console.log('տվել ենք ֆունկցային')

function divisibleBy(arr, divisor) {
    if (!Array.isArray(arr) || typeof divisor !== 'number') {
        return 'invalid argument';
    }

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(divisibleBy([5, 15, 20, 30, 40, 35], 2));

console.log('--------------------------------------------------');

console.log('գրել ռեկուրսիվ ֆունկցիա, որը կգումարի զանգվածի բոլոր թվերը և կվերադարձնի');

function sumRecursive(arr, index = 0) {
    if (index === arr.length) {
        return 0;
    }

    return arr[index] + sumRecursive(arr, index + 1);
}

let recursionArr = [10, 10, 10, 10, 10, 10];

console.log(sumRecursive(recursionArr));

console.log('--------------------------------------------------');

console.log('Գրել ֆունկցիա որը կստուգի որ արգումենտը պարտադիր')
console.log('թիվ լինի հակառակ դեպքում կվերադարձնի "invalid argument"')
console.log('արտահայտությունը, եթե ամեն բան ճիշտ է ապա թող')
console.log('վերադարձնի տրված թվի ֆակտորիալը։')

function factorial(num) {
    if (typeof num !== 'number' || num < 0) {
        return 'invalid argument';
    }

    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));

console.log('--------------------------------------------------');

console.log('Напишите код, чтобы вы могли')
console.log('вызвать метод array.last() для любого массива,')
console.log('и он вернет последний элемент.')
console.log('Если в массиве нет элементов, он должен вернуть -1')

Array.prototype.last = function () {
    return this.length === 0 ? -1 : this[this.length - 1];
}

let arrA = [1, 2, 3];
let arrB = [];

console.log(arrA.last());
console.log(arrB.last());

console.log('--------------------------------------------------');

console.log('Перевернуть строку Написать функцию, которая принимает строку и возвращает ее в обратном порядке.')
console.log('Например, если входная строка "hello", то функция должна вернуть "olleh".')

function reverseStr(str) {
    return str.split('').reverse().join('');
}

console.log(reverseStr('hello'));

console.log('--------------------------------------------------');

console.log('Реализовать функцию поиска дубликатов в массиве Написать функцию, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из входного массива.')
console.log('Например, если входной массив [1, 2, 2, 3, 4, 4, 5], то функция должна вернуть [1, 2, 3, 4, 5].')

function removeDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

console.log('--------------------------------------------------');

console.log('Найти первое неповторяющееся число в массиве Написать функцию, которая принимает массив чисел и возвращает первое число в массиве, которое не повторяется.')
console.log('Например, если входной массив [1, 2, 3, 2, 4, 1], то функция должна вернуть 3.')

function firstUniqueNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            return arr[i];
        }
    }
}

console.log(firstUniqueNumber([1, 2, 3, 2, 4, 1]));

console.log('--------------------------------------------------');

console.log('Реализовать функцию, которая проверяет,')
console.log('является ли заданное число совершенным Написать функцию,')
console.log('которая принимает число и проверяет, является ли оно совершенным')
console.log('(сумма всех делителей числа, кроме самого числа, равна этому числу).')
console.log('Например, если входное число 6, то функция должна вернуть true.')

function isPerfect(num) {
    if (typeof num !== 'number') {
        return 'invalid argument';
    }

    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}

console.log(isPerfect(6));
console.log(isPerfect(7));
console.log(isPerfect('10'));

console.log('--------------------------------------------------');

console.log('Напишите функцию, которая находит пропущенное число в массиве,')
console.log('содержащем числа от 1 до n')

function findMissing(arr) {
    if (!Array.isArray(arr)) {
        return 'invalid argument';
    }

    let missing = [];
    let maxVal = Math.max(...arr);

    for (let i = 1; i <= maxVal; i++) {
        if (!arr.includes(i)) {
            missing.push(i);
        }
    }

    return missing;
}

console.log(findMissing([1, 2, 8, 3, 5, 10, 7, 6]));

console.log('--------------------------------------------------');

console.log('Учитывая массив строк-слов, верните первую палиндромную строку в массиве.')
console.log('Если такой строки нет, верните пустую строку «».')
console.log('Строка является палиндромной, если она читается одинаково и вперед, и назад.')

function firstPalindrome(arr) {
    if (!Array.isArray(arr)) {
        return 'invalid argument';
    }

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];

        if (typeof word !== 'string') {
            return 'invalid element type';
        }

        if (word.toLowerCase() === word.split('').reverse().join('').toLowerCase()) {
            return word;
        }
    }

    return '<< >>';
}

console.log(firstPalindrome(['laborum', 'iusto', 'Anna', 'totam']));
console.log(firstPalindrome(['laborum', 'iusto', 'labore', 'totam']));

console.log('--------------------------------------------------');

console.log('Учитывая целое число n, верните true, если оно является степенью двойки.')
console.log('В противном случае верните false')

function isPowerOfTwo(num) {
    if (num <= 0) return false;

    while (num > 1) {
        if (num % 2 !== 0) {
            return false;
        }
        num /= 2;
    }

    return true;
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(10));

console.log('--------------------------------------------------');

console.log('Ստեղծել ֆունկցիա, որը որպես պարամետր կընդունի զանգված և պատահական կարգով')
console.log('կխառնի զանգվածի տարրերը։')

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let swapIndex = Math.floor(Math.random() * (i + 1));

        let tmp = arr[i];
        arr[i] = arr[swapIndex];
        arr[swapIndex] = tmp;
    }

    return arr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(shuffle(['boo', false, 'foo', true, { a: 1 }]));

console.log('--------------------------------------------------');

console.log('Ստեղծել ֆունկցիա, որը որպես պարամետր կընդունի թիվը և կվերադարձնի նրա')
console.log("բաժանարարների զանգվածը, որոնք պարզ թվեր են։")

function primeDivisors(num) {
    const result = [];

    for (let i = 2; i <= Math.ceil(num / 2); i++) {
        if (num % i === 0) {
            result.push(i);
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) result.pop();
            }
        }
    }

    return result;
}

console.log(primeDivisors(6));
console.log(primeDivisors(28));
console.log(primeDivisors(30));

console.log('--------------------------------------------------');

console.log('Реализуйте класс Worker (Работник), который будет иметь следующие свойства:')
console.log('name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).')
console.log('Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.')
console.log('Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.')
console.log('И метод getFullName() - имя и фамиля работника.')

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return `employee salary ${this.name} ${+this.rate * this.days}$`;
    }
    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

const employeeOne = new Worker('Anita', 'Jacobs', 25, 60);
const employeeTwo = new Worker('Kaylee', 'Rich', 30, 40);
const employeeThree = new Worker('Gregory', 'Dickson', 15, 90);

console.log(employeeOne);
console.log(employeeOne.getFullName());
console.log(employeeOne.getSalary());
console.log(employeeTwo);
console.log(employeeTwo.getFullName());
console.log(employeeTwo.getSalary());
console.log(employeeThree);
console.log(employeeThree.getFullName());
console.log(employeeThree.getSalary());

console.log('-----------------------------------------------------------------');

console.log('Напишите новый класс Boss, этот класс наследуется от класса Worker зи прошлого задания. ')
console.log('Появляется новые свойство: workers - количество работников. И зарплата считается по другому:')
console.log('произведение (умножение) ставки rate на количество отработанных дней и на количество работников')

class Boss extends Worker {
    constructor(name, surname, rate, days, workers) {
        super(name, surname, rate, days);
        this.workers = workers;
    }
    getSalary() {
        return `employee salary ${this.name} ${+this.rate * this.days * this.workers}$`;
    }
}

const boss = new Boss('David', 'Harding', 35, 90, 3);

console.log(boss);
console.log(boss.getFullName());
console.log(boss.getSalary());