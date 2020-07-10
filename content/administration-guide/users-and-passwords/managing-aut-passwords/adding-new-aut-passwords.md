--- 
title: "Adding new AUT passwords"
linktitle: "Adding new AUT passwords"
description: "TestArchitect allows new encrypted passwords to be added to all types of controls for security enhancement."
weight: 1
aliases: 
    - /TA_Administration/Topics/Manage_password_add.html
keywords: "managing passwords, adding"
---

TestArchitect allows new encrypted passwords to be added to all types of controls for security enhancement.

Only members of the administrators and test managers groups have privileges for accessing password management.

1.  Log into a project as a user with an administrator or test manager role. \(See [User administration](/administration-guide/users-and-passwords/user-administration/) for details\).

2.  Right-click the project node and select **Manage Passwords**.

3.  In the Manage Passwords dialog box, enter the encrypted password details.

    ![](/images/TA_Administration/Images/Manage_password_dialog.png)

    -   **Password**: The \(to be encrypted\) password.
    -   **Logical Name**: Name of the password that is to be used in the value argument of the [enter](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/enter) action.
    -   **Interface**: Name of the selected interface.
    -   **Window**: Name of the selected window.
    -   **Window Properties**: \(Optional\) Properties of the selected window.

        {{<tip>}} Separate each window property with a comma \(for example: title=Car Rental-Login, top=272, height=185.\).

    -   **Control**: Name of the selected control.

        {{<note>}} All control types are supported, including text boxes, password fields, etc.

    -   **Control Properties**: \(Optional\) Properties of the selected control.

        {{<tip>}}

        -   Separate each control property with a comma.
        -   For greater convenience, you can retrieve the properties of a control quickly using the **Copy Definition** option, mentioned below, and paste the properties into the **Control Properties** column in the Manage Passwords dialog box. Note, however, that you must delete the double brackets manually after pasting properties into the **Control Properties** column.
            -   Option \#1: Identify method \(see [Identify](/user-guide/interface-definitions/interface-capturing-commands/point-to-identify-tool/) for details\):

                ![](/images/TA_Administration/Images/Dynamic_identifiers_identify.png)

            -   Option \#2: Interface Viewer method \(see [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/) for details\):

                ![](/images/TA_Administration/Images/Dynamic_identifiers_viewer.png)

    -   **Last updated by**: \(Read only\) The user who most recently created/updated the password information. This field is automatically updated.
    {{<note>}}

    -   To move between columns in the dialog box, press Tab or Enter on your keyboard.
    -   The **Window** and **Control** fields are required for each encrypted password as a security measure, ensuring that no unauthorized user can enter the password into a fake window or control.
    -   The **Logical Name** of each password must be unique across all projects.
    -   If the identified window has [variations](/user-guide/variations/), the encrypted password is applied to both the default variation and the keyword variations.
    -   Password management is also applicable to [Project Subscription](/user-guide/projects-and-project-items/projects-in-testarchitect/project-subscription/). Specifically, you can subscribe a project to a supplier's projects and then use password management to create encrypted passwords for controls that belong to the supplier projects.
4.  **Optional:** Instead of adding one encrypted password at a time, you can add multiple encrypted passwords by right-clicking inside the Manage Passwords dialog box and selecting **Add row** from the context menu \(or pressing Ctrl + I on your keyboard\).

5.  Click **Apply** to save.

    {{<tip>}} To cancel any changes you've made, click **Reset**.


The encrypted password is created successfully.

![](/images/TA_Administration/Images/Manage_password_add_result.png)



