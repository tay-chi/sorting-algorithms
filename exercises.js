

// Question 1

function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted Array:", unsortedArray);

bubbleSort(unsortedArray);

console.log("Sorted Array:", unsortedArray);



// Question 2:

function selectionSortWords(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // Swap the minimum word with the first unsorted word
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

const unsortedWords = ["banana", "apple", "grape", "orange", "kiwi"];
console.log("Unsorted Words:", unsortedWords);

// Call the selectionSortWords function to sort the array
selectionSortWords(unsortedWords);

console.log("Sorted Words:", unsortedWords);

// Question 3

function insertionSortWords(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}

const unSortedWords = ["javascript", "python", "c++", "ruby", "go"];
console.log("Unsorted Words:", unSortedWords);

const sortedWords = insertionSortWords(unSortedWords);
console.log("Sorted Words:", sortedWords);
