const textcir = document.querySelector(".textcir");
textcir.innerHTML = textcir.innerText.split('').map(
    (charrr, i1) => 
    `<span class="spancircular" style="transform:rotate(${i1 * 8.3}deg);display: inline-block;">${charrr}</span>`
).join('');


gsap.to(".textcir",{
scrollTrigger: {
trigger: ".textcir",
start:"-300px center",
end:"+=2000%",
scrub:1,
},
rotate:360,
});

gsap.set(".arrow", { opacity:0.5 });
gsap.to(".arrow",{
  scrollTrigger: {
    trigger: ".arrow",
    start:"center center",
    toggleActions: "restart resume reverse none"
  },
  opacity:1
});