function libSection() {
	var library_section = document.getElementById('enterSection').value;

	switch(library_section) {
	case "F":
	document.getElementById('sectionResult').innerHTML="You have chosen fiction!"; 
	break;

	case "N":
	document.getElementById('sectionResult').innerHTML="You have chosen non-fiction!";
	break;

	case "R":
	document.getElementById('sectionResult').innerHTML="You have chosen reference!";
	break;

	default:
	document.getElementById('sectionResult').innerHTML="Invalid entry!";
	}
}

function classSection() {
	var class_section = document.getElementById('enterClass').value;

	switch(class_section) {
	case "1":
	document.getElementById('sectionClass').innerHTML="Emerald"; 
	break;

	case "2":
	document.getElementById('sectionClass').innerHTML="Ruby";
	break;

	case "3":
	document.getElementById('sectionClass').innerHTML="Topaz";
	break;

	case "4":
	document.getElementById('sectionClass').innerHTML="Sapphire";
	break;

	default:
	document.getElementById('sectionClass').innerHTML="Invalid entry!";
	}
}
