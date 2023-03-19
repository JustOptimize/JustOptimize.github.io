const Projects = [
	{
		title: 'ShowHiddenChannels',
		description: 'A plugin for BetterDiscord that allows users to view information about hidden channels in a Discord server, such as their name, description and which roles or users have access to these hidden channels. Please note that this plugin will not allow you to read the messages in these channels, it will only show you information about them.',
		
		links: [
			{
				name: 'GitHub',
				icon: 'https://skillicons.dev/icons?theme=dark&i=github',
				link: 'https://github.com/JustOptimize/return-ShowHiddenChannels'
			},
			{
				name: 'Download',
				icon: 'https://skillicons.dev/icons?theme=dark&i=js',
				link: 'https://raw.githubusercontent.com/JustOptimize/return-ShowHiddenChannels/main/ShowHiddenChannels.plugin.js'
			}
		],

		img: 'https://user-images.githubusercontent.com/54294419/225766894-48d40546-ed7a-4794-888f-f0aafba26100.png',
	},
	{
		title: 'Project Hevinia',
		links: [],
		description: 'Developed by a group of schoolmates, this 2D platformer game represents the hard work and creativity of its developers. Unfortunately, for various reasons, the game will never be released. In the game, players would have controlled a character on a journey through various environments, facing challenging obstacles and enemies along the way.',
		img: 'https://media.discordapp.net/attachments/872913652171300875/1087142768612221139/image.png?width=1214&height=682',
	}
]

// Show popup with project description
function showDesc(prTitle){
	let project = Projects.find(x => x.title === prTitle);

	// Set project attributes
	document.getElementById("prTitle").innerHTML = prTitle;
	document.getElementById("prDesc").innerHTML = project.description;
	document.getElementById("prImg").src = project.img;

	// Set links
	document.getElementById("prLink").innerHTML = "";

	project.links.forEach(link => {
		let a = document.createElement("a");

		if(link.icon){
			let img = document.createElement("img");

			img.src = link.icon;
			img.title = link.name;

			img.style.marginRight = "5px";
			a.appendChild(img);
		}

		a.href = link.link;

		document.getElementById("prLink").appendChild(a);
	});

	// Show popup
	document.getElementById("popup").style.display = "flex";
}

// Add a listener to to close the popup when the user clicks outside of it
window.addEventListener("click", function(event) {
	if (
		event.target != document.getElementById("popup") &&
		!document.getElementById("popup").contains(event.target) &&
		!document.getElementById("projects").contains(event.target)
	) {

		document.getElementById("popup").style.display = "none";
	}
})