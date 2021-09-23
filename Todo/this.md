# What is determined the value of this

- how a function is called(runtime binding)
- bind() method to set the value of a funcion's this regardless of how it's called.
- arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context)

# value

- A property of and execution context (global, function or eval)
- in non-strict mode, is always a reference to an object
- in strict mode can be any value.

# Description

## Global context

In the global context (outside of any function).<br>
this refers to the global object whether in strict mode or not.

```javascript
this === window; // true

/**
 * globalThis property also can get the global object
 */
this === globalThis; // true
```

## Function context

Inside a function, the value of this depends on how the function is called.

- non-strict mode - 'this' will default to the global object.
- strict mode - it remains as undefined.

```javaScript
function nonStrictFunc() {
  return this;  // global object
}

function strictFunc() {
  'use strict'
  return this;  // undefined
}

```

## Class context

The behavior of this in classes and functions is simillar,<br>
since classes are functions under the hood. But there are some differences and caveats.

- within a class constructor, this is a regular object.<br>
  All non-static methods within the class are added to the prototype of this.
- Static methods are not properties of this. They are properties of the class itself.

```javascript
class Exmaple {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    console.log(Object.getOwnPropertyNames(proto));
  }
  first() {}
  static third() {}
}

new Example(); // ['constructor', 'first']
```

## Derived classes

## This and object conversion

```javascript
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = { a: 1, b: 3 };

add.call(o, 5, 7); // 16
add.apply(o, [10, 20]); //34
```

Note that in non-strict mode, with **call** and **apply**
if the value passed as this is not an object
an attempt will be made to convert it to and object.

Values null and undefined become the global object.

Primitives like 7 or 'foo' will be converted to an Object using the related constructor,
so the primitive number 7 is converted to an object as if by new Number(7) and
the string 'foo' to an object as it by new String('foo'), e.g.

## The bind method

Calling f.bind(someObject) creates a new function with the same body and scope as f,
but where this occurs in the original function, in the new function
it is permanently bound to the first argument of bind, regardless of
how the function is being used

```javascript
function f() {
  return this.a;
}

var g = f.bind({ a: 'azerty' }); // bind only works once!
console.log(g()); // azerty

var h = g.bind({ a: 'yoo' });
console.log(h()); // azerty

var o = { a: 37, f: f, g: g, h: h };
console.log(o.a, o.f(), o.g(), o.h()); // 37, 37, azerty, azerty
```
