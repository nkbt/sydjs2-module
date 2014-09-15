module.exports = function(name) {
    return ['Hello', name || 'unnamed!'].join(', ');
}
