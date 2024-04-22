var Projects = [
	{
		title: 'ShowHiddenChannels',
		dateStart: new Date(2022, 8, 1),
		dateEnd: null,
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

		icon: "/assets/images/icons/lock.svg",
		img: 'https://user-images.githubusercontent.com/54294419/225766894-48d40546-ed7a-4794-888f-f0aafba26100.png'
	},
	{
		title: 'Project Hevinia',
		date: 'Oct 2021 - Mar 2023',
		dateStart: new Date(2021, 9, 1),
		dateEnd: new Date(2023, 2, 1),
		description: 'Developed by a group of schoolmates, this 2D platformer game represents the hard work and creativity of its developers.<br><br>In the game, players would have controlled a character on a journey through various environments, facing challenging obstacles and enemies along the way.<br><br>Unfortunately, for various reasons, the game will never be released.',
		links: [],
		icon: "/assets/images/icons/PrHevinia.png",
		img: '/assets/images/banners/PrHevinia.png'
	},
	{
		title: 'RandomPasswordGenerator',
		date: 'Mar 2022 - Jan 2023',
		dateStart: new Date(2022, 2, 1),
		dateEnd: new Date(2023, 0, 1),
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

		icon: "/assets/images/icons/RandomPasswordGenerator.png",
		img: 'https://user-images.githubusercontent.com/54294419/226312261-d35eaf66-da25-4b4b-9920-821f5ee163a1.png'
	},
	{
		title: 'MySQL Backup Tool',
		date: 'May 2022 - Mar 2023',
		dateStart: new Date(2022, 4, 1),
		dateEnd: new Date(2023, 2, 1),
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

		icon: "/assets/images/icons/MySQL-Backup-Tool.png",
		img: 'https://user-images.githubusercontent.com/54294419/227647844-21ee1683-b1be-49d6-aa57-87df615f0e3e.png'
	},
	{
		title: 'Pc Cleaner',
		date: 'Mar 2023 - Sep 2023',
		dateStart: new Date(2023, 2, 1),
		dateEnd: new Date(2023, 8, 1),
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

		icon: "/assets/images/icons/PC-Cleaner.png",
	},
	{
		title: 'ABB - Electricity monitoring system',
		dateStart: new Date(2021, 3, 1),
		dateEnd: new Date(2021, 6, 1),
		description: 'A website that captures data from ABB endpoints and displays it in a sankey chart, saving the history of the data.<br><br>The website was developed for a school project and was used to monitor the power and energy consumption of the ABB building to be then displayed on monitors in the building for the employees to see.',

		icon: "/assets/images/icons/ABB.png",
		img: '/assets/images/banners/ABB.png'
	},
	{
		title: 'Evos Roleplay',
		dateStart: new Date(2023, 3, 1),
		dateEnd: new Date(2023, 5, 1),
		description: 'A FiveM roleplay server I worked on for a few months, it was a great learning experience especially when it comes to Lua and SQL.<br><br>The main objectives were to create a unique server that was as optimized as possible, while still having a lot of features and a good looking UI.',
		links: [],

		icon: "/assets/images/icons/EvosRp.png",
		img: '/assets/images/banners/EvosRp.png'
	},
	{
		title: 'oSupport',
		dateStart: new Date(2023, 3, 1),
		dateEnd: new Date(2023, 8, 1),
		description: 'A website that allows staff members to fill out forms and perform other routine actions via HTML pages. These pages are based on JSON templates that can be edited by privileged users. It integrates with Discord to assign roles when staff members accept meetings or issue warnings and to schedule meetings when a user wants.<br><br>Originally designed for an anti-bullying association, the website is now a versatile platform for form submissions, messaging, and comprehensive management functionalities.',
		links: [],

		icon: "/assets/images/icons/oSupport.png",
		img: "/assets/images/banners/oSupport.png"
	},
	{
		title: 'URLConverter',
		dateStart: new Date(2023, 0, 1),
		dateEnd: new Date(2023, 5, 1),
		description: 'A browser extention that replaces some urls with user declared ones when clicked<br><br>For example search.brave.com/search?q=abc -> google.com/search?q=abc<br><br>It is useful for when you want to use a different search engine but you don\'t want to change your default one or in development when you want to test a website on a different domain like localhost.',
		links: [],

		icon: "/assets/images/icons/URLConverter.png",
		img: '/assets/images/banners/URLConverter.png'
	},
	{
		title: 'Linkcord',
		dateStart: new Date(2023, 2, 1),
		dateEnd: new Date(2023, 5, 1),
		description: 'Linkcord was a project that aimed to create an open-source, self-hosted alternative to the popular voice and text chat platform Discord.<br><br>It was a great learning experience, especially when it comes to networking and security.<br><br>Unfortunately, the project was discontinued since it was a school project',
		links: [],

		icon: "/assets/images/icons/Linkcord.png",
		img: '/assets/images/banners/Linkcord.png'
	},
	{
		title: 'Oggetto Scripts',
		dateStart: new Date(2023, 8, 1),
		dateEnd: null,
		description: 'A shop that sells scripts for FiveM servers, such as a custom ELS system and driving school.<br><br>The shop is still in development and only has a few scripts available.',
		links: [
			{
				name: 'Discord',
				icon: 'https://skillicons.dev/icons?theme=dark&i=discord',
				link: 'https://discord.gg/aDcdM2kEN3'
			}
		],

		icon: "/assets/images/icons/OggettoScripts.png",
		img: "/assets/images/banners/OggettoScripts.png"
	},
	{
		title: 'PreventiviBot - Invoice generator',
		dateStart: new Date(2023, 9, 1),
		dateEnd: null,
		description: 'A Discord bot that allows users to generate invoices for their customers.<br>This bot supports estimates, invoices, and reminders, it is a complete solution for small businesses.<br>It also has a web dashboard where admins can manage the invoices.',
		links: [],

		icon: "/assets/images/icons/PreventiviBot.png",
		img: "/assets/images/banners/PreventiviBot.png"
	},
	{
		title: 'FiveLogs',
		dateStart: new Date(2022, 6, 1),
		dateEnd: new Date(2023, 8, 1),
		description: 'FiveLogs is an closed-source website that displays analytics and logs recived by a webhook via a FiveM script.<br><br>Discontinued.',
		links: [],
		
		icon: "/assets/images/icons/FiveLogs.png",
		img: '/assets/images/banners/FiveLogs.png'
	},
	{
		title: 'CleanCopy',
		dateStart: new Date(2023, 9, 1),
		dateEnd: null,
		description: 'A userscript that removes tracking parameters from copied URLs.',
		links: [
			{
				name: 'GitHub',
				icon: 'https://skillicons.dev/icons?theme=dark&i=github',
				link: 'https://github.com/JustOptimize/CleanCopy'
			},
			{
				name: 'Download',
				icon: 'https://skillicons.dev/icons?theme=dark&i=js',
				link: 'https://raw.githubusercontent.com/JustOptimize/CleanCopy/main/CleanCopy.user.js'
			}
		],

		icon: "https://github.com/JustOptimize/CleanCopy/blob/main/icon.png?raw=true",
	}
]

