--- 
title: "Building the solution"
linktitle: "Building the solution"
weight: 3
aliases: 
    - /TA_Tutorials/Topics/WPF_Extensibility_solution_building_solution.html
---

Build the DLL for the Extension project so that TestArchitect can load the extension.

**Remember:** It is highly recommended that you use Microsoft Visual Studio 2010 to program WPF Extensibility.

To build the DLL file \(for example, WpfExtensionSample\) for the Extension project , perform the following steps:

1.  In Solution Explorer, right-click WpfExtensionSample.

2.  Select **Build** from the context menu.

    The DLL file will be created in the location you specified for the WpfExtensionSample project in the [earlier step](WPF_Extensibility_solution_creating.html#step_z5w_p23_jm).

3.  Create a folder in C:\\Users\\Public\\LogiGear\\TestArchitect\\ and name it wpf.

4.  Create another folder in the wpf folder, naming it extensions.

5.  Copy the generated DLL file into C:\\Users\\Public\\LogiGear\\TestArchitect\\wpf\\extensions.

    This is the location where TestArchitect loads all extensions \(\*.DLL files\).


**Parent topic:**[WPF Extensibility solution](/TA_Tutorials/Topics/WPF_Extensibility_solution.html)

**Previous topic:**[Creating a handler](/TA_Tutorials/Topics/WPF_Extensibility_solution_creating_handler.html)

**Next topic:**[Applying customized action](/TA_Tutorials/Topics/WPF_Extensibility_solution_applying.html)

