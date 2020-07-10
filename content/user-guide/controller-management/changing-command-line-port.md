--- 
title: "Changing command line port"
linktitle: "Changing command line port"
description: "TestArchitect supports users in changing the TA command line port number to resolve port conflicts."
weight: 5
aliases: 
    - /TA_Help/Topics/ug_changing_cmdline_port.html
keywords: "commandline port, changing port number"
---

TestArchitect supports users in changing the TA command line port number to resolve port conflicts.

{{<note>}} Applies to TestArchitect [8.3 Update 5](/user-guide/version-history/features-added-to-testarchitect-8-3-update-5/) and higher.

{{<remember>}}

-   To change the port number, set an environment variable named COMMANDLINE\_PORT
-   The default value of COMMANDLINE\_PORT is 53800.
-   Ensure that the new port number must be in the range of 53800-53899. \([Learn more](/administration-guide/default-port-numbers-and-port-ranges)\)

## {{< expand >}} On a Windows machine

Use the following command:

```
Set COMMANDLINE_PORT=<New port number>
```

**For example**:

```
Set COMMANDLINE_PORT=53843
```

## {{< expand >}} On a Red Hat Linux machine

Use the following command:

```
export COMMANDLINE_PORT=<New port number>
```

For example:

```
export COMMANDLINE_PORT= 53843
```

## {{< expand >}} In Docker Environment

When you deploy the [TestArchitect image](https://hub.docker.com/r/logigear/testarchitect/) on multiple containers at once within a single [Docker](https://docs.docker.com/engine/docker-overview/) host machine, the containers will share the same [TestArchitect command line](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/) port. So it is possible that TestArchitect test results are not returned to the proper container.

In order to address the issue, you need to modify the port number of the TA command line on each container in the Docker environment. In summary, change the port number when you start the TestArchitect image on a container.

Your command might resemble the following:

```
$ docker run -it --rm -p 53843:53843 **-e COMMANDLINE\_PORT=53843** --name <ContainerName> <Image>:<Tag>  
```

Where [-e](https://docs.docker.com/engine/reference/commandline/run/#options): to modify the COMMANDLINE\_PORT environment variable.



