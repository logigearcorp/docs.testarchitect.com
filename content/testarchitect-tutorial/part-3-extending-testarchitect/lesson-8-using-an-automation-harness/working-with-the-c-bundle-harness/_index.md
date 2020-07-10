--- 
title: "Working with the C# bundle harness"
linktitle: "Working with the C# bundle harness"
slug: "working-with-the-c-bundle-harness"
description: "How to implement customized TestArchitect actions using the C# programming language."
weight: 5
aliases: 
    - /TA_Tutorials/Topics/tut_Scripting_actions_in_other_languages_CSharp_bundle.html
keywords: "C# bundle harness, working with, harness, bundle C#, working with"
---

How to implement customized TestArchitect actions using the C\# programming language.

## {{< expand >}} Supported OS environments

-   Windows

Since TestArchitect version [8.3](/user-guide/version-history/features-added-to-testarchitect-8-3/windows#li.bundle_harness), TestArchitect offers a new architecture, C\# bundle harness, to implement C\# user-scripted actions. This new architecture provides the following advantages:

-   Easy deployment: The ability to reuse user-scripted actions among different projects by simply sharing DLLs of the actions
-   Usability: To ease the C\# function declaration and implementation
-   Low coupling: not having to merge source code and rebuild the entire harness solution, even though a single user-scripted action is added. In other words, adding one new user-scripted action does not affect the existing user-scripted actions.

{{<note>}} For legacy C\# user-scripted actions, created in TestArchitect versions prior to 8.3, you are not required to migrate them to C\# bundle harness. Specifically, your legacy C\# user-scripted actions continue to work normally in TestArchitect 8.3, and you are able to develop additional user-scripted actions that conform to legacy C\# harness architecture.

This lesson contains two exercises that demonstrate how to create C\#-scripted actions and how to make such actions accessible in your TestArchitect ABT tests.

1.  [Developing your own user-scripted C\# bundle harness action](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-c-bundle-harness/developing-your-own-user-scripted-c-bundle-harness-action)  
TestArchitect provides sample C\# bundle harness code files for you to learn to develop, build, and execute C\#-scripted actions.
2.  [Scripting "hello" C\# harness action](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-c-bundle-harness/scripting-hello-c-harness-action)  
In this topic, we will write C\# code which implements the simple hello user-scripted action.
3.  [Creating test case and stub action for "hello" action](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-c-bundle-harness/creating-test-case-and-stub-action-for-quot-hello-quot-action)  
Create a stub action in TestArchitect as a placeholder for theC\#-coded hello actionyou defined previously, then write a test to invoke the action.
4.  [Running the C\#-scripted test](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-c-bundle-harness/running-the-c-scripted-test)  
Execute the test that calls the hello action you implemented in the C\# bundle harness.
5.  [User-scripted C\# bundle harness action that interacts with GUI](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-c-bundle-harness/user-scripted-c-bundle-harness-action-that-interacts-with-gui/)  
In this exercise, we will create a user-scripted action that interacts with an application's user interface.
6.  [Migrating C\# user-scripted actions created in earlier versions to TestArchitect 8.3](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-c-bundle-harness/migrating-c-user-scripted-actions-created-in-earlier-versions-to-testarchitect-8-3)  

7.  [C\# bundle harness API reference](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-c-bundle-harness/c-bundle-harness-api-reference)  
How to access the API specifications of the C\# bundle harness library.




