
while(window.confirm("Enter a command ?"))
{
var res;

res =window.prompt("Enter command");
 
if(res!=null)
{
	//show result 

	document.write(res+"="+eval(res)+"<br>");
}else{
	break;
}

}	

window.alert("Script is over.");




