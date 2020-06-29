--- 
title: "Features added to TestArchitect 8 beta 1"
linktitle: "Features added to TestArchitect 8 beta 1"
description: "This topic describes the changes made in TestArchitect version 8 beta 1."
weight: 34
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.0_beta_1.html
keywords: "What is new, TestArchitect 8 beta 1, what is new"
---

This topic describes the changes made in TestArchitect version 8 beta 1.

{{<caution>}}

-   It is strongly recommended that you back up all repositories before upgrading to the latest version of TestArchitect.
-   A TestArchitect client and any Repository Server to which it connects must be of the same version.

## TestArchitect Automation

-   [iOS 7 automation platform now supported.](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/)
    -   Supported devices include: iPhone 4S, iPhone 5, iPhone 5C, iPad 2, iPad with Retina display, iPad Air, iPad mini.

        {{<note>}}

        -   Only apps built with iOS SDK 7 and deployment targets 5, 6 or 7 are supported.
        -   If the app is designed specifically for an iPhone, that app can only be tested on an iPhone device. Likewise for iPad.
-   New built-in actions support for various types of iOS 7 controls, including:

    -   **button**
    -   **collection view**
    -   **date picker**
    -   **image**
    -   **label**
    -   **page control**
    -   **picker view**
    -   **progress bar**
    -   **search bar**
    -   **slider**
    -   **stepper**
    -   **switch**
    -   **table view**
    -   **text view**
    -   **textbox**
    -   **window**
    {{<note>}} As of this release, three built-in actions, [type](/automation-guide/action-based-testing-language/built-in-actions/system-actions/keyboard/type), [start program](/automation-guide/action-based-testing-language/built-in-actions/system-actions/command-line/start-program) and [press device buttons](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/press-device-buttons), do not support iOS 7.

-   New built-in actions support for multi-touch gestures on iOS 7 devices:
    -   [multi touch tap](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/multi-touch-tap): Tap in multiple locations within a window or control concurrently.
    -   [multi touch slide](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/multi-touch-slide): Place fingers on specified locations, then swipe with all fingers traveling in a parallel direction.




