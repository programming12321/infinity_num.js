# InfinityNum.js

A JavaScript library for handling absurdly huge numbers using layers, hyperoperations, meta-hyperoperations, infinity-hyperoperations, omega-hyperoperations, and BEAF-style notation.

Inspired by incremental games and large number notations.

---

# Limits

InfinityNum currently supports values up to:

```text

{10, 1e308 [1e308] 10}
```


Also is:
f<sub>ω<sup>ω<sup>1e308</sup></sup></sub> (1e308)

Beyond the limit of ExpantaNum:

```text
ExpantaNum limit:
{10, 9e15, 1, 2}
```

---

# Features

- Scientific notation
- Layers
- Addition
- Subtraction
- Multiplication
- Powers
- Tetration
- Pentation
- Hexation
- Generic hyperoperations
- Meta-Hyper notation
- Meta-Meta-Hyper notation
- Infinity-Hyper notation
- Omega-Hyper notation
- BEAF-style notation
- Extremely huge values
- Incremental-game style formatting

---

# Installation

Clone the repository:

```bash
git clone https://github.com/yourname/InfinityNum.js
```

or download:

```text
infinity_num.js
```

---

# Usage

```js
const InfinityNum = require('./infinity_num')

let num = new InfinityNum(5, 10)

console.log(num.tostring())
```

Output:

```text
5.000e10
```

---

# Constructor

```js
new InfinityNum(
    mantissa,
    exponent,
    layer,
    hyper,
    meta_hyper,
    meta_meta_hyper,
    infinity_hyper,
    omega_hyper,
    beaf_notation_hyper
)
```

Example:

```js
let num = new InfinityNum(5, 10)
```

Represents:

```text
5 × 10^10
```

---

# Basic Operations

## Addition

```js
let a = new InfinityNum(5, 10)
let b = new InfinityNum(2, 10)

console.log(a.add(b).tostring())
```

---

## Subtraction

```js
console.log(a.sub(b).tostring())
```

---

## Multiplication

```js
console.log(a.mul(b).tostring())
```

---

## Powers

```js
console.log(a.pow(2).tostring())
```

---

# Hyperoperations

## Tetration

```js
console.log(
    a.tetrate(3).tostring()
)
```

Output:

```text
10{10}5.000e10
```

---

## Pentation

```js
console.log(
    a.pentate(3).tostring()
)
```

Output:

```text
10{10}10{10}5.000e10
```

---

## Hexation

```js
console.log(
    a.hexate(3).tostring()
)
```

Output:

```text
10{10}10{10}10{10}5.000e10
```

---

# Generic Hyperoperations

```js
console.log(
    a.hyper(50).tostring()
)
```

Output:

```text
10{50}5.000e10
```

Notation:

```text
10{n}x
```

---

# Meta-Hyperoperations

```js
console.log(
    a.meta_hyper(10, 3).tostring()
)
```

Output:

```text
10{{7}}5.000e10
```

Notation:

```text
10{{n}}x
```

---

# Meta-Meta-Hyperoperations

```js
a.m_m_h = 3

console.log(a.tostring())
```

Output:

```text
10{{{3}}}5.000e10
```

Notation:

```text
10{{{n}}}x
```

---

# Infinity-Hyperoperations

```js
a.i_h = 25

console.log(a.tostring())
```

Output:

```text
{10, 25, 10, 10}5.000e10
```

Notation:

```text
{10, n, 10, 10}x
```

Inspired by exploding array notation.

---

# Omega-Hyperoperations

## Small Omega-Hyper

```js
a.o_h = 5

console.log(a.tostring())
```

Output:

```text
{10, 5, 1, 1, 1, 1, 1, 2}5.000e10
```

---

## Large Omega-Hyper

```js
a.o_h = 500

console.log(a.tostring())
```

Output:

```text
{10, 500 [2] 2}5.000e10
```

Notation:

```text
{10, n [2] 2}x
```

---

# BEAF Hyperoperations

```js
a.b_h = 1000

console.log(a.tostring())
```

Output:

```text
{10, 0 [1000] 10}5.000e10
```

Notation:

```text
{10, n [m] 10}x
```

Inspired by:

- Bowers' Exploding Array Function
- BEAF notation

---

# Number Formatting

InfinityNum automatically formats gigantic numbers.

Examples:

```text
5.000e10

10{25}5.000e10

10{{3}}5.000e10

10{{{7}}}5.000e10

{10, 25, 10, 10}5.000e10

{10, 8, 1, 1, 1, 1, 1, 1, 1, 1, 2}5.000e10

{10, 500 [2] 2}5.000e10

{10, 0 [1000] 10}5.000e10
```

---

# Full Example

```js
const InfinityNum = require('./infinity_num')

let a = new InfinityNum(5, 10)

console.log(a.tostring())

console.log(a.tetrate(3).tostring())

console.log(a.pentate(3).tostring())

console.log(a.hexate(3).tostring())

console.log(a.hyper(50).tostring())

console.log(a.meta_hyper(10, 3).tostring())

a.m_m_h = 3

console.log(a.tostring())

a.i_h = 25

console.log(a.tostring())

a.o_h = 8

console.log(a.tostring())

a.o_h = 500

console.log(a.tostring())

a.b_h = 1000

console.log(a.tostring())
```

---

# Inspired By

- Antimatter Dimensions
- Ordinal Markup
- ExpantaNum
- Knuth's up-arrow notation
- Conway chained arrow notation
- Bowers' Exploding Array Function
- BEAF notation
