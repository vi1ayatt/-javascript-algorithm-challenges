# JavaScript Alqoritmik Tapşırıqlar — Autograder

**Mövzular:** Loops, Functions & Scope, Arrays & Objects, Destructuring, Spread/Rest.

**5 tapşırıq • 25 avtomatik test • Node.js 18+**

## Tapşırıqlar

| № | Tapşırıq | Səviyyə |
|---|---|---|
| 1 | [Number Range Analyzer (Easy)](tasks/01-number-range.js) | Easy |
| 2 | [Warehouse Restock System (Easy–Medium)](tasks/02-warehouse-restock.js) | Easy–Medium |
| 3 | [Library Borrowing System (Medium)](tasks/03-library-borrowing.js) | Medium |
| 4 | [Delivery Route Analyzer (Medium–Hard)](tasks/04-delivery-route.js) | Medium–Hard |
| 5 | [Tournament Leaderboard (Hard)](tasks/05-tournament-leaderboard.js) | Hard |

## İstifadə qaydası

1. `tasks/` qovluğunda istədiyiniz `.js` faylını açın.
2. Tapşırığın **məqsədini, tələblərini, nümunə girişini və gözlənilən nəticəni** oxuyun.
3. Faylın **ən altındakı başlanğıc kodu** tamamlayın.
4. Function adını, parametrləri və `module.exports` hissəsini dəyişməyin.
5. `prompt()`, `alert()` və Function daxilində `console.log()` istifadə etməyin. Test sistemi girişləri parametr kimi ötürür.
6. Orijinal Array və Object məlumatlarını dəyişməyin.
7. Testləri işə salın və nəticələrə baxın.

## Testləri işə salmaq

Bütün tapşırıqlar üçün:

```bash
node run-tests.js
```

Yalnız bir tapşırıq üçün:

```bash
node run-tests.js 3
```

Hər tapşırıqda **5 test** var. Ümumi maksimum nəticə **25 baldır**. Testlərin gözlədiyi Object property adları və nəticə mətnləri dəqiq saxlanmalıdır.

## Fayl strukturu

```text
js-loops-arrays-autograder/
├── tasks/              # 5 tapşırıq və başlanğıc Function-lar
├── tests/              # JSON test məlumatları
├── run-tests.js        # Avtomatik qiymətləndirmə
├── test-worker.js      # Testlərin ayrıca işlədilməsi
└── README.md
```

**Qeyd:** Başlanğıcda testlərin uğursuz olması normaldır. Tələbələr Function-ları tamamladıqca testlər keçəcək.
