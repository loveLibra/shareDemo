var Mlellipsis = require('mlellipsis'),
	Lazyload = require('lazyload'),
	$ = require('jquery'),
	React = require('react');
Mlellipsis.init();
/*components*/	
var TagImg = React.createClass({
	componentDidMount: function() {
		$(React.findDOMNode(this.refs.img)).lazyload();
	},
	render: function() {
		return (
			<div className="tag-img">
				<span className="tag-match">
					Fashion
				</span>
				<a href={this.props.url}>
					<img className="lazy" data-original={this.props.img} ref="img"></img>
				</a>
			</div>
		);
	}
});
var TagTitle = React.createClass({
	componentDidMount: function() {
		React.findDOMNode(this.refs.title).mlellipsis(2);
	},
	render: function() {
		return (
			<a href={this.props.url} className="tag-title-container">
                <h2 className="tag-title" title={this.props.title} ref="title">{this.props.title}</h2>
            </a>
		)
	}
});

var TagText = React.createClass({
	componentDidMount: function() {
		React.findDOMNode(this.refs.text).mlellipsis(2);
	},
	render: function() {
		return (
			<p className="tag-text" ref="text">{this.props.text}</p>
		);
	}
});

var Lvls = React.createClass({
	handleLikeClick: function(e) {
		var $cur = $(e.target);
		if ($cur.hasClass('like')) {
            $cur.next('span.like-count').text('');
        } else {
			$cur.next('span.like-count').text('100');
		}
        $cur.toggleClass('like');
	},
	render: function() {
		return (
			<div className="time-view-like-share clearfix">
                <i className="iconfont"></i>
                6月8日 15:30&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="iconfont"></i>
                618
                <div className="like-share-container">
                    <a href="javascript:;" className="iconfont like-btn" onTouchStart={this.handleLikeClick}></a>
                    <span className="like-count"></span>
                    <a href="http://guang.m.yohobuy.com/info/index?id=1199" className="iconfont share-btn"></a>
                </div>
            </div>
		)
	}
});

var TagArticle = React.createClass({
	render: function() {
		return (
			<div className="tag-article">
				<TagTitle title={this.props.title} url={this.props.url}/>
				<TagText text={this.props.text}/>
				<Lvls />
			</div>
		);
	}
});

var Tag = React.createClass({
	getInitialState: function() {
		return {
			data: []
		};
	},
	componentDidMount: function() { 
		var that = this;
		this.setState({
			data: data
		});
		//
		$(document).on('scroll', function() {
		    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
		        that.setState({
		        	data: that.state.data.concat(data)
		        });
		    }
		});
	},
	render: function() {
		var nodes = this.state.data.map(function(node) {
			var props = {
				url: node.url,
				img: node.img
			}, props2 = {
				title: node.title,
				text: node.text,
				url: node.url
			};
			return (
				<div className="tag-content">
					<TagImg {...props} />
					<TagArticle {...props2} />
				</div>
			);
		});
		
		return (
			<div className="tag-list">
				{nodes}
			</div>
		)
	}
});

var data = [
	{
		img: 'http://7xidk0.com1.z0.glb.clouddn.com/bg.png',
        title: 'Skin Art Series INN 2015春季新品测试是否会被截取啊真是的',
        text: '复古风劲吹，在各路复古跑鞋嚣张跋扈的当下，历史悠久的Onitsuka Tiger鬼冢' +
              '虎也动作频频，于北京时间3.14日在东京发布其与意大利设计师AndreaPompilio合作的' +
              '第2波--ONITSUKATIGER X ANDEREAPOMPILIO 2015秋冬新品便是其中之一。Yoho！Boy也' +
              '为获取第一手的东宝特地来到东京并抢到了头排的“赏秀位”',
        url: 'http://guang.m.yohobuy.com/info/index?id=1199',
        publishTime: '2月13日 12:34',
        pageView: 3445,
        like: true,
        share: false //不显示share标签
	}
];

React.render(
	<Tag />,
	document.getElementById('content')
);