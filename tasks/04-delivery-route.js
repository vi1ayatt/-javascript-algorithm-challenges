/*
# 🟠 Task 4 — Delivery Route Analyzer (Medium–Hard)

**Müddət:** 30–35 dəqiqə

**Mövzular:** `for`, `while`, Functions, Nested Objects, Arrays, `reduce()`, Return

## Tapşırığın məqsədi

Kuryerin çatdırılma marşrutundakı dayanacaqları analiz edən proqram hazırlayın. Hər dayanacağın sifariş məbləğlərini, ümumi məsafəni, yanacaq xərcini və mənfəəti hesablayın.

## Tələblər

1. `analyzeDeliveryRoute(stops, fuelCostPerKm, freeDeliveryThreshold)` adlı Function yaradın.
2. `stops` Array-ində hər dayanacaq üçün `address`, `distanceKm` və `orders` məlumatları var.
3. `distanceKm` əvvəlki dayanacaqdan məsafədir; ilk dayanacaq üçün anbardan olan məsafədir.
4. Hər dayanacağın `orders` Array-indəki `amount` dəyərlərini toplayaraq `stopTotal` hesablayın.
5. `stopTotal >= freeDeliveryThreshold` olduqda `priority: true`, əks halda `false` olsun.
6. Nəticənin `stops` Array-ində hər dayanacaq `{ address, stopTotal, priority }` formatında saxlanmalıdır.
7. `totalDistance` bütün dayanacaqların `distanceKm` dəyərlərinin cəmi olmalıdır.
8. `totalRevenue` bütün sifariş məbləğlərinin cəmi olmalıdır.
9. `fuelCost = totalDistance * fuelCostPerKm` hesablayın.
10. `profit = totalRevenue - fuelCost` hesablayın; başqa xərc nəzərə alınmır.
11. `priorityStops` Array-ində yalnız prioritet dayanacaqların ünvanlarını saxlayın.
12. Dayanacaqların sırasını və orijinal məlumatları dəyişməyin.
13. Boş `stops` Array-i üçün Array-lər boş, bütün rəqəmsal nəticələr 0 olmalıdır.
14. Giriş rəqəmlərinin düzgün və mənfi olmayan olduğunu qəbul edin.

## Nümunə giriş

```javascript
analyzeDeliveryRoute(
    [{ address: "Baku", distanceKm: 10, orders: [{ amount: 50 }, { amount: 20 }] }],
    2,
    60
);
```

## Gözlənilən nəticə

```javascript
{
    stops: [{ address: "Baku", stopTotal: 70, priority: true }],
    totalDistance: 10,
    totalRevenue: 70,
    fuelCost: 20,
    profit: 50,
    priorityStops: ["Baku"]
}
```

## Bonus

`orders` üçün `reduce()`, dayanacaqları emal etmək üçün `for` və ya `while` istifadə edin.

## Başlanğıc kod

Aşağıdakı Function-u tamamlayın. Function adını, parametrləri və `module.exports` hissəsini dəyişməyin.

```javascript
function analyzeDeliveryRoute(stops, fuelCostPerKm, freeDeliveryThreshold) {
    // TODO: Həll kodunu burada yazın.
}

module.exports = { analyzeDeliveryRoute };
```

*/

function analyzeDeliveryRoute(stops, fuelCostPerKm, freeDeliveryThreshold) {
    let resultStops = [];
    let priorityStops = [];
    let totalDistance = 0;
    let totalRevenue = 0;

    for (let i = 0; i < stops.length; i++) {
        let stop = stops[i];
        let stopTotal = 0;
        for (let j = 0; j < stop.orders.length; j++) {
            stopTotal += stop.orders[j].amount;
        }

        let priority = stopTotal >= freeDeliveryThreshold;
        resultStops.push({ address: stop.address, stopTotal, priority });
        if (priority) {
            priorityStops.push(stop.address);
        }
        totalDistance += stop.distanceKm;
        totalRevenue += stopTotal;
    }

    let fuelCost = totalDistance * fuelCostPerKm;
    let profit = totalRevenue - fuelCost;

    return { stops: resultStops, totalDistance, totalRevenue, fuelCost, profit, priorityStops };
}

module.exports = { analyzeDeliveryRoute };
