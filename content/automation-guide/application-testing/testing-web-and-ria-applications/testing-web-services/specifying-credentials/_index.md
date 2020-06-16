--- 
title: "Specifying web service credentials"
linktitle: "Specifying credentials"
description: "Details how to specify authentication information for service clients."
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_testing_web_service_specifying_credentials.html
keywords: "web services testing, credential, authentication"
---

Details how to specify authentication information for service clients.

Typically, you are not required to carry out any additional actions before starting to work with web services. However, some web services require that the user must be authenticated to the web service before starting to work with it. To work with such web services, the following authentication approaches are currently supported by TestArchitect:

-   [Basic HTTP authentication](https://tools.ietf.org/html/rfc7617)
-   [OAuth 2.0](https://oauth.net/2/)
-   [Digest authentication](https://tools.ietf.org/html/rfc2617#section-3)

For this purpose, TestArchitect provides you a built-in action, [authenticate](/TA_Automation/Topics/bia_authenticate.html), which assists you in specifying the desired authentication information.

For example: The following action lines specify OAuth 2.0 authentication scheme and its access token for a sample web service.

![](/images/TA_Automation/Images/bia_authenticate_pgm_2.png)




