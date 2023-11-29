---
title: Pembuatan List dengan HTML
---

## Pengertian List

List dalam bahasa Indonesia disebut sebagai daftar, merupakan bagian dalam teks yang berisi hal-hal yang diurutkan. List dapat berupa sebuah prosedur atau langkah-langkah seperti yang ada pada resep masakan, tidak hanya prosedur list juga dapat berisi hal-hal dalam satu konteks lainnya, seperti daftar pemain sepak bola. Pada HTML, list memiliki elemennya sendiri untuk dapat membentuk suatu daftar menjadi list yang terformat pada dokumen web. List pada HTML terbagi menjadi tiga tipe, yaitu daftar yang memiliki urutan (ordered list), daftar yang tidak memiliki urutan (unordered list), dan daftar dari definisi (definition list). Pembahasan selanjutnya akan menjelaskan tipe-tipe list yang disebutkan dan juga pemakaiannya pada HTML.

## Ordered List
Ordered list, atau dalam bahasa Indonesia, daftar berurutan, merupakan salah satu tipe list pada HTML dimana isi list tersebut disusun berurutan berdasarkan penomoran tertentu. Penomoran dapat berupa angka (1, 2, 3, ...) maupun karakter tertentu (a, b, c, … atau i, ii, iii, …). Tipe list ini biasanya dipakai untuk membuat daftar hal yang saling berhubungan satu sama lain dengan penulisan yang berurutan berdasarkan penomoran tersebut. Sehingga, biasa dipakai untuk membuat suatu list prosedur atau langkah-langkah sehingga pembaca list tersebut dapat mengikuti langkah-langkah tersebut dengan benar.

Untuk membuat ordered list di dalam dokumen HTML, dimulai dengan tag pembuka `<ol>`, ol adalah singkatan dari Ordered List, dan diakhiri dengan tag penutup`</ol>`. Lalu di dalam elemen ol tersebut dituliskan masing-masing isi list di dalam elemen li, li adalah singkatan dari List Item, dengan melingkupi isi list dengan tag pembuka `<li>` dan diakhiri dengan tag penutup `</li>`.

Terdapat atribut pada tag `<ol>` untuk menentukan jenis penomoran yang kita inginkan untuk list tersebut. Atribut tersebut yaitu `type=" "` nilai dari atribut tersebut dapat berupa A untuk list dengan penomoran A, B, C, …, a untuk list dengan penomoran a, b, c, …, I untuk list dengan penomoran I, II, III, …, i untuk list dengan penomoran i, ii, iii, …, berikut contoh pemakain ordered list.

<iframe height="500" width="100%" scrolling="no" title="list::contoh1" src="https://codepen.io/risesia/embed/zYazwjb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/risesia/pen/zYazwjb">
  list::contoh1</a> by Rizky (<a href="https://codepen.io/risesia">@risesia</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Unordered List

Unordered list atau dalam bahasa Indonesia, daftar tidak berurutan merupakan salah satu tipe list pada HTML dimana isi list tersebut disusun tanpa urutan melainkan hanya ditandai dengan tanda atau simbol tertentu. Tipe list ini biasa dipakai untuk daftar yang tidak memerlukan urutan yang pasti.
Untuk membuat unordered list di dalam dokumen HTML, dimulai dengan tag pembuka `<ul>`, ol adalah singkatan dari Unrdered List, dan diakhiri dengan tag penutup `</ul>`. Lalu di dalam elemen ul tersebut dituliskan masing-masing isi list di dalam elemen li, li adalah singkatan dari List Item, dengan melingkupi isi list dengan tag pembuka `<li>` dan diakhiri dengan tag penutup `</li>`.

Terdapat atribut pada tag `<ul>` untuk menentukan jenis penomoran yang kita inginkan untuk list tersebut. Atribut tersebut yaitu type=" " nilai dari atribut tersebut dapat berupa disk untuk list berbentuk bulatan hitam, circle untuk list berbentuk bulatan kosong, square untuk list berbentuk kotak, berikut contoh pemakain unordered list.

<iframe height="300" width="100%" scrolling="no" title="list::contoh2" src="https://codepen.io/risesia/embed/ZERyKRm?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/risesia/pen/ZERyKRm">
  list::contoh2</a> by Rizky (<a href="https://codepen.io/risesia">@risesia</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Definition List

Definition list merupakan salah satu tipe list pada HTML yang berisi kumpulan definisi suatu istilah-istilah tertentu.
Untuk membuat definition list di dalam dokumen HTML, dimulai dengan tag pembuka `<dl>`, dl adalah singkatan dari Definition List, dan diakhiri dengan tag penutup `</dl>`. Di dalam elemen dl, gunakan tag `<dt>` (singkatan dari Definition Title) untuk membuat judul istilah, dan `<dd>` (singkatan dari Definition Description) untuk membuat deskripsi dari istilah tersebut. Seperti pada contoh berikut.

<iframe height="300" width="100%" scrolling="no" title="list::contoh3" src="https://codepen.io/risesia/embed/jOKwmpx?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/risesia/pen/jOKwmpx">
  list::contoh3</a> by Rizky (<a href="https://codepen.io/risesia">@risesia</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Rangkuman

`<div>` Memisahkan wilayah teks yang akan diformat

`<dl>` Membuat daftar definisi

`<dt>` Membuat judul pada daftar definisi

`<dd>` Membuat deskripsi pada daftar definisi

`<ol>` Membuat daftar berurutan

`<ul>` Membuat daftar tidak berurutan

`<li>` Membuat isi dari daftar ol atau ul

## Latihan

> Aspek HOTS pada soal ini: Analyzing, Evaluating.

1. Perbaiki penulisan elemen HTML berikut sehingga sesuai dengan penulisan yang benar.

<iframe height="300" width="100%" scrolling="no" title="Latihan  4.1" src="https://codepen.io/risesia/embed/MWXojNr?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/risesia/pen/MWXojNr">
  Latihan  4.1</a> by Rizky (<a href="https://codepen.io/risesia">@risesia</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

> Aspek HOTS pada soal ini: Creating.

2. Formatlah dengan HTML resep memasak rendang berikut sehingga daftar bahan-bahan menggunakan unordered list dan tata cara membuatnya menggunakan ordered list.

<iframe height="300" width="100%" scrolling="no" title="Latihan 4.2" src="https://codepen.io/risesia/embed/PoajboZ?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/risesia/pen/PoajboZ">
  Latihan 4.2</a> by Rizky (<a href="https://codepen.io/risesia">@risesia</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>