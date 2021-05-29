const myObject = {
  value: 1,

  getValue() {
    return this.value;
  },

  incrementValue() {
    return this.value++;
  }
}

console.log(myObject.getValue());
console.log(myObject.incrementValue());
