/*
# 🟡 Task 2 — Warehouse Restock System (Easy–Medium)

**Müddət:** 20–25 dəqiqə

**Mövzular:** Functions, Arrays, Objects, `filter()`, `map()`, Destructuring, Spread

## Tapşırığın məqsədi

Anbarda ehtiyatı az olan məhsulları müəyyən edən və ehtiyatı minimum həddə çatdırmaq üçün lazım olan xərci hesablayan sistem hazırlayın.

## Tələblər

1. `planRestock(products, minimumStock)` adlı Function yaradın.
2. `products` Array-ində hər məhsulun `id`, `name`, `stock`, `price` məlumatları var.
3. `stock < minimumStock` olan məhsulları müəyyən edin.
4. Hər belə məhsul üçün `quantity = minimumStock - stock` hesablayın.
5. Hər məhsulun tamamlanma xərcini `cost = quantity * price` ilə tapın.
6. `restock` Array-ində `{ id, name, quantity, cost }` obyektlərini ilkin məhsul sırası ilə saxlayın.
7. `totalCost` bütün tamamlanma xərclərinin cəmi olmalıdır.
8. `updatedProducts` Array-ində bütün məhsullar saxlanmalı, ehtiyatı az olanların `stock` dəyəri `minimumStock`-a çatdırılmalıdır.
9. Məhsulların digər property-lərini qoruyun; orijinal `products` və içindəki Object-ləri dəyişməyin.
10. `minimumStock` mənfi olmayan tam ədəd deyilsə, `"Invalid minimum!"` qaytarın.
11. Boş Array üçün `restock: []`, `totalCost: 0`, `updatedProducts: []` qaytarın.

## Nümunə giriş

```javascript
planRestock([{ id: 1, name: "Pen", stock: 2, price: 3 }], 5);
```

## Gözlənilən nəticə

```javascript
{
    restock: [{ id: 1, name: "Pen", quantity: 3, cost: 9 }],
    totalCost: 9,
    updatedProducts: [{ id: 1, name: "Pen", stock: 5, price: 3 }]
}
```

## Bonus

Yeni məhsul obyektlərini Spread Operator (`...`) vasitəsilə yaradın.

## Başlanğıc kod

Aşağıdakı Function-u tamamlayın. Function adını, parametrləri və `module.exports` hissəsini dəyişməyin.

```javascript
function planRestock(products, minimumStock) {
    // TODO: Həll kodunu burada yazın.
}

module.exports = { planRestock };
```

*/

function planRestock(products, minimumStock) {
    if (!Number.isInteger(minimumStock) || minimumStock < 0) {
        return "Invalid minimum!";
    }

    let restock = [];
    let totalCost = 0;
    let updatedProducts = [];

    for (let i = 0; i < products.length; i++) {
        let product = { ...products[i] };
        if (product.stock < minimumStock) {
            let quantity = minimumStock - product.stock;
            let cost = quantity * product.price;
            restock.push({ id: product.id, name: product.name, quantity, cost });
            totalCost += cost;
            product.stock = minimumStock;
        }
        updatedProducts.push(product);
    }

    return { restock, totalCost, updatedProducts };
}

module.exports = { planRestock };
