# Nix (beta)

Css helpers based in Flexbox and responsive.

### YARN

`yarn add aurum-nix`

### Variables

You can customize for your own project on file `helpers/_variables.scss`:

### Prefix

Change to your prefered prefix:

```scss
$prefix: 'nix-';
```

> With this example, your class should be `nix-diplay_block--xs`

### Breakpoint sizes:

```scss
$xs: 0;
$sm: 768px;
$md: 1024px;
$lg: 1200px;
```

### Sizes

This sizes is used to margins, paddings, widths ans heights:

```scss
$int-size: 5;
$max-size: 100;
```

`$int-size` is the interval to sizes, and `$max-size` is the max size to generate.

## Generate your custom values

You can compile with gulp rinning `gulp` or `gulp watch`;
