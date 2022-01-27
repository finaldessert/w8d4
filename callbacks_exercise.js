class Clock {
    constructor() {
       let dateStart = new Date();
       this.hh = dateStart.getHours();
       this.mm = dateStart.getMinutes();
       this.ss = dateStart.getSeconds();
    };

    printTime() {
        console.log(`${this.hh}:${this.mm}:${this.ss}`)
        // Format the time in HH:MM:SS
        // Use console.log to print it.
    };

    _tick() {
        setTimeout (() => {
            this.printTime()
            if (this.ss < 60) {
                this.ss += 1;
            } else if (this.ss === 60) {
                this.ss = 0;
                this.mm += 1;
                if (this.mm === 60) {
                    this.mm = 0;
                    this.hh += 1;
                    if (this.hh === 24) {
                        this.hh = 1;
                    }
                }
            }
            this._tick()
        }, 1000);
        // 1. Increment the time by one second.
        // 2. Call printTime.
      };
};


// clock = new Clock();
// clock._tick();


// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// function addNumbers(sum=0, numsLeft, completionCallback) {
//     if (numsLeft > 0) { 
//         rl.question('How about a number?', function (answer) {
//             const response = answer;
//             newsum = parseInt(response) + sum;
//             console.log(`Thank you your current sum is: ${newsum}`);
//             numsLeft--;
//             console.log(`You have this many tries remaining: ${numsLeft}`);

//            addNumbers(newsum, numsLeft--, completionCallback)
//         }) 
//     } else {
//         console.log(newsum)
//         console.log(`This is your total:`);
//         console.log(completionCallback(newsum)); //why we using completion callback?
//         rl.close();
//     }
// }

// function completion(sum) {
//     return sum
// }

// addNumbers(0, 4, completion)

// rl.question('What do you think of JavaScript? ', function (answer) {
//     const response = answer;
//     console.log(`Thank you for your valuable feedback: ${response}`);
//     rl.close();
// });

// rl.question('What do you really think of JavaScript? ', function (answer) {
//     const truth = answer;
//     console.log(`You said: ${truth}. Thank you for your honesty.`);
//     rl.close();
// });


Function.prototype.myBind = function(context) {
    debugger
    let that = this
    return function() {
        debugger
        that.call(context)
    }
}
    // return fxn where the context is bound  


// class Lamp {
//     constructor() {
//         this.name = "a lamp";
//     }
// }

// const turnOn = function () {
//     console.log("Turning on " + this.name);
// };

// const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// // const boundTurnOn = turnOn.bind(lamp);
// // const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
    rl.question(`is ${el1} greater than ${el2}? {Y/N}`, function (answer) {
        const response = answer;
            
        if (response === 'Y') {
            return callback(true);
        } else {
            return callback(false); // madeAnySwaps(false)
        }
    }) 
}

// askIfGreaterThan(1, 2, function(boolean){
//     console.log(boolean)
// })

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    
    if (i === arr.length - 1) {
        outerBubbleSortLoop;
    } else {
        askIfGreaterThan(arr[i], arr[i+1], function(boolean) { madeAnySwaps = boolean })
        if (madeAnySwaps) { 
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]]; 
        } 
    }

  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use n` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`
    if (madeAnySwaps) {
        madeAnySwaps = false;
        innerBubbleSortLoop(arr, i++, madeAnySwaps, outerBubbleSortLoop);
    } else {
        sortCompletionCallback
    }
}

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

