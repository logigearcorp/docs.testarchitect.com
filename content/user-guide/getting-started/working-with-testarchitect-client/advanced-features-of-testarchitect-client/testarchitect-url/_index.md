--- 
title: "TestArchitect URL"
linktitle: "TestArchitect URL"
description: "Within a TestArchitect repository, unique URLs are automatically assigned to various project items. This allows hyperlinks to be embedded into documents, such as spreadsheets, presentations, and word processing documents."
weight: 7
aliases: 
    - /TA_Help/Topics/Additional_features_TA_URL.html
keywords: "tap protocol, additional features, TestArchitect URL"
---

Within a TestArchitect repository, unique URLs are automatically assigned to various project items. This allows hyperlinks to be embedded into documents, such as spreadsheets, presentations, and word processing documents.

With some exceptions, each TestArchitect project, along with each of its subnodes in the TestArchitect explorer tree, has a unique URL assigned to it. \(Exceptions are the **Bugs** and **Results** nodes, local test results, and individual picture check baselines.\) Hence the following entities all have unique URLs:

-   Each TestArchitect project
-   Most top-level nodes of each project: **Tests**, **Data**, **Actions**, **Interfaces**, **Test Suites**, and **Picture Checks**
-   Test folders, test modules, test cases, and test objectives
-   Action folders, user-defined actions, user-defined action arguments
-   Data set folders, dedicated data sets
-   Interfaces, interface entity folders, interface entities, interface elements
-   Test suite folders, test suites
-   Bugs
-   Picture check folders and shared picture checks
-   Result folders and repository-based results

The URL of a TestArchitect item has the following format:

```
tap://<IP(hostName)>:<portNumber>/<repositoryName>/<projectName>/<folderPath>/<entityName>-<entityID>
```

The URL can be found in the item's **Information** tab.

![](/images/TA_Help/Images/ug_TA_url.02.png)

**Note:** The `tap:` portion of the URL represents a proprietary protocol for TestArchitect.

**Remember:**

-   In order to open a URL, copy and paste the URL to File Explorer, and then press the Enter key. TestArchitect is opened to display the given item, provided that:
    -   TestArchitect Client is installed on your machine; and
    -   the named repository server is accessible
-   Upon opening, you may be prompted for a user name and password to log in to the named repository.




