--- 
title: "verify picture"
linktitle: "verify picture"
description: "Description Specifies whether the current test is to run in automated or semi-automated mode with respect to picture checks . Allowable values yes Run in semi-automated mode. The Picture Check dialog ..."
weight: 23
aliases: 
    - /TA_Automation/Topics/bis_verify_picture.html
keywords: "built-in settings, verify picture, settings, verify picture (settings), verify picture, specify whether to verify picture in automated mode or semi-automated mode, determine which mode is used to check picture"
---

## {{< expand >}} Description

Specifies whether the current test is to run in automated or semi-automated mode with respect to [picture checks](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/check-picture).

## {{< expand >}} Allowable values

-   **yes**

    Run in semi-automated mode.

    The [Picture Check](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/check-picture#image_s2w_3zj_vq) dialog box appears at the end a test run if any unmatched pictures were detected during the run. An unmatched picture is one that is captured from the AUT during execution of a check picture action, and where either of the following occurred:

    -   no associated baseline picture was found to exist, or
    -   the bitmap captured from the AUT matched no associated baseline.
-   **no**

    Run in automated mode.

    The test runs without any need for manual intervention prior to completion. Resolution of unmatched pictures is deferred until a time determined by the user. Specifically, [check picture](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/check-picture) executions failing to produce an automatic Pass result are registered as unverified picture checks, with:

    -   [check picture](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/check-picture) actions failing to find a match being tentatively registered as Failed checks;
    -   [check picture](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/check-picture) actions referencing nonexistent picture checks being tentatively registered as Warnings.

## {{< expand >}} Default value

yes

## {{< expand >}} Example

**Test Lines**

![](/images/TA_Automation/Images/bis_verify_picture_pgm_3.png)




