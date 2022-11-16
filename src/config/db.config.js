module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root999",
    DB: "nodejs_image_upload",
    dialect: "mysql", 
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}