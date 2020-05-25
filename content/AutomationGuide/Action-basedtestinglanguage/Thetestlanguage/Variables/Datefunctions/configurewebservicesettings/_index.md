--- 
title: "configure web service settings"
linktitle: "configure web service settings"
aliases: 
    - /TA_Automation/Topics/bia_configure_web_service_settings.html
---
# configure web service settings {#bia_configure_web_service_settings .reference}

## Description {#section_iyg_dsd_1y .section}

Send JSON string request to a web service in order to apply new configuration settings.

## Arguments {#section_jyg_dsd_1y .section}

values
:   Send JSON string request to a web service in order to apply new configuration settings.

:   **Important:** Basic JSON syntax as required for creating profiles is as follows:

-   JSON data is written as name:value pairs. Example:

    ```
    "firstName" : "John"
    ```

-   A JSON object is written inside curly braces, and can contain multiple name:values pairs, delimited by commas. Example:

    ```
    { "firstName" : "John" , "lastName" : "Doe" }
    ```

-   JSON arrays \(arrays of JSON objects\) are written inside square brackets, and are delimited by commas. Example:

    ```
    "employees":[
        {"firstName":"John", "lastName":"Doe"}, 
        {"firstName":"Anna", "lastName":"Smith"}, 
        {"firstName":"Peter","lastName":"Jones"}
    ]
    ```


