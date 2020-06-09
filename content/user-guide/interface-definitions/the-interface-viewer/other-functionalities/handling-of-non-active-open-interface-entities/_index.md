--- 
title: "Handling of non-active open interface entities"
linktitle: "Handling of non-active open interface entities"
weight: 3
aliases: 
    - /TA_Help/Topics/Interface_def_Viewer_open_on_top.html
---

The Interface Viewer generally only works with an interface entity in the active tab. Under some circumstances, it makes exceptions.

It is important to be clear on the distinction between an open tab in TestArchitect's main panel, and the active tab. For an item in TestArchitect to be open means that a tab exists for that item, whereas active refers to the tab whose contents are currently on display:

![](/images//Images/ug_interface_definition29.png)

Obviously, any number of tabs can be open, whereas only one may be active at a time.

When you open the Interface Viewer or perform a Refresh on it, the Viewer looks to see if an interface entity is active. If that is the case, it attempts to match that interface entity with an open application window, regardless of any other interface entities that may be open.

If, however, the type of item in the active tab is something other than an interface entity \(for example, an action or a test module\), the Viewer takes inventory of all the open interface entities. If only one exists, it attempts to match that one to an open application window; if more than one exist, it presents you with the Select an Open Interface Definition dialog box listing them all, and requests you to choose one.

![](/images//Images/Select_an_open_interface_definition_dlg.png)

**Parent topic:**[Other functionalities](/TA_Help/Topics/Interface_def_Viewer_other_functionalities.html)

**Previous topic:**[Refresh function \(Interface Viewer\)](/TA_Help/Topics/Interface_def_Viewer_refresh.html)

**Next topic:**[HTML tags filter \(Interface Viewer\)](/TA_Help/Topics/Interface_def_Viewer_HTML_tag_filter.html)

