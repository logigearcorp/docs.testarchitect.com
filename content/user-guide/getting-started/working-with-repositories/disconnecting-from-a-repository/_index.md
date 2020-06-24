--- 
title: "Disconnecting from a repository"
linktitle: "Disconnecting from a repository"
description: "If you no longer need to work on a project, you may disconnect from its host repository."
weight: 4
aliases: 
    - /TA_Help/Topics/ug_Repository_disconnecting.html
keywords: "repositories, disconnecting, disconnecting from a repository"
---

If you no longer need to work on a project, you may disconnect from its host repository.

To disconnect from a repository, follow these steps:

1.  In the TestArchitect explorer tree, right-click the repository node you want to disconnect from, then select **Disconnect From Repository**.

2.  In the Disconnect From Repository dialog box, choose one or both of the following options:

    -   Check in all checked out items: Save to the repository all changes made to local working copies of your project items. \(Refer to the [Check in](/TA_Help/Topics/Project_items_checkin.html) and [Check out](/TA_Help/Topics/Project_items_checkout.html) processes for further information.\)
    -   Move all local test results to the repository: Store all local test results to the repository, removing them from the **LOCAL RESULTS** node of the explorer tree.

        {{<warning>}} Explicitly disconnecting from a repository can have a more drastic effect than simply shutting down TestArchitect. If you select no options, all changes made to checked out project items, and all local test results, are discarded.

3.  Click the **Disconnect** button.


If your disconnect is successful, that repository's node in the TestArchitect explorer tree disappears.




