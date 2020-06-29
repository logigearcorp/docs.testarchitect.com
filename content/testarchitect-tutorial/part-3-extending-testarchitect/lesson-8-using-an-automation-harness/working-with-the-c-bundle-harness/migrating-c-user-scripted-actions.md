--- 
title: "Migrating C# user-scripted actions created in earlier versions to TestArchitect 8.3"
linktitle: "Migrating C# user-scripted actions created in earlier versions to TestArchitect 8.3"
slug: "migrating-c-user-scripted-actions-created-in-earlier-versions-to-testarchitect-8-3"
description: "Suppose that you have a C# user-scripted action check sort order programmed in TestArchitect versions prior to 8.3 . This action checks whether the order of rows in a table is ascending, using a ..."
weight: 6
aliases: 
    - /TA_Tutorials/Topics/tut_Harness_CSharp_bundle_migration.html
keywords: "harness, bundle, C#, migration, bundle harness"
---

Suppose that you have a C\# user-scripted action check sort order programmed in TestArchitect versions prior to [8.3](/user-guide/version-history/features-added-to-testarchitect-8-3/windows). This action checks whether the order of rows in a table is ascending, using a specified column for the key values.

The legacy function implementation of this action was programmed as follows.

```
        private void CheckSortOrder()
        {
            // get parameters <window> > <column>
            string sEntityName = Interpreter.AbtLibrary.Argument(1);
            string sElement = Interpreter.AbtLibrary.Argument(2);
            string sColumn = Interpreter.AbtLibrary.Argument(3);
            // open Entity 
            IAbtEntity entity = Interpreter.AbtAutomation.OpenEntity(sEntityName);
            if (entity == null)
            {
                Interpreter.AbtLibrary.ReportError("Can't open Entity !");
                return;
            }
            entity.BringToTop();
            // open Element
            IAbtElement element = Interpreter.AbtAutomation.OpenElement(sEntityName, sElement);
            if (element == null)
            {
                Interpreter.AbtLibrary.ReportError("Can't open Element !");
                return;
            }
            // Check Element is Table
            if (!element.GetTAClass().Equals("table"))
            {
                Interpreter.AbtLibrary.ReportError("Element isn't table");
                return;
            }
            AbtTable table = (AbtTable)element;
            // Check Sort Order
            if (sColumn.Length == 0)
            {
                Interpreter.AbtLibrary.ReportError("The 'column' argument cannot be empty.");
                return;
            }
            int columnIdx = table.GetColumnIndex(sColumn);
            if (columnIdx <= 0)
            {
                Interpreter.AbtLibrary.ReportError("The column '" + sColumn + "' cannot be found.");
                return;
            }
            int rowCount = table.GetRowCount();
            if (rowCount <= 0)
            {
                Interpreter.AbtLibrary.AdministerCheck("sort order", "sorted", "no rows", 1);
				  Assert.AreEqual("sort order", "sorted", "no rows");   
                return;
            }
            String val = table.GetCellText(1, columnIdx);
            for (int i = 2; i <= rowCount; i++)
            {
                if (val.CompareTo(table.GetCellText(i, columnIdx)) > 0)
                {
                    Interpreter.AbtLibrary.AdministerCheck("sort order", "sorted", "fails in row " + (i-1), 0);
                    return;
                }
                val = table.GetCellText(i, columnIdx);
            }
            Interpreter.AbtLibrary.AdministerCheck("sort order", "sorted", "all rows are in order", 1);
        }
```

To migrate your C\# user-scripted action into C\# bundle harness architecture, perform the following steps:

1.  In Visual Studio, open your solution file.

    {{<important>}} It is highly recommended that you use Microsoft Visual Studio 2012 or later to program C\# bundle harness.

2.  Create a class library project.

3.  Add the following references to your project.

    -   Interop.TestArchitect.dll
    -   TestArchitect.Harness.Bundle.Core.dll
    By default, theses two libraries are located at <INSTALL\_DIR\>\\harness samples\\csharp\\executables, once TestArchitect is installed.

4.  In AssemblyInfo.cs, add the assembly AssemblyHarnessBundleAttribute to define that this module \(assembly\) is a C\# bundle harness.

    For example:

    ![](/images/TA_Tutorials/Images/AssemblyInfo.png)