// Sort projects by date (if end is null put them first ordered by start date (oldest first) and then by end date (newest first)
Projects.sort((a, b) => {
	if(a.dateEnd === null && b.dateEnd === null){
		return a.dateStart - b.dateStart;
	}else if(a.dateEnd === null){
		return -1;
	}else if(b.dateEnd === null){
		return 1;
	}else{
		return b.dateEnd - a.dateEnd;
	}
});

// Show popup with project description
function showDesc(prTitle){
	const project = Projects.find(x => x.title === prTitle);

	const titleElement = document.getElementById("prTitle");
	const dateElement = document.getElementById("prDate");
	const popup = document.getElementById("popup")
	const img = document.getElementById("prImg");

	// Set project attributes
	titleElement.innerHTML = prTitle;
	document.getElementById("prDesc").innerHTML = project.description;

	if(project.img){
		img.src = project.img;
		img.style.display = "block";
	}else{
		img.style.display = "none";
	}

	if(project.dateStart){
		// (3 letter month) (year) - (3 letter month) (year) or Now
		let date = project.dateStart.toLocaleString('default', { month: 'short' }) + " " + project.dateStart.getFullYear() + " - ";
		
		if(project.dateEnd){
			date += project.dateEnd.toLocaleString('default', { month: 'short' }) + " " + project.dateEnd.getFullYear();
		}else{
			date += "Now";
		}

		dateElement.innerHTML = "(" + date + ")";
		dateElement.style.display = "block";

		titleElement.style.marginBottom = "5px";
	}else{
		dateElement.style.display = "none";

		titleElement.style.marginBottom = "10px";
	}

	// Set links
	document.getElementById("prLink").innerHTML = "";

	if(project?.links?.length > 0){
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
	}

	// Show popup
	popup.style.display = "flex";
}

// Add a listener to to close the popup when the user clicks outside of it
window.addEventListener("click", function(event) {
	document.getElementById("popup").style.display = "none";
})

// Add projects to the page
Projects.forEach(project => {
	let a = document.createElement("a");
	// a.className = "project";

	let icon = document.createElement("img");
	icon.src = project.icon;
	icon.title = project.title;
	icon.style.width = "48px";
	icon.style.height = "48px";

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
