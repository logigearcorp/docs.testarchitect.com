--- 
title: "TA handle"
linktitle: "TA handle"
description: ""
weight: 124
aliases: 
    - /TA_Glossary/Topics/glossaryTAHandle.html
keywords: "glossary, TA handle"
---

A unique ID for a physical window in the target system. TA handles are used when there is a concern that the normal means of identifying a window through one or more property-value pairs will not produce a unique result. \(**Example:** Having multiple instances of Notepad open concurrently.\)

A TA handle is a composite of both the handle assigned by the host operating system \(hWnd in Windows\), and the name of the interface entity definition for that window. The first part allows TestArchitect to uniquely identify a specific window in the system under test, independent of any interface entity definition, so that two or more instances of the same window may be separately addressed by the test actions. The second part allows the window to be associated with an interface entity, and hence the contained interface elements, thus providing access to the TA names of the window's controls.

