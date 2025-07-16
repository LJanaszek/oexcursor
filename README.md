# Uruchomienie projektu w wersji deweloperskiej:
## Wymagania do uruchomienia projektu:
* node 22.14.*
```cmd
    node -v
```
* npm
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
 * `/api/userData`([/api/userData.route.ts](src/app/api/userData/route.ts)) zawiera metodę GET do odczytu danych z pliku [JSON](src/data/data.json) 
 Użycie funkcji fetch do endpointu pozwala na przyszłe rozbudowanie aplikacji o serwer baz danych, dlatego nie użyłem biblioteki fs, która dla aktualnej wersji projektu byłaby wystarczająca.


 ## Co zostało zmienione:
 * została dodana responsywność bazująca na meta-tagach w plikach z rozszerzeniem `.scss`
 * został dodany skrypt służący do filtrowania danych w oparciu o kolumnę `NAZWA`
 * zostały dodane paragrafy z danymi analitycznymi, które pomagają w możliwej w przyszłości poprawie danych użytkowników
 * zostało dodane rozwijalne menu dla wersji mobile 
 * poprawa styli, w celu przyjemniejszego i intuicyjniejszego korzystania ze strony
 * dodany endpoint do przyszłej automatyzacji zarządzania treścią 
 * usunięcie wszystkich błędów dostępności WCAG 2.1 AA oraz Best Practices

 ## Co zostało dodane, w celu przyszłego, możliwego rozwoju aplikacji:
 * znacznik select służący do wyświetlania określonej liczby rzędów tabeli
 * skrypt filtrujący dane, w celu ograniczenia ilości rekordów, bazując na vartości ze znacznika select
 * dodanie zmiennych stanu (useState) do przyszłego wykorzystania w ww. funkcjonalności


 ## Link do strony:
 
