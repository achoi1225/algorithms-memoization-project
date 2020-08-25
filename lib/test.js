
function merge(leftArray, rightArray) {
    const sorted = [];
    while (leftArray.length > 0 && rightArray.length > 0) {
        const leftItem = leftArray[0];
        const rightItem = rightArray[0];

        if (leftItem > rightItem) {
            sorted.push(rightItem);
            rightArray.shift();
        } else {
            sorted.push(leftItem);
            leftArray.shift();
        }

        console.log(leftArray);
        console.log(rightArray);
    }

    while (leftArray.length !== 0) {
        const value = leftArray.shift();
        sorted.push(value);
    }

    while (rightArray.length !== 0) {
        const value = rightArray.shift();
        sorted.push(value);
    }

    return sorted
}

function mergeSort(array) {
    const length = array.length;
    if (length == 1) {
        return array;
    }

    const middleIndex = Math.ceil(length / 2);
    let leftArray = array.slice(0, middleIndex);
    let rightArray = array.slice(middleIndex, length);
    
    console.log('left array: ', leftArray);
    console.log('right array: ', rightArray);
    leftArray = mergeSort(leftArray);
    rightArray = mergeSort(rightArray);

    console.log('left array BEFORE calling merge: ', leftArray);
    console.log('right array BEFORE calling merge: ', rightArray);
    return merge(leftArray, rightArray);
}

console.log(mergeSort([5,3,17,22,9,4]));
// console.log(merge([22, 9, 4], [5, 3, 17]));
