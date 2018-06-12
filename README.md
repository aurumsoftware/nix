# Nix

Css helpers based in Flexbox and responsive.

### YARN

`yarn add aurum-nix`

### Variables

You can customize for your own project on file `helpers/_variables.scss`:

### Prefix

Change to your prefered prefix:

```scss
$prefix: 'au-';
```

> With this example, your class should be `au-diplay--block`

### Breakpoint sizes:

```scss
$lg: 1400px;
$md: 1200px;
$sm: 1024px;
$xs: 768px;
```
> The media queries is used as  `max-width`

and suffix to apply in class name (in order of breakpoint sizes):

```scss
$suffix: 'lg', 'md', 'sm', 'xs';
```

### Sizes

This sizes is used to margins, paddings, widths ans heights:

```scss
$int-size: 5;
$max-size: 100;
```

`$int-size` is the interval to sizes, and `$max-size` is the max size to generate.

## Generate your custom values

You can compile with gulp:

```bash
gulp
```
