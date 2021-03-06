--- 
title: "Using web service checkpoints"
linktitle: "Using checkpoints"
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_testing_web_service_using_checkpoints.html
---

A web service checkpoint is a test operation that verifies that an HTTP response returned from a tested web service contains appropriate data.

Depending on the format returned by the tested web service, an HTTP response might be in XML, JSON, or text format. Therefore, TestArchitect provides different types of checkpoints which let you easily retrieve or compare the returned HTTP response including:

-   [JSON checkpoints](JSON.html)
-   [XML checkpoints](XML.html)
-   Value checkpoints, such as, [check value](check_value.html), or [check text contains](check_text_contains.html), etc.

In general, in order to perform a web service checkpoint, you should first parse the HTTP response by using the [parse http response](parse_http_response.html) built-in action. Subsequently, call the respective web service checkpoints, mentioned above, to compare the method result against the expected data.

**Parent topic:**[Testing web services](/TA_Automation/Topics/aut_testing_web_service.html)

**Previous topic:**[Specifying web service credentials](/TA_Automation/Topics/aut_testing_web_service_specifying_credentials.html)

