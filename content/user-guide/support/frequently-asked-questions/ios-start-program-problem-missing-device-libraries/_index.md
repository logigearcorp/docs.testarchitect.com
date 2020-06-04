--- 
title: "iOS start program problem: missing device libraries"
linktitle: "iOS start program problem: missing device libraries"
weight: 22
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.ios.start_program.missing_libraries.html
---

## Problem

Upon completion of an automated test, the following error message is reported in the Automation Problem dialog box, or in the test result:

The start program action could not complete due to the device missing libraries required for automation. Please connect the device via USB to an macOS machine with Xcode installed. This will load the libraries automatically.

## Solution

Synchronize essential development libraries with your iOS test device via Xcode:

1.  Connect the iOS device to an macOS computer via USB cable.
2.  You'll be asked to verify that you trust the connected computer. Tap **Trust**.

    ![](/iOS/Topics//images//Images/Trust_computer_dlg.png)

    Start Xcode on the macOS machine and wait for at least 10 seconds, so that the iOS device can obtain the essential development libraries.

    **Tip:** Once you see the device listed under the **Devices** heading in the panel on the left side of the Xcode application, you are assured that the transfer is complete.


**Parent topic:**[Frequently asked questions](/TA_Help/Topics/Support_FAQ.html)

**Previous topic:**[iOS start program problem: device not connected](/TA_FAQ/Topics/faq.tshoot.ios.start_program.device_not_connected.html)

**Next topic:**[iOS start program problem: wrong iTunes version](/TA_FAQ/Topics/faq.tshoot.ios.start_program.itunes_incompatible.html)

