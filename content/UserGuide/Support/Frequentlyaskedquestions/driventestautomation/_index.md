--- 
title: "I'm already doing test automation. Why should I use keyword-driven test automation?"
linktitle: "I'm already doing test automation. Why should I use keyword-driven test automation?"
weight: 5
aliases: 
    - /TA_FAQ/Topics/faq.why_use_keyword-driven_testing.html
---
# I'm already doing test automation. Why should I use keyword-driven test automation? {#concept.faq.why_use_keyword-driven_testing .concept}

Traditional test automation techniques provide a significant improvement over manual testing, but require tests to be created by test automation engineers with programming skills for all but the most simple of applications. Test designers traditionally document their test cases in a word processing application, and then pass these documents to automation engineers who code automation scripts.

Using the traditional test automation approach can introduce a number of problems into the testing effort:

-   Hundreds or thousands of test cases means hundreds or thousands of test scripts, which must be maintained - at no insignificant cost - each time the application under test \(AUT\) is modified.
-   In order to keep tests from becoming outdated, test scripts and test documents must be updated, increasing the burden on the testing team.
-   Automated tests must be maintained by automation engineers, who are skilled programmers.
-   Scripts created through record-and-playback are notoriously unstable and often end up being abandoned

With Action Based Testing:

-   Each team member can focus on what they do best. Test designers can focus on using their product and testing knowledge to create effective tests, while automation engineers can focus on using their technical skills to implement the actions needed in the tests.
-   The amount of code needed to create test automation is significantly reduced, easing the burden of future maintenance. A typical project will have dozens to hundreds of keywords, or actions, and hundreds to thousands of test cases. Actions can be reused and reordered as needed to create new test cases. Only actions are created as scripts, and TestArchitect already contains many low-level actions built-in.

In a TestArchitect's test module, test cases are organized in a worksheet format. Each worksheet is both an executable test and documentation of the test. This further reduces the maintenance required whenever the application is updated.

**Parent topic:**[Frequently asked questions](../../TA_Help/Topics/Support_FAQ.html)

**Previous topic:**[Does TestArchitect support data-driven test automation?](../../TA_FAQ/Topics/faq.does_ta_support_data-driven.html)

**Next topic:**[Is TestArchitect used only for test automation?](../../TA_FAQ/Topics/faq.is_ta_only_for_test_automation.html)

