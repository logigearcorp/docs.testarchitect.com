--- 
title: "Critical wait settings"
linktitle: "Critical wait settings"
weight: 1
aliases: 
    - /TA_Automation/Topics/timing_critical_wait_settings.html
---

The critical wait settings \(window wait, page wait, object wait, item wait and property wait\) are those which are used for conditions and preconditions which, if not satisfied, result in a warning or failing of a test.

In some cases, the [condition/precondition](timing_preconditions.html) you are testing is something of a show-stopper: if it is not satisfied, the action either cannot complete execution and must report a warning \(for preconditions\), or must report a fail for the test \(for check…exists conditions\). The timing settings for these critical waits are:

-   **[window wait](window_wait.html)**

    Applies to UI windows, including browser windows. Used for preconditions that require the existence of a window, and for conditions that require the existence or nonexistence of a window.

-   **[page wait](page_wait.html)**

    Applies to HTML pages in a browser window.

-   **[object wait](object_wait.html)**

    Applies to UI controls and HTML elements.

-   **[item wait](item_wait.html)**

    Applies to UI items such as tree nodes, menu items, list items and table cells.

    **Note:** item wait is not exclusively used as a critical wait timer. See note below for [object wait probe](object_wait_probe.html).

-   **[property wait](property_wait.html)**

    Applies to the various properties of UI elements.


The example below demonstrates three critical wait settings - [window wait](window_wait.html), [object wait](object_wait.html) and [item wait](item_wait.html) - used as timers for preconditions of the [get table cell value](get_table_cell_value.html) action. When executed, the action first looks for the presence of the View Orders window; if it must wait for the window to appear, that wait is governed by the [window wait](window_wait.html) timer. A timeout results in a warning for the test, whereas discovery of the window allows the action to proceed to its next stage. A similar case is true for the next two stages of finding the specified object \(a table\), and the specified item \(a specific cell of the table\).

**Note:** This action, get table cell value, also uses the non-critical timing setting value changed wait. For purposes of this topic, that is ignored here, but is discussed later.

![](/images//Images/timing_stages_of_get_table_cell_value_01.png)

**Parent topic:**[Timing settings by type](/TA_Automation/Topics/timing_settings_classified.html)

