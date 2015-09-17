var filesByExt = require('./');
var test = require('tape');

test('files-by-ext', function (t) {
    t.deepEqual(
        filesByExt([]),
        {},
        'no files'
    );

    t.deepEqual(
        filesByExt(['test.js']),
        { js: ['test.js'] },
        'one file'
    );

    t.deepEqual(
        filesByExt(['test.js', 'test2.js']),
        { js: ['test.js', 'test2.js'] },
        'multiple files, same extension'
    );

    t.deepEqual(
        filesByExt(['test.js', 'test.js']),
        { js: ['test.js', 'test.js'] },
        'duplicate files'
    );

    t.deepEqual(
        filesByExt(['test.js', 'test.css']),
        { js: ['test.js'], css: ['test.css'] },
        'multiple extensions'
    );

    t.end();
});
