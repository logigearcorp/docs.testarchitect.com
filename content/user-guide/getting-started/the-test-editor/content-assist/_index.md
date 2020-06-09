--- 
title: "Content Assist"
linktitle: "Content Assist"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_content_assist.html
---

Use Content Assist in the test editor to complete your action lines faster and with more accuracy.

TestArchitect's Content Assist feature provides context-sensitive assistance as you author your action lines in test modules, actions, interface entities and data sets. Autocomplete pop-up windows are used to offer appropriate choices for action names, domain-limited argument values, variable names and function names. Whenever a pop-up appears, you have the option of selecting an item from the list for insertion into the current cell. Furthermore, Content Assist's pop-ups for actions offer helpful descriptive information on each action.

## Action assistance

As you begin creating an action line by typing an action's name into the first cell of a row \(that is, column A\), Content Assist pops up a small window displaying valid user-defined, built-in, and user-scripted actionsuser-defined and built-in actions. If you continue typing, the list is continuously filtered down to only those actions that containbegin withthe entered sequence of characters. \(Actions that actually begin with the sequence appear first in the list.\)

Use the Up and Down arrow keys to scroll through the available choices. Note that, as each action is selected, its description is displayed, along with its argument list.

![](/images//Images/TA_Help/Images/Autocomplete_actions.png)

![](/images//Images/TA4VS_Help/Images/Autocomplete_actions.png)

**Tip:** When you first enter a new cell, and before typing any characters, you may also press Ctrl + Space or Space to invoke Content Assist. If editing an existing action line, pressing Ctrl + Space also brings up Content Assist with appropriate selections.

After selecting an action, you can insert it into your test editor by pressing Enter.

## Argument assistance

When you begin typing into the cell of an action line argument whose type is INTERFACE ENTITY, INTERFACE ELEMENT, or VALUE SET, Content Assist displays a list of all appropriate values. The list is continuously filtered to include only the items that begin with the entered characters.

-   In the case of [INTERFACE ENTITY](/reuse/reuse.Creating_and_using_actions_Arg_type.html#sectiondiv.arg_type.int_ent)-type arguments \(generally, arguments named window\), Content Assist supplies the names of all interface entities of your project's *assumed* interface:

    **Note:** Note that Content Assist tries to make an educated guess as to the interface that will be in effect at any given point in your test module, so that it may present you with the appropriate interface entities. Action lines following a [use interface](/reuse/../TA_Automation/Topics/bia_use_interface.html) action are assumed to use to the target interface of that action. In the absence of a use interface action, action lines are assumed to apply to whatever interface is currently designated as the [default](/reuse/../TA_Help/Topics/Interface_def_set_default_interface.html).

-   In the case of [INTERFACE ENTITY](/reuse/reuse.Creating_and_using_actions_Arg_type.html#sectiondiv.arg_type.int_ent)-type arguments \(generally, arguments named window\), Content Assist supplies the names of all interface entities of your project.
-   Once a window or dialog is specified, [INTERFACE ELEMENT](/reuse/reuse.Creating_and_using_actions_Arg_type.html#sectiondiv.arg_type.int_elt)-type arguments \(typically named control\), have their domains limited to the elements \(controls\) of the given interface entity.
-   [VALUE SET](/reuse/reuse.Creating_and_using_actions_Arg_type.html#sectiondiv.arg_type.value_set)-based arguments are those for which a domain of allowable values has been explicitly specified; this set of values serves as the pre-filtered source of the Content Assist list.

![](/images//Images/TA_Help/Images/Autocomplete_arguments.png)

![](/images//Images/TA4VS_Help/Images/aucomplete_arguments.png)

**Note:** As with action assistance, you can also press Ctrl + Space or Space to access Content Assist for argument lists at any time.

After selecting an item, you insert in into your test editor by pressing Enter.

## Variable and function assistance

For those arguments which accept expressions \(which include variables and functions\), Content Assist attempts to compile a list of all known variables based on those that have been declared and appear to be within scope at that given point, along with a list of valid built-in expression functions. For these arguments, entering the expression indicator \(\#\) triggers the list. As you continue typing characters, the list is filtered to include only the variables and the expression functions that begin with those characters.

![](/images//Images/TA_Help/Images/content_assist_variable_function.png)

After selecting an item with the Up/Down keys, insert it into the editor by pressing Enter.

**Tip:**

-   As you enter an expression function, a screentip appears displaying the function's syntax.

    ![](/images//Images/TA_Help/Images/content_assist_function_screentip.png)

-   If more than one variable or expression function is needed in an expression, press Ctrl + Space to trigger the autocomplete for each variable/function.

## Applicable actions assistance

It may often be the case that you need to write one or a series of test cases related to a given control, but you are not certain which actions can be used on that control. In general, the determination of whether a given control can be handled by a certain action is based on the TA class of the control. To allow you to avoid constantly referring to the Built-in Action reference pages to determine which actions can be used for a control, a Content Assist window is available for any mapped control, presenting a list of those actions that may be used with it. For details, see [Applicable action suggestions for a window or control](ug_applicable_actions.html).

-   **[Applicable action suggestions for a window or control](/TA_Help/Topics/ug_applicable_actions.html)**  
As you edit your tests, you often find yourself needing to know which actions can be used for a given control or window. Content Assist's **applicable actions** list provides you with a convenient means of viewing and selecting from the list of actions available for a given UI element.
-   **[Specifying action suggestion for a control belonging to a user-defined TA class](/TA_Help/Topics/ug_applicable_actions_user_defined_class.html)**  
For any set of controls whose TA class is user-defined, you can specify the list of actions that apply. This list will then appear in the **applicable actions** list of the Content Assist window when you work with these controls in the test editor.

**Parent topic:**[The test editor](/TA_Help/Topics/Getting_started_overview_the_test_editor.html)

**Next topic:**[Go to Definition](/TA_Help/Topics/ug_go_to_definition.html)

