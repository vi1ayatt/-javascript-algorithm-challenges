/*
# 🟡 Task 3 — Library Borrowing System (Medium)

**Müddət:** 25–30 dəqiqə

**Mövzular:** Loops, Functions, Arrays, Objects, `find()`, Spread, Return

## Tapşırığın məqsədi

Kitabxanada istifadəçilərin kitab götürmə müraciətlərini ardıcıllıqla emal edən sistem hazırlayın. Kitabın mövcudluğu, qalan nüsxə sayı və istifadəçi limiti yoxlanmalıdır.

## Tələblər

1. `processBorrowing(books, requests, maxBooks)` adlı Function yaradın.
2. `books` Array-ində `{ id, title, availableCopies }` məlumatları saxlanılır.
3. `requests` Array-ində `{ user, bookId }` müraciətləri var; onları verilən sıra ilə emal edin.
4. Kitab tapılmırsa, imtina səbəbi `"Book not found"` olmalıdır.
5. Kitabın nüsxəsi qalmayıbsa, imtina səbəbi `"Out of stock"` olmalıdır.
6. İstifadəçi artıq `maxBooks` qədər təsdiqlənmiş kitab götürübsə, səbəb `"User limit reached"` olmalıdır.
7. İmtina səbəblərini məhz yuxarıdakı ardıcıllıqla yoxlayın.
8. Təsdiqlənən müraciətləri `approved` Array-ində `{ user, bookId, title }` kimi saxlayın.
9. Rədd edilən müraciətləri `rejected` Array-ində `{ user, bookId, reason }` kimi saxlayın.
10. Hər təsdiqdən sonra uyğun kitabın `availableCopies` dəyərini 1 azaldın.
11. `remainingBooks` Array-ində yenilənmiş kitab ehtiyatını ilkin kitab sırası ilə qaytarın.
12. Orijinal `books`, `requests` və içindəki Object-ləri dəyişməyin.
13. Müraciət yoxdursa, `approved` və `rejected` boş olmalı, `remainingBooks` ilkin kitabları saxlamalıdır.
14. `maxBooks` dəyərinin mənfi olmayan tam ədəd olduğunu qəbul edin.

## Nümunə giriş

```javascript
processBorrowing(
    [{ id: 1, title: "JavaScript", availableCopies: 1 }],
    [{ user: "Ali", bookId: 1 }, { user: "Leyla", bookId: 1 }],
    1
);
```

## Gözlənilən nəticə

```javascript
{
    approved: [{ user: "Ali", bookId: 1, title: "JavaScript" }],
    rejected: [{ user: "Leyla", bookId: 1, reason: "Out of stock" }],
    remainingBooks: [{ id: 1, title: "JavaScript", availableCopies: 0 }]
}
```

## Bonus

Hər istifadəçinin neçə kitab götürdüyünü ayrıca Object vasitəsilə izləyin.

## Başlanğıc kod

Aşağıdakı Function-u tamamlayın. Function adını, parametrləri və `module.exports` hissəsini dəyişməyin.

```javascript
function processBorrowing(books, requests, maxBooks) {
    // TODO: Həll kodunu burada yazın.
}

module.exports = { processBorrowing };
```

*/

function processBorrowing(books, requests, maxBooks) {
    let approved = [];
    let rejected = [];
    let remainingBooks = [];

    for (let i = 0; i < books.length; i++) {
        remainingBooks.push({ ...books[i] });
    }

    for (let i = 0; i < requests.length; i++) {
        let request = requests[i];
        let book = remainingBooks.find(function (item) {
            return item.id === request.bookId;
        });
        let count = 0;
        for (let j = 0; j < approved.length; j++) {
            if (approved[j].user === request.user) {
                count++;
            }
        }

        let reason = "";
        if (!book) {
            reason = "Book not found";
        } else if (book.availableCopies <= 0) {
            reason = "Out of stock";
        } else if (count >= maxBooks) {
            reason = "User limit reached";
        }

        if (reason !== "") {
            rejected.push({ user: request.user, bookId: request.bookId, reason });
        } else {
            approved.push({ user: request.user, bookId: request.bookId, title: book.title });
            book.availableCopies--;
        }
    }

    return { approved, rejected, remainingBooks };
}

module.exports = { processBorrowing };
