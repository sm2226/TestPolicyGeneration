
/*
 * Script for adding additional operands when clicked on Add more fields button
 * For Process Operands
 */

$(document).ready(function(){
	// Cloned elements count
	var pcounter = 0;
	var pcount = 1;
	$(".add_PO").click(function(){
		
		// Increment the cloned element count
		pcounter++;
		pcount++;
		// Clone the element and assign it to a variable
		var pclone = $("#process_operands").clone(true)
			.prepend('<select name="plogicalOp"><option name="plogical" value="AND">AND</option><option name="plogical" value="OR">OR</option><option name="plogical" value="NOT">NOT</option></select><br><br> <b>CONDITION '+pcount+'</b><br>')
			.append($('<a class="delete" href="#">Remove</a>'))
			.appendTo("#Padditionalselects");
		
		// Modify cloned element, using the counter variable
		pclone.find('[name="process_operands"]').attr('id', 'process_operands'+pcounter);
		pclone.find('input').attr('id', 'PO_value'+pcounter).val("");
		pclone.find('[name="process_condition"]').attr('id', 'process_condition'+pcounter);
		pclone.find('[name="processPA"]').attr('id', 'processPA'+pcounter);
		pclone.find('[name="logicalOp"]').attr('id', 'logicalOp'+pcounter);
		pclone.find('[name="procSelect"]').attr('id', 'procSelect'+pcounter);
		pclone.find('[name="procValue"]').attr('id', 'procValue'+pcounter);
		pclone.find('#process').parent().attr('id', "process_operands" + pcounter);	
	});
	
	
	$("body").on('click',".delete", function() {
		$(this).closest(".process_input").remove();
		pcounter--; // Modify the counter
		pcount--;
	}); 
	
	// Cloned elements count
	var POcounter = 0;
	var POcount = 1;
	$(".add_morePO").click(function(){
		
		// Increment the cloned element count
		POcounter++;
		POcount++;
		// Clone the element and assign it to a variable
		var pclone = $("#process").clone(true)
			.append($('<a class="deletePO" href="#">Remove</a>'))
			.appendTo("#additionalPO");
		
		// Modify cloned element, using the counter variable
		pclone.find('[name="process_operands"]').attr('id', 'same_process_operands'+POcounter);
		pclone.find('input').attr('id', 'same_PO_value'+POcounter).val("");
		pclone.find('select').parent().attr('id', "process" + POcounter);	
	});
	
	$("body").on('click',".deletePO", function() {
		$(this).closest(".PO_SelectList").remove();
		POcounter--; // Modify the counter
		POcount--;
	});
});