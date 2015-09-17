var ext = require('file-extension');

module.exports = function(files) {
    return files.reduce(function(acc, file) {
        var fileExt = ext(file);
        acc[fileExt] = (acc[fileExt] || []).concat([file]);
        return acc;
    }, {});
};
