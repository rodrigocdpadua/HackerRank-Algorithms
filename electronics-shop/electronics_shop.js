function getMoneySpent(keyboards, drives, b) {
    let price = -1;

    keyboards.map(keyboard =>{
      drives.map(drive =>{
        let priceCurrent = keyboard + drive;
        if(priceCurrent >= price && priceCurrent <= b){
          price = priceCurrent;
        }
      });
    });

    return price;
}

key = [3, 1];
driv = [5, 2, 8];
bud = 10;

console.log(getMoneySpent(key, driv, bud));