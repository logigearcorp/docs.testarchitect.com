--- 
title: "Changing command line port"
linktitle: "Changing command line port"
aliases: 
    - /TA_Help/Topics/ug_changing_cmdline_port.html
---
# Changing command line port {#Changing_cmdline_port .concept}

TestArchitect supports users in changing the TA command line port number to resolve port conflicts.

**Note:** Applies to TestArchitect [8.3 Update 5](../../TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.

**Remember:**

-   To change the port number, set an environment variable named COMMANDLINE\_PORT
-   The default value of COMMANDLINE\_PORT is 53800.
-   Ensure that the new port number must be in the range of 53800-53899. \([Learn more](../../TA_Administration/Topics/adm_port_number_port_ranges.html)\)

## On a Windows machine { .section}

Use the following command:

```
Set COMMANDLINE_PORT=<New port number>
```

**For example**:

```
Set COMMANDLINE_PORT=53843
```

## On a Red Hat Linux machine { .section}

Use the following command:

```
export COMMANDLINE_PORT=<New port number>
```

For example:

```
export COMMANDLINE_PORT= 53843
```

## In Docker Environment { .section}

When you deploy the [TestArchitect image](https://hub.docker.com/r/logigear/testarchitect/) on multiple containers at once within a single [Docker](https://docs.docker.com/engine/docker-overview/) host machine, the containers will share the same [TestArchitect command line](Test_exec_cmd.html) port. So it is possible that TestArchitect test results are not returned to the proper container.

In order to address the issue, you need to modify the port number of the TA command line on each container in the Docker environment. In summary, change the port number when you start the TestArchitect image on a container.

Your command might resemble the following:

```
$ docker run -it --rm -p 53843:53843 **-e COMMANDLINE\_PORT=53843** --name <ContainerName> <Image>:<Tag>  
```

Where [-e](https://docs.docker.com/engine/reference/commandline/run/#options): to modify the COMMANDLINE\_PORT environment variable.

**Parent topic:**[Controller management](../../TA_Help/Topics/Controller_management.html)

**Previous topic:**[Changing a TestArchitect Controller port number](../../TA_Help/Topics/Controller_changing_port.html)

