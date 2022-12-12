export interface SkillInfo {
  name: string;
  icon: string;
  href: string;
  bg?: string;
}

export const skills: SkillInfo[] = [
  {
    name: "Node.js",
    icon: "nodejs",
    href: "https://nodejs.org/en/",
  },
  {
    name: "HTML",
    icon: "html",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    bg: "#d55125",
  },
  {
    name: "CSS",
    icon: "css",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    bg: "#3076bd",
  },
  {
    name: "JavaScript",
    icon: "js",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    bg: "#ecdb4f",
  },
  {
    name: "GitHub",
    icon: "github",
    href: "https://github.com/",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    href: "https://www.mongodb.com/",
    bg: "#0f3430",
  },
  {
    name: "Discord API",
    icon: "bots",
    href: "https://discord.com/developers/docs/",
    bg: "#5663e9",
  },
  {
    name: "Linux Systems",
    icon: "linux",
    href: "https://www.linux.org/",
  },
];
