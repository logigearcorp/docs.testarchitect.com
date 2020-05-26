--- 
title: "verify picture"
linktitle: "verify picture"
weight: 23
aliases: 
    - /TA_Automation/Topics/bis_verify_picture.html
---
# verify picture {#bis_verify_picture .reference}

## Description { .section}

Specifies whether the current test is to run in automated or semi-automated mode with respect to [picture checks](bia_check_picture.html).

## Allowable values { .section}

yes
:   Run in semi-automated mode.

:   The [Picture Check](bia_check_picture.md#image_s2w_3zj_vq) dialog box appears at the end a test run if any unmatched pictures were detected during the run. An unmatched picture is one that is captured from the AUT during execution of a check picture action, and where either of the following occurred:

    -   no associated baseline picture was found to exist, or
    -   the bitmap captured from the AUT matched no associated baseline.

no
:   Run in automated mode.

:   The test runs without any need for manual intervention prior to completion. Resolution of unmatched pictures is deferred until a time determined by the user. Specifically, [check picture](bia_check_picture.html) executions failing to produce an automatic Pass result are registered as unverified picture checks, with:

    -   [check picture](bia_check_picture.html) actions failing to find a match being tentatively registered as Failed checks;
    -   [check picture](bia_check_picture.html) actions referencing nonexistent picture checks being tentatively registered as Warnings.

## Default value { .section}

yes

## Example { .section}

**Test Lines**

![](../Images/bis_verify_picture_pgm_3.png)

**Parent topic:**[Other settings](../../TA_Automation/Topics/bis_other.html)

**Previous topic:**[use browser](../../TA_Automation/Topics/bis_use_browser.html)

**Next topic:**[web element matching](../../TA_Automation/Topics/bis_web_element_matching.html)

