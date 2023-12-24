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

// gsap.to("#page3", {
//     scrollTo: {
//         trigger: "#"
//     }
// })