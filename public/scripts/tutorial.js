var CommentBox = React.createClass({
	render: function(){
		return (
			<div className="CommentBox">
				Civitfun Hackathon: React comment board.
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox />
	document.getElementById('content')
);