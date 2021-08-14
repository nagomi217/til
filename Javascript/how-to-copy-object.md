# How to copy an object (Shallowcopy vs Deepcopy)

3 ways to copy an object.

1. Use the spread ( ... )
2. Use the Object.assign()
3. Use the JSON.stringify() and JSON.parse()

An addtion, there are two types of copy **Shallowcopy** and **Deepcopy**.

- Shallowcopy - copy the original value as it is, Including the reference.
- Deepcopy - generate all new values, including reference values.

## Use the spread

```js
const soruce = { foo: 'foo', baz: [1, 2, 3] };
const target = { ...source };

soruce.foo = 'baz';
soruce.baz = [3, 4];

// source
// foo: 'baz', baz: Array(2)

// target
// foo: 'foo', baz: Array(3)
```

## Use the Object.assign()

- Copy Only the enumerable & own property.
- It is Call Getter/Setter.
- If include same value then value is overwrite.

```js
const soruce = { foo: 'foo', baz: [1, 2, 3] };
const target = Object.assign({}, source);

soruce.foo = 'baz';
soruce.baz = [3, 4];

// source
// foo: 'baz', baz: Array(2)

// target
// foo: 'foo', baz: Array(2)
```

## Use the JSON.stringify() and JSON.parse()

```js
const soruce = { foo: 'foo', baz: [1, 2, 3] };
const target = JSON.parse(JSON.stringify(source));

soruce.foo = 'baz';
soruce.baz = [3, 4];

// source
// foo: 'baz', baz: Array(2)

// target
// foo: 'foo', baz: Array(3)
```

---

See the MDN for more details.
