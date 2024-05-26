// const downArrow = document.querySelector('.down');
// const upArrow = document.querySelector('.up');

// const currentDiv = document.querySelector('.current');
// const previousDiv = document.querySelector('.prev');
// const nextDiv = document.querySelector('.next');
// const hideDiv = document.querySelector('.hide');


// downArrow.addEventListener('click', () => {
//   const currentText = currentDiv.textContent;
//   currentDiv.textContent = previousDiv.textContent;
//   previousDiv.textContent = hideDiv.textContent;
//   hideDiv.textContent = nextDiv.textContent;
//   nextDiv.textContent = currentText;

// });

// upArrow.addEventListener('click', () => {
//     const currentText = currentDiv.textContent;
//     currentDiv.textContent = nextDiv.textContent;
//     nextDiv.textContent = hideDiv.textContent;
//     hideDiv.textContent = previousDiv.textContent;
//     previousDiv.textContent = currentText;
//   });

//   const { gsap, imagesLoaded } = window;
//   function animateContainer(container, duration = 0.5, delay = 0.15) {
//     const tl = gsap.timeline();
  
//     tl.to(container.children, {
//       delay: delay,
//       duration: duration,
//       stagger: {
//         ease: "power4.inOut",
//         from: "right",
//         amount: 0.1,
//       },
//       // "--card-translateY-offset": "0%",
//     });
  
//     return tl;
//   }

//   const ContainerEl = document.querySelector("container");
// animateCardContainer(ContainerEl);


const downArrow = document.querySelector('.down');
const upArrow = document.querySelector('.up');

const currentDiv = document.querySelector('.current');
const previousDiv = document.querySelector('.prev');
const nextDiv = document.querySelector('.next');
const hideDiv = document.querySelector('.hide');

const { gsap } = window;

downArrow.addEventListener('click', () => {
  animateContentChange('down');
  
});

upArrow.addEventListener('click', () => {
  animateContentChange('up');

});

function animateContentChange(direction) {
  const currentText = currentDiv.textContent;
  const prevText = previousDiv.textContent;
  const hideText = hideDiv.textContent;
  const nextText = nextDiv.textContent;

  const tl = gsap.timeline({
    onComplete: () => {
      changeImage();
    }
  });


  if (direction === 'down') {
    tl.to([currentDiv, previousDiv, hideDiv, nextDiv], { duration: 0.3, opacity: 0 })
      .set(currentDiv, { textContent: nextText })
      .set(nextDiv, { textContent: hideText })
      .set(hideDiv, { textContent: prevText })
      .set(previousDiv, { textContent: currentText })
      .to([currentDiv, previousDiv, hideDiv, nextDiv], { duration: 0.3, opacity: 1 });
  } else if (direction === 'up') {
    tl.to([currentDiv, previousDiv, hideDiv, nextDiv], { duration: 0.3, opacity: 0 })
    .set(currentDiv, { textContent: prevText })
    .set(previousDiv, { textContent: hideText })
    .set(hideDiv, { textContent: nextText })
    .set(nextDiv, { textContent: currentText })
      .to([currentDiv, previousDiv, hideDiv, nextDiv], { duration: 0.3, opacity: 1 });
  }

  
}

const image = document.querySelector('.galimg');

function changeImage() {
  const newText = currentDiv.innerText;
  const image = document.querySelector('.galimg');

  let imageTimeline = gsap.timeline();
  imageTimeline.to(image, { duration: 0.3, opacity: 0, x: -50, onComplete: updateImage });

  function updateImage() {
   if(newText == 'Main Building') {
      image.src = './Gallery/1x/MB.png'; 
    } else if(newText == 'Classroom') {
      image.src = './Gallery/1x/Classroom.png'; 
    } else if(newText == 'Open Area') {
      image.src = './Gallery/1x/MB.png';   
    } else if(newText == 'Auditorium') {
      image.src = './Gallery/1x/Auditorium.png'; 
    }

    imageTimeline = gsap.timeline();
    imageTimeline.to(image, { duration: 0.3, opacity: 1, x: 0 });
  }
}

