/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
    var stackable = req.res.stackable;

    stackable.getContainerItems('qnwesbEkW7kcjqzZ7', function (error, result) {
        //console.log(error, result);

        res.render('home', {
            projects: result.data
        });
    });
};
