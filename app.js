var heartLength = document.querySelectorAll(".fa-heart").length;

for (var i = 0; i < heartLength; i++) {
	
	var element = document.querySelectorAll(".fa-heart")[i];
	element.addEventListener("click", function() {
		this.classList.replace("far","fas");
	});
}

