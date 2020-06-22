--- 
title: "attach file"
linktitle: "attach file"
description: "Description Attach given file(s) to a web service. Arguments path Path to the location of the attached file. control name Value of the name attribute in the HTML input tag. (See Notes.) file name ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_attach_file.html
keywords: "built-in actions, attach file, attach file (action), attach file, attach file to web service, upload attachment to web service, add attachment to web service"
---

## Description

Attach given file\(s\) to a web service.

## Arguments

-   **path**

    Path to the location of the attached file.

-   **control name**

    Value of the name attribute in the HTML input tag. \(See Notes.\)

-   **file name**

    \(Optional\) Attach the given file with a new name.

-   **mime type**

    \(Optional\) MIME type of the attached file.

-   **charset**

    \(Optional\) The character set \(character encoding\) to use.

    Standard charset values:

    -   **US-ASCII or ISO646-US**

        Seven-bit ASCII, a.k.a. the Basic Latin block of the Unicode character set

    -   **ISO-8859-1**

        ISO Latin Alphabet No. 1, a.k.a. ISO-LATIN-1

    -   **UTF-8**

        Eight-bit UCS Transformation Format

    -   **UTF-16BE**

        Sixteen-bit UCS Transformation Format, big-endian byte order

    -   **UTF-16LE**

        Sixteen-bit UCS Transformation Format, little-endian byte order

    -   **UTF-16**

        Sixteen-bit UCS Transformation Format, byte order identified by an optional byte-order mark


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   It is required that this built-in action must be declared before using the [send http request](/TA_Automation/Topics/bia_send_http_request.html) action. When this built-in action is called, the multipart form data technique, provided by [Rest Assured](http://static.javadoc.io/io.rest-assured/rest-assured/3.0.1/io/restassured/builder/MultiPartSpecBuilder.html), is applied.
-   To attach multiple files, in test procedures, call multiple attach file in sequence.
-   control name:
    -   When a single file is attached, the value is optional. When this argument is empty, by default, the attach file action will assume a control name called file \([learn more](http://static.javadoc.io/io.rest-assured/rest-assured/3.0.1/io/restassured/builder/MultiPartSpecBuilder.html#controlName-java.lang.String-)\). Specifically, in HTML the control name is the attribute name of the input tag.
    -   To attach multiple files simultaneously, this argument is required. You must input a unique control name defined for each file attached.
    -   Please also note that, depending on the API-under-test, the value and availability of this argument might vary. Therefore, it is highly recommended that you read API documentations carefully. \(See "Uploading Files With Real World Examples" below.\)
-   file name:
    -   When this value is empty, the default name for the attached file is file.
    -   Please also note that, depending on the API-under-test, the value and availability of this argument might vary. Therefore, it is highly recommended that you read API documentations carefully. \(See "Uploading Files With Real World Examples" below.\)
    -   On Windows: In order to specify [mapping network drives](http://www.dummies.com/computers/operating-systems/windows-7/how-to-map-a-network-folder-in-windows-7/), please disable User Account Control \(UAC\).
    -   On Linux, macOS: Mounted drives are supported.
-   mime type:
    -   For a full list of available MIME types, refer to this [site](https://www.iana.org/assignments/media-types/media-types.xhtml).
    -   When no MIME is provided, this argument is ignored during test automation.
    -   Please also note that, depending on the API-under-test, the value and availability of this argument might vary. Therefore, it is highly recommended that you read API documentations carefully. \(See "Uploading Files With Real World Examples" below.\)
-   charset: Besides the standard charsets above, you can also manually enter other encoding sets. \([Learn more.](https://docs.oracle.com/javase/8/docs/technotes/guides/intl/encoding.doc.html)\)

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Uploading Files With Real World Examples

1.  [Imgur](https://imgur.com/)
    -   API-under-test: [Image Upload](https://apidocs.imgur.com/#4b8da0b3-3e73-13f0-d60b-2ff715e8394f)
    -   control name argument:
        -   Required
        -   Input value: image
    -   Action lines:

        ![](/images/TA_Automation/Images/bia_attach_file_pgm.png)

2.  [Imagify](https://imagify.io/)
    -   API-under-test: [Image Upload](https://imagify.io/docs/api/#upload)
    -   control name argument:
        -   Required
        -   Input value: image
    -   file name: Required
    -   Action lines:

        ![](/images/TA_Automation/Images/bia_attach_file_Imagify_pgm.png)

3.  [Google Drive](https://drive.google.com/drive/my-drive)
    -   API-under-test: [Multipart Upload](https://developers.google.com/drive/v3/web/multipart-upload)
    -   mime type argument: When this argument is empty, the default value, applied by Google Drive, is application/x-zip
    -   Action lines:

        ![](/images/TA_Automation/Images/bia_attach_file_Google_Drive_pgm.png)

4.  [Facebook](https://www.facebook.com/)
    -   API-under-test: [Video Upload](https://developers.facebook.com/docs/videos)
    -   file name argument: Required
    -   Action lines:

        ![](/images/TA_Automation/Images/bia_attach_file_facebook_pgm.png)


## Example

Suppose that you'd like to attach a file with the following information:

1.  Path to the location of the attached file: /Users/test/Desktop/TestData/Web Services/testfile.png
2.  Value of the name attribute in the HTML input tag: file
3.  Attach the given file with a new name: file.png
4.  MIME type of the attached file: image/png
5.  The character set \(character encoding\) to use: UTF-8

Verify the if the HTTP status of the response is [201](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html), which means the request has been fulfilled and resulted in a new resource being created.

**Action Lines**

![](/images/TA_Automation/Images/bia_attach_file_example_pgm.png)




**Related information**  


[Testing web services](/TA_Automation/Topics/aut_testing_web_service.html)

