const row = document.querySelector('.row')
const gradient = document.querySelector('.nil')
const woman=document.querySelector('.woman')
const h2=document.querySelector('.h2')
const menu=document.querySelector('.menu')
const part2=document.querySelector('.part2')
const part3=document.querySelector('.part3')
const part4=document.querySelector('.part4')
const contain=document.querySelector('.contain')
const part5=document.querySelector('.part5')
const part6=document.querySelector('.part6contain')
const part6word=document.querySelector('.part6')
const part7=document.querySelectorAll('.part7')
const t1=document.querySelectorAll('.t1')
const part8=document.querySelector('.part8')
const fig=document.querySelectorAll('.fig')
const whyus = document.querySelector('.whyus')
const metrics = document.querySelector('.metrics')

const part9=document.querySelector('.part9')
const part9text=document.querySelector('.part9text')



const title=document.querySelectorAll('.title')





window.addEventListener('scroll', () => {

    const rowTop = row.getBoundingClientRect().top

    const scrolled = Math.max(0, -rowTop)

    
    const dark = Math.min(scrolled / 1000, 1)

    gradient.style.setProperty('--dark', dark)


    
    
    if (dark > 0.7) {

        const opacity = (1 - dark) / 0.3

        woman.style.opacity = opacity
        h2.style.fontSize='230'+'px'
        if(dark==1){
            h2.style.opacity = opacity
        }

    } else {

        woman.style.opacity = 1
        h2.style.opacity = 1
        h2.style.fontSize='170'+'px'

    }



    /////////////////////////////

    const toppart2 = part2.getBoundingClientRect().top

if (toppart2 < 1000) {
    part2.style.scale = '0.4'
}
if (toppart2 <750) {
    part2.style.scale = '0.7'
}
if (toppart2 < 500) {
    part2.style.scale = '0.8'
}

if (toppart2 <= 250) {
    part2.style.scale = '1'
}



////////////////////////////////////////

const toppart3 = part3.getBoundingClientRect().top
const bottompart3=part3.getBoundingClientRect().bottom



if (toppart3 < 1000) {
    part3.style.transform = 'translateX(-480px)'
}
if (toppart3 <600) {
    part3.style.transform = 'translateX(-380px)'
}
if (toppart3 <500) {
    part3.style.transform = 'translateX(-300px)'
}
if (toppart3 < 550) {
    part3.style.transform = 'translateX(-220px)'
}
if (toppart3 < 450) {
    part3.style.transform = 'translateX(-140px)'
    part3.style.gap='90px'
}
if (toppart3 < 350) {
    part3.style.transform = 'translateX(-60px)'
    part3.style.gap='50px'
    // part4.style.color='white'
    contain.style.backgroundColor='black'
}

if (toppart3 < 250) {
    part3.style.transform ='translateX(0px)'
    part3.style.gap='20px'
    
    
}
if(toppart3 < 150){
part4.style.color='gray'
contain.style.backgroundColor='#212121'
}
if (toppart3 < 50) {
    part4.style.color='lightgray'
    contain.style.backgroundColor='#646464'
    
}
if (bottompart3 <=270) {
    part4.style.color='black'
    contain.style.backgroundColor='white'
    part5.style.transform = 'translateX(0px)'
}
if (bottompart3 <=100) {
    part5.style.transform = 'translateX(-300px)'
}
if (bottompart3 <=0) {
    part5.style.transform = 'translateX(-600px)'
}
if (bottompart3 <=-150) {
    part5.style.transform = 'translateX(-650px)'
}
if (bottompart3 <=-200) {
    part5.style.transform = 'translateX(-700px)'
    title[0].classList.add('translate-x-78')
}
////////////////////////////////////////////////

const toppart6=part6.getBoundingClientRect().top

if(toppart6 <= 500){
    
    title[0].classList.remove('translate-x-78')
    title[0].style.transform='translateX(0px)'
    
    title[1].classList.remove('translate-x-190')
    title[1].classList.add('translate-x-140')
    
}
if(toppart6 <= 250){
    
    title[1].classList.remove('translate-x-140')
    title[1].classList.add('translate-x-60')
    part6word.style.backgroundColor='white'
    title.forEach((item) => {
    item.style.color = 'black'
})
    
    
    
    
}
if(toppart6 <= 0){

    title[1].classList.remove('translate-x-60')
    title[1].classList.add('translate-x-0')

    title[2].classList.remove('translate-x-290')
    title[2].classList.add('translate-x-120')

    part6word.style.backgroundColor='#17112f'

    title.forEach((item) => {
        item.style.color='#c4b5fd'
    })

}


if(toppart6 <= -300){

    title[2].classList.remove('translate-x-120')
    title[2].classList.add('translate-x-0')

    part6word.style.backgroundColor='#312e81'

    title.forEach((item) => {
        item.style.color='#a5b4fc'
    })

}


if(toppart6 <= -400){

    part6word.style.backgroundColor='#4c1d95'

    title.forEach((item) => {
        item.style.color='#e9d5ff'
    })

}


if(toppart6 <= -600){

    part6word.style.backgroundColor='#5b21b6'

    title.forEach((item) => {
        item.style.color='#f0abfc'
    })

}


if(toppart6 <= -900){

    part6word.style.backgroundColor='#7e22ce'

    title.forEach((item) => {
        item.style.color='#f5d0fe'
    })

}
if(toppart6 <= -1100){
    part6word.style.backgroundColor='white'
    title.forEach((item) => {
    item.style.color = 'black'
    
})
    
}

//////////////////////////////////////




part7.forEach((part,index)=>{
    const toppart7=part.getBoundingClientRect().top
       const text = t1[index]
       let gray = Math.min(Math.max((600 - toppart7) / 900, 0), 1)

    part.querySelector('img').style.filter = `grayscale(${gray})`

    if(toppart7 <=700){
    text.style.scale='1'
}
if(toppart7 <=500){
    text.style.scale='2'
}
if(toppart7 <=400){
    text.style.scale='2.5'
}
if(toppart7 <=300){
    text.style.scale='3'
    part.style.scale='1'
    // part.classList.add('grayscale-0')
}
if(toppart7 <=200){
    
    part.style.scale='0.8'
    
    // part.classList.add('grayscale-50')
}
if(toppart7 <=100){
    
    part.style.scale='0.7'
}
if(toppart7 <=0){
    
    part.style.scale='0.6'
    
    // part.classList.add('grayscale-75')
}
if(toppart7 <=-100){
    
    part.style.scale='0.5'
}
if(toppart7 <=-200){
    
    part.style.scale='0.4'

    // part.classList.add('grayscale-100')
}
})

//////////////////////////////////////////////////////

const toppart8 = part8.getBoundingClientRect().top


if (toppart8 > 0) {
    fig[0].style.transform = 'translateX(180px)'
    fig[0].style.opacity = '0.5'

    fig[1].style.transform = 'translateX(360px)'
    fig[1].style.opacity = '0'

    fig[2].style.transform = 'translateX(600px)'
    fig[2].style.opacity = '0'
}


if (toppart8 <= 0) {
    fig[0].style.transform = 'translateX(120px)'
    fig[0].style.opacity = '0.7'

    fig[1].style.transform = 'translateX(240px)'
    fig[1].style.opacity = '0.2'
}


if (toppart8 <= -150) {
    fig[0].style.transform = 'translateX(80px)'
    fig[0].style.opacity = '0.8'

    fig[1].style.transform = 'translateX(180px)'
    fig[1].style.opacity = '0.4'
}


if (toppart8 <= -300) {
    fig[0].style.transform = 'translateX(40px)'
    fig[0].style.opacity = '0.9'

    fig[1].style.transform = 'translateX(100px)'
    fig[1].style.opacity = '0.7'

    fig[2].style.transform = 'translateX(300px)'
    fig[2].style.opacity = '0.4'
}


if (toppart8 <= -400) {
    fig[0].style.transform = 'translateX(20px)'
    fig[0].style.opacity = '1'

    fig[1].style.transform = 'translateX(50px)'
    fig[1].style.opacity = '0.9'

    fig[2].style.transform = 'translateX(200px)'
    fig[2].style.opacity = '0.6'
}


if (toppart8 <= -500) {
    fig[1].style.transform = 'translateX(20px)'
    fig[1].style.opacity = '1'

    fig[2].style.transform = 'translateX(100px)'
    fig[2].style.opacity = '0.8'
}


if (toppart8 <= -600) {
    fig[2].style.transform = 'translateX(0px)'
    fig[2].style.opacity = '1'
} 
//////////////////////////////////////////////////////////////


  const topwhyus = whyus.getBoundingClientRect().top
    const topmetrics = metrics.getBoundingClientRect().top

     if (topwhyus > 700) {
        whyus.style.transform = 'translateX(-300px)'
        whyus.style.opacity = '0'
    }

    if (topwhyus <= 700) {
        whyus.style.transform = 'translateX(0px)'
        whyus.style.opacity = '1'
    }


    if (topmetrics > 700) {
        metrics.style.transform = 'translateX(300px)'
        metrics.style.opacity = '0'
    }

    if (topmetrics <= 700) {
        metrics.style.transform = 'translateX(0px)'
        metrics.style.opacity = '1'
    }

    ///////////////////////////////////////////////////////

    const toppart9=part9.getBoundingClientRect().top

    if(toppart9 > 0){
        part9text.style.transform = 'translateY(112px)'
        part9text.style.opacity = '0'

    }

    if(toppart9 <= 300){
        part9text.style.transform = 'translateY(0)'
        part9text.style.opacity = '1'

    }
    //////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////

const profile=document.querySelector('.profile-wrap')
const profilecard=document.querySelector('.profile-card')
const profileimage=document.querySelector('.profile-image')
const profilecontent=document.querySelector('.profile-content')
const profiletop=document.querySelector('.profile-top')
const profilebg=document.querySelector('.profile-bg-text')
const profileglow=document.querySelector('.profile-glow')
const skill=document.querySelectorAll('.skill')


const topprofile=profile.getBoundingClientRect().top


if(topprofile > 700){

    profilecard.style.transform='translateY(100px) scale(.72)'

    profileimage.style.transform='translateY(100px) translateZ(60px)'

    profilecontent.style.transform='translateY(80px) translateZ(100px)'

    profiletop.style.transform='translateY(0px) translateZ(90px)'

    profilebg.style.transform='translateX(0px) translateZ(-300px)'

    profileglow.style.transform='translateY(0px) translateZ(-100px)'

}


if(topprofile <= 700){

    profilecard.style.transform='translateY(70px) scale(.76)'

    profileimage.style.transform='translateY(70px) translateZ(60px)'

    profilecontent.style.transform='translateY(60px) translateZ(100px)'

    profiletop.style.transform='translateY(-10px) translateZ(90px)'

    profilebg.style.transform='translateX(-40px) translateZ(-300px)'

    profileglow.style.transform='translateY(-20px) translateZ(-100px)'

}


if(topprofile <= 500){

    profilecard.style.transform='translateY(40px) scale(.82)'

    profileimage.style.transform='translateY(40px) translateZ(65px)'

    profilecontent.style.transform='translateY(30px) translateZ(105px)'

    profiletop.style.transform='translateY(-30px) translateZ(95px)'

    profilebg.style.transform='translateX(-80px) translateZ(-300px)'

    profileglow.style.transform='translateY(-40px) translateZ(-100px)'

}


if(topprofile <= 300){

    profilecard.style.transform='translateY(15px) scale(.88)'

    profileimage.style.transform='translateY(15px) translateZ(70px)'

    profilecontent.style.transform='translateY(0px) translateZ(110px)'

    profiletop.style.transform='translateY(-45px) translateZ(100px)'

    profilebg.style.transform='translateX(-120px) translateZ(-300px)'

    profileglow.style.transform='translateY(-60px) translateZ(-100px)'

}


if(topprofile <= 100){

    profilecard.style.transform='translateY(0px) scale(.93)'

    profileimage.style.transform='translateY(-10px) translateZ(75px)'

    profilecontent.style.transform='translateY(-30px) translateZ(115px)'

    profiletop.style.transform='translateY(-60px) translateZ(105px)'

    profilebg.style.transform='translateX(-160px) translateZ(-300px)'

    profileglow.style.transform='translateY(-80px) translateZ(-100px)'

}


if(topprofile <= -100){

    profilecard.style.transform='translateY(-20px) scale(.96)'

    profileimage.style.transform='translateY(-30px) translateZ(80px)'

    profilecontent.style.transform='translateY(-50px) translateZ(120px)'

    profiletop.style.transform='translateY(-75px) translateZ(110px)'

    profilebg.style.transform='translateX(-200px) translateZ(-300px)'

}


if(topprofile <= -250){

    profilecard.style.transform='translateY(-40px) scale(.98)'

    profileimage.style.transform='translateY(-50px) translateZ(85px)'

    profilecontent.style.transform='translateY(-70px) translateZ(125px)'

    profiletop.style.transform='translateY(-90px) translateZ(115px)'

    profilebg.style.transform='translateX(-240px) translateZ(-300px)'

}


//////////////////////////////////////////////////////////////





})



