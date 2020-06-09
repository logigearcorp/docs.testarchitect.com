--- 
title: "Argument types"
linktitle: "Argument types"
weight: 4
aliases: 
    - /reuse/reuse.Creating_and_using_actions_Arg_type.html
---

An action argument can have one of several possible data types.

Once you have defined an argument in an action worksheet, and then [checked in](../TA_Help/Topics/Project_items_checkin.html) the action, the new argument appears as a node in the TestArchitect explorer tree, under the node of its parent action.

By double-clicking an action argument node, the Argument page is displayed in the main panel. On this page, you, or an automation engineer, may assign an argument type to the argument. Depending on what kind of data type is selected, additional modifier fields might be needed to define possible values, ranges or formats. \(Possible values for the **Argument Modifier** field are discussed below.\)

**Note:** Whenever changes are made in the Argument page, the **Apply** button must be clicked to force the changes to take effect.

![](../TA_Help/Images/ug_argumenttype.png)

Modifications to an argument's attributes have no direct effect on its parent action's definition \(that is, on the action worksheet\). They do, however, allow TestArchitect to assist you at the time of test writing. When you write an action line calling a user-defined action, the editor provides assistance with arguments that have modifier specifications, helping to ensure that the values you provide are consistent with the modifiers. The form of this assistance depends on the type of the argument involved, as discussed below.

In general, while the focus is on an argument cell:

1.  Press Ctrl + Spacebar. A context list of available, defined values then appears.
2.  Using the mouse or arrow keys, select a value.
3.  Double-click, or hit **Enter**, to insert the selected value into the cell.

## Types of arguments

**String**

This is the default type that is assigned to an argument when it is created. Any value is accepted as a literal string.

**Note:** The **Argument Modifier** field is not applicable to the String type, so the **Argument Modifier** field is disabled when `Argument Type = String`.

**Date**

When you enter data into an argument field of the Date type, you have the option of either typing a date directly in, or allowing TestArchitect to assist you with a pop-up calendar control. The calendar control is invoked by hitting Ctrl + Spacebar, or by putting the cell into a text-insertion state. \(That's what you're in when you see the blinking text cursor in the cell\). Next, click the triangle button that appears. Once in the calendar control, you may navigate to the date you wish to insert, then simply click it.

The **Argument Modifier** field of a Date argument allows you to specify the form that the entered date will take. Several formats are available for the date type, using different arrangements of various month, day and year specifiers. The set of available specifiers is as follows:

![](../TA_Help/Images/ug_argumenttype1.png)

**Note:** Specifier codes must be all lowercase when entered.

Allowable delimiters between specifiers are hyphen \( - \), forward slash \( / \), comma \( , \) and space. Delimiters may also be omitted. Hence, some example date formats are:

|||
|------|------|
|mm/dd/yy|12/27/11|
|ddmmmyyyy|27dec2011|
|mmmm dd,yyyy|december 27,2011|
|dddd,mmmm yyyy|tuesday,december 2011|

**Value Set**

A value set is a user-defined set of allowable values, also known as the value domain. In the editor, when you wish to enter data into a cell of an argument of type Value Set, you have access to a drop-down list of all elements in the value domain.

**Tip:** When focus is on the cell, you may access the drop-down list by hitting Spacebar.

Alternatively, the list may be brought up by double- or triple-clicking in the cell, depending on whether focus is already on that field. You may then select a value from the drop-down list, or type a value directly into the field.

