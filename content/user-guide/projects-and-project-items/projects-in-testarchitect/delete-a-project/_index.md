--- 
title: "Delete a project"
linktitle: "Delete a project"
weight: 2
aliases: 
    - /TA_Help/Topics/Projects_and_project_items_delete_project.html
---

Deleting a project removes the entire project, including actions, tests, data, results, etc., from the repository.

Ensure that the following requirements are met before deleting a project:

-   TestArchitect Client is running and connected to the repository where the project resides.
-   In the event that the repository hosting the project to be deleted is serving as a primary/replication repository, disconnect the primary-replication relationship. \([Learn more](/TA_Administration/Topics/adm_Removing_primary_repication_repository_main.html).\)

To delete a project, do the following:

1.  In the TestArchitect explorer tree, right-click the project node you want to delete, and then select **Delete**.

    **Fastpath:** Press Delete on your keyboard.

    ![](/images//Images/Projects_delete_project.png)

    **Important:**

    In the event that the repository hosting the project to be deleted is serving as a primary/replication repository, TestArchitect shows an error message dialog box, and is unable to delete the project. Please disconnect the primary-replication relationship, and then try again. \([Learn more](/TA_Administration/Topics/adm_Removing_primary_repication_repository_main.html).\)

    ![](/images//Images/delete_project_replication_repo.png)

2.  In the Delete Project dialog box, click **Delete**.

    ![](/images//Images/Delete_project_dlg.png)

3.  In the confirmation prompt, click **Yes**.

    ![](/images//Images/Delete_project_confirmation.png)


The project and its child items are deleted successfully from the repository.

**Parent topic:**[Projects in TestArchitect](/TA_Help/Topics/Projects_def.html)

**Previous topic:**[Create a new project](/TA_Help/Topics/Projects_and_project_items_create_project.html)

**Next topic:**[Rename a project](/TA_Help/Topics/Projects_and_project_items_rename_project.html)

