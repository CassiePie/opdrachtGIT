"use strict";
let getallen = [];
let aantal = parseInt(prompt('Hoeveel getallen wil je ingeven?', 3));
aantal = controleAantal(aantal);


function controleAantal(aantal) {
    if (aantal == null) {
        document.write("U hebt geannuleerd!");
        return false;
    } else if (aantal.length == 0) {
        document.write("U heeft niets ingegeven!");
        return false;
    } else if (!isNaN(aantal)) {
        return aantal;
    } else {
        document.write('Dit is geen correcte ingave!');
        return 0;
    }
}

if (aantal > 0) {
    for (var i = 1 ; i <= aantal; i++) {
        var input = controleAantal(prompt(`Geef getal ${i} in`));
        getallen.push(input);


        function controleAantal(input) {
            if (input == null) {
                return 'fout';
            } else if (input.length == 0) {
                return 'fout';
            } else if (!isNaN(input)) {
                return input;
            } else {
                return 'fout';
            }
        }         
    }
}
document.write(getallen);