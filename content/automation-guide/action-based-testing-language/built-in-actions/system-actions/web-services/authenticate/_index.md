--- 
title: "authenticate"
linktitle: "authenticate"
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_authenticate.html
---
keyword: [authenticate web service, web service authentication, authenticaion for web service]
---

# authenticate

## Description

Specify an HTTP authentication scheme and its information before working with web services. The user must be authenticated to the services.

## Arguments

-   **scheme**

    HTTP authentication scheme

    Possible values:

    -   basic: [Basic HTTP authentication](https://tools.ietf.org/html/rfc7617).
    -   oauth 2: [OAuth 2.0](https://oauth.net/2/)
    -   digest: [Digest authentication](https://tools.ietf.org/html/rfc2617#section-3).
-   **value**

    HTTP authentication information \(see Notes\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   You are required to declare this built-in action before the authentication is started. Additionally, this built-in action can also be declared after or before the declaration of [create http request](bia_create_http_request.html).
-   value argument: Depends on which authentication scheme is selected, there are different ways to provide HTTP authentication information.
    1.  For Basic HTTP authentication scheme: Specify username and password to authenticate with the service you are using. Follow this format `userid:password`.

        **Tip:** You can either input a plain text string or a base64url encoded string. To encode a text string into a base64url encoded string, you can use the [Online Base64URL encoder](http://kjur.github.io/jsjws/tool_b64uenc.html) tool.

        For example: username is John and password is Doe.

        -   Plain text string: John:Doe
        -   Base64url encoded string: Sm9objpEb2U
    2.  For OAuth 2.0 scheme: Specifying an access token which is required to access OAuth protected resources. For example: ya29.Ci-fA76X0cjJXa2Lx0RM-fRyAQ6-6pboEX-iuT7PR-yYV6D-Rfbos7bs151wiL-O7w
    3.  For Digest authentication scheme: Specify two fields including username and password to authenticate with the service you are using. Follow this format **username:password**.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example 1 - Basic authentication scheme

Suppose that you'd like to test the a given API based on the following information:

-   Authentication scheme: Basic authentication
-   Web service under test: http://192.168.190.212:8091/api/authenticate
-   Username: john.doe
-   Password: R6z,nUjeH\];3L4r:

**Action Lines**

![](/images//Images/bia_authenticate_pgm_2.png)

## Example 2 - OAuth 2.0 authentication scheme

Suppose that you'd like to test a given Gmail API to get all messages based on the following information:

-   Authentication scheme: OAuth 2.0
-   Web service under test: [Users.messages: get](https://developers.google.com/gmail/api/v1/reference/users/messages/get)
-   Access token: ya29.Ci-fA76X0cjJXa2Lx0RM-fRyAQ6-6pboEX-iuT7PR-yYV6D

    **Tip:** For Google APIs in order to retrieve the access token for OAuth 2.0, read [here](https://developers.google.com/oauthplayground/).


**Action Lines**

![](/images//Images/bia_authenticate_pgm.png)

## Example 3 - Digest authentication scheme

Suppose that you'd like to test a given API based on the following information:

-   Authentication scheme: Digest authentication
-   Web service under test: http://192.168.190.212:8091/api/authenticate
-   Username: john.doe
-   Password: 123

**Action Lines**

![](/images//Images/bia_authenticate_digest_auth_pgm.png)

**Parent topic:**[Web services](/TA_Automation/Topics/bia_web_services.html)

**Previous topic:**[attach file](/TA_Automation/Topics/bia_attach_file.html)

**Next topic:**[configure web service settings](/TA_Automation/Topics/bia_configure_web_service_settings.html)

**Related information**  


[Testing web services](/TA_Automation/Topics/aut_testing_web_service.html)

