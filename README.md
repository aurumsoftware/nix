![image](https://user-images.githubusercontent.com/22989469/41984598-6a8b4568-7a07-11e8-8f1c-60f7255ff6e9.png)

This library was created to help you customize the structure of your project with classes that change properties such as margins and alignments, including support for responsive.

### Install

Download this repository or install the package `aurum-nix`:

```shel
yarn add aurum-nix
```
And import into your project:

```xml
<link rel="stylesheet" type="text/css" href="node_modules/aurum-nix/dist/nix.min.css" />
```
or
```javascript
import "aurum-nix/dist/nix.min.css";
```

### Usage

Write the classes as you would write css properties and values separating with `_` between the properties and the values.

By default, the classes have a prefix `nix-` that you should apply before the class name.

You can use the responsive classes with the suffix `--xs` for screens up to 768px (mobile), `--sm` for screens up to 1024px (tablets and small screens), `--md` for screens up to 1200px (medium screens) and `--lg` for screens up to 1600px (large screens).

### Customization

You can customize it for your own project, change the values of variables then import the Nix file `node_modules/aurum-nix/nix` in your SASS.

#### Prefix

Change the prefix name to your preferred:

```scss
$prefix: 'nix-';
```

> In this example, your class name will be `nix-diplay_block`.

or set the prefix to a blank value:

```scss
$prefix: '';
```

> With this example, your class name will be `diplay_block`.

#### Breakpoints

```scss
$xs: 768px; // screens up to 768px (mobile)
$sm: 1024px; // screens up to 1024px (tablet/desktops small screens)
$md: 1200px; // screens up to 1200px (desktops medium screens)
$lg: 1600px; // screens up to 1200px (desktops large screens)
```

#### Sizes

These sizes are used for margins and paddings:

```scss
$int-size: 5; // every 5px
$max-size: 100; // up to 100px
```

> `$int-size` is the interval variable to sizes, and `$max-size` is the max size to generate.

## Generate your custom values from this repository

1. Clone the <a href="https://github.com/aurumsoftware/nix" target="_blank">Nix repository</a>;
2. Run `yarn` to install dependencies;
3. Run `yarn build:nix` to build or `yarn watch:nix` to watch the changes;
