--- 
title: "WPF Extensibility solution"
linktitle: "WPF Extensibility solution"
weight: 2
aliases: 
    - /TA_Tutorials/Topics/WPF_Extensibility_solution.html
---

The WPF Extensibility solution provides a public API which you can use to override TestArchitect's built-in actions.

Overriding TestArchitect's built-in actions by using WPF Extensibility involves two steps:

1.  Create an extension.
2.  Create a handler which will:
    -   extend a specific kind of handler base. For instance, TelerikTableHandler : TATableHandlerBase, and
    -   override the GetControlSupportLevel \(Object obj\) method to define the supported control and the level of priority.

        **Note:**

        -   We only need to override the necessary methods. The rest of the methods are inherited from the base handler. On the base handler side, each method is responsible for getting the best handler which extends this base handler and implements the method. The best handler has the highest level of support.
        -   The NetAgent.sln solution is provided to work with WPF Extensibility. You can find the solution at the following location: <installation path\>/LogiGear/TestArchitect/samples/Extensions/WPF/WpfExtensionSample.

1.  [Creating an extension](/TA_Tutorials/Topics/WPF_Extensibility_solution_creating.html)  
Create a project which works as a new extension.
2.  [Creating a handler](/TA_Tutorials/Topics/WPF_Extensibility_solution_creating_handler.html)  
Now create a class which works as a extension handler.
3.  [Building the solution](/TA_Tutorials/Topics/WPF_Extensibility_solution_building_solution.html)  
Build the DLL for the Extension project so that TestArchitect can load the extension.
4.  [Applying customized action](/TA_Tutorials/Topics/WPF_Extensibility_solution_applying.html)  
You have customized the built-in action get list item count to work with Telerik’s list box control. Now, you will apply that customized action.

**Parent topic:**[Scenario](/TA_Tutorials/Topics/WPF_extensibility_scenario.html)

**Previous topic:**[Mapping unknown class](/TA_Tutorials/Topics/WPF_Extensibility_mapping_unknown_class.html)

