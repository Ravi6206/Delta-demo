const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Reviews = require('../models/review.js');
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// POST Reviews route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// Delete Review route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor,  wrapAsync(reviewController.destroyReview));

module.exports = router;