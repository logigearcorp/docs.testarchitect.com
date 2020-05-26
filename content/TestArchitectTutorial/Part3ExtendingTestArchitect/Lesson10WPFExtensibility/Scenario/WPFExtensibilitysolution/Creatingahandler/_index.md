--- 
title: "Creating a handler"
linktitle: "Creating a handler"
weight: 2
aliases: 
    - /TA_Tutorials/Topics/WPF_Extensibility_solution_creating_handler.html
---
# Creating a handler {#task_ym3_yxh_jm .task}

Now create a class which works as a extension handler.

**Remember:** It is highly recommended that you use Microsoft Visual Studio 2010 to program WPF Extensibility.

To create a handler, follow these steps:

1.  Create a class: for example, OptionButtonHandler.cs, which extends ListBoxHandlerPattern.

    ListBoxHandlerPattern is a kind of handler base supporting the list box control.

2.  Enter the code line below to import NetAgentExtension.

    ```
    using Logigear.TestArchitect.NetAgent.Extensions;
    ```

3.  Override the GetControlSupportLevel method. This is the priority level of methods in this handler.

    **Tip:** To obtain full name of the Telerik’s raw class, you can use the [Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer.html) to check the raw class’ name.

    Enter the code lines below:

    ```
    public override int GetControlSupportLevel(object autObject)
    {
        if (autObject.GetType().FullName == "Telerik.Windows.Controls.RadListBox")
        {
            return SupportLevel.CustomizeSupport;
        }
        return SupportLevel.NonSupport;
    }
    ```

4.  Override only the necessary methods. In this example, we only need to override the GetItemCount method, because we are overriding the corresponding built-in action [get list item count](../../TA_Automation/Topics/bia_get_list_item_count.html). The rest of the methods are inherited from the base handler.

    Enter the code lines below:

    ```
    public override TaResult GetItemCount(RequestLB_GetItemCount request)
    {
        TaResult result = null;
    
        ItemsControl itemControl = request.AutObject as ItemsControl;  
        
        int res = itemControl.Items.Count;
        
        result = new TaResult(TaResult.Type.Integer, res);
    
        return result;
    }
    ```


Generally, the OptionButtonHandler.cs class source code should resemble the following:

```
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Logigear.TestArchitect.NetAgent.Extensions;
using Logigear.TestArchitect.NetAgent.Request;
using Logigear.TestArchitect.NetAgent.Diagnostics;
using System.Windows.Controls;

namespace Logigear.TestArchitect.NetAgent.SpecialControl
{
    public class OptionButtonHandler : ListBoxHandlerPattern
    {

        public override int GetControlSupportLevel(object autObject)
        {
            if (autObject.GetType().FullName == "Telerik.Windows.Controls.RadListBox")
            {
                return SupportLevel.CustomizeSupport;
            }
        return SupportLevel.NonSupport;
        }

        public override TaResult GetItemCount(RequestLB_GetItemCount request)
        {
            TaResult result = null;

            ItemsControl itemControl = request.AutObject as ItemsControl;  
            
            int res = itemControl.Items.Count;
            
            result = new TaResult(TaResult.Type.Integer, res);

            return result;
        }
    }
}
```

**Parent topic:**[WPF Extensibility solution](../../TA_Tutorials/Topics/WPF_Extensibility_solution.html)

**Previous topic:**[Creating an extension](../../TA_Tutorials/Topics/WPF_Extensibility_solution_creating.html)

**Next topic:**[Building the solution](../../TA_Tutorials/Topics/WPF_Extensibility_solution_building_solution.html)

