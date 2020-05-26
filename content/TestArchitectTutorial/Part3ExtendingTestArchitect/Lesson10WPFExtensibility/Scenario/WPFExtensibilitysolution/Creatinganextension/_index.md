--- 
title: "Creating an extension"
linktitle: "Creating an extension"
weight: 1
aliases: 
    - /TA_Tutorials/Topics/WPF_Extensibility_solution_creating.html
---
# Creating an extension {#task_qwg_wrh_jm .task}

Create a project which works as a new extension.

**Remember:** It is highly recommended that you use Microsoft Visual Studio 2010 to program WPF Extensibility.

To create an extension, follow these steps:

1.  Open the solution NetAgent.sln.

2.  Open the sample project, WpfExtensionSample.

    This project is a new extension.

3.  Locate the directory where you want to build the extensions \(\*.DLL files\) of the WpfExtensionSample project

4.  Create a class; for example, WpfExtensionPackage.cs, which extends the IExtensionPackage.

    This is the entry point of the extension. The IExtensionPackage interface lets TestArchitect know that the generated DLL files of this project belong to the extension library.

    IExtensionPackage is an interface of ExtensionLib. An extension must inherit the IExtensionPackage interface and implement all methods and properties of that interface.

    ```
    public sealed class WpfExtensionPackage : IExtensionPackage 
    { 
        //Insert implementation code here
    }
    ```

5.  Enter the code line below to import NetAgentExtension.

    ```
    using Logigear.TestArchitect.NetAgent.Extensions;
    ```

6.  Add a reference to NetExtensionLib.dll.

    1.  Copy the DLL file from <installation path\>\\LogiGear\\TestArchitect\\binclient\\agents to your current working project directory.

        **Note:**

        -   On a 32 bit system: Select the NetExtensionLib.dll file.
        -   On a 64 bit system: Select the NetExtensionLib\_x64.dll file.
    2.  Right-click the WpfExtensionSample class.

    3.  Select **Add Reference**.

    4.  In the **Browse** tab, select NetExtensionLib.dll \(32 bit\), or NetExtensionLib\_x64.dll \(64 bit\).

    5.  Click **OK**.

7.  Implement the following interface members:

    1.  The Initialize method.

        This method is invoked initially when the WPF agent is loaded.

        **Tip:** Based on your specific requirements, you may need to implement more code in this method, such as registering handling, etc.

        Enter the code for the method below:

        ```
        public void Initialize()
        {
            AbtTrace.Infor("Start load extension...");
        }
        ```

    2.  The Name and Description methods.

        Currently, these two methods are intended for backup purposes at a later time.

        Enter the code below:

        ```
        public string Name
        {
            get { return "Special Control"; }
        }
                                    
        public string Description
        {
            get { return "This extension supports a kind of special control"; }
        }
        ```


Generally, the source code of the WpfExtensionPackage.cs class should resemble the following:

```
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Logigear.TestArchitect.NetAgent.Extensions;
using Logigear.TestArchitect.NetAgent.Diagnostics;

namespace Logigear.TestArchitect.NetAgent.SpecialControl
{
    public sealed class WpfExtensionPackage : IExtensionPackage
    {
        static private WpfExtensionPackage instance = null;

        public string Name
        {
            get { return "Special Control"; }
        }

        public string Description
        {
            get { return "This extension supports a kind of special control"; }
        }

        public void Initialize()
        {
            AbtTrace.Infor("Start load extension...");
        }
    }
}
```

**Parent topic:**[WPF Extensibility solution](../../TA_Tutorials/Topics/WPF_Extensibility_solution.html)

**Next topic:**[Creating a handler](../../TA_Tutorials/Topics/WPF_Extensibility_solution_creating_handler.html)

