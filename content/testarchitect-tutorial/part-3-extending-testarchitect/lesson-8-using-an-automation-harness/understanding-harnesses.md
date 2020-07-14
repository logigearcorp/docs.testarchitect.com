--- 
title: "Understanding harnesses"
linktitle: "Understanding harnesses"
description: "Some project requirements cannot be addressed strictly by building upon built-in actions."
weight: 1
aliases: 
    - /TA_Tutorials/Topics/Understanding_harnesses.html
keywords: "harnesses, understanding, understanding harness"
---

Some project requirements cannot be addressed strictly by building upon built-in actions.

Examples of such requirements may include the need to access a specific API, or to perform a complex function like checking the sorting order of a table. TestArchitect enables the creation of custom actions by allowing you to write code for a harness. All TestArchitect tests are executed under the control of a harness, which is a script or program that interprets and executes the action lines of a test sequence. The default harness in TestArchitect is taplayback.exe, which is a binary and cannot be modified. However, TestArchitect does ship with three additional harnesses, written in Python, Java and C\#. These harnesses are designed for user customization.

{{<note>}} In addition to using a harness supplied with TestArchitect, it is possible to create a completely new harness. Such a custom harness may be implemented in any one of a number of common languages, or in the scripting language of almost any third party playback tool. The programming effort is somewhat involved, so if you or your team choose to do this, please contact LogiGear for technical assistance.



