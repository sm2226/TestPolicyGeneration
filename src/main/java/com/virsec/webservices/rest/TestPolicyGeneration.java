package com.virsec.webservices.rest;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.util.List;
import java.util.UUID;
 
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.io.OutputFormat;
import org.dom4j.io.XMLWriter;

import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;
	 
@Path("/xml")
public class TestPolicyGeneration {
	@POST
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces("application/xml")
    public String createMessage(@FormParam("policyID") String policyID,
                                @FormParam("policyName") String policyName,
                                @FormParam("policy_desc") String policy_desc,
                                @FormParam("vstig_version") String vstig_version,
                                @FormParam("severity") String severity,
                                @FormParam("platform_id") String platform_id,
                                @FormParam("crud_id") List<String> crud_id,
                                @FormParam("policy_operand") List<String> policy_operand,
                                @FormParam("process_operands") List<String> process_operands,
                                @FormParam("PO_value") List<String> PO_value,
                                @FormParam("procSelect") String procSelect,
                                @FormParam("procValue") String procValue,                             
                                @FormParam("procCond") List<String> procCond,
                                @FormParam("procCondValue") List<String> procCondValue,
                                @FormParam("procPA") String procPA,
                                @FormParam("PAproc_operands") List<String> PAproc_operands,
                                @FormParam("PAPO_value") List<String> PAPO_value,
                                @FormParam("PAprocSelect") String PAprocSelect,
                                @FormParam("PAprocValue") String PAprocValue,
                                @FormParam("PAprocCond") List<String> PAprocCond,
                                @FormParam("PAprocCondValue") List<String> PAprocCondValue,
                                @FormParam("registry_operands") List<String> registry_operands,
                                @FormParam("RO_value") List<String> RO_value,
                                @FormParam("regSelect") String regSelect,
                                @FormParam("regValue") String regValue,                             
                                @FormParam("regCond") List<String> regCond,
                                @FormParam("regCondValue") List<String> regCondValue,
                                @FormParam("regPA") String regPA,
                                @FormParam("PAreg_operands") List<String> PAreg_operands,
                                @FormParam("PARO_value") List<String> PARO_value,
                                @FormParam("PAregSelect") String PAregSelect,
                                @FormParam("PAregValue") String PAregValue,
                                @FormParam("PAregCond") List<String> PAregCond,
                                @FormParam("PAregCondValue") List<String> PAregCondValue,
                                @FormParam("file_operands") List<String> file_operands,
                                @FormParam("FO_value") List<String> FO_value,
                                @FormParam("fileSelect") String fileSelect,
                                @FormParam("fileValue") String fileValue,                             
                                @FormParam("fileCond") List<String> fileCond,
                                @FormParam("fileCondValue") List<String> fileCondValue,
                                @FormParam("filePA") String filePA,
                                @FormParam("PAfile_operands") List<String> PAfile_operands,
                                @FormParam("PAFO_value") List<String> PAFO_value,
                                @FormParam("PAfileSelect") String PAfileSelect,
                                @FormParam("PAfileValue") String PAfileValue,
                                @FormParam("PAfileCond") List<String> PAfileCond,
                                @FormParam("PAfileCondValue") List<String> PAfileCondValue) { 
                           
		Document document = DocumentHelper.createDocument();
        Element root = document.addElement( "policy" )
        	.addAttribute("Policy_id", policyID);	
        
        Element PolicyNameElement = root.addElement("policy_name");
        PolicyNameElement.addText(policyName);
        
        Element PolicyDescElement = root.addElement("policy_desc");
        PolicyDescElement.addText(policy_desc);
        
        Element vSTIGPriorityElement = root.addElement( "Severity" );
        vSTIGPriorityElement.addText(severity);
        
        Element vSTIGVersionElement = root.addElement( "vSTIGVersion" );
        vSTIGVersionElement.addText(vstig_version);
        
        Element platformIDElement = root.addElement( "platformID" );
        platformIDElement.addText(platform_id);
        
        Element crudElement = root.addElement("crudOperations");
        for(int j=0; j<crud_id.size(); j++) {
        	crudElement.addElement("CRUDOperation")
           .addText(crud_id.get(j));
        }
       
       for(int k=0; k<policy_operand.size();k++) {
        	
        	 if(policy_operand.get(k).equals("process")) {
        		 Element PORuleElement = root.addElement("Rule");
        		 Element processOperandsElement = PORuleElement.addElement("ProcessOperands");
        		 
         		for(int a=0; a<process_operands.size(); a++) {
         			
         			Element processOperandElement = processOperandsElement.addElement("ProcessOperand");
 	        		processOperandElement.addElement("OperandType")
 	        			.addText(process_operands.get(a));
 	 
 	        		processOperandElement.addElement("OperandValue")
 	        			.addText(PO_value.get(a));
         		}
         		
         		Element procActionOnOperandsElement = PORuleElement.addElement("TaskOnOperands");
         		
         			procActionOnOperandsElement.addElement("Task")
         				.addText(procSelect);
         		
         			procActionOnOperandsElement.addElement("TaskVariable")
         				.addText(procValue);
 	        	
         		Element procCondElements = PORuleElement.addElement("ConditionElements");
         		
         		for(int a=0; a<procCond.size(); a++) {
         			
 	        		Element procCondElement = procCondElements.addElement("ConditionElement");
         			procCondElement.addElement("Condition")
 	        			.addText(procCond.get(a));
 	 
 	        		procCondElement.addElement("ConditionValue")
 	        			.addText(procCondValue.get(a));
         		}
         		
         		Element procProtectionActionElement = root.addElement("ProtectionAction");
         		
         		procProtectionActionElement.addElement("Action")
         			.addText(procPA);
         		
         		Element PAProcOperandsElement = procProtectionActionElement.addElement("ProcessOperands");
 	    		
         		for(int a=0; a<PAproc_operands.size(); a++) {
         			
         			Element PAProcOperandElement = PAProcOperandsElement.addElement("ProcessOperand");
 	        		PAProcOperandElement.addElement("OperandType")
 	        			.addText(PAproc_operands.get(a));
 	 
 	        		PAProcOperandElement.addElement("OperandValue")
 	        			.addText(PAPO_value.get(a));
         		}
         		
         		Element PAProcActionOnOperandsElement = procProtectionActionElement.addElement("TaskOnOperands");
         		
         		PAProcActionOnOperandsElement.addElement("Task")
         				.addText(PAprocSelect);
         		if(PAprocValue != null) {
         			PAProcActionOnOperandsElement.addElement("TaskVariable")
         				.addText(PAprocValue);
         		}
 	        	
         		Element PAProcCondElements = procProtectionActionElement.addElement("ConditionElements");
         		
         		for(int a=0; a<PAprocCond.size(); a++) {
         			
 	        		Element PAProcCondElement = PAProcCondElements.addElement("ConditionElement");
         			PAProcCondElement.addElement("Condition")
 	        			.addText(PAprocCond.get(a));
 	 
 	        		PAProcCondElement.addElement("ConditionValue")
 	        			.addText(PAprocCondValue.get(a));
         		}
    		}
    	

        	else if(policy_operand.get(k).equals("registry")) {
        		Element RORuleElement = root.addElement("Rule");
	    		Element regOperandsElement = RORuleElement.addElement("RegistryOperands");
	    		//int b=flogicalOp.size();
	    		
        		for(int a=0; a<registry_operands.size(); a++) {
        			
        			Element regOperandElement = regOperandsElement.addElement("RegistryOperand");
	        		regOperandElement.addElement("OperandType")
	        			.addText(registry_operands.get(a));
	 
	        		regOperandElement.addElement("OperandValue")
	        			.addText(RO_value.get(a));
        		}
        		
        		Element regActionOnOperandsElement = RORuleElement.addElement("TaskOnOperands");
        		
        			regActionOnOperandsElement.addElement("Task")
        				.addText(regSelect);
        		
        			regActionOnOperandsElement.addElement("TaskVariable")
        				.addText(regValue);
	        	
        		Element regCondElements = RORuleElement.addElement("ConditionElements");
        		
        		for(int a=0; a<regCond.size(); a++) {
        			
	        		Element regCondElement = regCondElements.addElement("ConditionElement");
        			regCondElement.addElement("Condition")
	        			.addText(regCond.get(a));
	 
	        		regCondElement.addElement("ConditionValue")
	        			.addText(regCondValue.get(a));
        		}
        		
        		Element regProtectionActionElement = root.addElement("ProtectionAction");
        		
        		regProtectionActionElement.addElement("Action")
        			.addText(regPA);
        		
        		Element PARegOperandsElement = regProtectionActionElement.addElement("RegistryOperands");
	    		//int b=flogicalOp.size();
	    		
        		for(int a=0; a<PAreg_operands.size(); a++) {
        			
        			Element PARegOperandElement = PARegOperandsElement.addElement("RegistryOperand");
	        		PARegOperandElement.addElement("OperandType")
	        			.addText(PAreg_operands.get(a));
	 
	        		PARegOperandElement.addElement("OperandValue")
	        			.addText(PARO_value.get(a));
        		}
        		
        		Element PARegActionOnOperandsElement = regProtectionActionElement.addElement("TaskOnOperands");
        		
        			PARegActionOnOperandsElement.addElement("Task")
        				.addText(PAregSelect);
        		
        			PARegActionOnOperandsElement.addElement("TaskVariable")
        				.addText(PAregValue);
	        	
        		Element PARegCondElements = regProtectionActionElement.addElement("ConditionElements");
        		
        		for(int a=0; a<PAregCond.size(); a++) {
        			
	        		Element PARegCondElement = PARegCondElements.addElement("ConditionElement");
        			PARegCondElement.addElement("Condition")
	        			.addText(PAregCond.get(a));
	 
	        		PARegCondElement.addElement("ConditionValue")
	        			.addText(PAregCondValue.get(a));
        		}
    		}
	    	else { 
	    		Element FORuleElement = root.addElement("Rule");
	    		Element fileOperandsElement = FORuleElement.addElement("FileOperands");
	    		//int b=flogicalOp.size();
	    		
        		for(int a=0; a<file_operands.size(); a++) {
        			
        			Element fileOperandElement = fileOperandsElement.addElement("FileOperand");
	        		fileOperandElement.addElement("OperandType")
	        			.addText(file_operands.get(a));
	 
	        		fileOperandElement.addElement("OperandValue")
	        			.addText(FO_value.get(a));
        		}
        		
        		Element actionOnOperandsElement = FORuleElement.addElement("TaskOnOperands");
        		
        		actionOnOperandsElement.addElement("Task")
        				.addText(fileSelect);
        		
        			actionOnOperandsElement.addElement("TaskVariable")
        				.addText(fileValue);
	        	
        		Element fileCondElements = FORuleElement.addElement("ConditionElements");
        		
        		for(int a=0; a<fileCond.size(); a++) {
        			
	        		Element fileCondElement = fileCondElements.addElement("ConditionElement");
        			fileCondElement.addElement("Condition")
	        			.addText(fileCond.get(a));
	 
	        		fileCondElement.addElement("ConditionValue")
	        			.addText(fileCondValue.get(a));
        		}
        		
        		Element ProtectionActionElement = root.addElement("ProtectionAction");
        		
        		ProtectionActionElement.addElement("Action")
        			.addText(filePA);
        		
        		Element PAfileOperandsElement = ProtectionActionElement.addElement("FileOperands");
	    		//int b=flogicalOp.size();
	    		
        		for(int a=0; a<PAfile_operands.size(); a++) {
        			
        			Element PAfileOperandElement = PAfileOperandsElement.addElement("FileOperand");
	        		PAfileOperandElement.addElement("OperandType")
	        			.addText(PAfile_operands.get(a));
	 
	        		PAfileOperandElement.addElement("OperandValue")
	        			.addText(PAFO_value.get(a));
        		}
        		
        		Element PAactionOnOperandsElement = ProtectionActionElement.addElement("TaskOnOperands");
        		
        		PAactionOnOperandsElement.addElement("Task")
        				.addText(PAfileSelect);
        		if(PAfileValue != null) {
        			PAactionOnOperandsElement.addElement("TaskVariable")
        				.addText(PAfileValue);
        		}
	        	
        		Element PAfileCondElements = ProtectionActionElement.addElement("ConditionElements");
        		
        		for(int a=0; a<PAfileCond.size(); a++) {
        			
	        		Element PAfileCondElement = PAfileCondElements.addElement("ConditionElement");
        			PAfileCondElement.addElement("Condition")
	        			.addText(PAfileCond.get(a));
	 
	        		PAfileCondElement.addElement("ConditionValue")
	        			.addText(PAfileCondValue.get(a));
        		}
	    	}		
       }
       String text = document.asXML();
       System.out.println("This is my XML: " +text);
       return text; 
   }
}



