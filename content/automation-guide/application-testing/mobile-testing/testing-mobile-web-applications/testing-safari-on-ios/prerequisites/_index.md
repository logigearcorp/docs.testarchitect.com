--- 
title: "Prerequisites"
linktitle: "Safari iOS testing prerequisites"
description: "Guides to setting up Safari iOS automation under TestArchitect."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_Safari_prerequesites.html
keywords: "mobile web testing, Safari, prerequisites, Safari testing, iOS"
---

Guides to setting up Safari iOS automation under TestArchitect.

**Remember:**

-   iTunes 11.1 or later is installed on the machine to be used as the test controller \(this may be a Windows or macOS machine\).

    **Important:** iTunes 12.7 no longer has an App store, which means you no longer can install .ipa iOS apps within iTunes \([learn more](https://www.macworld.com/article/3230135/software-entertainment/how-to-install-itunes-1263-and-replace-itunes-127.html)\). If you want to keep your ways, you can either install iTunes 12.6.3 and get back access to the App store, or use the special version of iTunes at [here](https://support.apple.com/en-gb/HT208079).

-   On macOS machine, turn off the Energy Saver sleep and idle modes. Specifically, set the **Computer sleep** slider to Never. \([Learn more](https://support.apple.com/en-gb/HT201714).\) This ensures that your macOS machine does not automatically slip into a sleep or idle state while the automated test is running, which would cause the test to fail.

Additionally, ensure the you take the following steps:

1.  [Configuring iOS devices and macOS machines for testing Safari iOS](/TA_Automation/Topics/aut_app_testing_mobile_web_Safari_configurations.html)  
This section describes essential configurations needed to ensure that automated tests on Safari iOS run successfully and stably.
2.  [Re-signing and installing TestArchitect Browser Agent](/TA_Automation/Topics/aut_app_testing_mobile_web_Safari_installing_TA_Browser_Agent.html)  
If your tests are to make use of the built-in navigate action to automatically invoke web pages in the Safari browser, then any iOS device subject to such testing must by prepped by having TestArchitect Browser Agent re-signed and installed. \(Note, however, that this procedure may be bypassed if you instead plan to start Safari manually by tapping the Safari icon on the device.\)



