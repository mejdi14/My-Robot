var List = require('term-list');
var inquirer = require('inquirer');
module.exports = {
    showOptionsList() {
        var list = new List({ marker: '\033[36m› \033[0m', markerLength: 8 });
        list.add('http://google.com', 'Tell me a joke');
        list.add('http://yahoo.com', 'Open my phone');
        list.add('http://cloudup.com', 'Check my github');
        list.add('block your phone', 'block my stupid phone');
        list.add('sing a song for me', 'sing a song for me');
        list.add('remind me why i am doing this', 'remind me why i am doing this');
        list.add('http://github.com', 'open navigator');
        list.start();

        list.on('keypress', function (key, item) {
            switch (key.name) {
                case 'return':
                    exec('open ' + item);
                    list.stop();
                    console.log('opening %s', item);
                    break;
                case 'backspace':
                    list.remove(list.selected);
                    break;
            }
        });
        list.on('empty', function () {
            list.stop();
        });
    }
};