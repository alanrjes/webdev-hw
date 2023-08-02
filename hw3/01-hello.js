// create profile pic element
let pic = document.createElement("img");
pic.src = "../images/alan.jpg";
pic.width = "200";
pic.alt = "Alan's profile picture";
// centered
pic.style.display = "block";
pic.style.margin = "auto";
// circular
pic.style.borderRadius = "100%";

// create bio text elements
let bio = document.createElement("p");
// write first line bold
let firstline = document.createElement("span");
firstline.textContent = "Hi, my name is Alan.";
firstline.style.fontWeight = "bold";
// add the rest of the bio
bio.append(firstline);
let etc = document.createElement("span");
etc.textContent = "I'm a senior CS major at Reed College in Portland, OR.";
bio.append(document.createElement("br"));
bio.append(etc);
// centered
bio.style.margin = "20px auto";
bio.style.width = "300px";

// fix title to match hw1
document.querySelector("h1").textContent = "01 - Hello";

// add picture & bio to DOM
document.querySelector("main").append(pic);
document.querySelector("main").append(bio);
