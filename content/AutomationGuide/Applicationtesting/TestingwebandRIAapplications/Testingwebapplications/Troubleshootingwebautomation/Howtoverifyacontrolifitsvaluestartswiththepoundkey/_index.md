--- 
title: "How to verify a control if its value starts with the pound key?"
linktitle: "How to verify a control if its value starts with the pound key?"
weight: 7
aliases: 
    - /TA_FAQ/Topics/faq.howto.web_automation_verify_controls_pound_key.html
---
# How to verify a control if its value starts with the pound key? {#reference_dd5_s5g_2l .reference}

**A**: TestArchitect recognizes the pound key \(\#\) character as the beginning of an expression. In order to get around this issue, insert a back slash \( \\ \) escape character before the value being verified.

For example, you may want to verify the contents of a text box whose value is expected to be \#john. In the test editor, you would write:

```
              window        control         value
check         login         user name       \#john
```

**Parent topic:**[Troubleshooting web automation](../../TA_Automation/Topics/web_troubleshooting.html)

