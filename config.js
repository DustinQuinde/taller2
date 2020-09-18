const config = {
    dbUrl : process.env.DB_URL || "mongodb+srv://user:6qFxD4iEfPTJYSft@cluster0.kctbf.mongodb.net/ups?retryWrites=true&w=majority",
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'https://plataformasweb.herokuapp.com/',
    publicRoute: process.env.PUBLIC_ROUTE || '/',
    filesRoute: process.env.FILES_ROUTE || 'files'

}

module.exports = config