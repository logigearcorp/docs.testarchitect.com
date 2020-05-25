--- 
title: "Linking to multiple versions"
linktitle: "Linking to multiple versions"
aliases: 
    - /TA_Help/Topics/Variations_rules_2.html
---
# Linking to multiple versions {#variations_rules_2 .concept}

A variation may be linked to only one system. However, that variation may be linked to multiple version nodes belonging to a single system.

The variation that you directly create is referred to as an [explicit variation](../../TA_Glossary/Topics/glossaryExplicitVariation.html). When you link a variation to a multiple version nodes, you are, in effect, creating multiple variations. We call these [effective variations](../../TA_Glossary/Topics/glossaryEffectiveVariation.html).

For example, in the Create Variation dialog box, you might create a new variation of the **back to home** action linked to two nodes of the **Car Rental** system \(and to one keyword, spanish\), as shown:

![](../Images/Variations_linking_multiple_system_node.png)

In this case, you have created a single [explicit variation](../../TA_Glossary/Topics/glossaryExplicitVariation.html):

```
back to home {Car Rental:1.1,1.2}{spanish}
```

which TestArchitect, in effect, factors out into two effective variations:

```
back to home {Car Rental:1.1}{spanish}
back to home {Car Rental:1.2}{spanish}
```

**Note:** At compile time \(just after a test run is launched\), when the operative variations for each project item are select, TestArchitect only concerns itself with effective variations.

**Parent topic:**[Rules for creating variations](../../TA_Help/Topics/Variations_rules.html)

**Previous topic:**[Linking to one system](../../TA_Help/Topics/Variations_rules_1.html)

**Next topic:**[Assigning a keyword signature to a variation](../../TA_Help/Topics/Variations_rules_3.html)

