--- 
title: "Multiple cloud devices"
linktitle: "Selecting multiple cloud devices at launch time"
description: "It is important to test mobile web applications on different cloud devices (smartphones, tablets, phablets, etc.) to ensure that it behaves in a consistent and correct manner on all of them. TestArchitect allows an automated test to run on multiple cloud mobile devices concurrently."
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK_multiple_Android_cloud_devices.html
keywords: "cloud testing, Remote TestKit, multiple devices, Chrome Android, Remote TestKit, multiple devices, Chrome Android"
---

It is important to test mobile web applications on different cloud devices \(smartphones, tablets, phablets, etc.\) to ensure that it behaves in a consistent and correct manner on all of them. TestArchitect allows an automated test to run on multiple cloud mobile devices concurrently.

1.  Ensure that the following requirements are met before implementing automated mobile web testing on multiple cloud devices in the Remote TestKit cloud service.
    -   [Set up](/TA_Automation/Topics/aut_app_cloud_testing_Android_configuration.html) Android development environment.
    -   [Run](/TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK.html#step_grn_3px_gy) Appium server locally.
    -   In the Remote TestKit cloud service, [rent](/TA_Automation/Topics/aut_app_cloud_testing_RTK_renting.html) several Android device.
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

    -   You'd like to call two concurrent Android cloud devices to run your automated tests on Remote TestKit.
    -   Your JSON file might resemble the following.
    ```
    [
      {
        "Cloud Device 1": {
          "URL": "http://127.0.0.1:4723/wd/hub/",
          "platformName": "Android",
          "deviceName": "galaxy_s7_edge_sm-g935f.adb.appkitbox.com:58564",
          "browserName": "Chrome",
          "newCommandTimeout": "600",
          "platformVersion": "7.0",
          "appiumVersion": "1.6.5"
        }
      },
      {
        "Cloud Device 2": {
          "URL": "http://127.0.0.1:4723/wd/hub/",
          "platformName": "Android",
          "deviceName": "galaxy_s8_sm-d264.adb.appkitbox.com:55883",
          "browserName": "Chrome",
          "newCommandTimeout": "600",
          "platformVersion": "6.0"
        }
      }
    ]
    ```

3.  Save your JSON file.

4.  In TestArchitect Client, select the test module you want to run, and then click **Execute** ![](/images/TA_Automation/Images/btn.TAC_toolbar.Execute.png) on the TestArchitect toolbar.

5.  In the Controllers/Devices panel, click the **Select Controllers and Devices** button.

    ![](/images/TA_Automation/Images/Select_controllers_and_devices_cloud.png)

    The Select Controller/Device dialog box appears.

    ![](/images/TA_Automation/Images/Select_controllers_and_devices_dlg.png)

6.  In the dialog box, select a controller to which cloud devices will be attached.

    The controller will be in charge of distributing automated tests to cloud devices which satisfy all defined desired capabilities. The controller will also receive test results returned from the cloud devices.

    The **Add desired capabilities file** text is now enabled.

    ![](/images/TA_Automation/Images/Select_controllers_and_devices_dlg_desired_capabilities.png)

7.  Click **Add desired capabilities file** to load a JSON file which defines desired capabilities.

8.  In the Select dialog box, browse to the location of your JSON file, and then click the **Select** button.

    **Restriction:** Only JSON files are accepted.

    ![](/images/TA_Automation/Images/Select_dlg_desired_capabilitties_RTK.png)

    The JSON file is now loaded into the list of available cloud providers and appears as a tree node. Name of the tree node are automatically obtained from the JSON filename.

    ![](/images/TA_Automation/Images/Select_controllers_and_devices_dlg_desired_capabilities_selected_RTK.png)

    **Tip:**

    -   To remove the unnecessary JSON file, right-click the node, and then select **Remove**.

        ![](/images/TA_Automation/Images/remove_cloud_devices_RTK.png)

    -   To replace the current JSON file with another file, right-click the node, and then select **Edit**.

        ![](/images/TA_Automation/Images/edit_cloud_devices_RTK.png)

9.  On the Select Controller/Device dialog box, click **OK**.

    The JSON filename is also displayed next to the **Selected Desired Capabilities file** label.

    ![](/images/TA_Automation/Images/Controller_device_panel_RTK.png)

10. On the Execute Test dialog box, select **Execute** to execute the automated test on cloud devices which satisfy your defined desired capabilities.


The automated tests are run on target cloud devices. On test results, you will also see the name of the cloud device and the full path to JSON file, which defines target cloud devices.

![](/images/TA_Automation/Images/result_RTK_multiple_cloud_devices.png)



