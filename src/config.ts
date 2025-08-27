import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "EyewallWX",
	subtitle: "Home",
	lang: "en", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 300, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "/assets/eyewallwx-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "JMA", // Credit text to be displayed
			url: "https://www.jma.go.jp/jma/index.html",
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "/favicon/favicon-light-32.png",
			theme: "light",
			sizes: "32x32",
		},
		{
			src: "/favicon/favicon-light-128.png",
			theme: "light",
			sizes: "128x128",
		},
		{
			src: "/favicon/favicon-dark-32.png",
			theme: "dark",
			sizes: "32x32",
		},
		{
			src: "/favicon/favicon-dark-128.png",
			theme: "dark",
			sizes: "128x128",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Glossary,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "Discord",
			url: " https://discord.gg/HTyfKmwX9v", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/assets/eyewallwx-avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "EyewallWX",
	bio: "An open-to-all community of weather enthusiasts. We track tropical cyclones and tornado outbreaks, store archived data, and post live updates. Feel free to join our Discord server and follow us on social media!",
		links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter",
			url: "https://x.com/eyewallwx",
		},
		{
			name: "Bluesky",
			icon: "fa6-brands:bluesky",
			url: "https://bsky.app/profile/eyewallwx.bsky.social",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
