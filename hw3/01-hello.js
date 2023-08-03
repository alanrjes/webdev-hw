// create profile pic element
const pic = document.createElement("img");
pic.src = "../images/alan.jpg";
pic.width = "200";
pic.alt = "Alan's profile picture";
// centered
pic.style.display = "block";
pic.style.margin = "auto";
// circular
pic.style.borderRadius = "100%";

// create bio text elements
const bio = document.createElement("p");
bio.textContent = "I'm a senior CS major at Reed College in Portland, OR.";
// write first line bold
const firstline = document.createElement("span");
firstline.textContent = "Hi, my name is Alan.";
firstline.style.fontWeight = "bold";
bio.prepend(firstline, document.createElement("br"));
// centered
bio.style.margin = "20px auto";
bio.style.width = "300px";

// add picture & bio to DOM
const main = document.querySelector("main");
main.append(pic);
main.append(bio);
