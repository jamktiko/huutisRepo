# Projektisuunnitelma

- [Projektisuunnitelma](#projektisuunnitelma)
  - [Projektin tiedot](#projektin-tiedot)
    - [Termit ja lyhenteet](#termit-ja-lyhenteet)
    - [Viitteet](#viitteet)
  - [Projektin sisältö](#projektin-sis%C3%A4lt%C3%B6)
    - [Johdanto](#johdanto)
    - [Projektin tausta ja tavoitteet](#projektin-tausta-ja-tavoitteet)
    - [Tuotokset](#tuotokset)
    - [Projektin hyväskyminen](#projektin-hyv%C3%A4skyminen)
  - [Toimintasuunnitelma](#toimintasuunnitelma)
    - [Projektin aloittamisesta](#projektin-aloittamisesta)
    - [Projektin toteuttamisesta](#projektin-toteuttamisesta)
    - [Projektin testaamisesta](#projektin-testaamisesta)
    - [Projektin lopettamisesta](#projektin-lopettamisesta)
  - [Projektin resurssit](#projektin-resurssit)
    - [Projektin organisaatio](#projektin-organisaatio)
    - [Ohjausryhmä](#ohjausryhm%C3%A4)
    - [Työryhmät](#ty%C3%B6ryhm%C3%A4t)
    - [Asiakkaan vastuut](#asiakkaan-vastuut)
    - [Työkalut](#ty%C3%B6kalut)
  - [Aikataulu](#aikataulu)
  - [Raportointi ja kommunikointi](#raportointi-ja-kommunikointi)
    - [Sisäinen raportointi](#sis%C3%A4inen-raportointi)
    - [Asiakasraportointi](#asiakasraportointi)
    - [Viikkopalaverikäytäntö/Daily Scrum](#viikkopalaverik%C3%A4yt%C3%A4nt%C3%B6daily-scrum)
    - [Kommunikointitavat](#kommunikointitavat)
  - [Dokumentointi](#dokumentointi)
    - [Dokumenttipohjat](#dokumenttipohjat)
    - [Dokumenttien hallinta](#dokumenttien-hallinta)
  - [Riskien hallinta](#riskien-hallinta)
  - [Avoimet asiat](#avoimet-asiat)

## Projektin tiedot

\<Huutoäänestysäppi>

Tekijät: Severi Natunen, Jyri Lahtinen, Timo Saarela, Antti Raita

### Termit ja lyhenteet

| Termi                  | Kuvaus                                                                                                                        |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Git                    | Versionhallintajärjestelmä                                                                                                    |
| GitHub                 | Palvelu joka on rakennettu GIT versionhallinnan ympärille                                                                     |
| Markdown               | Merkkauskieli                                                                                                                 |
| TCHOPS                 | Henkilökohtainen oppimisuunnitelma TIcorporateen                                                                              |
| Scrum                  | Ketterä sovelluskehityksen viitekehitys projektinhallintaan                                                                   |
| Artifakti              | Scrumissa toteuttava asiakirja, joka säilytetään.                                                                             |
| HLTP                   | High Level Testing Plan, jonka avulla suunnittellaan testausta.                                                               |
| Sprint review          | Scrum tapahtuma, jossa arvioidaan miten kulunut sprintti meni.                                                                |
| Retrospektiivi         | Sprint retrospective. Scrum tapahtuma, jossa tiimi reflektoi toimintaansa ja suunnittelee parannuksia seuraavaan sprintttiin. |
| Product/Sprint backlog | Luettelo tuotteeseen tehtävistä ominaisuuksista.                                                                              |

### Viitteet

| Viittaus | Materiaali                                                           |
| -------- | -------------------------------------------------------------------- |
| HLTP     | <https://github.com/jamktiko/huutisRepo/blob/main/documents/hltp.md> |

## Projektin sisältö

### Johdanto

Kehittämme sovelluksen, joka auttaa ryhmiä muodostamaan yhteisiä päätöksiä äänestämällä. Tarkoituksemme on kehittää sovellus, joka keskittyy käytettävyyteen ja suorituskykyyn. Sovelluksen pääominaisuutena on luoda huoneita, joissa ryhmäläiset äänestävät huoneen luojan määrämistä vaihtoehdoista. Lopussa tulokset julkaistaan kaikkien nähtäviksi. Sovellukseen kehitetään monipuolisia vaihtoehtoja päätöksen tekemiseen. Tämä dokumentti toimii projektisuunnitelmana.

### Projektin tausta ja tavoitteet

Kehitetään sovellus, joka helpottaa ongelmanratkaisua ryhmissä. Sovellus on suunnattu kenelle tahansa, joka omistaa älypuhelimen, mutta erityisesti nuorille aikuislle esim. opiskelija - ja kaveriporukoille. Tavoitteena on luoda on helppokäyttöinen ja nopea sovellus päätösten tekemiseen. Tavoitteena on pitää sovellus hyvin nopeana ja helppokäyttöisenä.

### Tuotokset

Projekti tuottaa

- Projektisuunnitelma
- Esitutkimus
- Sprint backlog
- Product backlog
- Sovellus
- Loppuraportti
- Retrospektiivi
- Sprint review
- Viikottaiset raportit
- Henkilökohtaiset portfoliot

### Projektin hyväksyminen

Projekti on hyväksyttävässä kunnossa, kun sovellus on toimivuudeltaan ja ulkoasultaan julkaisukelpoinen. Hyväksyminen vaatii, että sitä on testattu loppukäyttäjien kanssa ja on todettu, että sovellus on saavuttanut halutun helppokäyttöisyyden ja suorituskyvyn.

## Toimintasuunnitelma

### Projektin aloittamisesta

Ryhmä käy läpi konspetin ja tekee roolien jaon. Projekti jatkuu esituotannolla, jonka aikana tehdään projektisuunnitelma ja esitutkimus. Ryhmänä suoritetaan Googlen design sprint, kunnes sovellus on sen mukaan hyväksyttävä. Projektin alussa jokainen ryhmän jäsen alkaa kirjoittamaan henkilökohtaista TCHOPSia.

### Projektin toteuttamisesta

Sovelluskehityksessä tulemme käyttämään scrum viitekehystä projektinhallintaan. Jokainen ryhmän jäsen toteuttaa määrätyn roolin tehtäviänsä, mutta projekti tehdään ryhmätyönä yhteisesti. Projekti suoritetaan kahden viikon mittaisisssa sprinteissä, joiden alku on sprint planning ja niiden loppu on sprint review ja retrospektiivi. Sprintin aikana pidetään päivittäisiä scrum tapaamisia. Scrum tapahtumien ulkopuolella työskentelemme omissa tehtävissämme. Jokainen ryhmän jäsen kirjaa ylös työtunnit.

Sovelluksemme antaa ryhmälle työkalun yhteisiin päätöksiin, millä taataan, että jokaisella ryhmässä on ääni. Tämä edesauttaa sosiaalista ja kulttuurillista kehitystä, koska se antaa jokaiselle tasavertaisen mahdollisuuden tulla kuulluksi. Sovelluksemme edistää taloudellista kestävyyttä, koska se ei perustu velkaantumiseen tai luonnonvarojen liika käyttöön. Projektimme vaikutus ympäristön kuormitukseen on lähes olematon.

### Projektin testaamisesta

Sovellusta testataan koko projektin ajan toimivuuden varmistamiseksi. Toimivan version valmistuessa sovellusta aletaan testaamaan loppukäyttäjillä runsaasti. Suoritamme erilaisia käytettävyyden testejä teknisellä puolella. Suorituskykyä testataan parhaan tehokkuuden saamiseksi. Testauksen suunnitteluun käytetään HLTP:tä.

### Projektin lopettamisesta

Projektin lopuksi sovellusta demotaan ja teemme loppuesityksen, jossa kerrotaan koko tuotannosta. Tuotetaan myös projektin loppuraportti, jossa kerrotaan syksyn aikana opittua ja tehtyä sekä reflektoidaan. Projekti varmuuskopioidaan sekä poistetaan versionhallinasta. Dokumentaatio palautetaan vastuuopettajalle. Projekti julkaistaan avoimena lähdekoodina. Jokainen ryhmän jäsen tekee henkilökohtaisen näyteportfolion projektin lopuksi.

## Projektin resurssit

### Projektin organisaatio

| Nimi           | Rooli(t)                    | Yhteystiedot           |
| -------------- | --------------------------- | ---------------------- |
| Antti Raita    | Scrum Master, Liiketoiminta | N1472@student.jamk.fi  |
| Severi Natunen | Product Owner, UI/UX        | AA4352@student.jamk.fi |
| Jyri Lahtinen  | UI/UX                       | N9516@student.jamk.fi  |
| Timo Saarela   | Tekniikka, Testaus          | N4065@student.jamk.fi  |

### Ohjausryhmä

| Nimi           | Rooli(t)       | Yhteystiedot           |
| -------------- | -------------- | ---------------------- |
| Teemu Pölkki   | Vastuuopettaja | teemu.polkki@jamk.fi   |
| Jukka Riikonen | Ohjaaja        | jukka.riikonen@jamk.fi |
| Jere Lamberg   | Ohjaaja        | jere.lamberg@jamk.fi   |
| Antony Smal    | Ohjaaja        | antony.smal@jamk.fi    |

### Työkalut

- Angular
- Tietokone
- Adobe Creative Cloud
- Visual Studio Code
- GitHub
- Git
- Figma
- Firebase
- ZenHub
- Matkakaiutin

## Raportointi ja kommunikointi

### Sisäinen raportointi

Scrummaster toimittaa viikottaisen raportin sekä kaikkiin tapaamisiin käytetyt minuutit ohjaajille. Sen lisäksi scrummaster tekee loppuraportin tuotantoprosessista.

### Palaverikäytänteet (Daily Scrum, Sprint Backlog, jne)

Projektin viikkopalaveri pidetöön perjantaisin tiimin huoneessa 208 DGC:llä. Muutkin tapaamiset pidetään samassa paikassa. Palaverin aikana selvitetään mitä on tehty ja mitä tullaan tekemään. Palaverista tehdään pöytäkirja, joka säilytetään. Pidetään päivittäisiä scrum tapaamisia työpäivän alussa tiimin sopimaan aikaan. Joka sprintti alkaa sprint planningilla, jossa luodaan sprint backlog. Sprintin loppupäässä muokataan product backlogia. Sprintin lopuksi pidetään myös sprint review, jossa käydään läpi mitä saatiin aikaiseksi. Sen lisäksi pidetään sprint retrospective, jossa mietitään mitä opimme.

### Kommunikointitavat

Ryhmä kommunikoi sisäisesti Microsoft Teamsin kautta. Ryhmän muut yhteystiedot löytyvät teamsista, jotta niitä voi tarvittaessa käyttää. Tiimillä on myös erilaisia palavereita, kuten viikottainen palaveri.

## Dokumentointi

Sovelluksen lähdekoodi dokumentoidaan kommentoimalla sitä koodatessa. Lisäksi tehdään readme.md tiedostoja eri versioiden julkaisun ohella. Projektia dokumentoidaan scrumin määräämillä artifakteilla, sekä viikottaisen palaverin tuottamalla raportilla. Projektiin käytetyt tunnit merkataan erilliseen excel taulukkoon.

### Dokumenttipohjat

Scrum artifaktien dokumentaatiossa käytetään projektin omia pohjia. Projektisuunnitelman ja esitutkimuksen dokumentointiin käytetään valmiita markdown templaatteja. Jälkituotannon dokumentointi toteutetaan JAMK:in tarjoamilla pohjilla. Tiimi on luonut oman pohjansa tuntien seuranalle.

### Dokumenttien hallinta

Product owner vastaa backlogien säilytyksestä ja niitten varmuuskopioimisesta. Scrummaster vastaa retrospektiivin, sprint reviewin ja sprint planningin säilytyksestä ja varmuuskopioimisesta. Tämän lisäksi scrummaster vastaa viikottaisten palaverien raporteista. Henkilökohtaisia dokumentteja, joita säilytetään on tuntilista ja TCHOPS. Sovellus versioidaan alkaen versiosta 0.1 aina versioon 1.0 asti, joka on valmis sovellus. Kaikki dokumentit ovat tiimiläisten hallittavissa paitsi tuntilistat ja TCHOPS, jotka ovat henkilökohtaisia.

## Riskien hallinta

| Riskit                                                       | Todennäköisyys    | Impakti     | Minimointi                                                                             |
| ------------------------------------------------------------ | ----------------- | ----------- | -------------------------------------------------------------------------------------- |
| Työntekijät eivät ole motivoituneita ja eivät saavu paikalle | Pieni             | Suuri       | Pidetään työpaikka viihtyisänä.                                                        |
| Työntekijä sairastuu                                         | Pieni             | Suuri       | Pidetään huoli yleisestä terveydestä.                                                  |
| Työntekijä ylikuormittuu                                     | Pieni/Kohtalainen | Valtava     | Pidetään huoli, että kaikilla on siedettävä määrä tehtävää.                            |
| Sovelluksesta tulee monimutkainen ja vaikea käyttää          | Pieni             | Suuri       | Pidetään sovelluksen visio mielessä ja testataan loppukäyttäjillä.                     |
| Sovellus ei koskaan valmistu                                 | Pieni             | Valtava     | Noudatetaan scrumia ja toimintasuunnittelmaa päätyyn asti ja tehdään töitä.            |
| Sovellus ei ole rahallisesti kannattava                      | Pieni/Kohtalainen | Kohtalainen | Pidetään kustannukset alhaalla ja keksitään, miten tälläinen sovellus tuottaisi rahaa. |
| Sovelluksen tulee liikaa ominaisuuksia                       | Pieni             | Suuri       | Harkitaan ryhmän jäsenien ja loppukäyttäjien kanssa mitä ominaisuuksia halutaan.       |
