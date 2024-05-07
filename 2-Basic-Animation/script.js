let tl = gsap.timeline();

tl.from("#nav h3", {
	duration: 0.8,
	opacity: 0,
	y: -50,
	stagger: 0.2,
	ease: "power3.out",
});
tl.from("#main h1", {
	duration: 0.8,
	opacity: 0,
	x: -500,
	stagger: 0.2,
});
tl.from("#main img", {
	duration: 1,
	opacity: 0,
	rotate: 200,
	scale: 0,
	y: -500,
	stagger: 0.3,
});
