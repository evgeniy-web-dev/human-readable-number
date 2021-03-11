// Задача - реализовать функцию toReadable, которая преобразует заданное число в читаемую строку.

module.exports = function toReadable(number) {
    const unambiguous = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    ];

    const double = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
    ];

    const dozens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",
    ];
	
    const th = ["thousand", "million", "billion"];

    const stringNum = number.toString();

    if (number < 10) {
        return unambiguous[number];
    } else if (number > 10 && number < 20) {
        return double[(number % 10) - 1];
    } else if (number % 10 == 0 && number < 100) {
        return dozens[number / 10 - 1];
    } else if (number > 20 && number < 100 && number % 10 !== 0) {
        return `${dozens[Math.floor(number / 10) - 1]} ${unambiguous[number % 10]}`;
    } else if (number >= 100 && number < 1000 && number % 100 === 0) {
        return `${unambiguous[number / 100]} hundred`;
    } else if (number > 100 && number < 1000 && number % 100 !== 0) {
        const r = number % 100;

        if (r < 10) {
            return `${unambiguous[Math.floor(number / 100)]} hundred ${unambiguous[r]}`;
        } else if (r > 10 && r < 20) {
            return `${unambiguous[Math.floor(number / 100)]} hundred ${
                double[(r % 10) - 1]
            }`;
        } else {
            return `${unambiguous[Math.floor(number / 100)]} hundred ${
                dozens[Math.floor(r / 10) - 1]
            }${r % 10 !== 0 ? " " + unambiguous[r % 10] : ""}`;
        }
    }
};
