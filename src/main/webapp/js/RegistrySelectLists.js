function selReg(rval){
	var regSelect = document.getElementsByClassName('regSelect');
	for(var k=0; k<regSelect.length; k++){
		switch(rval){
		case "File_Name":
			rarr = new Array("--Please Select--","Check Text", "Close file", "Edit file");
			for(var i=0; i<rarr.length; i++){
				var option = new Option(rarr[i],rarr[i]);
				regSelect[k].options[i] = option;
			}
			break;
		case "File_path":
			rarr = new Array("--Please Select--", "Close file", "Edit file");
			for(var i=0; i<rarr.length; i++){
				var option = new Option(rarr[i],rarr[i]);
				regSelect[k].options[i] = option;
			}
			break;
		case "File_Signature":
			rarr = new Array("--Please Select--", "Check Text", "Close file", "Edit file");
			for(var i=0; i<rarr.length; i++){
				var option = new Option(rarr[i],rarr[i]);
				regSelect[k].options[i] = option;
			}
			break;
		case "File_Acl":
			rarr = new Array("--Please Select--", "Check Text", "Close file", "Edit file");
			for(var i=0; i<rarr.length; i++){
				var option = new Option(rarr[i],rarr[i]);
				regSelect[k].options[i] = option;
			}
			break;
		case "File_Checksum":
			rarr = new Array("--Please Select--", "Check Text", "Close file", "Edit file");
			for(var i=0; i<rarr.length; i++){
				var option = new Option(rarr[i],rarr[i]);
				regSelect[k].options[i] = option;
			}
			break;
		}
	}
	
}

function selRegCond(rval){
	var regCond = document.getElementsByClassName("regCond");
	for(var k=0; k<regCond.length; k++){
		switch(rval){
			case "Check Text": 
				rarr = new Array("--Please Select--", "within tag (Uncommented)", "Line starting with", "Line ends with");
				for(var i=0; i<rarr.length; i++){
					var option = new Option(rarr[i],rarr[i]);
					regCond[k].options[i] = option;
				}
				break;
			
			case "Close file":
				rarr = new Array("--Please Select--","within tag (Uncommented)", "Line starting with", "Line ends with");
				for(var i=0; i<rarr.length; i++){
					var option = new Option(rarr[i],rarr[i]);
					regCond[k].options[i] = option;
				}
				break;
				
			case "Edit file":
				rarr = new Array("--Please Select--","within tag (Uncommented)", "Line starting with", "Line ends with");
				for(var i=0; i<rarr.length; i++){
					var option = new Option(rarr[i],rarr[i]);
					regCond[k].options[i] = option;
				}
				break;
		}
	}		
}

function PAselReg(rval){
	var PAregSelect = document.getElementsByClassName("PAregSelect");
	for(var k=0; k<PAregSelect.length; k++){
		switch(rval){
		case "File_Name":
			rarr = new Array("--Please Select--","Fix Text", "Close file", "Replace file", "Copy File");
			for(var i=0; i<rarr.length; i++){
				var option = new Option(rarr[i],rarr[i]);
				PAregSelect[k].options[i] = option;
			}
			break;
		case "File_path":
			rarr = new Array("--Please Select--","Fix Text", "Close file", "Replace file", "Copy File");
			for(var i=0; i<rarr.length; i++){
				var option = new Option(rarr[i],rarr[i]);
				PAregSelect[k].options[i] = option;
			}
			break;
		case "File_Signature":
			rarr = new Array("--Please Select--","Fix Text", "Close file", "Replace file", "Copy File");
			for(var i=0; i<rarr.length; i++){
				var option = new Option(rarr[i],rarr[i]);
				PAregSelect[k].options[i] = option;
			}
			break;
		case "File_Acl":
			rarr = new Array("--Please Select--","Fix Text", "Close file", "Replace file", "Copy File");
			for(var i=0; i<rarr.length; i++){
				var option = new Option(rarr[i],rarr[i]);
				PAregSelect[k].options[i] = option;
			}
			break;
		case "File_Checksum":
			rarr = new Array("--Please Select--","Fix Text", "Close File", "Replace File", "Copy File");
			for(var i=0; i<rarr.length; i++){
				var option = new Option(rarr[i],rarr[i]);
				PAregSelect[k].options[i] = option;
			}
			break;
		}
	}
}

function PAselRegCond(rval){
	var PAregCond = document.getElementsByClassName("PAregCond");
	for(var k=0; k<PAregCond.length; k++){
		switch(rval){
			case "Fix Text": 
				rarr = new Array("--Please Select--","within tag (Uncommented)", "Add Line", "Delete Lineccc");
				for(var i=0; i<rarr.length; i++){
					var option = new Option(rarr[i],rarr[i]);
					PAregCond[k].options[i] = option;
				}
				break;
			
			case "Close File":
				rarr = new Array("--Please Select--");
				for(var i=0; i<rarr.length; i++){
					var option = new Option(rarr[i],rarr[i]);
					PAregCond[k].options[i] = option;
				}
				break;
				
			case "Replace File":
				rarr = new Array("--Please Select--","New Filename", "New File path");
				for(var i=0; i<rarr.length; i++){
					var option = new Option(rarr[i],rarr[i]);
					PAregCond[k].options[i] = option;
				}
				break;
				
			case "Copy file":
				rarr = new Array("--Please Select--","New Path");
				for(var i=0; i<rarr.length; i++){
					var option = new Option(rarr[i],rarr[i]);
					PAregCond[k].options[i] = option;
				}
				break;
		}
	}
}

