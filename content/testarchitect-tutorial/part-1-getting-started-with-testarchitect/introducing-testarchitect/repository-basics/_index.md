--- 
title: "Repository basics"
linktitle: "Repository basics"
description: "TestArchitect relies on repositories to store test assets."
weight: 1
aliases: 
    - /TA_Tutorials/Topics/Repository_basics.html
keywords: "repositories, basics, login, test modules, Sample Repository"
---

TestArchitect relies on repositories to store test assets.

Everything about your project – tests, data, interfaces, results, etc. – is stored in a repository. Additionally, a repository is used to store other assets such as administrative resources, which include such entities as users, groups, and permissions.

To work with TestArchitect, you must be connected to at least one repository. A repository is managed by a repository server, or RS. Installation of TestArchitect on your machine includes, by default, the installation of a repository server. This allows you to create, and work with, a repository on your local machine \(the “localhost”\). In fact, the SampleRepository that is included with TestArchitect resides on your own machine.

{{<note>}} In an organization, most working repositories are maintained on one or more servers. When you participate in a test project, you typically connect to a shared repository on a central repository server. You may even share your own local repository with others, so that *your* machine acts as a repository server for a group.

When you start TestArchitect for the first time, you see the sample repository \(SampleRepository\), which appears as a node on the TestArchitect explorer tree panel at left. This is the example repository that is shipped with TestArchitect and stored on your local machine.

![](/images/TA_Help/Images/ug_connectrepository.png)

To work on data from a TestArchitect repository, you must connect, and log on, to that repository.



**Related information**  


[Working with TestArchitect Client](/TA_Help/Topics/Getting_started_overview_working_with_TestArchitect_client.html)

[The test editor](/TA_Help/Topics/Getting_started_overview_the_test_editor.html)

[Logging on to the sample repository](/TA_Tutorials/Topics/Logging_in_to_sample_repo.html)

[Sample Repository](/TA_Tutorials_Sample_App/Topics/SR_Sample_Repository_def.html)

