--- 
title: "InfoItem"
linktitle: "InfoItem"
description: "Syntax integer InfoItem (string tag, string text) Description Add an &#34;info item&#34;, to appear in the report. Parameters tag Label to be put in front of the reported item. text Text of the information ..."
weight: 48
aliases: 
    - /TA_Automation/Topics/abtf_InfoItem.html
keywords: "ABT Library Functions, InfoItem, InfoItem (ABT library function)"
---

## Syntax

`integer InfoItem (string tag, string text)`

## Description

Add an "info item", to appear in the report.

## Parameters

-   **tag**

    Label to be put in front of the reported item.

-   **text**

    Text of the information item.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   Example of a call: InfoItem \("time of day", "noon" \)
-   This will let the report show an entry like this: time of day: noon.




