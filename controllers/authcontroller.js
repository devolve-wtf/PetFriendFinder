module.exports = {
    signup: function (req, res) {
        res.render('signup');
    },
    signin: function (req, res) {
        res.redirect('/dashboard');
    },
    dashboard: function (req, res) {
        res.render('dashboard', {
            ownerPicture: req.user.picture,
            ownerName: req.user.name,
            ownerEmail: req.user.email,
            ownerId: req.user.id,
            ownerBio: req.user.bio,
            isUser: req.isAuthenticated()
        });
    },
    logout: function (req, res) {
        req.session.destroy(function (err) {
            res.redirect('/');
        });
    },
    home: function (req, res) {
        res.render('index');
    }
}