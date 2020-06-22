--- 
title: "Editable fields"
linktitle: "Editable fields"
description: "Editable fields in a list view row item can be edited directly in the row item or via the Edit Multiple Fields dialog box."
weight: 2
aliases: 
    - /TA_Help/Topics/Listview_editable_fields.html
keywords: "editable fields, list views, non-editable fields, fields, editing"
---

Editable fields in a list view row item can be edited directly in the row item or via the Edit Multiple Fields dialog box.

Non-editable fields in a list view include all fields in the columns:

-   **Revision Timestamp**,
-   **Last update date**,
-   **Last updated by**,
-   **Creation date**,
-   **Created by**,
-   **Location**, and
-   **URL**.

Non-editable fields are shown as read-only text in a list view.

Editable fields in a list view include all fields in the columns:

-   **Name**,
-   **Description**,
-   **Assigned user**,
-   **Priority**,
-   **Status**,
-   **Recent Result**,
-   **Source**, **Notes**, and
-   [**User-defined Fields**](/TA_Administration/Topics/User_defined_fields.html).

Editable fields may or may not require additional steps to be performed before they can be edited. For example, the name of a test module is editable only after the module is checked out, but the description of the test module does not need to be checked out to be editable.

The following table applies to test module and test case list views. It indicates which fields are always editable, versus which are editable only when the test module is checked out.

|Entity|Editable If Checked Out|Always Editable|
|------|-----------------------|---------------|
|Test module|Name|-   Description<br>-   Assigned user<br>-   Priority<br>-   Status<br>-   Recent result<br>-   Source<br>-   Notes<br>-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)<br><br>|<br>
|Test case<br><br>|ID<br><br> Title<br><br>|-   Recent result<br>-   Source<br>-   Notes<br>-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)<br><br>|<br>

This table describes which fields are available for [mass editing](/TA_Help/Topics/Listview_edit_fields.html) using the Edit Multiple Fields dialog box:

|List View|Editable fields|
|---------|---------------|
|Test module|-   Status<br>-   Assigned user<br>-   Priority<br>-   Notes<br>-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)<br><br>|<br>
|Test case<br><br>|-   Notes<br>-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)<br><br>|<br>
|Test objective<br><br>|-   Notes<br>-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)<br><br>|<br>
|Data set<br><br>|-   Status<br>-   Assigned user<br>-   Notes<br>-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)<br><br>|<br>
|Action|-   Status<br>-   Assigned user<br>-   Notes<br>-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)<br><br>|<br>
|Interface|-   Notes<br>-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)<br><br>|<br>
|Interface Entity|-   Status<br>-   Assigned user<br>-   Notes<br>-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)<br><br>|<br>
|Pictures|-   Notes<br>-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)<br><br>|<br>
|Repository Results|-   Notes<br>-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)<br><br>|<br>
|Local Results|N/A|
|Test suites|N/A|
|Favorite|N/A|
|Bugs|N/A|




