document.addEventListener("DOMContentLoaded", function () {
  function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

  function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      const temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
    return arr;
  }

  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  }

  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  }

  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
  }

  const arr = [64, 34, 25, 12, 22, 11, 90];

  let bubbleArr = [...arr];
  let startTime = performance.now();
  bubbleSort(bubbleArr);
  let endTime = performance.now();
  document.getElementById("timeOfBubbleSort").textContent = `bubbleSort: ${
    endTime - startTime
  } ms`;

  let selectionArr = [...arr];
  startTime = performance.now();
  selectionSort(selectionArr);
  endTime = performance.now();
  document.getElementById(
    "timeOfSelectionSort"
  ).textContent = `selectionSort: ${endTime - startTime} ms`;

  let insertionArr = [...arr];
  startTime = performance.now();
  insertionSort(insertionArr);
  endTime = performance.now();
  document.getElementById(
    "timeOfInsertionSort"
  ).textContent = `insertionSort: ${endTime - startTime} ms`;

  let quickArr = [...arr];
  startTime = performance.now();
  quickSort(quickArr);
  endTime = performance.now();
  document.getElementById("timeOfQuickSort").textContent = `quickSort: ${
    endTime - startTime
  } ms`;

  let mergeArr = [...arr];
  startTime = performance.now();
  mergeSort(mergeArr);
  endTime = performance.now();
  document.getElementById("timeOfMergeSort").textContent = `mergeSort: ${
    endTime - startTime
  } ms`;
});
