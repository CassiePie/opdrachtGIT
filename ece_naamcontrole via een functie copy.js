
        let voornaam = prompt('Wat is uw naam?');
        let controler1 = controlerVoornaam(voornaam);

        if (controler1 != "") {
            let achternaam = prompt('Wat is uw achternaam?');
            let controler2 = controlerAchternaam(achternaam);

            if (controler2 != "") {
                let capVollenaam = `${controler1}  ${controler2}`;
                document.write(`<p>Hey, ${capVollenaam}!<p/>`);
            }
        }

        function controlerVoornaam(voornaam) {
            if (voornaam == null) {
                document.write("Geannuleerd!");
                return false;
            } else if (voornaam.length == 0) {
                document.write("Niets ingegeven!");
                return false;
            } else if (voornaam.length <= 2 ) {
                document.write("Er zijn minder dan 2 karakters ingegeven");
                return false;
            } else if (voornaam.length >= 14 ) {
                document.write("De invoer is te lang!");
                return false;
            } else {  
                let capVoornaam = voornaam.charAt(0).toUpperCase() + voornaam.slice(1);
                return capVoornaam;
            }
        }

        function controlerAchternaam(achternaam) {
            if (achternaam == null) {
                document.write("Geannuleerd!");
                return false;
            } else if (achternaam.length == 0) {
                document.write("Niets ingegeven!");
                return false;
            } else if (achternaam.length <= 2 ) {
                document.write("Er zijn minder dan 2 karakters ingegeven");
                return false;
            } else if (achternaam.length >= 14 ) {
                document.write("De invoer is te lang!");
                return false;
            } else {  
                let capAchternaam = achternaam.charAt(0).toUpperCase() + achternaam.slice(1);
                return capAchternaam;
            }
        }
