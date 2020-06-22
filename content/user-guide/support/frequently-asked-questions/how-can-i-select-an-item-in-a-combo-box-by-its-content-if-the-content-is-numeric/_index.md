--- 
title: "How can I select an item in a combo box by its content if the content is numeric?"
linktitle: "How can I select an item in a combo box by its content if the content is numeric?"
description: "The select action is used to select an item in a combo box, based either on the item's content or its index within the items list. In both cases, the value argument is used to specify the item to ..."
weight: 18
aliases: 
    - /TA_FAQ/Topics/faq.select_combo_box_with_numeric_value.html
keywords: "FAQ, How to select a combo box item by content when the content is numeric?"
---

The [select](/TA_Automation/Topics/bia_select.html) action is used to select an item in a combo box, based either on the item's content or its index within the items list. In both cases, the value argument is used to specify the item to select. By default, TestArchitect distinguishes whether you are specifying the item's content or its index by whether or not the value in value is numeric \(numeric indicating an index\).

So what do you do if you want to select an item by its content, and that content is purely numeric? Answer: simply enclose the value in double quotation marks \( " \) in the value argument.




