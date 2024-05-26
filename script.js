const excourse = document.querySelectorAll(".ecvdo");

for (let i = 0; i < 6; i++) {
    excourse[i].addEventListener("click", ()=>{
        window.location.href = "./Learnmore-excouse/excourse.html";
    }); 
}

const ecbtn = document.querySelector(".ec-btn");

    ecbtn.addEventListener("click", ()=>{
        window.location.href = "./Learnmore-excouse/Learn more.html";
    }); 


    
const cambtn =  document.querySelector(".cam-btn");
cambtn.addEventListener("click", ()=>{
    window.location.href = "../aboutus/ONCLICK/index.html";
});


const notice_btn = document.querySelector(".noticebtn");
notice_btn.addEventListener("click", ()=>{
    window.location.href = "./Notice board/index.html"
});