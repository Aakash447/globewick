const config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI,
        // DATABASE: 'mongodb+srv://aakash:aakash123@globewick.poxbs.mongodb.net/globewick?retryWrites=true&w=majority'
    }, 
    default:{
        SECRET: 'SUPERSECRETPASSWORD1234',
        DATABASE: 'mongodb://localhost:27017/globewick',
    }
} 

exports.get = function get(env){
    return config[env] || config.default
}