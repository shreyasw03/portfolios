gsap.set(".magic1",{opacity:0})
gsap.to(".magic1", {
scrollTrigger: {
trigger: ".magic1",
start: "-100px top",
end: "1000px top",
scrub: 5,
pin:".heavyani"
},
opacity:1,
scale:1,
stagger:0.3,
y:0
});

gsap.to(".fromwhen", {
scrollTrigger: {
trigger: ".fromwhen",
start: "650px center",
end: "800px center",
scrub: 5,
},
opacity:1
});

gsap.to(".moveh1", {
scrollTrigger: {
trigger: ".moveh1",
start: "10px bottom",
end: "1158px bottom",
scrub: 5,
toggleActions: "restart none none reverse"
},
x:1500
});

gsap.to(".moveh2", {
scrollTrigger: {
trigger: ".moveh2",
start: "157px bottom",
end: "1310px bottom",
scrub: 5,
toggleActions: "restart none none reverse"
},
x:-1500
});

gsap.to(".moveh3", {
scrollTrigger: {
trigger: ".moveh3",
start: "-137px bottom",
end: "1015px bottom",
scrub: 5,
toggleActions: "restart none none reverse"
},
x:1500
});

gsap.to(".moveh4", {
scrollTrigger: {
trigger: ".moveh4",
start: "-105px bottom",
end: "1050px bottom",
scrub: 5,
toggleActions: "restart none none reverse"
},
x:-1500
});

gsap.to(".moveh5", {
scrollTrigger: {
trigger: ".moveh5",
start: "-75px bottom",
end: "1180px bottom",
scrub: 5,
toggleActions: "restart none none reverse"
},
x:-1500
});