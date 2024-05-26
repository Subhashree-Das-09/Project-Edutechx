

 const path1 = document.querySelector('.line1');
    const path2 = document.querySelector('.line2');

    
    window.addEventListener('scroll', () => {
        const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

        path1.style.height = 100 * scrollPercentage + '%';
        path2.style.height = 100 * scrollPercentage + '%';


    });


const vdos = document.querySelectorAll(".title");

for (let i = 0; i < vdos.length; i++) {
   vdos[i].addEventListener("click", ()=>{
       window.location.href = "./course/course.html";

   })
}



document.querySelector(".one").addEventListener("click", ()=>{
    window.location.href ="./Dept Details/civil/index.html";
});

document.querySelector(".two").addEventListener("click", ()=>{
    window.location.href ="./Dept Details/elec/index.html";
});

document.querySelector(".three").addEventListener("click", ()=>{
    window.location.href ="./Dept Details/mech/index.html";
});

document.querySelector(".four").addEventListener("click", ()=>{
    window.location.href ="./Dept Details/cse/index.html";
});

document.querySelector(".five").addEventListener("click", ()=>{
    window.location.href ="./Dept Details/it/index.html";
});

document.querySelector(".six").addEventListener("click", ()=>{
    window.location.href ="./Dept Details/etc/index.html";
});

document.querySelector(".seven").addEventListener("click", ()=>{
    window.location.href ="./Dept Details/auto/index.html";
});

document.querySelector(".eight").addEventListener("click", ()=>{
    window.location.href ="./Dept Details/aei/index.html";
});

