--- 
title: "Creating a new code script module"
linktitle: "Creating a new code script module"
description: "Create a new Python module, and provide the code overhead required to access your new user-scripted action."
weight: 1
aliases: 
    - /TA_Tutorials/Topics/Creating_a_new_code_script_module.html
keywords: "mod_TableSupport.py, SetActionScript() library function (Python), LIBRARY, TestArchitect object, SetActionScript() function (Python), SetActions() harness function, check row count, user-scripted action, Divert() harness function, ta_main.py, Python harness file, editing, DivertToModule() harness function"
---

Create a new Python module, and provide the code overhead required to access your new user-scripted action.

**Important:** In Python, the indentation level of your statements \(that is, the white space at the very left of your statements\) is significant and it must be consistent . Also, the exact amount of indentation is important to the relative indentation of nested blocks \(relative to each other\).

We'll begin by creating a new code file, similar in nature to mod\_Example.py, used in the earlier exercise. This code file, or module, will contain Python-implemented actions relating to tables.

1.  Create a new file for the table support actions, naming it mod\_TableSupport.py. 

    By convention, code files are named “mod\_X.py”, where “X” is a descriptive name for the scope of the actions in the module.

2.  Open the file in your editor, and enter the following code, as shown, which is necessary to let TestArchitect know about the new module and its actions. Once done, save your work.

    ```
    # import the functions of TestArchitect
    from lib_abt import *
                            
    # set module name
    moduleName = "table support"
                            
    # declare the actions for the module
    def SetActions():
        LIBRARY.SetActionScript("check row count", moduleName, 1)
    
    # map an action to its function
    def Divert(actionName):
        result = True
        if actionName == "check row count":
            action_checkRowCount()
        else:
            result = False
            LIBRARY.ReportError("Don't know action: " + actionName)        
        return result
                        
    ```

    As in the previous exercise, there is a SetActions\(\) function, which in this case declares those actions that are part of the mod\_TableSupport module. \(Only one action, check row count, is so declared, in this case.\) The Divert\(\) function, also seen previously, is called from the main module and directs the action to the Python function that implements it.

3.  **Note:** The file ta\_main.py, which is the main entry point for user-scripted action calls, must now be edited. Note that this was not the case in our previous lesson. When an action definition is added to an existing code module, there is no need to touch ta\_main.  However, when a new module is created, as we’re doing here, ta\_main does need to know about it.

    Open ta\_main.py in the editor.

    1.  Import the new module with a Python `import` statement, added to the existing `import` statements.

        The `import` statements of the file should now look like this:

        ```
        
        import lib_interpret as Interpreter
        import mod_Example as Example
        import mod_TableSupport as TableSupport
                                    
        ```

    2.  In the main\(\) function, register the action\(s\) of TableSupport by calling the module’s SetActions\(\) function.

        This section should now appear like this:

        ```
        
        # register actions (add your "setActions" functions here)
        Example.SetActions()
        TableSupport.SetActions()
                                
        ```

    3.  Finally, add an `elif` clause in the main module's DivertToModule\(\) function to direct actions of the **table support** category to the Divert\(\) function of our new mod\_TableSupport file:

        ```
        
        # divert the action to a script module
        # note: this function is called by the interpreter, it should return:
        # - True to tell the interpreter that the custom action has been consumed
        # - False if it cannot handle action from the module
        def DivertToModule(moduleName, actionName):
            if moduleName == Example.moduleName:
                return Example.Divert(actionName)
            elif moduleName == TableSupport.moduleName:
                return TableSupport.Divert(actionName)
            else:
                Interpreter.LIBRARY.ReportError("Don't know action: " + actionName)
                return False
                                    
        ```


You have now created the essential "infrastructure" for your new action: that is, the new code module, plus the code needed to direct the program flow to the right place when the check row count action is used in a test module \(or user-defined action\).

Next, you will create the actual action function: that is, the Python code that implements check row count.



