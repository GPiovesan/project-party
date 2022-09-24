const server = require('../server/app')
const user = require('../controllers/user_controller')

test('Should create user', async function () {
    const user1 = await user.addUser({})
});