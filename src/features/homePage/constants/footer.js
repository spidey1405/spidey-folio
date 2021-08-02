import { nanoid } from "nanoid";
export const footerData = {
	copyrightDetails: { name: "Shivam Sahil" },
	networks: [
		{
			id: "networks__" + nanoid(),
			name: "twitter",
			url: "https://twitter.com/SeedhaB",
		},
		{
			id: "networks__" + nanoid(),
			name: "codepen",
			url: "https://devpost.com/sedhha",
		},
		{
			id: "networks__" + nanoid(),
			name: "linkedin",
			url: "https://www.linkedin.com/in/shivamsahil/",
		},
		{
			id: "networks__" + nanoid(),
			name: "github",
			url: "https://github.com/sedhha",
		},
		{
			id: "networks__" + nanoid(),
			name: "youtube",
			url: "https://www.youtube.com/channel/UCenRU1EVBo-cWz978u4P4gg",
		},
		{
			id: "networks__" + nanoid(),
			name: "email",
			url: "mailto:activity.schoolsh2@gmail.com",
		},
		{
			id: "networks__" + nanoid(),
			name: "wrytin",
			url: "https://wrytin.com/shivamsahil",
		},
		{
			id: "networks__" + nanoid(),
			name: "wordpress",
			url: "https://technopain.wordpress.com/",
		},
	],
};

// Github start/fork buttons
export const githubButtons = {
	isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
