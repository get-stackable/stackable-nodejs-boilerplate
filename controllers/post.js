/**
 * GET /
 * Single post.
 */
exports.view = function(req, res) {
    var stackable = req.res.stackable;
    var itemId = req.params.id;

    stackable.getItem(itemId, function (error, result) {
        //console.log(error, result.data);

        res.render('post', {
            post: result.data[0].data
        });
    });
};
