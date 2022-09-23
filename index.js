// pass an object into a function:
// function iReturnThings (thing) {
//     return thing;
// }

// iReturnThings({ firstName: 'Brendan', lastName: 'Eich'});

// pass a function into a function, without invocation
// iReturnThings(function () { return 4 + 5; });

// CALLBACK FUNCTIONS: pass a function into a function WITH invocation
// function iInvokeThings (thing) {
//     return thing();
// }
// iInvokeThings(function () {return 4 + 5; }); // => 9
// iInvokeThings(function () {return 'Hello,' + 'world'; }); // => "Hello, world!"

// 

// function greet (name, cb) {
//     return cb(name);
// }
// greet('Ada Lovelace', function (name) { return 'Hello there, ' + name; });

// function doMath (num1, num2, cb) {
//     return cb(num1, num2);
// }

// function Monday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
  
//   function Tuesday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }
  
//   function Wednesday() {
//     console.log("Go for a five-mile run");
//     console.log("Go for a five-mile run");
//   }
  
//   function Thursday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
  
//   function Friday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }

//   function runFiveMiles() {
//     console.log("Go for a five-mile run");
//   }

//   function liftWeights() {
//     console.log("Pump iron");
//   }
  
//   function swimFortyLaps() {
//     console.log("Swim 40 laps");
//   }

//   function Monday() {
//     runFiveMiles();
//     liftWeights();
//   }

// function Monday() {
//     exerciseRoutine(liftWeights);
// }
// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }
// parameter in first function is 'liftWeights'
// parameter in second function is 'postRunActivity'. this is also a callback function, called after we call runFiveMiles()
// not calling liftWeights in first function; up to exerciseRoutine() to call the function when needed.

// INLINE FUNCTIONS
// exerciseRoutine(() => {
//     console.log("Stretch! Work that core!");
// });
// exerciseRoutine(() => console.log("Stretch! Work that core!"));

// RETURNING FUNCTIONS

// function morningRoutine(exercise) {
//     let breakfast;

//     if (exercise === liftWeights){
//         breakfast = "protein bar";
//     } else if (exercise === swimFortyLaps) {
//         breakfast = "kale smoothie";
//     } else {
//         breakfast = "granola";
//     }

// exerciseRoutine(exercise);

// return function () {
//     console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//     };
// }

// const afterExercise = morningRoutine(liftWeights);

function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
        // console.log(`This is a named function function.`);
    }
}

function returnsAnAnonymousFunction () {
    return function() {
        // console.log(`This is an anonymous function.`);
    }
}