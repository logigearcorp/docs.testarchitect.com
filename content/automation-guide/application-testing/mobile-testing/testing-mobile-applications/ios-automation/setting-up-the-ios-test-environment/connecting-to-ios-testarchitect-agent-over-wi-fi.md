--- 
title: "Connecting to iOS TestArchitect Agent over Wi-Fi"
linktitle: "Connecting to iOS TestArchitect Agent over Wi-Fi"
description: "Establishing a connection between an iOS device and a host machine allows TestArchitect to communicate with iOS mobile applications."
weight: 3
aliases: 
    - /iOS/Topics/iOS_connecting_to_host_machine.html
keywords: "iOS, installing TestArchitect Agent, TestArchitect, iOS Agent, installing, iOS TestArchitect Agent"
---

Establishing a connection between an iOS device and a host machine allows TestArchitect to communicate with iOS mobile applications.

{{<important>}} iOS automation is only supported on Windows or macOS hosts.

Ensure that you have installed [TestArchitect Agent on the iOS device](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/setting-up-the-ios-test-environment/setting-up-ios-automation/re-signing-and-installing-testarchitect-agent) and that you know the IP address of the host machine.

Perform the following procedures to connect the iOS device to the host machine using a Wi-Fi connection:

1.  On the iOS device, enable Wi-Fi and connect to the host machine via Wi-Fi.

2.  On the iOS device, start the TestArchitect Agent.

3.  On the TestArchitect Agent logon screen, enter the host machine IP address and click **Connect**.

    ![](/images/iOS/Images/TA_Agent_iOS.PNG)

    {{<warning>}} If the connection to the host machine cannot be established, wait until the message Cannot connect to the host machine. Please check the connection between your device and the host machine appears \(after about a minute\), then try to connect to the host machine again.


If a connection to the host machine is made successfully, a Connected Successfully message appears on the iOS device.

{{<note>}} To disconnect the iOS device from the host machine, click the **Disconnect** button on the TestArchitect Agent logon screen.



