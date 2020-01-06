export function debounce(func, wait, immediate) {
  var DEtimeout;
  return function() {
    var DEcontext = this,
      DEargs = arguments;
    var DElater = function() {
      DEtimeout = null;
      if (!immediate) {
        func.apply(DEcontext, DEargs);
      }
    };
    var DEcallNow = immediate && !DEtimeout;
    clearTimeout(DEtimeout);
    DEtimeout = setTimeout(DElater, wait);
    if (DEcallNow) {
      func.apply(DEcontext, DEargs);
    }
  };
}
export function bubbleSort(list) {
  console.log(list);
  return list.sort((a, b) => b.val - a.val);
}
export function mergeSort(list) {
  const len = list.length;
  // an array of length == 1 is technically a sorted list
  if (len === 1) {
    return list;
  }

  // get mid item
  const middleIndex = Math.ceil(len / 2);
  // split current list into two: left and right list
  let leftList = list.slice(0, middleIndex);
  let rightList = list.slice(middleIndex, len);
  // console.log("leftList1", leftList);
  // console.log("rightList1", rightList);
  leftList = mergeSort(leftList);
  rightList = mergeSort(rightList);
  // console.log("leftListRemix", leftList);
  // console.log("rightListRemix", rightList);
  let newList = merge(leftList, rightList);
  // console.log("newList", newList);
  // debugger;
  return newList;
}

// Solve the sub-problems and merge them together
export function merge(leftList, rightList) {
  const sorted = [];
  while (leftList.length > 0 && rightList.length > 0) {
    let leftItem = leftList.val;
    // if (typeof leftItem === "string") {
    //   console.log("i am leftitem before parse", leftItem);
    //   leftItem = leftItem.replace(/\%/, "");
    //   leftItem = parseFloat(leftItem);
    // }

    console.log("i am leftitem", leftItem);
    let rightItem = rightList.val;
    // if (typeof rightItem === "string") {
    //   console.log("i am leftitem before parse", leftItem);
    //   rightItem = rightItem.replace(/\%/, "");
    //   rightItem = parseFloat(rightItem);
    // }
    if (leftItem < rightItem) {
      sorted.push(rightItem);
      rightList.shift();
      console.log("leftItem is less leftItem, rightItem", leftItem, rightItem);
    } else {
      sorted.push(leftItem);
      leftList.shift();
    }
  }

  // if left list has items, add what is left to the results
  while (leftList.length !== 0) {
    let temp = leftList[0];
    // console.log("temp b4 replace", temp);
    // temp = temp.replace(/\%/, "");

    // temp = parseFloat(temp);
    sorted.push(temp);
    console.log("leftList[0]", temp);
    leftList.shift();
  }

  // if right list has items, add what is left to the results
  while (rightList.length !== 0) {
    let temp = rightList[0];
    // temp = temp.replace(/\%/, "");
    // temp = parseFloat(temp);
    sorted.push(temp);
    console.log("rightList[0]", temp);

    rightList.shift();
  }
  console.log("i am sorted", sorted);
  // debugger;
  // merge the left and right list
  return sorted;
}

// var items = [5, 3, 7, 6, 2, 9];
function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}
// first call to quick sort
// var sortedArray = quickSort(items, 0, items.length - 1);
