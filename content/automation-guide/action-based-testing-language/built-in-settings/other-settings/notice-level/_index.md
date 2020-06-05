--- 
title: "notice level"
linktitle: "notice level"
weight: 18
aliases: 
    - /TA_Automation/Topics/bis_notice_level.html
---
keyword: [notice level, specify level of problem that request user's intervention, set level problem that test run should be interrupted, set level problem when users are asked to make choice]
---

# notice level

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
-   notice level can be set with the dedicated [set notice level](bia_set_notice_level.html) action, as well as through the [setting](bia_setting.html) action.

**Parent topic:**[Other settings](/TA_Automation/Topics/bis_other.html)

**Previous topic:**[modal close attempts](/TA_Automation/Topics/bis_modal_close_attempts.html)

**Next topic:**[picture algorithm](/TA_Automation/Topics/bis_picture_algorithm.html)

