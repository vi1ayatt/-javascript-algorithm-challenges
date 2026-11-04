/*
# 🔴 Task 5 — Tournament Leaderboard (Hard)

**Müddət:** 35–45 dəqiqə

**Mövzular:** Functions, Arrays, Objects, Loops, `reduce()`, `sort()`, Destructuring, Rest Parameters

## Tapşırığın məqsədi

Bir neçə turdan ibarət yarışda iştirakçıların topladığı xalları hesablayan və yekun reytinq cədvəlini hazırlayan proqram yaradın.

## Tələblər

1. `buildLeaderboard(players, ...rounds)` adlı Function yaradın; `...rounds` Rest Parameters olmalıdır.
2. `players` Array-ində `{ id, name }` formatında iştirakçılar var.
3. Hər tur `{ playerId, points }` obyektlərindən ibarət Array-dir.
4. Hər iştirakçının bütün turlardakı xallarını toplayın.
5. Bəzi iştirakçılar müəyyən turlarda iştirak etməyə bilər; həmin turdan 0 xal almış sayılırlar.
6. `players` Array-ində olmayan `playerId` üçün verilən xalları nəzərə almayın.
7. İştirakçıları `totalPoints` üzrə azalan sıra ilə sıralayın.
8. Xallar bərabərdirsə, iştirakçıları `name` üzrə A–Z sırası ilə düzün.
9. `leaderboard` Array-ində `{ rank, id, name, totalPoints }` obyektlərini saxlayın.
10. `rank` 1-dən başlamalı və bərabər xal olduqda belə hər iştirakçı üçün 1 artmalıdır.
11. `winner` birinci yerdə olan iştirakçının adı olmalıdır; iştirakçı yoxdursa `null` qaytarın.
12. `averagePoints` bütün tanınan iştirakçıların xallarının cəminin `players.length` dəyərinə bölünməsi ilə hesablanmalıdır.
13. İştirakçı yoxdursa `averagePoints: 0` qaytarın; nəticəni yuvarlaqlaşdırmayın.
14. Orijinal `players` və `rounds` Array-lərini dəyişməyin.

## Nümunə giriş

```javascript
buildLeaderboard(
    [{ id: 1, name: "Ali" }, { id: 2, name: "Leyla" }],
    [{ playerId: 1, points: 10 }, { playerId: 2, points: 15 }]
);
```

## Gözlənilən nəticə

```javascript
{
    leaderboard: [
        { rank: 1, id: 2, name: "Leyla", totalPoints: 15 },
        { rank: 2, id: 1, name: "Ali", totalPoints: 10 }
    ],
    winner: "Leyla",
    averagePoints: 12.5
}
```

## Bonus

İştirakçıların xallarını ayrıca Object-də toplayın, sonra `sort()` ilə sıralayın.

## Başlanğıc kod

Aşağıdakı Function-u tamamlayın. Function adını, parametrləri və `module.exports` hissəsini dəyişməyin.

```javascript
function buildLeaderboard(players, ...rounds) {
    // TODO: Həll kodunu burada yazın.
}

module.exports = { buildLeaderboard };
```

*/

function buildLeaderboard(players, ...rounds) {
    let leaderboard = [];
    let total = 0;

    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let totalPoints = 0;
        for (let j = 0; j < rounds.length; j++) {
            let round = rounds[j];
            for (let k = 0; k < round.length; k++) {
                if (round[k].playerId === player.id) {
                    totalPoints += round[k].points;
                }
            }
        }
        total += totalPoints;
        leaderboard.push({ rank: 0, id: player.id, name: player.name, totalPoints });
    }

    leaderboard.sort(function (a, b) {
        if (a.totalPoints !== b.totalPoints) {
            return b.totalPoints - a.totalPoints;
        }
        return a.name.localeCompare(b.name);
    });

    for (let i = 0; i < leaderboard.length; i++) {
        leaderboard[i].rank = i + 1;
    }

    let winner = null;
    let averagePoints = 0;
    if (players.length > 0) {
        winner = leaderboard[0].name;
        averagePoints = total / players.length;
    }

    return { leaderboard, winner, averagePoints };
}

module.exports = { buildLeaderboard };
