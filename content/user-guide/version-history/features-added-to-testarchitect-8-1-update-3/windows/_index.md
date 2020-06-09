--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.1_update_3_Windows.html
---

The following new features and improvements are introduced in TestArchitect version 8.1 update 3 running under Windows.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Automation

-   **Web automation on Google Chrome** now utilizes Google's **[Remote Debugging](/TA_Help/Topics/Test_exec_extension.html#li_d2m_vks_tr) technical approach**. Google is phasing out support for NPAPI , the technology previously employed by TestArchitect to automate web applications on Chrome.
-   **All HTML input types are fully supported** on web browsers including Internet Explorer, Mozilla Firefox, and Google Chrome.

    -   New input types of the **<input\>** element are supported as unique TA classes:
        -   **<input-color\>**
        -   **<input-date\>**
        -   **<input-datetime\>**
        -   **<input-datetime-local\>**
        -   **<input-email\>**
        -   **<input-month\>**
        -   **<input-number\>**
        -   **<input-range\>**
        -   **<input-search\>**
        -   **<input-tel\>**
        -   **<input-time\>**
        -   **<input-url\>**
        -   **<input-week\>**

**Enhancements to existing features**

-   Each HTML **<input\>** type control is now mapped directly into a unique TA class. \(Note: In earlier versions of TestArchitect, this only applied to pre-HTML5 **<input\>** type controls: that is, **<input-button\>**, **<input-password\>**, **<input-text\>**, **<input-submit\>**, **<input-checkbox\>** and **<input-radio\>** were mapped to distinct TA classes; all others were mapped into the general input-text TA class.\)
-   If you captured HTML5 **<input\>** type controls in a previous version of TestArchitect, your TA class mappings of those controls are no longer recognized by the current version in its default mode. You have two options:
    1.  **Recommended:** Recapture the controls so that they are mapped into their appropriate TA classes. \(For example, remapping an **<input-color\>** control will change its TA class mapping from the legacy input-text class to the new input-color class.\)
    2.  Leave your legacy mappings intact and set the ignore html input types built-in setting to yes in all tests that interface with HTML5 **<input\>** type controls.

        **Note:** [ignore html input types](/TA_Automation/Topics/bis_ignore_html_input_types.html) built-in setting: Determines whether, during the test execution, the TA classes of legacy-captured HTML **<input\>** type controls are taken into consideration.

-   [enter](/TA_Automation/Topics/bia_enter.html) built-in action is now applicable to these additional HTML **<input\>** type controls:
    -   **<input-datetime\>**
    -   **<input-email\>**
    -   **<input-number\>**
    -   **<input-search\>**
    -   **<input-tel\>**
    -   **<input-url\>**
-   [set](/TA_Automation/Topics/bia_set.html) built-in action is now applicable to these additional HTML **<input\>** type controls.
    -   All **<input\>** type controls supported by enter built-in action
    -   plus:
        -   **<input-color\>**
        -   **<input-date\>**
        -   **<input-datetime-local\>**
        -   **<input-month\>**
        -   **<input-range\>**
        -   **<input-time\>**
        -   **<input-week\>**

**Parent topic:**[Features added to TestArchitect 8.1 Update 3](/TA_ReleaseNotes/DITA_source/Whats_New_8.1_update_3.html)

