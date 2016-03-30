var PORT = 4000;

module.exports = {
    port: PORT,
    db: 'mongodb://localhost/todos',
    facebook: {
        clientID: '202504846791549',
        clientSecret: 'e101c9e8e1f2aa13d18047de13a7279f',
        callbackURL: 'http://localhost:'+ PORT +'/oauth/facebook/callback'
    }
};