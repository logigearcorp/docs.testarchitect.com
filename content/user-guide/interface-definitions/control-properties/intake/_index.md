--- 
title: "Intake"
linktitle: "Intake"
description: "TestArchitect scans application windows for their controls during both the identification and playback phases of testing, to establish the controls' TA classes, TA properties and TA property values. This is called the intake process."
weight: 3
aliases: 
    - /TA_Help/Topics/Interface_def_intake.html
keywords: "intake, controls, load invisible controls (built-in setting), TA properties, intake of"
---

TestArchitect scans application windows for their controls during both the identification and playback phases of testing, to establish the controls' TA classes, TA properties and TA property values. This is called the intake process.Different factors can contribute to different results being obtained for some properties of a control at different stages in development and testing. Hence, it is important to understand how the intake process works.

Generally, when developing your test, you use the Interface Viewer or **Identify** tool to create your interface definitions. During this process, for each given window or dialog box, TestArchitect performs an intake of the controls, which involves scanning the controls, reading their properties, and thus deriving the [TA classes](/TA_Glossary/Topics/glossaryTAClass.html) and [TA properties](/TA_Glossary/Topics/glossaryTAProperty.html) for them. You then select which of those controls, and which of their TA properties, to capture for your interface definition.

{{<note>}} Most TA property values for a given control are obtained directly from the control's [native properties](/TA_Glossary/Topics/glossaryNativeProperty.html). Notable exceptions are the [global pos](/TA_Help/Topics/Interface_def_global_pos.html) and [anchor pos](/TA_Help/Topics/prop_anchor.example_01.html) properties, which are based on a control's class and physical and logical positions in the window.

Because an interface definition generally does not reference the native properties of the UI elements of an application window, the intake process must be repeated during testing, prior to any attempt at interfacing. Without that, your interface definitions, with their references to TA classes and TA properties, would have no meaning. So, for instance, before your test attempts to interact with the controls of, say, the Car Rental-Login window, TestArchitect must scan the window \(assuming it is present\), and again establish the TA classes and TA property-value pairs of each control, which it stores in a memory cache.

Intake for a given window's controls can occur at various times during a test. In most cases, it takes place only once, upon the first attempt to interface with the window. So, for example, say your test encounters the following action lines for logging into the application under test:

![](/images/TA_Help/Images/Interface_def.intake.01.png)

Upon seeing the reference on line 15 to a window argument with a value of car login, TestArchitect goes out and grabs the interface entity with that name:

![](/images/TA_Help/Images/Interface_def.intake.02.png)

The automation then establishes which open window is being referenced \(the one with the title=Car Rental-Login property-value pair\), and examines its cache to see whether it has already performed an intake of that window's controls. If not, it then performs the intake.

{{<note>}} You may be wondering how TestArchitect is able to identify the correct window in the first place, given the fact that title=Car Rental-Login is a TA property-value pair, not a native property-value pair. It is indeed possible because, at the start of test execution, TestArchitect performs a system intake, in which it surveys all the windows currently active on the test system, establishing their TA properties and values, and retains that information in cache. Furthermore, it refreshes that information every time it is asked to interface with a new window that is not currently in its cache, given the fact that a typical test may involve constant openings and closings of windows. \(Note also the distinction between a system intake, in which TestArchitect resolves and stores the TA property-values for all open windows, and a window intake, which is performed, on an as-needed basis, on all the available controls of a given window.\)

## intake action

Under some circumstances, you may wish to force a refresh of TestArchitect's cache of a given window's controls during the test. This may occur when some action has been taken which is expected to modify the controls present in the window, or modify their properties \(such as making a control visible\). You can perform this refresh with TestArchitect's built-in action, [intake](/TA_Automation/Topics/bia_intake.html).

## Intake behavior

While some windows and dialog boxes have only a few controls, others may hold quite a large number of controls. Hence, performing an intake of all the controls of a window can take a considerable amount of time. Test performance can take a hit, especially if intakes are performed on several control-intensive windows, or re-performed on the same window multiple times. For that reason, plus the fact that not all controls of a window always need to be interfaced with, TestArchitect's default behavior is to limit the number of controls it processes during an intake. It does this by two means:

-   **Ignoring invisible controls**. In this context, invisible controls are those for which one or both of the following are true:
    -   the visible TA property = false
    -   the width and height properties are both equal to or less than zero.
-   **Ignoring [container class control](/TA_Help/Topics/Interface_def_container_class.html) contents**. Some controls, such as those of class Treeview and Table, can contain a potentially large number of child controls. In many cases, a test may have no need to access such child controls. Hence the default behavior of TestArchitect during an intake is to regard any container class control as “locked”; TestArchitect will capture the container control itself, but skips over its contents.

## Overcoming default intake behavior

**invisible controls**: During testing, if you have a need to interface with controls that are invisible \(as per the above definition of *invisible*\), TestArchitect provides the built-in setting [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html). Note that load invisible controls is a setting, not an action, so it has no immediate effect. Its default value is no. By setting it to yes, the next time an intake needs to be performed on a given window, the window's invisible controls are included in the intake. Moreover, with this setting switched from no to yes, TestArchitect understands that any set of window controls already in its intake cache is outdated, hence for each given window a new intake is performed the next time an action line attempts to access a control in that window.

{{<warning>}} Changing the setting of load invisible controls generally changes a given window's set of controls eligible for intake. It is important to be aware that the next intake for the window may well cause some or all of [global pos](/TA_Help/Topics/Interface_def_global_pos.html) and/or [anchor pos](/TA_Help/Topics/prop_anchor.example_01.html) properties to have the index portions of their values change accordingly.

{{<note>}} You may also elect to capture invisible controls during the identification stage, when you are creating your interface definitions. Just select [**View** \> **Show Invisible Controls**](/TA_Help/Topics/Interface_def_Viewer_show_invisible_controls.html) in the Interface Viewer.

**container class controls**: As mentioned, TestArchitect's default behavior is to bypass the intake of controls that belong to container class controls. There are times, however, when your test does need access to such child controls. During test creation, when you capture controls via the Interface Viewer or Identify function, you can unlock any container class in order to gain access to the contents of any control of that class. \(Note that you don't unlock individual controls; you unlock *all* controls of a given container class, though only within the confines of a given window.\) Unlocking one or more container classes of a window and then saving to an interface entity causes an interface entity setting to be written to the interface definition:

![](/images/TA_Help/Images/Interface_def.intake.03.png)

At runtime, during an intake on this window, this setting instructs TestArchitect to go ahead and retrieve all the child controls of the specified container classes. \(For more on container classes, see [Container classes](/TA_Help/Topics/Interface_def_container_class.html).\)

{{<warning>}} As with invisible controls, be aware that the unlocking of container classes has an impact on the values generated for the global pos properties of controls, and this effect is not limited to the child controls of the container objects.



