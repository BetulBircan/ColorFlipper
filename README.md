# Color Flipper Projesi
## Proje Açıklaması
Bu projenin amacı butona tıkladığımızda rastgele rengin değişmesi ve hexadecimal kodunu ekranda göstermektir.

- Bunun için ilk başta index.html dosyası oluşturdum. Daha sonra div oluşturarak h1 etiketi ve butonu bu div içerisine aldım.

```
    <div class="container">
        <h1>Color Code:<span id="text"></span></h2>
        <button class="btn">Change Color</button>
    </div>
```
- Sayfamızın body bölümüne, oluşturulan butona ve h1 içerisiindeki yazılacak metne çeşitli stiller oluşturmak için style.css dosyası oluşturup içerisine gerekli css kodlarını yazdım ve bu dosyayı index.html dosyası içerisine link etiketi ile dahil ettim.

```
/* sayfanın tamamı için */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* body kısmı için */
body{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: cornsilk;
}

/* container klasına sahip div için oluşturulan stiller */
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height:200px;
    padding: 20px;
    background-color: burlywood;
    color: gray;

}

/* span içerisindeki text için oluşturulan yazı stili */
#text {
    font: 100% "Helvetica Neue","sans-serif";
}

/* buton için stiller */
.btn {
    font: 100% "Helvetica Neue","sans-serif";
    margin:10px 0;
    padding: 10px 20px;
    cursor:pointer;
    background-color:antiquewhite;
    color:dimgrey;
}

/* butona tıklanıldığı zaman oluşacak stiller */
.btn:focus {
    background-color:deepskyblue;
    color:aliceblue;
}

```

![colorflipper](https://user-images.githubusercontent.com/86554799/158017999-b0565120-7d70-403d-b7fd-852de584ad76.jpg)

- En sonunda da butona tıklandığında rastgele üretilen renklerle arka plan renginin değişmesi ve üretilen renk kodunun ekrana yazdırılması için gereken javascript kodlarını app.js dosyasına yadım daha sonrasında da script etiketi ile index.html dosyasına dahil ettim.

![colorflipper](https://user-images.githubusercontent.com/86554799/158018851-df180f43-91a1-4bef-a86b-141b0d755860.gif)

