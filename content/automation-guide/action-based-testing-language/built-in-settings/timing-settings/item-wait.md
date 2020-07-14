--- 
title: "item wait"
linktitle: "item wait"
description: "Description The maximum wait time for an item to become available or, depending on the action involved, unavailable. An item can be one of the following: tree node menu item list item (that is, an ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bis_item_wait.html
keywords: "built-in settings, item wait, settings, item wait (settings), item wait, maximum wait time for specified item to become available, maximum time to wait for specified item to become available"
---

## Description

The maximum wait time for an item to become available or, depending on the action involved, unavailable.

An item can be one of the following:

-   tree node
-   menu item
-   list item \(that is, an item in a list view, list box, or combo box\)
-   table cell

## Value units

seconds

## Default value

3

## Notes

-   An item is available when it is visible, enabled, or it has a bounding rectangle.
-   In the case of tree nodes and menu items: TestArchitect waits within the time-out, specified by item wait, for each level of the node path, or the menu path.
-   For example \(assuming the default setting of 3 seconds is in effect\):
    -   Check the existence of tree node: **node A** \> **node B** \> **node C**: the automation waits up to 3 seconds for each sequential node to become available.
    -   Check for the nonexistence of tree node: **node A** \> **node B** \> **node C**:
        -   The automation waits up to 3 seconds for **node A** to become available;
        -   Upon **node A**'s appearance, the automation waits up to 3 seconds for **node B** to become available;
        -   Upon **node B**'s appearance, the automation waits up to 3 seconds for **node C** to become *unavailable*.




