--- 
title: "Selecting multiple cloud devices at launch time"
linktitle: "Multiple cloud devices"
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK_multiple_iOS_cloud_devices.html
---

It is important to test mobile web applications on different cloud devices \(smartphones, tablets, phablets, etc.\) to ensure that it behaves in a consistent and correct manner on all of them. TestArchitect allows an automated test to run on multiple cloud mobile devices concurrently.

1.  Ensure that the following requirements are met before implementing automated mobile web testing on multiple cloud devices in the Remote TestKit cloud service.
    -   In the Remote TestKit cloud service, rent iOS devices, and enable Xcode Connector. \([Learn more](aut_app_cloud_testing_iOS_Xcode_connector.html).\)
    -   [Run Appium](aut_app_cloud_testing_Appium_RTK_iOS.html) server on your local host.
    -   [Install](aut_app_cloud_testing_safarilauncher.html) the SafariLauncher application.
2.  In order to select multiple cloud devices at launch time concurrently, you must specify necessary desired capabilities in a file, which conforms to JSON format.

    **Note:**

    -   Ensure that the number of rented cloud devices, which would run test concurrently, is available.
    -   You can learn more about JSON syntax [here](http://www.w3schools.com/js/js_json_syntax.asp).
    -   To facilitate this process, TestArchitect provides predefined JSON templates for the Remote TestKit cloud service. \(See below.\)

Carry out the following steps:

1.  [Download](http://testarchitect.logigear.com/onlinehelp/test_sample/RemoteTestKit.json) the JSON template, provided by TestArchitect.

2.  Open the downloaded JSON template file, and then modify the following desired capabilities that would fit your organization's needs.

    **Remember:**

    -   Each set of desired capabilities represents a single cloud device.
    -   It is required to specify a unique name for each cloud device. Name of the executed cloud device will appear on test results.

        ```
        {"<device_Name>": {"<desired_Capabilities>":"<value>"}}
        ```

    For example:

    -   You'd like to call two concurrent iOS cloud devices to run your automated tests on Remote TestKit.
    -   Your JSON file might resemble the following.
    ```
    [
      {
        "Cloud Device 1": {
          "URL": "http://192.168.169.137:4725/wd/hub",
          "platformName": "iOS",
          "deviceName": "1eca0a6d5b22f68feedd6a780dcf1db0057ac28f",
          "browserName": "safari",
          "newCommandTimeout": "600",
          "automationName": "XCUITest",
          "platformVersion": "9.3"
        }
      },
      {
        "Cloud Device 2": {
          "URL": "http://192.168.169.137:4725/wd/hub",
          "platformName": "iOS",
          "deviceName": "002ebf12-a125-5ddf-a739-67c3c5d20177",
          "browserName": "safari",
          "newCommandTimeout": "600",
          "automationName": "XCUITest",
          "platformVersion": "10.1"
        }
      }
    ]
    ```

3.  Save your JSON file.

4.  In TestArchitect Client, select the test module you want to run, and then click **Execute** ![](/images//Images/btn.TAC_toolbar.Execute.png) on the TestArchitect toolbar.

5.  In the Controllers/Devices panel, click the **Select Controllers and Devices** button.

    ![](/images//Images/Select_controllers_and_devices_cloud.png)

    The Select Controller/Device dialog box appears.

    ![](/images//Images/Select_controllers_and_devices_dlg.png)

6.  In the dialog box, select a controller to which cloud devices will be attached.

    The controller will be in charge of distributing automated tests to cloud devices which satisfy all defined desired capabilities. The controller will also receive test results returned from the cloud devices.

    The **Add desired capabilities file** text is now enabled.

    ![](/images//Images/Select_controllers_and_devices_dlg_desired_capabilities.png)

7.  Click **Add desired capabilities file** to load a JSON file which defines desired capabilities.

8.  In the Select dialog box, browse to the location of your JSON file, and then click the **Select** button.

    **Restriction:** Only JSON files are accepted.

    ![](/images//Images/Select_dlg_desired_capabilitties_RTK.png)

    The JSON file is now loaded into the list of available cloud providers and appears as a tree node. Name of the tree node are automatically obtained from the JSON filename.

    ![](/images//Images/Select_controllers_and_devices_dlg_desired_capabilities_selected_RTK.png)

    **Tip:**

    -   To remove the unnecessary JSON file, right-click the node, and then select **Remove**.

        ![](/images//Images/remove_cloud_devices_RTK.png)

    -   To replace the current JSON file with another file, right-click the node, and then select **Edit**.

        ![](/images//Images/edit_cloud_devices_RTK.png)

9.  On the Select Controller/Device dialog box, click **OK**.

    The JSON filename is also displayed next to the **Selected Desired Capabilities file** label.

    ![](/images//Images/Controller_device_panel_RTK.png)

10. On the Execute Test dialog box, select **Execute** to execute the automated test on cloud devices which satisfy your defined desired capabilities.


The automated tests are run on target cloud devices. On test results, you will also see the name of the cloud device and the full path to JSON file, which defines target cloud devices. ![](/images//Images/result_RTK_multiple_cloud_devices.png)

**Parent topic:**[Creating mobile web application test](/TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK_iOS_create_test.html)

**Previous topic:**[Selecting a single cloud device during execution](/TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK_iOS_workflow.html)

