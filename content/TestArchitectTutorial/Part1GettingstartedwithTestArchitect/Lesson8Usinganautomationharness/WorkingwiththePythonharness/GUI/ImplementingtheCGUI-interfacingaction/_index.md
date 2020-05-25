--- 
title: "Implementing the C\\# GUI-interfacing action"
linktitle: "Implementing the C\\# GUI-interfacing action"
aliases: 
    - /TA_Tutorials/Topics/tut_Harness_CSharp_bundle_scripting_GUI-interfacing_action.html
---
# Implementing the C\# GUI-interfacing action {#task_v2p_4kf_ky .task}

We now implement the C\# method getListViewRowValue\(\) which will handle execution of the get list view row value action in TestArchitect.

In the getListViewRowValue\(\) method, we must create code that performs the following:

-   Finds the list view in the Music Player sample application.
-   Selects an item based on a given row index number.
-   Accesses the list view to retrieve the data of the selected item.
-   Produces item values, separated by vertical bars \( \| \) as delimiters.
-   Returns the item value to a given variable.

1.  Open the file GetListViewRowValueAction.cs, which you created earlier, in the editor, and navigate to the GetListViewRowValue\(\) function definition.

    ```
    /// <summary>
    /// Get list view row value action.
    /// </summary>
    [ActionDefinition(ActionName = "get list view row value")]
    public void GetListViewRowValue()
    {
        // TODO: Insert action implementation code here
    }
    ```

2.  The get list view row value action accepts four arguments: window, list, row and variable. The following code retrieves their values.

    ```
    /// <summary>
    /// Implements the action "get list view row value"
    /// </summary>
    /// <param name="window">TA name of the window.</param>
    /// <param name="list">TA name of the list.</param>
    /// <param name="row">Row number of the list.</param>
    /// <param name="variable">Variable to receive the returned value.</param>
    [ActionDefinition(ActionName="get list view row value", Arguments="window, list, row, variable")]
    public void GetListViewRowValue(IAbtEntity entity, IAbtElement element, int row, string variable)
    {
        // TODO: Insert action implementation code here
    }
    ```

    **Note:** As seen, this is just a stub at the moment, with no actual code as of yet. Over the next several steps, we will build up the code to create the getListViewRowValue\(\) function definition.

3.  The following code validates the window's entity object.

    ```
    // Validates window's entity object
    if (entity == null)
    {
       string entityName =  Context.Current.ActionLine.GetArgByName("window");
       Report.Error(string.Format("No window found matching \"{0}\". Please check the interface definition for \"{1}\".", entityName, entityName));
       return;
    }                
    ```

4.  Enter the following code to bring window object to the top.

    ```
    entity.BringToTop();
    ```

5.  Enter the following to validate control's entity object.

    ```
    // Validates control's entity object
    if (element == null)
    {
       string entityName =  Context.Current.ActionLine.GetArgByName("window");
       string elementName =  Context.Current.ActionLine.GetArgByName("list");
       
       Report.Error(string.Format("No matching UI object found for \"{0}\". Please check the interface definition for \"{1}\".", elementName, entityName));
       return;
    }               
    ```

6.  Enter the following code to retrieve the list view's element.

    ```
    // Create a list view object from the control object
    IAbtLList list = element as IAbtLList;
    if (list == null)
    {
       Report.Error(string.Format("TestArchitect does not support this action for the \"{0}\" control. Please choose another applicable action.", element.GetTAClass()));
       return;
    }               
    ```

7.  Validate the row index number.

    ```
    // Validate the row index number
    int itemCount = list.GetItemCount();
    if (row < 1 || row > itemCount)
    {
         Report.Error(string.Format("Invalid value for argument \"{0}\". Valid input data is an integer in the range of \"{1}\" to \"{2}\".", "row", 1, itemCount));
        return;
    }
    ```

8.  Select the item \(row\) of interest, based on the given row index number.

    ```
    list.Select(row);
    ```

9.  Use GetSelectedItems\(\) to get the values of the selected item separated by vertical bars \( \| \) as delimiters.

    ```
    string selectedItems = list.GetSelectedItems("|");
    ```

10. Use SetValue\(\) to assign the retrieved value to the specified returned variable.

    ```
    Variable.SetValue(variable, selectedItems);
    ```

11. Save your work.

12. Build the solution, and then place the generated TestAchitect.Harness.Bundle.Sample.dll library under the predefined <bundles\> folder.

    **Remember:**

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

Your complete function definition for GetListViewRowValue\(\) along with the existing code for GetListViewRowValueAction.cs should now look something like this:

```
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestArchitect.Harness.Bundle.Core.Data;
using TestArchitect.Harness.Core;

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
        /// <param name="window">TA name of the window.</param>
        /// <param name="list">TA name of the list.</param>
        /// <param name="row">Row number of the list.</param>
        /// <param name="variable">Variable to receive the returned value.</param>
       [ActionDefinition(ActionName="get list view row value", Arguments="window, list, row, variable")]
       public void GetListViewRowValue(IAbtEntity entity, IAbtElement element, int row, string variable)        
       {
            // Validates window's entity object
            if (entity == null)
            {
               string entityName =  Context.Current.ActionLine.GetArgByName("window");
               Report.Error(string.Format("No window found matching \"{0}\". Please check the interface definition for \"{1}\".", entityName, entityName));
               return;
            }   

            entity.BringToTop();

            // Validates control's entity object
            if (element == null)
            {
               string entityName =  Context.Current.ActionLine.GetArgByName("window");
               string elementName =  Context.Current.ActionLine.GetArgByName("list");
   
               Report.Error(string.Format("No matching UI object found for \"{0}\". Please check the interface definition for \"{1}\".", elementName, entityName));
               return;
            }    

            // Create a list view object from the control object
            IAbtLList list = element as IAbtLList;
            if (list == null)
            {
               Report.Error(string.Format("TestArchitect does not support this action for the \"{0}\" control. Please choose another applicable action.", element.GetTAClass()));
               return;
            } 

            // Validate the row index number
            int itemCount = list.GetItemCount();
            if (row < 1 || row > itemCount)
            {
               Report.Error(string.Format("Invalid value for argument \"{0}\". Valid input data is an integer in the range of \"{1}\" to \"{2}\".", "row", 1, itemCount));
                return;
            }

            list.Select(row);
            string selectedItems = list.GetSelectedItems("|");
            Variable.SetValue(variable, selectedItems);
        }
    }
}
```

**Parent topic:**[User-scripted C\# bundle harness action that interacts with GUI](../../TA_Tutorials/Topics/tut_Harness_CSharp_bundle_creating_action_that_interacts_with_GUI.html)

**Previous topic:**[Creating a new C\# bundle harness class](../../TA_Tutorials/Topics/tut_Harness_CSharp_bundle_creating_new_code_script_module.html)

**Next topic:**[Creating the GUI-interfacing test case for the user-scripted C\# bundle harness action](../../TA_Tutorials/Topics/tut_Harness_CSharp_bundle_creating_test_case_for_get_list_row_value.html)

