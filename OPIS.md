# ESTIEM CMS Dokumentacija

## Sadržaj

1. [Opis Projekta](#opis-projekta)
2. [Arhitektura Projekta](#arhitektura-projekta)
   - [Glavne Stranice](#glavne-stranice)
   - [User Flow](#user-flow)
3. [Glavne Funkcionalnosti](#glavne-funkcionalnosti)
4. [Tehnologije Korišćene u Projektu](#tehnologije-kori%C5%A1%C4%87ene-u-projektu)
5. [Generalni Dizajn, Fontovi i Paleta Boja](#generalni-dizajn-fontovi-i-paleta-boja)
6. [Sigurnosne Postavke](#sigurnosne-postavke)
7. [Buduće Nadogradnje](#budu%C4%87e-nadogradnje)
8. [Glosar](#glosar)

---

## Opis Projekta

ESTIEM CMS (Content Management System) je platforma za upravljanje sadržajem i vizualima koje koriste članovi ESTIEM organizacije. Sistem omogućava korisnicima da dodaju, pregledaju, odobravaju i dele vizuale, kao i da koriste integraciju sa društvenim mrežama za zakazano postavljanje postova.

Cilj projekta je omogućiti jednostavnu i efikasnu kolaboraciju, pregled i upravljanje sadržajem unutar organizacije, uz integrisanu komunikaciju i kontrolu pristupa na osnovu korisničkih rola.

Za tehničke detalje o pokretanju projekta, korišćenim bibliotekama i konfiguracijama, pogledajte [README.md](./README.md)

---

## Arhitektura Projekta

### Glavne Stranice

- **Početna stranica**: Prikazuje sve odobrene vizuale. Korisnici mogu da ih sortiraju, filtriraju, lajkuju ili dislajkuju.
- **Stranica za postavljanje vizuala**: Form za dodavanje novih vizuala.
- **Stranica za odobravanje vizuala**: Dostupna samo Leaderima, omogućava odobravanje ili vraćanje vizuala na doradu.
- **Login stranica**: Prijava putem ESTIEM e-mail naloga.
- **Korisnicka stranica**: Prikazuje sve odobrene i neodobrene vizuale tog konkretnog korisnika

### User Flow

1. **Neregistrovani korisnici**: Prvo vide login stranicu i moraju se prijaviti pomoću ESTIEM naloga.
2. **Registrovani korisnici**: Na početnoj stranici vide sve odobrene vizuale, mogu da ih sortiraju i interaguju s njima (like/dislike).
3. **Dodavanje vizuala**: Korisnici mogu dodati novi vizual putem forme.
4. **Odobravanje vizuala**: Samo korisnici sa Leader rolom mogu odobravati ili odbijati vizuale.

---

## Glavne Funkcionalnosti

- **Chat**: Integrisan WhatsApp chat u donjem desnom uglu stranice, nezavisno od stranice na kojoj se nalazi korisnik.
- **Pregled slika**: Opcija za pregled svih dodanih vizuala.
- **Login putem ESTIEM maila**: Sigurna autentifikacija samo pomoću ESTIEM naloga.
- **Korisničke Role**:
  - **Admin**: Potpuna kontrola nad sadržajem i korisnicima.
  - **Leader**: Može odobravati vizuale i upravljati postovima.
  - **Member**: Može pregledati i dodavati vizuale.
- **Lajkovanje/Dislajkovanje**: Korisnici mogu interagovati sa vizualima, a na hover se prikazuju informacije ko je lajkovao.
- **Sortiranje i filtriranje**: Pregled vizuala po određenim kriterijumima.
- **Notifikacioni sistem**: Obaveštava korisnike o aktivnostima putem toastera ili maila.
- **Dodavanje vizuala**: Korisnici mogu dodavati vizuale putem specijalne stranice/forme.
- **Integracija sa društvenim mrežama**: Planirana opcija za lakše i zakazano postavljanje postova na društvene mreže.
- **Brisanje vizuala**: Admin i Leader mogu brisati vizuale.

---

## Tehnologije Korišćene u Projektu

- **Frontend**: 🚧
- **Backend**: 🚧
- **Database Modeling**: Oracle Data Modeler za modeliranje baze podataka.
- **Hosting**: Hostiso za hosting platforme.
- **Third-party APIs**: Integracija za objave na platformama poput Instagram-a i TikTok-a.

Za tehničke detalje pogledajte [README.md](./README.md).

---

## Generalni Dizajn, Fontovi i Paleta Boja

### Fontovi

Za ESTIEM CMS platformu, se koristi bar jedan od tri glavna fonta: **Open Sans**, **ITC Charter** i **Hanzipen**. Ovi fontovi su pažljivo odabrani da budu čitljivi i prilagodljivi za digitalne i štampane materijale.

- **Open Sans (Sans Serif)**: Glavni font koji treba koristiti kad god je to moguće. Moderan i lako čitljiv, Open Sans nudi različite težine (light, regular, semibold, bold) i koristi se za opšte tekstove, naslove i podnaslove.

- **ITC Charter (Serif)**: Koristi se u posebnim slučajevima, poput dokumenata (sertifikati, brošure) i u nekim digitalnim materijalima. ITC Charter se koristi za naslove i veće tekstove, ali nije pogodan za korišćenje u italik ili velikim slovima (All Caps).

- **Hanzipen (Script)**: Ovaj font se koristi vrlo štedljivo, isključivo za naglašene delove u štampanim i digitalnim materijalima. Nikada ga ne koristiti za dugačke odeljke teksta.

### Paleta Boja

Paleta boja ESTIEM-a se deli na primarne i sekundarne boje, s različitim akcentima. **ESTIEM Green** je glavna boja koja najviše dominira u vizualnom identitetu organizacije.

![Color Palete](https://i.imgur.com/WTcM4f9.png)

**Primarna boja**:

- ESTIEM Green

**Sekundarna boja**:

- Primary Grey
- Svetliji tonovi i akcenti boja (prikazani u šemi iznad) takođe se koriste za dodatne elemente i prilagođavanje vizuala u skladu s potrebama projekta.

Za dodatne informacije o dizajnu i ESTIEM brendu, molimo posetite sledeći link: [ESTIEM Branding Guidelines](https://drive.google.com/drive/folders/10RscgSmd7AEWhKFqWvUxWFQUGhHGRwTq).

---

## Sigurnosne Postavke

- **Autentifikacija**: Prijava putem ESTIEM maila sa sigurnim OAuth mehanizmima.
- **Upravljanje Pristupom**: Role-based access control (RBAC) gde različite role imaju različita prava pristupa.
- **SSL enkripcija**: Svi podaci između korisnika i servera su šifrovani pomoću SSL sertifikata.
- **Zaštita Vizuala**: Samo autorizovani korisnici (Leader/Admin) mogu odobravati i brisati vizuale.

---

## Buduće Nadogradnje

- **Zakazivanje postova**: Dodavanje opcije za zakazano objavljivanje postova na društvenim mrežama.
- **Napredniji sistem filtriranja**: Dodavanje višedimenzionalnog filtriranja za precizniji pregled vizuala.
- **API integracije**: Otvoreni API za integraciju sa drugim sistemima i platformama.
- **Analitika vizuala**: Prikaz statistika o pregledima i interakcijama za svaki vizual.

---

## Glosar

- **Vizual**: Bilo koja slika, grafika ili vizuelni element koji korisnici dodaju na platformu.
- **Toaster**: Pop-up notifikacija koja se pojavljuje u uglu ekrana.
- **Leader**: Korisnik sa privilegijama za upravljanje i odobravanje vizuala.
- **ESTIEM**: European Students of Industrial Engineering and Management, studentska organizacija.

---

<br>

Hvala što ste izdvojili vreme da pročitate dokumentaciju ESTIEM CMS platforme.

Za sva dodatna pitanja ili predloge ne ustručavajte se da pošaljite mail na <it@estiem.rs>
