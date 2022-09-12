# High level test plan

\<Projektin nimi>

Tekijät:

## Viitteet

<\Esimerkiksi:>
| Viittaus | Materiaali |
|---|---|
Projektisuunnitelma | \<linkki  projektisuunnitelmaan>
GDD | \<linkki gamedesign dokumenttiin>

## Intro

### Projekti lyhyesti

\<Projektin tiedot lyhyesti>

### Tarkoitus

\<Dokumentin tarkoitus, mitä dokumentti sisältää>
\<Chapter that tells the reader why this document is created. It usually includes references to the testing policy (QA and CM plans) of the company, project plan, standards etc.>

## Testistrategia

\<Tässä aliluvussa kerrotaan mitä testataan, miksi testataan, miten testataan, milloin testaus on valmista, jne>

### Testattavat yksiköt

- Screens, executables, documentation, reports, help, etc…
- What is to be tested and in what level?
- How the items are transmitted to the testers?

FI: Mitkä ovat testattavat kohteet?

### Testitoimenpiteet

- What are the activities that must take place during testing? It includes all the planning and executing!
- What kind of dependencies there are in the activities?

FI: Mitä pitää tehdä.

### Testattavat ominaisuudet

List the features of the software/product to be tested. Distinguishing characteristic of a software item like performance, portability, functionality, reliability... and why?
Provide references to the Requirements and/or Design specifications of the features to be tested.

FI: Mitä toimintoja testataan ja mihin niiden testien tekeminen ja ajaminen perustuu?

### Ei testattavat ominaisuudet

What is not tested? Remember to explain why something is left out.

FI: Mitä toimintoja priorisoidaan pois? Esim. ulkoiset komponentit.

### Lähestymistapa

- Activities, techniques and tools
- What principles are used on testing
- Identify constraints (staff, environment, deadlines) for the testing.

FI: Lähestymiskulma. Mitä toimintoja, tekniikoita ja työkaluja käytetään. Harrastetaanko testiautomaatiota vai not? Onko esim. TDD prinsiippinä? Testauksen rajoitteet mukaan myös.

### Hyväksymiskriteerit

- Specify the criteria that will be used to determine whether each test item (software/product) has passed or failed testing.
- What criteria we use on testing? You  can define the criteria for each testable level (component, integration in the small, system etc.) separately
- Remember that you can use metrics as a passing criteria also!

FI: Millä tavalla jokin testaustaso voidaan todeta päättyneeksi? Mittaristo sille, että testaus on suoritettu.

### Testauksen keskeytys ja jatkaminen

- For all or part of testing activities. When the testing is suspended and why?
- Which activities must be repeated on resumption? Smoke tests etc?

FI: Kriteeristö sille milloin testaus keskeytetään ja milloin se voidaan uudelleen aloittaa. Esimerkkejä?

## Tuotokset

- List test deliverables, and links to them if available, including the following:
  - Plans and specifications
  - All kinds of test reports
  - Logs
  - Scripts and testing data
  - Basically define everything the testing activities is producing to the customer

FI: Samoin kuin projektisuunnitelmassa projektin osalta. Mitä asiakas/muu ryhmä saa testauksen aikana käsiinsä.

## Ympäristö

- All environmental requirements like
  - Security
  - Office space
  - Hardware
  - Software
  - Tools

FI: Ympäristön vaatimukset. Jos eroavat eri testaustasoilla, niin pitää kirjata erikseen jokaiseen testaukseen liittyen.

## Velvollisuudet/vastuut

- What are the roles and responsibilities of the testing team members?
- What responsibilities the development team has towards the testing team?
- 3rd party responsibilities?

FI: Vastuut. Yksinkertaisesti. Tässä meillä?

## Osaaminen ja sen hankinta

- How the team is prepared for tasks ahead?
- Do they know what to do?
- Define every skill the team must have to accomplish exellent testing! Remember roles.

FI: Mitä osaamista tarvitaan ja miten se hankitaan jos sitä ei ole.

## Aikataulut

- Milestones (following the project milestones). General dates and checkpoints.
- Item transmittal milestones. When components are ready for testing? When a certain document is to be delivered?
- Environmental milestones. F.ex. when a certain tool is delivered?
- Resource milestones (what is needed and when). Also includes testing personnel! It might be so that a key test designer is in another project in the beginning.

FI: Testauksen aikataulutusta.

## Riskit

- List the risks that have been identified.
- Create a plan for each event that the identified risks may create when triggered.

FI: Mitä riskejä ja miten ne hallitaan. Perus PM kamaa.

## Oletukset ja riippuvuudet

- List the assumptions that have been made during the preparation of this plan.
- List the dependencies.

FI: Listaa olettamukset ja mahdolliset riippuvuudet

8 projektia esittelee aikaansaannoksiaan.
