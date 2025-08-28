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
	lang: "en",
	themeColor: {
		hue: 300,
		fixed: true,
	},
	banner: {
		enable: true,
		src: "/assets/eyewallwx-banner.webp",
		position: "center",
		credit: {
			enable: true,
			text: "JMA",
			url: "https://www.jma.go.jp/jma/index.html",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [
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
			url: "https://discord.gg/HTyfKmwX9v",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/assets/eyewallwx-avatar.webp",
	name: "EyewallWX",
	bio: "An open-to-all community of weather enthusiasts. We track tropical cyclones and tornado outbreaks, store archived data, and post live updates. Feel free to join our Discord server and follow us on social media!",
		links: [
		{
			name: "Discord",
			icon: "fa6-brands:discord",
			url: "https://discord.gg/HTyfKmwX9v",
		},
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
	theme: "github-dark",
};
