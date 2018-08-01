function selFile(fval){
	var fileSelect = document.getElementsByClassName('fileSelect');
	for(var k=0; k<fileSelect.length; k++){
		switch(fval){
		case "File_Name":
			farr = new Array("--Please Select--","Check Text", "Close file", "Edit file");
			for(var i=0; i<farr.length; i++){
				var option = new Option(farr[i],farr[i]);
				fileSelect[k].options[i] = option;
			}
			break;
		case "File_path":
			farr = new Array("--Please Select--", "Close file", "Edit file");
			for(var i=0; i<farr.length; i++){
				var option = new Option(farr[i],farr[i]);
				fileSelect[k].options[i] = option;
			}
			break;
		case "File_Signature":
			farr = new Array("--Please Select--", "Check Text", "Close file", "Edit file");
			for(var i=0; i<farr.length; i++){
				var option = new Option(farr[i],farr[i]);
				fileSelect[k].options[i] = option;
			}
			break;
		case "File_Acl":
			farr = new Array("--Please Select--", "Check Text", "Close file", "Edit file");
			for(var i=0; i<farr.length; i++){
				var option = new Option(farr[i],farr[i]);
				fileSelect[k].options[i] = option;
			}
			break;
		case "File_Checksum":
			farr = new Array("--Please Select--", "Check Text", "Close file", "Edit file");
			for(var i=0; i<farr.length; i++){
				var option = new Option(farr[i],farr[i]);
				fileSelect[k].options[i] = option;
			}
			break;
		}
	}
	
}

function selFileCond(value){
	var fileCond = document.getElementsByClassName("fileCond");
	for(var k=0; k<fileCond.length; k++){
		switch(value){
			case "Check Text": 
				arr = new Array("--Please Select--", "within tag (Uncommented)", "Line starting with", "Line ends with");
				for(var i=0; i<arr.length; i++){
					var option = new Option(arr[i],arr[i]);
					fileCond[k].options[i] = option;
				}
				break;
			
			case "Close file":
				arr = new Array("--Please Select--","within tag (Uncommented)", "Line starting with", "Line ends with");
				for(var i=0; i<arr.length; i++){
					var option = new Option(arr[i],arr[i]);
					fileCond[k].options[i] = option;
				}
				break;
				
			case "Edit file":
				arr = new Array("--Please Select--","within tag (Uncommented)", "Line starting with", "Line ends with");
				for(var i=0; i<arr.length; i++){
					var option = new Option(arr[i],arr[i]);
					fileCond[k].options[i] = option;
				}
				break;
		}
	}		
}

function PAselFile(fval){
	var PAfileSelect = document.getElementsByClassName("PAfileSelect");
	for(var k=0; k<PAfileSelect.length; k++){
		switch(fval){
		case "File_Name":
			farr = new Array("--Please Select--","Fix Text", "Close file", "Replace file", "Copy File");
			for(var i=0; i<farr.length; i++){
				var option = new Option(farr[i],farr[i]);
				PAfileSelect[k].options[i] = option;
			}
			break;
		case "File_path":
			farr = new Array("--Please Select--","Fix Text", "Close file", "Replace file", "Copy File");
			for(var i=0; i<farr.length; i++){
				var option = new Option(farr[i],farr[i]);
				PAfileSelect[k].options[i] = option;
			}
			break;
		case "File_Signature":
			farr = new Array("--Please Select--","Fix Text", "Close file", "Replace file", "Copy File");
			for(var i=0; i<farr.length; i++){
				var option = new Option(farr[i],farr[i]);
				PAfileSelect[k].options[i] = option;
			}
			break;
		case "File_Acl":
			farr = new Array("--Please Select--","Fix Text", "Close file", "Replace file", "Copy File");
			for(var i=0; i<farr.length; i++){
				var option = new Option(farr[i],farr[i]);
				PAfileSelect[k].options[i] = option;
			}
			break;
		case "File_Checksum":
			farr = new Array("--Please Select--","Fix Text", "Close File", "Replace File", "Copy File");
			for(var i=0; i<farr.length; i++){
				var option = new Option(farr[i],farr[i]);
				PAfileSelect[k].options[i] = option;
			}
			break;
		}
	}
}

function PAselFileCond(value){
	var PAfileCond = document.getElementsByClassName("PAfileCond");
	for(var k=0; k<PAfileCond.length; k++){
		switch(value){
			case "Fix Text": 
				arr = new Array("--Please Select--","within tag (Uncommented)", "Add Line", "Delete Lineccc");
				for(var i=0; i<arr.length; i++){
					var option = new Option(arr[i],arr[i]);
					PAfileCond[k].options[i] = option;
				}
				break;
			
			case "Close File":
				arr = new Array("--Please Select--");
				for(var i=0; i<arr.length; i++){
					var option = new Option(arr[i],arr[i]);
					PAfileCond[k].options[i] = option;
				}
				break;
				
			case "Replace File":
				arr = new Array("--Please Select--","New Filename", "New File path");
				for(var i=0; i<arr.length; i++){
					var option = new Option(arr[i],arr[i]);
					PAfileCond[k].options[i] = option;
				}
				break;
				
			case "Copy file":
				arr = new Array("--Please Select--","New Path");
				for(var i=0; i<arr.length; i++){
					var option = new Option(arr[i],arr[i]);
					PAfileCond[k].options[i] = option;
				}
				break;
		}
	}
}