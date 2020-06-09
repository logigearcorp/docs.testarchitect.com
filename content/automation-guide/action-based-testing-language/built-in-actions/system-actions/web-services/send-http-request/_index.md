--- 
title: "send http request"
linktitle: "send http request"
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_send_http_request.html
keywords: "send http request, send http get request, send http post request"
---

## Description

Send an HTTP request to a given resource.

## Arguments

-   **uri**

    Uniform Resource Identifiers \(URI\) to identify a resource

-   **method**

    An HTTP request method

    Possible values:

    -   [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET): Request data from a specified resource.
    -   [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST): Submit data to be processed to a specified resource.
    -   [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT): Replace all the current representations of the target resource with the uploaded content.
    -   [DELETE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE): Remove all the current representations of the target resource given by URI.
    -   [PATCH](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH): The PATCH method is used to apply partial modifications to a resource.
    -   [HEAD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD): The HEAD method asks for a response identical to that of a GET request, but without the response body.
    -   [OPTIONS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS): The OPTIONS method is used to describe the communication options for the target resource.
-   **timeout**

    \(Optional\) Amount of time to wait for an HTTP response from the server. \(units: seconds; default = 300 \).

-   **variable**

    \(Optional\) Variable to store the HTTP response

-   **expected code**

    \(Optional\) Expected HTTP status code of the response \(see Notes\)

-   **response file**

    Full path of file location to which to save the returned response body on the test machine.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Supported web services:
    -   [RESTful](http://docs.oracle.com/javaee/6/tutorial/doc/gijqy.html) \(Representational State Transfer architecture\)
    -   [SOAP](https://www.w3schools.com/xml/xml_soap.asp) \(Simple Object Access Protocol\) over HTTP-based web services
-   An HTTP request must be instantiated via [create http request](create_http_request.html) before calling this built-in action.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   expected code argument:
    -   Enter an expected HTTP status of the response. For example, 200 means that the request was successfully received, understood, and accepted. For a full list of HTTP status code, refer to [Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).
    -   When this value is provided, TestArchitect compares the returned status code against the expected status code. An [automation error](/TA_FAQ/Topics/0x80017002L.html) is generated, if these two values do not match each other.
-   response file argument: A full filename and extension must be declared. Otherwise, TestArchitect reports a warning automation and this argument is ignored.

    **Note:**

    -   Network resources and mapping network drives are also supported.
    -   On Windows: In order to specify [mapping network drives](http://www.dummies.com/computers/operating-systems/windows-7/how-to-map-a-network-folder-in-windows-7/), please disable User Account Control \(UAC\).
-   In order to see full result returned from this built-in action, set [max show length](max_show_length.html) to a higher value.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example - Case 1: Testing a given Google API to send a message to a recipient

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

![](/images//Images/bia_send_http_request_pgm.png)

**Result**

![](/images//Images/bia_send_http_request_res.png)

**Effect**

![](/images//Images/bia_send_http_request_effect.png)

## Example - Case 2: Testing SOAP over HTTP-based web services

Suppose that you'd like to test a given API of the GlobalWeather web service to get all major cities by a specific country name.

-   API under test: [GetCitiesByCountry](http://www.webservicex.com/globalweather.asmx?op=GetCitiesByCountry)
-   URI: [http://www.webservicex.com/globalweather.asmx](http://www.webservicex.com/globalweather.asmx)

-   Header fields:
    -   Content-Type: text/xml
    -   SOAPAction: http://www.webserviceX.NET/GetCitiesByCountry
-   In the request body, get all major cities of Australia.

    ```
    <?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:xsd="http://www.w3.org/2001/XMLSchema"
        xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
            <GetCitiesByCountry
                xmlns="http://www.webserviceX.NET">
                <CountryName>Australia</CountryName>
            </GetCitiesByCountry>
        </soap:Body>
    </soap:Envelope>
    ```


**Action Lines**

![](/images//Images/bia_send_http_request_soap_pgm.png)

## Example - Case 3: Retrieving an attachment through returned response body

Suppose that you'd like to test a given API web service to return an image through an HTTP GET.

-   Full path of file location to which to save the returned response body on the test machine: D:\\TestData\\tmp\\testfile.png

**Action Lines**

![](/images//Images/bia_send_http_request_response_file_pgm.png)

**Parent topic:**[Web services](/TA_Automation/Topics/bia_web_services.html)

**Previous topic:**[create http request](/TA_Automation/Topics/bia_create_http_request.html)

**Next topic:**[parse http response](/TA_Automation/Topics/bia_parse_http_response.html)

**Related information**  


[Testing web services](/TA_Automation/Topics/aut_testing_web_service.html)

