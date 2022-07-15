# Aerial Ops Code Challenge

## Problem Statement

1. In a new public github repo, create a front-end react / nextjs / typescript app with a mock user [table in Matine](https://mantine.dev/core/table/) (3 rows X 4 columns).  Fill it with some mock data.  The table should take up the width of the window.
2. In the last column, place a variable number of div elements that contain short bits of text — i.e. their size of each div is determined by the length of the text, as see below:

![Untitled](https://elderly-variraptor-b2c.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F225978f3-f677-4280-a9c4-91096f84a15d%2FUntitled.png?table=block&id=249b2037-f864-414e-ad05-bd7cb7fadeba&spaceId=550a6008-0a78-4504-8569-4415a9acaea3)

3. If there is not enough space (e.g. the table is resized or it’s loaded on a smaller screen), collapse these the individual documents into a single button that says “Documents” with a “chevron” icon on the right.  Clicking on this button opens up a menu that displays the individual documents vertically.  The breakpoint where this behavior happens should automatically depend on the total width of documents in each row (i.e. not a global constant).  So if there are different numbers of documents on each row, they may turn into the “Documents” button at different widths.
4. If there are more than 4 vertical documents in the menu, make the menu scrollable.

Bonus points for using mantine elements (e.g. [Mantine Group](https://mantine.dev/core/group/) / [Mantine Stack](https://mantine.dev/core/stack/)) where possible. 

Bonus points if you can accomplish #3 and #4 using just CSS (no JS).

Bonus points for making the UX aesthetically pleasing

Bonus points for making it easy for me to run your solution to verify it

## Solution

- I calculate the height of the [group container](https://github.com/wahabshaikh/aerial-ops-challenge/blob/main/components/List.tsx#L27) using the browser and store it as [`MAX_HEIGHT`](https://github.com/wahabshaikh/aerial-ops-challenge/blob/main/components/List.tsx#L19).
- Using [`use-resize-observer` hook](https://mantine.dev/hooks/use-resize-observer/), I keep listening to the height of the group container.
- On resizing the browser, when there is not enough space for the group elements, they wrap onto the next line, thereby increasing the height of the group container.
- I use this treshold point to make a comparison and then dynamically assign styles to toggle the visibility and position of the group elements.
- Similarly, I store the [ROW_GAP](https://github.com/wahabshaikh/aerial-ops-challenge/blob/main/components/List.tsx#L20) and [calculate the height](https://github.com/wahabshaikh/aerial-ops-challenge/blob/main/components/List.tsx#L64) of the [ScrollArea](https://mantine.dev/core/scroll-area/) such that it displays a scroller when there are more than 4 group elements.
