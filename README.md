# CharStatus Redirect Server

This RDS (redirect server) handles redirecting users to CharStatus.

## File Explanations

### `index.html`

This file should be as small as possible. It is ALWAYS loaded.

### `onsrvdown.js`

This file runs when the server is down. It loads the other css and HTML files.

### `osd.css` and `osd.html`

Loaded when the server is down by onsrvdown.