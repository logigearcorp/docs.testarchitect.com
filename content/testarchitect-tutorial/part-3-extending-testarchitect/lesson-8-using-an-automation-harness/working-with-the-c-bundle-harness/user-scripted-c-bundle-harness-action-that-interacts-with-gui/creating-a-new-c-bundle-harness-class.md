--- 
title: "Creating a new C# bundle harness class"
linktitle: "Creating a new C# bundle harness class"
slug: "creating-a-new-c-bundle-harness-class"
description: "We will now create a C# class to direct program flow to a function which handles the get list view row value action."
weight: 1
aliases: 
    - /TA_Tutorials/Topics/tut_Harness_CSharp_bundle_creating_new_code_script_module.html
keywords: "harness, bundle, C#, creating harness module, bundle harness, creating harness module"
---

We will now create a C\# class to direct program flow to a function which handles the get list view row value action.

As outlined in the procedure described earlier, [Developing your own user-scripted C\# harness action](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-c-bundle-harness/developing-your-own-user-scripted-c-bundle-harness-action), this entails making the following steps:

1.  Create a new C\# class to store the function definition for action.
2.  Add the ActionClassDefinition attribute to inform that this class contains action implementation.
3.  Create a function definition that provides the actual action-specific logic.
4.  Add the ActionDefinition attribute to mark the to-be-implemented function to map to a given user-scripted action.
5.  Define action name and argument names of the user-scripted action by using the ActionName and Arguments attribute properties, respectively.

These steps are implemented in the following procedure:

1.  Add a new C\# class in the TestArchitect.Harness.Bundle.Sample.sln sample solution and name the class GetListViewRowValueAction.cs.

    {{<important>}} It is highly recommended that you use Microsoft Visual Studio 2012 or later to program C\# bundle harness.

2.  If you run up against a broken reference, TestArchitect.Harness.Bundle.Core.dll, fix it by deleting the broken reference, and add the reference again. Otherwise, move to next step.

    By default, TestArchitect.Harness.Bundle.Core.dll is located at <INSTALL\_DIR\>\\harness samples\\csharp\\executables, once TestArchitect is installed.

    ![](/images/TA_Tutorials/Images/Invalid_path_references.png)

3.  In the editor, enter the following code for GetListViewRowValueAction.cs, which is necessary to let TestArchitect know about the new class and its actions. Save your work after you are done entering the code:

    ```
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using TestArchitect.Harness.Bundle.Core.Data;
    using TestArchitect.Harness.Core
    
    namespace TestAchitect.Harness.Bundle.Sample
    {
        /// <summary>
        /// GetListViewRowValueAction class.
        /// </summary>
        [ActionClassDefinition("GetListViewRowValueAction Class")]
        public class GetListViewRowValueAction
        {
            /// <summary>
            /// Get list view row value action.
            /// </summary>
            [ActionDefinition(ActionName="get list view row value")]
            public void GetListViewRowValue()
            {
                // TODO: Insert action implementation code here
            }
        }
    }
    ```


You have created a new class for your new user-scripted action. Next, you will implement the actual get list view row value action in C\# code.



