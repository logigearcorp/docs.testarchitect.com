--- 
title: "Working with checks"
linktitle: "Working with checks"
weight: 6
aliases: 
    - /TA_Automation/Topics/Automation_model_working_with_checks.html
---

In TestArchitect, a check compares and verifies expected behavior against actual observed behavior during a test. It's good practice to incorporate checks in test procedures to verify that the procedures are running as expected.

Currently, TestArchitect has multiple check actions that can be used to perform verifications of various types. For example:

-   If you expect a window to be launched in response to a user action, such as clicking on a button, you may wish to check for the presence of that window after the button is clicked.
-   When testing a web page, you may need to check the text value in the browser's status bar against an expected value.

## Built-in check actions list

The following is a full list of check actions – that is, actions whose outcomes are the registration of a Passed or Failed result – along with links to their respective reference pages:

|Action|Description|See also|
|------|-----------|--------|
|[check](check.html)|Check the displayed text in a control against an expected string value; in the base of Boolean-state controls, check the current state against an expected Boolean value.|[Text-display checks](Working_with_checks_text_display.html)|
|[check button menu exists](check_button_menu_exists.html)|Check for the existence of a menu item of a button drop-down.|[Existence checks](Working_with_checks_existence.html)|
|[check button menu not exists](check_button_menu_not_exists.html)|Check for the nonexistence of a specific menu item on a drop-down button .|[Existence checks](Working_with_checks_existence.html)|
|[check clipboard](check_clipboard.html)|Check the text content of the test system's clipboard against an expected value.|[System checks](Working_with_checks_operating_system.html)|
|[check column header name](check_column_header_name.html)|Check the header value of a column against an expected value.|[Text-display checks](Working_with_checks_text_display.html)|
|[check context menu item exists](check_context_menu_item_exists.html)|Check for the existence of an item on a context menu.|[Existence checks](Working_with_checks_existence.html)|
|[check context menu item not exists](check_context_menu_item_not_exists.html)|Check for the nonexistence of an item on a context menu.|[Existence checks](Working_with_checks_existence.html)|
|[check context menu item state](check_context_menu_item_state.html)|Validate the current state\(s\) of a given menu item on a context menu.|[Property checks](Working_with_checks_property.html)|
|[check controls matched](check_controls_matched.html)|Check that all defined controls in an interface entity match the controls in a window of the AUT.| |
|[check control exists](check_control_exists.html)|Check for the existence of a control.|[Existence checks](Working_with_checks_existence.html)|
|[check control not exists](check_control_not_exists.html)|Check for the nonexistence of a control.|[Existence checks](Working_with_checks_existence.html)|
|[check control property](check_control_property.html)|Capture the value of a specified property from a control, then compare it against an expected value.|[Property checks](Working_with_checks_property.html)|
|[check control tooltip](check_control_tooltip.html)|Capture the tooltip text of a control and compare it against an expected string.|[Text-display checks](Working_with_checks_text_display.html)|
|[check displayed text](check_displayed_text.html)|Check the text in a control against an expected text string.|[Text-display checks](Working_with_checks_text_display.html)|
|[check file exists](check_file_exists.html)|Check for the existence of a specified file.|[System checks](Working_with_checks_operating_system.html)|
|[check file not exists](check_file_not_exists.html)|Check for the nonexistence of a specified file.|[System checks](Working_with_checks_operating_system.html)|
|[check folder exists](check_folder_exists.html)|Check for the existence of a specified folder.|[System checks](Working_with_checks_operating_system.html)|
|[check folder not exists](check_folder_not_exists.html)|Check for the nonexistence of a specified folder.|[System checks](Working_with_checks_operating_system.html)|
|[check item exists](check_item_exists.html)|Check for the existence of a specified item in a list box, list view, or combo box control.|[Existence checks](Working_with_checks_existence.html)|
|[check item not exists](check_item_not_exists.html)|Check for the nonexistence of a specified item in a list box, list view, or combo box controla list box.|[Existence checks](Working_with_checks_existence.html)|
|[check listbox checked](check_listbox_checked.html)|Check the state of a check box item in a list box control.|[Status checks](Working_with_checks_status.html)|
|[check list cell value](check_list_cell_value.html)|Check the text content of a cell in a list view against an expected value.|[Text-display checks](Working_with_checks_text_display.html)|
|[check list item order](check_list_item_order.html)|Check for the presence of a specified sequence of items in a control.|[Status checks](Working_with_checks_status.html)|
|[check list order](check_list_order.html)|Check that all the items of a control are sorted in either ascending or descending order.|[Status checks](Working_with_checks_status.html)|
|[check menu item exists](check_menu_item_exists.html)|Check for the existence of an item on a menu.|[Existence checks](Working_with_checks_existence.html)|
|[check native property](check_native_property.html)|Check the value of a native property of a control against an expected value.|[Property checks](Working_with_checks_property.html)|
|[check pattern](check_pattern.html)|Check whether a string of text conforms to a specified pattern.|[Get actions](Automation_model_working_with_checks_get.html)|
|[check pattern in text](check_pattern_in_text.html)|Check whether the displayed text of a control contains a specified substring, or matches a specified regular expression.|[Get actions](Automation_model_working_with_checks_get.html)|
|[check pattern not in text](check_pattern_not_in_text.html)|Check whether the displayed text of a control contains a specified substring, or matches a specified regular expression.|[Get actions](Automation_model_working_with_checks_get.html)|
|[check picker view component item count](check_picker_view_component_item_count.html)|Check the number of items in a component of a picker view control against an expected value.|[Status checks](Working_with_checks_status.html)|
|[check picker view item exists](check_picker_view_item_exists.html)|Check, based on the displayed text content, for the existence of an item in a component of a picker view control.|[Existence checks](Working_with_checks_existence.html)|
|[check picker view item not exists](check_picker_view_item_not_exists.html)|Check, based on the displayed text content, for the nonexistence of an item in a component of a picker view control.|[Existence checks](Working_with_checks_existence.html)|
|[check picture](check_picture.html)|Check a bitmap area of the AUT's current display against one or more stored baseline images. Result is Passed ifthe displayed image matches one of the baselines; otherwise Failed.|[Image checks](Working_with_checks_picture.html)|
|[check picture exists](check_picture_exists.html)|Check a bitmap area of the AUT's current display for the presence of a given instance of a specified target image.|[Image checks](Working_with_checks_picture.html)|
|[check picture not exists](check_picture_not_exists.html)|Check a bitmap area of the AUT's current display for the presence of a given instance of a specified target image.|[Image checks](Working_with_checks_picture.html)|
|[check process not running](check_process_not_running.html)|Check that a specified process is not running on a mobile device.|[System checks](Working_with_checks_operating_system.html)|
|[check process running](check_process_running.html)|Check that a specified process is running on a mobile device.|[System checks](Working_with_checks_operating_system.html)|
|[check row item](check_row_item.html)|Check the contents of a row in a table.|[Text-display checks](Working_with_checks_text_display.html)|
|[check scrollbar exists](check_scrollbar_exists.html)|Check for the existence of a scroll bar in a control.|[Existence checks](Working_with_checks_existence.html)|
|[check scrollbar not exists](check_scrollbar_not_exists.html)|Check for the nonexistence of a scroll bar in a control.|[Existence checks](Working_with_checks_existence.html)|
|[check selected count](check_selected_count.html)|Check the number of the selected items in a multiple selection control \(list box or list view\) against an expected count.|[Status checks](Working_with_checks_status.html)|
|[check selected items](check_selected_items.html)|Check the selection status of specified items in a multiple selection control.|[Status checks](Working_with_checks_status.html)|
|[check selected picker view item](check_selected_picker_view_item.html)|Check whether the display text of the currently selected item of a specified picker view component matches an expected text string.|[Text-display checks](Working_with_checks_text_display.html)|
|[check status bar section state](check_status_bar_section_state.html)|Check the state of a status bar section against an expected value.|[Status checks](Working_with_checks_status.html)|
|[check status bar section value](check_status_bar_section_value.html)|Check the caption of a specified section of the status bar against an expected value.|[Text-display checks](Working_with_checks_text_display.html)|
|[check status bar value](check_status_bar_value.html)|Check the text content of the first panel of a browser's status bar against an expected value.|[Status checks](Working_with_checks_status.html)|
|[check table cell value](check_table_cell_value.html)|Check the text content of a table cell against an expected value.|[Text-display checks](Working_with_checks_text_display.html)|
|[check table view cell exists](check_table_view_cell_exists.html)|Check for the existence of a specified table view cell.|[Existence checks](Working_with_checks_existence.html)|
|[check table view cell not exists](check_table_view_cell_not_exists.html)|Check for the nonexistence of a specified table view cell.|[Existence checks](Working_with_checks_existence.html)|
|[check table view cell value](check_table_view_cell_value.html)|Check the contents of a table view cell against an expected text string.|[Text-display checks](Working_with_checks_text_display.html)|
|[check table view section exists](check_table_view_section_exists.html)|Check for the existence of a table view section as identified by its header text.|[Existence checks](Working_with_checks_existence.html)|
|[check tab exists](check_tab_exists.html)|Check for the existence of a tab item \(a single tab in a tab bar\) as identified by its caption.|[Existence checks](Working_with_checks_existence.html)|
|[check tab not exists](check_tab_not_exists.html)|Check for the nonexistence of a tab item \(a single tab in a tab bar\) as identified by its caption.|[Existence checks](Working_with_checks_existence.html)|
|[check tab order](check_tab_order.html)|Check the tab order\* of several controls residing in a specified window.|[Status checks](Working_with_checks_status.html)|
|[check text contains](check_text_contains.html)|Check for the existence of a specified string of text within another string.|[Get actions](Automation_model_working_with_checks_get.html)|
|[check text exists](check_text_exists.html)|Check for the existence of a given [bitmap text fragment](/TA_Glossary/Topics/glossaryTextFragment.html) within a specified area of a bitmap.|[Optical Character Recognition checks](Working_with_checks_OCR.html)|
|[check text line](check_text_line.html)|Check a specified line of multi-line text content against a text string or regular expression.|[Get actions](Automation_model_working_with_checks_get.html)|
|[check text not contains](check_text_not_contains.html)|Check the nonexistence of a specified string within another string.|[Get actions](Automation_model_working_with_checks_get.html)|
|[check text not exists](check_text_not_exists.html)|Check for the nonexistence of a given [bitmap text fragment](/TA_Glossary/Topics/glossaryTextFragment.html) in a specified area of a bitmap.|[Optical Character Recognition checks](Working_with_checks_OCR.html)|
|[check toast message](check_toast_message.html)|Check the toast message on a mobile device against an expected string value.|[Text-display checks](Working_with_checks_text_display.html)|
|[check toolbar button exists](check_toolbar_button_exists.html)|Check for the existence of a button on a toolbar.|[Existence checks](Working_with_checks_existence.html)|
|[check toolbar button not exists](check_toolbar_button_not_exists.html)|Check for the nonexistence of a button on a toolbar.|[Existence checks](Working_with_checks_existence.html)|
|[check toolbar button state](check_toolbar_button_state.html)|Check the state of a button on a toolbar against an expected state.|[Status checks](Working_with_checks_status.html)|
|[check toolbar control value](check_toolbar_control_value.html)|Check the displayed text of a text box or a combo box control on a toolbar against an expected value.|[Text-display checks](Working_with_checks_text_display.html)|
|[check toolbar menu item exists](check_toolbar_menu_item_exists.html)|Check for the existence of an item on a drop-down menu hosted by a toolbar button \(that is, a drop-down menu that appears when user clicks a button on a toolbar\).|[Existence checks](Working_with_checks_existence.html)|
|[check toolbar menu item not exists](check_toolbar_menu_item_not_exists.html)|Check for the nonexistence of an item on a drop-down menu hosted by a toolbar button \(that is, a drop-down menu that appears when one clicks a button on a toolbar\).|[Existence checks](Working_with_checks_existence.html)|
|[check toolbar menu state](check_toolbar_menu_state.html)|Check, against an expected value, the state of an item on a drop-down menu hosted by a toolbar button \(that is, a drop-down menu that appears when user clicks a button on a toolbar\).|[Status checks](Working_with_checks_status.html)|
|[check trackbar value](check_trackbar_value.html)|Check the value of a trackbar\(slider\) against an expected value.|[Status checks](Working_with_checks_status.html)|
|[check tree node exists](check_tree_node_exists.html)|Check for the existence of a specified tree node.|[Existence checks](Working_with_checks_existence.html)|
|[check tree node menu state](check_tree_node_menu_state.html)|Check the state of a specified menu item on a context menu of a tree node against an expected value.|[Status checks](Working_with_checks_status.html)|
|[check tree node not exists](check_tree_node_not_exists.html)|Check for the nonexistence of a specified tree node.|[Existence checks](Working_with_checks_existence.html)|
|[check tree node status](check_tree_node_status.html)|Check the current status of a tree node.|[Status checks](Working_with_checks_status.html)|
|[check value](check_value.html)|Check the contents of an argument against an expected value.|[Get actions](Automation_model_working_with_checks_get.html)|
|[check window exists](check_window_exists.html)|Check for the existence of a specified window.|[Existence checks](Working_with_checks_existence.html)|
|[check window not exists](check_window_not_exists.html)|Check for the nonexistence of a specified window.|[Existence checks](Working_with_checks_existence.html)|
|[check window property](check_window_property.html)|Check the value of a specified TA property of a window against an expected value.|[Property checks](Working_with_checks_property.html)|
|[check xml query result](check_xml_query_result.html)|Check an XPath query result against an expected string.|[Get actions](Automation_model_working_with_checks_get.html)|
|[manual check](manual_check.html)|Display a modal dialog box asking user to perform a manual check.| |
|[report check](report_check.html)|Register a Passed or Failed check result in the test results, accompanied by user-defined text.|[Get actions](Automation_model_working_with_checks_get.html)|

