--- 
title: "Scripting 'hello' C# harness action"
slug: 'scripting-hello-c-harness-action'
linktitle: "Scripting 'hello' C# harness action"
slug: 'scripting-hello-c-harness-action'
description: "In this topic, we will write C# code which implements the simple hello user-scripted action."
weight: 2
aliases: 
    - /TA_Tutorials/Topics/tut_CSharp_bundle_scripting_action.html
keywords: "harness, bundle, C#, scripting harness-based action, hello, creating user-scripted action, bundle harness"
---

In this topic, we will write C\# code which implements the simple hello user-scripted action.

You are going to implement an action named hello in theC\#harness. It will accept one argument, who, and write out the word hello, followed by the value specified for who: ![](/images/TA_Tutorials/Images/Python_hello_demo.png)



As outlined in the procedure described earlier, [Developing your own user-scripted C\# harness action](/TA_Tutorials/Topics/tut_Harness_CSharp_bundle_developing_your_own_harness_action.html), this entails making the following modifications to the existing Sample.cs class:

1.  Create a function definition that provides the actual action-specific logic.
2.  Add the ActionDefinition attribute to mark the to-be-implemented function to map to a given user-scripted action.
3.  Define action name and argument names of the user-scripted action by using the ActionName and Arguments attribute properties, respectively.

These steps are implemented in the following procedure:

1.  Use Microsoft Visual Studio to open the sample solution, TestArchitect.Harness.Bundle.Sample.sln, located under <source\>.

{{<important>}} It is highly recommended that you use Microsoft Visual Studio 2012 or later to program C\# bundle harness.

2.  If you run up against a broken reference, TestArchitect.Harness.Bundle.Core.dll, fix it by deleting the broken reference, and add the reference again. Otherwise, move to next step.

    By default, TestArchitect.Harness.Bundle.Core.dll is located at <INSTALL\_DIR\>\\harness samples\\csharp\\executables, once TestArchitect is installed.

    ![](/images/TA_Tutorials/Images/Invalid_path_references.png)

3.  In Visual Studio's Solution Explorer tree, select and open SampleBundle.cs.

4.  In the file, inside the existing sample SampleBundle class, define the Hello\(\) function as per our requirements: retrieve the value of the who argument of the hello action line, and report a TestArchitect result message of the form Hello <who\>, where <who\> is the value of that argument.

    A method of the [Report](http://testarchitect.logigear.com/onlinehelp/bundle_harness/html/792ff986-9dda-6128-484a-25cef5d13744.htm) object is used: [Info\(\)](http://testarchitect.logigear.com/onlinehelp/bundle_harness/html/cdd486f7-e1cd-b777-33e2-c4fdf9f60da9.htm) writes its argument to the TestArchitect results.

    ```
        /// <summary>
        /// Hello action
        /// </summary>
        /// <param name="who">Variable which hold the value of who argument.</param>
    
         [ActionDefinition(ActionName="hello", Arguments="who")]
          public void Hello(string who)
          {
              // Display message to result
              Report.Info("Hello " + who);
          }
    ```

    The entire code should resemble the following:

    ```
    using System;
    using TestArchitect.Harness.Bundle.Core.Data;
    using TestArchitect.Harness.Core;
    
    namespace TestArchitect.Harness.Bundle.Sample
    {
        /// <summary>
        /// Sample class that implement interface IHarnessBundle and has harness action demo
        /// </summary>
        [ActionClassDefinition("Sample action class")]
        public class SampleBundle
        {
             /// <summary>
             /// Hello action
             /// </summary>
             /// <param name="who">Variable which hold the value of who argument.</param>
             [ActionDefinition(ActionName="hello", Arguments="who")]
              public void Hello(string who)
              {
                  // Display message to result
                  Report.Info("Hello " + who);
              }
          }
    }                       
    ```

5.  Save your work, and then build the solution.

{{<remember>}}

    -   Build the solution with the [target framework](https://msdn.microsoft.com/en-us/library/bb398202.aspx) .NET 4.5, and create a [release build](https://msdn.microsoft.com/en-us/library/3w7axy17.aspx).
    -   The DLLs that you build must target the same machine architecture as your installed version of TestArchitect. That is, if you are running the 32-bit version of TestArchitect, build the DLL for x86; for 64-bit TestArchitect, build the x64 DLL.
    The TestAchitect.Harness.Bundle.Sample.dll contains the customized hello user-scripted action. You have now completed the implementation of a TestArchitect action written in C\# bundle harness.

    The action hello, implemented in the C\# method Hello\(\), accepts a single argument, and writes "Hello + <argument value\>" to TestArchitect output, using Info functions of TestArchitect's Automation Report object.

6.  Place TestAchitect.Harness.Bundle.Sample.dll under the <bundles\> folder.

{{<remember>}}

    -   Once having the DLLs, put them all under the predefined <bundles\> folder just one-level deep. In other words, you are not allowed to put the bundle harness DLLs under any subfolders of the <bundles\> folder.




