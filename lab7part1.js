"use strict";

window.onload = function () {

    /* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers*/


    function sum(dataArray) {
        if (dataArray.length <= 0) {
            return 0;
        }
        return dataArray.reduce((previousValue, currentValue) => { previousValue = previousValue + currentValue; return previousValue; });
    }


    describe("sum", function () {
        it("returns sum of all array elements to 6", () => {
            assert.equal(sum([1, 2, 3]), 6);
        });
        it("returns sum of all array elements to 10", () => {
            assert.equal(sum([5, 5]), 10);
        });
        it("returns sum of all array elements to 0", () => {
            assert.equal(sum([]), 0);
        });

    });

    function multiply(dataArray) {
        if (dataArray.length <= 0) {
            return 0;
        }

        return dataArray.reduce((previousValue, currentValue) => previousValue * currentValue);
    }

    describe("multiply", () => {
        it("multiplies every element of array and  return 6", () => {
            assert.equal(multiply([1, 2, 3]), 6);
        });
        it("returns 0 if array of element is empty", () => {
            assert.equal(multiply([]), 0);
        });
    });


    /* 5 Define a function reverse() that computes the reversal of a string.*/

    function reverse(stringValue) {
        if (stringValue.length == 0) {
            return stringValue;
        }

        let stringArray = Array.from(stringValue);
        // let stringArray = stringValue.split('');
        //let stringArray = [...stringValue];

        let reverseString = "";
        // for (let i = 0; i <= stringValue.length; i++) {
        //     reverseString = stringValue.charAt(i) + reverseString;
        // }
        reverseString = stringArray.reduce((previousValue, currentValue) => currentValue + previousValue, "");

        return reverseString;
    }

    describe("reverse", function () {
        it("returns reverse of start equals trats: ", function () {
            assert.equal(reverse("start"), "trats");
        });
        it("returns reverse of bottle equals elttob:", function () {
            assert.equal(reverse("bottle"), "elttob");
        });
        it("returns reverse of \"\" equals \"\" ", function () {
            assert.equal(reverse(""), "");
        });
    });


    /* 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */

    function filterLongWords(wordsArray, num) {
     
        if (wordsArray.length == 0) {
            return wordsArray;
        }
      
        return wordsArray.filter(x => x.length > num);
    }


    describe("filterLongWords", function () {
        it("filter long words of [\"start\", \"end\",\"helloworld\"] gives [\"start\",\"helloworld\"]:", function () {
            assert.deepEqual(filterLongWords(["start", "end", "helloworld"], 3), ["start", "helloworld"]);
        });
        it("filter long words of [\"this\", \"is\",\"myfunction\"] gives [\"this\",\"myfunction\"]:", function () {
            assert.deepEqual(filterLongWords(['this', 'is', 'myfunction'], 2), ['this', 'myfunction']);
        });
        it("filter long words of [] gives []:", function () {
            assert.deepEqual(filterLongWords([], 3), []);
        });
    });
    mocha.run();
}
