--- 
title: "Ambiguous entities"
linktitle: "Ambiguous entities"
weight: 2
aliases: 
    - /TA_Administration/Topics/Repo_mapping_ambiguous_entities.html
---

Ambiguous entities require user intervention to map them to defined interfaces or, alternatively, to keep them as text form.

When a test module or action contains entities that belong to more than one interface, the entities are referred to as ambiguous entities. TestArchitect is not able to automatically create unique one-on-one references for those ambiguous entities. Instead, TestArchitect displays a dialog box containing \(see the example below\) the list of all ambiguous entities and which interface to map the ambiguous entities to.

![](/images//Images/select_entity_interface.png)

The Specify Interface for dialog box has a table that lists the line numbers \( **Line** column\) where the ambiguous entities \(**Interface Entity** column\) are found and which interfaces \(**Map to interface** column\) the ambiguous entities should be mapped to. The last column contains check boxes for enabling the entity mapping for each specific row. To enable the check boxes in the last column, you must select the check box **Apply the selected mappings specified above to ALL entities with the same names in this item**. Ambiguous interface entities with the same names are grouped together as a single unit and can only be mapped to a single interface. Selecting a check box to map a grouped entity automatically disables the check boxes for mapping other ambiguous interface entities in the same group. For example, both ambiguous interface entities named **login** in the above dialog box \(lines 18 and 25\) are in the same group and mapped to the same Car Rental interface. If the check box for the ambiguous entity on line 18 is selected, the check box for the ambiguous entity on line 25 will be disabled, and vice versa.

**Tip:** Entities in the same group are highlighted with the same color and their check boxes are mutually exclusive. Selecting one check box clears the check boxes for the other entities in the same group.

**Tip:** Clicking a cell in the **Map to interface** column activates the drop-down list for that cell.

When mapping an ambiguous entity to an interface called **\[--Keep as text--\]**, which is the default value, the name of the ambiguous entity is mapped to a text string whose value is the same as the string name of the ambiguous entity. Unlike mapping an ambiguous entity to a valid interface, any ambiguous entity mapped to **\[--Keep as text--\]** can no longer be available for automatic [name change propagation](/TA_Help/Topics/Projects_and_project_items_renaming_entity.html), and you will not be prompted to remap the **\[--Keep as text--\]** entity again. \(For example, if you were to upgrade the repository database based on the mapping dialog box above, the **View cars** entity could still enjoy name change propagation after the database upgrade, but the **View orders** entity could not. If you want all ambiguous entities to map to **\[--Keep as text--\]**, select the check box **Keep all items as text**.

CAUTION:

Ambiguous entities that are mapped to **\[--Keep as text--\]** during a database upgrade are no longer eligible for TestArchitect's automatic name change propagation feature, and TestArchitect will not prompt you to map those entities again.

An ambiguous entity may span more than one module in a project, in which case you can specify the mapping for that ambiguous entity for each module. Or you can apply all mappings specified on the Select Interface for Interface Entity dialog box to all modules in a project during the database upgrade by selecting the checkbox **Apply the selected mappings specified above to ALL entities with the same names in this item**.

**Tip:** The **Apply the selected mappings specified above to ALL entities with the same names in this item** check box and the **Keep all items as text** check box are mutually exclusive. You can select either one or neither.

If you do not want TestArchitect to prompt you to map ambiguous entities again, select the **Do not display this window again** check box, which has the follow effects:

-   Ambiguous entities listed in the Select Interface dialog box are mapped as specified.
-   All subsequent ambiguous entities are mapped automatically to **\[--Keep as text--\]**. Consequently, all subsequent ambiguous entities can no longer be eligible for name change propagation.
-   The **Specify interface for duplicate entities** check box at **Edit** \> **Preferences** is cleared.

**Tip:** Select the [**Specify interface for duplicate entities**](/TA_Help/Topics/Additional_features_preferences.html) check box \(**Edit** \> **Preferences**\) if you want TestArchitect to prompt you to map ambiguous entities.

**Note:** The check box **Do not display this window again** is not available on the Specify Interface for dialog box when upgrading legacy repository databases.

When you are satisfied with how ambiguous entities are mapped, click the **OK** button on the Select Interface dialog box to map all ambiguous entities as specified and continue. If you click the **Close** button, TestArchitect maps all ambiguous entities listed in the **Interface** entity column to the default **\[--Keep as text--\]**.

CAUTION:

Clicking the **Close** button on the Specify Interface for dialog box reassigns and overrides all ambiguous mappings specified in the dialog box to **\[--Keep as text--\]**. As a result, these entities can no longer be eligible for name change propagation.

**Parent topic:**[Upgrading the repository database for name change propagation](/TA_Administration/Topics/Repo_database_upgrade.html)

**Previous topic:**[Performing repository database upgrade](/TA_Administration/Topics/Repo_upgrading_database.html)

