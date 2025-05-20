# typescript-akademie

## Poznámky k prezrentaci
1. Na úvodních slidech je vysvětleno, co je TS, typování, rozdíl mezi "silnými" a "slabými" jazyky a proč TS potřebujeme. Každý slide obsahuje obsahuje poznámky, co by bylo dobré zmínit.
2. Na konci prezentace ideálně ukážeme příklad integrace TS do CI/CD a vysvětlíme výhody.  

# Lekce 1

## První ukázka
1. Začneme ve složce `ts-ukazka`. Společně napíšeme JavaScript pro sčítání čísel ze dvou inputů. Otestujeme, zda si účastnice uvědomí, že při použití vlastnosti `value` budou sčítat řetězce, a ne čísla.
2. Poté přepíšeme výchozí JS kód do TS (`scitani-cisel.js` a `scitani-cisel.ts`) a ukážeme možnosti převodu řetězců na čísla.
3. V JS souboru zmíníme, že VS code nám defaultně nabízí TS anotace i v JS souborech díky TS serveru.
4. Na konci použijeme příkaz `tsc scitani-cisel.ts` pro zkompilování TS do JS.

## Základní typy
1. Řádek po řádku procházíme soubor `01_zakladni_typy.ts`.

## Cvičení
1. Účastnice necháme samostatně vypracovat cvičení v souboru `O2_cviceni.ts`.

## Aplikace Students Grades
1. Podle instrukcí v sobouru `ts-domaci-ukol/zadani.md` necháme účastnice vypraovat zadání jako úkol nebo v rámci lekce.

# Lekce 2