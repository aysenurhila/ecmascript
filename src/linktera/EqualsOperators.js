function EqualsOperators(){

    // JS ortaminda == ve === olmak uzere 2 tip esitlik soz konusudur.
    // == deger esitligine bakar
    // === deger ve tip esitligine bakar
    
    const number1 = Math.round(Math.random() * 3);
    const number2 = Math.round(Math.random() * 3);


    // js de === ile degisken kullanimi daha dogru ve guvenli bir kullanimdir.

    if(number1 === number2){
        return <>Tip ve Deger esitligi var</>
    }
    if(number1 == number2){
        return <>Deger esitligi var</>
    }

    return <>Deger esitligi yok</>
}

export default EqualsOperators;