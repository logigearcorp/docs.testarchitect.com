--- 
title: "add http body"
linktitle: "add http body"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_add_http_body.html
---
# add http body {#bia_add_http_body .reference}

## Description {#section_iyg_dsd_1y .section}

Add a message body into an HTTP request.

## Arguments {#section_jyg_dsd_1y .section}

content
:   Data of the message body

## Valid contexts {#section_kyg_dsd_1y .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes {#section_lyg_dsd_1y .section}

-   An HTTP request must be instantiated via [create http request](bia_create_http_request.html) before calling this built-in action.
-   Properties of the request body must be written in JSON format.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings {#section_rvh_qhs_1y .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example {#section_pyg_dsd_1y .section}

Suppose that you'd like to test a given Google API to send a message to a recipient with the following information:

-   API under test: [Users.messages: send](https://developers.google.com/gmail/api/v1/reference/users/messages/send)
-   URI: https://www.googleapis.com/gmail/v1/users/me/messages/send
-   Authentication scheme: OAuth 2.0
-   In the request body, supply a Users.messages resource with the following property as the metadata.

    |Property name|Value|Description|
    |-------------|-----|-----------|
    |raw|bytes|The entire email message in base64url encoded string.**Tip:** To encode a plain text string into a base64url encoded string, you can use the [Online Base64URL encoder](http://kjur.github.io/jsjws/tool_b64uenc.html) tool.

|

    -   Raw body content:

        ```
        To: logigearepgtest2@gmail.com
        Subject: This is a test mail
        
        This is a test mail
        ```

    -   Base64url encoded body content: VG86IGxvZ2lnZWFyZXBndGVzdDJAZ21haWwuY29tClN1YmplY3Q6IFRoaXMgaXMgdGVzdCBtYWlsCgpUaGlzIGlzIGEgdGVzdCBtYWls
    -   Request body declared in JSON format \{"raw":"base64url encoded string"\}

**Action Lines**

![](../Images/bia_add_http_body_pgm.png)

**Parent topic:**[Web services](../../TA_Automation/Topics/bia_web_services.html)

**Next topic:**[add http header](../../TA_Automation/Topics/bia_add_http_header.html)

**Related information**  


[Testing web services](../../TA_Automation/Topics/aut_testing_web_service.html)

