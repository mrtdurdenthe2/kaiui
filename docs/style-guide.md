# Style guide

This is the start of the guide. The rest of the system is not written yet.

Follow only what is written here. Do not invent colors, tokens, or components. A color scheme and its patterns are chosen when an interface is built, using the brand method below. They are not stored in this guide.

## Principles

Interfaces should be as simple as possible. Start from the job the screen has to do, then keep only the structure that job needs. One group of content, the text that explains it, the image section it needs, and the controls that act on it. Extra panels, nested cards, and labels that repeat the content are clutter.

Build that interface from first principles, in this order:

1. The layered grid.
2. The type rules.
3. The brand method, when the screen needs a color scheme and image sections.

Build it on top of [Base UI](https://base-ui.com/) (`@base-ui/react`). Base UI supplies the behavior: buttons, inputs, dialogs, menus, popovers, and the rest of the accessible controls. It is unstyled, and it does not decide the look. The look comes from this guide. Do not start from a pre-styled kit, a dashboard template, or the visual defaults of a library that happens to sit on Base UI.

## Layered grid

Every component follows a simple layered grid:

1. An 8px base grid, set as tightly as possible for later flexibility. 24px radius and a 24px inset.
2. Padding as safe space, and content areas that show how things are grouped.
3. Then structure: text hierarchy, image placeholders, and controls, followed by the actual font sizes and weights used in each component.

Set the grid before color or decoration. Padding, gaps, and control sizes are multiples of 8px, pulled in tight so the same grid can flex later. The corner radius is 24px. The inset is 24px. Do not add a second radius or a second inset.

Padding is the safe space between the outer edge and the content, and between one group and the next. Show that things belong together by placing them in the same content area. A new box around each item is not grouping.

Image placeholders are part of the structure. They are filled with the patterns from the brand method, not left as empty gray boxes.

After the areas exist, set the text hierarchy, then the actual sizes and weights. Those sizes still have to obey the type rules.

## Type

Inter only. Baskerville is not used. Do not add another family for headings, numbers, captions, or labels.

Use variable Inter, so a weight of 450 is a real weight and not a browser's guess at regular or medium.

A max of three font weights and three font sizes per component. That limit is important for visual hierarchy. Count every size and every weight on the component, including labels, buttons, and metadata. A fourth size or a fourth weight means one of the others has to go.

Normal text is size 15 with a weight of 450. Paragraphs, labels, helper text, and control text are normal text unless they are genuinely more important than the rest of the component. Do not set that text smaller than 15. Size 15 is the floor, not the middle of the scale.

More important text is bigger than 15. Importance is a change in size. A title is bigger than the text under it. If one line matters more than the title, that line is the biggest of the three sizes. The two sizes above 15 are chosen for that component. This guide does not set a global heading scale. The steps have to be obvious: each size reads as larger than the one below it at a glance.

Weight supports size. It does not stand in for it. 450 is the normal weight, and it counts as one of the three. Use another weight only when the size change is not enough, and only inside the limit.

## Flat color, normal casing

No gradients. Surfaces, text, borders, controls, and image sections are flat color. Depth comes from the grid, from grouping, and from the type hierarchy. A fade, a mesh, a gradient fill, gradient text, or a gradient border is decoration, so leave it out.

No all-capital monospace tags or headers. A section does not get a tiny uppercase monospace label above it. A header is not set in monospace, and it is not set in all capitals. Headers are Inter, in normal casing, and larger than the normal text when they are the important line. A tag, if the screen actually needs one, uses the same type rules as everything else on the component.

## Brand

Brand styles are built from novel assets and a color scheme. The interface stays plain. What makes it this brand is the scheme, plus assets made for this screen. A second typeface, a stock photo, or a decorative frame is not a brand style.

When a screen needs a brand style, do this:

1. Find a published palette on a color-scheme website. Color Hunt, Happy Hues, and Coolors are the kind of site to use. Copy the colors as they are published, and keep the link to that palette. Do not invent hex values. Do not merge two palettes into a new one. Do not nudge a value because it feels slightly off.
2. The scheme has to work as flat color on a simple interface: a background, text that can be read on it, and enough colors for the controls and the patterns. If the text cannot be read, pick a different published scheme. Do not repair a scheme by adding a color that was not on the page.
3. Generate patterns from that scheme and put them in the image sections. The patterns are the novel assets. Draw them for this interface. Build the repeat on the 8px grid. Use flat fills and hard edges only. A pattern may tile. It stays quiet enough that text beside it still reads. A downloaded texture, a photo, or a gradient field is not a pattern from this guide.

Choose the scheme and the patterns at build time. This guide does not contain them.
