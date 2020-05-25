--- 
title: "Using Diff Tool for project item comparisons"
linktitle: "Diff Tool for project items"
aliases: 
    - /TA_Help/Topics/ug_item_comparison.html
---
# Using Diff Tool for project item comparisons {#concept_yvy_bhs_yp .concept}

This topic describes the use of the Diff Tool to compare two project items, such as test modules or data sets, or revisions of a given project item.

At times, it can be helpful to compare the contents of two similar text-based project items. You may, for instance, have two revisions of a test module that were edited by different people, or two variations of an interface entity. Arranging the two items on screen side-by-side and doing an eyeball examination can help when the files are small and the differences few. But for anything more involved, trying to understand all the differences this way can be tedious and error-prone.

The Diff Tool makes the job of difference viewing more systematic, reliable, and efficient. It can be used to perform comparisons between the following types of project items:

-   [Test modules](Create_test_module.html).
-   [Data sets](Projects_and_tests_dataset.html).
-   [User-defined actions](../../reuse/reuse.High_level_actions.html).
-   [Interface entities](Interface_entities_and_elements.html).
-   [$ Class Maps entities](Interface_def_Viewer_class_mapping.html).

**Note:**

-   The Diff Tool supports the comparing of project items not just within a project, but across projects and across repositories as well.
-   For comparing pairs of test results, TestArchitect offers a different tool. See [Comparing test results](Test_result_baselining.html).

## The user interface {#section.Diff_tool_GUI .section}

The Diff Tool dialog box consists of two main components:

