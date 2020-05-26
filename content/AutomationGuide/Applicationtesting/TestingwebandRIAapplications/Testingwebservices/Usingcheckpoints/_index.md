--- 
title: "Using web service checkpoints"
linktitle: "Using checkpoints"
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_testing_web_service_using_checkpoints.html
---
# Using web service checkpoints {#concept_r2g_gjf_1y .concept}

A web service checkpoint is a test operation that verifies that an HTTP response returned from a tested web service contains appropriate data.

Depending on the format returned by the tested web service, an HTTP response might be in XML, JSON, or text format. Therefore, TestArchitect provides different types of checkpoints which let you easily retrieve or compare the returned HTTP response including:

-   [JSON checkpoints](bia_JSON.html)
-   [XML checkpoints](bia_XML.html)
-   Value checkpoints, such as, [check value](bia_check_value.html), or [check text contains](bia_check_text_contains.html), etc.

In general, in order to perform a web service checkpoint, you should first parse the HTTP response by using the [parse http response](bia_parse_http_response.html) built-in action. Subsequently, call the respective web service checkpoints, mentioned above, to compare the method result against the expected data.

**Parent topic:**[Testing web services](../../TA_Automation/Topics/aut_testing_web_service.html)

**Previous topic:**[Specifying web service credentials](../../TA_Automation/Topics/aut_testing_web_service_specifying_credentials.html)

