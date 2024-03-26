function konversi() {
    var dari = document.getElementById("dari").value;
    var ke = document.getElementById("ke").value;
    var input = document.getElementById("input").value;
    var hasil;

    if (dari === ke) {
        hasil = input;
    } else {
        switch (dari) {
            case "desimal":
                switch (ke) {
                    case "biner":
                        hasil = desimalKeBiner(input);
                        break;
                    case "oktal":
                        hasil = desimalKeOktal(input);
                        break;
                    case "heksa":
                        hasil = desimalKeHeksa(input);
                        break;
                }
                break;
            case "biner":
                switch (ke) {
                    case "desimal":
                        hasil = binerKeDesimal(input);
                        break;
                    case "oktal":
                        hasil = binerKeOktal(input);
                        break;
                    case "heksa":
                        hasil = binerKeHeksa(input);
                        break;
                }
                break;
            case "oktal":
                switch (ke) {
                    case "desimal":
                        hasil = oktalKeDesimal(input);
                        break;
                    case "biner":
                        hasil = oktalKeBiner(input);
                        break;
                    case "heksa":
                        hasil = oktalKeHeksa(input);
                        break;
                }
                break;
            case "heksa":
                switch (ke) {
                    case "desimal":
                        hasil = heksaKeDesimal(input);
                        break;
                    case "biner":
                        hasil = heksaKeBiner(input);
                        break;
                    case "oktal":
                        hasil = heksaKeOktal(input);
                        break;
                }
                break;
        }
    }

    document.getElementById("hasil").innerHTML = "Hasil : " + hasil;
    return false;
}

function desimalKeBiner(desimal) {
    // Implementasi konversi desimal ke biner
    return desimal.toString(2);
}

function desimalKeOktal(desimal) {
    // Implementasi konversi desimal ke oktal
    return desimal.toString(8);
}

function desimalKeHeksa(desimal) {
    // Implementasi konversi desimal ke heksa
    return desimal.toString(16);
}

function binerKeDesimal(biner) {
    // Implementasi konversi biner ke desimal
    return parseInt(biner, 2);
}

function binerKeOktal(biner) {
    // Implementasi konversi biner ke oktal
    return parseInt(biner, 2).toString(8);
}
    function binerKeHeksa(biner) {
        // Implementasi konversi biner ke heksa
        return parseInt(biner, 2).toString(16);
    }
    
    function oktalKeDesimal(oktal) {
        // Implementasi konversi oktal ke desimal
        return parseInt(oktal, 8);
    }
    
    function oktalKeBiner(oktal) {
        // Implementasi konversi oktal ke biner
        return parseInt(oktal, 8).toString(2);
    }
    
    function heksaKeDesimal(heksa) {
        // Implementasi konversi heksadesimal ke desimal
        return parseInt(heksa, 16);
    }
    
    function heksaKeBiner(heksa) {
        // Implementasi konversi heksadesimal ke biner
        return parseInt(heksa, 16).toString(2);
    }