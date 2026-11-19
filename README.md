# Osobní diář MM · Rodinná verze

Nová webová aplikace PWA bez původních dat. Má vlastní účty, sdílené a soukromé záznamy, synchronizaci Firestore, kalendář, opakované události, poznámky, nákupní seznam a pět motivů (Velryba, Iron Man, Spider-Man, Hulk, Vesmír).

## Zprovoznění (jednorázově)

1. Na https://console.firebase.google.com vytvoř projekt (lze použít bezplatný tarif Spark). V **Authentication → Sign-in method** zapni **Email/Password**.
2. V **Firestore Database** vytvoř databázi v produkčním režimu. V záložce **Rules** nahraď pravidla kompletním obsahem souboru `firestore.rules` a klikni **Publish**. **Nepoužívej veřejná testovací pravidla.**
3. V **Project settings → Your apps → Web app** zaregistruj webovou aplikaci. Zkopíruj její `firebaseConfig` do souboru `firebase-config.js`.
4. V **Authentication → Settings → Authorized domains** zkontroluj, že je povolená doména `lukmils13-arch.github.io` (nebo tvoje jiná doména).
5. Nahraj všechny soubory z této složky do repozitáře na GitHub Pages (můžeš použít samostatný repozitář, ať nepřepíšeš původní diář). V GitHubu nastav **Settings → Pages → Deploy from a branch → main / root**.
6. Otevři URL webu. Zaregistruj první účet a vytvoř rodinu. V **Nastavení → Pozvat člena** zadej jeho e-mail a pošli mu vygenerovaný kód. Člen se zaregistruje vlastním e-mailem, vloží kód a připojí se.

## Soukromí a účty

- Každá položka má viditelnost **Rodinná** nebo **Soukromá**. Soukromou položku čte pouze její autor, rodinnou členové rodiny.
- Bezpečnost vynucují pravidla Firestore; přepínač v rozhraní není jedinou ochranou.
- **Pozor:** u již sdílené položky je možné přepnout viditelnost na soukromou pouze s tím, že vlastníkem zůstává původní autor. Ostatní členové takovou položku po změně neuvidí.
- Správce vytváří pozvánky vázané na konkrétní e-mail a platné 7 dní. Kód posílej jen adresátovi.
- Pro osobní rodinné použití jsou motivy Marvel vytvořené jako barevné styly s názvy postav, bez cizích obrázků a log.
- Provoz může být zdarma v rámci limitů Firebase Spark. Při překročení limitů může být nutné optimalizovat provoz nebo zvolit jiný tarif.
- Online synchronizace vyžaduje internet; aplikace zatím neobsahuje garantované offline ukládání, push notifikace, přílohy ani export záloh.

## Technické poznámky

- `index.html` a `app.js` jsou zcela nová implementace. Původní soubory nejsou potřeba.
- `firebase-config.js` obsahuje veřejné identifikátory webové aplikace, nikoliv administrátorský servisní klíč.
- Doporučujeme pro první nasazení nový repozitář `Diary-MM-Rodina`, původní projekt zůstane zachován.
