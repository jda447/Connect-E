const User = require('./user')
const Post = require('./post')

Post.belongsToMany(User, { through: 'hasRead' })
User.hasMany(Post)
User.belongsToMany(Post, { through: 'hasRead' })

module.exports = { Post, User }
