---
sidebar_position: 6
title: Plugin - Publish using CLI
sidebar_label: Publish using CLI
slug: /plugins/publish-cli
---

:::info
This feature is only available in SDK versions greater than **v0.7.2**
:::

## Authentication

To publish a plugin in the store, it's required to be authenticated with TCORE. You should take a look at the [Prerequisites](/plugins/create/prerequisites) before starting. You should make sure that your plugin pack it's working properly before publishing it.

### Login

This is the best way to deploy a plugin using your own machine. To get started just run:

```bash
$ npx tcore-plugin login
```

Or if the SDK is installed globally:

```bash
$ tcore-plugin login
```

After filling in the credentials, you'll need to choose your profile.
This profile will be the owner of your plugin. To check if the authentication process was successful, you can run the **who am i** command.

```bash
$ tcore-plugin whoami
```

If you need to change your account or profile just run the following command to logout:

```bash
$ tcore-plugin logout
```

## Publish

Before publishing your plugin, make sure to pack it and test it locally.
The version that you published will be the same found in the **package.json** file.
To publish the plugin run the following command, you can add the flag **--force** to ignore the packing process.

```bash
$ tcore-plugin publish
```

If no errors occurred, your plugin will be available at [my plugins](https://tagocore.com/account/plugins).
