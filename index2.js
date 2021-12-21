//CODE OUTPUT
// \'' single quote
// \"" double quote
// \\ backslash
// \n newline
// \r carriage return
// \t tab 
// \b backspace
// \f form feed

var mystr='firstline for you\n goodbuy\r hello\t tab\b backspace\f formfeed\\hackslash'
console.log(mystr)

var sum=6;
sum-=65;
console.log(sum)

var ourstr='I come first '+' hello my friend';
// or ourstr+='hello my friend'
console.log(ourstr) 

var name='342aziz';
console.log(name.length);
console.log(name[2])

 var myStr = 'Jello Friend...';
 myStr[0]='H'; //Fix Me
 console.log(myStr) //not working!!!

 var lastName='Lovelace';
 console.log(lastName[lastName.length-1])//the last letter...

 //word blanks

 function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
     var result = '';
     result+='The ' + myAdjective + myNoun + myVerb + 'to the store' + myAdverb;

     return result;
 }

 console.log(wordBlanks('dog', ' big ', ' ran ', ' quickly...'));

//  Arrayus
var myArrays = [['John', 23],['cat',2]];
myArrays.push(['dog', 3]);//not undestood
console.log(myArrays);

var ourArray=[3,4,4,1];
var removefromarray=ourArray.pop();//remove the last element
console.log(ourArray)

var ouRArray=['Stimpson', 'J', ['vat'], 5];
var removeTheFirstElement=ouRArray.shift();
console.log(ouRArray)//remove the first el...
// func. unshift add something to first elem...

//https://www.youtube.com/watch?v=PkZNo7MFNFg&t=3041s