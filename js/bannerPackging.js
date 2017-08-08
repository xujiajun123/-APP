/**
 * 无缝轮播插件
 **/
;
(function($) {
	$.fn.HZYBanner = function(Option) {
		var Deflauts = {
			banner: "",
		};
		var Options = $.extend({}, Deflauts, Option);
		this.each(function() {
			$.fn.HZYBanner.Init(Options, $(this));
		});
	};
	$.fn.HZYBanner.Init = function(Options, Id) {
		this.banner = Options.banner;
		this.ThisTD = Id.attr("id");

		$.fn.HZYBanner.Dom(this.ThisTD);
		$.fn.HZYBanner.Css(this.ThisTD);
		$.fn.HZYBanner.Methord(this.ThisTD);
		$.fn.HZYBanner.Event(this.ThisTD);
	};
	$.fn.HZYBanner.Dom = function(id) {
		var ThisTD = $("#" + id);
		var contorls = $("<div class='control'></div>");
		var container = $("<div class='container'></div>");
		var controlDot = $("<div class='controlDot'><ul></ul></div>");
		$("#" + id).append(container);
		if (invokingBanner.controlSlides == true && invokingBanner.contorlsImgLeft == null && invokingBanner.controlsImgRight == null) {
			$("#" + id).append(contorls);
			$("#" + id).find(".control").append("<span></span><span></span>");
		} else if (invokingBanner.controlSlides == true && invokingBanner.contorlsImgLeft !== null && invokingBanner.controlsImgRight !== null) {
			$("#" + id).append(contorls);
			$("#" + id).find(".control").append("<span><img src='" + invokingBanner.contorlsImgLeft + "' alt=''></span><span><img src='" + invokingBanner.controlsImgRight + "' alt=''></span>");
		}
		for (var i = 0; i < 3; i++) {
			$("#" + id).find(".container").append("<div><img src='" + invokingBanner.data[i] + "' alt=''></div>");
		};
		if (invokingBanner.controlDot == true) {
			$("#" + id).append(controlDot);
			for (var j = 0; j < invokingBanner.data.length; j++) {
				$("#" + id).find(".controlDot ul").append("<li></li>");
			}
		}
	};
	$.fn.HZYBanner.Css = function(id) {
		var ThisTD = $("#" + id);

	};
	$.fn.HZYBanner.Methord = function(id) {
		var ThisID = $("#" + id);


		function mobileEvents(event) {
			$("#" + id).find(".container").bind("touchstart", touchStarts);
			$("#" + id).find(".container").bind("touchmove", touchMoves);
			$("#" + id).find(".container").bind("touchend", touchEnds);
			var sx, sy, mx, my, ex, ey
			function touchStarts(event) {
				event.preventDefault();
				var touch = event.originalEvent.changedTouches[0];
				sx = touch.clientX;
			}

			function touchMoves(event) {
				var touch = event.originalEvent.changedTouches[0];
				var bannerWidth = $("#" + id).width();
				event.preventDefault();
				event.stopPropagation();
				var mx = touch.clientX;
				var X = mx-sx 
				if (X>0) {
					$("#" + id).find(".container div:nth-child(2)").css({
						"left": bannerWidth+X,
					});
					$("#" + id).find(".container div:first-child").css({
						"left":X,
					});
				}else
				if (X<0) {
					$("#" + id).find(".container div:nth-child(2)").css({
						"left": X+bannerWidth,
					});
					$("#" + id).find(".container div:last-child").css({
						"left": X + bannerWidth*2,
					});
				} 
			};

			function touchEnds(event) {
				
				var touch = event.originalEvent.changedTouches[0];
				event.preventDefault();
				ex = touch.clientX;
				if (sx - ex > invokingBanner.backLength) {
					$("#" + id).find(".container div:nth-child(2)").animate({
						"left": "0%"
					}, invokingBanner.AnimateSpeed);
					$("#" + id).find(".container div:last-child").animate({
						"left": "33.33%"
					}, invokingBanner.AnimateSpeed);
					$("#" + id).find(".container div:first-child").remove();
					addLeft();
					controlDotBg();
				} else 
				if (ex - sx > invokingBanner.backLength) {
					$("#" + id).find(".container div:nth-child(2)").animate({
						"left": "66.66%"
					}, invokingBanner.AnimateSpeed);
					$("#" + id)

					.find(".container div:first-child").animate({
						"left": "33.33%"
					}, invokingBanner.AnimateSpeed);
					$("#" + id).find(".container div:last-child").remove();
					addRight();
					controlDotBg();
				}else{
					$("#" + id).find(".container div:first-child").animate({
						"left": "0"
					},invokingBanner.backSpeed);
					$("#" + id).find(".container div:nth-child(2)").animate({
						"left": "33.33%"
					},invokingBanner.backSpeed);
					$("#" + id).find(".container div:last-child").animate({
						"left": "66.66%"
					},invokingBanner.backSpeed);
					controlDotBg();
				}
			}
		}

		function controlDotBg() {
			for (var a = 0; a < invokingBanner.data.length; a++) {
				if (invokingBanner.data[a] == $("#" + id).find(" .container div:nth-child(2) img").attr("src")) {
					$("#" + id).find(".controlDot ul li").siblings().css({
						"opacity": "0.6"
					});
					$("#" + id).find(".controlDot ul li").eq(a).css({
						"opacity": "1"
					});
				}
			}
		};

		function controlDots() {
			$("#" + id).find(".controlDot ul li").each(function() {
				$(this).click(function() {
					$(this).css({
						"opacity": "1"
					});
					$(this).siblings().css({
						"opacity": "0.6"
					});
					var indexs = $(this).index();
					for (var s = 0; s < invokingBanner.data.length; s++) {
						if (invokingBanner.data[s] == $("#" + id).find(".container div:nth-child(2) img").attr("src")) {
							if (indexs > s && indexs != invokingBanner.data.length - 1) {
								$("#" + id).find(".container div:last-child img").attr("src", invokingBanner.data[indexs]);
								$("#" + id).find(".container div:nth-child(2)").animate({
									"left": "0%"
								}, invokingBanner.AnimateSpeed);
								$("#" + id).find(".container div:last-child").animate({
									"left": "33.33%"
								}, invokingBanner.AnimateSpeed, function() {
									$("#" + id).find(".container").append("<div><img src='" + invokingBanner.data[indexs + 1] + "' alt=''></div>");
									$("#" + id).find(".container div:first-child img").attr("src", invokingBanner.data[indexs - 1]);
								});
								$("#" + id).find(".container div:first-child").remove();
							} else
							if (indexs < s && indexs != 0) {
								$("#" + id).find(".container div:first-child img").attr("src", invokingBanner.data[indexs]);
								$("#" + id).find(".container div:last-child").remove();
								$("#" + id).find(".container div:nth-child(2)").animate({
									"left": "66.66%"
								}, invokingBanner.AnimateSpeed);
								$("#" + id).find(".container div:first-child").animate({
									"left": "33.33%"
								}, invokingBanner.AnimateSpeed, function() {
									$("#" + id).find(".container").prepend("<div><img src='" + invokingBanner.data[indexs - 1] + "' alt=''></div>");
									$("#" + id).find(".container div:last-child img").attr("src", invokingBanner.data[indexs + 1]);
								});
							} else
							if (indexs == invokingBanner.data.length - 1) {
								$("#" + id).find(".container div:last-child img").attr("src", invokingBanner.data[invokingBanner.data.length - 1]);
								$("#" + id).find(".container div:nth-child(2)").animate({
									"left": "0%"
								}, invokingBanner.AnimateSpeed, function() {
									$("#" + id).find(".container div:first-child").remove();
									$("#" + id).find(".container div:first-child img").attr("src", invokingBanner.data[indexs - 1]);
									$("#" + id).find(".container").append("<div><img src='" + invokingBanner.data[0] + " ' alt=''></div>");
								});
								$("#" + id).find(".container div:last-child").animate({
									"left": "33.33%"
								}, invokingBanner.AnimateSpeed);
							} else
							if (indexs == 0) {
								$("#" + id).find(".container div:first-child img").attr("src", invokingBanner.data[indexs]);
								$("#" + id).find(".container div:last-child").remove();
								$("#" + id).find(".container div:nth-child(2)").animate({
									"left": "66.66%"
								}, invokingBanner.AnimateSpeed);
								$("#" + id).find(".container div:first-child").animate({
									"left": "33.33%"
								}, invokingBanner.AnimateSpeed, function() {
									$("#" + id).find(".container").prepend("<div><img src='" + invokingBanner.data[invokingBanner.data.length - 1] + "' alt=''></div>");
									$("#" + id).find(".container div:last-child img").attr("src", invokingBanner.data[1]);
								});
							} else
							if (s == indexs) {
								return
							}
						}
					}
				});
			});
		};

		function slideRight() {
			$("#" + id).find(".container div:nth-child(2)").animate({
				"left": "66.66%"
			}, invokingBanner.AnimateSpeed);
			$("#" + id)

			.find(".container div:first-child").animate({
				"left": "33.33%"
			}, invokingBanner.AnimateSpeed);
			$("#" + id).find(".container div:last-child").remove();
			addRight();
		};

		function addLeft() {
			for (var k = 0; k < invokingBanner.data.length; k++) {
				if (invokingBanner.data[k] == $("#" + id).find(".container div:nth-child(2) img").attr("src")) {
					if (k < invokingBanner.data.length - 2) {
						$("#" + id).find(".container").append($("<div><img src='" + invokingBanner.data[k + 1] + "' alt='not find" +
							" picture'></div>"));
					} else if (k == invokingBanner.data.length - 2) {
						$("#" + id).find(".container").append($("<div><img src='" + invokingBanner.data[invokingBanner.data.length - 1] + "' alt='not find" +
							" picture'></div>"));
					} else if (k = invokingBanner.data.length-1) {
						$("#" + id).find(".container").append($("<div><img src='" + invokingBanner.data[0] + "' alt='not find picture'></div>"));
					}else if (k =0) {
						$("#" + id).find(".container").append($("<div><img src='" + invokingBanner.data[1] + "' alt='not find picture'></div>"));
					}
				}
			}
		}

		function addRight() {
			for (var j = 0; j < invokingBanner.data.length; j++) {
				if (invokingBanner.data[j] == $("#" + id).find(".container div:nth-child(2) img").attr("src")) {
					if (j > 1) {
						$("#" + id).find(".container").prepend($("<div><img src='" + invokingBanner.data[j - 2] + "' alt='not find picture'></div>"));
					} else if (j == 0) {
						$("#" + id).find(".container").prepend($("<div><img src='" + invokingBanner.data[invokingBanner.data.length - 1] + "' alt='not find picture'></div>"));
					} else if (j = invokingBanner.data.length) {
						$("#" + id).find(".container").prepend($("<div><img src='" + invokingBanner.data[invokingBanner.data.length - 2] + "' alt='not find picture'></div>"));
					}
				}
			}
		}

		function sliderLeft() {
			$("#" + id).find(".container div:nth-child(2)").animate({
				"left": "0%"
			}, invokingBanner.AnimateSpeed);
			$("#" + id).find(".container div:last-child").animate({
				"left": "33.33%"
			}, invokingBanner.AnimateSpeed);
			$("#" + id).find(".container div:first-child").remove();
			addLeft();
		};

		function slides() {

			$("#" + id).find(".control span:first-child").click(function() {
				sliderLeft();
				controlDotBg();
			});
			$("#" + id).find(".control span:last-child").click(function() {
				slideRight();
				controlDotBg();
			});
		};

		function setTime() {
			var t;
			t = setInterval(function() {
				sliderLeft();
				controlDotBg();
			}, invokingBanner.bannerSpeed);
			$("#" + id).find(".container").bind("touchstart",function(e){
				e.preventDefault();
				clearInterval(t);
			});
			$("#" + id).find(".container").bind("touchend",function(e){
				e.preventDefault();
				t = setInterval(function() {
						sliderLeft();
						controlDotBg();
					}, invokingBanner.bannerSpeed);
			});
			if (invokingBanner.setTimesHover == true) {
				$("#" + id).hover(function() {
					clearInterval(t);
				}, function() {
					t = setInterval(function() {
						sliderLeft();
						controlDotBg();
					}, invokingBanner.bannerSpeed);
				});
			}
		};

		if (invokingBanner.controlDot == true) {
			controlDots();
		}
		if (invokingBanner.setTimes == true) {
			setTime();
		}

		if (invokingBanner.controlSlides == true) {
			slides();
		}
		mobileEvents();
//		controlDotBg();
	};
	$.fn.HZYBanner.Event = function() {
		
	};
})(jQuery);


var arr=[];
for (var i=0;i<simulationData1.workHome.data[0].adverts.length;i++){
	arr.push(simulationData1.workHome.data[0].adverts[i].main_url);
}
var invokingBanner = {
//			data: ['img/bg0.jpg', 'img/bg1.jpg', 'img/bg2.jpg', 'img/bg3.jpg', 'img/bg4.jpg', 'img/bg5.jpg'], //图片路径
			data:arr,
			AnimateSpeed: 700, //动画速度
			bannerSpeed: 3000, //轮播速度
			controlDot: true, //点控制
			controlSlides: false, //左右图标控制
			setTimes: false, //定时器开关
			setTimesHover: true, //鼠标悬停控制
			backLength: 50,
			backSpeed: 500,
		};
	