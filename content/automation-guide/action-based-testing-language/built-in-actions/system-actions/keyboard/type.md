--- 
title: "type"
linktitle: "type"
description: "Description Simulate the typing of one or more keys into a window. Arguments window TA name of the window into which keys are to be typed. keys Keys to type. Valid contexts This action may be used ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_type.html
keywords: "built-in actions, type, type (action), Android (action), type, Safari, macOS (action), macOS, Safari (action), type keys"
---

## Description

Simulate the typing of one or more keys into a window.

## Arguments

-   **window**

    TA name of the window into which keys are to be typed.

-   **keys**

    Keys to type.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action does not support iOS devices.
-   Note that this action does not include a control argument. In effect, type emulates typing keys with the character entry being directed to whichever control has focus at that point. To direct entry to a particular control, type is typically preceded by a [focus control](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/focus-control) action.
-   For special keys, the following notations are used:
    -   Function keys: \{F1\} to \{F12\}
    -   Named keys: \{enter\}, \{esc\}, \{capslock\}, \{numlock\}, \{scrolllock\} \{spacebar\}, \{backspace\}, \{home\}, \{end\}, \{pause\}, \{delete\}, \{page down\}, \{page up\}
    -   Arrow keys: \{up\}, \{down\}, \{left\}, \{right\}
    -   TAB key: \{tab\}
    -   CTRL key combinations: Caret \(^\) plus the modified key. For example, Ctrl + a is represented by ^a.
    -   ALT key combinations: The percent sign \(%\) plus the modified key. For example, %\{F4\} represents Alt + F4.
    -   SHIFT key combinations: The plus sign \(+\) plus the modified key. For example, +a represents Shift + a.
    -   WINDOW key combinations: \{Win\} or \{WIN\} plus the modified key. For example, \{Win\}r represents Window-r \(used to display the Run dialog box\).
-   For special keys for Safari on macOS, the following additional notations are used:
    -   COMMAND key combinations: \{command\} plus the modified key. For example, \{command\}c represents COMMAND+C.
    -   OPTION key combinations: \{option\} plus the modified key. For example, \{option\}\{delete\} represents OPTION + Delete

        {{<restriction>}} Currently, \{capslock\} is not supported for Safari running on macOS.

-   For special keys on mobile operating systems, the following notations are used:
    -   \{home\}, \{back\}, \{menu\}, \{search\}, \{spacebar\}, \{enter\}, \{backspace\}, \{up\}, \{down\}, \{left\}, \{right\}, \{go\}, \{voldown\}, \{volup\}.
-   TestArchitect supports all basic characters that are present on a standard keyboard, including all letters, digits and symbols, including all of \` ~ @ \# $ % ^ & \* \( \) \_ + \| \} \{ \] \[ ' " ; : ? / \> . < , " = -. However, certain symbol keys have special meaning in TestArchitect, and need to be “escaped” when you want to use them for straight character entry:
    -   Since the caret, percent sign, and plus sign characters are used to represent the CTRL, ALT, and SHIFT keys, respectively, in order to effectively type ^, %, and + with this action, enclose these keys in curly braces. For example: \{+\} writes + to the specified window.
    -   As the pound key \( \# \) is used in TestArchitect as an expression indicator, you must prepend a backslash \( \\ \) to it to escape that functionality as use the symbol itself. For example: \\\# cars writes \# cars to the specified window.
    -   For other symbolic keys, do not enclose them in curly braces. For example, use ? to write ? to the specified window.
    -   For other symbolic keys, enclosing them in curly braces is optional – there is no difference in effect. For example, both ? and \{?\} write ? to the specified window.
-   Curly braces that do not enclose strings recognized as special keys are treated as literal curly braces. For example, \{xyz\} writes \{xyz\} to the specified window, since xyz has no special meaning to TestArchitect. In the event you need to write a literal string that would otherwise be translated by TestArchitect as a special key, enclose the first curly brace in another pair of curly braces. Hence, to type the literal \{home\}, use \{\{\}home\}.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Example

![](/images/TA_Automation/Images/bia_type_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_type_pgm.png)

Result

![](/images/TA_Automation/Images/bia_type_res.png)


