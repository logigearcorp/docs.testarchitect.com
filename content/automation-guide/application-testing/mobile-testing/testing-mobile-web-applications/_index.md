--- 
title: "Testing mobile web applications"
linktitle: "Testing mobile web applications"
description: "Using TestArchitect, you can create and run automated tests for mobile web applications."
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web.html
keywords: "mobile web testing"
---

Using TestArchitect, you can create and run automated tests for mobile web applications.

{{<caution>}}

For power-saving purposes, computers are often configured to go into a non-active state \(such as sleep\) after a certain period of inactivity. By default, the processes associated with automated testing are typically not treated as “activities”, in this sense. Hence, for long execution runs, especially unattended ones, it is important that any machines serving as test controllers be configured not to lapse into any non-active mode during the test period. \(Typically, your computer's power policy is configured through its Control Panel, System Preferences, or command line, depending on the platform. For details, see your system administrator or information specific to the machine's operating system.\)

## Supported mobile browsers

-   **iOS**:
    -   [Safari](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/) \(on both iOS devices and Apple's [iOS simulator](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/iOS_Simulator_Guide/Introduction/Introduction.html)\).

        {{<remember>}}

        -   Before testing Safari on iOS devices, you must set up and configure the mobile test device. \([Learn more](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/prerequisites/).\)
        -   Before testing Safari on the Apple Simulator, you must set up and configure the simulator. \([Learn more](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios-simulator/configuring-an-ios-simulator).\)
    -   WebView \(on iOS device\) a software component used to embed web content in a mobile application.

        {{<remember>}} Before testing a web view on iOS devices, you must set up and configure your mobile device. \([Learn more](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/setting-up-the-ios-test-environment/).\)

-   **Android**:
    -   **Android devices:**
        -   [Google Chrome](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-chrome-on-android/).

            {{<remember>}} Before testing Chrome on Android devices, you must set up and configure the mobile test device. \([Learn more](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-chrome-on-android/prerequisites/).\)

        -   WebView, a component used to embed web content in a mobile application.

            {{<remember>}} Before testing a web view on Android devices, you must set up and configure your mobile device. \([Learn more](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/setting-up-the-test-environment/).\)

    -   **Android emulators**, including [Genymotion](https://www.genymotion.com/#!/) and [Android virtual device](http://developer.android.com/intl/vi/tools/devices/emulator.html) \(AVD\), packaged with Android SDK:
        -   [Android built-in browser](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-the-built-in-browser-on-android-emulators/).

            {{<remember>}} Before testing the built-in browser on Android emulators, you must install TestArchitect Agent onto the emulators. \([Learn more](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-the-built-in-browser-on-android-emulators/installing-testarchitect-agent).\)


1.  [Testing Safari on iOS](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/)  
With TestArchitect, automated tests may be created and run on web applications running within Safari on iOS.
2.  [Testing Google Chrome on Android](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-chrome-on-android/)  
With TestArchitect, automated tests may be created and run on web applications running within Chrome for Android.
3.  [Testing the built-in browser on Android emulators](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-the-built-in-browser-on-android-emulators/)  
TestArchitect automated tests may be created and run on web applications running within the built-in browser in Android emulators.
4.  [Testing Safari on iOS Simulator](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios-simulator/)  
TestArchitect allows you to create and run automated tests of web applications in Safari on a simulated iOS device.
5.  [Testing web apps in mobile emulation mode](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-web-apps-in-mobile-emulation-mode/)  
WithTestArchitect, you can create and run automated tests for mobile web applications and websites without the need for real mobile devices, also known as agent-based automation testing.
6.  [Troubleshooting errors in mobile web application testing](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/troubleshooting-errors-in-mobile-web-application-testing/)  
This section offers you solutions to common issues that you might encounter while testing mobile web applications.




