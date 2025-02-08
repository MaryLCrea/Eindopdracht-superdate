### *SUPERDATE DE APPLICATIE* 
Groningen, 9 februari 2025

## Inhoudsopgave:
1. Inleiding
2. Technische benodigdheden
3. Installatie instructies
4. Inloggen en accounts
5. Overige npm commando's 

## 1. Inleiding:
Welkom bij Superdate. SuperDate is een datingsite waarbij je zelf een profiel aan kunt maken en profielen van andere gebruikers kunt 
bekijken. Naast het bekijken van profielen zit er ook een filterfunctie op waarmee gericht gezocht kan worden op geslacht en leeftijd. Het eigen profiel 
kan ingevuld en gewijzigd worden en er kan een foto worden geupload welke naar eigen wensen in te stellen is qua formaat. Verder is er een recepten pagina, 
waarop door geklikt kan worden en tot een derde laag, echter kan er ook gezocht worden middels 1 tot 3 ingredienten die je graag wilt gebruiken in het recept. 

# Screenshot van de dating profielen pagina:

![](src/assets/profiel-pagina.png)

## 2. Technische benodigdheden:
De bijbehorende css staat zoveel mogelijk in de pagina map, maar daar waar meerdere pagina's gebruik maakten van dezelfde css, 
heb ik het in de app.css geplaatst met in app.css verwijzingen naar waar de css voor dient. De css die behoort tot de pagina in dezelfde map heb ik
zoveel mogelijk logische namen gegeven, zodat direct duidelijk is waar de css voor dient. De data in de dating profielen is dummy data opgehaald middels een api en natuurlijk 
staan op een echte datingsite geen telefoonnummers, email- en webadressen, ik heb hier echter wel gebruik van gemaakt in de weergave op de pagina, omdat de data die middels
de dating api op te halen is vrij summier is. De Css reset is te vinden in de index.css. De applicatie maakt voor het inloggen en registeren gebruik van de Novi backend welke
middels een link in de applicatie zelf bereikt wordt. Hier hoef je verder niets voor te doen, de backend server is continue online. 
Mocht je meer informatie willen over de backend bezoek dan deze link: https://github.com/hogeschoolnovi/novi-educational-backend-documentation/blob/main/README.md#0-test

## 3. Installatie instructies

Het opstarten van de applicatie:
- Start Webstorm op. 
- Ga (rechtsbovenin) naar open en zoek daar de project map en klik op ok of ga naar get from VCS (rechtsbovenin) en plak vervolgens de 
  repository link: https://github.com/MaryLCrea/Eindopdracht-superdate en klik op clone.
- Open links onderin de terminal.
- Voer hierna een npm install uit door dit te typen in de terminal of wanneer webstorm hier (rechtsonderin) zelf mee komt door te klikken op install.
- Nadat Webstorm hiermee klaar is, voer je in te terminal npm install in + enter. 
- Vervolgens opent de webpagina van de SuperDate applicatie zich automatisch in een nieuw scherm. Mocht dit niet het geval zijn, open dan deze link: http://localhost:3000 

## 4. Inloggen en accounts:
Om in te loggen is het handig om zelf een account aan te maken via de home-pagina. Dit aangezien de Novi-backend de gegevens vaak al binnen een 
uur ververst worden, waardoor ik geen inlog gegevens kan verstrekken. Vul op de registratie pagina je e-mailadres in, en bedenk zelf een gebruikersnaam
en wachtwoord. Let op: het wachtwoord moet minimaal uit 6 tekens bestaan. 

## 5. Overige npm commando's
Mocht je willen stoppen met het draaien van de applicatie dan kun je de toetscombinatie ctl + c intypen en vervolgens op yes of no klikken. 


Veel plezier en succes met de applicatie!





