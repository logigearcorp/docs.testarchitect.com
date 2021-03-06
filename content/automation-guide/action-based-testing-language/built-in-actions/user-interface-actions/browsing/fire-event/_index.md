--- 
title: "fire event"
linktitle: "fire event"
weight: 12
aliases: 
    - /TA_Automation/Topics/bia_fire_event.html
keywords: "trigger event, fire event, fire mouse event"
---

## Description

Fire an event on a browser element.

## Arguments

-   **window**

    TA name of the window.

-   **element**

    TA name of the element

-   **event**

    Type of event to fire on the specified element.

    Allowable values:

    -   **onclick**

        Fire a click event \(simulate a left mouse button click\).

    -   **ondblclick**

        Fire a doubleclick event \(simulate a double-click of the left mouse button\).

    -   **onmousedown**

        Fire a mousedown event \(simulate pressing of left mouse button\).

    -   **onmouseup**

        Fire a mouseup event \(simulate release of left mouse button\).

    \(See Notes for other allowed values.\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   event argument:
    -   Names for allowable event values are derived from standards of the W3C consortium, and other standard browser events are also supported.
    -   Note that, in the context in which they are being used, the allowable names for event types \(onclick, onmousedown, etc.\) can be a bit misleading. fire event does not, for example, specify an action to take in response to an onclick event, it simply *issues* the event \(a mouse click\) itself.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [object wait](object_wait.html), [window wait](window_wait.html).

## Example

**Action Lines**

![](/images//Images/bia_fire_event_pgm.png)

**Result**

![](/images//Images/bia_fire_event_res.png)

**Parent topic:**[Browsing](/TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[exec script](/TA_Automation/Topics/bia_exec_script.html)

**Next topic:**[get popup default text](/TA_Automation/Topics/bia_get_popup_default_text.html)

