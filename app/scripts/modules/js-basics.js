(function(global) {
    'use strict';

    var JS_BASICS={};

    JS_BASICS.isNumberEven = function(i) {
        // i will be an integer.
        // Return true if it's even, and false if it isn't.
	if(!isNaN(i) && i%2===0){
		return true;
	} else {
		return false;
	}
    };

    JS_BASICS.getFileExtension = function(str) {
        // str will be a string, but it may not have a file extension.
        // Return the file extension (with no period) if it has one, otherwise false

	var tableauParties = str.split(".");

    	if(tableauParties.length <= 1) {
        	return false;
   	} else {       
        return tableauParties[tableauParties.length-1];
        }
    };

    JS_BASICS.longestString = function(arr) {
        // arr will be an array.
        // Return the longest string in the array

        var initialChaine = "";
         
        for(var i = 0; i<arr.length; i++) {
            if(typeof arr[i] === "string" && arr[i].length > initialChaine.length) {
                initialChaine = arr[i];
             }
        } 
	return initialChaine;
    };

    JS_BASICS.reverseString = function(str) {
        // str will be an string
        // Return a new string who's characters are in the opposite order to str's.
	 return str.split("").reverse().join("");
    };

    JS_BASICS.isPalindrome = function(str) {
        // str will be an string
        // Return true if it is a palindrome and false otherwise. It should be case insensitive and not consider space or punctuation.
	str = str.toLowerCase();
      var resultat = JS_BASICS.reverseString(str);

      if(parseInt(str.charCodeAt(0)) > 127)
      {
        for(var i = 0; i < str.length; i++)
          if(str.charCodeAt(i) != str.charCodeAt(str.length - 1) && str.charCodeAt(str.length - 1 - i) == 32 && i + 1 < str.length &&            str.charCodeAt(i + 1) == 32)
            str = str.slice(0, i) + str.slice(i + 1, str.length);
        resultat = JS_BASICS.reverseString(str);
      }
      return resultat == str;
    };

    JS_BASICS.nestedSum = function(arr) {
        // arr will be an array, containing integers, strings and/or arrays like itself
        // Return the sum all the numbers you find, anywhere in the nest of arrays.
	var sum = 0;
        if (Array.isArray(arr)){
           for (var i = 0; i < arr.length; i++) {
               if (Array.isArray(arr[i])) {
                   sum += JS_BASICS.nestedSum(arr[i]);
                }
          else if (typeof arr[i] === "number") {
                sum += arr[i];
                }
            }
         }
        return sum;
    };

    global.JS_BASICS = JS_BASICS;
}(this));
