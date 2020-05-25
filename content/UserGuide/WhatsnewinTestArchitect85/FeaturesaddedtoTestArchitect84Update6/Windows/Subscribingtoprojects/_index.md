--- 
title: "Subscribing to projects"
linktitle: "Subscribing to projects"
aliases: 
    - /TA_Help/Topics/Projects_and_project_items_subscribe_to_projects.html
---
# Subscribing to projects {#Subscribe_to_projects .task}

How to have your project subscribe to another.

Ensure that your TestArchitect Client is running and connected to repositories containing the projects you want to subscribe to.

To subscribe to one or more projects from a given project:

1.  In the TestArchitect explorer tree panel, right-click the project node you wish to provide a supplier for, then click **Subscribe to**.

    ![](../Images/Tree_subscription_menu.png)

    In the example above, there are three available projects amongst the repositories to which we are currently connected and logged in :

    -   Car Rental Reservation, of the NewRepository repository, which is the project being set up as a subscriber.
    -   Customer Handling, also in the NewRepository repository.
    -   Global Definitions, in the Infrastructure repository.
2.  In the Subscription dialog box, select the projects to be subscribed to from the list of **Available supplier\(s\)**.

    ![](../Images/Dialogs_subscription.png)

3.  Click **\>** to add selected suppliers to the **Selected supplier\(s\)** list.

    **Tip:**

    -   Click **\>\>** to add *all* available suppliers.
    -   Click **<** to remove selected suppliers from the **Selected supplier\(s\)** list, or click **<<** to remove all suppliers from the **Selected supplier\(s\)** list.
    **Remember:** The order in which the suppliers appear in the list of selected suppliers determines the order in which TestArchitect searches for a specified project item definition. If the definition is not found within the subscriber, TestArchitect performs a recursive search from top to bottom through the suppliers list. \(Recursive because suppliers may have other suppliers, thus forming a logical tree structure; see [subscription rules](Project_subscription_rules.html) for details\) . You may modify the order by selecting a project in the **Selected supplier\(s\)** list and clicking the up or down button above the list box. \(Note that the top-to-bottom order of suppliers in the **Selected supplier\(s\)** list corresponds to their left-to-right order in the DFS search diagrams of [subscription rules](Project_subscription_rules.html).\)

    **Restriction:** Circularly linked subscriptions are not allowed. \(For example, project A subscribing to project B, project B to C, and C back to A.\) TestArchitect displays an error message when an illegal subscription is attempted.

    ![](../Images/Circularly_linked_subscription_warning.png)


After subscribing to supplier projects, a project may begin utilizing the supplier’s actions, interface definitions, data sets, and picture checks. Within the editor, these subscribed items will appear in [Content Assist](ug_content_assist.html) pop-ups as highlighted red items, so that they may be easily distinguished from native \(non-subscribed\) items, which are not highlighted.

**Restriction:** Unlike other shared project items, picture checks do not appear in the [Content Assist pop-ups](ug_content_assist.html).

**Tip:** As a convenience when creating [picture handling actions](../../TA_Automation/Topics/bia_picture_handling.html) during editing, you can drag the shared picture check node of a supplier project from the TestArchitect explorer tree, and then drop it into the picture or name arguments of such actions \(see below\).

![](../Images/shared_picture_checks_subscribing.png)

**Parent topic:**[Project subscription](../../TA_Help/Topics/Project_subscription.html)

**Previous topic:**[Introduction to project subscription](../../TA_Help/Topics/Project_subscription_intro.html)

**Next topic:**[Subscription rules](../../TA_Help/Topics/Project_subscription_rules.html)

