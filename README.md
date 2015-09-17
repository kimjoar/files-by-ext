files-by-ext
============

> Give it a list of files, receive an object keyed by file extension

Install
-------

```
npm install --save files-by-ext
```

Usage
-----

```javascript
filesByExt(['test.js', 'test2.js', 'test.css']);
//=> { js: ['test.js', 'test2.js'], css: ['test.css'] }
```

API
---

### filesByExt(files)

Returns an object keyed by file extension. Uses
[`file-extension`](https://www.npmjs.com/package/file-extension)
behind the scenes.

#### files

Type: `array`

See [`file-extension`](https://www.npmjs.com/package/file-extension)
for details on how file extensions are found and how it differs
from `path.extname`.

License
=======

MIT © [Kim Joar Bekkelund](http://kimjoar.net)
