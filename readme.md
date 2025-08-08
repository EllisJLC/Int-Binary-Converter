# Integer to Binary Converter

## Table of contents
1. [Introduction](#Introduction)
2. [Usage](#usage)

## Introduction

I am fully aware this already exists, however I decided to challenge myself in creating it myself after I came up with the idea as a non-CS degree holder and was excited to implement it at work.

I was working at a small startup where I was the sole back end developer when I was given a task to find a way to communicate a kind of check-list which would involve daily user input on a daily basis for 7 days. This would be fairly simple by using a simple integer between 0 and 7 (0 being not started, 7 being completed fully) to represent the progress of the list, however, the product owner (PO) requested that days did not have to be completed or checked off in order, meaning there could be gaps.

Theoretically this would be simple in a database like MongoDB (NoSQL) or PostgreSQL, in which data can be stored as an array. The intuitive solution being to just store the array, however, we were using MySQL so that was not an option. 

A few days after this was assigned, I was working on some unrelated tasks and thought of the solution of the use of binary to obtain an array of true and false values which would represent complete or incomplete status of the day's check. Rather than storing an integer of 0 to 7, which was not an option due to PO specs, or storing an array of binary values, which was also not an option due to the use of MySQL, we could store an integer between 0 and 63 instead of an array, then, convert it into an array of binary values to send to the front end as a response. 

This solution would not only solve the problem, but also reduce the cost of storage with a negligible affect on the back end servers.

## Usage

Import converters via 
```js
const converter = require("Int-Binary-Converter/index.js");
```

The imported `converter` includes both functions, `intToBin` and `binToInt`.

### Integer to Binary
Accepts an integer, size of binary array, and optional `options` object `converter.intToBin(integer, arraySize, {options})`.

Options array:

|       Option      |       Value      |            Effect          |      Default      |
|-------------------|------------------|----------------------------|-------------------|
|      reversed     |      binary      |     Reverses the array     |       false       |
|      algebra      |      binary      |converts binary to int array|       false       |

```js
const integer = 30;
const size = 6;
const options_reverse = {
  reversed: true
}
const options_algebra = {
  algebra: false
}

const result = converter.intToBin(integer, size); // returns [false, false, true, true, true, true, false]
const result_reverse = converter.intToBin(integer, size, options_reverse); // returns [false, true, true, true, true, false, false]
```

### Binary to Integer
Accepts an array of binary (true/false) or numbers (1/0), and an optional object of `options` object `converter.binToInt(array, {options})`. Non 1 or 0 values are automatically converted to `true`.

Options array:

|       Option      |       Value      |            Effect          |      Default      |
|-------------------|------------------|----------------------------|-------------------|
|      reversed     |      binary      |  Reverses the input array  |       false       |

```js
const array = [0, 1, 1, 1]
const options_reverse = {
  reversed: true
}

const result = converter.binToInt(array); // Returns the value 7, converts from right to left.
const result_reverse = converter.binToInt(array, options_reverse); // Reverses the input array, returning the value 14 instead.
```