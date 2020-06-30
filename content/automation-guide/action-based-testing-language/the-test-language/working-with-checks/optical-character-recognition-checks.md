--- 
title: "Optical Character Recognition checks"
linktitle: "Optical Character Recognition checks"
description: "How to create a test procedure that verifies text on a control using Optical Character Recognition."
weight: 7
aliases: 
    - /TA_Automation/Topics/Working_with_checks_OCR.html
keywords: "checks, Optical Character Recognition"
---

How to create a test procedure that verifies text on a control using Optical Character Recognition.

Refer to [Optical Character Recognition](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/) for additional details.

-   Suppose you want to check the existence of the Login button prior to selecting the button. To accomplish this, besides the built-in action [check control exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-exists), you can use [check text exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/check-text-exists) which applies an Optical Character Recognition technique. [check text exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/check-text-exists) checks for the existence of Login text displayed on the **Login** button.

    ![](/images/TA_Automation/Images/bia_check_text_exists_aut.png)

-   You can make a test script as follows:

    ![](/images/TA_Automation/Images/bia_check_text_exists_pgm_working_with_checks.png)

-   If the verification succeeds [check text exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/check-text-exists) reports a Passed message; otherwise, it reports a Failed message.

    ![](/images/TA_Automation/Images/bia_check_text_exists_res_working_with_checks.png)





