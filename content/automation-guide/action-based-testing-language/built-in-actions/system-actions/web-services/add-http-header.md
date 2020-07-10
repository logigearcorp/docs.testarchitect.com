--- 
title: "add http header"
linktitle: "add http header"
description: "Description Add a name/value pair as an HTTP header field that you might want to include with your request. Arguments key Name of the header field value (Optional) Value of the header field Valid ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_add_http_header.html
keywords: "built-in actions, add http header, add http header (action), add http header to URL, set http header for URL"
---

## {{< expand >}} Description {{< permerlink >}} {#bia_add_http_header__section_iyg_dsd_1y} 

Add a name/value pair as an HTTP header field that you might want to include with your request.

## {{< expand >}} Arguments {{< permerlink >}} {#bia_add_http_header__section_jyg_dsd_1y} 

-   **key**

    Name of the header field

-   **value**

    \(Optional\) Value of the header field


## {{< expand >}} Valid contexts {{< permerlink >}} {#bia_add_http_header__section_kyg_dsd_1y} 

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes {{< permerlink >}} {#bia_add_http_header__section_lyg_dsd_1y} 

-   An HTTP request must be instantiated via [create http request](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/create-http-request) before calling this built-in action.
-   Refer to [here](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html) for syntax and semantics of all standard HTTP header fields. In general, each header field consists of a name followed by a colon \(":"\) and the field value.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## {{< expand >}} Example {{< permerlink >}} {#bia_add_http_header__section_pyg_dsd_1y} 

Suppose that you'd like to test a Google Maps API with the following header fields:

```
Accept-Encoding: gzip;q=1.0, identity; q=0.5, *;q=0
Authorization: Basic Sm9obi5TBWI0aDpwQHNzd29yZA==
Host: maps.googleapis.com
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1(java1.5)
```

**Action Lines**

![](/images/TA_Automation/Images/bia_add_http_hearder_pgm.png)




**Related information**  


[Testing web services](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-services/)

