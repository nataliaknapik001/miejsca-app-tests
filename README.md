# Miejsca-App Tests

Projekt testów **End-to-End (E2E)** w Playwright dla aplikacji wyszukiwania miejsc.


## 📌 Funkcje testowane

- wyszukiwanie miejsc (miasto + kategoria)
- wyświetlanie wyników na mapie
- historia wyszukiwań
- zmiana kategorii i aktualizacja wyników
- poprawność interfejsu użytkownika

---

Testy E2E

Projekt zawiera 5 testów:

- wyszukiwanie miejsca
- sprawdzenie UI
- historia wyszukiwań
- kolejność historii
- zmiana kategorii

---

 Uruchomienie projektu
```bash
npm install
npm run dev
npx playwright test
