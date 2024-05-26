// dropdown sem code
const dropdownBtns = document.querySelectorAll(".sem_btn");

dropdownBtns.forEach(function (dropdownBtn) {
  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    const dropdownMenu = dropdownBtn.nextElementSibling;
    const toggleArrow = dropdownBtn.querySelector(".dd_arrow");

    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
  });
});

// main pdf and vdo button
const pdfBtn = document.querySelector(".icon1");
const vdoBtn = document.querySelector(".icon2");
const pdf = document.querySelector(".pdf");
const vdo = document.querySelector(".video");

pdfBtn.addEventListener("click", function () {
  vdo.classList.remove("clicked");
  pdf.classList.toggle("clicked");
});

vdoBtn.addEventListener("click", function () {
  pdf.classList.remove("clicked");
  vdo.classList.toggle("clicked");
});

//pdf open
const pdfobject = document.querySelector(".pdfobject");
// const bothBtn = document.querySelectorAll('.icon');

pdfBtn.addEventListener("click", function () {
  vdoobject.style.visibility = "none";
  if (pdf.classList.contains("clicked")) {
    pdfobject.style.display = "block";
  } else {
    pdfobject.style.display = "none";
  }
});

//vdo open
const vdoobject = document.querySelector('.vd')
   
vdoBtn.addEventListener("click", function () {
  pdfobject.style.display = "none";
  if (vdo.classList.contains("clicked")) {
    vdoobject.style.visibility = "visible";
  } else {
    vdoobject.style.visibility = "hidden";
  }
});

const li = document.querySelectorAll(".sub>li");

document.querySelector(".one").addEventListener("click", function(){  
  pdfobject.src = "./IT/1st/ENGINEERING-MATH-1-1st-sem-LM - 2021-09-24T145657.023.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".two").addEventListener("click", function(){  
  pdfobject.src = "./IT/1st/Engineering-Chemistry-1ST-YEAR-LM.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".three").addEventListener("click", function(){  
  pdfobject.src = "./IT/1st/Communicative-English-1st-yr-LM.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".four").addEventListener("click", function(){  
  pdfobject.src = "./IT/1st/Basic_Electrical_Engineering_1st-year-LM.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".five").addEventListener("click", function(){  
  pdfobject.src = "./IT/1st/Basic-Electronics-1st-year-LM.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".six").addEventListener("click", function(){  
  pdfobject.src = "./IT/2nd/Eng-Math-II-2nd-sem-LM.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".seven").addEventListener("click", function(){  
  pdfobject.src = "./IT/2nd/Engg_Physics-1st-year-LM.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".eight").addEventListener("click", function(){  
  pdfobject.src = "./IT/2nd/Engineering-Mechanics-1st-yr-LM.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".nine").addEventListener("click", function(){  
  pdfobject.src = "./IT/2nd/Computer-Application-1st-yr-LM.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".ten").addEventListener("click", function(){  
  pdfobject.src = "./IT/3rd/DE.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".eleven").addEventListener("click", function(){  
  pdfobject.src = "./IT/3rd/OOM ALL CHAPTERS.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".twelve").addEventListener("click", function(){  
  pdfobject.src = "./IT/3rd/Environmental Studies.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".thirteen").addEventListener("click", function(){  
  pdfobject.src = "./IT/3rd/CSA LN.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".fourteen").addEventListener("click", function(){  
  pdfobject.src = "./IT/3rd/DS.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".fifteen").addEventListener("click", function(){  
  pdfobject.src = "./IT/4th/OS.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".sixteen").addEventListener("click", function(){  
  pdfobject.src = "./IT/4th/MPMC ALL CHAPTERS.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".seventeen").addEventListener("click", function(){  
  pdfobject.src = "./IT/4th/Database Management System.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".eighteen").addEventListener("click", function(){  
  pdfobject.src = "./IT/4th/DCCN.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".nineteen").addEventListener("click", function(){  
  pdfobject.src = "./IT/5th/MOBILE COMPUTING.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".twenty").addEventListener("click", function(){  
  pdfobject.src = "./IT/5th/Eim.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".twentyone").addEventListener("click", function(){  
  pdfobject.src = "./IT/5th/I&WT Full Notes.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".twentytwo").addEventListener("click", function(){  
  pdfobject.src = "./IT/5th/Cgm.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".twentythree").addEventListener("click", function(){  
  pdfobject.src = "./IT/5th/SE full.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".twentyfour").addEventListener("click", function(){  
  pdfobject.src = "";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".twentyfive").addEventListener("click", function(){  
  pdfobject.src = "";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".twentysix").addEventListener("click", function(){  
  pdfobject.src = "./IT/6th/IOT.pdf";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});

document.querySelector(".twentyseven").addEventListener("click", function(){  
  pdfobject.src = "";
  li.forEach(function(item) {
    item.classList.remove("activeli");
});
  this.classList.add("activeli");
});



//   const pdfobject = document.querySelector(".pdfobject");

//   const pd = document.querySelector(".pd");

// if(pdfobject.src === ""){
//   pdfobject.style.display = "none";
//    pd.style.visibility = "visible";
// }
