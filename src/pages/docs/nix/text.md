---
title: "Text"
layout: "guide"
weight: 9
---

<article id="1">

## text-align

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-text-align_left`  | Aligns the text to the left |
| `.nix-text-align_right` | Aligns the text to the right |
| `.nix-text-align_center` | Centers the text |
| `.nix-text-align_justify`| Stretches the lines so that each line has equal width |

```xml
<div class="nix-text-align_left"></div>
```

</article>
<article id="2">

## text-transform

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-text-transform_none`  | No capitalization. The text renders as it is. This is default |
| `.nix-text-transform_lowercase` | Transforms all characters to lowercase |
| `.nix-text-transform_uppercase` | Transforms all characters to uppercase |
| `.nix-text-transform_capitalize`| Transforms the first character of each word to uppercase |

```xml
<div class="nix-text-transform_uppercase"></div>
```

</article>
<article id="3">

## font-weight

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-font-weight_normal`  | Defines normal characters. This is default |
| `.nix-font-weight_bold` | Defines thick characters |
| `.nix-font-weight_bolder` | Defines thicker characters |
| `.nix-font-weight_lighter`| Defines lighter characters |

```xml
<div class="nix-font-weight_lighter"></div>
```

</article>
<article id="4">

## font-style

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-font-style_normal`  | The browser displays a normal font style. This is default |
| `.nix-font-style_italic` | The browser displays an italic font style |
| `.nix-font-style_oblique` | The browser displays an oblique font style |

```xml
<div class="nix-font-weight_lighter"></div>
```

</article>
<article id="5">

## white-space

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-white-space_normal`  | Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary |
| `.nix-white-space_nowrap` | Sequences of whitespace will collapse into a single whitespace. Text will never wrap to the next line. The text continues on the same line until a `<br>` tag is encountered |
| `.nix-white-space_pre`   | Whitespace is preserved by the browser. Text will only wrap on line breaks. Acts like the `<pre>` tag in HTML |

```xml
<div class="nix-white-space_nowrap"></div>
```

</article>
<article id="6">

## text-overflow

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-text-overflow_clip`  | Default value. The text is clipped and not accessible |
| `.nix-text-overflow_ellipsis` | Render an ellipsis ("...") to represent the clipped text |
| `.nix-text-overflow_initial` | Sets this property to its default value |
| `.nix-text-overflow_inherit` | Inherits this property from its parent element |

```xml
<div class="nix-white-space_nowrap nix-overflow_hidden nix-text-overflow_ellipsis"></div>
```

</article>
<article id="7">

## Responsive examples

| CLASS        | DESCRIPTION                                              |
| :------------| :------------------------------------------------------- |
| `.nix-text-align_center--xs`  | `--xs` suffix only affects device widths of 768px and lower. |
| `.nix-text-transform_uppercase--sm`  | `--sm` suffix only affects device widths of 1024px and lower. |
| `.nix-font-style_italic--md`  | `--md` suffix only affects device widths of 1200px and lower. |

</article>
