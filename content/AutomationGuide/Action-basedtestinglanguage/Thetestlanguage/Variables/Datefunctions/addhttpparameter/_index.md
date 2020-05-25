--- 
title: "add http parameter"
linktitle: "add http parameter"
aliases: 
    - /TA_Automation/Topics/bia_add_http_parameter.html
---
# add http parameter {#reference_t5m_mt3_zx .reference}

## Description {#section_iyg_dsd_1y .section}

Add a parameter including a pair of name/value to a GET request. Note that, this parameter will be added to the query string in the requester URL. For example: http://example.com/reseource/path/search?name=value

## Arguments {#section_jyg_dsd_1y .section}

key
:   Name of the parameter

value
:   \(Optional\) Value of the parameter

## Valid contexts {#section_kyg_dsd_1y .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes {#section_lyg_dsd_1y .section}

-   An HTTP request must be instantiated via [create http request](bia_create_http_request.html) before calling this built-in action.
-   To add multiple value parameters into the URI of the GET request, in your test procedures declare several add http parameter. These name/value pairs are joined with equal signs and different pairs are separated by the ampersand. For example: /test/demo\_form.asp?name1=value1&name2=value2.
-   Alternatively, when you do not want to use this built-in action to add a name/value pair into the GET request, append the name/value pair directly into the URI and then send the entire GET request to the server by using the [send http request](bia_send_http_request.html) built-in action. \(See Examples.\)
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings {#section_ugz_qhs_1y .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example {#section_pyg_dsd_1y .section}

**Action Lines**

-   Option \#1: Use add http parameter to add pairs of name/value into the GET request.

    ![](../Images/bia_add_http_parameter_pgm.png)

-   Option \#2: Use [send http request](bia_send_http_request.html) to append pairs of name/value into the URI of the GET request.

    ![](../Images/bia_add_http_parameter_pgm_2.png)


**Parent topic:**[Web services](../../TA_Automation/Topics/bia_web_services.html)

**Previous topic:**[add http header](../../TA_Automation/Topics/bia_add_http_header.html)

**Next topic:**[attach file](../../TA_Automation/Topics/bia_attach_file.html)

**Related information**  


[Testing web services](../../TA_Automation/Topics/aut_testing_web_service.html)

