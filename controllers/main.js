/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
    var stackable = req.res.stackable;

    stackable.getContainerItems('yuXN5CHkCpfqi8Pk9', function (error, result) {
        //console.log(error, result.data);
        if (error) {
            console.log(error);
        }

        res.render('home', {
            posts: result.data
        });
    });
};
