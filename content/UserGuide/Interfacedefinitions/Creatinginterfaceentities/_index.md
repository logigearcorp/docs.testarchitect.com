--- 
title: "Creating interface entities"
linktitle: "Creating interface entities"
weight: 5
aliases: 
    - /TA_Help/Topics/Interface_def_Adding.html
---
# Creating interface entities {#Interface_def_adding .task}

How to create an interface entity, which is used to represent such AUT elements as desktop windows, browser windows, and dialog boxes.

Choose one of the two following methods to create an interface entity:

-   **Option 1**:

    1.  Right-click an interface, and then select **New Interface Entity**.

        **Fastpath:** Ctrl + N

    2.  Enter descriptive information for the interface entity:

        -   **Name**: The name of the interface entity.
        -   **Description**: \(Optional\) Short description for the interface entity.
    3.  Click **Create**.

-   **Option 2**:

    1.  Open the interface list view, that is, double-click the **Interfaces** node on the TestArchitect explorer tree.

    2.  Select an interface, and then right-click the selection.

    3.  Select **New Interface Entity** from the context menu.

        The New Interface Entity dialog box appears.

    4.  Enter descriptive information for the interface entity:

        -   **Name**: Name of the interface entity.
        -   **Description**: \(Optional\) Short description for the interface entity.
    5.  Click **Create**.


A new interface entity is added to the project under the selected interface, and the editor opens with a blank worksheet view of the interface entity.

**Note:** In the editor, you can add an [interface element](../../TA_Automation/Topics/bia_interface_element.html) line for each item in your interface entity. However, manually entering interface elements is not an efficient way to develop your interface. Choosing TA names might be straightforward enough, but manually determining the identifying properties of each physical element and entering them in the editor can be tedious and prone to error. To address that problem, TestArchitect includes an [Interface Viewer](Interface_def_Viewer.html) tool and assorted [toolbar icons](Interface_def_client_interface_tool.html) to allow you to visually map the interface entity and its elements.

**Parent topic:**[Interface definitions](../../TA_Help/Topics/Interface_def.html)

**Previous topic:**[Setting a default interface](../../TA_Help/Topics/Interface_def_set_default_interface.html)

**Next topic:**[Interface capturing commands](../../TA_Help/Topics/Interface_def_client_interface_tool.html)