**Note:** In some cases \(depending on the argument modifier constraints\), the value domain is essentially "open": values outside the Value Set list are treated as acceptable, and in other cases, they may be unacceptable. \(However, the only real difference is that values outside the value set appear red in the editor. Unless there is specific language in the user-defined action's action lines that catches non-domain values during execution, they are treated normally.\)

The **Argument Modifier** field of a Value Set argument is where you specify the value domain. Your modifier may be as straightforward as a simple list `(1, 2, 3, 4, 5)`, or can involve complex expressions in which the value domain depends on the contents of one or more other argument fields. For example, for a given action, an argument named car model might have different value domains, depending on the existing contents of the car type \(`standard`, `compact`, `premium`, or `minivan`\) argument.

The following syntax rules apply when defining a modifier for a Value Set argument:

-   Elements in a list of acceptable values must be comma-delimited.
-   To include a comma in a value, encode the entire value in double quotes. For example: `"Obama, Barack", "Bush, George", "Clinton, Bill"`.

Conditionals, in which the value domains are determined by the values in other argument\(s\), make use of comparison operators to determine the contents of the value domain:

|Precedence|Comparison operator|Meaning|
|----------|-------------------|-------|
|4|=|equal to|
|4|<\>|not equal to|
|4|\>|greater than|
|4|\>=|greater than or equal to|
|4|<|less than|
|4|<=|less than or equal to|

**Note:** For the full list of operator precedence, see [here](../TA_Automation/Topics/aut_operator_precedence.html).

**Important:**

-   When a conditional statement is required, the condition and the values associated with that condition must be separated by a colon \( : \). For example: `car type=standard: Monte Carlo, Grand Am, Mustang Coupe`
-   If there are multiple conditional statements, they are delimited by semicolons \( ; \).

Conditional statements are evaluated from left-to-right. The operative value domain is the one connected with the first conditional statement that is satisfied. Subsequent conditional statements are ignored. For example, assume the following contents of a modifier field for the apparel argument:

`temperature <= 40: overcoat, scarf, earmuffs; temperature <= 60: sweater, jeans; temperature <= 80: t-shirt, shorts; temperature > 80: bikini, sandals`.

-   If the temperature argument holds the value `55`, the operative value domain for apparel is sweater, jeans.
-   It does not matter that the `temperature<=80` conditional is also satisfied, because it appears after the `temperature<=60` conditional, which is the first one satisfied.

Each conditional statement may have multiple conditions. These are combined with the logical operators and, or, and not.

|Precedence|Logical operator|Meaning|
|----------|----------------|-------|
|5|not|Value is TRUE if its operand is FALSE.|
|6|and|Value is TRUE if and only if both sides of the and operator are TRUE.|
|7|or|Value is TRUE if either side of the or operator is TRUE.|

Parentheses may be used in statements with multiple conditionals, in order to override the default order of precedence.

The asterisk \( \* \) may be used as a wildcard to represent any value. This applies to conditionals as well as value set lists. In the latter case, it indicates an open value domain. In the case of conditionals, it is useful at the end of a list of conditional value set expressions, to indicate the default value set \(see the [table](reuse.Creating_and_using_actions_Arg_type.html#table_z4c_tfh_xn) below\).

Some further examples of value set modifiers:

|Name|Value Set|Explanation|
|----|---------|-----------|
|country|`US, Canada, Mexico`|Example of a simple value set. Only US, Canada and Mexico are acceptable. All other values are displayed in red in the editor.|
|country|`US, Canada, Mexico, *`|US, Canada, and Mexico appears in the drop-down list, but any other input is accepted \(that is, not displayed in red\).|
|city|`country=US: Los Angeles, Chicago; country=Canada: Montreal, Vancouver; country=Mexico:*`|-   2 cities, each are displayed in the list if country is US or Canada.-   No option is displayed for Mexico, but any value is accepted.-   For any other country, any city value is regarded as invalid \(displayed in red\).|
|zip code|`country=US and city=Los Angeles: 90001, 90002, 90003; country=US and city=Chicago: 60601, 60602, 60603; country=Canada: *, country=*: n/a`|-   3 zip codes, each are displayed if country is US and city is either Los Angeles or Chicago.-   No other zip code is allowed for Los Angeles or Chicago.-   If country is Canada, any zip code is valid.-   If country is anything else, n/a is the only option.|

Example of value set modifiers:

|Name|Value Set|Explanation|
|----|---------|-----------|
|country|US, Canada, Mexico|Example of simple value set. Only US, Canada, and Mexico are acceptable. All others will display in red.|

**Interface Entity**

This argument type is used to pass the name of an interface entity to an action. When an argument has the Interface Entity type, you are presented with a drop-down list of interface entities to choose from. The list includes all interface entities defined in the project.

Additionally, if your project subscribes to any other projects, the list includes interface entities defined in the supplier\(s\). Entities of the working project are presented in blue text, whereas interface entities of supplier projects appear in red.

![](../TA_Help/Images/interface_entity_red_blue.png)

**Note:**

-   Any name conflicts \(same-named interface entities existing in both the working project and a supplier project\) are resolved in favor of the working project.
-   The **Argument modifier** field is not applicable to arguments of Interface Entity type.

**Interface Element**

This argument type is used to pass the name of an interface element to an action. When an argument has the Interface Element type, you are presented with a drop-down list of interface elements to choose from. The list includes all interface elements defined in the project.

**Note:** The **Argument modifier** field is not applicable to arguments of Interface Element type.

## Hiding arguments that use default values

TestArchitect can be configured so that argument headers and values used in calls to actions can be hidden in the text editor when the values match the defaults defined for the action. You can set this up in the [Preferences](../TA_Help/Topics/Additional_features_preferences.html) dialog box:

1.  Select menu **Edit** \> **Preferences**
2.  In the **Preferences** dialog box, select the **Hide arguments using default value** check box.
3.  Click **Save.**

After setting this option, arguments in action lines that pass default values are hidden in the test editor when you save the file.

1.  [Automating actions](../TA_Help/Topics/Creating_and_using_actions_Arg_type_auto_action.html)  
An action which can be automated belongs to one of three categories: built-in, user-defined or user-scripted.

**Parent topic:**[User-defined actions](../reuse/reuse.High_level_actions.html)

**Previous topic:**[Entering a new action line](../TA_Help/Topics/High_level_actions_using.html)

**Next topic:**[Exporting actions](../TA_Help/Topics/High_level_actions_exporting.html)

