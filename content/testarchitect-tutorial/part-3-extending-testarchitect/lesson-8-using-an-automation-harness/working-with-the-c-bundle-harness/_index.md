--- 
title: "Working with the C\\# bundle harness"
linktitle: "Working with the C\\# bundle harness"
weight: 5
aliases: 
    - /TA_Tutorials/Topics/tut_Scripting_actions_in_other_languages_CSharp_bundle.html
---

How to implement customized TestArchitect actions using the C\# programming language.

## Supported OS environments

-   Windows

Since TestArchitect version [8.3](/TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.3.html#li.bundle_harness), TestArchitect offers a new architecture, C\# bundle harness, to implement C\# user-scripted actions. This new architecture provides the following advantages:

-   Easy deployment: The ability to reuse user-scripted actions among different projects by simply sharing DLLs of the actions
-   Usability: To ease the C\# function declaration and implementation
-   Low coupling: not having to merge source code and rebuild the entire harness solution, even though a single user-scripted action is added. In other words, adding one new user-scripted action does not affect the existing user-scripted actions.

**Note:** For legacy C\# user-scripted actions, created in TestArchitect versions prior to 8.3, you are not required to migrate them to C\# bundle harness. Specifically, your legacy C\# user-scripted actions continue to work normally in TestArchitect 8.3, and you are able to develop additional user-scripted actions that conform to legacy C\# harness architecture.

This lesson contains two exercises that demonstrate how to create C\#-scripted actions and how to make such actions accessible in your TestArchitect ABT tests.

1.  [Developing your own user-scripted C\# bundle harness action](/TA_Tutorials/Topics/tut_Harness_CSharp_bundle_developing_your_own_harness_action.html)  
TestArchitect provides sample C\# bundle harness code files for you to learn to develop, build, and execute C\#-scripted actions.
2.  [Scripting "hello" C\# harness action](/TA_Tutorials/Topics/tut_CSharp_bundle_scripting_action.html)  
In this topic, we will write C\# code which implements the simple hello user-scripted action.
3.  [Creating test case and stub action for "hello" action](/TA_Tutorials/Topics/tut_Harness_CSharp_bundle_creating_test_case_and_stub_action.html)  
Create a stub action in TestArchitect as a placeholder for theC\#-coded hello actionyou defined previously, then write a test to invoke the action.
4.  [Running the C\#-scripted test](/TA_Tutorials/Topics/tut_Harness_CSharp_running_test.html)  
Execute the test that calls the hello action you implemented in the C\# bundle harness.
5.  [User-scripted C\# bundle harness action that interacts with GUI](/TA_Tutorials/Topics/tut_Harness_CSharp_bundle_creating_action_that_interacts_with_GUI.html)  
In this exercise, we will create a user-scripted action that interacts with an application's user interface.
6.  [Migrating C\# user-scripted actions created in earlier versions to TestArchitect 8.3](/TA_Tutorials/Topics/tut_Harness_CSharp_bundle_migration.html)  

7.  [C\# bundle harness API reference](/TA_Tutorials/Topics/tut_CSharp_bundle_harness_APIs.html)  
How to access the API specifications of the C\# bundle harness library.

**Parent topic:**[Lesson \#8: Using an automation harness](/TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages.html)

**Previous topic:**[Working with the Java harness](/TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages_java.html)

**Next topic:**[Summary: What you have learned](/TA_Tutorials/Topics/Summary_Scripting_in_other_languages.html)

