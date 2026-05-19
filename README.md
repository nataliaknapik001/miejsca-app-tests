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
<img width="1915" height="1006" alt="image" src="https://github.com/user-attachments/assets/f40e8b64-922f-4567-ae32-5882ce52bcaa" />

---

 Uruchomienie projektu
```bash
npm install
npm run dev
npx playwright test
