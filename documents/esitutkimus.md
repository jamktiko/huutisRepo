# Esitutkimus

- [Esitutkimus](#esitutkimus)
  - [Projektin tiedot](#projektin-tiedot)
    - [Termit ja lyhenteet](#termit-ja-lyhenteet)
    - [Viitteet](#viitteet)
  - [Johdanto](#johdanto)
  - [Visio](#visio)
  - [Käyttäjäkertomukset](#k%C3%A4ytt%C3%A4j%C3%A4kertomukset)
  - [Tekniset vaatimukset](#tekniset-vaatimukset)
  - [Ratkaisuvaihtoehdot](#ratkaisuvaihtoehdot)
    - [Ratkaisuvaihtoehto 1](#ratkaisuvaihtoehto-1)
      - [Toteutusympäristö](#toteutusymp%C3%A4rist%C3%B6)
      - [Toteutettavat kertomukset](#toteutettavat-kertomukset)
      - [Työmääräarviot](#ty%C3%B6m%C3%A4%C3%A4r%C3%A4arviot)
      - [Pros and Cons](#pros-and-cons)
  - [Yhteenveto](#yhteenveto)

## Projektin tiedot

_Projektin nimi ja lyhyt versio visiosta_

Huutoäänestysäppi. Sovellus, jonka avulla ihmiset voivat ratkaista tilanteita äänestämällä.

Tekijät: Jyri Lahtinen, Antti Raita, Severi Natunen, Timo Saarela

### Termit ja lyhenteet

_Esimerkiksi:_

| Termi    | Kuvaus                                                    |
| -------- | --------------------------------------------------------- |
| GIT      | Versionhallintajärjestelmä                                |
| GitHub   | Palvelu joka on rakennettu GIT versionhallinnan ympärille |
| Markdown | Merkkauskieli                                             |

### Viitteet

_Esimerkiksi:_

| Viittaus | Materiaali                       |
| -------- | -------------------------------- |
| HLTP     | _linkki hltp dokumenttiin_       |
| GDD      | _linkki gamedesign dokumenttiin_ |

## Johdanto

_Tämän dokumentin tarkoituksena on tuottaa esitutkimus tietojärjestelmästä X. Tietojärjestelmä X on..._

Tämän dokumentin tarkoitus on tuottaa esitutkimus huutoäänestysäpistä. Huutoäänestysäppi on sovellus, jolla ryhmät voivat ratkaista ongelmatilanteita äänestämällä. Esitutkimuksessa käydään läpi käyttäjäkertomukset, tekniset vaatimukset ja ratkaisuvaatimukset.

_Luvussa 2. listataan vaatimukset, luvussa 3. käyttötapaukset..._

## Visio

_Tässä aliluvussa kuvataan tuotteen visio ja mahdollinen slogan_

Kehittämme sovelluksen, joka auttaa ryhmiä muodostamaan yhteisiä päätöksiä äänestämällä. Tarkoituksemme on keskittyä sovelluksen suorituskykyyn ja käytettävyyteen, jotta tilanne on ratkaistu mahdollisimman nopeasti.

## Käyttäjäkertomukset

_Listaa käyttäjäkertomukset ja niiden hyväksymiskriteeristö_

## Tekniset vaatimukset

_Lista projektin teknisistä vaatimuksista_

Esimerkiksi:

1. Sovelluksen tulee toimia Safarilla, Chromella, Firefox for Android ja Microsoft Edgellä
2. Sovelluksen tulisi avautua alle viidessä sekunnissa.
3. Sovelluksen tulee olla käyttäjäystävällinen värisokeille.
4. Äänestyshuoneen tulee poistua automaattisesti 30 minuutin kuluessa tai kun kaikki käyttäjät ovat poistuneet huoneesta.
5. Sovelluksen tiettyjen ominaisuuksien tulee toimia offline tilassa.
6. Sovelluksen tulee toimia Android 9:llä ja ylsöpäin. sen tulee myös toimia iOS 12 ja ylöspäin.
7. Sovelluksen tulee sisältää web-manifest ja pitää täyttää PWA:n vaatimukset.
8.

## Ratkaisuvaihtoehdot

_Listaa niin monta ratkaisuvaihtoehtoa kuin niitä tulee ilmi_

### Ratkaisuvaihtoehto 1

S

#### Toteutusympäristö

_Tässä aliluvussa kerrotaan ympäristön jossa tietojärjestelmä tulee toimimaan. Tähän kannattaa liittää myös yksinkertainen arkkitehtuurikuva, josta pystytään havainnoimaan järjestelmän oleelliset osat ja osien välinen kommunikointi_

Sovellus tulee toimimaan selaimessa ladattavana serverless PWA sovelluksena. ![Arkkitehtuurikuva](\images\pwa-architecture.png)

#### Toteutettavat kertomukset

_Tässä aliluvussa kerrotaan mitä kertomuksia kyseisellä tekniikalla pystytään toteuttamaan ja mitä ei_

Käyttäjät voivat ladata sovelluksen PWA:na tai käyttää sitä selaimessa.

#### Työmääräarviot

_Tähän arvioidaan hyvin karkealla tasolla työhön kuluva aika. Tehkää arviot käyttäen hyväksi seurantaraportin Työmäärien arviointi -välilehteä (SeurantaRaportti_Projektin_nimi.xls). Työmäärien arvioinnissa jokainen projektin jäsen tekee omat arvionsa ja sen jälkeen keskustellaan arviot läpi, jolloin päätetään vaiheeseen arvioitavat tunnit._

_Esimerkiksi_>
| Vaihe | Tunnit | Muuta?
|---|---|---|
Käynnistys | 10 | Jee
Suunnittelu | 10 | Jee
**Yht** | 20 | Paljon tunteja

#### Pros and Cons

_Tässä aliluvussa kerrotaan ratkaisuvaihtoehdon hyvät ja huonot puolet objektiivisesti_

Sovellusta pystyy käyttämään helposti selaimessa ja lisäksi lataamaan pikakuvakkeen aloitusnäyttöön. Sovellusta voi myös käyttää tietokoneella. Välimustin ansiosta sovellus avautuu nopeammin kuin natiivisovellus.

### Ratkaisuvaihtoehto 2

#### Toteutusympäristö

_Tässä aliluvussa kerrotaan ympäristön jossa tietojärjestelmä tulee toimimaan. Tähän kannattaa liittää myös yksinkertainen arkkitehtuurikuva, josta pystytään havainnoimaan järjestelmän oleelliset osat ja osien välinen kommunikointi_

Sovellus tulee toimimaan serverless natiivisovelluksena, jonka voi ladata play androidille Play kaupasta ja iOS:lle App storesta.

#### Toteutettavat kertomukset

_Tässä aliluvussa kerrotaan mitä kertomuksia kyseisellä tekniikalla pystytään toteuttamaan ja mitä ei_

Asiakas pystyy lataamaan sovelluksen play kaupasta tai app storesta.

#### Työmääräarviot

_Tähän arvioidaan hyvin karkealla tasolla työhön kuluva aika. Tehkää arviot käyttäen hyväksi seurantaraportin Työmäärien arviointi -välilehteä (SeurantaRaportti_Projektin_nimi.xls). Työmäärien arvioinnissa jokainen projektin jäsen tekee omat arvionsa ja sen jälkeen keskustellaan arviot läpi, jolloin päätetään vaiheeseen arvioitavat tunnit._

_Esimerkiksi_>
| Vaihe | Tunnit | Muuta?
|---|---|---|
Käynnistys | 10 | Jee
Suunnittelu | 10 | Jee
**Yht** | 20 | Paljon tunteja

#### Pros and Cons

_Tässä aliluvussa kerrotaan ratkaisuvaihtoehdon hyvät ja huonot puolet objektiivisesti_

## Yhteenveto

_Tässä luvussa tehdään ehdotus järjestelmän toteutustavasta (siis jokin edellä esitellyistä vaihtoehdoista) ja perustellaan ko. valinta._
