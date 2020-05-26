--- 
title: "Why does my automated test fail to locate a web element on the page?"
linktitle: "Why does my automated test fail to locate a web element on the page?"
weight: 11
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.web_control_not_found.html
---
# Why does my automated test fail to locate a web element on the page? {#concept_s45_k35_ns .concept}

Occasionally, you may encounter an error during automated playback on a web browser indicating that a given control could not be found.

## Locating web elements, or controls through TA properties { .section}

Typically, a UI element is located on a web page by means of one or more [TA property](../../TA_Glossary/Topics/glossaryTAProperty.html)-value pairs. Some of the TA properties most commonly used for identification are:

-   ID: The ID is an identifier for the element assigned by developers. The ID property of an element *should* be unique within the given page, so this is generally a good TA property to use for identifying the element. But note that browsers do allow violations of this rule, so it may be not unique.

    ![](../Images/locator_ID.png)

-   name: In general, the name property is assigned by the developer and is also unique for each element within a page, but again, that is not always guaranteed.

    For example, it is normally the case for discrete elements on a page to have unique name properties:

    ![](../Images/locator_name_1.png)

    On the other hand, radio buttons within a radio group will have the same name values:

    ![](../Images/locator_name.png)

    Hence, a different TA property should be used to locate a specific radio button within a group.

-   innertext: For any element that has visible text, the innertext TA property stores the displayed text. Hence it can be a convenient means of locating such elements on a page.
-   [XPath](../../TA_Help/Topics/prop_xpath.html): XPath is a language for traversing the structure of the DOM \(document object model\) of a web page, which is a hierarchical representation of its elements. TestArchitect uses this representation to supply the XPath TA property of each element with an XPath expression, which in each case uniquely identifies that element within the UI hierarchy. Whenever you use the Interface Viewer or Identify tool to map a web UI element, this is the TA property that TestArchitect always suggests you use.

    ![](../Images/locator_xpath.png)


## Debugging during playback { .section}

Generally, the most productive way to diagnose and remedy an unmatched control due to a failed TA property is during automated playback, when you have the AUT running and the test procedure halts at the point of failure.

Below is a typical error message that TestArchitect displays when a web element is not found.

![](../Images/Automation_problem.png)

1.  Why is your test unable to locate the desired web control?

    Before you decide that your problem can be solved by switching to a different TA property, it is important to understand the reason your test failed to find the control. In some cases, the issue is not from the TA property itself, so changing to a different one won't help.

    Here are some common causes:

    -   Wrong specified set of [interface definitions](../../TA_Help/Topics/Interface_def_mapping.201401.html), also known as an interface:
        -   Ensure that the desired web element is stored in the correct interface. Set correct interface via [default interface](../../TA_Help/Topics/Interface_def_set_default_interface.html) or [use interface](../../TA_Automation/Topics/bia_use_interface.html).
    -   Element attributes changed:
        -   Web pages are often generated dynamically. The more sophisticated the AUT, the more likely this becomes. As a result, certain parts of the page will be different each time the page is visited, or when it is visited with different user credentials. When your test needs to locate dynamic controls, the best option is to use expression-based [dynamic identifiers](../../TA_Glossary/Topics/glossaryDynamicIdentifier.html). \([Learn more](../../TA_Help/Topics/The_test_language_dynamic_identifiers.md#section_dzp_ynv_ns).\)
    -   Element does not yet exist, or the automated test proceeds too fast for the AUT, testing for the element before the application can render it:
        -   Complex web pages may take a few seconds to load, and web page scripts may also need time to load additional content after that. Thus, web page load times may vary. Which means that sometimes a given web element cannot be found simply because it has not appeared. Successful testing requires that the automation correctly handle the varying response times of the application. One option – a bad one, for reasons that should be obvious – is to allow your test to wait indefinitely. A much better approach would be to specify a maximum wait time, which you do with the [object wait](../../TA_Automation/Topics/bis_object_wait.html) or [object wait probe](../../TA_Automation/Topics/bis_object_wait_probe.html) built-in settings. \(For further information regarding how to handle timing issues, refer to [Timing](../../TA_Automation/Topics/Automation_practices_Timing.html).\)
2.  Choose a new TA property:

    If you're sure that your problem can be rectified by using a different TA property \(or, perhaps, an *additional* TA property\), examine the control in the page to see what other TA properties it has to offer to identify it. The [Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer.html) and/or [Identify](../../TA_Help/Topics/Interface_def_client_interface_tool_identify.html) tools are your best bets. These tools display all the available TA properties that can be alternatively used to locate the control.


**Parent topic:**[Troubleshooting web automation](../../TA_Automation/Topics/web_troubleshooting.html)

