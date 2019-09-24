/* Task 1.
    Write a JavaScript program to check two given numbers and return 
    true if one of the number is 50 or if their sum is 50.
*/

function checkInt(num1,num2) {
    if(num1 === 50 || num2 ===50 || (num1+num2) === 50){
        return true;
    }
    return false;
}
//console.log(checkInt(5,2));
console.log('---------------------');



/* Task 2.
    Write a JavaScript program to change the capitalization of all letters in a given string.
*/

function capitalization(str) {
    let capitalLetters = str.toUpperCase();
    return capitalLetters;
}
//console.log(capitalization('vladi, teddy'));
console.log('---------------------');


/* Task 3.
    Write a JavaScript program to compute the sum of all digits that occur in a given string.
*/

 function sumDigits(strArr){  
    let sum = 0;
    for(let i=0;  i< strArr.length ;i++){        
        var num = Number.parseInt(strArr[i])
        if(Number.isInteger(num) ) {
            sum +=num;
        }
    }
    // console.log(sum);
}
//sumDigits('teddy23vladi14');

function sumDigits2(strArr){  
   let sum = 0;
   let sum2 = 0;
   
   strArr.match(/\d/g).map((x)=> sum2+= Number.parseInt(x));
    console.log(sum2);

       strArr.match(/\d/g).map((x)=>{
            let num = Number.parseInt(x);
            sum += num;
       });
       console.log(sum);
}
// sumDigits2('teddy23vladi14');
console.log('---------------------');


/* Task 4.
    Write a JavaScript program to sort the strings of a given array of strings 
    in the order of increasing lengths. 
*/

function sortArr(array){ 
    let newArr = array;   
    return newArr.sort(function(str1,str2){
        return str1.length - str2.length;
    })
}
//console.log(sortArr(['vladi','tedy','velina']));
console.log('---------------------');


/* Task 5.
    Write a JavaScript program to filter out the non-unique values in an array.
*/

function filtering(numsArr) {
  for(let t = 0; t < numsArr.length; t++){
      
  }
}

console.log(filtering([1,2,3,2,2,1,8]));
console.log('---------------------');


/* Task 6.
Write a JavaScript program to get every nth element in an given array.
*/

function getNthEl(thisArr) {
    let choice = 21;
    if( thisArr.indexOf(choice) > -1){
        return thisArr[choice];
    }
}
console.log(getNthEl([2,3,5,6]));


function getElAtPosition(arr,position) {
    if (arr.length+1 > position){
        return arr[position-1];
    }
    return 'Nothing is found on this positions: '+ position +'\nArray has ['+ arr.length +'] positions!'; 
 }
 console.log(
 getElAtPosition([112,3,123,12,3,12,312,3,12,3],5))


 function aasdasd(arr,i){
     var a = arr[i]
     if (a === undefined)
     console.log('hui')
     else
     console.log(a)
 }
 console.log('$$$$$$$')
 aasdasd([1,2,3,4],0);
 aasdasd([1,2,3,4],1);
 aasdasd([1,2,3,4],7);
