# ESTIEM CMS - Tehnička Dokumentacija

## Uvod

Pre nego što započnete rad na ESTIEM CMS projektu, preporučujemo da pažljivo pročitate dokument pod nazivom [OPIS.md](./OPIS.md). Ovaj dokument sadrži važne informacije o:

- Projektnoj arhitekturi
- Glavnim funkcionalnostima sistema
- Korisničkim rolama i pristupu
- Standardima kodiranja
- Sigurnosnim smernicama

## Kako startovati projektu

Prvo, pokrenite komandu, kako biste instalirali sve neophodne biblioteke za projekat:

```bash
npm install
# ili
npm i
```

Zatim, izvršite komandu da bi pokrenuli projekat:

```bash
# Pokrece server za razvoj
npm run dev
```

```bash
# Next App Config
NEXT_ENV=development

# Auth Config
AUTH_SECRET=

# Database Config
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"

# NodeMailer Config
NEXT_SUPPORT_EMAIL_USERNAME=
NEXT_SUPPORT_EMAIL_APP_PASSWORD=
```

Objasnjenje za korišćenje Prisma ORM-a za lakšu komunikaciju sa bazom.

```bash
# Otvara Prisma Studio, grafički interfejs za upravljanje podacima u bazi.
# Omogućava pregled i uređivanje podataka u realnom vremenu.
npx prisma studio

# Resetuje sve migracije u bazi podataka.
# Ova komanda briše postojeću bazu, a zatim primenjuje migracije od početka.
npx prisma migrate reset

# Sinhronizuje Prisma modele sa bazom podataka bez kreiranja migracija.
# Tokom razvoja kada radite brze izmene na modelima, a migracije nisu potrebne.
npx prisma db push


# Ovu komandu treba pokrenuti nakon promene modela.
npx prisma generate
# Generiše Prisma klijent na osnovu trenutne Prisma šeme.
# Ovaj klijent omogućava aplikaciji da komunicira sa bazom podataka koristeći ORM pristup.
```

Otvorite aplikaciju pomocu preglednika na datom link-u [http://localhost:3000](http://localhost:3000)
