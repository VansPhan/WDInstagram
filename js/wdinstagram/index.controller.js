(function() {
	angular
		.module("post")
		.controller("PostIndexController", [
			'$resource',
			PostIndexControllerFunction
		])

		function PostIndexControllerFunction($resource) {
			var vm = this;
			var Post = $resource('http://localhost:3000/entries.json');
			vm.posts = Post.query();
		}
}())