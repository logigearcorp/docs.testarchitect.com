--- 
title: "unverified picture check"
linktitle: "unverified picture check"
weight: 149
aliases: 
    - /TA_Glossary/Topics/glossaryUnverifiedPictureCheck.html
---
# unverified picture check {#gl.unverified_picture_check .glossentry}

A given invocation of the [check picture](../../TA_Automation/Topics/bia_check_picture.html) action that has failed to result in a match, and for which no resolution has yet been established.

A check picture action line specifies a picture check by name. Failure to produce a match can be due to the test image not matching any baseline of the specified picture check \(a FAIL condition\), or to the named picture check not existing \(a WARNING condition\). In either case, the results upon completion of testing are regarded as tentative, pending some action on the part of the user. That is, in either case, the user is afforded the opportunity to establish a new baseline image from the test image, allowing the check to retroactively PASS; or to accept the FAIL/WARNING results unaltered.

