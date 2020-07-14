--- 
title: "TA class"
linktitle: "TA class"
description: "A named control class that TestArchitect automatically assigns to a GUI control (or HTML element) of the AUT during intake . The TA class assigned to a control is determined from the control's native ..."
weight: 123
aliases: 
    - /TA_Glossary/Topics/glossaryTAClass.html
keywords: "glossary, TA class"
---

A named control class that TestArchitect automatically assigns to a GUI control \(or HTML element\) of the AUT during [intake](/user-guide/support/glossary-of-terms/window-intake). The TA class assigned to a control is determined from the control's native control class by means of [class mapping](/user-guide/support/glossary-of-terms/class-mapping). TA classes are of two types:

-   [built-in TA classes](/user-guide/support/glossary-of-terms/built-in-ta-class)
-   [user-defined TA classes](/user-guide/support/glossary-of-terms/user-defined-ta-class)

The primary purpose of TA classes is to have a unified set of control classes across application platforms. For each built-in action, TestArchitect determines whether it can be applied to a given control based on that control's TA class.

{{<note>}} The argument name ta class \(all lowercase\) is used throughout TestArchitect, most notably in interface elements. Hence, references in the documentation to the argument name itself are always all lowercase.

