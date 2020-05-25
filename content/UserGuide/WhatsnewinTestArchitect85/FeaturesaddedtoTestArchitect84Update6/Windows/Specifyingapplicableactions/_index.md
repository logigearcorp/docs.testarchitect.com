--- 
title: "Specifying action suggestion for a control belonging to a user-defined TA class"
linktitle: "Specifying applicable actions"
aliases: 
    - /TA_Help/Topics/ug_applicable_actions_user_defined_class.html
---
# Specifying action suggestion for a control belonging to a user-defined TA class {#task_owp_5dz_1q .task}

For any set of controls whose TA class is user-defined, you can specify the list of actions that apply. This list will then appear in the **applicable actions** list of the Content Assist window when you work with these controls in the test editor.

You must already have defined one or more user-defined TA classes for the particular platform of your AUT.

To specify an **applicable actions** list for all controls of a given user-defined TA class, observe the following steps:

1.  Open the [$ Class Maps](Interface_def_Viewer_class_mapping.html) entity of your interface by double-clicking its node in the TestArchitect explorer tree.

2.  [Check it out](Project_items_checkout.html), if it is in the checked in state.

3.  In the editor window, locate the platform of interest, that is, one of the **WPF**, **WIN32**, **iOS**, **Android** or **Silverlight** sections.

    The user-defined TA classes that you have already defined for the platform should appear in this section, one row per class.

    **Note:** Note that entries in this section may consist of standard TA classes as well as user-defined ones. For this effort, we are only concerned with user-defined TA classes.

4.  If an **Actions** heading does not yet exist in the column next to the **role** heading, go ahead and create one.

    ![](../Images/action_user_defined_class_Actions_column.png)

5.  Underneath the **Actions** column, specify a list of suggested actions that are applicable to the corresponding user-defined TA class.

    **Remember:**

    -   A user-defined TA class accepts any [built-in action](../../TA_Automation/Topics/bia_Built_in_actions.html), [user-defined action](../../reuse/reuse.High_level_actions.html), and/or user-scripted action with a user-defined stub action to “front-end” it.
    -   Separate multiple actions with semi-colons \( ; \). For example, let's specify two built-in actions, [check control property](../../TA_Automation/Topics/bia_check_control_property.html), [get control property](../../TA_Automation/Topics/bia_get_control_property.html), and one user-defined action, select ribbon button, for a user-defined TA class, ribbon:

        ![](../Images/action_user_defined_class_defined_actions.png)

    -   You are prohibited from defining an actions suggestion list for any built-in TA classes, since these classes already come with their own **applicable actions** lists. For example, were you to attempt to enter an applicable action for the built-in TA class, button, as below:

        ![](../Images/action_user_defined_class.png)

        you would be confronted with the following message when you try to save the $ Class Maps entity:

        ![](../Images/action_user_defined_class_error_message.png)

    -   It is possible for a given user-defined TA class to appear more than once in an interface's $ Class Maps entity[1](#fntarg_1). If multiple entries exist for a given user-defined TA class, and each entry has its own set of applicable actions defined, TestArchitect automatically merges those defined actions into a single list of action suggestions, whenever the Content Assist window for that class of control is presented. Duplicate action names are eliminated.
    -   Keep in mind that **applicable actions** lists are intended only for convenience in authoring tests, and have no functionality beyond the editor. There is no requirement that you make your lists comprehensive, and you are not restricted in any way from entering a UI action in a test which is not on the actions list of its target control.
6.  Click the **Save File** ![](../Images/btn.TAC_toolbar.SaveFile.png) button on the toolbar to save your changes to the $ Class Maps entity.


The list of applicable actions has now been successfully defined for your user-defined TA class or classes.

You can now view the results of your work by dragging controls of your user-defined TA class or classes into the editor for your test module or action, as described in [Applicable action suggestions for a window or control](ug_applicable_actions.html).

**Parent topic:**[Content Assist](../../TA_Help/Topics/ug_content_assist.html)

[1](#fnsrc_1) Such would be the case if you were mapping multiple native classes to a single user-defined TA class, or using the class across platforms.

