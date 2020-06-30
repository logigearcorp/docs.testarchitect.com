--- 
title: "ScreenMessage"
linktitle: "ScreenMessage"
description: "Syntax integer ScreenMessage (string title, string text) Description Display a screen message. Parameters title Title (caption) of the window displaying the message. text The text of the message to be ..."
weight: 79
aliases: 
    - /TA_Automation/Topics/abtf_ScreenMessage.html
keywords: "ABT Library Functions, ScreenMessage, ScreenMessage (ABT library function)"
---

## Syntax

`integer ScreenMessage (string title, string text)`

## Description

Display a screen message.

## Parameters

-   **title**

    Title \(caption\) of the window displaying the message.

-   **text**

    The text of the message to be displayed.


## Return Value

The function returns 1 if "OK" button was pressed or 0 if "Cancel" button was pressed.

## Notes

-   The exact behavior of this function depends on the operating system. If possible the message will contain an Ok and a Cancel button. The return value of the function reflects which button was pressed.




