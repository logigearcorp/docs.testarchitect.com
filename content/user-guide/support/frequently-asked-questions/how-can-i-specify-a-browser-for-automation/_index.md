--- 
title: "How can I have my automation use a browser other than Internet Explorer?"
linktitle: "How can I specify a browser for automation?"
weight: 17
aliases: 
    - /TA_FAQ/Topics/faq.howto.specify_browser_for_automation.html
---

In your test, use the [setting](/TA_Automation/Topics/bia_setting.html) action with the [use browser](/TA_Automation/Topics/bis_use_browser.html) setting, then specify the browser in the following argument.

Note that Internet Explorer is the default browser only in the case of desktop web-based testing. For Android tests, Google Chrome is the default, while web-based applications running on iOS devices are defaulted to run in Safari.

**Parent topic:**[Frequently asked questions](/TA_Help/Topics/Support_FAQ.html)

**Previous topic:**[If you have a use deputy action with parallel set to no, does that assume the deputy execution is serial, meaning the test waits until the action lines associated with the use deputy are completed before moving on?](/TA_FAQ/Topics/faq.how_does_non-parallel_use_deputy_work.html)

**Next topic:**[How can I select an item in a combo box by its content if the content is numeric?](/TA_FAQ/Topics/faq.select_combo_box_with_numeric_value.html)

