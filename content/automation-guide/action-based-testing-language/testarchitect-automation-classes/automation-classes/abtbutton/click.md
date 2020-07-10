--- 
title: "Click"
linktitle: "Click"
description: "Syntax long Click(TAMouseClickType mouseType) Description Apply a mouse click to the button control. Parameters mouseType TAMouseClickType value indicating type of mouse click. Allowable values are: ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/abt_Click_2.html
keywords: "methods of abt, Click, Click (AbtButton), AbtButton, click, abtbutton click, left click on button, right click on button, double click on button"
---

## Syntax

`long Click(TAMouseClickType mouseType)`

## {{< expand >}} Description {{< permerlink >}} {#abt_Click_button__section.desc} 

Apply a mouse click to thebutton control.

## {{< expand >}} Parameters {{< permerlink >}} {#abt_Click_button__section.params} 

-   **mouseType**

    [TAMouseClickType](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abt-object-classes/tamouseclicktype) value indicating type of mouse click.

    Allowable values are:

    -   LEFT \(single left-mouse click\)
    -   RIGHT \(single right-mouse click\)
    -   DOUBLE \(double left-mouse click\)

## Return Value

Return 0 if theclickis successful; otherwise, -1.


