--- 
title: "fire event"
linktitle: "fire event"
description: "Description Fire an event on a browser element. Arguments window TA name of the window. element TA name of the element event Type of event to fire on the specified element. Allowable values: onclick ..."
weight: 12
aliases: 
    - /TA_Automation/Topics/bia_fire_event.html
keywords: "built-in actions, fire event, fire event (action), iOS (action), fire event, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), trigger event, fire mouse event"
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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_fire_event_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_fire_event_res.png)




