--- 
title: "Could not detect your <logicalName\\> device. Either it is currently locked or the re-signed app is inactive."
linktitle: "Could not detect your *<logicalName\\>* device. Either it is currently locked or the re-signed app is inactive."
description: "Error code: 0x80015001L Problem This happens because your mobile device-under test is currently not unlocked, or the re-signed application is not launched in the correct manner. Solution Follow the ..."
weight: 5
aliases: 
    - /TA_FAQ/Topics/0x80015001L.html
keywords: "automation errors, 0x80015001L"
---

Error code: 0x80015001L

## Problem

This happens because your mobile device-under test is currently not unlocked, or the re-signed application is not launched in the correct manner.

## Solution

Follow the steps below and re-run the test after each step:

-   If your device is locked, unlock it.
-   If the re-signed application is inactive on the device, launch the application:
    -   [Android](/Android/Topics/Launching_an_AUT.html)
    -   [iOS](/iOS/Topics/iOS_launching_an_AUT.html)




