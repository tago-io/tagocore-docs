---
sidebar_position: 1
sidebar_class_name: aaa
title: Publishing Errors
slug: /plugin/store/publishing-errors
---

# Publishing Errors

After you publish a Plugin Version to the Plugin Store, it may or may not contain _publishing errors_.
Publishing errors happen when the structure of a Plugin Version contains errors.

If a Plugin Version contains a publishing error, the version will not appear in the Plugin Store. To check if your 
Plugin contains a publishing error, go to your [Plugin Management Page](https://tagocore.com/account/plugins).

Here is a list of all possible publishing errors and their codes:

## Error #1

- Message: `Inconsistent Properties`
- Code: 1

This error will occur when some properties of the package.json file is different across all platforms of the Plugin
Version. It's important to note that this error will only happen if you publish a cross-platform Plugin Version.

## Error #2

- Message: `Invalid package.json name`
- Code: 2

This error will occur when the package.json contains an invalid `name` property.

## Error #3

- Message: `Invalid package.json version`
- Code: 3

This error will occur when the package.json contains an invalid `version` property.

## Error #4

- Message: `TagoCore manifest is missing`
- Code: 4

This error will occur when the `tagocore` property is missing from the package.json file, meaning the Plugin Version
doesn't have a manifest and thus cannot be published.

## Error #5

- Message: `'tagocore.icon' property missing in package.json`
- Code: 5

This error will occur when the `icon` property is missing from the `tagocore` property in the package.json file, meaning
the Plugin Version manifest didn't specify an icon.

## Error #6

- Message: `'tagocore.full_description' file not found`
- Code: 6

This error will occur when the `full_description` property in the Plugin Version manifest is specifying a file that
doesn't exist.

For example, if this property is set to `./README.MD` but the `README.md` file is not included
in the bundle, this error will happen.


## Error #7

- Message: `'tagocore.short_description' length exceeded 100 characters`
- Code: 7

This error will occur when the `short_description` property in the Plugin Version manifest has more than 100
characters in it.

## Error #8

- Message: `Same version is already published`
- Code: 8

This error will occur when a Plugin with the same `name` and `version` in the package.json has already been published
to the Plugin Store.

## Error #9

- Message: `There is a greater version already published`
- Code: 9

This error will occur when you try to publish an outdated version of your Plugin. For example, if you published version
`1.0.0` of your Plugin first, and then tried to publish version `0.0.9`, this error will happen.

## Error #10

- Message: `Unknown error while decompressing plugin`
- Code: 10

This error will occur when an unexpected error happened while extracting your bundled Plugin Version.
Make sure the .tcore file you are trying to submit is a valid gzipped tarball.

## Error #11

- Message: `No package.json files were found`
- Code: 11

This error will occur if no `package.json` files were found in your bundled Plugin Version. Make sure you are including
the package.json when bundling your plugin.

## Error #12

- Message: `Unknown error`
- Code: 12

This error will occur when an unexpected error is detected while trying to publish your Plugin Version.
Try to publish your Plugin Version later.

## Error #13

- Message: `Authorization denied`
- Code: 13

This error will occur when the `name` of your Plugin Version's `package.json` belongs to another Profile. Make sure you
are setting the correct `name` in your Plugin Version's `package.json`.

## Error #14

- Message: `Unknown error while parsing package.json file`
- Code: 14

This error will occur when the `package.json` of your Plugin Version could not be parsed. Make sure the `package.json`
file contains a valid JSON structure.

## Error #15

- Message: `Bundle size exceeds 100 MB`
- Code: 15

This error will occur when the total bundle size exceeds 100 MB.
