function navLoad() {

    gsap.fromTo(".nav-link", {
            y: -50
        },
        {
            y: 0,
            duration: 1,
            ease: "bounce",
            stagger: {
                amount: 1,
                each: 0.5,
                from: "center"
            }
        }
    )

    gsap.fromTo(".g-points",{
            opacity: 0,
            x: -500
        }, 
        {
            opacity: 1,
            x: 0,
            ease: "linear",
            stagger: {
                amount: 1,
                each: 1,
                from: "start"
            },
            delay: 0.8
        }
    )
}

gsap.registerPlugin(ScrollTrigger)

gsap.fromTo('.g-card-0',{
        opacity: 0,
        y: 10
    }, 
    {
    scrollTrigger: {
        trigger: '.g-card-0',
        start: 'top 90%',
        end: 'bottom 90%',
        toggleActions: "play pause resume none",    //onEnter onLeave onEnterBack onLeaveBack
        scrub: 2
    },
    y: 0,
    opacity: 1,
    stagger: {
        amount: 2,
        each: 5,
        from: "start",
        delay: 1
    }
});

gsap.fromTo(".g-company-logo", {
    opacity: 0,
    x: -200
}, {
    scrollTrigger: {
        trigger: ".g-company-logo",
        start: 'top 90%',
        end: 'bottom 80%',
        toggleActions: "play pause resume none",
        scrub: 3
    },
    opacity: 1,
    x: 0,
    stagger: {
        each: 1,
        amount: 1,
        from: "end"
    }
})

gsap.fromTo('.elevate-card1', {
    opacity: 0,
    x: 500
},{
    scrollTrigger: {
      trigger: '.elevate-card1',
      start: 'top 90%',
      end: 'bottom 100%',
      toggleActions: "play pause resume none",
      scrub: 1,
    }, 
    x: 0,
    opacity: 1
});

gsap.fromTo('.elevate-card2', {
    opacity: 0,
    x: -500
},{
    scrollTrigger: {
      trigger: '.elevate-card2',
      start: 'top 90%',
      end: 'bottom 100%',
      toggleActions: "play pause resume none",
      scrub: 1
    }, 
    x: 0,
    opacity: 1
});

gsap.fromTo('.elevate-card3', {
    opacity: 0,
    x: 500
},{
    scrollTrigger: {
      trigger: '.elevate-card3',
      start: 'top 90%',
      end: 'bottom 100%',
      toggleActions: "play pause resume none",
      scrub: 1
    }, 
    x: 0,
    opacity: 1
});

gsap.fromTo('.g-table-item', {
    y: 0
},{
    y: -5,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
});

gsap.fromTo('.g-btn', {
    y: 0
},{
    y: -35,
    ease: "power4.inOut",
    repeat: -1,
    yoyo: true
});

gsap.fromTo(".g-stars", {
    scale: 0.8,
}, {
    scrollTrigger: {
        trigger: ".g-stars",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play pause resume none",
        scrub: 2
    }, 
    scale: 1.3
})

gsap.fromTo(".g-img", {
    borderRadius: 0,
    x: -500,
}, {
    scrollTrigger: {
        trigger: ".g-img",
        start: "top 90%",
        end: "bottom 80%",
        toggleActions: "play pause resume none",
        scrub: 2
    }, 
    borderRadius: 300,
    x: 0
})

gsap.fromTo('.g-ques', {
    opacity: 0,
    x: -300
},{
    scrollTrigger: {
      trigger: '.g-ques',
      start: 'top 60%',
      end: 'bottom 70%',
      toggleActions: "play pause resume none",
      scrub: 4
    }, 
    x: 0,
    opacity: 1,
    stagger: {
        each: 1,
        amount: 1,
        from: "start"
    }
});

gsap.fromTo('.g-ans', {
    opacity: 0,
    x: 300
},{
    scrollTrigger: {
      trigger: '.g-ans',
      start: 'top 60%',
      end: 'bottom 70%',
      toggleActions: "play pause resume none",
      scrub: 4
    }, 
    x: 0,
    opacity: 1,
    stagger: {
        each: 1,
        amount: 1,
        from: "start"
    }
});

gsap.fromTo(".g-btn-start",{
    opacity: 0,
    scale: 5
}, {
    scrollTrigger: {
        trigger: ".g-btn-start",
        start: "top 90%",
        end: "bottom 100%",
        toggleActions: "play pause resume none",
        scrub: 2
    },
    opacity: 1,
    scale: 1
})