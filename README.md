# Axios-Router Project

###Project Tree
![project](projecttree.jpg)

### Kullanılan Paketler
```
axios,
react-router-dom,
react-bootsrap //index e link veriyoruz
styled-components
Yükleme Komutları
npm i axios or yarn add axios//axios ile veri çekeilmek için
npm i react-router-dom or yarn add react-router-dom//router yapısını kullanabilmemiz için
npm i react-bootstrap or yarn add react-bootstrap// style de react-boostrapi kullanabilmek
için
npm i styled-components or yarn add styled-components
```
### Projede Kullanılacak olan Api
[Github Api](https://docs.github.com/en/rest/users)
Buradan biz followers kısmını alacağız .
[GithubAPiFollowers](https://api.github.com/users/anthonyharold67/followers?per_page=100)

Api nin verdği farklı veriler de var isteyen inceleyip proje oluşturabilir ona göre.

### React Router
Routing Nedir ? 
```
Yönlendirme, kullanıcıya farklı sayfalar gösterme kapasitesidir. Bu, kullanıcının bir URL girerek veya bir öğeye tıklayarak uygulamanın farklı bölümleri arasında hareket edebileceği anlamına gelir.
```

Neden react router kullanılıyor ?

React hepimizn bildiği gibi single page bir yapı. sayfalar arası gezinebilmek için router yapısını kullanırız.

Single Page Nedir?
```
Single page application yani kısa adıyla SPA, tek HTML sayfası yükleyen bir uygulamadır ve uygulamanın çalışması için gerekli tüm dosyaları (JavaScript, CSS vb) içerir. Sayfa veya sonraki sayfalarla olan herhangi bir etkileşim için servera gidip gelmesi gerektirmez; bu da sayfanın yeniden yüklenmediği anlamına gelir.
Reactte SPA oluşturabilmenize rağmen, bu bir zorunluluk değildir. React, hali hazırda çalışan bir sitenin küçük bölümlerini geliştirmek için de kullanılabilir. React’te yazılmış kod, diğer diller ile de kullanılabilir. Facebook’un sitesi buna en iyi örnektir
```

Yani normal html projelerinde bizim örneğin home.html,about.html,profile.html yapılarımız var.Biz napıyoruz bunları biribirne `<a>` tagi ile bağlıyoruz. Aslında 3sayfada tek projeye ait ama html yapısından ötürü biz home.html den about.html e gitmek istediğimizde farklı bir sayfaya gidiyoruz.
React ta ise tek bir sayfa içinde sayfa olarak oluşturduğumuz componentler arasında geziniyoruz
