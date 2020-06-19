--- 
title: "Handling of non-active open interface entities"
linktitle: "Handling of non-active open interface entities"
description: "The Interface Viewer generally only works with an interface entity in the active tab. Under some circumstances, it makes exceptions."
weight: 3
aliases: 
    - /TA_Help/Topics/Interface_def_Viewer_open_on_top.html
keywords: "active vs. open tabs, TestArchitect client, opening, Interface Viewer"
---

The Interface Viewer generally only works with an interface entity in the active tab. Under some circumstances, it makes exceptions.

It is important to be clear on the distinction between an open tab in TestArchitect's main panel, and the active tab. For an item in TestArchitect to be open means that a tab exists for that item, whereas active refers to the tab whose contents are currently on display:

![](/images/TA_Help/Images/ug_interface_definition29.png)

Obviously, any number of tabs can be open, whereas only one may be active at a time.

When you open the Interface Viewer or perform a Refresh on it, the Viewer looks to see if an interface entity is active. If that is the case, it attempts to match that interface entity with an open application window, regardless of any other interface entities that may be open.

If, however, the type of item in the active tab is something other than an interface entity \(for example, an action or a test module\), the Viewer takes inventory of all the open interface entities. If only one exists, it attempts to match that one to an open application window; if more than one exist, it presents you with the Select an Open Interface Definition dialog box listing them all, and requests you to choose one.

![](/images/TA_Help/Images/Select_an_open_interface_definition_dlg.png)


(/TA_Help/Topics/Interface_def_Viewer_refresh.html)


