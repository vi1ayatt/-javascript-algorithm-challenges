/*
# 🟢 Task 1 — Number Range Analyzer (Easy)

**Müddət:** 15–20 dəqiqə

**Mövzular:** `for`, `continue`, Functions, Parameters, Return, Arrays, Objects

## Tapşırığın məqsədi

Verilmiş iki ədəd arasındakı ədədləri analiz edən proqram hazırlayın. Bəzi ədədlər hesablamadan çıxarılmalı, qalan ədədlərin cüt/tək sayı və cəmi hesablanmalıdır.

## Tələblər

1. `analyzeRange(start, end, excludedNumbers)` adlı Function yaradın.
2. `start` və `end` aralığın sərhədləridir; hər iki sərhəd hesablamaya daxildir.
3. `excludedNumbers` Array-indəki ədədləri nəticəyə daxil etməyin.
4. `for` dövründən istifadə edərək ədədləri artan sıra ilə yoxlayın.
5. Seçilən ədədləri `numbers` Array-inə əlavə edin.
6. Cüt ədədlərin sayını `evenCount`, tək ədədlərin sayını `oddCount` kimi hesablayın.
7. Seçilmiş ədədlərin cəmini `sum` kimi hesablayın.
8. `start` və `end` tam ədəd deyilsə və ya `start > end` olarsa, `"Invalid range!"` qaytarın.
9. Heç bir ədəd seçilməzsə, boş Array və sıfır nəticələri qaytarın.
10. `excludedNumbers` Array-ini dəyişməyin; nəticəni Object şəklində `return` edin.

## Nümunə giriş

```javascript
analyzeRange(1, 6, [2, 5]);
```

## Gözlənilən nəticə

```javascript
{ numbers: [1, 3, 4, 6], evenCount: 2, oddCount: 2, sum: 14 }
```

## Bonus

`excludedNumbers` yoxlamasını `includes()` ilə aparın və uyğun ədədləri `continue` vasitəsilə ötürün.

## Başlanğıc kod

Aşağıdakı Function-u tamamlayın. Function adını, parametrləri və `module.exports` hissəsini dəyişməyin.

```javascript
function analyzeRange(start, end, excludedNumbers) {
    // TODO: Həll kodunu burada yazın.
}

module.exports = { analyzeRange };
```

*/

function analyzeRange(start, end, excludedNumbers) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start > end) {
        return "Invalid range!";
    }

    let numbers = [];
    let evenCount = 0;
    let oddCount = 0;
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (excludedNumbers.includes(i)) {
            continue;
        }
        numbers.push(i);
        sum += i;
        if (i % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    return { numbers, evenCount, oddCount, sum };
}

module.exports = { analyzeRange };
