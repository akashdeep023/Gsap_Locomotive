gsap.from("#page1 #circle", {
	scale: 0,
	duration: 2,
	rotate: 720,
	delay: 0.5,
});
gsap.from("#page2 #circle", {
	scale: 0,
	duration: 2,
	rotate: 720,
	// scrollTrigger: "page2 #circle", // simple scroll trigger method
	scrollTrigger: {
		// good scroll trigger method
		trigger: "#page2 #circle", // trigger point
		scroller: "body", // which element scroll
		markers: true, // show markers to help scroll trigger
		start: "top 90%", // start animation
		end: "top 10%", // end animation
		scrub: 5, // scroll up to animate and scroll down to reverce animate
	},
});
gsap.from("#page3 #circle", {
	scale: 0,
	duration: 2,
	rotate: 720,
	// scrollTrigger: "page2 #circle", // simple scroll trigger method
	scrollTrigger: {
		// good scroll trigger method
		trigger: "#page3 #circle", // trigger point
		scroller: "body", // which element scroll
		markers: true, // show markers to help scroll trigger
		start: "top 90%", // start animation
		end: "top 50%", // end animation
		scrub: 5, // scroll up to animate and scroll down to reverce animate
	},
});
