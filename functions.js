/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// implement function called search that takes in animals Array and a name String
function search(array, string) {
    // loops through animals Array to iterate through the nested Objects
    for (var i = 0; i < array.length; i++) {
        // searches array for name String within each Object
        if (array[i]['name'] === string) {
            // if name String exists in Array, return the Object in which it's found
            return array[i];
        } 
    }
    // returns null otherwise
    return null
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// implement function replace that takes in animals Array, name String, and replacement Object
function replace(array, string, replacement) {
    // loops through animals Array to iterate through the nested Objects 
    for (var i = 0; i < array.length; i++) {
        // searches array for name String within each Object
        if (array[i]['name'] === string) {
            // if name String exists in Array, replace the Object in which it's found w/ replacement Object
            return array[i] = replacement;
        } 
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// implement function replace that takes in animals Array and name String
function remove(array, string) {
    // loops through animals Array to iterate through the nested Objects 
    for (var i = 0; i < array.length; i++) {
        // searches animals Array for name String within each Object
        if (array[i]['name'] === string) {
            // if name String exists in Array, remove the Object in which it's found
            return array.splice(array[i], 1);
        } 
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare function add that takes in Array of animals and new animal Object 
function add(array, object) {
    // create empty array to contain test items
    var testArr = [];
    // loops through animals Array to iterate through the nested Objects
    for (var i = 0; i <array.length; i++) {
        // searches name Property in nested Objects against the name Property of the input object
        if (array[i]['name'] !== object['name']) {
            // if input name property is not found in nested Objects, push 'pass' to testArr
            testArr.push('pass');
        }
    }
    // check the length of the testArr against input Array and the lengths of the input Object name and species properties 
    if (object['name'].length > 0 && object['species'].length > 0 && array.length === testArr.length) {
        // add new animal Object to animals Array if length of testArr equals input Array and the lengths of the input Object name and species properties >0 
        array.push(object)
    }

}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}