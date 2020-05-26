--- 
title: "Execution with keywords only"
linktitle: "Execution with keywords only"
weight: 2
aliases: 
    - /TA_Help/Topics/Variations_rules_executing_2_2.html
---
# Execution with keywords only {#variations_rules_executing_2_2 .concept}

The following rules apply when you execute a test run with keyword variations specified, but no version variations.

When you launch a test run, you may qualify the run with one or more keywords \(the [keyword run set](../../TA_Glossary/Topics/glossaryKeywordRunSet.html)\) to specify test module, action, interface, and data set variations to be employed. Note, however, that for any given project item, it would be impractical \(and generally unnecessary\) to have a complete set of effective keyword variations such that an exact match would exist for each possible set of keywords in the keyword run set.

Recognizing this fact, TestArchitect does not require exact matches. It instead employs a set of rules to determine, based on the keyword run set, which effective variation of each invoked project item is to be employed.

**Note:** Bear in mind that, when selecting variations to invoke at runtime, TestArchitect concerns itself with [*effective* variations](../../TA_Glossary/Topics/glossaryEffectiveVariation.html). \([Learn more](Variations_rules_3.md#title.key_sig_complex_keyterms).\)

At runtime, you specify the keyword run set, in the Variation Specification panel, located under the **Advanced Settings** tab of the [Execute Test](../../reuse/../TA_Help/Topics/Test_exec_test_execution.html) dialog box.

At runtime, you specify the keyword run set in the Keyword\(s\) box of the Execute Test dialog box.

![](../../reuse/../TA_Help/Images/ug_systemtree29.png)

For each project item that a\), is of type test module, action, interface or data set, and b\), has variations, the following set of rules is observed by TestArchitect to determine which effective variation is invoked during the test run:

**Note:** The examples that follow all assume a [keyword run set](../../reuse/../TA_Glossary/Topics/glossaryKeywordRunSet.html) of \{English, business, Windows\}, as depicted above.

1.  First priority goes to the effective variation whose [keyword signature](../../reuse/../TA_Glossary/Topics/glossaryKeywordSignature.html) is an exact match with the keyword run set. \(**Example:** Action rent car is called by the test, so variation rent car \{English, business, Windows\}, if it exists, is invoked.\)
2.  If no exact match is found, TestArchitect employs the variation whose keyword signature is the largest subset of keywords of the keyword run set \(**Example:** rent car \{English, Windows\}\). Note the following provisions:
    -   We're talking about subsets here, which disqualifies any variation whose keyword signature has any elements \(keywords\) that are *not* in the keyword run set. \(**Example:**: Action rent car is invoked. No exact match for the keyword run set of \{English, business, Windows\} is found. Effective variation rent car \{English, business, metric\} matches two of the keywords in the keyword run set, which is more than any other effective variation. However, it is disqualified, as metric is not a member of the keyword run set.\)
    -   One problem that can arise is that two or more variations may "tie" for the position of most qualified. When that happens, TestArchitect's approach is to halt compilation and issue a compile-time error message. \(**Example**: Action rent car is invoked, and no exact keyword match exists for the action. However, effective variations rent car \{English, business\} and rent car \{business, Windows\} both exist. Both are subsets of \{English, business, Windows\}, but both have an identical cardinality of 2: hence an error is generated.\)
3.  If no suitable variation is found, the default variation is employed.

**Note:** A special case exists for test modules and data set variations, as test modules and data sets of the same name can exist in different locations in the TestArchitect explorer tree. \(Note that the same is not true for actions or interfaces – that is, TestArchitect prevents you from reusing a given action or interface name within a project, even if you attempt to place the item in a different location.\) Accordingly, the full path of a data set, as specified in a [use data set](../../reuse/../TA_Automation/Topics/bia_use_data_set.html) built-in action, is treated as the data set name when selecting which variation to employ. Similarly, the full path of a test module, when specified at the start of a test run, or as an argument to the built-in [run test](../../reuse/../TA_Automation/Topics/bia_run_test.html) action, is treated as the test module name when selecting variations.

**Example**: The data set cars lives directly under the **Data** node \(along with its variations\), while another cars data set, \(and its own set of variations\), lives inside folder Nevada, a subfolder of **Data**. If the test module includes the action line

```
use data set     /Nevada/cars
```

, only the set of cars variations sitting under /Nevada is considered when determining which variation to employ.

**Parent topic:**[Rules for selecting variations for execution](../../TA_Help/Topics/Variations_rules_executing_2.html)

**Previous topic:**[Execution with no variation-related parameters](../../TA_Help/Topics/Variations_rules_executing_2_1.html)

**Next topic:**[Execution with only version nodes](../../TA_Help/Topics/Variations_rules_executing_2_3.html)

