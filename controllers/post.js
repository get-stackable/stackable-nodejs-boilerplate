/**
 * GET /
 * Single post.
 */
exports.view = function (req, res) {
    const stackable = req.res.stackable;
    const itemId = req.params.id;

    stackable.getItem(itemId, (error, result) => {
        // console.log(error, result.data);
        if (error) {
            console.log(error);
        }

        res.render('post', {
            post: result.data[0].data
        });
    });
};
