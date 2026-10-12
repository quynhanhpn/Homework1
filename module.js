 // Bai 1
export const productInfo = (name, price) =>
    `Sản phẩm: ${name}, Giá: ${price.toLocaleString("en-US")} VNĐ`;

// Bai 2
export const Hello = (name) => `Xin chào, ${name}!`;

// Bài 3
export function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Bai 4
export const square = (n) => n * n;

// Bai 5
export const ktchan = (n) => n % 2 === 0;

// Bai 6
export const firstElement = (arr) => arr[0];

// Bai 7
export function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

// Bai 11
export const toUpperCase = (str) => str.toUpperCase();

// Bai 12
export function formatCurrency(price) {
    return `${price.toLocaleString("en-US")} VNĐ`;
}

// Bai 13
export const max = (arr) => Math.max(...arr);

// Bai 14
export function isPrime(n) {
    if (n < 2 || !Number.isInteger(n)) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Bai 15
export function repeatString(str, n) {
    return Array(n).fill(str).join("_");
}

// Bai 16
export function Tongsole(arr) {
    return arr.filter(n => n % 2 !== 0)
              .reduce((a, b) => a + b, 0);
}

// Bai 17
export function sumGreaterThan(arr, n) {
    return arr.filter(x => x > n)
              .reduce((a, b) => a + b, 0);
}

// Bai 18
export function formatDate(date) {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
}


// Bai 19
export function firstThree(arr) {
    return arr.slice(0, 3);
}

// Bai 20
export function contanChu(str, char) {
    return str.includes(char);
}

// Bai 21
export const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

// Bai 22
export function SoLanXuatHien(arr, value) {
    return arr.filter(x => x === value).length;
}

// Bai 23
export function filter(arr) {
    return arr.filter(n => n % 2 !== 0);
}

// Bai 24
export function TimSo(arr, n) {
    return arr.filter(x => x > n);
}

// Bai 25
export function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("n phải là số nguyên không âm");
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Bai 26
export function TachSo(arr) {
    return {
        even: arr.filter(n => n % 2 === 0),
        odd: arr.filter(n => n % 2 !== 0)
    };
}

// Bai 27
export function sort(arr) {
    return [...arr].sort((a, b) => a - b);
}

// Bai 28
export function sumEvenIndex(arr) {
    return arr.filter((_, index) => index % 2 === 0)
              .reduce((a, b) => a + b, 0);
}

// Bai 29
export function multiplyByTwo(arr) {
    return arr.map(n => n * 2);
}

// Bai 30
export function arrayToString(arr) {
    return arr.join("");
}
