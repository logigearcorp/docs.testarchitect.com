--- 
title: "Timing built-in settings support"
linktitle: "Timing built-in settings support"
weight: 5
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Oracle_Forms_timing.html
---

Timing built-in settings supported by TestArchitect for testing Oracle Forms.

**Note:** Applies to TestArchitect [8.3 Update 5](/TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.

Successful testing requires that the automation correctly handle the varying response times of a system under test, and not to attempt to continue with interactions before the system is finished with the previous function. Conversely, it is also important that we wait no longer than is necessary for a function to complete, as excessive waits could potentially slow down overall run times of larger test runs. \([Learn more](Automation_practices_Timing.html).\)

|No|Built-in settings|
|--|-----------------|
|1|[window wait](bis_window_wait.html)|
|2|[item wait](bis_item_wait.html)|
|3|[object wait](bis_object_wait.html)|
|4|[value changed wait](bis_value_changed_wait.html)|
|5|[property wait](bis_property_wait.html)|
|6|[object wait probe](bis_object_wait_probe.html)|
|7|[window wait probe](bis_window_wait_probe.html)|
|8|[click delay](bis_click_delay.html)|
|9|[control condition wait](bis_control_condition_wait.html)|
|10|[double click time](bis_double_click_time.html)|
|11|[control condition](bis_control_condition.html)|

**Parent topic:**[Testing Oracle Forms](/TA_Automation/Topics/aut_app_testing_Oracle_Forms.html)

**Previous topic:**[Support for Oracle Forms built-in actions](/TA_Automation/Topics/aut_app_testing_Oracle_Forms_supported_actions.html)

