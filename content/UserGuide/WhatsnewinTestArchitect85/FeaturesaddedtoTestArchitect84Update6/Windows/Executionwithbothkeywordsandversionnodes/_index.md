--- 
title: "Execution with both keywords and version nodes"
linktitle: "Execution with both keywords and version nodes"
aliases: 
    - /TA_Help/Topics/Variations_rules_executing_2_4.html
---
# Execution with both keywords and version nodes {#variations_rules_executing_2_4 .concept}

When the Execute Test dialog box's runtime variation specification includes both keywords and version nodes, the decision-making performed is largely a combination of those described in the previous two cases.

**Important:** It should be noted that, when an exact match is not found and the process must search for a suitable variation, versions take precedence over keyword sets.

TestArchitect's process for selecting the correct variation of each project item can loosely be described as follows:

1.  Get the [keyword run set](../../TA_Glossary/Topics/glossaryKeywordRunSet.html) and version run set from the Execute Test dialog box.
2.  Let KRS = the keyword run set and VRS = the version run set. If the current project item has linked variations, and those variations use a system which is also in VRS, set OSV \(the operative system:version\) to that particular system:version of VRS. Otherwise, we say no OSV exists.

    **Remember:** Keep in mind that this algorithm is applied separately to each project item involved in the test. Also note that, although multiple systems can be specified in the version run set \(**AUT Version** field\), each project item's [variation set](../../TA_Glossary/Topics/glossaryVariationSet.html) is limited to [no more than one system](Variations_rules_1.html). Hence, the OSV can vary from one pass to the next, or not exists at all. \(OSV will not exist in the case of a project item having no linked variations, or where its linked variations are associated with a system that is not listed in the version run set.\)

3.  Select the [effective variation](../../TA_Glossary/Topics/glossaryEffectiveVariation.html) that exactly matches OSV and KRS.
4.  If such an exact match does not exist, select the effective variation of version OSV whose [keyword signature](../../TA_Glossary/Topics/glossaryKeywordSignature.html) is the largest subset of RTKeys.
5.  If this variation is not unique, in that at least one other effective variation of version OSV has an equal-sized keyword signature which is also a subset of RTKeys, flag the issue \(indicating that user-intervention is required\) and halt execution.
6.  If, on the other hand, no effective variation with a keyword subset is found, select the variation of version OSV which has no keywords.
7.  If that effective variation does not exist, ask:

    ```
    Are there any more higher version nodes in the [VCOL \(Version Compilation Order List\)](../../TA_Glossary/Topics/glossaryVersionCompilationOrderList.html)?
    ```

    1.  If Yes, traverse the list in the [prescribed manner](../../TA_Glossary/Topics/glossaryVersionCompilationOrderList.html), and set the OSV to the next node's version., then cycle back to step [3](#li.ta_selects_variation).
    2.  If No, select the effective variation with no version but an exact match on OSV.
    3.  If such a match does not exist, select the variation with no version, but whose keyword set is the largest subset of RTKeys.
    4.  If this variation is not unique, in that at least one other non-versioned variation has an equal-sized keyword set which is also a subset of RTKeys, flag the issue and halt execution.
    5.  If, on the other hand, no such variation exists, select the default variation.

        **Important:**

        -   When your specified version node does not belong to any branch node, TestArchitect ignores other higher branch nodes in **Version Compilation Order List**, as well as its descendant nodes, if any.
            -   For example, if your automated test run specifies node **1.2**, the search order is **1.2** \> **1.1** \> **1** \> **default variation**.

                ![](../Images/Execution_rules_variation.png)

        -   On the other hand, when your specified version node belongs to a given branch node, TestArchitect moves one level up for remaining version nodes. Note that, the higher version nodes and your selected version node must be of the same branch. Subsequently, TestArchitect again ignores other higher branch nodes and their descendant nodes, if any.
            -   For example, your automated test run specifies node **1.2 Patch 2**, the search order is **1.2 Patch 2** \> **1.2 Patch 1** \> **1.2** \> **1.1** \> **1** \> **default variation**.

                ![](../Images/Execution_rules_variation_2.png)


## Example { .section}

Suppose the following **Version Compilation Order List** exists for the system **Car Rental:**

![](../Images/ug_systemtree32.png)

In addition, some or all of the variations of the login action are linked with the **Car Rental** system. At execution, parameters in the Variation Specification panel of the Execute Test dialog box are set to:

```
Keyword = Spanish, HomeEdition 
AUT Version = {Car Rental:2.1} 
```

![](../Images/ug_systemtree31.png)

When the login action is encountered during execution, the search order for a suitable variation is as follows:

```
1.  login {Car Rental:2.1}{Spanish, HomeEdition}
2.  login {Car Rental:2.1}{Spanish} 
    ***or*** 
    login {Car Rental:2.1}{HomeEdition} ***\(if both exist, flag conflict\)***
3.  login {Car Rental:2.1}{ }

4.  login {Car Rental:2}{Spanish, HomeEdition} 
5.  login {Car Rental:2}{Spanish} 
    ***or*** 
    login {Car Rental:2}{HomeEdition} ***\(if both exist, flag conflict\)***
6.  login {Car Rental:2}{ } 

7.  login {Car Rental:1.3}{Spanish, HomeEdition} 
8.  login {Car Rental:1.3}{Spanish} 
    ***or*** 
    login {Car Rental:1.3}{HomeEdition} ***\(if both exist, flag conflict\)***
9.  login {Car Rental:1.3}{ } 

10.  login {Car Rental:1.2}{Spanish, HomeEdition} 
11.  login {Car Rental:1.2}{Spanish} 
    ***or*** 
    login {Car Rental:1.2}{HomeEdition} ***\(if both exist, flag conflict\)***
12.  login {Car Rental:1.2}{ }
 
13. login {Car Rental:1.1}{Spanish, HomeEdition} 
14. login {Car Rental:1.1}{Spanish} 
    ***or*** 
    login {Car Rental:1.1}{HomeEdition} ***\(if both exist, flag conflict\)***
15. login {Car Rental:1.1}{ }
 
16. login {Car Rental:1}{Spanish, HomeEdition} 
17. login {Car Rental:1}{Spanish} 
    ***or*** 
    login {Car Rental:1}{HomeEdition} ***\(if both exist, flag conflict\)***
18. login {Car Rental:1}{ } 

19. login { }{Spanish, HomeEdition}
20. login { }{Spanish} 
    ***or***
    login { }{HomeEdition} ***\(if both exist, flag conflict\)***

21. login (default variation)
```

**Parent topic:**[Rules for selecting variations for execution](../../TA_Help/Topics/Variations_rules_executing_2.html)

**Previous topic:**[Execution with only version nodes](../../TA_Help/Topics/Variations_rules_executing_2_3.html)

