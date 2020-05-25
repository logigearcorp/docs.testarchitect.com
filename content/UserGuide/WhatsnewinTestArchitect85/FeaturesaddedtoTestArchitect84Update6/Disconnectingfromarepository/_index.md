--- 
title: "Disconnecting from a repository"
linktitle: "Disconnecting from a repository"
aliases: 
    - /TA_Help/Topics/ug_Repository_disconnecting.html
---
# Disconnecting from a repository {#task_crw_t3f_s4 .task}

If you no longer need to work on a project, you may disconnect from its host repository.

To disconnect from a repository, follow these steps:

1.  In the TestArchitect explorer tree, right-click the repository node you want to disconnect from, then select **Disconnect From Repository**.

2.  In the Disconnect From Repository dialog box, choose one or both of the following options:

    -   Check in all checked out items: Save to the repository all changes made to local working copies of your project items. \(Refer to the [Check in](Project_items_checkin.html) and [Check out](Project_items_checkout.html) processes for further information.\)
    -   Move all local test results to the repository: Store all local test results to the repository, removing them from the **LOCAL RESULTS** node of the explorer tree.

        **Warning:** Explicitly disconnecting from a repository can have a more drastic effect than simply shutting down TestArchitect. If you select no options, all changes made to checked out project items, and all local test results, are discarded.

3.  Click the **Disconnect** button.


If your disconnect is successful, that repository's node in the TestArchitect explorer tree disappears.

**Parent topic:**[Working with repositories](../../TA_Help/Topics/Getting_started_overview_working_with_repositories.html)

**Previous topic:**[Logging in to a repository](../../TA_Help/Topics/Getting_started_overview_working_with_TestArchitect_client_logging.html)

**Next topic:**[Logging in to a repository as a different user](../../TA_Help/Topics/ug_logging_as_different_user.html)

