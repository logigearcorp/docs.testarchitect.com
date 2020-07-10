--- 
title: "Android class mapping backward compatibility"
linktitle: "Android class mapping backward compatibility"
description: "TestArchitect 8 Update 2 enhances Android class mapping to introduce new supported and mapped Android controls. Prior versions of TestArchitect used the generic class for unrecognized Android controls."
weight: 5
aliases: 
    - /Android/Topics/Android_class_mapping.html
keywords: "class mapping, Android, backward compatibility"
---

TestArchitect 8 Update 2 enhances Android class mapping to introduce new supported and mapped Android controls. Prior versions of TestArchitect used the generic class for unrecognized Android controls.

If you have captured Android generic controls in prior versions of TestArchitect, you may continue using them in [TA 8 Update 2](/user-guide/version-history/features-added-to-testarchitect-8-update-2) by doing the following:

1.  Contact TestArchitect Support at [support@logigear.com](mailto:support@logigear.com) to obtain the Android legacy mapping file.

2.  Once you have obtained the file, open it using any text editor, then copy all text lines.

3.  For every interface of your active TestArchitect project\(s\), do the following:

    1.  Open the $Class Maps interface entity.

    2.  Place the cell pointer at the first column underneath the PLATFORM ANDROID header.

    3.  Paste the copied lines.


Now you may launch the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/starting-the-interface-viewer) to scan Android generic controls.