5.  Follow step listed in [Creating a new user-scripted action in a new C\# class in the bundle harness](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-c-bundle-harness/developing-your-own-user-scripted-c-bundle-harness-action#section_rules_create_from_new_class) to implement the C\# bundle harness action.

    1.  Create a new class, and then add the custom attribute ActionClassDefinition to announce that this class contains action implementation.

        For example:

        ```
        [ActionClassDefinition("CheckSortOrderAction Class")]
        public class CheckSortOrderAction
        {
           // TODO: Insert action implementation code here
        }
        ```

    2.  Create a function definition CheckSortOrder\(\) in accordance with C\# bundle harness format.

    3.  Add the ActionDefinitioncustom attribute to mark that this method is mapped to a specific action, and then define the action name and its arguments.

        For example:

        ```
        [ActionDefinition(ActionName="check sort order", Arguments="window, table, column")]
        ```

    4.  Copy and paste the legacy function implementation of CheckSortOrder\(\) underneath ActionDefinition.

        ```
                [ActionDefinition(ActionName="check sort order", Arguments = "window, table, column")]
                public void CheckSortOrder(AbtEntity entity, AbtElement element, string sColumn)
                {
                    // get parameters <window> <table> <column>
                    string sEntityName = Interpreter.AbtLibrary.Argument(1);
                    string sElement = Interpreter.AbtLibrary.Argument(2);
                    string sColumn = Interpreter.AbtLibrary.Argument(3);
                    
                    // open Entity 
                    IAbtEntity entity = Interpreter.AbtAutomation.OpenEntity(sEntityName);           
                    if (entity == null)
                    {
                        Interpreter.AbtLibrary.ReportError("Can't open Entity !");
                        return;
                    }
                    
                    entity.BringToTop();
                    
                    // open Element
                    IAbtElement element = Interpreter.AbtAutomation.OpenElement(sEntityName, sElement);
                    if (element == null)
                    {
                        Interpreter.AbtLibrary.ReportError("Can't open Element !");
                        return;
                    }
                    // Check Element is Table
                    if (!element.GetTAClass().Equals("table"))
                    {
                        Interpreter.AbtLibrary.ReportError("Element isn't table");
                        return;
                    }
                    AbtTable table = (AbtTable)element;
                    // Check Sort Order
                    if (sColumn.Length == 0)
                    {
                        Interpreter.AbtLibrary.ReportError("The 'column' argument cannot be empty.");
                        return;
                    }
                    int columnIdx = table.GetColumnIndex(sColumn);
                    if (columnIdx <= 0)
                    {
                        Interpreter.AbtLibrary.ReportError("The column '" + sColumn + "' cannot be found.");
                        return;
                    }
                    int rowCount = table.GetRowCount();
                    if (rowCount <= 0)
                    {
                        Interpreter.AbtLibrary.AdministerCheck("sort order", "sorted", "no rows", 1);
                        Assert.AreEqual("sort order", "sorted", "no rows");
                        return;
                    }
                    String val = table.GetCellText(1, columnIdx);
                    for (int i = 2; i <= rowCount; i++)
                    {
                        if (val.CompareTo(table.GetCellText(i, columnIdx)) > 0)
                        {
                            Interpreter.AbtLibrary.AdministerCheck("sort order", "sorted", "fails in row " + (i - 1), 0);
                            return;
                        }
                        val = table.GetCellText(i, columnIdx);
                    }
                    Interpreter.AbtLibrary.AdministerCheck("sort order", "sorted", "all rows are in order", 1);
                }
        ```

6.  In C\# bundle harness, you no longer need to instantiate objects of action's arguments. These arguments are now bind by the ActionDefinition attribute, declared in the earlier step. Also the OpenEntity and OpenElement methods are deprecated to provide shorter code implementation. Consequently, comment out the following code lines.

    ```
    //string sEntityName = Interpreter.AbtLibrary.Argument(1);
    //string sElement = Interpreter.AbtLibrary.Argument(2);
    //string sColumn = Interpreter.AbtLibrary.Argument(3);
    //IAbtEntity entity = Interpreter.AbtAutomation.OpenEntity(sEntityName);
    // IAbtElement element = Interpreter.AbtAutomation.OpenElement(sEntityName, sElement);
    ```

7.  Since arguments' user-scripted actions are bind by the ActionDefinition attribute, you also need to modify AbtEntity into the IAbtEntity interface, and AbtElement into the IAbtElement interface.

8.  Your migration code should resemble the following.

    ```
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using TestArchitect;
    using TestArchitect.Harness.Bundle.Core.Data;
    using TestArchitect.Harness.Core;
    
    namespace CSharpBundleHarness
    {
        [ActionClassDefinition("CSharp Sample Harness")]
        public class SampleModule
        {
            [ActionDefinition(ActionName="check sort order", Arguments = "window, table, column")]
            public void CheckSortOrder(IAbtEntity entity, IAbtElement element, string sColumn)
            {
                // get parameters <window> <table> <column>
                //string sEntityName = Interpreter.AbtLibrary.Argument(1);
                //string sElement = Interpreter.AbtLibrary.Argument(2);
                //string sColumn = Interpreter.AbtLibrary.Argument(3);
                // open Entity 
                //IAbtEntity entity = Interpreter.AbtAutomation.OpenEntity(sEntityName);
                if (entity == null)
                {
                    Interpreter.AbtLibrary.ReportError("Can't open Entity !");
                    return;
                }
                entity.BringToTop();
                // open Element
               // IAbtElement element = Interpreter.AbtAutomation.OpenElement(sEntityName, sElement);
                if (element == null)
                {
                    Interpreter.AbtLibrary.ReportError("Can't open Element !");
                    return;
                }
                // Check Element is Table
                if (!element.GetTAClass().Equals("table"))
                {
                    Interpreter.AbtLibrary.ReportError("Element isn't table");
                    return;
                }
                AbtTable table = (AbtTable)element;
                // Check Sort Order
                if (sColumn.Length == 0)
                {
                    Interpreter.AbtLibrary.ReportError("The 'column' argument cannot be empty.");
                    return;
                }
                int columnIdx = table.GetColumnIndex(sColumn);
                if (columnIdx <= 0)
                {
                    Interpreter.AbtLibrary.ReportError("The column '" + sColumn + "' cannot be found.");
                    return;
                }
                int rowCount = table.GetRowCount();
                if (rowCount <= 0)
                {
                    Interpreter.AbtLibrary.AdministerCheck("sort order", "sorted", "no rows", 1);
                    Assert.AreEqual("sort order", "sorted", "no rows");
                    return;
                }
                String val = table.GetCellText(1, columnIdx);
                for (int i = 2; i <= rowCount; i++)
                {
                    if (val.CompareTo(table.GetCellText(i, columnIdx)) > 0)
                    {
                        Interpreter.AbtLibrary.AdministerCheck("sort order", "sorted", "fails in row " + (i - 1), 0);
                        return;
                    }
                    val = table.GetCellText(i, columnIdx);
                }
                Interpreter.AbtLibrary.AdministerCheck("sort order", "sorted", "all rows are in order", 1);
            }
        }
         
    }
    ```

9.  Save your work.

10. Build the solution, and then place the generated .DLL under the predefined <bundles\> folder.

    {{<remember>}}

    -   Build the solution with the [target framework](https://msdn.microsoft.com/en-us/library/bb398202.aspx) .NET 4.5, and create a [release build](https://msdn.microsoft.com/en-us/library/3w7axy17.aspx).
    -   The DLLs that you build must target the same machine architecture as your installed version of TestArchitect. That is, if you are running the 32-bit version of TestArchitect, build the DLL for x86; for 64-bit TestArchitect, build the x64 DLL.
    -   Once having the DLLs, put them all under the predefined <bundles\> folder just one-level deep. In other words, you are not allowed to put the bundle harness DLLs under any subfolders of the <bundles\> folder.
    -   For dependency deployment:
        -   Dependency location:
            1.  Under the predefined <bundles\> folder, create a subfolder with identical name as the project referenced .
            2.  Put the dependency under that folder.

                For example: Suppose that you add a reference RestSharp.dll to a project RestSample.

                ![](/images/TA_Tutorials/Images/deploy_references.png)

                ![](/images/TA_Tutorials/Images/deploy_references_naming_folder.png)

        -   Dependency’s name is not the same as bundle harness DLL's name.
        -   Avoid conflicted versions of the same dependencies. For example, there are two bundle harnesses including A1 and A2.
            -   Assign a same dependency but with difference versions to A1 and A2 as follows.
                -   Assign a dependency, such as B with version 1.0, to A1 bundle harness.
                -   Assign a dependency, such as B with version 1.1, to A2 bundle harness.
            -   TestArchitect detects the conflicted versions of the dependency when TestArchitect loads both A1 and A2 bundle harnesses. Consequently, TestArchitect fails to proceed the automation.
11. Run the migrated C\# bundle harness action.

    1.  In TestArchitect Client, click **Execute** on the toolbar.

        The Execute Test dialog box appears.

    2.  Before clicking **Execute**, click **Automation Tools**.

        The Automation Tools dialog box appears.

    3.  Select **CSharp\_Harness** from the **Playback Tool** options.

    4.  In the **Executable\(s\)** text box, browse to the TestArchitect.Harness.Executor.exe file.

        By default, this file is located at <INSTALL\_DIR\>\\harness samples\\csharp\\executables, once TestArchitect is installed.

        ![](/images/TA_Tutorials/Images/dlg.Automation_Tools.CSharp_bundle_settings_harness.png)

    5.  Click **OK** to return to the Execute Test dialog box.

    6.  Click **Execute** to run the test.





