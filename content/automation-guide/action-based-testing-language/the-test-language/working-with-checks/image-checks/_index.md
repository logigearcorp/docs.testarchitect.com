--- 
title: "Image checks"
linktitle: "Image checks"
description: "How to create test procedures that compare images."
weight: 5
aliases: 
    - /TA_Automation/Topics/Working_with_checks_picture.html
keywords: "checks, images"
---

How to create test procedures that compare images.

One of the most common testing tasks is to verify that an application window or control is displayed correctly. This can be done by comparing the actual image of the window or control against a previously captured baseline image saved from [regular picture checks](/TA_Help/Topics/Projects_and_tests_picture_check.html) or [shared picture checks](/TA_Help/Topics/Projects_and_tests_picture_check.html).

TestArchitect includes various built-in actions that let you compare images and check for the existence of images. See [Picture Handling](/TA_Automation/Topics/bia_picture_handling.html) for full details.

-   For example, suppose you want to verify a displayed image against a stored baseline image. You can use the [check picture](/TA_Automation/Topics/bia_check_picture.html) built-in action.
-   You can make the test procedure as follows:

    ![](/images/TA_Automation/Images/bia_check_picture_pgm.png)

-   This example applies to the Chevrolet Monte Carlo, the first car shown in the View Cars window of the Car Rental sample application. If you want to try this example yourself, open the View Cars window \(or let automation open it for you\), and select Chevrolet Monte Carlo. The picture in the upper right panel \(a Java Swing JLabel control\) looks something like that below:

    ![](/images/TA_Automation/Images/bia_check_picture_aut_1.png)

-   If there is no existing baseline for this image, the Picture Check – New Picture window is displayed after test execution.

    ![](/images/TA_Automation/Images/bia_check_picture_aut_3.png)

-   If, based on the question that is displayed, you can see that the correct picture is not shown in tab **Current**, then click **Fail**. If it is correct, click **Pass**. This results in 1\), this particular check being passed for the test, and 2\), the newly-captured picture being saved for use as a reference baseline in future test executions. Such stored references are known as baseline pictures.
-   After storage of the baseline picture, you can execute the test again, for example on a newer version of the application under test, to re-verify the picture. If the displayed picture matches the stored baseline picture \(or any one of the baselines\), the result is Passed and there is no need to verify the picture visually.

    ![](/images/TA_Automation/Images/bia_check_picture_res.png)

-   If the newly-captured picture does not match the baseline, the window Picture Check – Change Picture appears.

    ![](/images/TA_Automation/Images/bia_check_picture_aut_9.png)

-   In this window, you can choose one of the following options:
    -   **Fail**: report this check as failed
    -   **Pass, this is the new baseline**: overwrite the old baseline
    -   **Pass, but keep the original**: report this check as passed, although TestArchitect detects differences between two images.
    -   **Pass, save as a baseline variation**: save the current picture as an older baseline with variation.




