const Post = require('../models/posts');

exports.addPost = (req, res, next) => {
  req.body.post = JSON.parse(req.body.post);
	const post = Post.create({
			post: req.body.post
		}).then(
			() => {
				res.status(201).json(post);
		}).catch(
			(error) => {
				res.status(400).json(error);
		}
	);
}


exports.getPosts = (req, res, next) => {
  const posts = Post.findAll().then(
    (posts) => {
      res.status(200).json(posts);
    }
		).catch(
    (error) => {
      res.status(400).json(error);
    }
  );
	console.log(posts.every(post => post instanceof Post)); // true
	console.log("All posts:", JSON.stringify(posts, null, 2));
};


exports.deletePost = (req, res, next) => {
  Post.destroy({_id: req.params.id}).then(
    () => {
      res.status(200).json();
    }
  	).catch(
    	(error) => {
      res.status(400).json(error);
    }
  );
};