--- 
title: "Dynamic test suites"
linktitle: "Dynamic test suites"
weight: 2
aliases: 
    - /TA_Help/Topics/Test_suite_dynamic.html
---

A dynamic test suite is a collection of test modules whose membership is determined dynamically, based on the criteria specified in an associated data profile.

The contents of a dynamic test suite are based on a [data profile](Report_producing.html) that you associate with the test suite. Data profiles, which are also used for reporting \(and in that context are known as report profiles\), define a set of criteria which are applied to a project's items to specify a particular subset of items.

Different types of data profiles exist for different project item types. For dynamic test suites, the supported data profile types are test module, test case, test objective, test result, and test case result. That said, regardless of the type of data profile linked to a given dynamic test suite, the test suite contains only test modules. \(If the profile linked to a dynamic test suite is not of type test module, it is the set of test modules *associated* with the items specified by the profile that are included in the test suite. For example, were you to have a dynamic test suite with a data profile that specified all test cases with Failed results, the test suite would include all test modules having Failed test cases.\)

1.  [Creating a dynamic test suite](/TA_Help/Topics/Test_suite_item_dynamic.html)  
You can create a dynamic test suite based on the following data profile types: test module, test case, test objective, test result, or test case result.
2.  [Adding new test modules to a dynamic test suite](/TA_Help/Topics/Test_suite_dynamic_add_new_test_module.html)  
New test modules in a dynamic test suite can be added only by customizing the test suite's data profile.
3.  [Rearranging test modules in a dynamic test suite](/TA_Help/Topics/Test_suite_dynamic_rearrange_test_modules.html)  
Test modules in a dynamic test suite can be reordered only by customizing the dynamic test suite's data profile.

**Parent topic:**[Test suites](/TA_Help/Topics/Test_suite.html)

**Previous topic:**[Static test suites](/TA_Help/Topics/Test_suite_static.html)

**Next topic:**[Moving test suites, test suite folders, and modules](/TA_Help/Topics/Test_suite_cut_copy_paste.html)

