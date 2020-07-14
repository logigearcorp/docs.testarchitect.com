--- 
title: "precondition, action"
linktitle: "precondition, action"
description: ""
weight: 96
aliases: 
    - /TA_Glossary/Topics/glossaryPreconditionsAction.html
keywords: "glossary, precondition, action, action precondition"
---

A test that must be satisfied before a built-in action may carry out its primary function. In some cases, multiple preconditions may apply to a given action.

Example: The action [check control property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-property) compares a given control's property value against an expected value. But before the action can carry out its comparison, it must ensure a\), that the specified host window exists, and then b\), that the specified control exists. These are the preconditions. \(The actual requirement that the two values match is the action's *condition*, as opposed to a precondition.\)
