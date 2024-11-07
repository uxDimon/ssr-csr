---
# You can also start simply with 'default'
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: ./assets/background/Slide-16_9-1.webp
# some information about your slides (markdown enabled)
title: Что такое SSR!
info: |
    ## Slidev Starter Template
    Presentation slides for developers.

    Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
fonts:
    sans: Robot
    serif: Robot Slab
    mono: Fira Code
class: text-start flex content-between
# https://sli.dev/features/drawing
drawings:
    persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# take snapshot for each slide in the overview
overviewSnapshots: true
---

# Что такое SSR!

(Server Side Rendering)

<br>

Какие есть ещё <span class="bg-gradient-to-r from-cyan-700 to-blue-700 inline-block px-1 rounded">Rendering</span>

Зачем нам это нужно

Как это работает

<!-- И может ну его нахер останемся на <span class="bg-gradient-to-r from-fuchsia-700 to-rose-700 inline-block px-1 rounded">PHP?</span> -->

---

# Что бы понять в чём прикол SSR

<p></p>
Нужно понимать какие есть ещё <span class="bg-gradient-to-r from-cyan-700 to-blue-700 inline-block px-1 rounded">Rendering</span> и в чём их различия

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<v-click>

<v-drag pos="180,130,700,_,0">
 <video controls='false' autoplay="autoplay" muted loop width="280" height="174" src="./assets/2/ryan-gosling.mp4"></video>
</v-drag>

-   <span class="bg-gradient-to-r from-green-700 to-cyan-700 inline-block px-2 rounded">SSG</span> (Static Site Generation)

-   <span class="bg-gradient-to-r from-yellow-700 to-rose-700 inline-block px-2 rounded">CSR</span> (Client Side Rendering)

-   <span class="bg-gradient-to-r from-cyan-700 to-blue-700 inline-block px-2 rounded">SSR</span> (Server Side Rendering)

</v-click>

---

# Генератор статики <span class="bg-gradient-to-r from-green-700 to-cyan-700 inline-block px-2 rounded">SSG</span> (Static Site Generation)

Очень редкий зверь, но невероятно приколдесная штука. По сути это генератор html страниц который может собрать многостраничный сайт без бека)

### Как это работает:

<v-drag v-click pos="260,125,700,_,-2">
<p class="text-slate-500">( Допустим нужно вывести список победителей с фильтром и поиском )</p>
</v-drag>
<br>

<div class="img-list flex gap-20">
  <img v-click src="./assets/ssg/ssg_01.svg">
  <img v-click src="./assets/ssg/ssg_02.svg">
  <img v-click src="./assets/ssg/ssg_03.svg">
  <img v-click src="./assets/ssg/ssg_04.svg">
</div>

<v-drag v-click pos="660,190,700,_,2">
  <video controls='false' autoplay="autoplay" muted loop width="280" height="174" src="./assets/ssg/the-rock-dwayne-johnson.mp4"></video>
</v-drag>

<style>
 .img-list .slidev-vclick-hidden {
   display: none
 }
</style>

---

# Плюсы минусы <span class="bg-gradient-to-r from-green-700 to-cyan-700 inline-block px-2 rounded">SSG</span>

Генератор статических страниц

<br>

| 🟩 Плюсы 🟩                      | 🟥 Минусы 🟥 |
| -------------------------------- | ------------ |
| Нету бека                        | Нету бека    |
| Скорость загрузки                |              |
| SEO Friendly (если 100% статика) |              |
| Легко развернуть и настроить     |              |

<br>
<br>

