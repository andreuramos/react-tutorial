var CommentList = React.createClass({
	render: function(){
		return (
			<div className="commentList">
				asdasd
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function(){
		return (
			<div className="commentForm">
				Comment Form
			</div>
		)
	}
})

var CommentBox = React.createClass({
	render: function(){
		return (
			<div className="CommentBox">
				Civitfun Hackathon: React comment board.
				<CommentList />
				<CommentForm /> 
			</div>
		);
	}
});

var Comment = React.createClass({
	render: function(){
		return(
			<div className="Comment">
				<h2 className="commentAuthor">
					{this.prop.author}
				</h2>
				{this.prop.children}
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox />,
	document.getElementById('content')
);