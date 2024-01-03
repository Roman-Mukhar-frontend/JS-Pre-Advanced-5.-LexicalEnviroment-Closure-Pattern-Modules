    // let chipsCount = 100;
    // let chipsPrice = 35;
    // let bank = 1000;

    // function checkBank(){
    //     return `Bank: ${bank}`
    // }

    // function checkStorage(){
    //     return `Chips count = ${chipsCount}`
    // }

    // function sellChips(count){
    //     if(count <= chipsCount){
    //         chipsCount -= count;
    //         bank += count * chipsPrice;
    //         return `Chips: ${count * chipsPrice} грн`
    //     }
    //     return `Error: bad count`
    // }

    // // return {
    // //     bank: checkBank,
    // //     storage: checkStorage,
    // //     sell: sellChips
    // // }

    // export { checkBank as bank, checkStorage, sellChips};

    let cash = 1000;
    let countBeer = 100;
    let countWine = 50;
    let countPepsi = 80;
    let priceBeer = 20;
    let priceWine = 100;
    let pricePepsi = 40;

    function checkBank(){
        return `Bank: ${cash} грн`
    }

    function checkStorage(){
        return `Beer on the balance = ${countBeer} шт, Wine on the balance = ${countWine} шт, Pepsi on the balance = ${countPepsi} шт`
    }

     function selling(beer, wine, pepsi){
        let sales = true;
        if (beer > countBeer){
            sales = false;
            alert(`Вибачте, але на складі залишилось ${countBeer} шт пива`)
        }
        if (wine > countWine){
            sales = false;
            alert(`Вибачте, але на складі залишилось ${countWine} шт вина`)
        }
        if (pepsi > countPepsi){
            sales = false;
            alert(`Вибачте, але на складі залишилось ${countPepsi} шт пепсі`)
        }

        if(sales){
            countBeer -= beer;
            countWine -= wine;
            countPepsi -= pepsi;
            let summBeer = beer * priceBeer;
            let summWine = wine * priceWine;
            let summPepsi = pepsi * pricePepsi;
            let summ = summBeer + summWine + summPepsi
            cash += summ;
            
            return `
                Пиво: ${beer} шт * ${priceBeer} грн = ${summBeer} грн;
                Вино: ${wine} шт * ${priceWine} грн = ${summWine} грн;
                Пепсі: ${pepsi} шт * ${pricePepsi} грн = ${summPepsi} грн;
                Всього: ${summ} грн`
        }

            else{
                return 'Кількість обраного товару є більшою, ніж на складі'
            }
     }
    export { checkBank, checkStorage, selling };
