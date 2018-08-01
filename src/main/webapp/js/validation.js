
$(document).ready(function(){
	//Form Validation
	$("#form").validate({
		rules:{
			vstig_priority: "required",
			vstig_version: "required",
			platform_id: "required",
			class_id: "required",
			crud_id: "required",
			operand_type: "required",
			process_operands: "required",
			PO_value: "required",
			process_condition: "required",
			registry_operands: "required",
			RO_value: "required",
			registry_condition: "required",
			file_operands: "required",
			FO_value: "required",
			file_condition: "required",
		},
		messages:{
			vstig_priority: "Select vSTIG PRIORITY",
			vstig_version: "Select vSTIG VERSION",
			platform_id: "Select type of PLATFORM",
			class_id: "Select the Policy class",
			crud_id: "Slect the CRD operations associated with the Policy",
			operand_type: "Select the policy operands type",
			process_operands: "Select the type of policy operand",
			PO_value: "Enter the policy operand value",
			process_condition: "Select the conditional statement",
			registry_operands: "Select the type of policy operand",
			RO_value: "Enter the policy operand value",
			registry_condition: "Select the conditional statement",
			file_operands: "Select the type of policy operand",
			FO_value: "Enter the policy operand value",
			file_condition: "Select the conditional statement",
		}
	});
	
	$("#PO").click(function(){
		if($(this).is(":checked")){
			$("#process_block").show();
		}else{
			$("#process_block").hide();
		}
	});
	
	$("#RO").click(function(){
		if($(this).is(":checked")){
			$("#registry_block").show();
		}else{
			$("#registry_block").hide();
		}
	});
	
	$("#FO").click(function(){
		if($(this).is(":checked")){
			$("#file_block").show();
		}else{
			$("#file_block").hide();
		}
	});
});