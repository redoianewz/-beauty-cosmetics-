---
layout: docs
title: Ratios
group: components
description: Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent.
toc: true
---

## About{.doc-toc-heading}

Use the ratio helper to manage the aspect ratios of external content like `<iframe>`s, `<embed>`s, `<video>`s, and `<object>`s. These helpers also can be used on any standard HTML child element (e.g., a `<div>` or `<img>`). Styles are applied from the parent `.ratio` class directly to the child.

Aspect ratios are declared in a Sass map and included in each class via CSS variable, which also allows [custom aspect ratios](#custom-ratios).

{{< docs/callout info >}}
**Pro-Tip!** You don't need `frameborder="0"` on your `<iframe>`s as we override that for you in [Reboot](https://getbootstrap.com/docs/5.3/content/reboot/).
{{< /docs/callout >}}

## Example{.doc-toc-heading}

Wrap any embed, like an `<iframe>`, in a parent element with `.ratio` and an aspect ratio class. The immediate child element is automatically sized thanks to our universal selector `.ratio > *`.

{{< docs/example >}}
<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
{{< /docs/example >}}

## Aspect ratios{.doc-toc-heading}

Aspect ratios can be customized with modifier classes. By default the following ratio classes are provided:

{{< docs/example class="bd-example-ratios" >}}
<div class="ratio ratio-1x1">
  <div>1x1</div>
</div>
<div class="ratio ratio-4x3">
  <div>4x3</div>
</div>
<div class="ratio ratio-16x9">
  <div>16x9</div>
</div>
<div class="ratio ratio-21x9">
  <div>21x9</div>
</div>
{{< /docs/example >}}

## Custom ratios{.doc-toc-heading}

Each `.ratio-*` class includes a CSS custom property (or CSS variable) in the selector. You can override this CSS variable to create custom aspect ratios on the fly with some quick math on your part.

For example, to create a 2x1 aspect ratio, set `--bs-aspect-ratio: 50%` on the `.ratio`.

{{< docs/example class="bd-example-ratios" >}}
<div class="ratio" style="--bs-aspect-ratio: 50%;">
  <div>2x1</div>
</div>
{{< /docs/example >}}

This CSS variable makes it easy to modify the aspect ratio across breakpoints. The following is 4x3 to start, but changes to a custom 2x1 at the medium breakpoint.

```scss
.ratio-4x3 {
  @include media-breakpoint-up(md) {
    --bs-aspect-ratio: 50%; // 2x1
  }
}
```

{{< docs/example class="bd-example-ratios bd-example-ratios-breakpoint" >}}
<div class="ratio ratio-4x3">
  <div>4x3, then 2x1</div>
</div>
{{< /docs/example >}}

## Sass map{.doc-toc-heading}

Within `_variables.scss`, you can change the aspect ratios you want to use. Here's our default `$ratio-aspect-ratios` map. Modify the map as you like and recompile your Sass to put them to use.

{{< docs/scss-docs name="aspect-ratios" file="src/assets/scss/_theme-variables.scss" >}}
