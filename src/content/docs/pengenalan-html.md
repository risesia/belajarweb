---
title: Pengenalan HTML
descriptin: Memahami dasar dari HTML
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png)

## Sejarah HTML

HTML (HyperText Markup Language) dikembangkan oleh Tim Berners-Lee, ia merilis spesifikasi publik pertama dari HTML pada tahun 1991. Kemudian, pada tahun 1997 dilakukan modifikasi terhadap HTML oleh World Wide Web Consortium (W3C). Namun, W3C pada akhir tahun 1990-an berfokus untuk mengembangkan spesifikasi XHTML 1.0 daripada mengembangkan spesifikasi HTML yang ada. XHTML merupakan versi dari HTML yang menggunakan aturan syntax ketat XML (Extensible Markup Language). Pada pertengahan tahun 2000-an W3C merilis draft spesifikasi XHTML 2.0. Spesifikasi tersebut mengajukan perubahan revolusioner dan substansial terhadap HTML. Pengembangan spesifikasi XHTML 2.0 terus mengalami penundaan selama bertahun-tahun, hal ini disebabkan oleh ketidaknyamanan manufaktur dan pengembang browser serta komunitas pengembang web yang harus melakukan perombakan besar terhadap website yang telah ada.

Selama pengembangan spesifikasi XHTML 2.0 oleh W3C, kelompok pengembang Opera dan Mozilla membentuk WHATWG (Web Hypertext Application Technology Working Group) di dalam W3C. Kelompok ini tidak yakin terhadap keputusan W3C untuk mendukung XML dan mengabaikan backwards-compatibility sebagai cara terbaik untuk web kedepannya. WHATWG berfokus untuk membentuk versi spesifikasi HTML mereka sendiri dan berfokus pada sebagaimana web yang ada sebelumnya. Pada tahun 2009, W3C menghentikan pengerjaan XHTML 2.0 dan mengadopsi versi spesifikasi yang dikerjakan oleh WHATWG, spesifikasi tersebut dinamai sebagai HTML5.

## Pengertian HTML

HTML adalah sebuah bahasa markup yang mendefinisikan struktur dari konten suatu website. HTML terdiri atas kumpulan elemen, yang diterapkan dengan melingkupi bagian-bagian yang berbeda dari konten tersebut sehingga dapat tampil dan bekerja sesuai dengan ekspektasi. Pada HTML, tag dapat membuat suatu kata atau gambar menjadi hyperlink ke suatu halaman di internet, atau membuat suatu kata menjadi italic, atau dapat membuat font yang dipakai menjadi lebih besar atau kecil, dan lainnya. Perhatikan contoh berikut.

```
Saya seorang pelajar
```

Jika kita ingin menunjukkan kalimat tersebut sebagaimana adanya, kita dapat menyatakan bahwa kalimat tersebut merupakan sebuah paragraf dengan melingkupinya dengan tag paragraf sebagai berikut.

```html
<p>Saya seorang pelajar</p>
```

## Pengertian Tag, Elemen, dan Atribut pada HTML

Mari kita perhatikan elemen sebelumnya.

```html
<p>Saya seorang pelajar</p>
```

*Tag pembuka* yaitu `<p>` pada bagian awal. Terdiri atas nama dari elemen, dalam contoh ini yaitu p, dilingkupi dalam kurung siku. Menyatakan mulainya elemen, pada contoh ini menunjukkan dimulainya paragraf.

*Tag penutup* yaitu `</p>` pada bagian akhir. Sama seperti tag pembuka namun terdapat forward slash (/). Menyatakan berakhirnya elemen, pada contoh ini menyatakan berakhirnya paragraf.

*Konten* yaitu Saya seorang pelajar. Menunjukkan isi dari elemen, pada contoh ini yaitu teks.

*Elemen* merupakan gabungan dari tag pembuka, tag penutup, dan isi. Elemen dapat memiliki atribut sebagai berikut.

