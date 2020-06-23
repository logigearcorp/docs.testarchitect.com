--- 
title: "Adding test results automatically"
linktitle: "Adding test results automatically"
description: "Rather than manually adding test results to a repository, you can have TestArchitect store them automatically, based on pre-defined conditions."
weight: 2
aliases: 
    - /TA_Help/Topics/Test_result_storing_automatically.html
keywords: "test results, automatically, adding to repository"
---

Rather than manually adding test results to a repository, you can have TestArchitect store them automatically, based on pre-defined conditions.

{{<important>}} Note that, if you add test results to the repository automatically, all [unverified picture checks](/TA_Glossary/Topics/glossaryUnverifiedPictureCheck.html) will be totally discarded. Whereas, adding test results to the repository manually preserves all picture checks.

Perform the following steps:

1.  Select the test module you want to execute.

{{<note>}} The test module can be executed [normally](/TA_Help/Topics/Test_result.html), in a [serial run](/TA_Help/Topics/Test_result.html), or from another test module using the [run test](/TA_Automation/Topics/bia_run_test.html) built-in action.

2.  Click **Execute** ![](/images/TA_Help/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

    The Execute Test dialog box appears.

3.  Click the **Advanced Setting** tab.

4.  Select the **Automatically add result\(s\) to repository** check box.

5.  Specify which types of test results are to be automatically stored to the repository after execution completes.

    -   **By result**: Limit the results stored to the repository in accordance with the following check box selections:
        -   [**Passed**](/TA_Help/Topics/ug_test_results_status.html): Passed test results are stored.
        -   [**Passed with Warnings/Errors**](/TA_Help/Topics/ug_test_results_status.html): Passed test results with warnings/errors status are stored.
        -   [**Failed**](/TA_Help/Topics/ug_test_results_status.html): Failed test results are stored.
        -   [**Passed with known bug**](/TA_Help/Topics/ug_test_results_status.html): Test results that passed, but are marked [known bugs](/TA_Help/Topics/Bugs_working_known_bug.html) whose outcomes have been ignored, are stored.
        -   [**Not Finished**](/TA_Help/Topics/ug_test_results_status.html): Incomplete test results.
{{<tip>}} If you select more than one check box, the conditions will be OR'd together. For example, by selecting the **Passed** and **Passed with Warnings/Errors** check boxes, the repository receives all the results with Passed and Passed with Warnings/Errors outcomes, and no others.

    ![](/images/TA_Help/Images/Execute_test_auto_add_result_to_repo_1.png)

6.  Click ![](/images/TA_Help/Images/btn.browse-ellipsis.01.png) next to the **Select a repository destination** box to specify where the test results are to be stored.

7.  In the Select a Destination dialog box, select a location, and then click **OK**.

{{<tip>}} Alternatively, if you'd like to store repository results into a folder dynamically, that is, the folder does not exist. You can manually enter several pre-defined macro variables, mentioned in the table below, into the **Select a repository destination** box in order to name a new result folder on-the-fly.

    |Macro variables|Description|Output \(example\)|
    |---------------|-----------|------------------|
    |\{year\}|Gets the current year|2017|
    |\{month\}|Gets the current month|08|
    |\{day\}|Get the current date|09|
    |\{today\}|Get today's date in the form of mm-dd-yyyy|08-09-2017|

    For example: You specify \{today\} to name a new result folder on-the-fly which contains a repository result.

    ![](/images/TA_Help/Images/add_results_to_repo_macros.png)

8.  Click **Execute** to begin the execution.

    The selected test modules are executed. Once execution completes, the test results that match the specified conditions are automatically stored to the specified repository location.


-   When generating a batch file, the above selected conditions are written as new parameters \(see [Executing tests from the command line](/TA_Help/Topics/Test_exec_cmd.html) for details\).
-   The two parameters, -upc and -up, are written to the batch file. \([Learn more](/TA_Help/Topics/Test_exec_cmd.html#plentry.paramters_up).\)
-   In the batch file, the selected conditions are specified as a comma-delimited list, e.g. /upc "Passed, WE".

{{<important>}} Note that, if you add test results to the repository automatically, all [unverified picture checks](/TA_Glossary/Topics/glossaryUnverifiedPictureCheck.html) will be totally discarded. Whereas, adding test results to the repository manually preserves all picture checks.



