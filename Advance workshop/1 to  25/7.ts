declare global {
    function mySolutionFun(): boolean;
    var mySolutionVar: number;
}
// mySolutionFun()
globalThis.mySolutionFun = () => true;
globalThis.mySoultionVar = 1

export {}

//so whenever we need the mySolutionFun we can use it in any file

/**
 * 1. declare global will be needed:
 * declare global {} 
 * 
 * 2. myFunc will need to be added to the global scope using "function"
 * function myFunc(): boolean
 * 
 * 3. myVar will need to be added to the global scope using 'var':
 * var myVar: number
 * 
 */

// globalThis.myFunc = () => true;
// globalThis.myVar = 1;
