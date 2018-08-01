// Cloned elements count

$(document).ready(function(){
	var rcounter = 0;
	var rcount=1;
	$(".add_RO").click(function(){
		
		// Increment the cloned element count
		rcounter++;
		rcount++;
		// Clone the element and assign it to a variable
		var rclone = $("#registry_operands").clone(true)
			.prepend('<select name="rlogicalOp"><option name="rlogical" value="AND">AND</option><option name="rlogical" value="OR">OR</option><option name="rlogical" value="NOT">NOT</option></select><br><br><b> CONDITION '+rcount+'</b><br>')
			.append($('<a class="delete" href="#">Remove</a>'))
			.appendTo("#Radditionalselects");
		
		// Modify cloned element, using the counter variable
		pclone.find('[name="registry_operands"]').attr('id', 'registry_operands'+rcounter);
		pclone.find('input').attr('id', 'RO_value'+rcounter).val("");
		pclone.find('[name="registry_condition"]').attr('id', 'registry_condition'+rcounter);
		pclone.find('[name="registryPA"]').attr('id', 'registryPA'+rcounter);
		pclone.find('select').parent().attr('id', "registry_operands" + rcounter);
	});
	
	$("body").on('click',".delete", function() {
		$(this).closest(".registry_input").remove();
		rcounter--; // Modify the counter
		rcount--;
	});
});