var milkBeer = ['milk', 'beer', 'beer', 'milk', 'milk']
var goodBad = ['milk','beer']
for (var i = 0; i < milkBeer.length; i++) {
    if (milkBeer[i].includes(goodBad[0])){
        console.log(`${i} good`);
    }else{
        console.warn(`${i} bad`);
    }
}