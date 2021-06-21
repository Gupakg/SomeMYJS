let body = document.body

//==============HEADER===========//
let header = document.createElement('header')


let divLogo = document.createElement('div')
divLogo.classList.add('logo')

let imgLogo = document.createElement('img')
imgLogo.src = './images/logo.png'

let h1 = document.createElement('h1')
h1.textContent = 'SLOGAN SLOGAN SLOGAN'

let ulNav = document.createElement('ul')
ulNav.classList.add('nav')

let arrMenu =['Главная', 'О приложении', 'О проекте', 'Скачать', 'Контакты']

for (let i = 0; i < arrMenu.length; i++) {
    let aNav = document.createElement('a')
    let liNav = document.createElement('li')
    ulNav.append(aNav)
    aNav.append(liNav)
    liNav.textContent = arrMenu[i]
}


header.append(divLogo)
divLogo.append(imgLogo)
divLogo.append(h1)
header.append(ulNav)

//==============Section Cards===========//

let sectionCards = document.createElement('section')
sectionCards.classList.add('cards')

for (let i = 0; i < 3; i++) {
    let divCard = document.createElement('div')
    divCard.classList.add('card')

    let cardImg = document.createElement('img')
    cardImg.src = './images/work.png'
    divCard.append(cardImg)

    let cardP = document.createElement('p')
    cardP.textContent = 'Часто ли Вы опаздываете на работу (учёбу)?'
    divCard.append(cardP)

    sectionCards.append(divCard)
}


//==============Section App===========//
let sectionApp = document.createElement('section2')

let h2App = document.createElement('h2')
h2App.textContent = 'О приложении'

let divBanner = document.createElement('div')
divBanner.classList.add('baner')

let imgVideo = document.createElement('img')
imgVideo.classList.add('video')
imgVideo.src = './images/banner.jpg'
let imgPlay = document.createElement('img')
imgPlay.classList.add('play')
imgPlay.src = './images/play-button.png'

let divFiveCards = document.createElement('div')
divFiveCards.classList.add('fiveCards')


for (let i = 0; i < 5; i++) {
    let imgFiveCards = document.createElement('img')
    imgFiveCards.classList.add('fivecards')
    imgFiveCards.src = './images/card.png'
    
    divFiveCards.append(imgFiveCards)
}

divBanner.append(imgVideo, imgPlay)

sectionApp.append(h2App)
sectionApp.append(divBanner)
sectionApp.append(divFiveCards)

//===============Project========//

let sectionProject = document.createElement('section3')

let h2Project = document.createElement('h2')
h2Project.textContent = 'О проекте'

let pProject = document.createElement('p')
pProject.textContent = 'Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. О бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.'


sectionProject.append(h2Project)
sectionProject.append(pProject)


//===============Download===============//

let sectionDownload = document.createElement('section4')

let h2Download = document.createElement('h2')
h2Download.textContent = 'Скачать'

let divDownload = document.createElement('div')
divDownload.classList.add('download')

let imgAndroid = document.createElement('img')
imgAndroid.classList.add('android')
imgAndroid.src = './images/android.png'

let imgQr = document.createElement('img')
imgQr.classList.add('qr')
imgQr.src = './images/qr.png'

let pDownload = document.createElement('p')
pDownload.textContent = 'Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. О бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.'



divDownload.append(imgAndroid, imgQr)

sectionDownload.append(h2Download)
sectionDownload.append(divDownload)
sectionDownload.append(pDownload)

//====================footer===========//
let sectionFooter = document.createElement('footer')

let h3Footer = document.createElement('h3')
h3Footer.textContent = 'SOME'

let divFooter = document.createElement('div')
divFooter.classList.add('social')

let imgVK = document.createElement('img')
imgVK.classList.add('vk')
imgVK.src = './images/vk.png'

let imgINST = document.createElement('img')
imgINST.classList.add('inst')
imgINST.src = './images/instagram.png'

let imgFC = document.createElement('img')
imgFC.classList.add('fc')
imgFC.src = './images/facebook.png'




let divDescr = document.createElement('div')
divDescr.classList.add('descr')
let pDescr = document.createElement('p')
pDescr.textContent = 'Контакты'
            // Tel.: +996 (312) 915000  
            // + Еxt  Fax: +996 (312) 915 028'