Note that you can learn more about JSON syntax [here](http://www.w3schools.com/js/js_json_syntax.asp).

## Valid contexts {#section_kyg_dsd_1y .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes {#section_lyg_dsd_1y .section}

-   It is required that you declare configure web service settings with its configurations, before using the [create http request](bia_create_http_request.html) built-in action.
-   For a full list of web service's configurations, supported by TestArchitect, see "Supported web service's configurations" below.
-   You may either declare various web service's configurations in a single configure web service settings action, or in multiple configure web service settings actions. Note that, when identical configurations are declared simultaneously, the latter configuration overrides the former one.

## Supported web service's configurations { .section}

1.  Proxy: Defines a manual proxy server.

    **Remember:** To specify that the proxy is not in use, simply do not call configure web service settings with proxy settings in your test procedures.

    -   JSON string for manual proxy settings must be defined as follows.

        ```
        {"proxy":{"hostname":"<value>","port":<value>,"scheme":"<value>","username":"<value>","password":"<value>"}}
        ```

        |Key|Description|
        |---|-----------|
        |hostname|        -   \(Required\) The proxy host to use.
|
        |port|        -   \(Required\) The proxy port to use.
|
        |scheme|        -   \(Optional\) The scheme of the proxy.
         -   When this key's value is empty, by default, the value of HTTP is used.
        -   Supported scheme\(s\):
            -   HTTP

**Restriction:** [REST Assured](https://github.com/rest-assured/rest-assured), a Java framework for simplifying testing of REST based services built on top of HTTP Builder, and currently employed in TestArchitect, does not fully support HTTPS connection over proxy servers.

|
        |username|        -   \(Optional\) The username sent for proxy authentications.
        -   When this argument's key is empty, this key is ignored during automation.
|
        |password|        -   \(Optional\) The password sent for proxy authentications.
        -   When this argument's key is empty, this key is ignored during automation.
|

    -   A sample JSON string might look like the following.

        ![](../Images/JSON_proxy_configuration.png)

    -   To explicitly use system’s proxy, apply the value of system for hostname and port.

        ```
        {"proxy":{"hostname":"system","port":"system","scheme":"<value>","username":"<value>","password":"<value>"}}
        ```

        ![](../Images/JSON_proxy_configuration_system.png)

        **Note:**

        -   REST Assured automatically determines system proxy by looking at Java settings, environment variables, browser settings and operating system settings.
        -   TestArchitect supports mixed mode. Specially, you might use the system hostname in combination with a user-defined port, or vice versa.
2.  SSL: Defines SSL configurations. There are three supported modes in TestArchitect.
    1.  **Server validation**: Run HTTPS normally, the SSL validation is handled from the server side.
        -   JSON string defined:

            ```
            {"ssl":"trusted"}
            ```

    2.  **No SSL validation**: TestArchitect employs "[relaxed HTTP validation](http://static.javadoc.io/io.rest-assured/rest-assured/3.0.1/io/restassured/config/SSLConfig.html#relaxedHTTPSValidation--)", that is, skip SSL validation. Trust all hosts regardless if the SSL certificate is invalid. By using this mode, you don't need to specify a keystore or trust store.
        -   JSON string defined:

            ```
            {"ssl":"skip"}
            ```

    3.  **SSL client validation**: You can be more fine-grained and have Java keystore file and use it with REST Assured.
        -   JSON string must be defined as follows.

            ```
            {"ssl":{"pathToKeyStore":"<value>","pathToTrustStore":"<value>","keyStorePassword":"<value>","trustStorePassword":"<value>","port":<value>}}
            ```

            |Option|Description|
            |------|-----------|
            |pathToKeyStore|            -   \(Required\) The path to the keystore to use when locating client certificates

**Remember:** Please ensure that you have the keystore file beforehand. Otherwise, please follow this [link](http://docs.oracle.com/javase/1.5.0/docs/tooldocs/solaris/keytool.html), and read "Keystore Creation".

            -   Supported keystore types \([learn more](http://docs.oracle.com/javase/6/docs/technotes/guides/security/StandardNames.html#KeyStore)\):

jceks
                :   The proprietary keystore implementation provided by the SunJCE provider.

jks
                :   The proprietary keystore implementation provided by the SUN provider.

pkcs12
                :   The transfer syntax for personal identity information as defined in PKCS12.

             -   To separate directories in JSON, use four consecutive backslashes \(\\\), or alternatively, use a single forward slash \(/\).
|
            |keyStorePassword|            -   \(Optional\) The password for the keystore.
|
            |pathToTrustStore|            -   \(Optional\) The path to trust store file.
            -   When this argument's key is empty, REST Assured automatically searches for a certificate file named cecarts, which resides in the security properties directory, java.home/lib/security, where java.home is the runtime environment's directory. \([Learn more](http://docs.oracle.com/javase/1.5.0/docs/tooldocs/solaris/keytool.html#cacerts).\)
             -   To separate directories in JSON, use four consecutive backslashes \(\\\), or alternatively, use a single forward slash \(/\).
|
            |trustStorePassword|            -   \(Optional\) The password for the trust store.
            -   When this argument's key is empty, this key is ignored during automation.
|
            |port|            -   \(Optional\) The port for SSL connections.

**Note:** Most of the time you do not need to specify a port, since REST Assured will apply the configuration to the HTTPS port, defined in the URI.

            -   When this argument's key is empty, this key is ignored during automation.
|

        -   A sample JSON string might look like the following.

            ![](../Images/JSON_ssl_configuration.png)

3.  Cookies: Specifies HTTP cookies that are sent back to the server.
    -   JSON string for HTTP cookies must be defined as follows.

        ```
        {"cookies":{"<cookie-name>":"<cookie-value1>","<cookie-name2>":"<cookie-value2>","<cookie-name3>":"<cookie-value3>"}}
        ```

        **Note:** A list of name-value pairs in the form of `"<cookie-name>":"<cookie-value>"`. Pairs in the list are separated by a comma.

    -   A sample JSON string might look like the following.

        ![](../Images/JSON_cookies_configuration.png)

4.  Encoder: Specifies configurations for the encoder.
    -   JSON string for the encoder must be defined as follows.

        ```
        {"encoder":{"contentTypeToDefaultCharset":{"<content-type1>":"<charset1>","<content-type2>":"<charset2>"},
        "defaultQueryParameterCharset":"<value>","defaultContentCharset":"<value>",
        "urlEncodingEnabled": "<value>","addDefaultContentCharsetToContentType":"<value>"}}
        ```

        |Option|Description|
        |------|-----------|
        |contentTypeToDefaultCharset|        -   \(Optional\) Specify the default charset to use for the specific content-type.
        -   A list of pairs of the default charset to use for each specific content-type in the form of `"<content-type>":"<charset>"`. Pairs in the list are separated by a comma.
        -   For a list of available content types, see [here.](http://static.javadoc.io/io.rest-assured/rest-assured/3.0.3/io/restassured/http/ContentType.html)
        -   For a list of available charsets, see [here](http://docs.oracle.com/javase/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true)
        -   When this argument's key is empty, this key is ignored during automation.
|
        |defaultQueryParameterCharset|        -   \(Optional\) Specify the default charset for [query parameters](http://static.javadoc.io/io.rest-assured/rest-assured/3.0.1/io/restassured/specification/RequestSpecification.html#queryParam-java.lang.String-java.util.Collection-).
        -   When this argument's key is empty, by default, the value of UTF-8 is used.
        -   If you don't want the query parameters to be encoded in the URL, it's highly recommended that you set urlEncodingEnabled to false.
|
        |defaultContentCharset|        -   \(Optional\) Specify the default charset for the body/content in the request specification.
        -   When this argument's key is empty, by default, the value of ISO-8859-1 is used.
        -   When contentTypeToDefaultCharset and defaultContentCharset are defined simultaneously, contentTypeToDefaultCharset has precedence.
|
        |urlEncodingEnabled|        -   \(Optional\) \(Boolean value\) Specify if URL is encoded automatically. Usually this is a recommended but in some cases, e.g. the query parameters are already be encoded before you provide them to REST Assured then it's useful to disable URL encoding. Specifically, the query is already URL encoded so you need to disable REST Assured's URL encoding to prevent double encoding.
        -   When this argument's key is empty, by default, the value of true is used.
|
        |addDefaultContentCharsetToContentType|        -   \(Optional\) \(Boolean value\) Tells whether REST Assured should automatically append the content charset to the content-type header if content charset is not defined explicitly.
        -   When this argument's key is empty, by default, the value of true is used.
|

    -   A sample JSON string might look like the following.

        ![](../Images/JSON_encoder_configuration.png)

5.  Decoder: Specifies configurations for the decoder.
    -   JSON string for the decoder must be defined as follows.

        ```
        {"decoder":{"contentDecoders":"<value>","contentTypeToDefaultCharset":{"<content-type1>":"<charset1>","<content-type2>":"<charset2>"}}}
        ```

        |Option|Description|
        |------|-----------|
        |contentDecoders|        -   \(Optional\) Specify the content decoders that will be presented to the server when making a request \(using the Accept-Encoding header\). If the server supports any of these encodings then REST Assured will automatically perform decoding of the response accordingly.
        -   Supported modes:
            1.  default: \(Default\) In REST Assured, gzip and deflate are used.
                -   [DecoderConfig.ContentDecoder.GZIP](http://static.javadoc.io/io.rest-assured/rest-assured/3.0.3/io/restassured/config/DecoderConfig.ContentDecoder.html#GZIP)
                -   [DecoderConfig.ContentDecoder.DEFLATE](http://static.javadoc.io/io.rest-assured/rest-assured/3.0.3/io/restassured/config/DecoderConfig.ContentDecoder.html#DEFLATE)
            2.  identity: No compression \([learn more](https://developer.mozilla.org/vi/docs/Web/HTTP/Headers/Accept-Encoding)\)
|
        |contentTypeToDefaultCharset|        -   \(Optional\) Specify the default charset to use for the specific content-type.
        -   A list of pairs of the default charset to use for each specific content-type in the form of `"<content-type>":"<charset>"`. Pairs in the list are separated by a comma.
        -   For a list of available content types, see [here.](http://static.javadoc.io/io.rest-assured/rest-assured/3.0.3/io/restassured/http/ContentType.html)
        -   For a list of available charsets, see [here](http://docs.oracle.com/javase/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true)
        -   When this argument's key is empty, this key is ignored during automation.
|

    -   A sample JSON string might look like the following.

        ![](../Images/JSON_decoder_configuration.png)

6.  Redirect: Configures the redirect settings
    -   JSON string for the redirect must be defined as follows.

        ```
        {"redirect":{"followRedirects":"<value>","allowCircularRedirects":"<value>","rejectRelativeRedirect":"<value>","maxRedirects":<value>}}
        ```

        |Option|Description|
        |------|-----------|
        |followRedirects|        -   \(Optional\) \(Boolean value\) Defines whether redirects should be handled automatically.
        -   When this argument's key is empty, by default, the value of true is used.
|
        |allowCircularRedirects|        -   \(Optional\) \(Boolean value\) Defines whether circular redirects \(redirects to the same location\) should be allowed
        -   When this argument's key is empty, by default, the value of false is used.
|
        |rejectRelativeRedirect|        -   \(Optional\) \(Boolean value\) Defines whether relative redirects should be rejected. HTTP specification requires the location value be an absolute URI.
        -   When this argument's key is empty, by default, the value of false is used.
|
        |maxRedirects|        -   \(Optional\) \(Boolean value\) Defines the maximum number of redirects to be followed. The limit on number of redirects is intended to prevent infinite loops caused by broken server side scripts.
        -   When this argument's key is empty, by default, the value of 100 is used.
|

    -   A sample JSON string might look like the following.

        ![](../Images/JSON_redirect_configuration.png)


## Applicable Built-In Settings {#section_rgg_w52_1y .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example: Proxy configurations { .section}

**Case 1: User-defined proxy configurations**:

Suppose that you'd like add the following proxy configurations:

1.  Hostname: 192.168.167.29
2.  Port: 8888
3.  Protocol: http
4.  Proxy authentications:
    -   Username: john
    -   Password: doe

Your JSON string should resemble as follows:

```
{"proxy":{"hostname":"192.168.167.29","port":8888,"scheme":"http","username":"john","password":"doe"}}
```

**Action Lines**

![](../Images/bia_configure_web_service_settings_proxy_pgm.png)

**Case 2: System proxy configurations**:

Suppose that you'd like to apply system proxy configurations for hostname and port:

1.  Hostname: system
2.  Port: system
3.  Protocol: http
4.  Proxy authentications:
    -   Username: john
    -   Password: doe

Your JSON string should resemble as follows:

```
{"proxy":{"hostname":"system","port":"system","scheme":"http","username":"john","password":"doe"}}
```

**Action Lines**

![](../Images/bia_configure_web_service_settings_proxy_system_pgm.png)

## Example: SSL configuration { .section}

**Case 1: No SSL validation**

For example, you run into a problem, because the server is using an invalid SSL certificate. The easiest way to workaround this is that you trust all hosts.

Your JSON string should resemble as follows:

```
{"ssl":"skip"}
```

**Action Lines**

![](../Images/bia_configure_web_service_settings_ssl_skip_pgm.png)

**Case 2: SSL client validation**

Suppose that you'd like to configure SSL with the following certificate authentications:

1.  Path to the keystore to use when locating client certificates: C:/Test\_Folder/newkeystore.jks
2.  The keystore password: 123456
3.  The trust store to use: C:/Test\_Folder/cacerts
4.  The trust store password: changeit

Your JSON string should resemble as follows:

```
{"ssl":{"pathToKeyStore":"C:/Test_Folder/newkeystore.jks","keyStorePassword":"123456","pathToTrustStore":"C:/Test_Folder/cacerts","trustStorePassword":"changeit"}}
```

**Action Lines**

![](../Images/bia_configure_web_service_settings_ssl_local_validation_pgm.png)

## Example: Cookies configuration { .section}

Suppose that you'd like to specify the following cookies which are sent to the server.

1.  yummy\_cookie=choco
2.  tasty\_cookie=strawberry

Your JSON string should resemble as follows:

```
{"cookies":{"yummy_cookie":"choco","tasty_cookie":"strawberry"}}
```

**Action Lines**

![](../Images/bia_configure_web_service_settings_cookies_pgm.png)

## Example - Case 4: Encoder configuration { .section}

Suppose that you'd like to specify the following configurations for the encoder.

1.  The default charset to use for the specific content-type.
    -   application/json=UTF-8
    -   text/plain=US-ASCII
2.  The default charset for query parameters.
    -   defaultQueryParameterCharset=US-ASCII
3.  REST Assured does not encode the URL.
    -   urlEncodingEnabled=false

JSON string resembles the following:

```
{"encoder":{"contentTypeToDefaultCharset":{"application/json":"UTF-8","text/plain":"US-ASCII"},"defaultQueryParameterCharset":"US-ASCII","urlEncodingEnabled":"false"}}
```

**Action Lines**

![](../Images/bia_configure_web_service_settings_encoder_pgm.png)

## Example - Case 5: Decoder configuration { .section}

Suppose that you'd like to specify the following configurations for the decoder.

1.  The default charset to use for the specific content-type.
    -   application/octet-stream=us-ascii
2.  The content decoder to apply: No compression.

    **Note:** When you do this the [Accept-Encoding](https://developer.mozilla.org/vi/docs/Web/HTTP/Headers/Accept-Encoding) header will be added automatically to the request and the response body will not be encoded. In this case, identity value, which indicates no compression, is enabled.


JSON string resembles the following:

```
{"decoder":{"contentDecoders":"identity","contentTypeToDefaultCharset":{"application/octet-stream":"us-ascii"}}}
```

**Action Lines**

![](../Images/bia_configure_web_service_settings_decoder_pgm.png)

## Example - Case 6: Redirect configuration { .section}

Suppose that you'd like to configure the following redirect settings:

1.  Follow redirects.
    -   followRedirects=true
2.  Allow circular redirects.
    -   allowCircularRedirects=true
3.  Reject relative redirects
    -   rejectRelativeRedirect=true
4.  The maximum number of redirects: 50
    -   maxRedirects=50

JSON string resembles the following:

```
{"redirect":{"followRedirects":"true","allowCircularRedirects":"true","rejectRelativeRedirect":"true","maxRedirects":50}}
```

**Action Lines**

![](../Images/bia_configure_web_service_settings_redirect_pgm.png)

**Parent topic:**[Web services](../../TA_Automation/Topics/bia_web_services.html)

**Previous topic:**[authenticate](../../TA_Automation/Topics/bia_authenticate.html)

**Next topic:**[create http request](../../TA_Automation/Topics/bia_create_http_request.html)

**Related information**  


[Testing web services](../../TA_Automation/Topics/aut_testing_web_service.html)

