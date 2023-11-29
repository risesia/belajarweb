---
title: Pembuatan List Kombinasi
---

Jika diberikan daftar seperti di bawah ini.

Daftar Menu

- Makanan
    - Bakso
    - Mie Ayam
    - Soto
- Minuman
    - Teh Panas
    - Jus Jeruk
    - Kopi

Daftar yang diberikan tersebut menggabungkan ordered list dan unordered list. Untuk dapat membuat daftar tersebut pada dokumen HTML maka kita dapat menggabungkan `<ol>` dan `<ul>` bersamaan. Berikut contoh penggabungan ordered list dan unordered list.

<iframe height="300" width="100%" scrolling="no" title="kombinasi::contoh1" src="https://codepen.io/risesia/embed/jOKwmJp?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/risesia/pen/jOKwmJp">
  kombinasi::contoh1</a> by Rizky (<a href="https://codepen.io/risesia">@risesia</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Memulai List dari Nomor Tertentu

Untuk dapat membuat ordered list yang dimulai dengan angka tertentu selain 1, maka kita harus mendefinisikan atribut `start="   "` di dalam tag `<ol>`. Berikut adalah contoh pemakaian atribut start untuk memulai ordered list dari nomor tertentu.

<iframe height="300" width="100%" scrolling="no" title="kombinasi::contoh2" src="https://codepen.io/risesia/embed/oNywWOb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/risesia/pen/oNywWOb">
  kombinasi::contoh2</a> by Rizky (<a href="https://codepen.io/risesia">@risesia</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Penggunaan atribut start juga berlaku untuk unordered list yang menggunakan huruf untuk penomorannya sebagai berikut.

<iframe height="300" width="100%" scrolling="no" title="kombinasi::contoh3" src="https://codepen.io/risesia/embed/KKeqmYx?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/risesia/pen/KKeqmYx">
  kombinasi::contoh3</a> by Rizky (<a href="https://codepen.io/risesia">@risesia</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Rangkuman

List kombinasi adalah kombinasi daftar berurutan dengan tidak berurutan sekaligus. Untuk membuat daftar/list kombinasi yaitu menggabungkan atau mengkombinasikan tag `<ol>` dengan `<ul>`. Daftar berurutan tidak selalu diawali dengan nomor satu, tetapi dapat diawali dengan nomor tertentu, yaitu dengan memberi atribut `start=" "`.

## Latihan

> Aspek HOTS pada soal ini: Creating.

1. Buatlah unordered list dari grup A dan B tersebut dan buatlah negara-negara dalam grup tersebut menjadi unordered nested list di bawah grupnya masing-masing.

<iframe height="300" width="100%" scrolling="no" title="Latihan 5.1" src="https://codepen.io/risesia/embed/PoajbRp?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/risesia/pen/PoajbRp">
  Latihan 5.1</a> by Rizky (<a href="https://codepen.io/risesia">@risesia</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

> Aspek HOTS pada soal ini: Creating.

2. Buatlah ordered list yang dimulai dari angka 2 pada sila kedua dan ketiga Pancasila berikut.

<iframe height="300" width="100%" scrolling="no" title="Latihan 5.2" src="https://codepen.io/risesia/embed/wvXeoXr?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/risesia/pen/wvXeoXr">
  Latihan 5.2</a> by Rizky (<a href="https://codepen.io/risesia">@risesia</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>