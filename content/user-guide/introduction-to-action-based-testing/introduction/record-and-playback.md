--- 
title: "Record and Playback"
linktitle: "Record and Playback"
description: "The metaphor for record and playback is the test tool as a tape recorder."
weight: 1
aliases: 
    - /TA_Help/Topics/ABT_record_playback.html
keywords: "Action Based Testing, record and playback, record, playback"
---

The metaphor for record and playback is the test tool as a tape recorder.

Tests are automated by executing them manually just one time against the user interface \(UI\) of the application under test. The test tool recognizes and stores the actions performed by the tester. During the recording session, the tester can also define checks on values appearing in the user interface of the application under test. During playback, the automation mimics the recorded actions of the tester, while verifying that the responses from the AUT are as anticipated.

The general view on record and playback is that it has both positive and negative sides, as listed here:

**Potential benefits**:

-   No programming skills are necessary.
-   You can quickly generate automated tests based on existing manual test cases.
-   Little or no training is needed to start creating test automation.
-   Easy way to determine the commands needed to work with various controls.
-   Complex sequences that occur in advanced UI’s can be captured.

**Potential risks**:

-   Can produce large amounts of unstructured and undocumented action lines.
-   Promotes making testers responsible for automation, which has proven to be a different task requiring different skills.
-   Changes in the application under test, in particular the detailed behavior of dialogs, can render previous recording invalid, making it necessary to either edit the recorded code or repeat the recording. It is difficult to predict in a project the effects each system cycle will have on the recorded code, thus creating a liability for the management of the project.
-   The technique can only be applied to an already correctly working version of the application under test, which limits the use to regression testing only.

{{<note>}} Note that TestArchitect does support record and playback. TestArchitect Client includes the [Action Recorder](/user-guide/actions/action-recorder/), which is similar to other recorders, but is designed to work as part of a keyword-based approach.



