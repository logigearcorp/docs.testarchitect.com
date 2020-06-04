--- 
title: "-"
linktitle: "add http header"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_add_http_header.html
---
keyword: [add http header to URL, set http header for URL]
---

# add http header

## Description

Add a name/value pair as an HTTP header field that you might want to include with your request.

## Arguments

-   **key**

    Name of the header field

-   **value**

    \(Optional\) Value of the header field


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   An HTTP request must be instantiated via [create http request](bia_create_http_request.html) before calling this built-in action.
-   Refer to [here](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html) for syntax and semantics of all standard HTTP header fields. In general, each header field consists of a name followed by a colon \(":"\) and the field value.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example

Suppose that you'd like to test a Google Maps API with the following header fields:

```
Accept-Encoding: gzip;q=1.0, identity; q=0.5, *;q=0
Authorization: Basic Sm9obi5TBWI0aDpwQHNzd29yZA==
Host: maps.googleapis.com
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1(java1.5)
```

**Action Lines**

![](/images//Images/bia_add_http_hearder_pgm.png)

**Parent topic:**[Web services](/TA_Automation/Topics/bia_web_services.html)

**Previous topic:**[add http body](/TA_Automation/Topics/bia_add_http_body.html)

**Next topic:**[add http parameter](/TA_Automation/Topics/bia_add_http_parameter.html)

**Related information**  


[Testing web services](/TA_Automation/Topics/aut_testing_web_service.html)

