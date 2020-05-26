--- 
title: "What's new in TestArchitect for macOS"
linktitle: "macOS"
weight: 3
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.1_Mac.html
---
# What's new in TestArchitect for macOS {#concept_what_new_8.1_Mac .concept}

The following new features and improvements are introduced in TestArchitect version 8.1 running under macOS.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client { .section}

-   [**LDAP authentication**](../../TA_Help/Topics/ug_LDAP_overview.html): TestArchitect's support for LDAP \(Lightweight Directory Access Protocol\) allows your TestArchitect login credentials to be established through your system account.
-   **Content Assist – new features and enhancements**: TestArchitect’s **Content Assist** feature, which provides context-sensitive assistance as you author your action lines, has been expanded and improved.
    -   [**Content Assist for functions**](../../TA_Help/Topics/ug_content_assist.html): In the appropriate contexts, when editing argument values in test modules and actions, autocomplete pop-up windows offer appropriate choices of function names. You then have the option of selecting a function from the list for insertion into the current cell.
    -   [**Content Assist for applicable actions**](../../TA_Help/Topics/ug_applicable_actions.html): During your editing session, a handy reference can be invoked to display the full list of actions that apply to a given object, based on the object’s class. Just drag a control or window from TA explorer into your test, and a Content Assistpopup instantly lists the applicable actions, highlighting the most commonly used one. Select from the list to automatically insert the action, together with its window and/or control arguments. And for controls of a user-defined TA class, Content Assist can display your [own custom list of actions](../../TA_Help/Topics/ug_applicable_actions_user_defined_class.html).
    -   **Faster updates to Content Assist lists**: Autocomplete lists of arguments, actions and data sets are updated in your editing session as soon as the related project items are saved. That is, when you update a given interface entity, user-defined action or data set, or create a new one, it is no longer necessary to check that item in to ensure that the change is reflected in the related Content Assist content.
-   [**Diff Tool**](../../TA_Help/Topics/ug_item_comparison.html): At times, you may need to inspect two related project items, comparing them for their differences. Performing a visual inspection with the two items arranged side-by-side on screen can help when the files are small and the differences few. But for anything more involved, the TestArchitect Diff Tool offers a better solution, making the job of difference viewing more systematic, reliable, and efficient.

**Enhancements to existing features**

-   [**Go to Definition**](../../TA_Help/Topics/ug_go_to_definition.html): Often, while you are editing or reviewing a test, you'll come across the name of an item whose definition you wish to view or modify. With Go to Definition, you can avoid the bother of navigating through the TestArchitect explorer tree to locate the item. Instead, a one-click shortcut opens it instantaneously in an editor window.
-   [**Support for inserting action lines into the test editor**](../../TA_Help/Topics/Getting_started_overview_the_test_editor.html):
    -   TestArchitect now lets you instantly insert several empty lines into the editor worksheet below the current cell pointer location, moving the pointer three lines down to allow the next action line to be added.
    -   The number of empty action lines to be inserted can be configured in the [Preferences](../../TA_Help/Topics/Additional_features_preferences.html) dialog box.
-   **Support for additional shortcut keys**: Now perform more tasks quickly, without needing a mouse.
    -   [Working with the test editor](../../TA_Help/Topics/Support_Hotkey.html):

        |Description|Shortcut Keys|
        |-----------|-------------|
        |Insert several empty lines, then move the cell pointer three lines down|![](../../TA_Help/Images/Mac_control_key.png) + Enter|
        |Insert a new test case at the current position \(test modules only\)|![](../../TA_Help/Images/Mac_control_key.png) + T|

    -   [Working with item tabs](../../TA_Help/Topics/Support_Hotkey.html):

        |Description|Shortcut Keys|
        |-----------|-------------|
        |Close the active item tab|![](../../TA_Help/Images/Mac_control_key.png) + W or ![](../../TA_Help/Images/Mac_control_key.png) + F4|
        |Select \(make active\) item tab \#1 to \#8|![](../../TA_Help/Images/Mac_control_key.png) + 1 through ![](../../TA_Help/Images/Mac_control_key.png) + 8|
        |Select last item tab|![](../../TA_Help/Images/Mac_control_key.png) + 9|
        |Select item tab to right of active tab|![](../../TA_Help/Images/Mac_control_key.png) + Tab|
        |Select item tab to left of active tab|![](../../TA_Help/Images/Mac_control_key.png) + ![](../../TA_Help/Images/Mac_shift_key.png) + Tab|

    -   **Preserving pointer position**: The last established position of the cell pointer is now preserved under the following scenarios:
        -   Check in an item with the **Keep Checked Out** option selected.
        -   Check out an item.

## TestArchitect Automation {#section_jqm_z13_nh .section}

All new TestArchitect Automation features since the previous release of TestArchitect 8 are documented in the interim updates previously published. Please refer to the Release Notes for TestArchitect 8 [update 1](Whats_New_8_update_1.html), [update 2](Whats_New_8_update_2.html), [update 3](Whats_New_8_update_3.html) and [update 4](Whats_New_8_update_4_Mac.html).

**Parent topic:**[Features added to TestArchitect 8.1](../../TA_ReleaseNotes/DITA_source/Whats_New_8.1.html)

