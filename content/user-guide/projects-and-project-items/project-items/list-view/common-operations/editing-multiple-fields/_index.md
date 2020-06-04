--- 
title: "Editing multiple fields"
linktitle: "Editing multiple fields"
weight: 5
aliases: 
    - /TA_Help/Topics/Listview_edit_fields.html
---

You can modify the field values of multiple items in an item list view by selecting **Edit Fields** from the context menu.

Ensure that the fields you want to edit are in editable states \(see the table below\) and the fields are listed in the list view.

**Important:** Editing multiple fields in a list view is applicable to all of the item list views, including **Test Modules**, **Test Cases**, **Data Sets**, **Interface Entities**, etc. It does not apply to **Favorites**, **Local results**, **Test Suite**, and **Bugs** list views.

|List View|Editable fields|
|---------|---------------|
|Test module|-   Status
-   Assigned user
-   Priority
-   Notes
-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)

|
|Test case

|-   Notes
-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)

|
|Test objective

|-   Notes
-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)

|
|Data set

|-   Status
-   Assigned user
-   Notes
-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)

|
|Action|-   Status
-   Assigned user
-   Notes
-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)

|
|Interface|-   Notes
-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)

|
|Interface Entity|-   Status
-   Assigned user
-   Notes
-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)

|
|Pictures|-   Notes
-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)

|
|Repository Results|-   Notes
-   [User-defined fields](/TA_Administration/Topics/User_defined_fields.html)

|
|Local Results|N/A|
|Test suites|N/A|
|Favorite|N/A|
|Bugs|N/A|

To edit multiple items in a list view:

1.  Open an item list view.

    For example: test module list view

2.  In the list view, select more than one row containing the items you want to edit.

3.  Right-click one of the selected rows and click **Edit Fields**.

4.  In the Edit Multiple Fields dialog box, enable field editing by selecting the check boxes on the fields you want to edit.

5.  Choose a new field value for each item you want to edit.

    Depending on the type of value you are editing, choose a new value from the drop-down list box, or enter a new value into the text box, if available.

    For example: These are editable fields of test module list view.

    ![](/images//Images/edit_multiple_fields_dlg.png)

6.  Click **Apply** to save all edited values.

    **Tip:** Click **Reset** to reset all field values.


TestArchitect only changes and updates fields in a list view if the edited fields are in an editable state. All changes to non-editable fields are ignored.

**Parent topic:**[Common operations](/TA_Help/Topics/Listview_common_operations.html)

**Previous topic:**[Filters](/TA_Help/Topics/Listview_filtering.html)

