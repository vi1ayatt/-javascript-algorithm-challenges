/** JavaScript tapşırıqları üçün avtomatik test sistemi — Node.js 18+ (əlavə paket tələb olunmur). */
const fs = require('node:fs');
const path = require('node:path');
const { isDeepStrictEqual } = require('node:util');
const { spawnSync } = require('node:child_process');

const tasks = [
  ['01-number-range', 'analyzeRange'],
  ['02-warehouse-restock', 'planRestock'],
  ['03-library-borrowing', 'processBorrowing'],
  ['04-delivery-route', 'analyzeDeliveryRoute'],
  ['05-tournament-leaderboard', 'buildLeaderboard'],
];
const selector = process.argv[2];
if (selector && !/^[1-5]$/.test(selector)) {
  console.error('İstifadə: node run-tests.js [1-5]');
  process.exit(1);
}
const selected = selector ? [tasks[Number(selector) - 1]] : tasks;
let passed = 0, total = 0;
for (const [slug, exportName] of selected) {
  const cases = JSON.parse(fs.readFileSync(path.join(__dirname, 'tests', slug + '.json'), 'utf8'));
  console.log(`\n=== ${slug} ===`);
  for (let i = 0; i < cases.length; i++) {
    const test = cases[i];
    total++;
    // Hər testi ayrıca prosesdə başladırıq ki, sonsuz dövr digər testləri bloklamasın.
    const child = spawnSync(process.execPath, [path.join(__dirname, 'test-worker.js')], {
      input: JSON.stringify({ slug, exportName, args: test.input }),
      encoding: 'utf8', timeout: 2500, maxBuffer: 1024 * 1024,
    });
    let result;
    try { result = JSON.parse(child.stdout); }
    catch { result = { error: child.error?.code === 'ETIMEDOUT' ? 'Vaxt limiti keçildi (2,5 saniyə)' : (child.stderr || 'Test prosesindən düzgün cavab alınmadı') }; }
    const ok = !result.error && !result.mutated && isDeepStrictEqual(result.value, test.expected);
    if (ok) passed++;
    console.log(`${ok ? 'KEÇDİ' : 'KEÇMƏDİ'} ${test.name}`);
    if (!ok) {
      if (result.error) console.log('  Xəta:', result.error);
      else if (result.mutated) console.log('  Xəta: Giriş məlumatları dəyişdirilib.');
      else {
        console.log('  Gözlənilən:', JSON.stringify(test.expected));
        console.log('  Alınan:', JSON.stringify(result.value));
      }
    }
  }
}
console.log(`\nNƏTİCƏ: ${passed}/${total} test keçildi (${Math.round(passed / total * 100)}%)`);
if (passed !== total) process.exitCode = 1;
