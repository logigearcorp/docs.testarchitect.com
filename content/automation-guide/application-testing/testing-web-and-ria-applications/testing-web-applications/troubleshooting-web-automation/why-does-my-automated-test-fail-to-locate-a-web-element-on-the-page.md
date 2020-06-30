--- 
title: "Why does my automated test fail to locate a web element on the page?"
linktitle: "Why does my automated test fail to locate a web element on the page?"
description: "Occasionally, you may encounter an error during automated playback on a web browser indicating that a given control could not be found. Locating web elements, or controls through TA properties ..."
weight: 11
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.web_control_not_found.html
keywords: "troubleshooting, web automation, control not found"
---

Occasionally, you may encounter an error during automated playback on a web browser indicating that a given control could not be found.

## Locating web elements, or controls through TA properties

Typically, a UI element is located on a web page by means of one or more [TA property](/user-guide/support/glossary-of-terms/ta-property)-value pairs. Some of the TA properties most commonly used for identification are:

-   ID: The ID is an identifier for the element assigned by developers. The ID property of an element *should* be unique within the given page, so this is generally a good TA property to use for identifying the element. But note that browsers do allow violations of this rule, so it may be not unique.

    ![](/images/TA_FAQ/Images/locator_ID.png)

-   name: In general, the name property is assigned by the developer and is also unique for each element within a page, but again, that is not always guaranteed.

    For example, it is normally the case for discrete elements on a page to have unique name properties:

    ![](/images/TA_FAQ/Images/locator_name_1.png)

    On the other hand, radio buttons within a radio group will have the same name values:

    ![](/images/TA_FAQ/Images/locator_name.png)

    Hence, a different TA property should be used to locate a specific radio button within a group.

-   innertext: For any element that has visible text, the innertext TA property stores the displayed text. Hence it can be a convenient means of locating such elements on a page.
-   [XPath](/user-guide/interface-definitions/control-properties/secondary-properties/xpath-property): XPath is a language for traversing the structure of the DOM \(document object model\) of a web page, which is a hierarchical representation of its elements. TestArchitect uses this representation to supply the XPath TA property of each element with an XPath expression, which in each case uniquely identifies that element within the UI hierarchy. Whenever you use the Interface Viewer or Identify tool to map a web UI element, this is the TA property that TestArchitect always suggests you use.

    ![](/images/TA_FAQ/Images/locator_xpath.png)


## Debugging during playback

Generally, the most productive way to diagnose and remedy an unmatched control due to a failed TA property is during automated playback, when you have the AUT running and the test procedure halts at the point of failure.

Below is a typical error message that TestArchitect displays when a web element is not found.

![](/images/TA_FAQ/Images/Automation_problem.png)

1.  Why is your test unable to locate the desired web control?

    Before you decide that your problem can be solved by switching to a different TA property, it is important to understand the reason your test failed to find the control. In some cases, the issue is not from the TA property itself, so changing to a different one won't help.

    Here are some common causes:

    -   Wrong specified set of [interface definitions](/user-guide/interface-definitions/interface-mapping), also known as an interface:
        -   Ensure that the desired web element is stored in the correct interface. Set correct interface via [default interface](/user-guide/interface-definitions/setting-a-default-interface) or [use interface](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/interface-handling/use-interface).
    -   Element attributes changed:
        -   Web pages are often generated dynamically. The more sophisticated the AUT, the more likely this becomes. As a result, certain parts of the page will be different each time the page is visited, or when it is visited with different user credentials. When your test needs to locate dynamic controls, the best option is to use expression-based [dynamic identifiers](/user-guide/support/glossary-of-terms/dynamic-identifier). \([Learn more](/user-guide/interface-definitions/dynamic-identifiers#section_dzp_ynv_ns).\)
    -   Element does not yet exist, or the automated test proceeds too fast for the AUT, testing for the element before the application can render it:
        -   Complex web pages may take a few seconds to load, and web page scripts may also need time to load additional content after that. Thus, web page load times may vary. Which means that sometimes a given web element cannot be found simply because it has not appeared. Successful testing requires that the automation correctly handle the varying response times of the application. One option – a bad one, for reasons that should be obvious – is to allow your test to wait indefinitely. A much better approach would be to specify a maximum wait time, which you do with the [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait) or [object wait probe](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait-probe) built-in settings. \(For further information regarding how to handle timing issues, refer to [Timing](/automation-guide/action-based-testing-language/the-test-language/timing/).\)
2.  Choose a new TA property:

    If you're sure that your problem can be rectified by using a different TA property \(or, perhaps, an *additional* TA property\), examine the control in the page to see what other TA properties it has to offer to identify it. The [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/) and/or [Identify](/user-guide/interface-definitions/interface-capturing-commands/point-to-identify-tool/) tools are your best bets. These tools display all the available TA properties that can be alternatively used to locate the control.



