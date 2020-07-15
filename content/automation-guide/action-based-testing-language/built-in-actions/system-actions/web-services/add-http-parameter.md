--- 
title: "add http parameter"
linktitle: "add http parameter"
description: "Description Add a parameter including a pair of name/value to a GET request. Note that, this parameter will be added to the query string in the requester URL. For example: ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_add_http_parameter.html
keywords: "built-in actions, add http parameter, add http parameter (action), add http parameter, add parameter to http get request, add get parameter to url, add url parameter"
---

## Description {{< permerlink >}} {#reference_t5m_mt3_zx__section_iyg_dsd_1y} 

Add a parameter including a pair of name/value to a GET request. Note that, this parameter will be added to the query string in the requester URL. For example: http://example.com/reseource/path/search?name=value

## Arguments {{< permerlink >}} {#reference_t5m_mt3_zx__section_jyg_dsd_1y} 

-   **key**

    Name of the parameter

-   **value**

    \(Optional\) Value of the parameter


## Valid contexts {{< permerlink >}} {#reference_t5m_mt3_zx__section_kyg_dsd_1y} 

This action may be used within the following project items:test modules and user-defined actions.

## Notes {{< permerlink >}} {#reference_t5m_mt3_zx__section_lyg_dsd_1y} 

-   An HTTP request must be instantiated via [create http request](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/create-http-request) before calling this built-in action.
-   To add multiple value parameters into the URI of the GET request, in your test procedures declare several add http parameter. These name/value pairs are joined with equal signs and different pairs are separated by the ampersand. For example: /test/demo\_form.asp?name1=value1&name2=value2.
-   Alternatively, when you do not want to use this built-in action to add a name/value pair into the GET request, append the name/value pair directly into the URI and then send the entire GET request to the server by using the [send http request](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/send-http-request) built-in action. \(See Examples.\)
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example {{< permerlink >}} {#reference_t5m_mt3_zx__section_pyg_dsd_1y} 

Action Lines

-   Option \#1: Use add http parameter to add pairs of name/value into the GET request.

    ![](/images/TA_Automation/Images/bia_add_http_parameter_pgm.png)

-   Option \#2: Use [send http request](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/send-http-request) to append pairs of name/value into the URI of the GET request.

    ![](/images/TA_Automation/Images/bia_add_http_parameter_pgm_2.png)





**Related information**  


[Testing web services](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-services/)
