--- 
title: "Creating keyword variations"
linktitle: "Creating keyword variations"
description: "Keyword variations define certain categories of distinctions between different system/platform mixes, where the differences generally are not due to any progressive development or refinement of any aspect of the mix."
weight: 3
aliases: 
    - /TA_Help/Topics/Variations_create_keyword.html
keywords: "creating keyword variations, create keyword variations, keyword variations, creating, variations"
---

Keyword variations define certain categories of distinctions between different system/platform mixes, where the differences generally are not due to any progressive development or refinement of any aspect of the mix.

In TestArchitect, you create a new variation of a given definition by copying the item \(test module, action, interface entity or data set\) and then doing a special "Paste as Variation". You then follow that by applying a unique [signature](/user-guide/support/glossary-of-terms/variation-signature) to the variation. In the following steps, we apply a [keyword signature](/user-guide/support/glossary-of-terms/keyword-signature).

1.  In the TestArchitect explorer tree, copy a definition \(test module, action, interface entity, or data set\) of which you wish to create the variation by doing one of the following:

    -   select the item's node and press Ctrl+C on your keyboard; or
    -   right-click the node and select **Copy** from the context menu.

        ![](/images/TA_Help/Images/ug_systemtree3.png)

2.  Right-click the folder in which you want the variation to reside, and then select **Paste as Variation**.

    ![](/images/TA_Help/Images/ug_systemtree4.png)

    {{<remember>}} For test modules and data sets only, the variation must be pasted into the same folder as the source definition .

    {{<tip>}} For a given project, it is common practice to create subfolders named Variations – one under the **Tests** node, one under the **Actions** node, one under the **Interfaces** node, and one under the **Data** node – to store all variations of each item type.

3.  In the Create Variation dialog box, select the **Uses keyword\(s\)** check box. In the accompanying text field, enter the keyword or list of keywords that will be used to identify this variation.

    ![](/images/TA_Help/Images/ug_systemtree5.png)

    This is the [keyword signature](/user-guide/support/glossary-of-terms/keyword-signature) of the variation. It should consist of one or more [keyterms](/user-guide/support/glossary-of-terms/keyterm) delimited by commas. A keyterm can be a single keyword, or a group of keywords delimited by vertical bars \( \| \). \([Learn more](/user-guide/variations/rules-for-creating-variations/assigning-a-keyword-signature-to-a-variation).\)

4.  Click **OK**.


The new variation appears as a node in the TestArchitect explorer tree, identified by its name in the form of `<default definition> {<keyword1>, <keyword2>}`

![](/images/TA_Help/Images/ug_systemtree6.png)

You may also modify a variation's keyword signature after creating it. This is done through the Edit Variation dialog box, which is accessed by right-clicking the variation node and selecting **Edit Variation**.




**Related information**  


[Creating linked variations](/user-guide/variations/creating-linked-variations/)

