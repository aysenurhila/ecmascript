function Variables() {
    // variables (Primative Type => value type (number,string,boolean))
    // Complex Type => Referans Type (Function,Class,Regex, Array)
    // ES6 ile var yerini let ve const variable tanımlarına bıraktı.
    // var name = 'Ali'; // function level scope
    // if (true) { // block level scope
    //  var name = 'Can';
    // }
    let name = 'Ali';
    // const değişkenlerde değer 1 defaya mahsus atanır ve bu değer aşağıki satırdaki kodlarda değiştirilemez. (const ile let arasındaki far budur.)
    const number = 5;
    if (false) {
        let name = 'Can';
        // number = 10; // const değer ataması hata verir.
        return <>{name}</>;
    }
    return <div>{name}</div>;
}
export default Variables;

// Variables component ismi ile function baska bir sayfada goruntulenmek icin disari cikacak ise default keyword kullaniyoruz.

// birden fazla component tek bir js dosyasinda olabilir ama tek bir tane default ile export edilmis component tanimlanmalidir.