# iOS testing prerequisites {#iOS_prerequisites .task}

Basic prerequisites for testing iOS applications.

**Important:** iOS automation is only supported on Windows or macOS hosts.

Before installing TestArchitect Agent on an iOS device, ensure the host macOS machine is configured with the following:

-   A provisional profile file \(\*.mobileprovision\) containing appropriate keys for your iOS device.

    **Note:**

    -   Your provisional profile must be type of iOS App Development, not type Distribution.
    -   If iOS apps to be tested require permissions \(for instance, Push Notifications, In-App Purchases, Game Center, etc.\), your provisional profile must have the corresponding permissions.
-   A development private key file \(\*.p12\) containing appropriate keys for your test machine. \(These will be imported into Keychain Access.\) Alternatively, a machine with the development private key file already imported.

    **Note:**

    -   Ensure that the development private key file and the provisional profile file have been created from the same developer account.
    -   Refer to Apple's [App Distribution Guide](http://developer.apple.com/library/mac/#documentation/IDEs/Conceptual/AppDistributionGuide/Introduction/Introduction.html%23//apple_ref/doc/uid/TP40012582) for more information on how to request developer certificates.
-   Xcode 9.4, 8.3, 7.x is installed. \([Learn more](https://developer.apple.com/library/content/releasenotes/DeveloperTools/RN-Xcode/Chapters/Introduction.html).\)
-   Xcode Command Line Tools installed, to run the resign.sh shell script.
-   iTunes 11.1 or later installed.

    **Important:** iTunes 12.7 no longer has an App store, which means you no longer can install .ipa iOS apps within iTunes \([learn more](https://www.macworld.com/article/3230135/software-entertainment/how-to-install-itunes-1263-and-replace-itunes-127.html)\). If you want to keep your ways, you can either install iTunes 12.6.3 and get back access to the App store, or use the special version of iTunes at [here](https://support.apple.com/en-gb/HT208079).

-   Turn off the Energy Saver sleep and idle modes. Specifically, set the **Computer sleep** slider to Never. \([Learn more](https://support.apple.com/en-gb/HT201714).\) This ensures that your macOS machine does not automatically slip into a sleep or idle state while the automated test is running, which would cause the test to fail.

In addition, you will need:

-   An approved [iOS development device](iOS_prerequisite_enable_development_mode.md).
-   An Apple USB cable.

**Tip:** If you are unsure as to how to install or use the above development tools, please seek assistance from your development team.

**Parent topic:**[iOS Automation](../../iOS/Topics/iOS_automation_def.md)

**Next topic:**[Setting up the iOS test environment](../../iOS/Topics/iOS_setting_up_the_test_enviroment.md)

