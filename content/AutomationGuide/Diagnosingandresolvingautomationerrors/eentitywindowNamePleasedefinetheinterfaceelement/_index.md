--- 
title: "Interface element *<controlName\\>* was not defined in interface entity *<windowName\\>*. Please define the interface element."
linktitle: "Interface element <controlName\\> was not defined in interface entity <windowName\\>. Please define the interface element."
weight: 18
aliases: 
    - /TA_FAQ/Topics/0x80010003L.html
---
# Interface element *<controlName\>* was not defined in interface entity *<windowName\>*. Please define the interface element. {#reference_0x80010003L .reference}

Error code: 0x80010003L

## Problem { .section}

This happens because the specified control is not defined yet.

## Solution { .section}

Capture the desired control by using the [Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer.html) or [point-to-identify](../../TA_Help/Topics/Interface_def_client_interface_tool_identify.html) tool, and then re-run the test.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[No matching UI object found for <controlName\>, defined by <controlDefinition\>, within the timeout of <value\> seconds. Please check the interface definition for <controlName\>, or set a longer timeout with the object wait setting.](../../TA_FAQ/Topics/0x80010009L-1.html)

**Next topic:**[The argument <argumentName\> cannot be empty. Please input valid data.](../../TA_FAQ/Topics/0x80010008L.html)

