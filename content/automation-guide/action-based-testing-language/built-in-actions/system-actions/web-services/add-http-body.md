--- 
title: "add http body"
linktitle: "add http body"
description: "Description Add a message body into an HTTP request. Arguments content Data of the message body Valid contexts This action may be used within the following project items: test modules and user-defined ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_add_http_body.html
keywords: "built-in actions, add http body, add http body (action), add http body, add message body to http request, add body to http"
---

## Description {{< permerlink >}} {#bia_add_http_body__section_iyg_dsd_1y} 

Add a message body into an HTTP request.

## Arguments {{< permerlink >}} {#bia_add_http_body__section_jyg_dsd_1y} 

-   **content**

    Data of the message body


## Valid contexts {{< permerlink >}} {#bia_add_http_body__section_kyg_dsd_1y} 

This action may be used within the following project items:test modules and user-defined actions.

## Notes {{< permerlink >}} {#bia_add_http_body__section_lyg_dsd_1y} 

-   An HTTP request must be instantiated via [create http request](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/create-http-request) before calling this built-in action.
-   Properties of the request body must be written in JSON format.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example {{< permerlink >}} {#bia_add_http_body__section_pyg_dsd_1y} 

Suppose that you'd like to test a given Google API to send a message to a recipient with the following information:

-   API under test: [Users.messages: send](https://developers.google.com/gmail/api/v1/reference/users/messages/send)
-   URI: https://www.googleapis.com/gmail/v1/users/me/messages/send
-   Authentication scheme: OAuth 2.0
-   In the request body, supply a Users.messages resource with the following property as the metadata.

    |Property name|Value|Description|
    |-------------|-----|-----------|
    |raw|bytes|The entire email message in base64url encoded string.{{<tip>}} To encode a plain text string into a base64url encoded string, you can use the [Online Base64URL encoder](http://kjur.github.io/jsjws/tool_b64uenc.html) tool.<br><br>|<br>

    -   Raw body content:

        ```
        To: logigearepgtest2@gmail.com
        Subject: This is a test mail
        
        This is a test mail
        ```

    -   Base64url encoded body content: VG86IGxvZ2lnZWFyZXBndGVzdDJAZ21haWwuY29tClN1YmplY3Q6IFRoaXMgaXMgdGVzdCBtYWlsCgpUaGlzIGlzIGEgdGVzdCBtYWls
    -   Request body declared in JSON format \{"raw":"base64url encoded string"\}

Action Lines

![](/images/TA_Automation/Images/bia_add_http_body_pgm.png)



**Related information**  


[Testing web services](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-services/)
