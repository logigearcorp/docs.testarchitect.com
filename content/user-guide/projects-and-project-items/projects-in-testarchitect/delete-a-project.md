--- 
title: "Delete a project"
linktitle: "Delete a project"
description: "Deleting a project removes the entire project, including actions, tests, data, results, etc., from the repository."
weight: 2
aliases: 
    - /TA_Help/Topics/Projects_and_project_items_delete_project.html
keywords: "projects, deleting, deletion"
---

Deleting a project removes the entire project, including actions, tests, data, results, etc., from the repository.

Ensure that the following requirements are met before deleting a project:

-   TestArchitect Client is running and connected to the repository where the project resides.
-   In the event that the repository hosting the project to be deleted is serving as a primary/replication repository, disconnect the primary-replication relationship. \([Learn more](/administration-guide/repository-server-management/replication-repositories/breaking-primary-replication-relationship/).\)

To delete a project, do the following:

1.  In the TestArchitect explorer tree, right-click the project node you want to delete, and then select **Delete**.

    **Fastpath:** Press Delete on your keyboard.

    ![](/images/TA_Help/Images/Projects_delete_project.png)

    {{<important>}}

    In the event that the repository hosting the project to be deleted is serving as a primary/replication repository, TestArchitect shows an error message dialog box, and is unable to delete the project. Please disconnect the primary-replication relationship, and then try again. \([Learn more](/administration-guide/repository-server-management/replication-repositories/breaking-primary-replication-relationship/).\)

    ![](/images/TA_Help/Images/delete_project_replication_repo.png)

2.  In the Delete Project dialog box, click **Delete**.

    ![](/images/TA_Help/Images/Delete_project_dlg.png)

3.  In the confirmation prompt, click **Yes**.

    ![](/images/TA_Help/Images/Delete_project_confirmation.png)


The project and its child items are deleted successfully from the repository.




