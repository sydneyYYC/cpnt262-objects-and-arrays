# CPNT262 Object and Arrays
# Sydney Bruce
## [Live Page](https://sydneyyyc.github.io/cpnt262-objects-and-arrays/)
## 2023-10-13


## Code Journal

Objects Error - not using '' in my object values (making them strings) throws an error b/c it thinks im trying to do something else. 
note: 'grey is not defined' - js thought i was trying to define grey and wouldn't run my array code. 
Found on Line 8


Slice - creates a shallow array of the items sliced it doesn't effect the original - you must grab the slice array not the OG

instead of function - use let (variable) for document query selector to cut down on WET code line 20

## Attributions
I used [Mozilla](https://developer.mozilla.org/en-US/) for all of my questions about JavaScript and research

## Practical Uses

Arrays
Line 20 - 'Add' 
Use could be letting users add / upload their own content to a virtual bag / item list / dataset. 

Line 27 'shift'
Removes the first element in an array
Use could be managing array that has a max amount of stuff - so when users add to their item list the first one is automatically removed. 

Line 36 'slice'
Allows users / me to take separate elements from an array without disturbing the original .
Good for separate users to have their own array without disturbing the main b/c slice makes a shadow array

Objects
Line 43 'object values'
Practical use to check what values I have assigned to what object when running into errors.

Line 49 'object entries'
I know theres a way to do this where it displays keys and values separately  - see line 51 - 56
Good for accessing object values + displaying them. Would be useful if using objects as storage / also viewing specific keys if there are errors. 
