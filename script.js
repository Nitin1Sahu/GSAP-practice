const t1 = gsap.timeline();

t1.from('#nav h1, #nav ul li, #nav #left-nav-part h3, #nav #left-nav-part button', {
    y: -100,
    duration: 1,
    delay: 1,
    stagger: 0.5,
    opacity: 0
})
t1.from('#hero h1', {
    y: -100,
    duration: 1,
    stagger: 0.5,
    opacity: 0
})

t1.from('#image-1', {
    y: -100,
    duration: 0.5,
    stagger: 0.5,
    opacity: 0
})
t1.to('#image-1', {
    scale: 1.01,
    yoyo: true,
    repeat: -1
})

t1.from('#image-2', {
    x: 100,
    duration: 1,
    stagger: 0.5,
    opacity: 0,
})
t1.to('#image-2', {
    scale: 1.01,
    yoyo: true,
    repeat: -1
})

t1.to('#scroll', {
    opacity: 0.5,
    y: -20,
    duration: 0.5,
    repeat: -1,
    yoyo: true
})