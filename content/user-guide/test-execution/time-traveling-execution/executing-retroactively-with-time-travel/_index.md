--- 
title: "Executing retroactively with time travel"
linktitle: "Executing retroactively with time travel"
description: "How to perform retroactive execution of historical revisions of project items."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_time_traveling_execution.html
keywords: "time traveling, selecting revision, test execution, selecting revision, backward, execution, selecting revision, backward, running, executing"
---

How to perform retroactive execution of historical revisions of project items.

To use time-traveling execution on any test module belonging to a legacy repository created prior to TestArchitect version [8.2](/TA_ReleaseNotes/DITA_source/Whats_New_8.2.html), you must first upgrade the repository database. \([Learn more](/TA_Administration/Topics/adm_database_upgrade_time_traveling.html).\)

Use one of the following methods to execute a retroactive revision of a given test module:

-   Option \#1: Execution based on a specific revision.

    1.  Select a test module that you would like to execute, and then click the **Execute** ![](/images/TA_Help/Images/btn.TAC_toolbar.Execute.png) button on the TestArchitect toolbar to invoke the Execute Test dialog box.

    2.  In the Variation Specification panel of the Execute Test dialog box, select the **Time Traveling** check box.

        ![](/images/TA_Help/Images/execution_time_traveling.png)

    3.  In the **Time Traveling** box, specify a revision you wish to execute backward by either one of the following ways:

        -   Enter directly your desired a timestamp in the format of `MM/dd/yyyy hh:mm:ss.mmm`. For example: 04/09/2015 22:04:27.446.

            {{<remember>}} Ensure that the input timestamp must not earlier than the creation date of the test module; otherwise, TestArchitect shows a warning message dialog box when you run the test.

            ![](/images/TA_Help/Images/Unmatched_TM_time_traveling.png)

        -   Alternatively, click the **Select Timestamp** button. The Select Timestamp dialog box appears and shows every project item along with their available revisions.

            ![](/images/TA_Help/Images/execution_time_traveling_1.png)

            1.  \(Optional\) You may apply [filtering](/TA_Help/Topics/ug_revision_history_filtering.html) to narrow down the set of displayed revisions.

                ![](/images/TA_Help/Images/execution_time_traveling_filtering.png)

            2.  In the list of revisions, select a specific timestamp to execute backward.
            3.  Click **OK**.
        In the Execute Test dialog box, the selected revision is displayed in the **Time Traveling** box.

        ![](/images/TA_Help/Images/execution_time_traveling_2.png)

    4.  Click **OK** to run the test with the specified revision.

        {{<attention>}} If your current repository database is a legacy one created prior to TestArchitect version [8.2](/TA_ReleaseNotes/DITA_source/Whats_New_8.2.html), and has not been [upgraded for time traveling](/TA_Administration/Topics/adm_database_upgrade_time_traveling.html), you are presented with the following message: This repository has not yet been upgraded for time travel functionality. Please contact your administrator to upgrade it before using it with time traveling.

-   Option \#2: Execution based on a [revision tag](/TA_Help/Topics/ug_revision_tag.html), that is, a revision is associated with a specific AUT version\(s\).

    1.  Select a test module that you would like to execute, and then click the **Execute** ![](/images/TA_Help/Images/btn.TAC_toolbar.Execute.png) button on the TestArchitect toolbar to invoke the Execute Test dialog box.

    2.  In the Variation Specification panel of the Execute Test dialog box, click the **Select Version** button.

        ![](/images/TA_Help/Images/execution_time_traveling_7.png)

    3.  In the Select Version dialog box, select an AUT version\(s\) associated with a given revision that you want to execute backward.

        The **Selected Version** box displays selected version\(s\).

        ![](/images/TA_Help/Images/execution_time_traveling_3.png)

        {{<tip>}} To quickly deselect all selected versions, click the **Unchecked All** button.

    4.  Click **OK**.

        The **AUT Version** box displays the selected version\(s\), and **Time Traveling** box automatically fills in the associated revision.

        ![](/images/TA_Help/Images/execution_time_traveling_5.png)

    5.  Select the **Time Traveling** check box to execute the automated test with the selected revision.

        ![](/images/TA_Help/Images/execution_time_traveling_6.png)

        {{<important>}} If you do not select the **Time Traveling** check box, TestArchitect ignores the Time Traveling feature, and executes the test with [linked variation\(s\)](/TA_Help/Topics/Variations_rules_executing_2_3.html) as usual.

    6.  Click **OK** to run the test with the specified revision.

        {{<attention>}} If your current repository database is a legacy one created prior to TestArchitect version [8.2](/TA_ReleaseNotes/DITA_source/Whats_New_8.2.html), and has not been [upgraded for time traveling](/TA_Administration/Topics/adm_database_upgrade_time_traveling.html), you are presented with the following message: This repository has not yet been upgraded for time travel functionality. Please contact your administrator to upgrade it before using it with time traveling.


When you generate a batch file \(by clicking the **Generate Batch File** button in the Execute Test dialog box\) with time traveling selected, the selected timestamp is written as a new parameter, /rev, to the batch file. \([Learn more](/TA_Help/Topics/Test_exec_cmd.html)\).

{{<caution>}}

If your current database is legacy – that is, created prior to TestArchitect version 8.2 – and has not yet been [upgraded for time traveling](/TA_Administration/Topics/adm_database_upgrade_time_traveling.html) it, you are presented with the following message when you run the batch file: This repository has not yet been upgraded for time travel functionality. Please contact your administrator to upgrade it before using it with time traveling..

To understand in detail the rules of time-traveling execution, refer to [Rules of time-traveling execution](/TA_Help/Topics/ug_time_traveling_execution_rules.html).



