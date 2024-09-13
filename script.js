function navAnimation(){
    var nav = document.querySelector("nav");

    nav.addEventListener("mouseenter", () => {
        // alert("hello.."); 
        var tl = gsap.timeline();
        tl.to("#nav-bottom", {
            height: "24vh"
        })
    
        tl.to(".nav-part2 h5", {
            display: "block"
            // opacity: 1,
            // duration: 0.65
        });
    
        tl.to(".nav-part2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.6,
            }
        })
        
    })
    
    nav.addEventListener("mouseleave", ()=> {
        // console.log("hello");
        let tl = gsap.timeline();
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2,
            }
        })
    
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
    
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
        
    })
    
}
navAnimation();