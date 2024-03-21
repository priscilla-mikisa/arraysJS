//Find the last element of the following arrays.arr1 = [3,7,34,90,12] arr2 = [true, "green", "where",12,56]
let arr1 = [3,7,34,90,12];
console.log("ninthItem:", arr1[arr1.length-1]);

let arr2 = [true,"green","where",12,56];
console.log("ninthItem:", arr2[arr2.length-1]);

//Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let myPets = ["Cow", "Bird", "Snake","Dog"];
let stringMyPets = myPets.toString();
console.log({stringMyPets});

//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
console.log(arr3.sort(function(a,b)
{return a-b}
));

//Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
let arr = ["boy", "man", "girl",            "school", "girl", "woman"];
console.log({arr})
 function removeDup(arr){
    return arr.filter((item,
         index) => arr.indexOf(item)
    ===index);
 }
 console.log(removeDup(arr));
 //Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];
 let arr5 = ["the", "way", "x", 4];

 let find = arr5.includes("food");
 if (find!== true){
    find = "search was not found";
}
else{
    find = true;
}
console.log({find});

//Write a JS script to sort the following string:let word = "renniw"
let word = "renniw"
function reversed(word){
    var newStr = "";
    for (var m = word.length - 1; m >= 0; m--){
        newStr += word[m];
    }
    return newStr;
}
console.log(reversed(word));
