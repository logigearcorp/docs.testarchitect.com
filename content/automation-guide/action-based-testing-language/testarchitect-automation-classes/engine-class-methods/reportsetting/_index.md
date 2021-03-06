--- 
title: "ReportSetting"
linktitle: "ReportSetting"
weight: 72
aliases: 
    - /TA_Automation/Topics/abtf_ReportSetting.html
---

## Syntax

`integer ReportSetting (string reporttag, string settingvalue)`

## Description

Display the value of a setting in the report.

## Parameters

-   **reporttag**

    Label to be put in front of the reported item.

-   **settingvalue**

    Text of the information item.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   Example of a call: ReportSetting \("data directory" \) This lets the report show an entry like this: data directory: c:\\abt\\data.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[ReportFinish](/TA_Automation/Topics/abtf_ReportFinish.html)

**Next topic:**[ReportTitle](/TA_Automation/Topics/abtf_ReportTitle.html)

