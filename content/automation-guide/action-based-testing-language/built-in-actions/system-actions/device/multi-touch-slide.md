--- 
title: "multi touch slide"
linktitle: "multi touch slide"
description: "Description Mimic the gesture of placing the fingers on specified locations, then swiping with all fingers traveling in a parallel direction. Arguments window TA name of the window. destination point ..."
weight: 18
aliases: 
    - /TA_Automation/Topics/bia_multi_touch_slide.html
keywords: "built-in actions, multi touch slide, multi touch slide (action), iOS (action), multi touch slide, Swipe between pages, Open Notification Center, Three finger drag, Swipe between full-screen apps"
---

## {{< expand >}} Description

Mimic the gesture of placing the fingers on specified locations, then swiping with all fingers traveling in a parallel direction.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **destination point**

    Location of the destination for the “primary finger” starting at the touch1 point \(format: `x, y`; units: points, relative to top-left corner of window\).

-   **slide duration**

    \(Optional\) Duration of slide \(units: milliseconds\).

-   **touch1, touch2, ... , touchN**

    Initial touch locations \(format for each: `x, y`; units: points, relative to top-left corner of window\).


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Applicable Systems/Platforms {{< permerlink >}} {#bia_multi_touch_slide__section_zfb_2cl_zcb} 

Use of this action is supported on the following systems/platforms: iOS.

## {{< expand >}} Notes {{< permerlink >}} {#bia_multi_touch_slide__section_tll_j2y_mk} 

-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/automation-guide/action-based-testing-language/built-in-actions/system-actions/operating-system/get-screen-resolution#li.ios.get_screen_resolution).\)
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.
-   The format for specifying positional values for the destination point and touchN arguments is `x, y`. For example: to simulate initial touch locations at \(20,35\) and \(45, 80\), set touch1 to 20, 35 and touch2 to 45, 80.
-   Note that the touch1 and destination point arguments specify the endpoints of the trajectory of the primary finger. Other fingers \(if specified by the optional touch2, touch3, etc., arguments\) move in a parallel and equidistant trajectory with the primary.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Example

Have your test move the cherry, apple and papaya icons in this application 320 pixels to the right.

![](/images/TA_Automation/Images/bia_multi_touch_slide_aut.r02.png)

**Action Lines**

The following action lines presume that picture checks have already been created for the various fruit icons.

![](/images/TA_Automation/Images/bia_multi_touch_slide_pgm.r02.png)




