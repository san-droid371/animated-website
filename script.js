let crsr = document.querySelector("#cursor");
let crsrBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    crsrBlur.style.left = dets.x - 150 + "px"
    crsrBlur.style.top = dets.y - 150 + "px"
})

let h4All = document.querySelectorAll("#nav h4");
h4All.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        crsr.style.scale= 3
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", () => {
        crsr.style.scale= 1
        crsr.style.border = 0
        crsr.style.backgroundColor = ""
    })
})

gsap.to("#nav", {
    backgroundColor: "#000000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#nav img", {
    filter: "invert(1)",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:90,
    opacity:0,
    duration: 1,
    // stagger: 0.4,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }

})

gsap.from(".card",{
    scale: 0.8,
    opacity:0,
    duration: 1,
    // markers: true,
    staggger: 0.1,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%", 
        scrub: 4
    }
})

gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%", 
        scrub: 4
    }
})