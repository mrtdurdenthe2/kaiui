# Style guide

This is the start of the guide. The rest of the system is not written yet.

Follow only what is written here. Do not invent colors, tokens, or components. A color scheme and its patterns are chosen when an interface is built, using the brand method below. They are not stored in this guide.

## Principles

Interfaces should be as simple as possible. Content is the interface. A date, a sentence, a piece of media, and the action that follows are already the screen. Start from that content.

Wrap information in a component only when the component adds meaning the content does not already have. Meaning here is an action, a choice, a disclosure, or a change of state. A dialog adds meaning because it changes what can be done. A button adds meaning because it is the action. A box around a fact, a card around a paragraph, or a tile around a number does not. If the wrapper is removed and the reader loses only a frame, the component was unnecessary.

Build what remains from first principles, in this order:

1. The layered grid.
2. The type rules.
3. The brand method, when the screen needs a color scheme and image sections.

Build it on top of [Base UI](https://base-ui.com/) (`@base-ui/react`). Base UI supplies behavior for the controls that need it: buttons, inputs, dialogs, menus, popovers, and the rest of the accessible controls. It is unstyled, and it does not decide the look. The look comes from this guide. Use Base UI when the behavior needs it. A static block of content does not need a component wrapper to be on the page. Do not start from a pre-styled kit, a dashboard template, or the visual defaults of a library that happens to sit on Base UI.

Hierarchy comes from restraint. Personality comes from the details of the content. Both are specified below.

## Layered grid

Every component follows a simple layered grid:

1. An 8px base grid, set as tightly as possible for later flexibility. 24px radius and a 24px inset.
2. Padding as safe space, and content areas that show how things are grouped.
3. Then structure: text hierarchy, image placeholders, and controls, followed by the actual font sizes and weights used in each component.

The grid applies to a component you have already justified, and to the page as content areas. It is not a reason to invent a container for each piece of information.

Set the grid before color or decoration. Padding, gaps, and control sizes are multiples of 8px, pulled in tight so the same grid can flex later. The corner radius is 24px. The inset is 24px. Do not add a second radius or a second inset.

Padding is the safe space between the outer edge and the content, and between one group and the next. Show that things belong together by placing them in the same content area. Shared space is the grouping. A new box around each item is a wrapper, and a wrapper still has to add meaning.

Image placeholders are part of the structure. They are filled with the patterns from the brand method, not left as empty gray boxes.

After the areas exist, set the text hierarchy, then the actual sizes and weights. Those sizes still have to obey the type rules, including restraint.

## Type

Inter only. Baskerville is not used. Do not add another family for headings, numbers, captions, or labels.

Use variable Inter, so a weight of 450 is a real weight and not a browser's guess at regular or medium.

A max of three font weights and three font sizes per component. That limit is important for visual hierarchy. Count every size and every weight on the component, including labels, buttons, and metadata. A fourth size or a fourth weight means one of the others has to go.

Normal text is size 15 with a weight of 450. Paragraphs, labels, helper text, and control text are normal text unless they are genuinely more important than the rest of the component. Do not set that text smaller than 15. Size 15 is the floor, not the middle of the scale.

More important text is bigger than 15, and only slightly. Hierarchy through restraint: a heading needs to be slightly more prominent than its surroundings, and no more. It stays in the same voice as the body and in the same reading flow. It leads the group it belongs to. It does not sit above that group like a banner.

Judge the heading against the text next to it, not against a poster. A small step above 15 is the whole job. If the size is the first thing a person notices, it is too big. The next size up, if the component needs one, is only slightly above that heading. Three sizes, kept close. Because the steps are small, there is no display size left over, and no caption size below 15.

Leave the heading at weight 450 when the size change already makes it the heading. Another weight is available when the line still does not read as the lead, and it still counts toward the three. One difference is enough. A larger size, plus a heavier weight, plus a color change, plus a rule, is no longer restraint.

## Personality

Personality lives in details. Dates, wording, microcopy, media, and interaction give the site its character. Decorative chrome does not.

Write the date the way it would be said, specific and in the sentence when it belongs to the sentence. "Tuesday, March 3" is content. A raw timestamp styled as a meta tag is chrome.

Wording and microcopy are the voice. Name the thing. Say what will happen. Use the words this site would actually use for an empty state, a button, a confirmation, or an error. Character is in that sentence. A generic label with an icon beside it has not acquired a personality.

Media is content. The pattern in an image section, what is shown, and how it is cropped are part of what the screen means. They carry the brand method below. They are not wallpaper behind a frame.

Interaction is character you can feel. What the control does, where focus goes, and what changes when the action completes can be particular to this site. The drawing of the control stays plain. A custom ease on a box shadow is chrome. A confirmation that says exactly what just happened is personality.

Chrome is the frame that can be deleted without changing what someone reads, sees, or does. Dividers for their own sake, icon eyebrows, nested containers, badges that repeat the heading, shadows, and ornaments. Flat color and normal casing already remove two common versions of it. If the detail is not the date, the words, the media, or the interaction, it is not where character goes.

## Flat color, normal casing

No gradients. Surfaces, text, borders, controls, and image sections are flat color. Depth comes from the grid, from grouping, and from the type hierarchy. A fade, a mesh, a gradient fill, gradient text, or a gradient border is decoration, so leave it out.

No all-capital monospace tags or headers. A section does not get a tiny uppercase monospace label above it. A header is not set in monospace, and it is not set in all capitals. Headers are Inter, in normal casing, and only slightly larger than the normal text around them. A tag, if the screen actually needs one, uses the same type rules as everything else on the component. A tag that only restates the heading is chrome.

## Brand

Brand styles are built from novel assets and a color scheme. The interface stays plain. What makes it this brand is the scheme, plus assets made for this screen. Personality stays in the details above. A second typeface, a stock photo, or a decorative frame is not a brand style.

When a screen needs a brand style, do this:

1. Find a published palette on a color-scheme website. Color Hunt, Happy Hues, and Coolors are the kind of site to use. Copy the colors as they are published, and keep the link to that palette. Do not invent hex values. Do not merge two palettes into a new one. Do not nudge a value because it feels slightly off.
2. The scheme has to work as flat color on a simple interface: a background, text that can be read on it, and enough colors for the controls and the patterns. If the text cannot be read, pick a different published scheme. Do not repair a scheme by adding a color that was not on the page.
3. Generate patterns from that scheme and put them in the image sections. The patterns are the novel assets, and they are media, so they are part of the content. Draw them for this interface. Build the repeat on the 8px grid. Use flat fills and hard edges only. A pattern may tile. It stays quiet enough that text beside it still reads. A downloaded texture, a photo, or a gradient field is not a pattern from this guide. A pattern used as a border, a background wash, or a frame around ordinary text is chrome. It belongs in the image section.

Choose the scheme and the patterns at build time. This guide does not contain them.
