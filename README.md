# Nix

Css class helpers based in Flexbox and responsive.

### YARN

`yarn add aurum-nix`

### Variables

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
