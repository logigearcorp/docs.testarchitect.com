--- 
title: "get setting"
linktitle: "get setting"
description: "Description Retrieve the current value of a built-in or user-defined setting. Arguments name Name of an existing built-in setting or a user-defined setting. type Type of this setting. Allowable ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_get_setting.html
keywords: "built-in actions, get setting, get setting (action), get setting, get current value of setting, retrieve current value of setting, get current value setting, retrieve current setting value"
---

## Description

Retrieve the current value of a [built-in](/automation-guide/action-based-testing-language/built-in-settings/) or [user-defined](/user-guide/test-execution/startup-settings/creating-a-new-user-defined-setting) setting.

## Arguments

-   **name**

    Name of an existing built-in setting or a user-defined setting.

-   **type**

    Type of this setting.

    Allowable values:

    -   built-in
    -   user defined
-   **variable**

    \(Optional\) Name of the variable to receive the returned value.

-   **default**

    \(Optional\) Value to which to set the variable if the specified setting has no value. \(Applies only to user-defined settings – See Notes.\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   default argument:
    -   *Built-in setting*: For a built-in setting, any value in the default argument is ineffectual, because TestArchitect enforces the rule that all built-in settings always have a non-empty value.
    -   *User-defined setting*: If no value is defined explicitly in the [Execute Test](/user-guide/test-execution/startup-settings/creating-a-new-user-defined-setting) dialog box \(or in the /startupsettings parameter in the case of command line or batch execution\), the value of the default argument is assigned to the variable. In this way, individual test modules or user-defined actions may be allowed to, in effect, determine the value of a given setting.
-   Note that the same functionality offered by the get setting action is also available from the [getsetting](/automation-guide/action-based-testing-language/the-test-language/functions/string-functions/getsetting) function or, if you are writing a user-defined script, from the [GetSetting](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/getsetting) method.

## Example \#1: Reading and setting user-defined settings

Let's say you have a set of tests for an application that is primarily targeted at the English-speaking world. You want your tests to default to English, but you also want to be able to launch entire test runs for testing other language versions of the application.

You could do this by establishing a user-defined setting, which we'll call language, in the [**Startup Settings**](/user-guide/test-execution/startup-settings/creating-a-new-user-defined-setting) panel of the Execute Test dialog box. On any given test run, set this setting to the language of your choice.

![](/images/TA_Automation/Images/bia_get_setting.startup_setting.png)

Since our tests will default to English, in order to have them perform their testing in English, you have the option of setting the above value to English, or simply clearing it.

Since there are a lot of various messages and user interface bits of text that are used by our tests, and which will vary by language, we use an ODBC database \(one that TestArchitect's [database actions](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/) can work with\), to store the translations:

![](/images/TA_Automation/Images/bia_get_setting.translation_table.png)

Each test module of the project is initialized with a get setting action that writes the test language to a variable, current\_lang \(line \#11 in the example below\). With the default argument set to English, we are assured that, if no value has been set for language in the **Statup Settings**, current\_lang will be set to English.

Next, a user-defined action, connect to language database, handles the minutiae of connecting to and using the database with our **translations\_table**. The [execute sql](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/execute-sql) action \(line \#16\) following it issues a query that retrieves all of the translations in the table for the given language, writing them out to a single data set row.

Now that we have all the translations we need, the first test case demonstrates how they are used. Another user-defined action \(line \#24\) attempts to log in to the AUT with a wrong password. Upon return, we check for a message from the AUT indicating that the login was invalid. Assuming, for instance, that the test run was launched with language = German, the data set field msg\_invalid\_login holds the value, ungültiger Benutzername oder Passwort \(the German equivalent of “invalid username or password”\), and that is the message that is checked for.

**Test Lines**

![](/images/TA_Automation/Images/bia_get_setting.UDS_example.pgm.png)

## Example \#2: Reading built-in settings

The get setting action allows your test procedure to determine the value of a built-in setting and take action accordingly. Say, for instance, that your test needs to interact with an HTML element that is treated differently by different browser types. In that case, it is helpful to know which browser you are interacting with, and your test can determine this by reading the current state of the [use browser](/automation-guide/action-based-testing-language/built-in-settings/other-settings/use-browser) setting.

One example is the HTML5 **input** element with a type attribute of color:

```
<input type="color">
```

In Chrome and FireFox, this element is rendered as a colorpicker control which presents a color palette when the user clicks on it:

![](/images/TA_Automation/Images/bia_get_setting.color_input.chrome.png)

In Internet Explorer, however, the same element/attribute combination is merely rendered as a text box,in which the user must type in the hexadecimal RGB values for the desired color: ![](/images/TA_Automation/Images/bia_get_setting.color_input.ie.png)

On a [window intake](/user-guide/support/glossary-of-terms/window-intake), the TA class that TestArchitect generates for this element/attribute combination depends upon the host browser. Hence, you might want to have two separate interface elements in your interface entity for this control, one with the correct TA class for Chrome and FireFox, and the other with the TA class for IE. Beyond that, your test procedure needs to interact differently with each type of control.

In the example below, the use browser setting is read into variable browser in use by the get setting action \(line \#10\). The variable is then used in the `if` structure to determine which interface element to use. In addition, user-defined action select color \(called in line \#35, but not defined here\) might also read browser in use to branch to the correct set of system-level action lines for interacting with the control.

**Test Lines**

![](/images/TA_Automation/Images/bia_get_setting_pgm.r02.png)




**Related information**  


[Startup settings](/user-guide/test-execution/startup-settings/)

