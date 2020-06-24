--- 
title: "iOS start program problem: connection not established"
linktitle: "iOS start program problem: connection not established"
description: "Problem Upon completion of an automated test, the following error message is reported in the Automation Problem dialog box, or in the test result: The start program action could not complete since the ..."
weight: 5
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.ios.start_program.connection_not_established_COPY.html
keywords: "Troubleshooting, iOS, problem: Connection not established, start program, troubleshooting"
---

## Problem

Upon completion of an automated test, the following error message is reported in the Automation Problem dialog box, or in the test result:

The start program action could not complete since the connection between your device and the test machine could not be established.

## Solution

-   Check the USB cable connecting the iOS device to the test controller host. Verify that the connectors are free of debris and that the cable is not damaged. If available, replace with a known good cable.
-   Verify that your iOS device is recognized in iTunes:
    1.  If not already done, connect the iOS device to the test controller host \(Windows or macOS\) with a USB cable.
    2.  If asked, as before, to verify that you trust the connected computer: tap **Trust**.
    3.  Start iTunes on the test controller machine and ensure that your connected iOS device appears under **Devices** heading in iTunes.

        {{<note>}} Once your iOS device is recognized in iTunes, TestArchitect is also able to detect it.



