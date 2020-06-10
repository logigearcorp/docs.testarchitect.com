--- 
title: "Creating keyword variations"
linktitle: "Creating keyword variations"
weight: 3
aliases: 
    - /TA_Help/Topics/Variations_create_keyword.html
---

Keyword variations define certain categories of distinctions between different system/platform mixes, where the differences generally are not due to any progressive development or refinement of any aspect of the mix.

In TestArchitect, you create a new variation of a given definition by copying the item \(test module, action, interface entity or data set\) and then doing a special "Paste as Variation". You then follow that by applying a unique [signature](/TA_Glossary/Topics/glossaryVariationSignature.html) to the variation. In the following steps, we apply a [keyword signature](/TA_Glossary/Topics/glossaryKeywordSignature.html).

1.  In the TestArchitect explorer tree, copy a definition \(test module, action, interface entity, or data set\) of which you wish to create the variation by doing one of the following:

    -   select the item's node and press Ctrl+C on your keyboard; or
    -   right-click the node and select **Copy** from the context menu.

        ![](/images//Images/ug_systemtree3.png)

2.  Right-click the folder in which you want the variation to reside, and then select **Paste as Variation**.

    ![](/images//Images/ug_systemtree4.png)

    **Remember:** For test modules and data sets only, the variation must be pasted into the same folder as the source definition .

    **Tip:** For a given project, it is common practice to create subfolders named Variations – one under the **Tests** node, one under the **Actions** node, one under the **Interfaces** node, and one under the **Data** node – to store all variations of each item type.

3.  In the Create Variation dialog box, select the **Uses keyword\(s\)** check box. In the accompanying text field, enter the keyword or list of keywords that will be used to identify this variation.

    ![](/images//Images/ug_systemtree5.png)

    This is the [keyword signature](/TA_Glossary/Topics/glossaryKeywordSignature.html) of the variation. It should consist of one or more [keyterms](/TA_Glossary/Topics/glossaryKeyterm.html) delimited by commas. A keyterm can be a single keyword, or a group of keywords delimited by vertical bars \( \| \). \([Learn more](/TA_Help/Topics/Variations_rules_3.html).\)

4.  Click **OK**.


The new variation appears as a node in the TestArchitect explorer tree, identified by its name in the form of `<default definition> {<keyword1>, <keyword2>}`

![](/images//Images/ug_systemtree6.png)

You may also modify a variation's keyword signature after creating it. This is done through the Edit Variation dialog box, which is accessed by right-clicking the variation node and selecting **Edit Variation**.

**Parent topic:**[Variations](/TA_Help/Topics/Variations.html)

**Previous topic:**[Default variations](/TA_Help/Topics/Variations_default.html)

**Next topic:**[Creating linked variations](/TA_Help/Topics/Variations_create_linked.html)

**Related information**  


[Creating linked variations](/TA_Help/Topics/Variations_create_linked.html)

