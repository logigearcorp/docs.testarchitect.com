--- 
title: "Playback toolbar"
linktitle: "Playback toolbar"
description: "The playback toolbar appears at the bottom right corner of the screen during test execution. It displays the list of running harnesses and their running statuses, and allows you to pause, resume, or terminate the harnesses."
weight: 3
aliases: 
    - /TA_Help/Topics/Test_exec_playback_toolbar.html
keywords: "executing tests, playback toolbar, executing"
---

The playback toolbar appears at the bottom right corner of the screen during test execution. It displays the list of running harnesses and their running statuses, and allows you to pause, resume, or terminate the harnesses.

![](/images/TA_Help/Images/ug_playback_controller_1.png)

The playback controller contains of the following items:

-   **The Harness drop-down list box**: presents the list of running harnesses. You can view the running status of a specific harness by selecting it from this drop-down list box. See below for the [harness naming convention](/TA_Help/Topics/Test_exec_playback_toolbar.html#harness_name).

    {{<note>}} Applies to TestArchitect [8.4](/TA_ReleaseNotes/DITA_source/Whats_New_8.4.html) and higher.

-   **Running harnesses**: Number of harnesses that are currently running.
-   **Pending harnesses**: Number of harnesses that are pending. \([Learn more](/TA_Help/Topics/Multiple_harnesses_pool_size.html)\)
-   **Pause/Resume**: Pause or resume the selected harness.

    **Fastpath:** Press a key combination of Ctrl + Alt + P.

    **Alternative**: Right-click the **TestArchitect Controller** ![](/images/TA_Help/Images/TA_controller_icon.png) icon in the Windows notification area. Select **Pause** or **Resume** from the context menu.

-   **Terminate**: Terminate the selected harness.

    **Fastpath:** Press a key combination of Ctrl + Alt + T.

    **Alternative**: Right-click the **TestArchitect Controller** ![](/images/TA_Help/Images/TA_controller_icon.png) icon in the Windows notification area. Select **Terminate** from the context menu.

    {{<note>}} TestArchitect generates a test result even after the test run is terminated prematurely.

-   **Terminate All**: Terminate all the running harnesses.

    **Fastpath:** Press a key combination of Ctrl + Alt + A.

    **Alternative**: To terminate all running harnesses, right-click the **TestArchitect Controller** ![](/images/TA_Help/Images/TA_controller_icon.png) icon in the Windows notification area. Select **Terminate All** from the context menu.

    {{<note>}} Applies to TestArchitect [8.4](/TA_ReleaseNotes/DITA_source/Whats_New_8.4.html) and higher.

-   **Show/Hide running status**: Show or hide the running status of the selected harness. including test modules, test cases and action lines

    **Fastpath:** Press a key combination of Ctrl + Alt + R.

-   **Show/hide the playback toolbar**: Show or hide the entire playback toolbar during the automated test.

    **Fastpath:** Press a key combination of Ctrl + Alt + S.


{{<restriction>}} Keyboard shortcuts for the playback toolbar are not supported on the Linux platform. For the full list of TestArchitect-supported keyboard shortcuts, refer to the [Table of keyboard shortcuts](/TA_Help/Topics/Support_Hotkey.html).

## Naming convention for harnesses

The name of a harness is formed by combining the result name with the timestamp and request ID:

```
<Result name> (<timestamp>)- <request ID>
```

-   Result name: Name of a test when it is executed on the TestArchitect Controller. Conventionally, the test name is given to the result name. You can set the [**Result Name**](/TA_Help/Topics/Test_exec_test_execution.html#result_name) on the **General** tab in the Execute Test dialog box.
-   Timestamp: Date and time when the test is executed. The date is written in yyyy-mm-dd format and the time in hh.nn.ss format.
-   Request ID: A string generated when the TestArchitect Controller prepares data for test run\(s\).

{{<tip>}} If a harness' name is too long to be displayed fully, hover your mouse over this harness to view a tooltip of its complete name.

For example:

```
MultipleReservations (2018-07-03 11.09.47)- bmmtiq0jok0f
```

Where

-   MultipleReservations: Result name.
-   2018-07-03 11.09.47: Timestamp.
-   bmmtiq0jok0f: Request ID.




