--- 
title: "Developing your own user-scripted C\\# bundle harness action"
linktitle: "Developing your own user-scripted C\\# bundle harness action"
weight: 1
aliases: 
    - /TA_Tutorials/Topics/tut_Harness_CSharp_bundle_developing_your_own_harness_action.html
---
# Developing your own user-scripted C\# bundle harness action {#concept_frn_55d_jy .concept}

TestArchitect provides sample C\# bundle harness code files for you to learn to develop, build, and execute C\#-scripted actions.

The following list provides an introductory overview of C\# bundle harness folders and files provided with the installation of TestArchitect.

**Note:**

-   The diagram below only describes the most important files and folders required to develop C\#-scripted programs.
-   All of the folders default to <INSTALL\_DIR\>\\harness samples\\

![](../Images/bundle_Csharp_tree_structure.png)

1.  csharp: Root directory of the C\# bundle harness sample.
2.  source: Contains source code of C\# user-scripted actions
3.  executables: Folder containing C\# harness executable files and supporting \*.DLL file.
    1.  bundles: Contains \*.DLL files of C\# user-scripted actions.
    2.  Interop.TestArchitect.dll: a TestArchitect-C\# bundle harness library. This library contains interpreter functions necessary when executing C\#-scripted actions in TestArchitect.
    3.  TestArchitect.Harness.Bundle.Core.dll: Exposes classes and attributes used by the C\# bundle harness.
        -   The following custom attributes are provided.

            |Custom attribute|Description|
            |----------------|-----------|
            |ActionClassDefinitionAttribute|            -   Announce that a given class contains user-scripted action’s code implementation
|
            |ActionDefinitionAttribute|            -   Mark that the method is mapped to a specific user-scripted action
            -   Define a user-scripted action name and its arguments
|
            |AssemblyHarnessBundleAttribute|            -   Specify that this module \(assembly\) is a C\# bundle harness
            -   Provide bundle information including bundle name, bundle version, etc.
            -   Defined under the /Properties/AssemblyInfo.cs
|

        -   Also, this DLL exposes additional custom attributes to trigger test run, action, test case, and test module events.
            -   **Test case event**:
                -   BeginTestCase: Specifies the method to be called before a given test case is executed.

                    ```
                    [BeginTestCase]
                    public void BeginTestCase()
                    {
                      //do something
                    }
                    ```

                -   EndTestCase: Specifies the method to be called after a given test case is executed.

                    ```
                    [EndTestCase]
                    public void EndTestCase()
                    {
                      //do something
                    }
                    ```

                -   TestCaseContext: Provides data for a given test case event. It is applicable for both BeginTestCase and EndTestCase.

                    ```
                    [BeginTestCase]
                    public void BeginTestCase(TestCaseContext context)
                    {
                      //do something
                    }
                    
                    [EndTestCase]
                    public void EndTestCase(TestCaseContext context)
                    {
                      //do something
                    }
                    ```

            -   **Test module event**:
                -   BeginTestModule: Specifies the method to be called before a given test module is executed.

                    ```
                    [BeginTestModule]
                    public void BeginTestModule()
                    {
                    //do something
                    }
                    ```

                -   EndTestModule: Specifies the method to be called after a given test module is executed.

                    ```
                    [EndTestModule]
                    public void EndTestModule()
                    {
                    //do something
                    }
                    ```

                -   TestModuleContext: Provides data for a given test case event. It is applicable for both BeginTestModule and EndTestModule.

                    ```
                    [BeginTestModule]
                    public void BeginTestModule(TestModuleContext context)
                    {
                     //do something
                    }    
                    
                    [EndTestModule]
                    public void EndTestModule(TestModuleContext context)
                    {
                     //do something
                    } 
                    ```

            -   **Action event**:
                -   BeginAction: Specifies the method to be called before a given action is executed.

                    ```
                    [BeginAction]
                    public void BeginAction()
                    {
                      //do something
                    }
                    ```

                -   EndAction: Specifies the method to be called after a given action is executed.

                    ```
                    [EndAction]
                    public void EndAction()
                    {
                      //do something
                    }
                    ```

                -   ActionContext: Provides data for a given test case event. It is applicable for both BeginAction and EndAction.

                    ```
                    [BeginAction]
                    public void BeginAction(ActionContext context)
                    {
                      //do something
                    }
                    
                    [EndAction]
                    public void EndAction(ActionContext context)
                    {
                      //do something
                    }
                    ```

            -   **Test run event**:
                -   BeginRun: Specifies the method to be called after a given test run is executed.

                    ```
                    [BeginRun]
                    public void BeginRun()
                    {
                      //do something
                    }
                    ```

                -   EndRun: Specifies the method to be called after a given test run is executed.

                    ```
                    [EndRun]
                    public void EndRun()
                    {
                      //do something
                    }
                    ```

                -   TestRunContext: Provides data for a given test run event. It is applicable for both BeginRun and EndRun.

                    ```
                    [BeginRun]
                    public void BeginRun(TestRunContext context)
                    {
                      //do something
                    }
                    
                    [EndRun]
                    public void EndRun(TestRunContext context)
                    {
                      //do something
                    }
                    ```

    4.  TestArchitect.Harness.Executor.exe:
        -   Loads DLLs of C\# bundle harness.
        -   Controls actions flow, that is, parses harness action and diverts it to the implementation code.

