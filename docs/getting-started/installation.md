---
sidebar_position: 3
title: Installation
slug: /installation
---

# Installing TagoCore

:::info
To install TagoCore, you need to [Download it](/) first.
:::

## Decompressing

TagoCore can be downloaded either as a compressed `tar.gz` file or a compressed `zip` file, and in both cases you need to decompress the file before using TagoCore.

### .tar.gz

If you have downloaded TagoCore compressed as a **.tar.gz** file, you need to execute a couple of commands before running the application.
Open a terminal in the folder where you downloaded TagoCore and execute the following command:

```shell
tar -xvzf community_images.tar.gz
```

This command uses the `tar` command from unix to decompress the `.tar.gz` file in the current directory. 

### .zip

If you have downloaded TagoCore compressed as a **.zip** file, you need to execute a couple of commands before running the application.
Open a terminal in the folder where you downloaded TagoCore and execute the following command:

```shell
unzip file.zip
```

This command uses the `zip` command to decompress the `.zip` file in the current directory. 

## Executing TagoCore

After you decompress the downloaded file, you may execute the following command to list the files in the current directory:

```shell
ls
```

You should see a file named `tagocore` in there. Simply execute it:

```shell
./tagocore
```

As soon as TagoCore runs, it will open a webserver and output the URL of the server in the terminal:

```shell
TagoCore is now available at http://localhost:8888
```

That's it! Access the URL in your browser and start building your applications.

<!-- ## Next Steps

If you have no idea how TagoCore works, you should check out our [TagoCore Overview](/overview). However, if you are already familiar with some concepts, you can engage with [our community](https://community.tago.io/c/tagocore/19) by answering questions from other folks! -->
