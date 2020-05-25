--- 
title: "TA class"
linktitle: "TA class"
aliases: 
    - /TA_Glossary/Topics/glossaryTAClass.html
---
# TA class {#gl.glossary_entry_TA_class .glossentry}

A named control class that TestArchitect automatically assigns to a GUI control \(or HTML element\) of the AUT during [intake](glossaryWindowIntake.html). The TA class assigned to a control is determined from the control's native control class by means of [class mapping](glossaryClassMapping.html). TA classes are of two types:

-   [built-in TA classes](glossaryBuiltInTAClass.html)
-   [user-defined TA classes](glossaryUserDefinedClass.html)

The primary purpose of TA classes is to have a unified set of control classes across application platforms. For each built-in action, TestArchitect determines whether it can be applied to a given control based on that control's TA class.

**Note:** The argument name ta class \(all lowercase\) is used throughout TestArchitect, most notably in interface elements. Hence, references in the documentation to the argument name itself are always all lowercase.

