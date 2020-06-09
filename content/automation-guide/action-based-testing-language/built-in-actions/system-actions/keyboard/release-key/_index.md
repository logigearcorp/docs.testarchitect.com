--- 
title: "release key"
linktitle: "release key"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_release_key.html
---
keyword: [release key, key released, key up, key is released]
---

# release key

## Description

Release the specified key\(s\) that were previously held down using the [hold key](hold_key.html) built-in action.

## Arguments

-   **keys**

    \(Optional\) Key\(s\) to release.


## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Windows and Linux.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Notes

-   For special keys, the following notations are used:
    -   Function keys: \{F1\} to \{F12\}
    -   Named keys: \{enter\}, \{esc\}, \{capslock\}, \{numlock\}, \{scrolllock\} \{spacebar\}, \{backspace\}, \{home\}, \{end\}, \{pause\}, \{delete\}, \{page down\}, \{page up\}
    -   Arrow keys: \{up\}, \{down\}, \{left\}, \{right\}
    -   **TAB** key: \{tab\}
    -   **CTRL** key: Caret \(**^**\)
        -   Left CTRL: **<^**
        -   Right CTRL: **\>^**
    -   **ALT** key: Percent sign \(**%**\)
        -   Left **ALT**: **<%**
        -   **Right** ALT: **\>%**
    -   **SHIFT** key: Plus sign \(**+**\)
        -   Left SHIFT: **<+**
        -   Right SHIFT:**\>+**
    -   **WINDOW** key: \{Win\} or \{WIN\}
        -   Left WINDOW: **\{lWin\}** or **\{lWIN\}**
        -   Right WINDOW: **\{rWin\}** or **\{rWIN\}**
-   TestArchitect supports all basic characters that are present on a standard keyboard, including all letters, digits and symbols, including all of \` ~ @ \# $ % ^ & \* \( \) \_ + \| \} \{ \] \[ ' " ; : ? / \> . < , " = -. However, certain symbol keys have special meaning in TestArchitect, and need to be “escaped” when you want to use them for straight character entry:
    -   Since the caret, percent sign, and plus sign characters are used to represent the **CTRL**, **ALT**, and **SHIFT** keys, respectively, in order to effectively type ^, %, and + with this action, enclose these keys in curly braces. For example: \{+\} writes + to the specified window.
    -   As the pound key \( \# \) is used in TestArchitect as an expression indicator, you must prepend a backslash \( \\ \) to it to escape that functionality as use the symbol itself. For example: \\\# cars writes \# cars to the specified window.
    -   For other symbolic keys, do not enclose them in curly braces. For example, use ? to write ? to the specified window.
    -   For other symbolic keys, enclosing them in curly braces is optional – there is no difference in effect. For example, both ? and \{?\} write ? to the specified window.
-   Curly braces that do not enclose strings recognized as special keys are treated as literal curly braces. For example, \{xyz\} writes \{xyz\} to the specified window, since xyz has no special meaning to TestArchitect. In the event you need to write a literal string that would otherwise be translated by TestArchitect as a special key, enclose the first curly brace in another pair of curly braces. Hence, to type the literal \{home\}, use \{\{\}home\}.
-   release key built-in action
    -   Not support keys of virtual keyboard for mobile devices, and ten keys \(0,…,9\), on the far right of computer keyboards.
    -   Case-insensitivity, that is, it does not distinguish whether you pass uppercase, or lowercase letters into the keys argument, TestArchitect still releases the lowercase letters. For example:

        ```
                          keys
        release key       A
        ```

        TestArchitect releases the lowercase **a** letter.

    -   Multiple keys to be released simultaneously supported.
-   Generally, the [release key](release_key.html) built-in action is used in conjunction with the [hold key](hold_key.html) built-in action to release keys that were previously held down spanning multiple steps. For example, if the AUT requires that the ALT key be held down while mouse left-clicks are taking place, that task could begin with a hold key action to hold down the ALT key, followed by the mouse left-click steps, finally ending with this release key built-in action.
    -   To release all keys that are being held down, apply the value of \{all\} for release key. For example:

        ```
                        keys
        release key     {all}
        ```

    -   TestArchitect also automatically releases keys being held down at the end of every test case run; although, the release key is not declared explicitly in the test procedures.
    -   When you are aware of what specific keys are being held down even by another applications, you can have TestArchitect release those keys. For example, **CTRL** is being held down by another applications, declare

        ```
                        keys
        release key     ^
        ```

        in the test procedures. Note that, this approach does not take effect on the value of \{all\} for release key.

-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Example

The following sample of test procedures selecting multiple cells in a given table by holding down the **left-CTRL** key, then applying [click table cell](click_table_cell.html) built-in action several times, finally releasing the **left-CTRL** key.

## Action Lines

![](/images//Images/bia_release_key_pgm.png)

**Parent topic:**[Keyboard](/TA_Automation/Topics/bia_keyboard.html)

**Previous topic:**[hold key](/TA_Automation/Topics/bia_hold_key.html)

**Next topic:**[type](/TA_Automation/Topics/bia_type.html)

