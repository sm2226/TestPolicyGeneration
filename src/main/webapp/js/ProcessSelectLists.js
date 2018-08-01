/**
 * 
 */

function selProc(pval){
	var procSelect = document.getElementsByClassName('procSelect');
	for(var k=0; k<procSelect.length; k++){
		switch(pval){
		case "Process_Name":
			parr = new Array("Search within process", "Edit", "Find sub process");
			for(var i=0; i<parr.length; i++){
				var option = new Option(parr[i],parr[i]);
				procSelect[k].options[i] = option;
			}
			break;
		case "Process_path":
			parr = new Array("Find Process", "Create", "Delete");
			for(var i=0; i<parr.length; i++){
				var option = new Option(parr[i],parr[i]);
				procSelect[k].options[i] = option;
			}
			break;
		case "File_Signature":
			parr = new Array("Match", "Add new", "Modify");
			for(var i=0; i<parr.length; i++){
				var option = new Option(parr[i],parr[i]);
				procSelect[k].options[i] = option;
			}
			break;
		case "File_Acl":
			parr = new Array("Add", "Edit", "Check", "Delete");
			for(var i=0; i<parr.length; i++){
				var option = new Option(parr[i],parr[i]);
				procSelect[k].options[i] = option;
			}
			break;
		case "File_Checksum":
			parr = new Array("Match", "Add new", "Modify");
			for(var i=0; i<parr.length; i++){
				var option = new Option(parr[i],parr[i]);
				procSelect[k].options[i] = option;
			}
			break;
		case "Process_Type":
			parr = new Array("Search", "Edit", "Find sub process");
			for(var i=0; i<parr.length; i++){
				var option = new Option(parr[i],parr[i]);
				procSelect[k].options[i] = option;
			}
			break;
		}
	}
}

function selProcCond(pval){
	var procCond = document.getElementsByClassName("procCond");
	for(var k=0; k<procCond.length; k++){
		switch(pval){
			case "Search within process": 
				arr = new Array("--Please Select--", "within tag (Uncommented)", "Line starting with", "Line ends with");
				for(var i=0; i<arr.length; i++){
					var option = new Option(arr[i],arr[i]);
					procCond[k].options[i] = option;
				}
				break;
			
			case "Close file":
				arr = new Array("--Please Select--","within tag (Uncommented)", "Line starting with", "Line ends with");
				for(var i=0; i<arr.length; i++){
					var option = new Option(arr[i],arr[i]);
					procCond[k].options[i] = option;
				}
				break;
				
			case "Edit file":
				arr = new Array("--Please Select--","within tag (Uncommented)", "Line starting with", "Line ends with");
				for(var i=0; i<arr.length; i++){
					var option = new Option(arr[i],arr[i]);
					procCond[k].options[i] = option;
				}
				break;
		}
	}		
}

function PAselProc(pval){
	var PAprocSelect = document.getElementsByClassName("PAprocSelect");
	for(var k=0; k<PAprocSelect.length; k++){
		switch(pval){
		case "File_Name":
			parr = new Array("--Please Select--","Fix Text", "Close file", "Replace file", "Copy File");
			for(var i=0; i<parr.length; i++){
				var option = new Option(parr[i],parr[i]);
				PAprocSelect[k].options[i] = option;
			}
			break;
		case "File_path":
			parr = new Array("--Please Select--","Fix Text", "Close file", "Replace file", "Copy File");
			for(var i=0; i<parr.length; i++){
				var option = new Option(parr[i],parr[i]);
				PAprocSelect[k].options[i] = option;
			}
			break;
		case "File_Signature":
			parr = new Array("--Please Select--","Fix Text", "Close file", "Replace file", "Copy File");
			for(var i=0; i<parr.length; i++){
				var option = new Option(parr[i],parr[i]);
				PAprocSelect[k].options[i] = option;
			}
			break;
		case "File_Acl":
			parr = new Array("--Please Select--","Fix Text", "Close file", "Replace file", "Copy File");
			for(var i=0; i<parr.length; i++){
				var option = new Option(parr[i],parr[i]);
				PAprocSelect[k].options[i] = option;
			}
			break;
		case "File_Checksum":
			parr = new Array("--Please Select--","Fix Text", "Close File", "Replace File", "Copy File");
			for(var i=0; i<parr.length; i++){
				var option = new Option(parr[i],parr[i]);
				PAprocSelect[k].options[i] = option;
			}
			break;
		}
	}
}

function PAselProcCond(pval){
	var PAprocCond = document.getElementsByClassName("PAprocCond");
	for(var k=0; k<PAprocCond.length; k++){
		switch(pval){
			case "Fix Text": 
				arr = new Array("--Please Select--","within tag (Uncommented)", "Add Line", "Delete Lineccc");
				for(var i=0; i<arr.length; i++){
					var option = new Option(arr[i],arr[i]);
					PAprocCond[k].options[i] = option;
				}
				break;
			
			case "Close File":
				arr = new Array("--Please Select--");
				for(var i=0; i<arr.length; i++){
					var option = new Option(arr[i],arr[i]);
					PAprocCond[k].options[i] = option;
				}
				break;
				
			case "Replace File":
				arr = new Array("--Please Select--","New Filename", "New File path");
				for(var i=0; i<arr.length; i++){
					var option = new Option(arr[i],arr[i]);
					PAprocCond[k].options[i] = option;
				}
				break;
				
			case "Copy file":
				arr = new Array("--Please Select--","New Path");
				for(var i=0; i<arr.length; i++){
					var option = new Option(arr[i],arr[i]);
					PAprocCond[k].options[i] = option;
				}
				break;
		}
	}
}

