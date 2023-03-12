const descs = [
	"Just a guy who spends way too much time with a keyboard and a mouse.",
	"My hobbies include coding, debugging, and wondering why my code isn't working.",
	"I'm the human equivalent of a software update - always improving.",
	"I'm a software developer with a passion for learning and creating.",
	"My code is like a fine wine - it only gets better with age (and a few updates).",
	"I'm like a pair of headphones - I'm always listening.",
	"My code works like a charm - it's just a little buggy.",
	"A good programmer is someone who always looks both ways before crossing a one-way street.",
	"Unix is user-friendly. It's just very particular about who its friends are.",
	"Sometimes I think war is God's way of teaching us geography."
]

const startPhrase = "Hi I'm Oggetto aka JustOptimize. ";
const period = 2000;
const element = document.getElementById("desc");

let index = Math.floor(Math.random() * descs.length);
let txt = "";
let toRotate = descs[index];
let isDeleting = false;

(function type() {
	let speed = 40;

	if (isDeleting) {
		speed /= 2;
	}

	if (!isDeleting && txt === toRotate) {
		speed = period;
		isDeleting = true;
	} else if (isDeleting && txt === "") {
		isDeleting = false;
		index++;
		if (index >= descs.length) {
			index = 0;
		}
		toRotate = descs[index];
		speed = 500;
	}else{
		txt = isDeleting ? toRotate.substring(0, txt.length - 1) : toRotate.substring(0, txt.length + 1);
		element.innerHTML = startPhrase + txt;
	}
	
	setTimeout(type, speed);
})();