```html
<p class="biografi">Saya seorang pelajar</p>
```
Atribut berisi informasi tambahan tentang elemen yang tidak ingin ditampilkan dalam konten. Di sini, class adalah nama atribut dan biografi adalah nilai atribut. Atribut kelas memungkinkan untuk memberikan elemen pengenal non-unik yang dapat digunakan untuk menargetkannya (dan elemen lain dengan nilai kelas yang sama) dengan informasi gaya dan hal-hal lain.

## Struktur Dasar Dokumen HTML

Berikut adalah struktur dasar dari setiap dokumen HTML.
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Judul Halaman</title>
    </head>
    <body>
        Konten halaman
        berada disini
    </body>
</html>
```

Seperti terlihat, struktur file HTML diawali dengan sebuah tag `<html>` dan ditutup dengan tag `</html>`. Di dalam tag ini terdapat dua buah bagian besar, yaitu yang diapit oleh tag `<head>...</head>` dan tag `<body>...</body>`.

Bagian yang diapit oleh tag head merupakan header dari halaman HTML dan tidak ditampilkan pada browser. Bagian ini berisi tag-tag header seperti `<title>...</title>` yang berfungsi untuk mengeluarkan judul pada title bar window web browser.

Bagian kedua, yang diapit oleh tag body merupakan bagian yang akan ditampilkan pada halaman web browser nantinya. Pada bagian ini kita akan menuliskan semua jenis informasi berupa teks dengan bermacam format maupun gambar yang ingin sampaikan pada pengguna nantinya

## Rangkuman

1. HTML (HyperText Markup Language) dikembangkan oleh Tim Berners-Lee, ia merilis spesifikasi publik pertama dari HTML pada tahun 1991.
2. HTML adalah sebuah bahasa markup yang mendefinisikan struktur dari konten suatu website.
3. Tag pembuka menyatakan mulainya elemen, tag penutup menyatakan berakhirnya elemen.
4. Elemen merupakan gabungan dari tag pembuka, tag penutup, dan isi.
5. Atribut berisi informasi tambahan tentang elemen yang tidak ingin ditampilkan dalam konten.
6. Struktur file HTML diawali dengan sebuah tag `<html>` dan ditutup dengan tag `</html>`. Di dalam tag ini terdapat dua buah bagian besar, yaitu yang diapit oleh tag `<head>...</head>` dan tag `<body>...</body>`.

## Latihan

> Aspek HOTS pada soal ini: Analyzing, Evaluating.

1. Perbaiki penulisan elemen HTML berikut sehingga sesuai dengan penulisan yang benar dan menghasikan output sebagai berikut.

```
Output:
Saya sedang belajar HTML
```
<iframe height="300" width= '100%' scrolling="no" title="Untitled" src="https://codepen.io/risesia/embed/XWYNbBp?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/risesia/pen/XWYNbBp">
  Untitled</a> by Rizky (<a href="https://codepen.io/risesia">@risesia</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

> Aspek HOTS pada soal ini: Creating.

2. Buatlah paragaf berikut ke dalam elemen HTML paragraf dengan penulisan elemen yang benar dan menghasilkan output sebagai berikut dimana dua paragraf terpisah, tidak menyatu.

```
Output:
Pancasila sebagai jiwa bangsa Indonesia, sebagai nilai-nilai kehidupan dalam masyarakat bangsa Indonesia melalui penjabaran instrumental sebagai acuan hidup yang merupakan cita-cita yang ingin dicapai serta sesuai dengan napas jiwa bangsa Indonesia dan karena Pancasila lahir bersama dengan lahirnya bangsa Indonesia.

Pancasila sebagai kepribadian bangsa Indonesia, merupakan bentuk peran dalam menunjukan adanya kepribadian bangsa Indonesia yang dapat di bedakan dengan bangsa lain, yaitu sikap mental, tingkah laku, dan amal perbuatan bangsa Indonesia.
```

<iframe height="300" width= "100%" scrolling="no" title="Untitled" src="https://codepen.io/risesia/embed/JjZbYdv?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/risesia/pen/JjZbYdv">
  Untitled</a> by Rizky (<a href="https://codepen.io/risesia">@risesia</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>