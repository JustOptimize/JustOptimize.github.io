const Projects = [
	{
		title: 'ShowHiddenChannels',
		description: 'A plugin for BetterDiscord that allows users to view information about hidden channels in a Discord server, such as their name, description and which roles or users have access to these hidden channels.<br><br>Please note that this plugin will not allow you to read the messages in these channels, it will only show you information about them.',
		
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

		icon: "/assets/images/lock.svg",
		img: 'https://user-images.githubusercontent.com/54294419/225766894-48d40546-ed7a-4794-888f-f0aafba26100.png'
	},
	{
		title: 'Project Hevinia',
		description: 'Developed by a group of schoolmates, this 2D platformer game represents the hard work and creativity of its developers.<br><br>In the game, players would have controlled a character on a journey through various environments, facing challenging obstacles and enemies along the way.<br><br>Unfortunately, for various reasons, the game will never be released.',
		links: [],
		icon: "/assets/images/PrHevinia.png",
		img: 'https://media.discordapp.net/attachments/872913652171300875/1087142768612221139/image.png'
	},
	{
		title: 'RandomPasswordGenerator',
		description: 'A simple password generator that allows users to generate random passwords with a length of their choice. The passwords are generated using the characters A-Z, a-z and 0-9.',
		links: [
			{
				name: 'GitHub',
				icon: 'https://skillicons.dev/icons?theme=dark&i=github',
				link: 'https://github.com/JustOptimize/RandomPassGenerator'
			},
			{
				name: 'Download',
				icon: 'https://skillicons.dev/icons?theme=dark&i=bash',
				link: 'https://raw.githubusercontent.com/JustOptimize/RandomPassGenerator/main/randomPass.bat'
			}
		],

		icon: "/assets/images/RandomPasswordGenerator.png",
		img: 'https://user-images.githubusercontent.com/54294419/226312261-d35eaf66-da25-4b4b-9920-821f5ee163a1.png'
	},
	{
		title: 'MySQL Backup Tool',
		description: 'A simple tool that allows users to backup their MySQL databases. The tool is written in batch and uses the mysqldump command to backup the databases.',
		links: [
			{
				name: 'GitHub',
				icon: 'https://skillicons.dev/icons?theme=dark&i=github',
				link: 'https://github.com/JustOptimize/MySQL-Backup-Tool/'
			},
			{
				name: 'Download',
				icon: 'https://skillicons.dev/icons?theme=dark&i=bash',
				link: 'https://raw.githubusercontent.com/JustOptimize/MySQL-Backup-Tool/main/Backup.bat'
			}
		],

		icon: "/assets/images/MySQL-Backup-Tool.png",
		img: 'https://user-images.githubusercontent.com/54294419/227647844-21ee1683-b1be-49d6-aa57-87df615f0e3e.png'
	},
	{
		title: 'Pc Cleaner',
		description: 'PC Cleaner is a simple tool to clean your PC from junk files. It is written in Python and uses a configuration file to determine which files/directories or registry keys to delete.',
		links: [
			{
				name: 'GitHub',
				icon: 'https://skillicons.dev/icons?theme=dark&i=github',
				link: 'https://github.com/JustOptimize/Pc-Cleaner'
			},
			{
				name: 'Download',
				icon: 'https://skillicons.dev/icons?theme=dark&i=python',
				link: 'https://github.com/JustOptimize/Pc-Cleaner/archive/refs/heads/main.zip'
			}
		],

		icon: "/assets/images/PC-Cleaner.png",
	},
	{
		title: 'Evos Roleplay',
		description: 'A FiveM roleplay server I worked on for a few months, it was a great learning experience especially when it comes to Lua and SQL.<br><br>The main objectives were to create a unique server that was as optimized as possible, while still having a lot of features and a good looking UI.<br><br>Unfortunately, the server was never released due to a lack of time and motivation by the other team members responsible for the creation of the assets (vehicles, clothes, etc.).',
		links: [],

		icon: "/assets/images/EvosRp.png",
		img: 'https://cdn.discordapp.com/attachments/872913652171300875/1116724938687127602/image.png'
	},
	{
		title: 'oSupport',
		description: 'A website that allows staff members to fill out custom forms managed by a template that are then sent to a Discord server via webhook.<br><br>The website was created for an anti-bullying association but is being converted into a generic website capable of sending forms and messages, managing pages, staff, discord roles, etc.',
		links: [],

		icon: "/assets/images/oSupport.png",
		img: "https://cdn.discordapp.com/attachments/872913652171300875/1116729308401123440/image.png"
	}
]

// Show popup with project description
function showDesc(prTitle){
	let project = Projects.find(x => x.title === prTitle);

	// Set project attributes
	document.getElementById("prTitle").innerHTML = prTitle;
	document.getElementById("prDesc").innerHTML = project.description;

	let img = document.getElementById("prImg");
	if(project.img){
		img.src = project.img;
		img.style.display = "block";
	}else{
		img.style.display = "none";
	}

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

// Add projects to the page
Projects.forEach(project => {
	let a = document.createElement("a");
	// a.className = "project";

	let icon = document.createElement("img");
	icon.src = project.icon;
	icon.title = project.title;

	icon.addEventListener("click", function(){
		showDesc(project.title);
	});

	a.appendChild(icon);
	
	// Spacer
	a.appendChild(document.createTextNode(" "));

	document.getElementById("projects").appendChild(a);

	// Prelaod image
	if(!project.img) return;
	
	let preload = document.createElement("img");
	preload.src = project.img;
});