let divAdress = document.createElement('div')
divAdress.classList.add('adress')

let pAdress = document.createElement('p')
pAdress.textContent = 'Адреса'
// American University of Central Asia <br>
// 7/6 Aaly Tokombaev Street<br>
// Bishkek, Kyrgyz Republic 720060

let divHelp = document.createElement('div')
divHelp.classList.add('help')

let pHelp = document.createElement('p')
pHelp.textContent = 'Помощь'
// Помощь <br>
// Помощь<br>
// Помощь


divFooter.append(imgVK, imgINST, imgFC)

sectionFooter.append(h3Footer)
sectionFooter.append(divFooter)
sectionFooter.append(divDescr)
sectionFooter.append(pDescr)
sectionFooter.append(divAdress)
sectionFooter.append(pAdress)
sectionFooter.append(divHelp)
sectionFooter.append(pHelp)

















body.append(header)
body.append(sectionCards)
body.append(sectionApp)
body.append(sectionProject)
body.append(sectionDownload)
body.append(sectionFooter)




// //====================ИЛИ МОЖНО И ТАК===============

// document.body.innerHTML = `
// <header>
//         <div class="logo">
//             <img src="./images/logo.png" alt="Logo">
//             <h1>SLOGAN SLOGAN SLOGAN</h1>
//         </div>

//         <ul class="nav">
//             <a href="">
//                 <li>Главная</li>
//             </a>
//             <a href="">
//                 <li>О приложении</li>
//             </a>
//             <a href="">
//                 <li>О проекте</li>
//             </a>
//             <a href="">
//                 <li>Скачать</li>
//             </a>
//             <a href="">
//                 <li>Контакты</li>
//             </a>
//         </ul>
//     </header>

//     <section class="cards">

//         <div class="card">
//             <img src="./images/work.png" alt="">
//             <p>Часто ли Вы опаздываете на работу (учёбу)?</p>
//         </div>
//         <div class="card">
//             <img src="./images/work.png" alt="">
//             <p>Часто ли Вы опаздываете на работу (учёбу)?</p>
//         </div>
//         <div class="card">
//             <img src="./images/work.png" alt="">
//             <p>Часто ли Вы опаздываете на работу (учёбу)?</p>
//         </div>

//     </section>

//     <section class="app">

//         <h2>О приложении</h2>

//         <div class="baner">
//             <img class="video" src="./images/banner.jpg" alt="">
//             <img class="play" src="./images/play-button.png" alt="">
//         </div>

//         <div class="fiveCards">
//             <img src="./images/card.png" alt="">
//             <img src="./images/card.png" alt="">
//             <img src="./images/card.png" alt="">
//             <img src="./images/card.png" alt="">
//             <img src="./images/card.png" alt="">
//         </div>
//     </section>

//     <section class="project">
//         <h2>О проекте</h2>
//         <p>
//             Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные
//             бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса:
//             от разработки идеи до ее реализации.
//         </p>
//     </section>

//     <section class="download">
//         <h2>Скачать</h2>
//         <div class="icons">
//             <img class="android" src="./images/android.png" alt="">
//             <img class="qr" src="./images/qr.png" alt="">
//         </div>
//         <p>Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные бизнесмены,
//             инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки
//             идеи до ее реализации.</p>
//     </section>

//     <footer>
//         <h3>SOME</h3>

//         <div class="social">
//             <img src="./images/vk.png" alt="">
//             <img src="./images/instagram (1).png" alt="">
//             <img src="./images/facebook.png" alt="">
//         </div>

//         <div class="descr">
//             <div class="contacts">
//                 <p>Контакты</p>
//                 <p>
//                     Tel.: +996 (312) 915000 <br>
//                     + Еxt <br>
//                     Fax: +996 (312) 915 028
//                 </p>
//             </div>
//             <div class="adress">
//                 <p>Адреса</p>
//                 <p>
//                     American University of Central Asia <br>
//                     7/6 Aaly Tokombaev Street<br>
//                     Bishkek, Kyrgyz Republic 720060
//                 </p>
//             </div>
//             <div class="help">
//                 <p>Помощь</p>
//                 <p>
//                     Помощь <br>
//                     Помощь<br>
//                     Помощь
//                 </p>
//             </div>
//         </div>

//     </footer> `


