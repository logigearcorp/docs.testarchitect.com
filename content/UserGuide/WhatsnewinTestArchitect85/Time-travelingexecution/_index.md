--- 
title: "Time-traveling execution"
linktitle: "Time-traveling execution"
aliases: 
    - /TA_Help/Topics/ug_time_traveling.html
---
# Time-traveling execution {#concept_jz5_5km_ks .concept}

Time-traveling execution provides the support for "retroactive" execution; that is, the ability to execute a particular set of revisions of project items in a given project.

**Remember:** To use time-traveling execution on any test module belonging to a legacy repository created prior to TestArchitect version [8.2](../../TA_ReleaseNotes/DITA_source/Whats_New_8.2.html), you must first upgrade the repository database. \([Learn more](../../TA_Administration/Topics/adm_database_upgrade_time_traveling.html).\)

## The need for retroactive execution { .section}

Under some circumstances you may need to run automated tests against a specific release version of an AUT, say, version 1, when that is no longer the current version. Now, in a perfect world, you might have used [linked variations](Variations_linking.html) to associate all the right versions of project items to the version 1 system. In practice, though, we don't always do things that way. So what do you do when you need to “go back in time” to execute existing tests on an older AUT version? Fortunately, you still have all the necessary versions of project items preserved through TestArchitect's [revision control system](Project_items_history.html). And time-traveling execution helps grant your test run access to the specific revisions that you require for all the project items invoked by your test.

## Use case { .section}

Suppose that your team has released test assets for an AUT version 1. Now, your team is developing tests for the next release, AUT version 2.

![](../Images/time_traveling_AUT_versions.png)

During test development, your team is not in the habit of creating variations associated to each release version. They only update the tests as needed, checking in each update, as normal, to TestArchitect revision control.

Out of the blue, management decides to release a hot fix, AUT version 1 patch 1, to resolve some defects in AUT version 1. These defects, however, are not related to UI controls, nor to the business logic. Hence the test assets developed for version 1 should be fully reusable for this released hot fix. On the other hand, the current state of the test assets, being targeted at AUT version 2, have changed significantly in term of UI controls, business logic, and other new features.

Given that the new, patched version of AUT version 1 is expected to be able to pass the same set of tests as those of the pre-patch version, what is needed is a way to recapture that “snapshot” of test assets last used for version 1. This is the function of time traveling: to allow your team, at runtime, to specify a retroactive point in the history of your test assets; that point determines which revisions of project items invoked for the test run will be used.

## Best practices for time-traveling execution { .section}

1.  Create a new [version](Variations_create_linked_create_new_version_node.html) node when you begin test automation development on a new version of your AUT. Do this regardless of whether or you expect to have a need to create [linked variations](Variations_linking.html) for this node.
2.  Tag that version to a particular revision when that automation development cycle is finished. \([Learn more](ug_revision_tag.html).\)
    -   For example: Tag revision 04/09/2015 22:04:27.446 to AUT version 2.0.
3.  At runtime, specify the AUT version to be executed. Time-traveling execution is then invoked.

1.  [Executing retroactively with time travel](../../TA_Help/Topics/ug_time_traveling_execution.html)  
How to perform retroactive execution of historical revisions of project items.
2.  [Rules of time-traveling execution](../../TA_Help/Topics/ug_time_traveling_execution_rules.html)  
You have the option of supplying a specific timestamp to determine which revision of the given test module will be executed backward for the test run. It is possible that certain invoked test module and other related project items will not have the revision that is exact matches with your supplied timestamp. In this circumstance, TestArchitect applies a set of rules to determine the revision that is to be activated.
3.  [Reviewing test results with time traveling](../../TA_Help/Topics/ug_time_traveling_results.html)  
Reviewing test results can assist you in verifying which revision of each related project items is selected to run.

**Parent topic:**[Test execution](../../TA_Help/Topics/Test_exec.html)

**Previous topic:**[Playback toolbar](../../TA_Help/Topics/Test_exec_playback_toolbar.html)

**Next topic:**[Startup settings](../../TA_Automation/Topics/aut_startup_settings.html)

