import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollTrigger.js";
import { SplitText } from "../plugins/SplitText.js";
import Lenis from 'https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.39/dist/lenis.min.mjs';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

// Smooth scrolling lenis

export function lenis() {
    const lenis = new Lenis({
        duration: 1.2,
        smooth: true,
        smoothTouch: false
      });
      
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          return arguments.length ? lenis.scrollTo(value) : lenis.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.body.style.transform ? "transform" : "fixed"
      });
      
      ScrollTrigger.refresh();
}

export function heroAnimation() {
    const welcomeHeading = document.querySelector(".hero-h1");
    const welcomePar = document.querySelector(".hero-p");
    const welcomeSub = document.querySelector(".home-subtitle");
    const pageHeading = document.querySelector(".page-heading");
    const pageSubheading = document.querySelector(".sub");

    gsap.fromTo(welcomeHeading, { opacity: 0, y:  50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    gsap.fromTo(pageHeading,    { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power4.out" });
    
    gsap.fromTo(pageSubheading, { opacity: 0, y: -50, }, { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power4.out" });
    
    gsap.fromTo(welcomePar,     { opacity: 0, y:  50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" });
    gsap.fromTo(welcomeSub,     { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power2.out" });
    
  }

  export function scrollAnimations() {
    const eventsHeading = document.querySelector(".home-events h2");
    const eventCards = document.querySelectorAll(".home-event-card");
    const ctaDiv = document.querySelector(".cta-container");
    const homeImageColumn = document.querySelector(".home-image-column");
    const homeTextColumn = document.querySelector(".home-text-column");


    // Image column animation

    gsap.fromTo(homeImageColumn,
        { opacity: 0, x: 100 },
        {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: homeImageColumn,
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none",
                scrub: true
            }
        }
      );
      
    // Text column animation
    gsap.fromTo(homeTextColumn,
    { opacity: 0, x: -100 },
    {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
        trigger: homeTextColumn,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none",
        scrub: true
        }
    }
    );

    // Heading animation



    const memorialColumns = document.querySelectorAll(".memorial-column");
    const slide100Right = document.querySelectorAll(".slide-100-right");
    const slide100Left = document.querySelectorAll(".slide-100-left");
    const slide25Up = document.querySelectorAll(".slide-25-up");


    // Events heading animation

    gsap.fromTo(eventsHeading,
        { opacity: 0, y: -100 },
        {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: '.home-events',
            start: "top 80%",
            end: "40% 60%",
            scrub: false,
        }
        }
    );

    // Event cards animation

    gsap.set(eventCards, { opacity: 0, y: 100, scale: 0.4 });

    const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home-main-event",
        start: "90% bottom",
        end: "120% 60%",
        toggleActions: "play none none none",
    }
    });

    tl.to(eventCards, {
    opacity: 1,
    y: 0,
    scale: 1,
    stagger: 0.2,
    duration: 1,
    ease: "power4.out"
    });

    // Slide 100 left and right animations

    slide100Left.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none none",
            }
          }
        );
      });
      
      slide100Right.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none none",
            }
          }
        );
      });

    // CTA animation

    gsap.fromTo(ctaDiv,
        { opacity: 0, y: 100, },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
            trigger: ctaDiv,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
            scrub: false
            }
        }
        );


    // Memorial page text column animation

    memorialColumns.forEach(column => {
        gsap.set(column, {opacity: 0, y: 100});
        gsap.to(column, {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 1,
            scrollTrigger: {
                trigger: column,
                toggleActions: 'play none none none',
                start: 'top bottom',
                end: 'bottom 60%',
            }
        });
      })

    // Slide up for 25px

      slide25Up.forEach(slideTF => {
        gsap.set(slideTF, {opacity: 0, y: 25});
        gsap.to(slideTF, {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 1,
            scrollTrigger: {
                trigger: slideTF,
                toggleActions: 'play none none none',
                start: 'top bottom',
                end: 'bottom 60%',
            }
        });
      })

  }