--- 
title: "Link each variation to a version"
linktitle: "Link each variation to a version"
description: "After creating different types of browsers, you need to link your interfaces/actions to the browsers."
weight: 3
aliases: 
    - /TA_FAQ/Topics/faq.howto.web_automation_variations.linking.html
keywords: 
---

After creating different types of browsers, you need to link your interfaces/actions to the browsers.

1.  Select the user-defined action or interface entity for which you want to create a variation. The variations of these items will be used to execute cross-platform automated tests.

    For example, assume you already have an action called config that is used to create initial configurations on your browsers. It is suggested that you have variations of the config action, each tailored to the requirements of one of the browser types: Internet Explorer, Google Chrome, and Mozilla Firefox. \(For a non-browser-specific config action, you may just want to create an empty action.\)

2.  Right-click the node for the config action, and then select **Copy**.

3.  Right-click the **Actions** nodes in the TestArchitect explorer tree, and select **Paste as Variation**.

4.  In the Create Variation dialog box, select the **Links to version node** check box.

5.  From the **Select system** drop-down list, select **Browser**.

6.  Select **Chrome** to link this variation to Google Chrome.

    ![](/images/TA_Automation/Images/web_automation_link_variation.png)

7.  Click **OK**.

    The new variation for Google Chrome appears as a node in the TestArchitect explorer tree.

8.  Repeat steps \#1 through \#7 to link the other variations to Mozilla Firefox and Internet Explorer


The variations for Internet Explorer, Chrome, and Firefox now appear as nodes in the Explorer tree.

![](/images/TA_Automation/Images/web_automation_linked_variations.png)

**Important:** You must modify the user-defined action or interface entity of the respective variations to have TestArchitect execute web automated tests using the respective browsers. For example:

![](/images/TA_Automation/Images/web_automation_linked_variations_details.png)




