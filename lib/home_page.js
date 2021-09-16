const logo = require('./my_robot_logo');
const options = require('./options');

module.exports = {
    async showHomePage (){
        logo.showRobotFace();
        await  options.showQuestions()
    }
}