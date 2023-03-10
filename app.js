const burger = document.querySelector("nav svg"); //see if you want to put an ID instead of nav svg

burger.addEventListener('click', () => {
    console.log("check",burger.classList.contains("active"))
    if(burger.classList.contains("active")){
        gsap.to(".links", {x:"100%"}); //goes off screen
        gsap.to(".line", { stroke: "white" }); // the stroke is the attr in the element for the svg 
        gsap.set("body", {overflow: "auto"});
        gsap.set("body", {overflow: "hidden"});
    }else{
        gsap.to(".links", {x:"0%"}) // sidebar comes into view
        gsap.to(".line", { stroke: "black" });
        gsap.fromTo(".links a", {opacity: 0, y:0}, {opacity: 1, y:20, delay: 0.25, stagger: 0.25 });
        gsap.set("body", {overflow: "hidden"});
    }
    burger.classList.toggle("active");
});

const videos = gsap.utils.toArray('.video');
gsap.set(videos, { opacity: 0});

videos.forEach(video => {
    ScrollTrigger.create({
        trigger: video,
        start: "top center",
        end: "center center",
        markers: false,
        onEnter: () => {
            gsap.to(video, { opacity: 1});
            video.play();
        },
        onEnterBack: () => video.play(),
        onLeave: () => video.pause(),
        onLeaveBack: () => video.pause(),
    });
});