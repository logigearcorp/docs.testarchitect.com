--- 
title: "TestArchitect does not support this action for the *<typeName\\>* control. Please use another applicable action."
linktitle: "TestArchitect does not support this action for the <typeName\\> control. Please use another applicable action."
weight: 2
aliases: 
    - /TA_FAQ/Topics/0x80010011L.html
---

Error code: 0x80010011L

## Problem

This happens because you use a built-in action to interact with an unsupported control. For example, use table-related built-in actions, such as, [get table cell containing](/TA_Automation/Topics/bia_get_table_cell_containing.html), to access a toolbar control.

## Solution

You can try using [applicable action suggestions](/TA_Help/Topics/ug_applicable_actions.html) for a window or control. Content Assist's applicable actions list provides you with a convenient means of viewing and selecting from the list of actions available for a given UI element.

**Parent topic:**[Diagnosing and resolving automation errors](/TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[Invalid value for argument <argumentName\>. Indexes must start from 1.](/TA_FAQ/Topics/0x8001044AL.html)

**Next topic:**[TestArchitect does not support action <actionName\> for the <typeName\> control since its native class has been mapped to an inappropriate class. Please remap its native class to another class, and then try again](/TA_FAQ/Topics/0x80010018L.html)