## Rules to create a new user-scripted action in a new C\# class {#section_rules_create_from_new_class .section}

Creating a new user-scripted action in a new C\# class in the bundle harness involves these steps:

1.  Create a new C\# class to store the function definition for action.
2.  Add the ActionClassDefinition attribute to inform that this class contains action implementation.
3.  Create a function definition that provides the actual action-specific logic.
4.  Add the ActionDefinition attribute to mark the to-be-implemented function to map to a given user-scripted action.
5.  Define action name and argument names of the user-scripted action by using the ActionName and Arguments attribute properties, respectively.

## Rules to add a new user-scripted action to an existing C\# class {#section_rules_create_from_existing_class .section}

Add a new user-scripted action to an already existing C\# class in the bundle harness involves these steps:

1.  Create a function definition that provides the actual action-specific logic.
2.  Add the ActionDefinition attribute to mark the to-be-implemented function to map to a given user-scripted action.
3.  Define action name and argument names of the user-scripted action by using the ActionName and Arguments attribute properties, respectively.

## Important notes to build bundle harness DLLs and deploy dependencies { .section}

-   Build the solution with the [target framework](https://msdn.microsoft.com/en-us/library/bb398202.aspx) .NET 4.5, and create a [release build](https://msdn.microsoft.com/en-us/library/3w7axy17.aspx).
-   The DLLs that you build must target the same machine architecture as your installed version of TestArchitect. That is, if you are running the 32-bit version of TestArchitect, build the DLL for x86; for 64-bit TestArchitect, build the x64 DLL.
-   Once having the DLLs, put them all under the predefined <bundles\> folder just one-level deep. In other words, you are not allowed to put the bundle harness DLLs under any subfolders of the <bundles\> folder.
-   For dependency deployment:
    -   Dependency location:
        1.  Under the predefined <bundles\> folder, create a subfolder with identical name as the project referenced .
        2.  Put the dependency under that folder.

            For example: Suppose that you add a reference RestSharp.dll to a project RestSample.

            ![](../Images/deploy_references.png)

            ![](../Images/deploy_references_naming_folder.png)

    -   Dependency’s name is not the same as bundle harness DLL's name.
    -   Avoid conflicted versions of the same dependencies. For example, there are two bundle harnesses including A1 and A2.
        -   Assign a same dependency but with difference versions to A1 and A2 as follows.
            -   Assign a dependency, such as B with version 1.0, to A1 bundle harness.
            -   Assign a dependency, such as B with version 1.1, to A2 bundle harness.
        -   TestArchitect detects the conflicted versions of the dependency when TestArchitect loads both A1 and A2 bundle harnesses. Consequently, TestArchitect fails to proceed the automation.

**Parent topic:**[Working with the C\# bundle harness](../../TA_Tutorials/Topics/tut_Scripting_actions_in_other_languages_CSharp_bundle.html)

**Next topic:**[Scripting "hello" C\# harness action](../../TA_Tutorials/Topics/tut_CSharp_bundle_scripting_action.html)

