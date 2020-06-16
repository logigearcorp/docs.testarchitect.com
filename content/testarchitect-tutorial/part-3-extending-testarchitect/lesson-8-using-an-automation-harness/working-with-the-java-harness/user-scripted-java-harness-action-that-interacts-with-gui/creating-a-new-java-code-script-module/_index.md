--- 
title: "Creating a new Java code script module"
linktitle: "Creating a new Java code script module"
description: "Create a new Java module, and provide the code overhead required to access your new user-scripted action."
weight: 1
aliases: 
    - /TA_Tutorials/Topics/Creating_a_new_code_script_module_Java.html
keywords: "mod_Table.java, SetActionScript() library function (Java), LIBRARY, TestArchitect object (Java), SetActionScript() function, SetActions() Java harness function, check row count, Java-scripted action, divert() Java harness function, TAMain.java, Java harness file, editing"
---

Create a new Java module, and provide the code overhead required to access your new user-scripted action.

1.  In your working Java harness directory, create a new file for the table support actions. Name the file Mod\_Table.java. 

    By convention, code files are named “mod\_X.java”, where “X” is a descriptive name for the scope of the actions in the module.

2.  Open the file in your editor, and enter the following code, as shown, which is necessary to let TestArchitect know about the new module and its actions. Once done, save your work.

    ```
    package com.testarchitect.java.user;
    
    import java.lang.reflect.Method;
    import com.testarchitect.java.AbtAutomation;
    import com.testarchitect.java.AbtLibrary;
    import com.testarchitect.java.control.AbtElement;
    import com.testarchitect.java.control.AbtEntity;
    import com.testarchitect.java.control.AbtTable;
    
    /**
     * Table Support Module
     *
     */
    public class Mod_Table {
    	
    	/**
    	 * declare the actions for the module
    	 */
    	public static void setActions() {
    		String module = "table support";
    	
    		AbtLibrary.setActionScript("check row count", module, 1);
    	}
    
    	/**
    	 * map an action to its function
    	 * @param actionName
    	 * @return
    	 */
    	public static boolean divert(String actionName) {
    		boolean result = true;
    		if ( actionName.equals("check row count")) { 
    			action_checkRowCount();
    		}else {
    			result = false;
    			AbtLibrary.reportError("Don't know action {" + actionName + "}");
    		}
    		return result;
    	}
    
    	/**
    	 * "check row count" action implementation
    	 */
    	public static void action_checkRowCount() {     
        //Insert action implementation code here
        }
    }
    ```

    As in the previous exercise, there is a setActions\(\) function, which in this case declares those actions that are part of the table support class. Only one action, check row count, is so declared, in this case. The divert\(\) function, also seen previously, is called from the main class and directs the action to the Java method that implements it.

3.  **Note:** The file TAMain.java, which is the main entry point for user-scripted action calls, must now be edited. Note that this was not the case in our previous lesson. When an action definition is added to an existing code module, there is no need to modify TAMain.java.  However, when a new module is created, as we’re doing here, TAMain.java does need to know about it.

    Open TAMain in the editor.

    1.  In the main\(\) method, register the actions of table support by calling the module’s setActions\(\) function.

        This section should now appear like this:

        ```
        
        //register actions (add your "setActions" functions here)
        Mod_Example.setActions();
        **Mod\_Table.setActions\(\);**
                                
        ```

    2.  Finally, add an `else if` clause in the main class's divert\(\) method to direct actions of the **table support** category to the divert\(\) function of our new Mod\_Table file:

        ```
        
        /**
        *  divert the action to a script module
        *  note: this function is called by the interpreter, it should return:
        *   - True to tell the interpreter that the custom action has been consumed
        *   - False if it cannot handle action from the module
        */
        public boolean divert(String strModule, String strAction) {
        	strModule = strModule.toLowerCase();
        
        	if (strModule.equals("example")) {
        		return Mod_Example.divert(strAction);
        	}
        **	else if\(strModule.equals\("table support"\)\)\{
        		return Mod\_Table.divert\(strAction\);
        	\}
        **	else if (strModule.equals("eng_executenow();")) {
        		return AbtLibrary.executeNow() != 0;
        	} 
        	else if (strModule.equals("abt automation")) {
        		AbtAutomation.divert(strAction);
        		return true;
        	}
        	else {
        		AbtLibrary.handleUnknowAction();
        		return false;
        	}
        }
                                    
        ```


You have now created the essential infrastructure for your new action, including the new code class, plus the code needed to direct the program flow to the right place when the check row count action is used.

Next, you will create the actual action function \(the Java code that implements check row count\).



