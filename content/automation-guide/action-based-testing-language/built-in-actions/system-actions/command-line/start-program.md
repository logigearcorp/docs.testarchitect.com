--- 
title: "start program"
linktitle: "start program"
description: "Description Launch a specified application on the test machine. Arguments program The program to be started, prepended with its execution path, if necessary. For mobile devices: Android : the ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_start_program.html
keywords: "built-in actions, start program, start program (action), iOS (action), start program, Android (action), start a program, launch program"
---

## {{< expand >}} Description

Launch a specified application on the test machine.

## {{< expand >}} Arguments

-   **program**

    The program to be started, prepended with its execution path, if necessary.

    For mobile devices:

    -   **Android**: the application package name. \(See also note below.\)
    -   **iOS**: the application name. \(See also note below.\)
-   **parameter**

    \(Optional\) A parameter or string, such as the name of a data file, to be passed to the launched program.

    {{<note>}} parameter is an invisible argument. To use it, you must specify both the value and parameter header in the column to the right of the program argument.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   **iOS:** To ensure that start program can successfully launch an application on an iOS device, refer to [Launching an AUT](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/launching-an-aut#section_pdh_mzj_m4).
-   program argument:
    -   For an iOS device, theprogramargument should hold the name of the running application itself, e.g. Car Rental. If needed, you can obtain the application's name through the Interface Viewer:
        1.  Launch the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/starting-the-interface-viewer) and then switch to your connected iOS device.
        2.  In the Properties panel of the **TA Properties** tab, search for the name property containing the application's name. Note that you will find the string Normal Z1 appended to the application name, e.g. Car Rental Normal Z1.
        3.  Right-click the property and then select **Copy Value**.
        4.  In the test editor, paste the copied value into theprogramargument of the built-in action, then manually delete the appended Normal Z1 string from the name.
    -   On an Android device, program is the package name of the running application. To obtain the package name of an Android application::
        1.  Open the [Android Instrumentation Tool](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-instrumentation-tool/) dialog box.
        2.  In the Application Under Test panel, right-click the appropriate application, and then select **Copy package name**.

            ![](/images/Android/Images/Android_copy_package_name.png)

        3.  Paste the copied value into the program argument within your action lines.
-   parameter argument:
    -   parameteris an unsupported argument and hence invisible. To use it, you must specify both its value and header, in the cell to the right of last visible argument.
    -   An alternative to using the parameter argument is to simply append its contents to the program argument, delimited by a space.
-   For the execution path, you may use the standard execution file path format of the operating system \(e.g., in Windows: C:\\Program Files\\Acme\\foo.exe\). The execution file path may also use the forward slash delimiter \(C:/Program Files/Acme/foo.exe\), regardless of operating system.
-   A full path is not required if the directory in which the program resides is listed in the execution search path environment variable of the operating system \(%PATH% in Windows, $PATH in Linux\). For example, full paths need not be specified for such applications as Windows’ Notepad, Calc, and cmd, because the directory in which their executables reside is always included in the system %PATH% variable.
-   On iOS devices, a full path is not required even if your app is grouped under an app folder; only the app's name is required.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells)none .

## Example - Case 1: Starting an application

**Action Lines**

![](/images/TA_Automation/Images/bia_start_program_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_start_program_res.png)

## Example - Case 2: Starting an application that accepts an argument

Say you want to open a text file with the Notepad++ application. Since Notepad++ accepts the path of a text file as a command line argument, we can specify the file when we launch the application. We have two options for doing this.

**Option 1: Using the parameter argument:**

**Action Lines**

![](/images/TA_Automation/Images/bia_start_program_pgm_1.png)

**Result**

![](/images/TA_Automation/Images/bia_start_program_res_1.png)

**Option 2: Including the argument to the application in the program argument:**

**Action Lines**

![](/images/TA_Automation/Images/bia_start_program_pgm_2.png)

**Result**

![](/images/TA_Automation/Images/bia_start_program_res_2.png)

## {{< expand >}} Example - Case 3: Starting an application on an iOS device

**Test Lines**

![](/images/TA_Automation/Images/bia_start_program_iOS_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_start_program_iOS_res.png)

## {{< expand >}} Example - Case 4: Starting an Android application

**Action Lines**

![](/images/TA_Automation/Images/bia_start_program_Android_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_start_program_Android_res.png)



