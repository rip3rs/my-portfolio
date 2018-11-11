import React from 'react';
import "./icn-fonts.css";

const icons = [
  { src: "android", alt: "Android", color: "#008000" },
  { src: "confluence", alt: "Confluence", color: "#8db9ff" },
  { src: "googlemaps", alt: "Google Maps", color: "#008000" },
  { src: "magento", alt: "Magento", color: "#ff9d1b" },
  { src: "php", alt: "PHP", color: "#eaccff" },
  { src: "adobephotoshop", alt: "photoshop", color: "#8db9ff" },
  { src: "angular", alt: "Angular", color: "#ff0000" },
  { src: "apple", alt: "Apple", color: "#8a8a8a" },
  { src: "archlinux", alt: "Arch Linux", color: "#64a0ff" },
  { src: "atom", alt: "Atom", color: "#fbc900" },
  { src: "bitbucket", alt: "BitBucket", color: "#006eff" },
  { src: "bootstrap", alt: "BootStrap", color: "#563d7c" },
  { src: "css3", alt: "CSS3", color: "#2683ff" },
  { src: "typescript", alt: "TypeScript", color: "#83a8da" },
  { src: "d3-dot-js", alt: "D3JS", color: "#ff9d1b" },
  { src: "debian", alt: "Debian", color: "#ff7575" },
  { src: "dev-dot-to", alt: "Dev dot to", color: "#000000" },
  { src: "digitalocean", alt: "Digital Ocean", color: "#61acff" },
  { src: "discord", alt: "Discord", color: "#eaccff" },
  { src: "docker", alt: "Docker", color: "#aed5ff" },
  { src: "eslint", alt: "ESLint", color: "#8b3dff" },
  { src: "git", alt: "Git", color: "#ff8600" },
  { src: "github", alt: "GitHub", color: "#000000" },
  { src: "gitlab", alt: "GitLab", color: "#ff8600" },
  { src: "googleanalytics", alt: "Google Analytics", color: "#ff6200" },
  { src: "googlechrome", alt: "Google Chrome", color: "#00b4ff" },
  { src: "googlehangouts", alt: "Google HangOuts", color: "#7aa97a" },
  { src: "gulp", alt: "Gulp", color: "#ff0000" },
  { src: "html5", alt: "HTML 5", color: "#ff0000" },
  { src: "javascript", alt: "JavaScript", color: "#ff275f" },
  { src: "jira", alt: "Jira", color: "#597aff" },
  { src: "jquery", alt: "JQuery", color: "#b4cdff" },
  { src: "json", alt: "JSON", color: "#676767" },
  { src: "kickstarter", alt: "KickStarter", color: "#008000" },
  { src: "linkedin", alt: "LinkedIN", color: "#056dff" },
  { src: "linux", alt: "Linux", color: "#98973f" },
  { src: "mongodb", alt: "MongoDB", color: "#5b905b" },
  { src: "mysql", alt: "MySQL", color: "#ff8500" },
  { src: "nginx", alt: "NGINX", color: "#007f00" },
  { src: "node-dot-js", alt: "NODEJS", color: "#007f00" },
  { src: "npm", alt: "NPM", color: "#ff0000" },
  { src: "nvidia", alt: "Nvidia", color: "#09c100" },
  { src: "ovh", alt: "OVH", color: "#00467b" },
  { src: "paypal", alt: "PayPal", color: "#00467b" },
  { src: "raspberrypi", alt: "Raspberry PI", color: "#ff0000" },
  { src: "react", alt: "ReactJS", color: "#4cb2ff" },
  { src: "redux", alt: "Redux", color: "#dc65ff" },
  { src: "rss", alt: "RSS", color: "#ff7a00" },
  { src: "safari", alt: "Safari", color: "#69b0ff" },
  { src: "skype", alt: "Skype", color: "#69b0ff" },
  { src: "slack", alt: "Slack", color: "#000000" },
  { src: "spotify", alt: "Spotify", color: "#00c109" },
  { src: "stackoverflow", alt: "StackOverFlow", color: "#ffb500" },
  { src: "steam", alt: "Steam", color: "#000000" },
  { src: "toptal", alt: "TopTal", color: "#0091ff" },
  { src: "trello", alt: "Trello", color: "#0091ff" },
  { src: "twitch", alt: "Twitch", color: "#9200ca" },
  { src: "twitter", alt: "Twitter", color: "#0091ff" },
  { src: "ubuntu", alt: "Ubuntu", color: "#ff8600" },
  { src: "vagrant", alt: "Vagrant", color: "#006eff" },
  { src: "vim", alt: "Vim", color: "#007f00" },
  { src: "vimeo", alt: "Vimeo", color: "#0091ff" },
  { src: "visualstudiocode", alt: "VS Code", color: "#0091ff" },
  { src: "vue-dot-js", alt: "VueJS", color: "#4fc08d" },
  { src: "webpack", alt: "WebPack", color: "#78afd8" },
  { src: "wordpress", alt: "WordPress", color: "#000000" }
];

const icns = props => {
  let ico = null;

  const _all = () => {
    return icons.map((icn, i) => (
      <i
        key={`${icn.src}-${i}`}
        style={{
          width: "25px",
          height: "25px",
          padding: "5px",
          color: icn.color,
          display: "inline-block"
        }}
        className={'icon-' + icn.src}
        alt={icn.alt}
      />
    ));
  }

  const _selectedIcons = () => {
    let newIcons = [...icons];
    const ic = [];

    newIcons.forEach(obj => {
      if (props.select.includes(obj.src))
        ic.push(obj);
    });

    return ic.map((icn, i) => (
      <i
        key={`${icn.alias}-${i}`}
        style={{
          width: "25px",
          height: "25px",
          padding: "5px",
          color: icn.color,
          display: "inline-block"
        }}
        className={'icon-' + icn.src}
        alt={icn.alt}
      />
    ))
  };

  switch (true) {
    case props.select === 'all': ico = _all(); break;
    case (Array.isArray(props.select)): ico = _selectedIcons(); break;
    default: ico = _all(); break;
  }

  return ico;
}

export default icns;
