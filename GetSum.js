function getSum (a, b) {
    let min = Math.min (a, b), max = Math.max (a, b);
    return(max - min - 1) * (min +max) /2;
} 
getSum (2,9);





function repeatStr (n, s) {
    var rept = ``;
    for (i = 1; i <= (n); i++){
    console.log(s.repeat(n));
    rept+=(s).repeat(i) + "\n";
    }
    return rept;
   
  }

  repeatStr(4, `*`);

//Phyllis

  let words = ("lo2ve he3r so4 i1");
function order(words){
 let conv_word = words.split('').sort(function(a,b){
    return a.match(/\d+/g)- b.match(/\d+/g);
  
 })
return conv_word.join('');

}
order(words);



let words = ("lo2ve he3r so4 i1");
function order(words) {
    let wd = words.split("");
    let conv_word = wd.sort(function(a,b){
        return b.match(/\d+/g) + a.match(/\d+/g);
    })
return conv_word.join("");
}
order(words);





let words = ("lo2ve he3r so4 i1"),
    j = words.replace(/(a-zA-Z0-9+?):/g, '"$1":').replace(/'/g,'"');
    k = JSON.parse(j);

console.log(k);