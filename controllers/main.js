const config = require('../config/main');

/**
 * GET /
 * Home page.
 */
exports.index = function (req, res) {
    const stackable = req.res.stackable;

    stackable.getContainerItems(config.stackbleBlogKey, (error, result) => {
        // console.log(error, result.data);
        if (error) {
            console.log('stackable error', error);
        }

        res.render('home', {
            posts: result.data
        });
    });
};
