--- 
title: "TA path"
linktitle: "TA path"
weight: 126
aliases: 
    - /TA_Glossary/Topics/glossaryTAPath.html
---

A formatted string, similar to a typical file system's filepath, used to specify the location of a project item within the TestArchitect explorer tree. Delimiters in the form of forward slashes \(/\) denote each next lower level in a TA path.

With one exception, all TA paths must begin with an initial forward slash, representing a given top-level project item node \(e.g., **Tests**, **Data**, etc.\). In general, any action in which a TA path may be an argument value is dedicated to a particular project item type, hence the nature of the initial slash is implied. For example, the action line

```
                     name          
use data set         /Vehicle Sets/Car models
```

looks for the data set Car models under the Vehicle Sets folder of the **Data** node of the current project.

The sole exception to the above rule applies to actions that operate on both test modules and test suites. In this case, an initial forward slash represents the **Tests** node, while a reference to the **Test Suites** node must be explicit, as follows:

```
// Execute the test module 'Login Validation':
                     name
run test             /Action-based Testing Basics/Functional Tests/Login Validation


// Execute the test suite 'Smoke tests':
                     name
run test             Test Suites/Smoke tests
```

