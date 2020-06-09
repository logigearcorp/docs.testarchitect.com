--- 
title: "Text-display checks"
linktitle: "Text-display checks"
weight: 2
aliases: 
    - /TA_Automation/Topics/Working_with_checks_text_display.html
---

Working with checks that verify expected text in a control.

1.  During a test, you may want to verify that the text displayed in a control is an expected string value. One of the most common built-in actions used for this scenario is, simply, [check](check.html).
    -   Let's verify that the Available Car text box has the value 6.

        ![](/images//Images/bia_check_aut.png)

    -   We write the following test:

        ![](/images//Images/bia_check_pgm.png)

    -   If the verification succeeds, the [check](check.html) reports a Passed message; otherwise, it reports a Failed message.

        ![](/images//Images/bia_check_res.png)

2.  The [check control property](check_control_property.html) action captures the value of a specified property from a control, then compares it against an expected value. For this built-in action, you usually need to pass a property such as caption or value to the property argument.
    -   For example, let's verify that the **Home** button is displaying the text **Home** properly. To accomplish this, pass thecaption property into the property argument of the [check control property](check_control_property.html).

        ![](/images//Images/bia_check_control_property_caption_aut.png)

    -   We create the following test procedure:

        ![](/images//Images/bia_check_control_property_caption_pgm.png)

    -   If the verification succeeds, the [check control property](check_control_property.html) reports aPassed message; otherwise, it reports a Failed message.

        ![](/images//Images/bia_check_control_property_caption_res.png)

3.  To verify the contents of a tooltip of a control, use [check control tooltip](check_control_tooltip.html), which captures the tooltip text and compares it against an expected string.
    -   For example, you may want to verify that a tooltip is displayed properly when the cursor is hovered over the Available car text box:

        ![](/images//Images/bia_check_control_tooltip_aut.png)

    -   We create the following test procedure:

        ![](/images//Images/bia_check_control_tooltip_pgm.png)

    -   If the verification succeeds, [check control tooltip](check_control_tooltip.html) reports a Passed message; otherwise, it reports a Failed message.

        ![](/images//Images/bia_check_control_tooltip_res.png)

4.  To verify that a regular expression finds a match in a specified text string, use the built-in action [check pattern](check_pattern.html) to check whether a string of text conforms to the specified pattern. To check whether the caption property of a control matches a given regular expression, the [check pattern in text](check_pattern_in_text.html) action is used.
    -   For example, say we want to validate the format of an email address entered in the **Email** text box of a registration form.

        ![](/images//Images/bia_check_pattern_in_text_aut.png)

    -   We create the following test procedure, which includes a regular expression which, if satisfied, assures us that the string it matches is a valid form of email address:

        ![](/images//Images/bia_check_pattern_in_text_pgm.png)

    -   If the verification succeeds, [check pattern in text](check_pattern_in_text.html) reports a Passed message; otherwise, it reports a Failed message.

        ![](/images//Images/bia_check_pattern_in_text_res.png)

5.  To verify the existence of an item in a pop-up menu, use the action [check context menu item exists](check_context_menu_item_exists.html).
    -   For example, suppose we want to check the existence of the **Show artist** item in a pop-up menu.

        ![](/images//Images/bia_check_context_menu_item_exists_aut.png)

    -   We create the following test procedure:

        ![](/images//Images/bia_check_context_menu_item_exists_pgm.png)

    -   If the verification succeeds, [check context menu item exists](check_context_menu_item_exists.html) reports a Passed message; otherwise, it reports a Failed message.

        ![](/images//Images/bia_check_context_menu_item_exists_res.png)

6.  In some cases, text in an AUT object may be part of a bitmap, rather than a distinct property value. In such cases, you can use one of the Optical Character Recognition \(OCR\) actions to check the text against an expected value. \(See [Optical Character Recognition checks](Working_with_checks_OCR.html).\)

**Parent topic:**[Working with checks](/TA_Automation/Topics/Automation_model_working_with_checks.html)

**Previous topic:**[Existence checks](/TA_Automation/Topics/Working_with_checks_existence.html)

**Next topic:**[Status checks](/TA_Automation/Topics/Working_with_checks_status.html)

