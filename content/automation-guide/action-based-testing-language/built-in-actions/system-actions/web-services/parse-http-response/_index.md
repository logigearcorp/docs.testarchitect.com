--- 
title: "parse http response"
linktitle: "parse http response"
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_parse_http_response.html
keywords: "parse http response, parse http response header, parse http response body, parse http response status, parse response"
---

## Description

Parse the response of the request to status, header and body.

## Arguments

-   **response**

    HTTP response

-   **status**

    \(Optional\) Variable to store the HTTP status code of the response

-   **header**

    \(Optional\) Variable to store the HTTP header of the response

-   **body**

    \(Optional\) Variable to receive the HTTP body of the response


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   If the variables in arguments status, header, or body are left empty, TestArchitect supplies global variables with the names \_status, \_header, or \_body, respectively.
-   For a full list of returned HTTP status code, refer to [Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).
-   The returned contents of the HTTP header are automatically converted into JSON view. Whereas, the contents of the HTTP body are preserved as they are originally returned by the web service, such as XML, or JSON response, etc.
-   In order to see full result returned from this built-in action, set [max show length](max_show_length.html) to a higher value.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example

Suppose that you'd like to test a given Google API to send a message to a recipient with the following information:

-   API under test: [Users.messages: send](https://developers.google.com/gmail/api/v1/reference/users/messages/send)
-   URI: https://www.googleapis.com/gmail/v1/users/me/messages/send
-   Authentication scheme: OAuth 2.0
-   Header fields:Content-type: application/json
-   In the request body, supply a Users.messages resource with the following property as the metadata.

    |Property name|Value|Description|
    |-------------|-----|-----------|
    |raw|bytes|The entire email message in base64url encoded string.**Tip:** To encode a plain text string into a base64url encoded string, you can use the [Online Base64URL encoder](http://kjur.github.io/jsjws/tool_b64uenc.html) tool.<br>|

    -   Raw body content:

        ```
        To: logigearepgtest2@gmail.com
        Subject: This is a test mail
        
        This is a test mail
        ```

    -   Base64url encoded body content: VG86IGxvZ2lnZWFyZXBndGVzdDJAZ21haWwuY29tClN1YmplY3Q6IFRoaXMgaXMgdGVzdCBtYWlsCgpUaGlzIGlzIGEgdGVzdCBtYWls
    -   Request body declared in JSON format \{"raw":"base64url encoded string"\}

**Action Lines**

![](/images//Images/bia_parse_http_request_pgm.png)

**Result**

![](/images//Images/bia_parse_http_request_res.png)

**Parent topic:**[Web services](/TA_Automation/Topics/bia_web_services.html)

**Previous topic:**[send http request](/TA_Automation/Topics/bia_send_http_request.html)

**Related information**  


[Testing web services](/TA_Automation/Topics/aut_testing_web_service.html)

