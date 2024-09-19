const getCommentsHandler = (req, res) => {
    res.send('Get comments route')
}

const postCommentsHandler = (req, res) => {
    res.send('Post comments route')
}

const getSingleCommentHandler = (req, res) => {
    // console.log(req.params)
    res.send(
        `Get comment route. Comment ID: ${req.params.commentId} and ${req.params.userId}`
    )
}

const deleteSingleCommentHandler = (req, res) => {
    res.send(`Delete comment route. Comment ID: ${req.params.commentId}`)
}

module.exports = {
    getCommentsHandler,
    getSingleCommentHandler,
    postCommentsHandler,
    deleteSingleCommentHandler,
}
