import React, {useState} from 'react';
import './AlgVw.css';
import HomeHeader from "../../components/homeheader/HomeHeader";
import CondiCard from "../../components/condicard/CondiCard";
import {Link} from "react-router-dom";

function AlgVw() {

    return (
        <>
            <HomeHeader/>
            <main className="outer-page-container">
                <div className="inner-page-container pages">
                    <h2>Algemene Voorwaarden</h2>
                    <h3>Deze Algemene Voorwaarden zijn van kracht met ingang van 1 januari 2025</h3>
                    <CondiCard title="Artikel 1. Definities">
                        <br/>
                        <h6>Deelnemer:</h6> De contractspartij van SuperDate in het kader van deze overeenkomst.
                        <h6> Website:</h6> www.superdate.nl.
                        <h6>Materiaal:</h6> door de Deelnemer aangeleverd materiaal voor plaatsing op de Website, zoals
                        profielnamen, teksten, foto’s en (chat)berichten.
                        <h6>Misbruik:</h6> het gebruik van de Website of het plaatsen van materiaal dat:
                        de rechten of privacy van anderen schendt; ongevraagde commerciële informatie of spam bevat;
                        commerciële SMS-nummers verspreidt; betaalde diensten aanbiedt;
                        grievende of beledigende uitlatingen bevat; een andere identiteit aanneemt;
                        andermans rekeninggegevens gebruikt;
                        inbreuk maakt op intellectuele eigendomsrechten;
                        materiaal openbaar maakt of verveelvoudigt zonder toestemming.
                        <h6>Standaard toegang: </h6>toegang tot de Website waarbij de Deelnemer beperkt gebruik kan
                        maken van de aangeboden diensten.
                        <h6>Exclusieve toegang:</h6> toegang tot de Website waarbij de Deelnemer gebruik kan maken van
                        de diensten die onder exclusieve toegang vallen.
                        <h6>Toegangsvorm: </h6> De specifieke diensten die de Deelnemer op de Website kan gebruiken,
                        zoals Standaard toegang of exclusieve toegang.
                        <h6>Abonnement: </h6> Een overeenkomst waarbij de Deelnemer aangeeft welk bedrag SuperDate in
                        rekening brengt voor een betaalde toegangsvorm gedurende een specifieke periode. Het abonnement
                        wordt, afhankelijk van de gekozen betaalmethode, automatisch verlengd zodra de periode van de
                        betaalde toegangsvorm afloopt.
                        <h6>Inlogcode: </h6> De door SuperDate aan de Deelnemer verstrekte code waarmee toegang tot de
                        Website wordt verkregen.
                    </CondiCard>
                    <CondiCard title="Artikel 2. Overeenkomst">
                        Deze algemene voorwaarden maken integraal onderdeel uit van iedere tussen Website en de
                        Deelnemer gesloten overeenkomst en zijn van toepassing op iedere offerte en overeenkomst.
                        Van deze algemene voorwaarden afwijkende bedingen zijn slechts rechtsgeldig voor zover zij
                        door Website schriftelijk zijn aanvaard.
                        De overeenkomst komt tot stand doordat de Deelnemer het op de Website vermelde
                        inschrijfformulier via de Website aan Website toezendt en dit formulier door Website is
                        ontvangen.
                        De overeenkomst is persoonlijk en niet overdraagbaar.
                        Deelname is alleen mogelijk voor personen van 18 jaar en ouder.
                    </CondiCard>
                    <CondiCard title="Artikel 3. Prijs en betaling.">
                        De op de Website vermelde bedragen zijn inclusief 21% omzetbelasting.
                        De overeenkomst terzake Standaard toegang eindigt met onmiddellijke ingang door opzegging
                        door Website of de Deelnemer.
                        De overeenkomst terzake een Abonnement wordt aangegaan voor onbepaalde duur en wordt tot
                        wederopzegging verlengd. Deze overeenkomst komt tot stand na ontvangst van de betaling van
                        Deelnemer door Website.
                        Door het betalingsformulier op de Website in te vullen machtigt de Deelnemer Website om in
                        het geval van een Abonnement waarbij automatische verlenging van toepassing is, het
                        verschuldigde bedrag periodiek van bankrekening of creditcard van Deelnemer af te schrijven.
                        Dit is afhankelijk van de gekozen betaalmethode en staat ook op Website vermeld bij de
                        uitleg voor de gekozen betaalmethode. Indien het door Deelnemer verschuldigde bedrag na
                        ontvangst van het betalingsformulier door Website niet (geheel) kan worden afgeschreven van
                        de opgegeven bankrekening of creditcard, vervalt de toegang tot de betaalde functies van
                        Website.
                        Indien een betaling door Deelnemer wordt gestorneerd (teruggeboekt via de bank), of wanneer
                        het automatische incasseren van rekening of creditcard van Deelnemer om een andere reden
                        niet is gelukt, betekent dit dat Deelnemer in verzuim is in de nakoming van de
                        betalingsverplichting. Dit veroorzaakt extra kosten welke Website naast de hoofdsom bij
                        Deelnemer in rekening kan brengen. Bij het uitblijven van betaling, kan Website een
                        incassobureau inschakelen. Deelnemer is in dat geval, conform het Besluit Vergoeding voor
                        Buitengerechtelijke Incassokosten, 15% van de hoofdsom met een minimum van € 40,00
                        incassokosten verschuldigd. Alvorens Website een incassobureau inschakelt, zal Website eerst
                        eenmalig een herinnering per e-mail aan Deelnemer sturen.
                        Website kan de tarieven van Abonnementen of het aan het Toegangsvorm verbonden recht van
                        toegang tot de Website eenzijdig aanpassen, uitbreiden of intrekken.
                        Indien er op het moment van het aangaan van een Abonnement sprake is van een promotie- of
                        kortingsactie dan geldt deze alleen voor de eerste abonnementsperiode. Bij een afschrijving
                        voor een volgende abonnementsperiode zal er geen promotie of korting meer worden toegepast.
                        Wanneer hier door Website van wordt afgeweken, zal dit separaat worden aangekondigd.
                        Website is gerechtigd de overeengekomen prijzen voor lopende abonnementen ingaande 1 januari
                        van ieder kalenderjaar te indexeren overeenkomstig het door het Centraal Bureau voor de
                        Statistiek (CBS) gepubliceerde consumentenprijsindexcijfer (CPI), reeks alle bestedingen. De
                        gewijzigde prijs is gelijk aan de geldende prijs per 1 januari, vermenigvuldigd met het
                        gemiddelde maand indexcijfer (jaarmutatie CPI) over de voorgaande twaalf maanden waarvoor op
                        het moment van indexeren de definitieve cijfers bij het CBS beschikbaar zijn. Website heeft
                        het recht om in het kader van de indexering een lager indexeringsbedrag toe te passen dan
                        het indexeringsbedrag dat correspondeert met de uitkomst van voormelde formule. Indexering
                        zal alleen plaatsvinden voor lopende abonnementen waarvan de looptijd op het moment van
                        indexeren minimaal 180 dagen bedraagt.
                    </CondiCard>
                    <CondiCard title="Artikel 4. Herroepingsrecht">
                        De Deelnemer heeft de mogelijkheid de overeenkomst terzake een Abonnement zonder opgave van
                        redenen te ontbinden gedurende ten minste 14 dagen, ingaande op de dag van het aangaan van
                        de overeenkomst (herroepingsrecht).
                        De Deelnemer die gebruik maakt van het herroepingsrecht, dient dit ondubbelzinnig aan de
                        Website kenbaar te maken, bij voorkeur via het contactformulier op de Website
                        Omdat Deelnemer na totstandkoming van de overeenkomst direct toegang heeft tot en gebruik
                        kan maken van de overeengekomen diensten, is de Deelnemer ingeval van herroeping aan de
                        Website een redelijke vergoeding voor deze diensten verschuldigd van € 1,50 voor iedere dag
                        of dagdeel dat de overeenkomst tot aan het moment van herroeping heeft geduurd, met een
                        maximum van het bedrag dat de Deelnemer op het moment van herroeping reeds aan
                        abonnementsgeld aan de Website heeft betaald. Het dientengevolge verschuldigde bedrag zal
                        door de Website mogen worden verrekend met het door de Deelnemer reeds betaalde
                        abonnementsgeld; een eventueel na verrekening resterend saldo zal aan de Deelnemer worden
                        teruggestort.
                    </CondiCard>
                    <CondiCard title="Artikel 5. Gebruikersrechten">
                        Website verleent aan de Deelnemer het niet-exclusieve recht van toegang tot de Website om de
                        op de Website geregistreerde gegevens in te zien.
                        Het in het vorige lid bedoelde recht van toegang omvat uitsluitend het recht om de Website
                        te gebruiken overeenkomstig het doel waarvoor de Website is ontwikkeld.
                        De Deelnemer is volledig verantwoordelijk voor het inloggen op de Website en het gebruik van
                        de door Website aan de Deelnemer verstrekte inlogcode.
                        De Deelnemer heeft geen recht op aflevering of andere verstrekking van de inlogcode en
                        evenmin om het in lid 1 van dit artikel bedoelde recht over te dragen.
                        De Deelnemer zal de Website uitsluitend rechtmatig gebruiken en zich in ieder geval
                        onthouden van:
                        het gebruiken of toegang proberen te krijgen tot computersystemen en/of netwerken van
                        anderen dan zichzelf;
                        onderzoek of beproeving van de beveiliging van de Website of netwerken van anderen dan
                        zichzelf;
                        het aantasten van de werking van de Website of netwerken van anderen dan zichzelf;
                        het vervreemden, verhuren of verstrekken aan derden, ten behoeve van derden gebruiken,
                        wijzigen, verwijderen of onbruikbaar maken van de door het in artikel 4.1 bedoelde recht
                        toegankelijke gegevens van anderen dan zichzelf;
                        het ontwerpen, vervaardigen, introduceren en verspreiden van computervirussen en andere
                        computerprogrammatuur die mogelijk schade aan de Website zou kunnen veroorzaken;
                        het schenden van intellectuele eigendomsrechten en/of andere rechten van andere gebruikers.
                        Gedragingen van derden die gebruik maken van de aan die Deelnemer verstrekte inlogcode
                        worden aan de Deelnemer toegerekend als ware die gedragingen van de Deelnemer zelf.
                        Website heeft het recht om het gebruik door de Deelnemer van de inlogcode zonder
                        voorafgaande ingebrekestelling tijdelijk of blijvend te deactiveren, indien de Deelnemer
                        enige verplichting jegens Website niet nakomt.
                    </CondiCard>
                    <CondiCard title="Artikel 6. Inlogcode">
                        De inlogcode van de Deelnemer is geheim. Website en de Deelnemer nemen redelijke maatregelen
                        om te voorkomen dat anderen dan de Deelnemer kennis kunnen nemen van de aan de Deelnemer
                        verstrekte inlogcode.
                        Indien Website constateert en/of redelijkerwijs vermoedt dat anderen dan de Deelnemer
                        gebruik (kunnen) maken van de inlogcode of indien de Deelnemer Website van een zodanig
                        gebruik op de hoogte stelt, blokkeert Website met onmiddellijke ingang de toegang via de
                        bewuste inlogcode tot de Website. Website stelt de Deelnemer, voor zover nodig, op de hoogte
                        van het onbevoegde gebruik en de blokkering van de inlogcode en verstrekt zo spoedig
                        mogelijk na de blokkering een vervangende inlogcode aan de Deelnemer.
                        Indien het onbevoegde gebruik van een inlogcode niet aan Website kan worden toegerekend,
                        dient de Deelnemer aan Website de aan de blokkering en vervanging verbonden administratieve
                        kosten aan Website te vergoeden, alsmede de kosten van het onbevoegde gebruik.
                    </CondiCard>
                    <CondiCard title="Artikel 7. Plaatsing van materiaal">
                        De Deelnemer plaatst materiaal op de Website op eigen risico.
                        De Deelnemer onthoudt zich van het plaatsen van profielnamen, teksten en foto's op de
                        Website die aanstootgevend, racistisch of wettelijk verboden zijn.
                        De Deelnemer onthoudt zich van het plaatsen van materiaal op de Website waardoor overige
                        Deelnemers contact met de Deelnemer kunnen opnemen zonder gebruik te maken van de specifiek
                        door Website op de Website aangeboden contactmethodes. De Deelnemer plaatst op de Website
                        bijvoorbeeld niet zijn woonadres, telefoonnummer, e-mailadres of links naar internetadressen
                        waar dergelijke gegevens te achterhalen zijn. Ook indirecte verwijzingen of uitlokkingen tot
                        het verstrekken van deze gegevens door andere Deelnemers zijn niet toegestaan. De Deelnemer
                        onthoudt zich eveneens van het op de Website plaatsen van in het vorige lid bedoelde
                        gegevens met betrekking tot andere Deelnemers.
                        Website zal het in de vorige leden bedoelde materiaal verwijderen zonder voorafgaand overleg
                        met en melding aan de Deelnemer of andere Deelnemers. Bij overtreding van bovenstaande
                        regels zal hiertegen worden opgetreden.
                        Website kan materiaal wat niet overeenkomt met de richtlijnen voor Website zonder
                        voorafgaand overleg met en melding aan de Deelnemer of andere Deelnemers verwijderen.
                    </CondiCard>
                    <CondiCard title="Artikel 8. Aanbiedingen per e-mail">
                        De Deelnemer die zich bij inschrijving of elders op Website door het plaatsen van een vinkje
                        expliciet akkoord heeft verklaard met het ontvangen van nieuws en Website-aanbiedingen,
                        geeft hierdoor toestemming voor het versturen van nieuwsbrieven en commerciële boodschappen
                        aan het e-mailadres van de Deelnemer. Doorgaans zijn dit unieke acties zoals kortingsacties.
                        De Deelnemer kan zich hiervoor te allen tijde uitschrijven via de uitschrijflink onderaan
                        een dergelijke boodschap. De wijze waarop persoonsgegevens en het e-mailadres worden
                        verwerkt, staat beschreven in het Privacy- en cookiebeleid.
                    </CondiCard>
                    <CondiCard title="Artikel 9. Misbruik">
                        Website kan de overeenkomst met de Deelnemer bij diens misbruik met onmiddellijke ingang
                        beëindigen, materiaal ontoegankelijk maken en/of verwijderen van de Website, het gebruik
                        door de Deelnemer van op de Website aangeboden diensten beperken en/of de toegang tot de
                        Website blokkeren zonder voorafgaande mededeling aan of overleg met de Deelnemer.
                        Bij opzegging van de overeenkomst wegens misbruik heeft de Deelnemer geen recht op
                        restitutie van het reeds door hem betaalde abonnementsgeld.
                        Website is gerechtigd zonder nadere waarschuwing of ingebrekestelling, en zonder dat daartoe
                        rechterlijke tussenkomst is vereist, een direct opeisbare boete van € 1.000,- (duizend euro)
                        per feit van misbruik aan de Deelnemer in rekening te brengen, waarbij het misbruik van
                        (persoons)gegevens, rekeninggegevens, foto's of een ander materiaal en ieder verzonden
                        bericht elk geldt als één afzonderlijk feit, onverminderd het recht van Website om nadere
                        rechtsmaatregelen tegen de Deelnemer te nemen en schadevergoeding te eisen, ook voor het
                        herstel van door de Deelnemer veroorzaakte misbruik.
                    </CondiCard>
                    <CondiCard title="Artikel 10. Gegevens">
                        De wijze waarop de privacy wordt gewaarborgd, staat beschreven in het Privacy- en
                        cookiebeleid.
                        De Deelnemer zal Website vrijwaren van alle vorderingen van derden op basis van de stelling
                        dat door Website verwerkte gegevens, het verwerken van gegevens en/of het resultaat van die
                        verwerking in strijd zijn met het geldende recht.
                    </CondiCard>
                    <CondiCard title="Artikel 11. Aansprakelijkheid">
                        Website is nimmer aansprakelijk voor de mogelijke (gevolg)schade van de Deelnemer of van
                        derden.
                        De Deelnemer vrijwaart Website terzake alle aanspraken van derden tot vergoeding van
                        (gevolg)schade, die verband houden met deze overeenkomst.
                        Indien en voor zover een Nederlandse gerechtelijke instantie niettemin oordeelt dat Website
                        aansprakelijk is voor de (gevolg)schade van een Deelnemer of een derde en gehouden is om de
                        schade geheel of gedeeltelijk te vergoeden, wordt de hoogte van de schadevergoeding beperkt
                        tot het door de Deelnemer betaalde abonnementsgeld.
                    </CondiCard>
                    <CondiCard title="Artikel 12. Toepasselijk recht en bevoegde rechter">
                        Op deze overeenkomst is Nederlands recht van toepassing.
                        In geval van een geschil tussen Website en de Deelnemer is de rechtbank te Arnhem bevoegd
                        tot kennisneming van het geschil of, ter keuze van Website, de rechtbank die anders bevoegd
                        zou zijn van het geschil kennis te nemen.
                    </CondiCard>
                    <CondiCard title="Artikel 13. Wijzigingen voorwaarden">
                        Website heeft het recht de voorwaarden te wijzigen en de gewijzigde voorwaarden op bestaande
                        overeenkomsten van toepassing te verklaren, waartoe wijzigingen dertig dagen na bekendmaking
                        aan Deelnemer, in werking treden.
                    </CondiCard>
                    <Link to="/" className="home-link">⬅ Back to Home</Link>
                </div>
            </main>
        </>
    );
}

export default AlgVw;
