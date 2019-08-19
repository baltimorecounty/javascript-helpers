# Handlebars Helpers

A bunch of useful [Helpers](https://handlebarsjs.com/expressions.html#helpers) for handlebars.

## limit

Limits an array for a given number limit.

### Usage

```js
// Data
var products = ['Toys', 'Clothes', 'Shoes', 'Bags', 'Watches'];

//  Template
{{#each (limit products 3)}}
  <li>Index is {{@index}} - element is {{this}}</li>
{{/each}}

// Result will be:
// <li>Toys</li>
// <li>Clothes</li>
// <li>Shoes</li>
```

## skip

Limits an array based on the number of items you want to skip from the start of the array. Will return all remaining items.

### Usage

```js
// Data
var products = ['Toys', 'Clothes', 'Shoes', 'Bags', 'Watches'];

//  Template
{{#each (skip products 2)}}
  <li>Index is {{@index}} - element is {{this}}</li>
{{/each}}

// Result will be:
// <li>Shoes</li>
// <li>Bags</li>
// <li>Watches</li>
```

