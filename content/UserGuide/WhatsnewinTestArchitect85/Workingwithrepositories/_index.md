--- 
title: "Working with repositories"
linktitle: "Working with repositories"
aliases: 
    - /TA_Help/Topics/Getting_started_overview_working_with_repositories.html
---
# Working with repositories {#getting_started_working_with_repositories .concept}

TestArchitect stores its information in a database called a repository.

Everything about your project – tests, data, interfaces, results, etc. – is stored in a repository. Additionally, a repository is used to store other assets such as administrative resources, which include such entities as users, groups, and permissions.

To work with TestArchitect, you must be connected to at least one repository. A repository is managed by a repository server, or RS. Installation of TestArchitect on your machine includes, by default, the installation of a repository server. This allows you to create, and work with, a repository on your local machine \(the “localhost”\). In fact, the SampleRepository that is included with TestArchitect resides on your own machine.

**Note:** In an organization, most working repositories are maintained on one or more servers. When you participate in a test project, you typically connect to a shared repository on a central repository server. You may even share your own local repository with others, so that *your* machine acts as a repository server for a group.

When you start TestArchitect for the first time, you see the sample repository \(SampleRepository\), which appears as a node on the TestArchitect explorer tree panel at left. This is the example repository that is shipped with TestArchitect and stored on your local machine.

![](../Images/ug_connectrepository.png)

To work on data from a TestArchitect repository, you must connect, and log on, to that repository.

## Authentication modes { .section}

There are two means by which TestArchitect users may log in to a repository. In both cases, users are required to have explicit accounts \(user names\) residing in the repository.

-   TestArchitect Authentication mode: Users log in with their repository user names and passwords. Authentication is performed directly by TestArchitect.
-   LDAP Authentication mode: Requires the availability of an LDAP-based directory service. Users are authenticated with their system \(e.g., Windows\) logins, thus eliminating the need for a separate login for TestArchitect. \(This is known as single sign-on.\)

**Important:** Only one authentication mode may be in effect for a repository at any given time. The chosen mode, established by an administrator of the repository, applies to all users of the repository.

1.  [Creating a repository](../../TA_Help/Topics/Repository_creating.html)  
How to create a new repository.
2.  [Connecting to a repository](../../TA_Help/Topics/Getting_started_overview_working_with_TestArchitect_client_connecting.html)  
To work on a given project, you must create a connection to its host repository, whether it exists on a local or remote repository server.
3.  [Logging in to a repository](../../TA_Help/Topics/Getting_started_overview_working_with_TestArchitect_client_logging.html)  
After connecting to a repository, your final step before being granted access to its contents is to log in to it.
4.  [Disconnecting from a repository](../../TA_Help/Topics/ug_Repository_disconnecting.html)  
If you no longer need to work on a project, you may disconnect from its host repository.
5.  [Logging in to a repository as a different user](../../TA_Help/Topics/ug_logging_as_different_user.html)  
When logged in to a repository, you have the option, in a one-step procedure, of logging yourself out and then logging back in as a different user.

**Parent topic:**[Getting started](../../TA_Help/Topics/Getting_started.html)

**Previous topic:**[Launching TestArchitect Client for the first time](../../TA_Help/Topics/Getting_started_launching_the_testArchitect_client.html)

**Next topic:**[Working with TestArchitect Client](../../TA_Help/Topics/Getting_started_overview_working_with_TestArchitect_client.html)

