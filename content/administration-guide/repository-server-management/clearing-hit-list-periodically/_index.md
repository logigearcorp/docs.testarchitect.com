--- 
title: "Clearing hit list periodically"
linktitle: "Clearing hit list periodically"
description: "Hit list clearance should be scheduled periodically to avoid performance issues for repositories and for TestArchitect automation."
weight: 18
aliases: 
    - /TA_Administration/Topics/adm_clear_hitlist.html
keywords: "hit list, setting, clearing, hit list, repository, repositories, clearing hit list"
---

Continuous hit list clearance whenever changes occur in the repository can significantly impact the repository's performance. Consequently, TestArchitect can also hang under such circumstances, such as when many test results are uploaded to the repository at one time. Hit list clearance should be scheduled periodically to avoid performance issues for repositories and for TestArchitect automation.

Each TestArchitect repository maintains a log, known as the hit list, of database transactions \(items checked in, items checked out, etc.\) over time. Normally, the repository server writes to this log in real time for every transaction, in an operation referred to as "hit list clearance". As the log grows, this constant maintenance can cause performance to take a hit. The alternative is to instruct the repository server to hold off on writing to the log, and instead cache the transaction records as each such operation occurs. Then, on a periodically scheduled basis, the log is updated with all the transactions in the cache, with the cache then cleared.

Scheduled hit list clearance is configurable for each given repository server. \(It cannot be done at the repository level.\) When in effect, period clearance can take place at a maximum frequency of daily, and minimum of weekly.

{{<tip>}}

-   It is recommended that you do not plan the hit list clearance at the same time as other scheduling, such as: [backing up the repository](/TA_Administration/Topics/Repo_server_management_bk.html) or [synchronizing data](/TA_Administration/Topics/adm_Synchronizing_data.html).
-   Hit list clearance should be scheduled when your teams are idle.

To create a hit list clearance schedule, perform the steps below:

1.  On the machine hosting the repository server to be configured, ensure that TestArchitect is closed.

2.  Using your favorite text editor, open the setting fileabt.ini

    This file, created during TestArchitect installation, defaults to the following locations:

    -   Windows: C:\\Users\\Public\\LogiGear\\TestArchitect\\Data\\abt.ini
    -   Linux: /usr/local/logigear/testarchitect/data/rs/abt.ini
    -   macOS: /Applications/TestArchitect/data/rs/abt.ini
3.  Under the \[SETTINGS\] section, set appropriate values for duplicate hit reduction hour and duplicate hit reduction weekdays.

    -   duplicate hit reduction hour: An integer representing the hour to perform the hit list clearance. Allowable values are 0-23.
    -   duplicate hit reduction weekdays: A comma-delimited list of integers representing the weekdays to perform the hit list clearance. Allowable values are 1-7.

        |Value|Weekday|
        |-----|-------|
        |1|Sunday|
        |2|Monday|
        |3|Tuesday|
        |4|Wednesday|
        |5|Thursday|
        |6|Friday|
        |7|Saturday|

    Some examples:

    -   Hit list clearance scheduled daily at 11:00 pm:

        ```
        [SETTINGS]
        duplicate hit reduction hour=23
        duplicate hit reduction weekdays=1, 2, 3, 4, 5, 6, 7
        ```

    -   Hit list clearance scheduled every Tuesday, Thursday and Saturday at 11:00pm:

        ```
        [SETTINGS]
        duplicate hit reduction hour=23
        duplicate hit reduction weekdays=3, 5, 7
        ```

    -   Hit list clearance is scheduled every Sunday at 2:00am.

        ```
        [SETTINGS]
        duplicate hit reduction hour=2
        duplicate hit reduction weekdays=1
        ```

4.  Save the file.





