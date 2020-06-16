--- 
title: "Reviewing test results with time traveling"
linktitle: "Reviewing test results"
description: "Reviewing test results can assist you in verifying which revision of each related project items is selected to run."
weight: 3
aliases: 
    - /TA_Help/Topics/ug_time_traveling_results.html
keywords: "time traveling, test results, test execution, execution, running, executing, results, backward execution, test result"
---

Reviewing test results can assist you in verifying which revision of each related project items is selected to run.

**Remember:** To use time-traveling execution on any test module belonging to a legacy repository created prior to TestArchitect version [8.2](/TA_ReleaseNotes/DITA_source/Whats_New_8.2.html), you must first upgrade the repository database. \([Learn more](/TA_Administration/Topics/adm_database_upgrade_time_traveling.html).\)

**Note:** It is assumed that you are familiar with test results \(see [Test results](/TA_Help/Topics/Test_result.html) for details\). Only sections related to time-traveling execution are discussed.

## Test result summary

The **Summary** tab display two additional fields when Time-traveling execution is invoked.

-   **Revision timestamp**: The revision executed in practice.
-   **Time traveling**: The specified timestamp.

![](/images/TA_Help/Images/test_results_time_traveling.png)

**Note:**

-   The values of **Revision timestamp** and **Time traveling** are identical, if there is a revision at the specified timestamp.
-   The values of **Revision timestamp** and **Time traveling** are different, if there is no revision existing at the specified timestamp. Therefore, TestArchitect automatically runs the most revision preceding the specified timestamp. \([Learn more](/TA_Help/Topics/ug_time_traveling_execution_rules.html).\)

## Test result details

You can see the details of the executed revision of all related project items on a web browser.

1.  Click **Option** in the upper-right hand corner of the **Result Details** tab.
2.  Select **Show revision timestamp**.

    ![](/images/TA_Help/Images/show_revision_timestamp_web.png)

3.  The detailed revision is displayed underneath the executed project items.

    ![](/images/TA_Help/Images/test_results_time_traveling_details.png)


**Tip:** Hover your mouse over a revision of any project items, and then select it. TestArchitect displays the test procedure of that revision.

![](/images/TA_Help/Images/time_traveling_hyperlink.png)



