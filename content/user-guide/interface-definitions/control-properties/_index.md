--- 
title: "Control properties"
linktitle: "Control properties"
description: "For each known class of control, TestArchitect uses internal mapping files to map its native properties to a set of TA properties."
weight: 12
aliases: 
    - /TA_Help/Topics/Interface_def_control_properties.html
keywords: "control properties, TA property"
---

For each known class of control, TestArchitect uses internal mapping files to map its native properties to a set of TA properties.

Just as it does with TA classes, TestArchitect defines a common set of properties for controls across all platforms. Mappings are established between the [native properties](/user-guide/support/glossary-of-terms/native-property) of a given platform's controls and the set of [TA properties](/user-guide/support/glossary-of-terms/ta-property), based on each given control class and its platform.

1.  [Primary properties](/user-guide/interface-definitions/control-properties/primary-properties/)  
A primary TA property is one that obtains its value directly from a given native property.
2.  [Secondary properties](/user-guide/interface-definitions/control-properties/secondary-properties/)  
While most TA properties get their values directly from single native properties of their associated controls, there are some TA properties whose values are calculated, often from two or more native properties, or from other controls. We'll examine a few examples.
3.  [Intake](/user-guide/interface-definitions/control-properties/intake)  
TestArchitect scans application windows for their controls during both the identification and playback phases of testing, to establish the controls' TA classes, TA properties and TA property values. This is called the intake process.




