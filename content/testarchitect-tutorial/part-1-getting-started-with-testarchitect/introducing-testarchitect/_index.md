--- 
title: "Introducing TestArchitect"
linktitle: "Introducing TestArchitect"
description: "Before starting with the hands-on tutorials, let's review some of the basic features and ideas behind TestArchitect and the Action-Based Testing model."
weight: 1
aliases: 
    - /TA_Tutorials/Topics/Tutorial_Introducing_TA.html
keywords: 
---

Before starting with the hands-on tutorials, let's review some of the basic features and ideas behind TestArchitect and the Action-Based Testing model.

TestArchitect is an integrated development and execution environment for automated software testing. Development efforts in TestArchitect are organized into projects, and projects are stored in repositories, which may be shared by other users on a network. The more basic assets of a project, known as project items, include test modules, actions, data sets, interfaces, and test results. A revision control system built into TestArchitect protects against the danger of different users modifying the same project item concurrently, and ensures that older revisions of all items are archived and accessible.

Tests in TestArchitect are grouped into test modules, each of which can consist of any number of test cases. Each test case is written as a sequence of action lines, with each action line calling a specific action and, in most cases, supplying it with arguments. The actions called may be ones that are built into TestArchitect \(built-in actions\), or written by you or your team \([user-defined](/TA_Glossary/Topics/glossaryHighLevelAction.html) and [user-scripted](/TA_Glossary/Topics/glossaryScriptedAction.html) actions\).

Test modules, user-defined actions, and other TestArchitect project items are developed and maintained in the TestArchitect editor, a multi-featured tool that uses a familiar worksheet interface.

1.  [Repository basics](/TA_Tutorials/Topics/Repository_basics.html)  
TestArchitect relies on repositories to store test assets.
2.  [Action basics](/TA_Tutorials/Topics/Action_basics.html)  
Actions, which are at the heart of the Action Based Testing™ methodology, form the building blocks of TestArchitect tests.
3.  [The test module and template](/TA_Tutorials/Topics/The_test_module_template.html)  
By default, test modules present a template that assists you in creating well-formed tests, ones that conform to the Action Based Testing methodology.
4.  [Test editor basics](/TA_Tutorials/Topics/Test_editor_basics.html)  
The TestArchitect test editor is used to create and modify action-based tests.



