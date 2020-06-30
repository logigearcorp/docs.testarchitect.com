--- 
title: "Dynamic identifiers"
linktitle: "Dynamic identifiers"
description: "Any action line that interacts with an AUT has one or more arguments that specify a window or control. Generally, we populate these arguments with static identifiers , which you know better as TA ..."
weight: 13
aliases: 
    - /TA_Help/Topics/The_test_language_dynamic_identifiers.html
keywords: "dynamic, identifiers"
---

Any action line that interacts with an AUT has one or more arguments that specify a window or control. Generally, we populate these arguments with static identifiers, which you know better as TA names, and which are created in the form of interface entities and their constituent interface elements.

Static identifiers have set values, established in interface entities before your test is run. The problem is, there may be times when you want your test procedure to control which UI element a given action is directed at. You can accomplish this with dynamic identifiers.

The static identifiers created by interface elements are useful for application windows that have a consistent appearance in terms of the controls that populate them, and the properties of those controls \(or at least the properties that are used for mapping\). They fall short, however, when it comes to mapping controls or elements that are dynamically created by an AUT.

To compound the problem, such controls are often created in amounts that cannot be known in advance. A typical example is a search on a web page that presents its matches with hyperlinks. The better alternative is to use dynamic identifiers, in which you explicitly specify the class of the control and the values of identifying properties within the actual action lines of a test module or action.

## Using dynamic identifiers

A dynamic identifier is surrounded by a pair of square brackets \(**\[** and **\]**\) and contains a set of one or more TA property-value pairs \(property names and their values\), separated by commas. In the case of controls \(but not windows\), the list must also include a TA class-value pair:

```
[ta class=<ta class name>, <TA property name 1>=<property value>, <TA property name 2>=<property value>,...]
```

You can use a dynamic identifier wherever you use a logical TA name. As an example, take the following \(conventional\) login actionfor the Car Rental application, whose static identifiers are defined in the interface entity below it:

![](/images/TA_Automation/Images/Static_identifiers.01a.png)

![](/images/TA_Help/Images/Static_identifiers.01b.png)

The following action, which uses dynamic identifiers to identify the controls, functions in an identical manner:

![](/images/TA_Automation/Images/Dynamic_identifiers.01a.png)

Note that, on line 18 in this revised action, we replace only the control argument with a dynamic identifier \(simply to show that static and dynamic identifiers can live side-by-side on the same action line\). Line 22 demonstrates that both the window and control arguments may be hold dynamic identifiers. Note also that, as mentioned earlier, window dynamic identifiers require only a set of property-value pairs \(one is usually sufficient\), while a dynamic identifier for a control also requires that the TA class of the control be identified.

{{<note>}}

-   For convenience, you can retrieve a dynamic identifier for a control quickly via either the [Identify](/user-guide/interface-definitions/interface-capturing-commands/point-to-identify-tool/) or [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/) tools:
    -   Option \#1: The Identify tool
        1.  In the Element definition dialog box, with the control of interest selected in the UI hierarchy tree, make sure that the property \(or properties\) that you want to use for the control's identification is\(are\) selected in the **TA Properties**tab.
        2.  Right-click the control, and then select **Copy Definition**.

            ![](/images/TA_Automation/Images/Dynamic_identifiers_identify.png)

        3.  In the test editor, paste the content from the clipboard into the control’s argument in the appropriate action line.
    -   Option \#2: The Interface Viewer
        1.  In the Interface Viewer window, with the control of interest selected in the UI explorer tree, make sure that the property \(or properties\) that you want to use for the control's identification is\(are\) selected in the **TA Properties**tab.
        2.  Right-click the control, and then select **Copy Definition**.

            ![](/images/TA_Automation/Images/Dynamic_identifiers_viewer.png)

        3.  In the test editor, paste the content from the clipboard into the control’s argument in the appropriate action line.

{{<tip>}} For greater convenience, you can retrieve the dynamic identifier of a control quickly either via the Element Definition dialog box or the Interface editor:

-   **Option 1**: The Element Definition dialog box \(see the [Element Definition](/user-guide/interface-definitions/interface-capturing-commands/point-to-identify-tool/) dialog box section for details\).
    1.  In the Element Definition dialog box, with the control of interest selected in the UI hierarchy tree, make sure that the property \(or properties\) that you want to use for the control's identification is\(are\) selected in the **Properties**tab.
    2.  Right-click the control, and then select **Copy Definition**.

        ![](/images/TA_Automation/Images/Copy_definition_Element_definition_dlg.png)

    3.  In the test editor, paste the content from the clipboard into the control’s argument in the appropriate action line.
