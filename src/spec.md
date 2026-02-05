# Specification

## Summary
**Goal:** Make the message area blend seamlessly with the page background and ensure the emoji/hearts rain renders above all greeting content.

**Planned changes:**
- Update the greeting page styling so the message card/container uses the same background color/gradient as the page background (removing the visible white card contrast) while keeping all text and the photo unchanged in position and size.
- Adjust rendering/layering so the floating emoji/hearts rain displays as an overlay on top of the heading, message text, signature, and photo, without capturing pointer events and without changing existing spawn/burst behavior.

**User-visible outcome:** The greeting page looks like one unified background (no white card block), and the emoji/hearts rain floats visibly over both the text and the photo while the page remains fully usable.
