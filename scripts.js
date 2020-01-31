var sentence ="Salim Salim Salim to Portland. Salim also went to Seattle";
var sentenceArray = sentence.split(" ");
//alert(sentenceArray);


var hash = {};

sentenceArray.forEach(function(word) {  

  if (!hash[word]) { 
   hash[word] = 1;
  }
  hash[word] = (hash[word] + 1)
});

console.log(hash);
