--- 
title: "Editing multiple fields"
linktitle: "Editing multiple fields"
description: "You can modify the field values of multiple items in an item list view by selecting Edit Fields from the context menu."
weight: 5
aliases: 
    - /TA_Help/Topics/Listview_edit_fields.html
keywords: "fields, editing multiple, list view, editable fields, multiple"
---

You can modify the field values of multiple items in an item list view by selecting **Edit Fields** from the context menu.

Ensure that the fields you want to edit are in editable states \(see the table below\) and the fields are listed in the list view.

{{<important>}} Editing multiple fields in a list view is applicable to all of the item list views, including **Test Modules**, **Test Cases**, **Data Sets**, **Interface Entities**, etc. It does not apply to **Favorites**, **Local results**, **Test Suite**, and **Bugs** list views.

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

To edit multiple items in a list view:

1.  Open an item list view.

    For example: test module list view

2.  In the list view, select more than one row containing the items you want to edit.

3.  Right-click one of the selected rows and click **Edit Fields**.

4.  In the Edit Multiple Fields dialog box, enable field editing by selecting the check boxes on the fields you want to edit.

5.  Choose a new field value for each item you want to edit.

    Depending on the type of value you are editing, choose a new value from the drop-down list box, or enter a new value into the text box, if available.

    For example: These are editable fields of test module list view.

    ![](/images/TA_Help/Images/edit_multiple_fields_dlg.png)

6.  Click **Apply** to save all edited values.

    **Tip:** Click **Reset** to reset all field values.


TestArchitect only changes and updates fields in a list view if the edited fields are in an editable state. All changes to non-editable fields are ignored.



