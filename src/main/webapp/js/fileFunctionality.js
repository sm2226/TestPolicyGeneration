/*
 * Script that clones the entire File Operands block to add another
 * Condition and associated Protection actions
 */

$(document).ready(function(){
	// Cloned elements count
	var fcount=0;
	var FOcounter = 1;
	var FCcounter = 1;
	var PAFOcounter = 1;
	var PAFCcounter = 1;
	$(".add_FO").click(function(){
		
		FOcounter=1;
		FCcounter=1;
		PAFOcounter=1;
		PAFCcounter=1;
		
		// Increment the cloned element count
		fcount++;
		// Clone the element and assign it to a variable
		var fclone = $("#file_operands").clone(true);
		if (fcount==1){
			fclone.prepend('<b> CONDITION '+fcount+'</b><br>')
			.append($('<br><a class="delete" href="#">Remove</a>'))
			.appendTo("#Fadditionalselects");
		}
		else {
			fclone.prepend('<select name="flogicalOp"><option name="flogical" value="AND">AND</option><option name="flogical" value="OR">OR</option><option name="flogical" value="NOT">NOT</option></select><br><br><b> CONDITION '+fcount+'</b><br>')
					.append($('<br><a class="delete" href="#">Remove</a>'))
					.appendTo("#Fadditionalselects");
		}
		// Modify cloned element, using the counter variable
	
		fclone.find('[name="file"]').attr('id', 'file'+fcount+'1');
		fclone.find('[name="file_operands"]').attr('id', 'file_operands'+fcount+'1');
		fclone.find('[name="FO_value"]').attr('id', 'FO_value'+fcount+'1').val("");
		fclone.find('[name="additionalFO"]').attr('id','additionalFO'+fcount);
		fclone.find('[name="fileSelect"]').attr('id', 'fileSelect'+fcount);
		fclone.find('[name="fileValue"]').attr('id', 'fileValue'+fcount);
		fclone.find('[name="fileConditions"]').attr('id', 'fileConditions'+fcount+'1');
		fclone.find('[name="fileCond"]').attr('id', 'fileCond'+fcount+'1');
		fclone.find('[name="fileCondValue"]').attr('id', 'fileCondValue'+fcount+'1').val("");
		fclone.find('[name="additionalCFO"]').attr('id', 'additionalCFO'+fcount);
		
		fclone.find('[name="filePA"]').attr('id', 'filePA'+fcount);
		fclone.find('[name="PAfile"]').attr('id', 'PAfile'+fcount+'1');
		fclone.find('[name="PAfile_operands"]').attr('id', 'PAfile_operands'+fcount+'1');
		fclone.find('[name="PAFO_value"]').attr('id', 'PAFO_value'+fcount+'1').val("");
		fclone.find('[name="PAadditionalFO"]').attr('id','PAadditionalFO'+fcount);
		fclone.find('[name="PAfileSelect"]').attr('id', 'PAfileSelect'+fcount);
		fclone.find('[name="PAfileValue"]').attr('id', 'PAfileValue'+fcount);
		fclone.find('[name="PAfileConditions"]').attr('id', 'PAfileConditions'+fcount+'1');
		fclone.find('[name="PAfileCond"]').attr('id', 'PAfileCond'+fcount+'1');
		fclone.find('[name="PAfileCondValue"]').attr('id', 'PAfileCondValue'+fcount+'1');
		fclone.find('[name="PAadditionalCFO"]').attr('id', 'PAadditionalCFO'+fcount);
		fclone.find('[name="file"]').parent().attr('id', 'file_operands'+fcount);
	});
	
	$("body").on('click',".delete", function() {
		$(this).closest(".file_input").remove();	
		fcount--; // Modify the counter
	});
	
	/*
	 * Script that clones the File Operands Select List when 
	 * there is a chance of having multiple operands within a condition
	 */
	
	// Cloned elements count
	
	$(".add_moreFO").click(function(){
		
		// Increment the cloned element count
		FOcounter++;
		// Clone the element and assign it to a variable
		var foclone = $("#file").clone(true)
			.append($('<a class="deleteFO" href="#">Remove</a>'))
			.appendTo("#additionalFO"+fcount);
		
		// Modify cloned element, using the counter variable
		foclone.find('[name="file_operands"]').attr('id', 'file_operands'+fcount+''+FOcounter);
		foclone.find('input').attr('id', 'FO_value'+fcount+''+FOcounter).val("");
		foclone.find('select').parent().attr('id', "file"+fcount+''+FOcounter);	
	});
	
	$("body").on('click',".deleteFO", function() {
		FOcounter--; // Modify the counter
		$(this).closest(".FO_SelectList").remove();
		
	});
	
	// Cloned elements count
	
	$(".add_moreCondFO").click(function(){
		
		// Increment the cloned element count
		FCcounter++;
		// Clone the element and assign it to a variable
		var fclone = $("#fileConditions").clone(true)
			.append($('<a class="deleteCFO" href="#">Remove</a>'))
			.appendTo("#additionalCFO"+fcount);
		
		// Modify cloned element, using the counter variable
		fclone.find('[name="fileCond"]').attr('id', 'fileCond'+fcount+''+FCcounter);
		fclone.find('input').attr('id', 'fileCondValue'+fcount+''+FCcounter).val("");
		fclone.find('select').parent().attr('id', "fileConditions" +fcount+''+FCcounter);	
	});
	
	$("body").on('click',".deleteCFO", function() {
		FCcounter--; // Modify the counter
		$(this).closest(".FO_conditionList").remove();
		
	});
	

	// Cloned elements count
	
	$(".PAadd_moreFO").click(function(){
		
		// Increment the cloned element count
		PAFOcounter++;
		// Clone the element and assign it to a variable
		var fclone = $("#PAfile").clone(true)
			.append($('<a class="deletePAFO" href="#">Remove</a>'))
			.appendTo("#PAadditionalFO"+fcount);
		
		// Modify cloned element, using the counter variable
		fclone.find('[name="PAfile_operands"]').attr('id', 'PAfile_operands'+fcount+''+PAFOcounter);
		fclone.find('input').attr('id', 'PAFO_value'+fcount+''+PAFOcounter).val("");
		fclone.find('select').parent().attr('id', "PAfile" +fcount+''+PAFOcounter);	
	});
	
	$("body").on('click',".deletePAFO", function() {
		PAFOcounter--; // Modify the counter
		$(this).closest(".PAFO_SelectList").remove();
		
	});
	
	// Cloned elements count
	
	$(".PAadd_moreCondFO").click(function(){
		
		// Increment the cloned element count
		PAFCcounter++;
		// Clone the element and assign it to a variable
		var fclone = $("#PAfileConditions").clone(true)
			.append($('<a class="deletePACFO" href="#">Remove</a>'))
			.appendTo("#PAadditionalCFO"+fcount);
		
		// Modify cloned element, using the counter variable
		fclone.find('[name="PAfileCond"]').attr('id', 'PAfileCond'+fcount+''+PAFCcounter);
		fclone.find('input').attr('id', 'PAfileCondValue'+fcount+''+PAFCcounter).val("");
		fclone.find('select').parent().attr('id', "PAfileConditions" +fcount+''+PAFCcounter);	
	});
	
	$("body").on('click',".deletePACFO", function() {
		PAFCcounter--; // Modify the counter
		$(this).closest(".PAFO_conditionList").remove();
		
	});
});