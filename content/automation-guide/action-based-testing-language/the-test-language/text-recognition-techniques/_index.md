--- 
title: "Text recognition techniques"
linktitle: "Text recognition techniques"
weight: 11
aliases: 
    - /TA_Automation/Topics/aut_text_recognition_techniques.html
---

TestArchitect offers you two methods for recognizing text produced by an AUT: Optical Character Recognition \(OCR\) and Graphics Device Interface \(GDI\) techniques.

## OCR technique

OCR technique is used to obtain the text of a control on the AUT. To determine the text, it uses specific algorithms that read the text character by character.

OCR is the process of conversion handwritten or printed text into computer readable text. TestArchitect captures an image of AUT and use OCR to read the text in it. An example of the character recognition usage in testing is searching for the needed text fragment within the captured image of an AUT.

## GDI technique

TestArchitect also includes the GDI technique that uses other principles to identify UI controls by the their text. Specifically, GDI traces text that the operating system is drawing on the screen.

## OCR vs. GDI

OCR uses specific algorithms to read text from an onscreen region character by character. These algorithms depend on several factors, such as, font, text and background colors, text size and others. These factors make OCR prone to errors.

TestArchitect includes GDI that uses other principles for text recognition. Technically, GDI first intercepts calls to certain drawing Windows APIs, including [DrawTextA](https://msdn.microsoft.com/en-us/library/dd162498(v=vs.85).aspx) \(ANSI name\), [DrawTextW](https://msdn.microsoft.com/en-us/library/dd162498(v=vs.85).aspx) \(Unicode name\), [TextOutA](https://msdn.microsoft.com/en-us/library/dd145133(v=vs.85).aspx) \(ANSI name\), [TextOutA](https://msdn.microsoft.com/en-us/library/dd145133(v=vs.85).aspx) \(Unicode name\), [ExtTextOutA](https://msdn.microsoft.com/en-us/library/dd162713(v=vs.85).aspx) \(ANSI name\), [ExtTextOutW](https://msdn.microsoft.com/en-us/library/dd162713(v=vs.85).aspx) \(Unicode name\), which output text on screen and tries to create special test objects for this text. Subsequently, GDI sends a Windows message \([WM\_PAINT](https://msdn.microsoft.com/en-us/library/windows/desktop/dd145213(v=vs.85).aspx)\) to the AUT to have the text redrawn. While the texts are being redrawn, all calls to drawing APIs are recorded and all redrawn texts will be detected. Since GDI uses other principles to determine object text, it works faster than OCR, if used, provides 100% recognition accuracy.

**Note:**

-   If your AUT is a Windows application, that is Win32 or WinForms, before using OCR, we recommend that you try working with your text controls by using GDI. If GDI does not help, then use OCR.
-   To switch between the OCR and GDI technology, use the [character recognition technique](bis_character_recognition_technique.html) built-in setting.
-   However, there are situations when the GDI might not be helpful:
    -   An AUT displays text with surrounding noise. Since, this text is part of the image, GDI is not able to detect the text accurately. If you need to retrieve text shown in an image, use OCR instead.
    -   The way the AUT draws text is not typical for Windows applications, that is, the AUT does not calls the drawing Windows APIs. Therefore, GDI is unable to determine the drawn text and will not create. To recognize such text, use OCR instead.

**Parent topic:**[The test language](/TA_Automation/Topics/The_test_language.html)

**Previous topic:**[Image comparison techniques](/TA_Automation/Topics/aut_image_comparison_techniques.html)

**Next topic:**[Stopping tests on timeout](/TA_Automation/Topics/aut_stop_tests_after_timeout.html)

**Related information**  


[character recognition technique](/TA_Automation/Topics/bis_character_recognition_technique.html)

[check text exists](/TA_Automation/Topics/bia_check_text_exists.html)

[check text not exists](/TA_Automation/Topics/bia_check_text_not_exists.html)

[click text](/TA_Automation/Topics/bia_click_text.html)

[does text exist](/TA_Automation/Topics/bia_does_text_exist.html)

[get text coordinates](/TA_Automation/Topics/bia_get_text_coordinates.html)

[if text exists](/TA_Automation/Topics/bia_if_text_exists.html)

[if text not exists](/TA_Automation/Topics/bia_if_text_not_exists.html)

[get text background color](/TA_Automation/Topics/bia_get_text_background_color.html)

[get text color](/TA_Automation/Topics/bia_get_text_color.html)

[get text content](/TA_Automation/Topics/bia_get_text_content.html)

[get text count](/TA_Automation/Topics/bia_get_text_count.html)

