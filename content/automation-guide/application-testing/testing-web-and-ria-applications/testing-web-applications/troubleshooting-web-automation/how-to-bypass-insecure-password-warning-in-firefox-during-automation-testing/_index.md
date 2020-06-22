--- 
title: "How to bypass Insecure password warning in Firefox during automation testing?"
linktitle: "How to bypass Insecure password warning in Firefox during automation testing?"
description: "Since version 52, Mozilla Firefox has added a new warning that appears on HTTP forms. Specifically, when a login page you are viewing does not have a secure connection, a warning message informs you ..."
weight: 18
aliases: 
    - /TA_FAQ/Topics/faq.howto.bypass_insecure_password_warning_Firefox.html
keywords: "FAQ, insecure password warning, Firefox"
---

Since version 52, Mozilla Firefox has added a [new warning](https://support.mozilla.org/en-US/kb/insecure-password-warning-firefox) that appears on HTTP forms. Specifically, when a login page you are viewing does not have a secure connection, a warning message informs you that if you enter your information it could be stolen by eavesdroppers and attackers \(see image below\). However, the warning message can obscure the entry box. Consequently, this warning message might cause your automated tests to halt unexpectedly.

![](/images/TA_FAQ/Images/insecure_password_warning_FF.png)

To bypass this warning dialog, there are two following options:

-   Option \#1: In your test procedures, use the [type](/TA_Automation/Topics/bia_type.html) built-in action to simulate the typing of Escape key into the login page. This helps close the warning message.

    ```
              window       keys       
    type      login        {esc}
    ```

-   Option \#2: Disable the contextual warning manually, and then re-run the tests. \([Learn more](https://www.ghacks.net/2017/06/13/firefox-disable-this-connection-is-not-secure-warnings/)\)


