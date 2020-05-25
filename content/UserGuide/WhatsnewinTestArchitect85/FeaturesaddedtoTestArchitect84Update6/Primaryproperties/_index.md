--- 
title: "Primary properties"
linktitle: "Primary properties"
aliases: 
    - /TA_Help/Topics/Interface_def_simple_properties.html
---
# Primary properties {#Interface_def.simple_properties .concept}

A primary TA property is one that obtains its value directly from a given native property.

In most cases, mappings from [native properties](../../TA_Glossary/Topics/glossaryNativeProperty.html) to [TA properties](../../TA_Glossary/Topics/glossaryTAProperty.html) are one-to-one. That is, a given native property of a control is mapped to a single TA property. For example, the native text properties of all Java control classes are mapped to the value TA properties of their corresponding TA classes. In some cases, it may be a one-to-many mapping, where a given native property is used to provide values to more than a single TA property. In fact, the native text property of a Java label control supplies its value not just to the control's value TA property, but to the caption and name TA properties as well.

TA properties of these types are referred to as primary properties. During a [window intake](Interface_def_intake.html), the controls of an application window are scanned, the correct set of TA properties is determined for each control, and each TA property is loaded with a value. For the simplest TA properties, the value is simply copied from the native property mapped to it.

So, to continue with the just-mentioned example, the following Java application window displays a button with the word Login. That display text comes from the button's native text property. Because the text property is mapped to the value TA property, we can see in the Interface Viewer that, once an intake is performed, value also holds the string Login.

![](../Images/Car_Rental_Login.png)

![](../Images/value_property_login.png)

**Note:** Note that not every native property is mapped to a TA property. In some platforms, controls have far more native properties than are generally required for testing.

-   **[Positional properties \(left, top, width, height\)](../../TA_Help/Topics/Interface_def_positional_properties.html)**  
The positional properties of a control specify its location and dimensions.

**Parent topic:**[Control properties](../../TA_Help/Topics/Interface_def_control_properties.html)

**Next topic:**[Secondary properties](../../TA_Help/Topics/Interface_def_derived_properties.html)

