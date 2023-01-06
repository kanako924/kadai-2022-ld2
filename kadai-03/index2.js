for (let number = 2; number <= 10000; number = number + 1) {

    let isPrime = true
    for (let yakusu = 2; yakusu < number; yakusu++) {
        if(number % yakusu === 0) {
             isPrime = false
             console.log(number,'は',yakusu,'で割り切れるので素数ではありません')
             break 
         }
     }
     if(isPrime){
         console.log(number,'は素数です')
     }
    
}


