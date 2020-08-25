// Write a function, lucasNumberMemo(n), that takes in a number. The function
// should return the n-th number of the Lucas Sequence.
//
// The Lucas Sequence is like the Fibonacci Sequence, except that its two seed
// values are:
//   The 0-th number of the Lucas Sequence is 2.
//   The 1-st number of the Lucas Sequence is 1.
//
// To generate the next number of the sequence, you add up the previous two
// numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578


// =========================================================================
function lucasNumberMemo(n, memo = {}) {
    if(n === 0) {
        return 2; 
    } else if(n === 1) {
        return 1;
    } else if(n in memo) {
        return memo[n];
    }

    const results = lucasNumberMemo(n - 1, memo) + lucasNumberMemo(n - 2, memo);
    memo[n] = results;
    
    return results;
}

// console.log(lucasNumberMemo(0));   // => 2
// console.log(lucasNumberMemo(1));   // => 1
// console.log(lucasNumberMemo(40));  // => 228826127
// console.log(lucasNumberMemo(41));  // => 370248451
// console.log(lucasNumberMemo(42));  // => 599074578

// Write a function, minChange(coins, amount), that accepts an array of coin
// values and a target amount as arguments. The method should the minimum number
// of coins needed to make the target amount. A coin value can be used multiple
// times.
//
// After you pass the first 3 examples, you'll likely need to memoize your code
// in order to pass the 4th example in a decent runtime.
//
// Examples:
//  function minChange(coinArr, total) {
//      let result = [];
//     if(total === 0){
//         return [3333,22222];
//     } else {
//         for(let i = coinArr.length - 1; i >= 0; i--){
//             if(total - coinArr[i] >= 0){
//                 console.log("into the loop")
//                 result.push(coinArr[i], ...minChange(coinArr, total - coinArr[i]));
//                 return result;
//             }
//         }
//     }
//     return result.length;
//  }

let recussionCounter = 0;
console.log(minChange([1, 2, 5], 11))         // => 3, because 5 + 5 + 1 = 11
console.log(minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
console.log(minChange([1, 5, 10, 25], 15))    // => 2, because 10 + 5 = 15
console.log(minChange([1, 5, 10, 25], 100))   // => 4, because 25 + 25 + 25 + 25 = 100

// function minChange(coinArr, total, coinGuess = []){
//     recussionCounter++;
//     //find biggest coin and start recurrsion down that leg of tree
//     //return a length into a variable to be comparied to other total lengths
//     //return shortest leg;

//     if(total === 0){
//         //console.log(coinGuess)
//         //coinGuess.pop();
//         console.log(coinGuess)
//         return coinGuess.length
//     } else{
//         let best = null;
//         for(let i = 0; i < coinArr.length; i++){
//             //console.log(`We are at recursion level ${recussionCounter} and are looking at coin ${coinArr[i]}`)
//             if(total - coinArr[i] >= 0){
//                 if(total === 8){
//                     coinGuess = []
//                     //console.log("at a total of 8 and we are adding", coinGuess)
//                 }
//                 coinGuess.push(coinArr[i]);
//                 //console.log(coinGuess)
//                 if(best !== null && coinGuess.length >= best){
//                     continue;
//                 }
//                 const length = minChange(coinArr, total - coinArr[i], [...coinGuess]);
//                 if(length < best || best === null){
//                     best = length;
//                 }
//             }
//         }
//         return best;
//     }
// }



function minChange(coinArr, total, coinGuess = []){
    if(total === 0){
        return coinGuess.length;
    }
    let smallest = null;
    for(let i = coinArr.length -1; i >=0; i--){
        let newTotal = total - coinArr[i];
        if(newTotal >= 0){
            let newCoinGuess = [coinArr[i], ...coinGuess];
            if(smallest === null || newCoinGuess.length < smallest){
                let lengthWithVariation = minChange(coinArr, newTotal, newCoinGuess);
                if(smallest === null || lengthWithVariation < smallest){
                    smallest = lengthWithVariation;
                }
            }
            
        }
    }
    return smallest
}

module.exports = {
    lucasNumberMemo,
    minChange
};
