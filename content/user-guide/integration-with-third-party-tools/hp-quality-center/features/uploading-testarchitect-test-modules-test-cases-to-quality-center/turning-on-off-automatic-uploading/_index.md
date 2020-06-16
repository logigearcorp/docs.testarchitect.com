--- 
title: "Turning on/off automatic uploading"
linktitle: "Turning on/off automatic uploading"
description: "Controlling whether or not TestArchitect uploads tests to Quality Center automatically."
weight: 2
aliases: 
    - /TA_Help/Topics/Integration_QC_Turning_on_off_autoupload.html
keywords: "Quality Center, turning on/off auto-uploading, HP Quality Center integration, turning on/off auto-uploading, abt.ini, auto-uploading to Quality Center, location, integration, HP Quality Center, turning on/off auto-uploading"
---

Controlling whether or not TestArchitect uploads tests to Quality Center automatically.By default, when you request TestArchitect to [upload tests](/TA_Help/Topics/Integration_QC_test_development_step_2.html), you are asked, via a dialog box, to specify the destination folder in Quality Center. With automatic uploading enabled, however, if a mapping has already been established for the given TestArchitect project item, this step is bypassed.

**Remember:**

TestArchitect relies on test modules that are typically developed and executed as standalone units. Each test module is comprised of a sequence of test cases. By contrast, the standard unit of test development and execution in Quality Center is the test, which more closely corresponds to a test case in TestArchitect than a test module. Hence each uploaded TestArchitect test case takes the form of a Quality Center test. In general, the following correspondences are used when moving test assets between the two systems:

|TestArchitect|Quality Center|
|-------------|--------------|
|Test folder|Folder \(with subfolders representing TA test modules\)|
|Test module|FolderOptionally, a '\#' test \(QC test with '\#' prepended to the name\) may also be created to hold essential test module metadata.<br><br>|<br>
|Test case|Test|

To enable or disable automatic uploading of a given test to Quality Center:

1.  Close TestArchitect Client, if it's running.

2.  Using your favorite text editor, open the setting file abt.ini, located at:

    -   in Windows: C:\\Users\\Public\\LogiGear\\TestArchitect\\Data\\abt.ini
    -   in Linux: /usr/local/logigear/testarchitect/data/ws/abt.ini
3.  To enable automatic uploading, set the value of is auto upload to qc to true; otherwise, set the value to false.

    ![](/images/TA_Help/Images/Integration_QC_xmp_autoupload.png)

    **Note:** is auto upload to qc is defaulted to false when the file is first created.


-   If automatic uploading is enabled, the same test will be uploaded automatically to Quality Center, and the [Upload Test Module](/TA_Help/Topics/Integration_QC_test_development_step_2.html#step_vnm_v4j_fm)dialog box will no longer appear if all of the following conditions are met:
    1.  TestArchitect tests have been mapped to Quality Center.
    2.  The mapped locations have not changed.
    3.  The same TestArchitect tests have been uploaded at least once prior to enabling the automatic upload.

-   If automatic uploading is disabled, the Upload Test Module dialog box appears, allowing you to:
    1.  specify test mappings between TestArchitect and Quality Center, and
    2.  assign mapping locations.


