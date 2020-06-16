--- 
title: "Work Item Query Language - Work Item Query reference"
linktitle: "Work Item Query reference"
description: "How to use Work Item Query Language (WIQL) to programmatically query for test points."
weight: 4
aliases: 
    - /TA_Help/Topics/ug_MTM_WIQL_reference.html
keywords: "integration, MTM, uploading TestArchitect results, WIQL, uploading TestArchitect results, WIQL, Microsoft Test Manager, uploading TestArchitect results, WIQL, WIQL, uploading results, Work Item Query Language, uploading results"
---

How to use Work Item Query Language \(WIQL\) to programmatically query for test points.

A WIQL query consists of a SELECT statement \(similar to that of the SQL language\) that lists the fields to be returned as columns in the result set. \([Learn more.](https://docs.microsoft.com/en-us/vsts/collaborate/wiql-syntax?view=vsts)\)

In TestArchitect, you might use a WIQL query to specify the location\(s\), in terms of test points, to which TA results are to be uploaded to TFS.

**Important:**

-   Currently, in TestArchitect, the only supported type of WIQL query is that which is used to query for test points.
-   A test point is an object in the TCM Object Model. It represents a TFS **test case** to be run against a **test configuration** in a test suite. Specifically:
    -   In MTM, when you select **Testing Center** \> **Plan tab** \> **Contents tab**, you see the list of test cases in each test suite. One of the columns in the grid is **Configurations**, which displays the number of test configurations that the test case is tested against in that test suite.
    -   Also in MTM, when you select **Testing Center** \> **Test tab** \> **Run Tests tab**, and then click on the same test suite, you see an entry in the grid for each test case/test configuration combination. These are test points.

## Typical query

A WIQL query consists of a SELECT statement and, optionally, a qualifying WHERE clause.

The basic syntax is:

|SELECT|```
SELECT \*
      FROM TestPoint 
      [WHERE Conditions]
```

|

**Remember:**

-   TestPoint is case-sensitive.
-   Since uploading TA test results to TFS requires the IDs of test cases residing in TFS, ensure that the results set of the WIQL query consists of TFS test case IDs. To accomplish that, it is highly recommended that the SELECT \* query be used. Note also that the WIQL query for test points does not support returning specific values.
-   The following table displays the list of TFS fields supported in WIQL queries working with TestArchitect.

    |Field|Description|
    |-----|-----------|
    |ConfigurationId|Test Configuration that a test point is assigned to.|
    |RecursiveSuiteId|Test suite and all its sub test suites \(if any\) that contain test points.|
    |SuiteId|Test suite that contains test points.|
    |TestCaseId|ID of the test case.|
    |PlanId|ID of the test plan.|

-   In the qualifying WHERE clause, the ID of the TFS test plan is mandatory. At a given time, only a single TFS test plan is accepted in the query session.

    **Tip:** You can find test plan ID in the following:

    -   in the [Select Location](/TA_Help/Topics/ug_MTM_upload_result_manual.html) dialog box:

        ![](/images/TA_Help/Images/test_plan_ID.png)

    -   in the MTM Testing Center window:

        ![](/images/TA_Help/Images/test_plan_ID_MTM.png)


## Query to upload TA test results to TFS tests assigned to specific configuration

```
SELECT * 
   FROM TestPoint
   WHERE PlanId=<ID of test plan> AND 
         SuiteId=<ID of test suite> AND 
         ConfigurationId=<ID of configuration>
```

## Example

Suppose that you'd like to upload results to TFS with the following information:

-   Demo\_VSO test plan, ID 3160
-   Calculation test suite, ID 3189
-   Windows 7 – Oracle configuration, ID 20

![](/images/TA_Help/Images/test_suite_plan_configuration_ID.png)

The query selects test points where the PlanId field equals 3160, the SuiteId field equals 3189, and the ConfigurationId field equals 20. The query returns all information of the test point including test case ID of the return set. Note that, as discussed above, test case ID is what we need to retrieve in the returned result set.

```
SELECT \* 
       FROM TestPoint
       WHERE PlanId=3160 AND 
       SuiteId=3189 AND 
       ConfigurationId=20

```

**Tip:** When you want to traverse TFS sub test suites recursively, change SuiteId into RecursiveSuiteId. In this case, all test cases below the specified test suite that satisfy the condition are returned.



