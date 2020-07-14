--- 
title: "add month compensation"
linktitle: "add month compensation"
description: "Description Controls the behavior when months are added to a date and the resulting date is not valid. For example, adding 1 month to 10/31 technically results in 11/31, a non-valid date. When add ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bis_add_month_compensation.html
keywords: "built-in settings, add month compensation, settings, add month compensation (settings), month compensation"
---

## Description

Controls the behavior when months are added to a date and the resulting date is not valid. For example, adding 1 month to 10/31 technically results in 11/31, a non-valid date. When add month compensation is **up**, the resulting date is 12/1, while a value of **down** yields 11/30, and "error" will issue a diagnostic. Other values are not defined.

## Allowable values

up, down

## Default value

up

## Example

## Test Lines

![](/images/TA_Automation/Images/bis_add_month_compensation_pgm.png)

## Result

![](/images/TA_Automation/Images/bis_add_month_compensation_res.png)



