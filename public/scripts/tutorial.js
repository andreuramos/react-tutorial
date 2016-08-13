
var Comment = React.createClass({
	render: function(){
		return(
			<div className="Comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				{this.props.children}
			</div>
		);
	}
});

var CommentList = React.createClass({
	render: function(){
		return (
			<div className="commentList">
				<Comment author="Kroman el *bárbaro*">Kromment</Comment>
				<Comment author="Andreu">Ratamahatta</Comment>
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
				<h1>Civitfun Hackathon: React comment board.</h1>
				<CommentList />
				<CommentForm /> 
			</div>
		);
	}
});



ReactDOM.render(
	<CommentBox />,
	document.getElementById('content')
);