// initiale to final stage
// gsap.to("#box", {
// 	duration: 2,
// 	rotate: 360,
// 	x: 1000,
// 	delay: 1,
// 	backgroundColor: "blue",
// });

// final to initiale stage
// gsap.from("#box", {
// 	duration: 2,
// 	rotate: 360,
// 	x: 1000,
// 	delay: 1,
// 	backgroundColor: "blue",
// });

// use gsap timeline
const tl = gsap.timeline();
tl.to("#box1", {
	duration: 2,
	rotate: 360,
	x: 1000,
	scale: 0.8,
	delay: 1,
});
tl.to("#box2", {
	duration: 2,
	rotate: 360,
	scale: 0.8,
	x: 1000,
});
tl.to("#box3", {
	duration: 2,
	rotate: 360,
	scale: 0.8,
	x: 1000,
});
