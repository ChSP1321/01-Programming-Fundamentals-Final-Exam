function solve(input) {
 
    let inputText = input.shift();
    let pattern = /((#|\|)\b[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}(#|\|))[0-9]{2}\/[0-9]{2}\/[0-9]{2}(#|\|)[0-9]+(#|\|)|((#|\|)\b[A-Z][a-z]{2,}(#|\|))[0-9]{2}\/[0-9]{2}\/[0-9]{2}(#|\|)[0-9]+(#|\|)/g
    let patternProd = /[A-Z][a-z]{2,}/g
    let patternDate = /[0-9]{2}\/[0-9]{2}\/[0-9]{2}/g
    let patternCal = /(#|\|)[0-9]+\1/g
    let newPattCal = /([0-9]+)/g
    let allMatches = inputText.match(pattern);
    let product;
    let dateProd;
    let caloriesProd;
    let firstCaloriesProd = '';
    let productArr = [];
    let dateProdArr = [];
    let allCal = 0;
    let days = 0;

    for(i = 0; i < allMatches.length; i++){
        product = allMatches[i].match(patternProd);
        productArr.push(product);
        dateProd = allMatches[i].match(patternDate);
        dateProdArr.push(dateProd);
        firstCaloriesProd += allMatches[i].match(patternCal);
        caloriesProd = firstCaloriesProd.match(newPattCal);   
    }
    for(k = 0; k < caloriesProd.length; k++){
       allCal += Number(caloriesProd[k]);
    }
    if(allCal >= 2000){
        let days = Math.trunc(allCal / 2000);
        console.log(`You have food to last you for: ${days} days!`);
    }else{
        console.log(`You have food to last you for: 0 days!`)
    }
    for(l = 0; l < productArr.length; l++){
        console.log(`Item: ${productArr[l].join(" ")}, Best before: ${dateProdArr[l]}, Nutrition: ${caloriesProd[l]}`);
     }

}

solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);