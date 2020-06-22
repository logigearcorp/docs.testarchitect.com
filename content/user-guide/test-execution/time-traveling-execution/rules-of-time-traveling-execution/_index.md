--- 
title: "Rules of time-traveling execution"
linktitle: "Rules of time-traveling execution"
description: "You have the option of supplying a specific timestamp to determine which revision of the given test module will be executed backward for the test run. It is possible that certain invoked test module and other related project items will not have the revision that is exact matches with your supplied timestamp. In this circumstance, TestArchitect applies a set of rules to determine the revision that is to be activated."
weight: 2
aliases: 
    - /TA_Help/Topics/ug_time_traveling_execution_rules.html
keywords: "time traveling, rules, test execution, execution, running, executing"
---

You have the option of supplying a specific timestamp to determine which revision of the given test module will be executed backward for the test run. It is possible that certain invoked test module and other related project items will not have the revision that is exact matches with your supplied timestamp. In this circumstance, TestArchitect applies a set of rules to determine the revision that is to be activated.

{{<remember>}} To use time-traveling execution on any test module belonging to a legacy repository created prior to TestArchitect version [8.2](/TA_ReleaseNotes/DITA_source/Whats_New_8.2.html), you must first upgrade the repository database. \([Learn more](/TA_Administration/Topics/adm_database_upgrade_time_traveling.html).\)

{{<note>}} The rules of time-traveling execution are independent from the [rules for selecting variations for execution](/TA_Help/Topics/Variations_rules_executing.html).

## Executing backward a revision

At runtime, you directly specify a timestamp in the Variation Specification panel, located under **Advanced Settings** tab of the Execute Test dialog box. \([Learn more](/TA_Help/Topics/ug_time_traveling_execution.html).\)

![](/images/TA_Help/Images/time_traveling_rules_1.png)

When a specific timestamp is selected, and it is not tagged to an AUT version\(s\), TestArchitect takes the following approach for each test module, action, interface entity, or data set, it encounters in the test.

{{<note>}} This rule is applied to [keyword variations](/TA_Help/Topics/Variations_create_keyword.html) and [default variations](/TA_Help/Topics/Variations_default.html). But not including [linked variations](/TA_Help/Topics/Variations_linking.html).

```
TestArchitect asks: Is there a revision existing at the specified timestamp?
```

1.  If Yes, TestArchitect executes that revision.
2.  If No, TestArchitect executes the next most recent revision preceding the specified timestamp.
    -   For example, you specified a timestamp at 03/28/2012 \(see the figure below\); however, there is no such revision at that point of time. Consequently, TestArchitect automatically runs the revision at 03/08/2011 that is the most recent revision preceding 03/08/2012, instead of revision at 04/21/2012.

        ![](/images/TA_Help/Images/time_traveling_rules.png)


## Executing backward a revision tag

At runtime, you specify a [revision tag](/TA_Help/Topics/ug_revision_tag.html), that is, a timestamp tagged to an AUT version\(s\) in the Variation Specification panel, located under **Advanced Settings** tab of the Execute Test dialog box. \([Learn more](/TA_Help/Topics/ug_time_traveling_execution.html)\).

![](/images/TA_Help/Images/time_traveling_rules_2.png)

When a revision tag is selected, TestArchitect takes the following approach for each test module, action, interface entity, or data set, it encounters in the test.

```
TestArchitect asks: Is the tagged AUT version\(s\) linked to a variation?
```

1.  If Yes, TestArchitect always executes the latest revision of that variation. In other words, when there is a linked variation, TestArchitect basically ignores time-traveling.
2.  If No, TestArchitect follows the same rules mentioned above, in the Executing backward a revision section.