Ссылки: [Astro](https://astro.build/) | [11ty](https://www.11ty.dev/) | [Gatsby.js](https://www.gatsbyjs.com/)

---

# Старый добрый <span class="bg-gradient-to-r from-yellow-700 to-rose-700 inline-block px-2 rounded">CSR</span> (Client Side Rendering)

Мы все этим пользуемся когда используем js фремворки или библиотеки

<br>

### Как это работает:

<v-drag v-click pos="260,125,700,_,-2">
<p class="text-slate-500">( Тоже выводим список победителей )</p>
</v-drag>
<br>

<div class="img-list flex gap-20">
  <img v-click src="./assets/csr/csr_01.svg">
  <img v-click src="./assets/csr/csr_02.svg">
  <img v-click='[4,8]' src="./assets/csr/csr_03.svg">
  <img v-click='[5,8]' src="./assets/csr/csr_04.svg">
  <img v-click='[6,8]' src="./assets/csr/csr_05.svg">
  <img v-click='8' src="./assets/csr/csr_06.svg">
</div>

<v-drag v-click='[7,8]' pos="520,190,700,_,-2">
  <div class="flex gap-12">
    <img src="./assets/csr/fuck_it.svg">
    <img src="./assets/csr/fuck_it.svg">
  </div>
</v-drag>

<v-drag v-click='9' pos="520,190,700,_,-2">
  <video controls='false' autoplay="autoplay" muted loop width="280" height="174" src="./assets/csr/maybe-iffy.mp4"></video>
</v-drag>

<style>
 .img-list .slidev-vclick-hidden {
   display: none
 }
</style>

---

# Плюсы минусы <span class="bg-gradient-to-r from-yellow-700 to-rose-700 inline-block px-2 rounded">CSR</span>

Это по сути любые js фреймворки

<br>
<br>
<br>

| 🟩 Плюсы 🟩                  | 🟥 Минусы 🟥            |
| ---------------------------- | ----------------------- |
| Легко развернуть и настроить | SEO                     |
|                              | Проблемы с архитектурой |

<br>
<br>
<br>
<br>

Ссылки: [Svelte](https://svelte.dev/) | [Vue.js](https://vuejs.org/) | [React.js](https://react.dev/)

---

# И сигма из всей тусы <span class="bg-gradient-to-r from-cyan-700 to-blue-700 inline-block px-2 rounded">SSR</span> (Server Side Rendering)

Формируем страницу до того как клиент её увидит!

<br>

### Как это работает:

<v-drag v-click pos="260,125,700,_,-2">
<p class="text-slate-500">( Тоже выводим список победителей )</p>
</v-drag>
<br>

<div class="img-list flex gap-20">
  <img v-click src="./assets/ssr/ssr_01.svg">
  <img v-click src="./assets/ssr/ssr_02.svg">
  <img v-click src="./assets/ssr/ssr_03.svg">
</div>

<v-drag v-click pos="560,220,700,_,2">
  <video controls='false' autoplay="autoplay" muted loop width="280" height="174" src="./assets/ssr/black-friday.mp4"></video>
</v-drag>

<style>
 .img-list .slidev-vclick-hidden {
   display: none
 }
</style>

---

# Как работает <span class="bg-gradient-to-r from-cyan-700 to-blue-700 inline-block px-2 rounded">SSR</span> ?

По сути мы просто крутим JavaScript на сервере, который частично или полностью выполняет работу бекенда

<br>

<v-click>

`html` генерируется на сервере с помощью `Bun.js` или `Node.js`, JavaScript формируется во время сборки проекта. Из за этого клиентский JavaScript знает где и какой `html` нужно ожидать и что с ним делать дальше. Это называется `hydration / re-hydration`

</v-click>

<v-drag v-click pos="150,310,520,150,0">
  <img src="./assets/ssr/ssr_h_01.svg">
</v-drag>

<v-drag v-click pos="150,310,520,150,0">
  <img src="./assets/ssr/ssr_h_02.svg">
</v-drag>

<v-drag v-click pos="150,310,520,150,0">
  <img src="./assets/ssr/ssr_h_03.svg">
</v-drag>

<br><br><br><br><br><br><br><br>

<v-click>

> Важно учитывать что часть js выполняется на сервере а часть на клиенте

</v-click>

<v-drag v-click pos="730,300,700,_,2">
  <video controls='false' autoplay="autoplay" muted loop width="180" height="174" src="./assets/ssr/wtf-is-going-on-confused.mp4"></video>
</v-drag>

---

# Плюсы минусы <span class="bg-gradient-to-r from-cyan-700 to-blue-700 inline-block px-2 rounded">SSR</span>

Laravel + js фреймворки и никаких `.blade.php`

<br>
<br>

| 🟩 Плюсы 🟩                     | 🟥 Минусы 🟥        |
| ------------------------------- | ------------------- |
| SEO Friendly                    | Сложная настройка   |
| Удобно организовать архитектуру | Современные сервера |
| Поное разделение бек фронт      |                     |
| Бек на Laravel                  |                     |

<br>
<br>

Ссылки: [Inertia.js](https://inertiajs.com/)

---

# Зачем нам нужен <span class="bg-gradient-to-r from-cyan-700 to-blue-700 inline-block px-2 rounded">SSR</span> ?

Спойлер: это нужно только для seo ну, и немного для производительности но если ты wb или ozon

-   Можно полностью писать фронт на js фреймворках без каких либо ограничений
-   На прямую передавать данные в js фреймворк во момент формирования страницы на сервере
-   Вся логика формирования html на стороне сервера, но только при первой загрузки страницы

<br>

#### Если во всём этом разобраться то это очень удобно и быстро разрабатывается и масштабируется