The following topics provide more information about TestArchitect check actions.

1.  [Existence checks](/TA_Automation/Topics/Working_with_checks_existence.html)  
How to work with checks that verify the existence of windows, controls, or items in an AUT.
2.  [Text-display checks](/TA_Automation/Topics/Working_with_checks_text_display.html)  
Working with checks that verify expected text in a control.
3.  [Status checks](/TA_Automation/Topics/Working_with_checks_status.html)  
How to implement test scripts that verify the status of a control.
4.  [Property checks](/TA_Automation/Topics/Working_with_checks_property.html)  
How to make property checks of specified windows or controls.
5.  [Image checks](/TA_Automation/Topics/Working_with_checks_picture.html)  
How to create test procedures that compare images.
6.  [System checks](/TA_Automation/Topics/Working_with_checks_operating_system.html)  
How to create test procedures that verify your test machine's system data, including operating system, clipboard, files, and folders.
7.  [Optical Character Recognition checks](/TA_Automation/Topics/Working_with_checks_OCR.html)  
How to create a test procedure that verifies text on a control using Optical Character Recognition.
8.  [Get actions](/TA_Automation/Topics/Automation_model_working_with_checks_get.html)  
Use the get built-in action together with the check built-in action to retrieve and check a value against an expected value.

**Parent topic:**[The test language](/TA_Automation/Topics/The_test_language.html)

**Previous topic:**[Operator precedence](/TA_Automation/Topics/aut_operator_precedence.html)

**Next topic:**[Error handling and recovery](/TA_Automation/Topics/The_test_language_error_handling_and_recovery.html)

