const mdl = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unbindGetX = mdl.getX;
console.log(unbindGetX());

const bindGetX = unbindGetX.bind(mdl);
console.dir(bindGetX);

// ---

function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

const list1 = list(1, 2, 3);
const result1 = addArguments(1, 2);

const leadingThirtysevenList = list.bind(null, 37);
const addThirtySeven = addArguments.bind(null, 37);

const list2 = leadingThirtysevenList();
const list3 = leadingThirtysevenList(1, 2, 3);
