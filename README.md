This is a browser extension that sorts posts in a thread on an imageboard by
the number of replies so that you get the most interesting & engaging posts
on top of the thread.

#### Uploading the extension to Firefox

Build the extension archive (assuming you are in the project root directory)
or grab it from the releases.

```bash
zip -r -FS postpeak.zip * --exclude '*.git*'
```

Navigate to the debugging page in Firefox (the URL below)

```
about:debugging#/runtime/this-firefox
```

Click the "Load Temporary Add-on..." button and select the `postpeak.zip` file

Now, the extension should appear in the "Temporary extensions" list.

#### Using the extension to Firefox

Go to a thread on an imageboard thread page, click the "Extension" button in
the toolbar (the puzzle icon), and click "Postpeak". The posts will get sorted by the number of
replies in descending order and will be re-sorted once in a minute.
