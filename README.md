# infinity_num.js

A JavaScript library for handling absurdly huge numbers using layers, hyperoperations, and meta-hyperoperations.

Inspired by incremental games and large number notations.

It's limit is {10, 1e308, 10, 10}, beyond ```ExpantaNum```: The limit in ExpantaNum is {10, 9e15, 1, 2}.

## Features

- Scientific notation
- Layers
- Hyperoperations
- Tetration
- Pentation
- Hexation
- Meta-Hyper notation
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
    meta_hyper
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

Meta-Hyperoperations activate when hyperoperations become too large.

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

# Number Formatting

InfinityNum automatically formats gigantic numbers.

Examples:

```text
5.000e10
10{25}5.000e10
10{{3}}5.000e10
```

---

# Example

```js
const InfinityNum = require('./infinity_num')

let a = new InfinityNum(5, 10)

console.log(a.tostring())

console.log(a.tetrate(3).tostring())

console.log(a.pentate(3).tostring())

console.log(a.hexate(3).tostring())

console.log(a.hyper(50).tostring())

console.log(a.meta_hyper(10, 3).tostring())
```

---

# Inspired By

- Antimatter Dimensions
- Ordinal Markup
- Knuth's up-arrow notation
- Conway chained arrow notation
