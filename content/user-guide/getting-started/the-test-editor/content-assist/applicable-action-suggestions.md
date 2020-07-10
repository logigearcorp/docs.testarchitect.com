--- 
title: "Applicable action suggestions for a window or control"
linktitle: "Applicable action suggestions"
description: "As you edit your tests, you often find yourself needing to know which actions can be used for a given control or window. Content Assist's applicable actions list provides you with a convenient means of viewing and selecting from the list of actions available for a given UI element."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_applicable_actions.html
keywords: "applicable actions, action suggestion, suggestive actions, interface elements, interface entities"
---

As you edit your tests, you often find yourself needing to know which actions can be used for a given control or window. Content Assist's **applicable actions** list provides you with a convenient means of viewing and selecting from the list of actions available for a given UI element.TestArchitect has an abundance of built-in user interface actions that operate on controls. But, with only a few exceptions, each of those actions restricts its applicability to controls of given TA class, or set of TA classes. This can be a problem when you are creating tests and wondering which actions you can or cannot use for a given control. To help you avoid referring back to the Help documentation on a constant basis, the TestArchitect test editor offers a Content Assist window for controls. The window lets you know, for any given control, which actions are available to it, and lets you select an appropriate action from its **applicable actions** list.

To have an **applicable actions** list available for a given UI element \(control or window\), the element must be represented by a node in TestArchitect explorer tree. In most cases, that is accomplished by:

1.  capturing interface definitions of a window or a control by means of the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/capturing-interface-definitions) or the [Element definition](/user-guide/interface-definitions/interface-capturing-commands/point-to-identify-tool/) dialog box;
2.  [checking in](/user-guide/projects-and-project-items/project-items/revision-control/check-in) the interface entity holding the captured definition\(s\), ensuring that they appear as nodes in the tree.

Test editors in which Applicable action suggestion is available:

-   Test module
-   Action

To trigger the **applicable actions** popup list for an already captured window/control, perform the following:

1.  Open an editor window for a new or existing test module or user-defined action.

2.  In the TestArchitect explorer tree, select a UI element node, that is, an interface entity \(window\) or an interface element \(control\).

3.  Drag the selected item and drop it into an empty cell in column **A** in the test editor window.

    ![](/images/TA_Help/Images/applicable_BIA_column_A.png)

    [Content Assist](/user-guide/getting-started/the-test-editor/content-assist/) pops up a small window displaying a list of all built-in actions that may be applied to the selected UI element. \(For controls, this applies to those whose TA class is built-in. For controls whose TA class is user-defined, see the [note below](#li.actions_list.user-defined).\) The most commonly-used built-in action is automatically highlighted, with its description displayed.

    ![](/images/TA_Help/Images/applicable_BIA.png)

4.  In the Content Assist window, use the Up and Down arrow keys to scroll through the available choices.

5.  Select an action from the list by double-clicking it or pressing Enter.

    For example, use the arrow keys to highlight [does control exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/does-control-exist), and then press Enter.


The action is automatically inserted into your test, along with appropriate interface arguments.

![](/images/TA_Help/Images/applicable_BIA_1.png)

{{<note>}}

-   {{<anchor li.actions_list.user-defined >}}For controls that have a user-defined TA class, TestArchitect makes no attempt to guess the applicable actions. However, it is indeed possible to have the **applicable actions** list pop up for such controls – you just have to supply the list of actions yourself \(in advance, of course\). For such controls, the list may include [built-in actions](/automation-guide/action-based-testing-language/built-in-actions/), [user-defined actions](/user-guide/actions/user-defined-actions/) and [user-scripted actions](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/)[1](#fntarg_1). \(See [Specifying action suggestion for user-defined TA classes](/user-guide/getting-started/the-test-editor/content-assist/specifying-applicable-actions) for details\).
-   For any control belonging to a built-in TA class, the Content assist window's **applicable actions** list is limited to [built-in actions](/automation-guide/action-based-testing-language/built-in-actions/). There is no way to customize that list by adding user-scripted or user-defined actions.
-   Should you accidentally drop a UI element node into an empty cell that is not in column **A**, e.g. column **B**, the Content Assist window does not appear. Instead, only the TA name of the item is inserted into that cell.

    ![](/images/TA_Help/Images/applicable_BIA_2.png)



<di{{<anchor fntarg_1 >}}
<di{{<anchor fnsrc_1 >}}
[1](#fnsrc_1) This only applies to user-scripted actions that are “front- ended” by user-defined [stub actions](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-python-harness/creating-the-test-case-and-stub-action).

