var inquirer = require('inquirer');
module.exports = {
    async keypress  () {
        return new Promise((resolve) => {
            document.addEventListener('keydown', onKeyHandler);
            function onKeyHandler(e) {
              if (e.keyCode === 13) {
                document.removeEventListener('keydown', onKeyHandler);
                resolve();
              }
            }
          });
      }
};