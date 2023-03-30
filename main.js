let btn=document.querySelector("button");
btn.classList.add("butn");
let image1=document.querySelector("img");


btn.addEventListener("click",tog);
function tog()
	{
	image1.classList.toggle("content");
	}

