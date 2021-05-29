
let defaultCompare = (a, b) => {
  return a > b ? 1 : (a < b ? -1 : 0);
}

// Searches the index of an specific element.
let binarySearchWithLoops = (array, element , compare = defaultCompare) => {
  let left = 0;
  let right = array.length - 1; // last element
  let middle = Math.floor( (left + right) / 2 );

   while (left < right) {
     switch (compare(element , array[middle])) {
      case -1: {
        right = middle - 1;
        break;
      }
      case 1: {
        left = middle + 1;
        break;
      }
      default:
        return middle;
     }
   }
   return -1;
}

const array = [1,2,3,4,5,6];

console.log(binarySearchWithLoops(array, 5));
console.log(binarySearchWithLoops(array, 1));
console.log(binarySearchWithLoops(array, 8));

