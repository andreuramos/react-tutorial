
var Comment = React.createClass({
	rawMarkup: function(){
		var md= new Remarkable();
		var rawMarkup = md.render(this.props.children.toString());
		return { __html: rawMarkup };
	},
	render: function(){
		var md = new Remarkable();
		return(
			<div className="Comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
		);
	}
});

var CommentList = React.createClass({
	render: function(){
		return (
			<div className="commentList">
				<Comment author="Kroman">Kromment *bárbaro*</Comment>
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