--- 
title: "The specifications for interface entity *<windowName\\>* match *<number\\>* open windows. Please check the specifications, or use the 'identify windows' built-in action to assign a unique physical ID to the desired window."
linktitle: "The specifications for interface entity <windowName\\> match <number\\> open windows. Please check the specifications, or use the 'identify windows' built-in action to assign a unique physical ID to the desired window."
description: "Error code: 0x80010005L Problem This happens because there is more than one window that matches the definition of a given interface entity. And it is open simultaneously. Solution Ensure that only one ..."
weight: 9
aliases: 
    - /TA_FAQ/Topics/0x80010005L.html
keywords: "automation errors, 0x80010005L"
---

Error code: 0x80010005L

## Problem

This happens because there is more than one window that matches the definition of a given interface entity. And it is open simultaneously.

## Solution

Ensure that only one window is open at a time, and then re-run the automated test.




