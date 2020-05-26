--- 
title: "Selecting multiple cloud devices at launch time"
linktitle: "Multiple cloud devices"
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_Appium_automation_json.html
---
# Selecting multiple cloud devices at launch time {#aut_app_cloud_testing_Appium_automation_json .task}

It is important to test mobile web applications on different cloud devices \(smartphones, tablets, phablets, etc.\) to ensure that it behaves in a consistent and correct manner on all of them. TestArchitect allows an automated test to run on multiple cloud mobile devices concurrently.

In order to select multiple cloud devices at launch time concurrently, you need to specify necessary desired capabilities in a file, which conforms to JSON format.

**Note:**

-   Ensure that the number of rented cloud devices, which would run test concurrently, is available.
-   You can learn more about JSON syntax [here](http://www.w3schools.com/js/js_json_syntax.asp).

To facilitate this process, TestArchitect provides predefined JSON templates for common cloud providers.

Carry out the following steps:

1.  Depends on your specific cloud provider, download a corresponding JSON template, provided by TestArchitect. For example, below items are common cloud providers.

    -   [Sauce Labs](http://testarchitect.logigear.com/onlinehelp/test_sample/SauceLabs.json)
    -   [BrowserStack](http://testarchitect.logigear.com/onlinehelp/test_sample/BrowserStack.json)
    -   [Testdroid](http://testarchitect.logigear.com/onlinehelp/test_sample/testdroid.json)
2.  Open the downloaded JSON template file, and then modify the following desired capabilities that would fit your organization's needs.

    -   URL Appium server of the given cloud service \(the URL capability\)
    -   A unique name for each cloud device. Name of the executed cloud device will appear on test results.

        ```
        {"<device_Name>": {"<desired_Capabilities>":"<value>"}}
        ```

    -   list of [desired capabilities](aut_appium.md#section_p5f_qp3_gy) desired capabilities that would fit your organization's needs.

        **Tip:** Each set of desired capabilities represents a single cloud device.

    **Note:** See the [Desired Capabilities documentation](http://appium.io/slate/en/master/?ruby#appium-server-capabilities) for the list of capabilities available for Appium.

    For example:

    -   You'd like to call two concurrent cloud devices including one Android and one iOS to run your automated tests on Sauce Labs.
    -   Your JSON file might resemble the following.
    ```
    [
      {
        "Cloud Device 1": {
          "URL": "http://joedoe:78ede15f-b105-4d7f-8c61-19c993243c5e@ondemand.saucelabs.com:80/wd/hub",
          "browserName": "Safari",
          "deviceName": "iPhone 7 Simulator",
          "platformName": "iOS",
          "newCommandTimeout": "600",
          "platformVersion": "10.3",
          "appiumVersion": "1.6.5"
        }
      },
      {
        "Cloud Device 2": {
          "URL": "http://joedoe:78ede15f-b105-4d7f-8c61-19c993243c5e@ondemand.saucelabs.com:80/wd/hub",
          "browserName": "chrome",
          "deviceName": "Android Emulator",
          "platformVersion": "6.0",
          "platformName": "android",
          "newCommandTimeout": "600"
        }
      }
    ]
    ```

3.  Save your JSON file.

4.  In TestArchitect Client, select the test module you want to run, and then click **Execute** ![](../Images/btn.TAC_toolbar.Execute.png) on the TestArchitect toolbar.

5.  In the Controllers/Devices panel, click the **Select Controllers and Devices** button.

    ![](../Images/Select_controllers_and_devices_cloud.png)

    The Select Controller/Device dialog box appears.

    ![](../Images/Select_controllers_and_devices_dlg.png)

6.  In the dialog box, select a controller to which cloud devices will be attached.

    The controller will be in charge of distributing automated tests to cloud devices which satisfy all defined desired capabilities. The controller will also receive test results returned from the cloud devices.

    The **Add desired capabilities file** text is now enabled.

    ![](../Images/Select_controllers_and_devices_dlg_desired_capabilities.png)

7.  Click **Add desired capabilities file** to load a JSON file which defines desired capabilities.

8.  In the Select dialog box, browse to the location of your JSON file, and then click the **Select** button.

    **Restriction:** Only JSON files are accepted.

    ![](../Images/Select_dlg_desired_capabilitties.png)

    The JSON file is now loaded into the list of available cloud providers and appears as a tree node. The name of the tree node is automatically obtained from the JSON filename.

    ![](../Images/Select_controllers_and_devices_dlg_desired_capabilities_selected.png)

    **Tip:**

    -   To remove the unnecessary JSON file, right-click the node, and then select **Remove**.

        ![](../Images/remove_cloud_devices.png)

    -   To replace the current JSON file with another file, right-click the node, and then select **Edit**.

        ![](../Images/edit_cloud_devices.png)

9.  On the Select Controller/Device dialog box, click **OK**.

    The JSON filename is displayed next to the **Selected Desired Capabilities file** text.

    ![](../Images/Controller_device_panel.png)

10. On the Execute Test dialog box, select **Execute** to execute the automated test on cloud devices which satisfy your defined desired capabilities.


The automated tests are run on target cloud devices. On test results, you will also see the name of the cloud device and the full path to JSON file, which defines target cloud devices.

![](../Images/result_desired_cap_name.png)

**Parent topic:**[Creating mobile web application test](../../TA_Automation/Topics/aut_app_cloud_testing_creating_tests.html)

**Previous topic:**[Selecting a single cloud device during execution](../../TA_Automation/Topics/aut_app_cloud_testing_Appium_automation.html)

