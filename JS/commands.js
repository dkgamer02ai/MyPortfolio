let github = "https://github.com/arin-prashar";
let linkedIn = "https://www.linkedin.com/in/prashararin";

ls=[
  "About   Socials   Projects   History   Help<br>",
];
whoami = [
  "<br>",
  `<p class="about">Hello, I'm Arin Prashar(aka DKGamer02AI), a System Administrator,Pentester and Vulnerability Analyst and ardent Open Source Enthusiast hailing from the vibrant landscape of Himachal Pradesh,India.</p>`,
  `<p class="about">With my insatiable curiosity and unwavering passion for cybersecurity and public security, I love to explore and unravel its mysteries. I am confident in my abilities and bring a wealth of knowledge, skills and expertise to every project I work on.</p>`,
  `<p class="about">I am proficient in multiple programming languages and keep myself updated using CVE database and more such databases. I am also an unofficial member of the Cyber Security Club of my college and participated in various CTFs and Hackathons.</p>`,
  "<br>",
];

social = [
  "<br>",
  'github         <a class="social" href="' +
    github +
    '" target="_blank">github/arin-prashar' +
    "</a>",
  'linkedin       <a class="social" href="' +
    linkedIn +
    '" target="_blank">linkedIn.com/prashararin' +
    "</a>",
  'email          <a class="social" href="mailto:prashararin@gmail.com" target="_blank">email/arin-prashar' +
    "</a>",
  'discord        <a class="social" href="https://discordapp.com/users/695641378352267375" target="_blank">discord/DKGamer02AI' +
    "</a>",
  "<br>",
];

projects = [
  "<br>",
  "⚠ PROJECT SECTION IS CURRENTLY UNDER DEVELOPMENT ⚠",
  "All projects are visable on my <a href='https://github.com/arin-prashar/' target='_blank'>GitHub</a>",
  "<br>",
  "Type the name of the language to views its projects:",
  '<span class="command" style="cursor:pointer;" id="comnd"> => Python</span>',
  '<span class="command" style="cursor:pointer;" id="comnd"> => Server</span>',
  "<br>",
];

help = [
  "<br>",
  '<span class="command">about</span>          Who am I?',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">projects</span>       View coding projects',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           Display list of commands',
  '<span class="command">clear</span>          Clear terminal',
  'and some other hidden commands',
  "<br>",
];

python = [
  "<br>",
  "Python projects :<br>",
  "<br>",
  '<a href="https://github.com/arin-prashar/Encrypter-Decrypter" target="_blank">    => Encryption Tool' + "</a>",
  '<a href="https://github.com/arin-prashar/qr-generator" target="_blank">    => QR Generator' + "</a>",
  '<a href="https://github.com/arin-prashar/Python-YouTube-MP3-Downloader" target="_blank">    => Youtube MP3 Downloader' + "</a>",
  "<br>",
];

server = [
  "<br>",
  "Server projects :<br>",
  "<br>",
  "# Setup a private home server using a old PC",
  "   -> Used Proxmox for virtualization",
  "   -> Used Docker for containerization",
  "   -> Used True NAS for storage",
  "   -> Used OpenVPN for remote access",
  "<br>",
];


const cv=[
  "<br>",
  "⚠ CV SECTION IS CURRENTLY UNDER DEVELOPMENT ⚠",
  `For now, you can view my CV here -> <a onclick="window.open('https://drive.google.com/file/d/126RTNyGdSOiwBp7QmvCDSgpYE2QB6efv/view?usp=sharing','newwindow','width=800,height=1200'); return false" target="_blank">CV</a>`,
  "<br>",
]

const generateSessionID = () => {
  const hexChars = "0123456789abcdef";
  let result = "";

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      result += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
    }
    if (i < 3) {
      result += " ";
    }
  }

  result += " : ";

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 4; j++) {
      result += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
    }
    if (i < 1) {
      result += " : ";
    }
  }

  return result;
};

banner = [
  '<span class="color2">Welcome to CosShell v2002.09.</span>',
  `<span class="color2">Session ID: <span class="command">${generateSessionID()}</span></span>`,
  `<span class="color2">Type</span> <span class="command">'help'</span><span class="color2"> to see list of available commands.</span>`,
  `<span class="color2">All Commands are case insensitive.</span>`,
];
