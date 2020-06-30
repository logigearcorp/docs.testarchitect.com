--- 
title: "navigate"
linktitle: "navigate"
description: "Description Navigate to a specified web page, optionally launching a browser or a new browser window. Arguments location URL to navigate to. Allowable values: web addresses ( http:// or https:// ..."
weight: 19
aliases: 
    - /TA_Automation/Topics/bia_navigate.html
keywords: "built-in actions, navigate, navigate (action), iOS (action), navigate, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), navigate to a page, visit web page, launch browser and visit a page, open page from browser"
---

## Description

Navigate to a specified web page, optionally launching a browser or a new browser window.

## Arguments

-   **location**

    URL to navigate to.

    Allowable values:

    -   web addresses \(http:// or https:// protocols\)
    -   files \(file:// protocol\)
-   **window**

    \(Optional\) Browser window that the action is to run upon.

-   **handle**

    \(Optional\) Variable to hold the returned handler number of the browser window.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   window argument:
    -   If the window argument is omitted, the specified web page is opened in a new instance of a web browser. The web browser to be invoked is determined by the current value of TestArchitect's built-in [use browser](/automation-guide/action-based-testing-language/built-in-settings/other-settings/use-browser) setting.
    -   If window is specified, it defines the browser window upon which the action is to operate. The setting of use browser in that case does not apply.
-   In order to open an HTML file on a local or network drive, specify the file protocol for the location argument as follows: `file:///sDrives/sFile`, where:

    -   sDrives: The local or network drive.
    -   sFile: Filepath of HTML file to open.

    To specify a remote host, use five slashes: `file://///hostname/sFile`

    {{<warning>}} In instances where the window argument has a value, your URL cannot contain white spaces. Replace any white space with %20.

-   When Chrome on Android has multiple tabs open, navigate needs to traverse through those tabs to check for the already-navigated site. Activating each tab can typically take around two seconds. Consequently, the time consumed by navigate when many tabs are open can be significant.
-   You can have this action open the specified URL within a specific mobile device emulator, allowing you to test webpages and applications in emulation mode for the given device. Do this by means of the [send command to browser](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/send-command-to-browser) built-in action, which must be set after execution of the navigate. \([Learn more](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-web-apps-in-mobile-emulation-mode/launching-mobile-browser-emulator).\)
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [use browser](/automation-guide/action-based-testing-language/built-in-settings/other-settings/use-browser), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Example - Case 1: Navigate to a web site

![](/images/TA_Automation/Images/bia_navigate_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_navigate_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_navigate_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_navigate_effect.png)

## Example - Case 2: Open an HTML file on a local drive

Suppose you want to open the HTML file, C:/Program Files/LogiGear/TestArchitect/samples/ScrumBoard/index.html, in a running web browser window. Since the URL to the local HTML file contains a white space, that is, inside Program Files, it is essential to replace the white space with %20. The value for location should therefore be file:///C:/Program%20Files/LogiGear/TestArchitect/samples/ScrumBoard/index.html file://///lgvn10003

**Action Lines**

![](/images/TA_Automation/Images/bia_navigate_pgm_2.png)

**Result**

![](/images/TA_Automation/Images/bia_navigate_res_2.png)

**Effect**

![](/images/TA_Automation/Images/bia_navigate_effect_2.png)

## Example

![](/images/TA_Automation/Images/bia_navigate_ta4vs_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_navigate_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_navigate_ta4vs_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_navigate_ta4vs_effect.png)




**Related information**  


[go back](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/go-back)

[go forward](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/go-forward)

[go home](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/go-home)

[refresh](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/refresh)

