---
title: "nix"
description: "This library was created to help you customize the structure of your project with classes that change properties such as margins and alignments, including support for responsive."
layout: "guide"
icon: "code-file"
weight: 1
---

###### {$page.description}

<article id="1">

## Getting started

Download Nix from <a href="https://github.com/aurumsoftware/nix" target="_blank">repository</a> or install the package `aurum-nix`:

```shel
yarn add aurum-nix
```
and import into your project:

```xml
<link rel="stylesheet" type="text/css" href="node_modules/aurum-nix/dist/nix.min.css" />
```

</article>

<article id="2">

## Usage

Write the classes as you would write css properties and values separating with `_` between properties and the values.

By default, the classes have a prefix `nix-` that you should apply before the class name.

You can use the responsive classes with the suffix `--xs` for screens up to 768px (mobile), `--sm` for screens up to 1024px (tablets and small screens), `--md` for screens up to 1200px (medium screens) and `--lg` for screens up to 1600px (large screens).

</article>

<article id="3">

## Customization

You can customize it for your own project, change the values of variables then import the Nix file `node_modules/aurum-nix/nix` in your Sass file.

<br>

### Prefix variable

Change the prefix name to your preferred:

```sass
$prefix: 'nix-'; // nix- is default
```

In this example, your class will be `nix-diplay_block`.

or set the prefix to a blank value:

```sass
$prefix: '';
```

With this example, your class name will be `diplay_block`.

<br>

### Breakpoints variables

```sass
$xs: 768px; // screens up to 768px (mobile)
$sm: 1024px; // screens up to 1024px (tablet/small desktops)
$md: 1200px; // screens up to 1200px (medium desktops)
$lg: 1600px; // screens up to 1600px (large desktops)
```

<br>

### Sizes variables

These sizes are used for margins and paddings:

```sass
$int-size: 5; // every 5px
$max-size: 100; // up to 100px
```

`$int-size` is the interval variable to sizes, and `$max-size` is the max size to generate.

<br>

### Generate your custom values

1. Clone the <a href="https://github.com/aurumsoftware/nix" target="_blank">Nix repository</a>;
2. Install `gulp-cli`;
3. Run `yarn` or `npm instal`;
4. Run `gulp` to build or `gulp watch` to watch the changes;

</article>
