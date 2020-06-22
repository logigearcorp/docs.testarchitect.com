--- 
title: "Using web service checkpoints"
linktitle: "Using web service checkpoints"
description: "A web service checkpoint is a test operation that verifies that an HTTP response returned from a tested web service contains appropriate data."
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_testing_web_service_using_checkpoints.html
keywords: "web services testing, checkpoints"
---

A web service checkpoint is a test operation that verifies that an HTTP response returned from a tested web service contains appropriate data.

Depending on the format returned by the tested web service, an HTTP response might be in XML, JSON, or text format. Therefore, TestArchitect provides different types of checkpoints which let you easily retrieve or compare the returned HTTP response including:

-   [JSON checkpoints](/TA_Automation/Topics/bia_JSON.html)
-   [XML checkpoints](/TA_Automation/Topics/bia_XML.html)
-   Value checkpoints, such as, [check value](/TA_Automation/Topics/bia_check_value.html), or [check text contains](/TA_Automation/Topics/bia_check_text_contains.html), etc.

In general, in order to perform a web service checkpoint, you should first parse the HTTP response by using the [parse http response](/TA_Automation/Topics/bia_parse_http_response.html) built-in action. Subsequently, call the respective web service checkpoints, mentioned above, to compare the method result against the expected data.



