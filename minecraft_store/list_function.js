//function  for upload  a document 

var input =  document.getElementById("myinput");

function doIt(addr){
	window.location.assign(addr);
	if (input.value == "page"){
		window.location.assign("page.index");
	}
	if (input.value == "server1"){
		window.location.assign("page.index");
	}
}
