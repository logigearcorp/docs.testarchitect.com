--- 
title: "How can I select an item in a combo box by its content if the content is numeric?"
linktitle: "How can I select an item in a combo box by its content if the content is numeric?"
weight: 18
aliases: 
    - /TA_FAQ/Topics/faq.select_combo_box_with_numeric_value.html
---
# How can I select an item in a combo box by its content if the content is numeric? {#concept.faq.select_combo_box_with_numeric_value .concept}

The [select](../../TA_Automation/Topics/bia_select.html) action is used to select an item in a combo box, based either on the item's content or its index within the items list. In both cases, the value argument is used to specify the item to select. By default, TestArchitect distinguishes whether you are specifying the item's content or its index by whether or not the value in value is numeric \(numeric indicating an index\).

So what do you do if you want to select an item by its content, and that content is purely numeric? Answer: simply enclose the value in double quotation marks \( " \) in the value argument.

**Parent topic:**[Frequently asked questions](../../TA_Help/Topics/Support_FAQ.html)

**Previous topic:**[How can I have my automation use a browser other than Internet Explorer?](../../TA_FAQ/Topics/faq.howto.specify_browser_for_automation.html)

**Next topic:**[How can I capture a screenshot on an iOS device?](../../TA_FAQ/Topics/faq.howto.capture_ios_screenshot.html)

