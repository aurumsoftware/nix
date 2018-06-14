# Nix

This library was created for help to you customize the structure of your project with classes that change properties as margins and alignment, including responsive.

### Install

Install the package `aurum-nix`:

```shel
yarn add aurum-nix
```

### Usage

Write the classes as you would write css properties and values separating with `_` between propertie and the value.

By default, the classes has a prefix `nix-` that you should apply before of the class name.

You can use the responsive classes with the suffix `--mob` for screens up until 768px (mobile), `--tab` for screens up until 1024px (tablets and small screens) and `--desk` for screens up until 1200px (medium screens).

### Customization

You can customize for your own project, importing in your sass `node_modules/aurum-nix/nix` and updating variables.

#### Prefix

Change the prefix name to your prefered:

```scss
$prefix: 'nix-';
```

> In this example, your class should be `nix-diplay_block`.

or remove prefix setting a blank value:

```scss
$prefix: '';
```

> With this example, your class should be `diplay_block`.

#### Breakpoints

```scss
$mob: 768px; // screens up until 768px (mobile)
$tab: 1024px; // screens up until 1024px (tablet/small desktops)
$desk: 1200px; // screens up until 1200px (desktops)
```

#### Sizes

This sizes is used for margins and paddings:

```scss
$int-size: 5; // every 5px
$max-size: 100; // up until 100px
```

> `$int-size` is the interval to sizes, and `$max-size` is the max size to generate.

## Generate your custom values from this repository

1. Clone this repository;
2. Install `gulp-cli`;
3. Run `yarn` or `npm instal`;
4. Run `gulp` to build or `gulp watch` to watch the changes;
