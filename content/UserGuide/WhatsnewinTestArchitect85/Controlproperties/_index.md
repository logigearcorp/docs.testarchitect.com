--- 
title: "Control properties"
linktitle: "Control properties"
aliases: 
    - /TA_Help/Topics/Interface_def_control_properties.html
---
# Control properties {#Interface_def.control_properties .concept}

For each known class of control, TestArchitect uses internal mapping files to map its native properties to a set of TA properties.

Just as it does with TA classes, TestArchitect defines a common set of properties for controls across all platforms. Mappings are established between the [native properties](../../TA_Glossary/Topics/glossaryNativeProperty.html) of a given platform's controls and the set of [TA properties](../../TA_Glossary/Topics/glossaryTAProperty.html), based on each given control class and its platform.

1.  [Primary properties](../../TA_Help/Topics/Interface_def_simple_properties.html)  
A primary TA property is one that obtains its value directly from a given native property.
2.  [Secondary properties](../../TA_Help/Topics/Interface_def_derived_properties.html)  
While most TA properties get their values directly from single native properties of their associated controls, there are some TA properties whose values are calculated, often from two or more native properties, or from other controls. We'll examine a few examples.
3.  [Intake](../../TA_Help/Topics/Interface_def_intake.html)  
TestArchitect scans application windows for their controls during both the identification and playback phases of testing, to establish the controls' TA classes, TA properties and TA property values. This is called the intake process.

**Parent topic:**[Interface definitions](../../TA_Help/Topics/Interface_def.html)

**Previous topic:**[Class mapping](../../TA_Help/Topics/Class_mapping.html)

**Next topic:**[Dynamic identifiers](../../TA_Help/Topics/The_test_language_dynamic_identifiers.html)

