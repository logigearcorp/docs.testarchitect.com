--- 
title: "What's new in TestArchitect for Windows"
linktitle: "What's new in TestArchitect for Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.2 Update 4 running under Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.2_update_4_Windows.html
keywords: "Release Notes 8.2 Update 4, Windows, What is new, Windows, TestArchitect 8.2 Update 4, TestArchitect 8.2 Update 4, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.2 Update 4 running under Windows.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

-   [**Support for \| symbol to separate keywords in variation identifiers:**](/user-guide/variations/creating-keyword-variations) Streamlines the process of creating multiple variations for a given keyword-defined attribute, such as Browser.

    Previously, each comma-delimited term within the keyword portion of a variation signature was limited to a single keyword. Now, each term, or "keyterm", may consist of multiple keywords OR'd together, for example, login \{Chrome \| Firefox\}. TestArchitect factors such variations into multiple "effective variations".



