const getcolor = () =>{
	const rendomnumber = Math.floor(Math.random() * 16777215) 
	const rendomcode ="#" + rendomnumber.toString(16)
	document.body.style.backgroundColor =rendomcode
}
document.getElementById("btn").addEventListener(
	"click",
	getcolor
);
getcolor()