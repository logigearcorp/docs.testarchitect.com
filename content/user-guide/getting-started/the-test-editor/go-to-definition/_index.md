--- 
title: "Go to Definition"
linktitle: "Go to Definition"
description: "TestArchitect's Go to Definition feature enables you to navigate instantaneously to an item from a reference to it in the test editor."
weight: 2
aliases: 
    - /TA_Help/Topics/ug_go_to_definition.html
keywords: "test editor, go to definition, interface elements, interface entities, data sets, test suites, test modules, user-defined actions"
---

Often, while editing or reviewing a test, you'll come across the name of an item whose definition you wish to see or modify. Rather than have to locate that item in the TestArchitect explorer tree, you can take advantage of a one-click shortcut. TestArchitect's Go to Definition feature enables you to navigate instantaneously to an item from a reference to it in the test editor.

Test editors in which **Go to definition** is available:

-   Test module
-   User-defined action

**Go to definition** can be used to navigate to the following project item types:

-   Test modules
-   Test suites
-   User-defined actions
-   Data sets
-   Interface entities
-   Interface elements

The following table indicates the “hot spots” in a test module or action from which you can typically navigate to each type of project item:

|Project item type|Editor cell from which the definition is accessed|
|-----------------|-------------------------------------------------|
|test module|[run test](/TA_Automation/Topics/bia_run_test.html) action line / name argument|
|test suite|[run test](/TA_Automation/Topics/bia_run_test.html) action line / name argument|
|user-defined action|Column A of action line invoking the user-defined action|
|data set|[use data set](/TA_Automation/Topics/bia_use_data_set.html) action line / name argument|
|interface entity|Any action argument whose data type is defined as Interface Entity. \(For [User Interface built-in actions](/TA_Automation/Topics/bia_User_Interface.html), this is almost always the window argument. User-defined and user-scripted actions may also use this data type for some arguments.\)|
|interface element|Any action argument whose data type is defined as Interface Element. \(For [User Interface built-in actions](/TA_Automation/Topics/bia_User_Interface.html), this is usually the control[1](#fntarg_1) argument. User-defined and user-scripted actions may also use this data type for some arguments.\)|

To open a definition of a named project item from within a test module or action, do the following:

1.  In the test editor, right-click the cell holding the name of the item of interest.

2.  Select **Go to Definition** from the context menu.

    **Fastpath:** As an alternative to steps 1 and 2, simply select the cell and press F3 on your keyboard.

    The referenced action, interface entity, data set, test suite, or test module is opened in its own editor window.

    **Note:** In the case of a referenced interface element, the parent interface entity is opened, with the interface element highlighted.

3.  ![](/images/TA_Help/Images/go_to_def_ex.01.png)


TestArchitect navigates to the definition of the selected project item, making it the active tab in the main client window.

**Note:** For certain types of project items, [variations](/TA_Help/Topics/Variations.html) may exist. When they do, **Go to definition** has the following behavior:

-   In most cases, the context menu displays the full list of variations, including the [default variation](/TA_Help/Topics/Variations_default.html), allowing you to select the one of your choosing:

    ![](/images/TA_Help/Images/go_to_def_ex.02.png)

    \(Note that interface elements are the exception, as **Go to definition** always opens their default parent interface entities.\)

-   Using the F3 option always opens the default variation of the given project item.



<div id="fntarg_1"></div>
<div id="fnsrc_1"></div>
[1](#fnsrc_1) Note, however, that the control argument of a UI action often has a header name specific to the type of control, such as menu, list, toolbar, tree, etc.

