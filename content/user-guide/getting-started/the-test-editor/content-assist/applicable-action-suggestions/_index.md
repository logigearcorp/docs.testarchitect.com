--- 
title: "Applicable action suggestions for a window or control"
linktitle: "Applicable action suggestions"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_applicable_actions.html
---

As you edit your tests, you often find yourself needing to know which actions can be used for a given control or window. Content Assist's **applicable actions** list provides you with a convenient means of viewing and selecting from the list of actions available for a given UI element.TestArchitect has an abundance of built-in user interface actions that operate on controls. But, with only a few exceptions, each of those actions restricts its applicability to controls of given TA class, or set of TA classes. This can be a problem when you are creating tests and wondering which actions you can or cannot use for a given control. To help you avoid referring back to the Help documentation on a constant basis, the TestArchitect test editor offers a Content Assist window for controls. The window lets you know, for any given control, which actions are available to it, and lets you select an appropriate action from its **applicable actions** list.

To have an **applicable actions** list available for a given UI element \(control or window\), the element must be represented by a node in TestArchitect explorer tree. In most cases, that is accomplished by:

1.  capturing interface definitions of a window or a control by means of the [Interface Viewer](Interface_def_capturing.html) or the [Element definition](Interface_def_client_interface_tool_identify.html) dialog box;
2.  [checking in](Project_items_checkin.html) the interface entity holding the captured definition\(s\), ensuring that they appear as nodes in the tree.

Test editors in which Applicable action suggestion is available:

-   Test module
-   Action

To trigger the **applicable actions** popup list for an already captured window/control, perform the following:

1.  Open an editor window for a new or existing test module or user-defined action.

2.  In the TestArchitect explorer tree, select a UI element node, that is, an interface entity \(window\) or an interface element \(control\).

3.  Drag the selected item and drop it into an empty cell in column **A** in the test editor window.

    ![](/images//Images/applicable_BIA_column_A.png)

    [Content Assist](ug_content_assist.html) pops up a small window displaying a list of all built-in actions that may be applied to the selected UI element. \(For controls, this applies to those whose TA class is built-in. For controls whose TA class is user-defined, see the [note below](#li.actions_list.user-defined).\) The most commonly-used built-in action is automatically highlighted, with its description displayed.

    ![](/images//Images/applicable_BIA.png)

4.  In the Content Assist window, use the Up and Down arrow keys to scroll through the available choices.

5.  Select an action from the list by double-clicking it or pressing Enter.

    For example, use the arrow keys to highlight [does control exist](/TA_Automation/Topics/bia_does_control_exist.html), and then press Enter.


The action is automatically inserted into your test, along with appropriate interface arguments.

![](/images//Images/applicable_BIA_1.png)

**Note:**

-   For controls that have a user-defined TA class, TestArchitect makes no attempt to guess the applicable actions. However, it is indeed possible to have the **applicable actions** list pop up for such controls – you just have to supply the list of actions yourself \(in advance, of course\). For such controls, the list may include [built-in actions](/TA_Automation/Topics/bia_Built_in_actions.html), [user-defined actions](/reuse/reuse.High_level_actions.html) and [user-scripted actions](/TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages.html)[1](#fntarg_1). \(See [Specifying action suggestion for user-defined TA classes](ug_applicable_actions_user_defined_class.html) for details\).
-   For any control belonging to a built-in TA class, the Content assist window's **applicable actions** list is limited to [built-in actions](/TA_Automation/Topics/bia_Built_in_actions.html). There is no way to customize that list by adding user-scripted or user-defined actions.
-   Should you accidentally drop a UI element node into an empty cell that is not in column **A**, e.g. column **B**, the Content Assist window does not appear. Instead, only the TA name of the item is inserted into that cell.

    ![](/images//Images/applicable_BIA_2.png)


**Parent topic:**[Content Assist](/TA_Help/Topics/ug_content_assist.html)

[1](#fnsrc_1) This only applies to user-scripted actions that are “front- ended” by user-defined [stub actions](/TA_Tutorials/Topics/Creating_the_test_case_and_stub_action.html).

