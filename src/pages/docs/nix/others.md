---
title: "Others"
layout: "guide"
weight: 10
---

<article id="1">

## vertical-align

The vertical-align CSS property specifies the vertical alignment of an inline or table-cell box.

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-vertical-align_baseline`  | The element is aligned with the baseline of the parent |
| `.nix-vertical-align_top` | The element is aligned with the top of the tallest element on the line |
| `.nix-vertical-align_middle`   | The element is placed in the middle of the parent element |
| `.nix-vertical-align_bottom`| The element is aligned with the lowest element on the line |
| `.nix-vertical-align_text-top`| The element is aligned with the top of the parent element's font |
| `.nix-vertical-align_text-bottom`| The element is aligned with the bottom of the parent element's font |

```xml
<p>
  <img src="icon.jpg" class="nix-vertical-align__middle" /> Lorem ipsum dolor sit ammet
</p>
```

</article>

<article id="2">

## cursor

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-cursor_default`  | If overflow is clipped, a scroll-bar should be added to see the rest of the content |
| `.nix-cursor_pointer`  | The overflow is clipped, and the rest of the content will be invisible |
| `.nix-cursor_not-allowed` | The overflow is clipped, but a scroll-bar is added to see the rest of the content |

```xml
<div class="nix-cursor_pointer"></div>
```

</article>
<article id="3">

## overflow

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-overflow_auto`  | If overflow is clipped, a scroll-bar should be added to see the rest of the content |
| `.nix-overflow_hidden`  | The overflow is clipped, and the rest of the content will be invisible |
| `.nix-overflow_scroll` | The overflow is clipped, but a scroll-bar is added to see the rest of the content |
| `.nix-overflow_visible`   | The overflow is not clipped. It renders outside the element's box |

```xml
<div class="nix-overflow_hidden"></div>
```

</article>
<article id="4">

## object-fit

The CSS `object-fit` property is used to specify how an `<img>` or `<video>` should be resized to fit its container.

| CLASS        | DESCRIPTION                          |
| :------------| :----------------------------------- |
| `.nix-object-fit_fill` | This is default. The replaced content is sized to fill the element's content box. If necessary, the object will be stretched or squished to fit |
| `.nix-object-fit_contain` | The replaced content is scaled to maintain its aspect ratio while fitting within the element's content box |
| `.nix-object-fit_cover` | The replaced content is sized to maintain its aspect ratio while filling the element's entire content box. The object will be clipped to fit |
| `.nix-object-fit_scale-down` | The content is sized as if none or contain were specified (would result in a smaller concrete object size) |
| `.nix-object-fit_none` | The replaced content is not resized |

```xml
<img src="http://lorempixel.com/400/200/" class="nix-object-fit_cover" width="50" height="50"/>
```

</article>
<article id="5">

## Responsive example

| CLASS        | DESCRIPTION                                              |
| :------------| :------------------------------------------------------- |
| `.nix-white-space_nowrap--xs`  | `--xs` suffix only affects device widths of 768px and lower. |
| `.nix-overflow_hidden--sm`  | `--sm` suffix only affects device widths of 1024px and lower. |
| `.nix-cursor_not-allowed--md`  | `--md` suffix only affects device widths of 1200px and lower. |

</article>