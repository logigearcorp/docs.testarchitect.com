--- 
title: "No settings \\('title', 'doc title' or 'handle', etc.\\) defined for interface entity *<windowName\\>*. Please check if the correct interface is currently in use, or define the interface entity."
linktitle: "No settings \\('title', 'doc title' or 'handle', etc.\\) defined for interface entity <windowName\\>. Please check if the correct interface is currently in use, or define the interface entity."
description: "Error code: 0x80010002L Problem This happens because the specified window is not defined yet. Solution Create the desired interface entity (window), and re-run the test. ( Learn more .) If the windows ..."
weight: 28
aliases: 
    - /TA_FAQ/Topics/0x80010002L.html
keywords: "automation errors, 0x80010002L"
---

Error code: 0x80010002L

## Problem

This happens because the specified window is not defined yet.

## Solution

-   Create the desired interface entity \(window\), and re-run the test. \([Learn more](/TA_Help/Topics/Interface_def_Adding.html).\)
-   If the windows is already defined, ensure that you are using the correct interface. If you do not want to set the [default interface](/TA_Help/Topics/Interface_def_set_default_interface.html), you might use the [use interface](/TA_Automation/Topics/bia_use_interface.html) built-in action.




