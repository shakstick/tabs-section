const texts = document.querySelectorAll(".text");

const titles = document.querySelectorAll(".title");

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");

const img = document.getElementById("image");

btn1.addEventListener("click", () => {
  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");

  // IMG
  img.setAttribute("src", "./image1.jpg");
  img.setAttribute("alt", "image 1");

  titles.forEach((title, index) => {
    if (index === 0) {
      title.classList.remove("hidden");
      texts[index].classList.remove("hidden");
    } else {
      title.classList.add("hidden");
      texts[index].classList.add("hidden");
    }
  });
});

btn2.addEventListener("click", () => {
  btn1.classList.remove("active");
  btn2.classList.add("active");
  btn3.classList.remove("active");

  // IMG
  img.setAttribute("src", "./image2.jpg");
  img.setAttribute("alt", "image 2");

  titles.forEach((title, index) => {
    if (index === 1) {
      title.classList.remove("hidden");
      texts[index].classList.remove("hidden");
    } else {
      title.classList.add("hidden");
      texts[index].classList.add("hidden");
    }
  });
});

btn3.addEventListener("click", () => {
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.add("active");

  // IMG
  img.setAttribute("src", "./image3.jpg");
  img.setAttribute("alt", "image 3");

  titles.forEach((title, index) => {
    if (index === 2) {
      title.classList.remove("hidden");
      texts[index].classList.remove("hidden");
    } else {
      title.classList.add("hidden");
      texts[index].classList.add("hidden");
    }
  });
});
