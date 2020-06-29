--- 
title: "notice level"
linktitle: "notice level"
description: "Description Specifies the level of runtime problem that should be allowed to interrupt execution to request user intervention. Problems in a category at or below the current value of the notice level ..."
weight: 18
aliases: 
    - /TA_Automation/Topics/bis_notice_level.html
keywords: "built-in settings, notice level, settings, notice level (settings), notice level, specify level of problem that request user's intervention, set level problem that test run should be interrupted, set level problem when users are asked to make choice"
---

## Description

Specifies the level of runtime problem that should be allowed to interrupt execution to request user intervention. Problems in a category at or below the current value of the notice level result in an immediate screen message; those above the current setting result only in a warning included in the final report.

## Allowable values

There are four possible settings:

-   **0**

    Do not interrupt test run, regardless of problem severity.

-   **1**

    Interrupt test run for fatal problems only.

-   **2**

    Interrupt test run for fatal problems and regular errors.

-   **3**

    \(Default\) Interrupt test run for *any* error or warning.


## Default value

3

## Notes

-   When a problem with a high enough severity causes the test to pause, the user is presented with a message box indicating the nature of the problem, and is offered the choices of stopping the test, continuing with the remainder of the test, or debugging the problem.
-   notice level can be set with the dedicated [set notice level](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/error-handling/set-notice-level) action, as well as through the [setting](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/setting) action.




