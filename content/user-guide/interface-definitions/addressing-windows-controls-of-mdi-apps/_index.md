--- 
title: "Addressing windows, controls of Multiple Document Interface applications"
linktitle: "Addressing windows, controls of MDI apps"
weight: 8
aliases: 
    - /TA_Help/Topics/ug_MDI.html
---

This topic explains how TestArchitect significantly enhances the UI matching process performance for Multiple Document Interface \(MDI\) applications during test automation

Each document in an MDI application is displayed in a separate child window within the client area of the application's main window. A typical MDI example is word-processing applications that allow you to work with multiple text documents at a time.

Specifically, an MDI application has three kinds of windows: a *frame window*, an *MDI client window*, as well as a number of *child windows*.

![](/images//Images/ug_MDI_app.png)

There are two modes available for TestArchitect to address controls of MDI applications: the traditional mode and the Just-In-Time \(JIT\) mode. By default, TestArchitect uses the traditional mode, that is, during automation playback, TestArchitect always explores every MDI-child window and its respective controls to match the window and the control. This mode might cause a slow performance issue, especially when the AUT has a large number of MDI-child windows. To address controls of MDI applications efficiently, TestArchitect maps them as MDI-child windows in the JIT mode \([learn more](ug_JIT_UI_matching.html)\).

**Note:** Addressing controls of MDI applications by using the JIT mode is just fully supported on [Microsoft UI Automation](/TA_Automation/Topics/aut_Using_UIA.html) \(UIA\) technology.

1.  [Mapping controls as MDI-child windows](/TA_Help/Topics/ug_mapping_controls_child_windows.html)  
To address controls of MDI applications, TestArchitect maps the controls as MDI-child windows.
2.  [Just-In-Time UI matching algorithm](/TA_Help/Topics/ug_JIT_UI_matching.html)  
TestArchitect employs a breadth-first search \(BFS\) algorithm to match a desired MDI-child window and its controls.

**Parent topic:**[Interface definitions](/TA_Help/Topics/Interface_def.html)

**Previous topic:**[The Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html)

**Next topic:**[Exporting an interface entity](/TA_Help/Topics/Interface_entity_exporting.html)

