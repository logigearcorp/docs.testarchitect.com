--- 
title: "Editable fields"
linktitle: "Editable fields"
aliases: 
    - /TA_Help/Topics/Listview_editable_fields.html
---
# Editable fields {#editable_fields .concept}

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
-   [**User-defined Fields**](../../TA_Administration/Topics/User_defined_fields.html).

Editable fields may or may not require additional steps to be performed before they can be edited. For example, the name of a test module is editable only after the module is checked out, but the description of the test module does not need to be checked out to be editable.

The following table applies to test module and test case list views. It indicates which fields are always editable, versus which are editable only when the test module is checked out.

|Entity|Editable If Checked Out|Always Editable|
|------|-----------------------|---------------|
|Test module|Name|-   Description
-   Assigned user
-   Priority
-   Status
-   Recent result
-   Source
-   Notes
-   [User-defined fields](../../TA_Administration/Topics/User_defined_fields.html)

|
|Test case

|ID

 Title

|-   Recent result
-   Source
-   Notes
-   [User-defined fields](../../TA_Administration/Topics/User_defined_fields.html)

|

This table describes which fields are available for [mass editing](Listview_edit_fields.html) using the Edit Multiple Fields dialog box:

|List View|Editable fields|
|---------|---------------|
|Test module|-   Status
-   Assigned user
-   Priority
-   Notes
-   [User-defined fields](../../TA_Administration/Topics/User_defined_fields.html)

|
|Test case

|-   Notes
-   [User-defined fields](../../TA_Administration/Topics/User_defined_fields.html)

|
|Test objective

|-   Notes
-   [User-defined fields](../../TA_Administration/Topics/User_defined_fields.html)

|
|Data set

|-   Status
-   Assigned user
-   Notes
-   [User-defined fields](../../TA_Administration/Topics/User_defined_fields.html)

|
|Action|-   Status
-   Assigned user
-   Notes
-   [User-defined fields](../../TA_Administration/Topics/User_defined_fields.html)

|
|Interface|-   Notes
-   [User-defined fields](../../TA_Administration/Topics/User_defined_fields.html)

|
|Interface Entity|-   Status
-   Assigned user
-   Notes
-   [User-defined fields](../../TA_Administration/Topics/User_defined_fields.html)

|
|Pictures|-   Notes
-   [User-defined fields](../../TA_Administration/Topics/User_defined_fields.html)

|
|Repository Results|-   Notes
-   [User-defined fields](../../TA_Administration/Topics/User_defined_fields.html)

|
|Local Results|N/A|
|Test suites|N/A|
|Favorite|N/A|
|Bugs|N/A|

**Parent topic:**[List view](../../TA_Help/Topics/Projects_and_tests_list_view.html)

**Previous topic:**[Common operations](../../TA_Help/Topics/Listview_common_operations.html)

**Next topic:**[Test module list view](../../TA_Help/Topics/Listview_TM.html)