-   **Option 2**: The Interface editor.

    If the control that you want to specify with a dynamic identifier has already been mapped in an interface entity, you can use the definition established by the corresponding interface element.

    1.  Open the Interface editor containing the interface element whose mapping you want to capture as a dynamic identifier.
    2.  Right-click the control, and then select **Copy Definition**.

        ![](/images/TA_Automation/Images/Copy_definition_Interface_editor.png)

    3.  In the test editor, paste the content from the clipboard into the control’s argument in the appropriate action line.

## Dynamic identifiers and expressions

So, we've established that dynamic identifiers are great for people who are too lazy to create interface entities. But what else are they good for?

One way in which the power of dynamic identifiers can be exploited is in the fact that they can be constructed "on the fly" by means of expressions. In particular, concatenation expressions that include variables can be very useful.

As an example, the following test case uses a variable-based dynamic identifier to cycle through [global pos](/user-guide/interface-definitions/control-properties/secondary-properties/using-global-pos-to-identify-ui-elements) values. The outcome of the procedure is a report of the number of buttons in an AUT window, which the test is able to perform without knowing anything about those buttons \(that is, no identifying property values\), aside from the fact that they all have a TA class of button:

![](/images/TA_Automation/Images/Dynamic_identifier_with_expression.01.png)

See also [Using anchor pos with dynamic identifiers](/user-guide/interface-definitions/control-properties/secondary-properties/anchor-pos-property/using-anchor-pos-with-dynamic-identifiers) for an example of dynamic identifiers and expressions.

## Multilevel dynamic identifiers

A multilevel dynamic identifier is one in which the value setting for a TA property is itself a dynamic identifier. In turn, that inner dynamic identifier may also have a TA property defined by a dynamic identifier, and this can go on for any number of levels.

Most typically, it is a control's anchor pos that is used as the operational property in a multilevel dynamic identifier, as the nature of anchor pos lends itself to the identification of controls through multiple levels of a window's control hierarchy.

*Examples:*

-   A single-level dynamic identifier:

    ```
    [ta class=panel, anchor=lv2, anchor pos=panel 2]
    ```

-   In a two-level dynamic identifier:

    ```
    [ta class=panel, anchor=[ta class=panel, anchor=lv3, anchor pos=panel 1], anchor pos=panel 2]
    ```

-   In a three-level dynamic identifier:

    ```
    [ta class=panel, anchor=[ta class=panel, anchor=[ta class=panel, anchor=[ta class=root pane, global pos=root pane 1], anchor pos=panel 5], anchor pos=panel 1], anchor pos=panel 2]
    ```


See [Using anchor pos with multilevel dynamic identifiers](/user-guide/interface-definitions/control-properties/secondary-properties/anchor-pos-property/using-anchor-pos-with-multilevel-dynamic-identifiers) for an example of the use of multilevel dynamic identifiers.

## Decomposing multilevel dynamic identifiers

From the standpoint of readability, a good practice is to assign each inner level of a multilevel dynamic identifier value to a variable, and then construct the full identifier in the control argument of the action that must reference it. For example, instead of using a two level dynamic identifier in an action line, such as this:

![](/images/TA_Automation/Images/Dynamic_identifiers_multi_level_2a_fixed.png)

you might prefer the clarity that comes with decomposing that complex action line into the following, which is functionally equivalent:

![](/images/TA_Automation/Images/Dynamic_identifiers_multi_level_2b_fixed.png)

## Bilevel dynamic identifiers

A bilevel dynamic identifier is one in which the value setting for a TA property is itself a dynamic identifier. Note that, when constructing a bilevel dynamic identifier, the internal dynamic identifier must be enclosed in apostrophes:

```
[ta class=panel, anchor='[ta class=panel, anchor=lv3, anchor pos=panel 1]', anchor pos=panel 2]
```

## Decomposing bilevel dynamic identifiers

From the standpoint of readability, a good practice is to assign the inner level of a bilevel dynamic identifier to a variable, and then construct the full identifier in the control argument of the action that must reference it. For example, instead of using a bilevel dynamic identifier in an action line, such as this:

![](/images/TA_Automation/Images/Dynamic_identifiers_multi_level_2a.png)

you might prefer the clarity that comes with decomposing that complex action line into the following, which is functionally equivalent:

![](/images/TA_Automation/Images/Dynamic_identifiers_multi_level_2b.png)