-   [The diff toolbar](ug_item_comparison.md#section_Toolbar), to allow you to control the nature of the comparison, navigate between found differences, and interface external tools; and
-   [Item panels](ug_item_comparison.md#section_Items_panel), which provide side-by-side comparisons of the two compared items.

This screenshot displays a comparison of two test modules in the Diff Tool:

![](../Images/diff_tool_dlg_panes.png)

The Diff Tool dialog box consists of the following parts:

-   [Toolbar](ug_item_comparison.md#section_Toolbar).
-   [Item panels](ug_item_comparison.md#section_Items_panel).
    -   Headers.
    -   Current location panels.
    -   Display panels.

## The toolbar {#section_Toolbar .section}

The Diff Tool's tool bar contains six buttons:

![](../Images/ug_diff_tool_toolbar.png)

1.  **Previous Difference**:

    Selects the previous difference, relative to the currently selected line. Use this to step backwards \(upwards\) through differences between the files.

    **Fastpath:** F6.

    **Note:** This button is disabled when the currently selected line is at or above the first detected difference in the files.

2.  **Next Difference**:

    Selects the next difference, relative to the currently selected line. Use to step forwards \(downwards\) through differences between the files.

    **Fastpath:** F7.

    **Note:** This button is disabled when the currently selected line is at or below the first detected difference in the files.

3.  **Refresh**:

    Re-scans the items and updates the differences. Use after changes have been made to one or both items.

    **Fastpath:** F5.

    **Warning:**

    -   If changes are detected, the following warning dialog box appears.

        -   **Yes**: reload data without saving changes.
        -   **No**: abort the refresh.
        ![](../Images/diff_tool_refresh.png)

    -   If the repository containing the item is disconnected, you will see the following warning message dialog box.

        -   Yes: close the Diff Tool window.
        -   No: close the warning dialog box, and without reloading data.
        ![](../Images/diff_tool_refresh_2.png)

4.  **Case Sensitive**:
    -   Disabled: \(Default\) Differences between lowercase and uppercase letters are ignored. For example, CarRental, CARRENTAL, carrental are all treated as identical text.
    -   Enabled: Comparisons take letter case into account. The text strings CarRental, CARRENTAL, carrental are all treated as different.
5.  **Character Level**:
    -   Disabled: \(Default\) Highlights differences at the word level.
    -   **Enabled**: Highlights character-by-character differences.
6.  **Open External Merge Tool**: The Diff Tool integrates with other applications that allow a third-party file comparison \(diff\) or file merging tool to be specified. \([Learn more.](ug_diff_tool_using_other_products.html)\)

## The Item panels {#section_Items_panel .section}

![](../Images/ug_diff_tool_source_target_panel.png)

Each Item panel includes the following elements:

1.  **Header**: The header at the top of each Item panel displays the name of that item.
    -   The item's name is a hyperlink. Clicking this link opens the item in a TestArchitect editor window.
    -   Hover your mouse over the hyperlink to see a screentip for the item. The displayed information includes the item's name, its TestArchitect explorer path within the repository, and revision timestamp.

        ![](../Images/diff_tool_screentip.png)

2.  Current location panel: Displays the currently selected line of the project item.
3.  Display panel: Displays the text content of the item. Lines that are different from their counterparts \(or have no counterparts\) in the comparison file are highlighted. \(See highlighting details below.\) This panel is also the main area for visualizing and navigating the differences between the two items.

    **Note:** As you scroll an item up/down or left/right using its scroll bars, the comparison item is scrolled in sync with it, so that the two windows remain visually aligned. Also note that when you select a difference, it is always selected in both Item panels.


## Difference highlighting { .section}

TestArchitect highlights differences between two items with colors. This section describes how each of the basic difference types is detected and displayed.

-   **Differences between lines**:
    -   Whenever a difference is detected between corresponding lines of the two items, the differing lines are highlighted in yellow.

        ![](../Images/diff_tool_difference_blocks.png)

        **Note:** One exception is item headers. If differences are detected between item headers, the original \(blue\) background color is preserved, and difference highlighting is limited to the word or character level. \(Keep in mind that the headers refered to here are those *within* the respective project items, not the item panel headers within the Diff Tool window.\)

        ![](../Images/diff_tool_difference_blocks_header.png)

    -   Within highlighted lines, exact differences are further highlighted by rendering the text in red. At this level of difference highlighting, you can exercise one of two options, as determined by the state of the toolbar's [**Character Level**](ug_item_comparison.md#li_a4r_12w_cq) pushbutton:
        -   *With button inactive \(Default state\)*: Differences are displayed at the word level.

            ![](../Images/diff_tool_word_level.01.png)

        -   *With button in active state*: Differences are displayed by character.

            ![](../Images/diff_tool_character_level.01.png)

        -   Differences in whitespace and punctuation are also detected by the Diff Tool:

            ![](../Images/diff_tool_break_word.png)

-   **Missing lines**: Sometimes, lines existing in one project item do not exist in the compared item. Lines in an item that are found to have no counterparts are highlighted in blue, with all the text in red. In the compared item, the corresponding blank lines are colored grey; if no such corresponding blank lines exist, they are automatically inserted, to maintain visual correspondence.

    ![](../Images/diff_tool_missing_blocks.png)


**Note:**

**Interface entity comparisons** are a special case. Unlike other project items, the order in which an interface entity's actions lines \(interface element and interface entity setting lines\) appear is basically inconsequential. Hence it is possible for two interface entities to look very different, yet be functionally identical. In addition to the usual highlighting rules, the Diff Tool automatically rearranges the two compared interface entities' action lines, so that they ultimately appear in their respective Item panels grouped into four distinct sections:

![](../Images/ug_diff_tool_interface_entities.png)

1.  **Header**: Contains interface entity and [interface entity setting](../../TA_Automation/Topics/bia_interface_entity_setting.html) action lines.
2.  **Missing**: Contains action lines present in only one of the two interface entities.
3.  **Differences**: Contains action lines that the tool has determined to be corresponding lines \(due to similarities\), but which nevertheless have differences, which are highlighted.
4.  **Identicalness**: Contains fully matching action lines.

## Working with multiple Diff Tool windows { .section}

A unique Diff Tool window is launched every time you invoke the Diff Tool. Hence, it is possible to have multiple Diff Tool windows open concurrently, each displaying a separate comparison.

## Using drag-and-drop to update an open Diff Tool window { .section}

Say, for example, that you have a Diff Tool window already open, comparing a default user-defined action against a variation of itself. Now you would like to compare another variation against one of the two items. From the TestArchitect explorer tree tree, you can simply drag and drop the new action's node into either the left or right panel of the window. The contents of the window are automatically replaced with the new item, and the comparison is automatically refreshed.

**Note:** The compared items must be of same type. Otherwise, the following message appears:

![](../Images/diff_tool_warning_msg.png)

1.  [Comparing project items with Diff Tool](../../TA_Help/Topics/ug_diff_tool_comparing_items.html)  
How to view the differences between two project items of the same type in TestArchitect.
2.  [Comparing a project item's revisions with Diff Tool](../../TA_Help/Topics/ug_diff_tool_comparing_revisions.html)  
How to view the differences between two historical revisions of a project item.

**Parent topic:**[Diff tool](../../TA_Help/Topics/ug_diff_tool.html)

**Next topic:**[Using Diff Tool for folder comparisons](../../TA_Help/Topics/ug_diff_tool_directory.html)

