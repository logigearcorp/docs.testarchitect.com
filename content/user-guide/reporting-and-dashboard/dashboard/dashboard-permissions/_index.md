--- 
title: "Dashboard permissions"
linktitle: "Dashboard permissions"
weight: 7
aliases: 
    - /TA_Help/Topics/Dashboard_authentication_permissions.html
---

The ability to add, modify and delete items in a Dashboard session depends on the credentials of the logged-in user.

## Group permissions

The level of control a user has over a Dashboard's pages, panels, and data profiles depends on the user's credentials and the permissions associated with those credentials. Dashboard has three groups of authenticated users:

-   Administrator - Has full control over content in a Dashboard instance, including creating, modifying, deleting and saving Dashboard pages, panels, and data profiles from all users.
-   Guest - May only view a Dashboard's panels, and cannot modify any item in the Dashboard.
-   Other - Full control over any content which the user owns in the Dashboard instance, including creating, modifying, deleting and saving pages, panels, and data profiles. Users of this group can modify the contents and settings of panels in Dashboard instances belonging to other users, but those modifications are transient. Any changes made to the Dashboard panels belonging to other users are effective for the current session only, and those modifications are discarded after the session terminates.

## Page permissions

Each logged-in user may define and customize pages in a Dashboard session. The user's ability to add, modify, and delete a page depends on his assigned group permission and whether or not the page is set as public or private when created. The *administrator* can add, modify and delete *all* public and private pages belonging to any user. By contrast, the *guest* user can only view public pages and cannot add, modify or delete any pages. The *other* user can add, modify, and delete pages \(both public and private\) which belong to him. He can view public pages belonging to other users, but he cannot modify or delete them. Only the owner \(and the administrator\) can add, view, modify, and delete private pages.

## Panel permissions

After log on, the *administrator* can add, modify and delete all panels belonging to any user. By contrast, a *guest* user can only view panels and cannot add, modify or delete any panels. A user belonging to an *other* group can add, modify and delete his own panels, but he cannot modify or delete panels belonging to others.

The owner of a panel and the *administrator* can edit and save the settings for the modified panel by selecting the **Save current chart settings** check box at the bottom of the Edit Panel dialog box. If that check box is cleared, the changes made to the panel will take effect only in the current session and all modified settings will be discarded after the session terminates.

**Parent topic:**[Dashboard](/TA_Help/Topics/Dashboard.html)

**Previous topic:**[Category and series](/TA_Help/Topics/Dashboard_category_series.html)

**Next topic:**[Lesson \#9: Creating Dashboard chartsDashboard tutorials](/TA_Help/Topics/Dashboard_tutorials.html)

**Related information**  


[Dashboard panels](/TA_Help/Topics/Dashboard_panels.html)

[Dashboard pages](/TA_Help/Topics/Dashboard_pages.html)

