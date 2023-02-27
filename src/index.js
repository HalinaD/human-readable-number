module.exports = function toReadable (number) {
    if (number === 0) {return 'zero'}

    const o = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const td = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const doz = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const h = ['hundred']

    
    if (number <= 9){
        return o[number]}
    if (number >= 10 && number <= 19){
        return td[number - 10]}

    if (number >= 20 && number <= 99 && number%10 === 0)
    {return doz[Math.floor(number / 10)]}

   if (number >= 20 && number <= 99)
   {return doz[Math.floor(number / 10)] + " " + o[number % 10]}

    

    if (number >= 100 && number%100 === 0){
        return o[Math.floor(number / 100)] + " " + h}

    if (number >= 100 && number%10 === 0){
        return o[Math.floor(number / 100)] + " " + h + " " + doz[Math.floor((number % 100) / 10)]}

    if (number >= 100 && number%100 <= 9){
        return o[Math.floor(number / 100)] + " " + h + " " + o[number % 10]}

    if (number >= 100 && number%100 >= 9 && number%100 < 20){
        return o[Math.floor(number / 100)] + " " + h + " " + td[number % 10]}

    else {return o[Math.floor(number / 100)] + " " + h + " " + doz[Math.floor((number % 100) / 10)] + " " + o[number % 10]}
     }
     
     //console.log(toReadable(983));

