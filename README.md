# Uruchomienie projektu w wersji deweloperskiej:

## Wymagania do uruchomienia projektu:

- node 22.14.\*

```cmd
    node -v
```

- npm

```cmd
    npm -v
```

## Komendy do skompilowania i uruchomienia projektu:

```cmd
    npm install yarn
    yarn
    yarn dev
```

Strona dostępna przez adres http://localhost:3000 lub http://localhost:3001

## Dokumentacja API:

### w projekcie użyte zostało API wewnętrzne jako endpoint /api/userData

- `/api/userData`([/api/userData.route.ts](src/app/api/userData/route.ts)) zawiera metodę GET do odczytu danych z pliku [JSON](src/data/data.json)
  Użycie funkcji fetch do endpointu pozwala na przyszłe rozbudowanie aplikacji o serwer baz danych, dlatego nie użyłem biblioteki fs, która dla aktualnej wersji projektu byłaby wystarczająca.

## Co zostało zmienione:

- została dodana responsywność bazująca na meta-tagach w plikach z rozszerzeniem `.scss`
- został dodany skrypt służący do filtrowania danych w oparciu o kolumnę `NAZWA`
- zostały dodane paragrafy z danymi analitycznymi, które pomagają w możliwej w przyszłości poprawie danych użytkowników
- zostało dodane rozwijalne menu dla wersji mobile
- poprawa styli, w celu przyjemniejszego i intuicyjniejszego korzystania ze strony
- dodany endpoint do przyszłej automatyzacji zarządzania treścią
- usunięcie wszystkich błędów dostępności WCAG 2.1 AA oraz Best Practices
- dodanie popupu z wszystkimi informacjami o użytkowniku po kliknięciu na guzik `more info`
- poprawienie struktury i funkcji warunkowych, w celu ograniczenia ingerencji w DOM

## Co zostało dodane, w celu przyszłego, możliwego rozwoju aplikacji:

- znacznik select służący do wyświetlania określonej liczby rzędów tabeli
- skrypt filtrujący dane, w celu ograniczenia ilości rekordów, bazując na vartości ze znacznika select
- dodanie zmiennych stanu (useState) do przyszłego wykorzystania w ww. funkcjonalności

## Możliwy rozwój:

* dodanie bazy danych do hermetyzacji aplikacji 
Hermetyzacja oznacza oddzielenie logiki dostępu do danych od reszty aplikacji — ułatwia to utrzymanie, testowanie i rozwój.
    * możliwa obsługa baz danych
        * dodanie Prisma.js jako ORM do obsługi baz danych
        * obsługa poprzez firebase
        * obsługa poprzez serwer Node
* rozwinięcie podstron 
* dodanie zmiany języka
* dodanie zmiany motywu aplikacji
* dodanie logowania, w celu ograniczenia dostępu do danych wrażliwych
* dodanie panelu edycji treści oraz metod PUT, PATCH, DELETE w gotowym endpoincie

## Z czego jestem zadowolony:
* z responsywności aplikacji
* z użycia komponentów biblioteki mui
* z przekształcenia strony na framework Next.js
* z czytelności dla użytkownika
* z braku błędów dostępności WCAG
* poprawa struktury kodu html

## Link do strony:
[Link do wersji gotowej](https://oexcursor.vercel.app/)
