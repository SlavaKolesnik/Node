const {
    getCommentsHandler,
    postCommentsHandler,
    getSingleCommentHandler,
    deleteSingleCommentHandler,
} = require('../controllers/comments')
const express = require('express')

const router = express.Router()

router.get('/', getCommentsHandler)
router.post('/', postCommentsHandler)
router.get('/:commentId/:userId', getSingleCommentHandler)
router.delete('/:commentId', deleteSingleCommentHandler)

module.exports = router
