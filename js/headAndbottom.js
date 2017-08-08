var headData = {
	client: {
		name: 'zhangsan',
	},
	pageData: {
		HYlogin: {
			change: 'none',
		},
		workHome: {
			head: {back: "",content: "首页",	right: {type: "text",eventType: "ablity",text: ""}},
			change: '',
		},
		HYPlantManage: {
			head: {back: "首页",	content: "昆明卷烟厂",	right: {type: "text",eventType: "ablity",text: ""}},
			change: "workHome",
		},
		message: {
			head: {back: "昆明卷烟厂",content: "消息",right: {type: "text",eventType: "ablity",text: ""}},
			change: "HYPlantManage",
		},
		historyInspect: {
			head: {	back: "消息",	content: "往年问题核查",right: {type: "text",eventType: "ablity",text: ""}
			},
			change: "message",
		},
		feedback: {
			head: {	back: "昆明卷烟厂",	content: "现场问题反馈",right: {type: "text",eventType: "addfeedback",text: "添加",}},
			change: "HYPlantManage",
		},
		taskTrace: {
			head: {	back: "昆明卷烟厂",	content: "任务跟踪",right: {type: "text",eventType: "ablity",text: ""}},
			change: "HYPlantManage",
		},
		trackingDetails: {
			head: {	back: "任务跟踪",content: "任务详情",	right: {type: "text",eventType: "ablity",text: ""}},
			change: "taskTrace",
		},
		taskCheck: {
			head: {	back: "返回",	content: "任务查看",right: {type: "text",	eventType: "ablity",text: ""}},
			change: "historyInspect",
		},
		myCheck: {
			head: {	back: "取消",	content: "",right: {type: "text",eventType: "ablity",text: "确定"	}},
			change: "minuteTickling",
		},
		leadSeeTracking: {
			head: {	back: "任务",content: "详情",right: {type: "text",eventType: "ablity",text: ""}},
			change: "taskTrace",
		},
		myself: {
			head: {	back: '',content: "我的",	right: {type: "text",eventType: "ablity",text: ""}},
			change: '',
		},
		myinfo: {
			head: {	back: "我的",content: "我的信息",right: {type: "text",eventType: "ablity",text: ""}},
			change: "myself",
		},
		infoUpdate: {
			head: {	back: "我的信息",content: "xx",right: {type: "text",	eventType: "ablity",text: "保存"	}},
			change: "myinfo"
		},
		leadSeeTickling: {
			head: {	back: "现场问题反馈",content: "问题详情",	right: {type: "text",eventType: "ablity",text: ""}},
			change: "feedback"
		},
		crewTrackingDetails: {
			head: {	back: "取消",content: "任务详情",right: {type: "text",eventType: "ablity",text: ""}},
			change: "trackingDetails"
		},
		remind: {
			head: {	back: "任务详情",	content: "提醒选项",right: {type: "text",eventType: "remind",text: "提醒"}},
			change: "trackingDetails"
		},
		notMyInfo: {
			head: {	back: "任务详情",content: "人员信息",right: {type: "text",eventType: "ablity",text: ""}},
			change: "leadSeeTracking"
		},
		photoClip: {
			head: {	back: "返回",content: "头像选择",right: {type: "text",eventType: "phontClipsure",text: "确定"}},
			change: "myinfo",
		},
		minuteTickling: {
			head: {	back: "任务",content: "详情",right: {type: "text",eventType: "ablity",text: ""},},
			change: "feedback",
		},
		feedbackEdit:{
			head:{back:'取消',content:'现场问题反馈',right:{	type:'text',eventType:'savedraft',	text:'存草稿'}},
			change:'feedback'
		},
		setAndHelp:{
			head:{back:'我的',content:'设置与帮助',right:{	type:'text',eventType:'ablity',	text:''}},
			change:'myself'
		},
		myPhone:{
			head:{back:'取消',content:'移动电话',right:{	type:'text',eventType:'phoneCheck',	text:'确定'}},
			change:'myinfo'
		},
		Emaile:{
			head:{back:'取消',content:'邮箱',right:{	type:'text',eventType:'EmileCheck',	text:'确定'}},
			change:'myinfo'
		},
		remindHandle:{
			head:{back:'取消',content:'提醒选项',right:{	type:'text',eventType:'ablity',	text:'提醒'}},
			change:'trackingDetails'
		},
		Language:{
			head:{back:'取消',content:'语言选择',right:{	type:'text',eventType:'languageChose',	text:'确认'}},
			change:'setAndHelp'
		},
		testCardNum:{
			head:{back:'取消',content:'牌号选择',right:{	type:'text',eventType:'testCarNum',	text:'确认'}},
			change:'feedbackEdit'
		},
		testPlant:{
			head:{back:'取消',content:'车间选择',right:{	type:'text',eventType:'testPlant',	text:'确认'}},
			change:'feedbackEdit'
		},
		workLine:{
			head:{back:'取消',content:'生产线选择',right:{	type:'text',eventType:'workLine',	text:'确认'}},
			change:'feedbackEdit'
		},
		testCraft:{
			head:{back:'取消',content:'工段选择',right:{	type:'text',eventType:'testCraft',	text:'确认'}},
			change:'feedbackEdit'
		},
		testProcess:{
			head:{back:'取消',content:'工序选择',right:{	type:'text',eventType:'testProcess',	text:'确认'}},
			change:'feedbackEdit'
		},
	}
};
function head(id,data) {
	 switch(id) {
		case 'workHome':
			headAddContent(data.pageData.workHome);
			headback(data.pageData.workHome.change);
			rightAblity(data.pageData.workHome);
			break;
		case 'HYPlantManage':
			headAddContent(data.pageData.HYPlantManage);
			headback(data.pageData.HYPlantManage.change);
			rightAblity(data.pageData.HYPlantManage);
			break;
		case 'message':
			headAddContent(data.pageData.message);
			headback(data.pageData.message.change);
			rightAblity(data.pageData.message);
			break;
		case 'historyInspect':
			headAddContent( data.pageData.historyInspect);
			headback(data.pageData.historyInspect.change);
			rightAblity(data.pageData.historyInspect);
			break;
		case 'feedback':
			headAddContent( data.pageData.feedback);
			headback( data.pageData.feedback.change);
			rightAblity(data.pageData.feedback,'feedbackEdit');
			break;
		case 'taskTrace':
			headAddContent( data.pageData.taskTrace);
			headback( data.pageData.taskTrace.change);
			rightAblity(data.pageData.taskTrace);
			break;
		case 'trackingDetails':
			headAddContent( data.pageData.trackingDetails);
			headback( data.pageData.trackingDetails.change);
			rightAblity(data.pageData.trackingDetails);
			break;
		case 'taskCheck':
			headAddContent(data.pageData.taskCheck);
			headback( data.pageData.taskCheck.change);
			rightAblity(data.pageData.taskCheck);
			break;
		case 'myCheck':
			headAddContent( data.pageData.myCheck);
			headback( data.pageData.myCheck.change);
			rightAblity(data.pageData.myCheck);
			break;
		case 'leadSeeTracking':
			headAddContent( data.pageData.leadSeeTickling);
			headback( data.pageData.leadSeeTickling.change);
			rightAblity(data.pageData.leadSeeTickling);
			break;
		case 'myself':
			headAddContent( data.pageData.myself);
			headback( data.pageData.myself.change);
			rightAblity(data.pageData.myself);
			break;
		case 'setAndHelp':
			headAddContent( data.pageData.setAndHelp);
			headback( data.pageData.setAndHelp.change);
			rightAblity(data.pageData.setAndHelp);
			break;
		case 'myinfo':
			headAddContent( data.pageData.myinfo);
			headback( data.pageData.myinfo.change);
			rightAblity(data.pageData.myinfo);
			break;
		case 'infoUpdate':
			headAddContent( data.pageData.infoUpdate);
			headback( data.pageData.infoUpdate.change);
			rightAblity(data.pageData.infoUpdate);
			break;
		case 'crewTrackingDetails':
			headAddContent( data.pageData.crewTrackingDetails);
			headback( data.pageData.crewTrackingDetails.change);
			rightAblity(data.pageData.crewTrackingDetails);
			break;
		case 'remind':
			headAddContent( data.pageData.remind);
			headback( data.pageData.remind.change);
			rightAblity(data.pageData.remind.right);
			break;
		case 'photoClip':
			headAddContent( data.pageData.photoClip);
			headback( data.pageData.photoClip.change);
			rightAblity(data.pageData.photoClip);
			break;
		case 'minuteTickling':
			headAddContent( data.pageData.minuteTickling);
			headback( data.pageData.minuteTickling.change);
			rightAblity(data.pageData.minuteTickling);
			break;
		case 'feedbackEdit':
			headAddContent(data.pageData.feedbackEdit);
			headback(data.pageData.feedbackEdit.change);
			rightAblity(data.pageData.feedbackEdit,'feedback');
			break;
		case 'myPhone':
			headAddContent(data.pageData.myPhone);
			headback(data.pageData.myPhone.change);
			rightAblity(data.pageData.myPhone,'myinfo');
			break;
		case 'Emaile':
			headAddContent(data.pageData.Emaile);
			headback(data.pageData.Emaile.change);
			rightAblity(data.pageData.Emaile,'myinfo');
			break;
		case 'remindHandle':
			headAddContent(data.pageData.remindHandle);
			headback(data.pageData.remindHandle.change);
			rightAblity(data.pageData.remindHandle);
			break;
		case 'Language':
			headAddContent(data.pageData.Language);
			headback(data.pageData.Language.change);
			rightAblity(data.pageData.Language,'setAndHelp');
			break;
		case 'testCardNum':
			headAddContent(data.pageData.testCardNum);
			headback(data.pageData.testCardNum.change);
			rightAblity(data.pageData.testCardNum,'feedbackEdit');
			break;
		case 'testPlant':
			headAddContent(data.pageData.testPlant);
			headback(data.pageData.testPlant.change);
			rightAblity(data.pageData.testPlant,'feedbackEdit');
			break;
		case 'workLine':
			headAddContent(data.pageData.workLine);
			headback(data.pageData.workLine.change);
			rightAblity(data.pageData.workLine,'feedbackEdit');
			break;	
		case 'testCraft':
			headAddContent(data.pageData.testCraft);
			headback(data.pageData.testCraft.change);
			rightAblity(data.pageData.testCraft,'feedbackEdit');
			break;
		case 'testProcess':
			headAddContent(data.pageData.testProcess);
			headback(data.pageData.testProcess.change);
			rightAblity(data.pageData.testProcess,'feedbackEdit');
			break;
	}
}
function bottomEvent(){
	$('.main').click(function(){
		$(this).find('div:first-child img').attr('src','images/nav/main-choose.png');
		$(this).find('div:last-child span').css({'color':'#376BB7'});
		$(this).siblings().find('div:last-child span').css({'color':'#333'});
		$('.work').find('div:first-child img').attr('src','images/nav/work.png');
		$.mobile.changePage('#myself',{
			'transform':'none',
		});
		head('myself',headData);	
	});
	$('.work').click(function(){
		$(this).find('div:first-child img').attr('src','images/nav/work-choose.png');
		$(this).find('div:last-child span').css({'color':'#376BB7'});
		$(this).siblings().find('div:last-child span').css({'color':'#333'});
		$('.main').find('div:first-child img').attr('src','images/nav/main.png');
		$.mobile.changePage('#workHome',{
			'transform':'none',
		});
		head('workHome',headData);
	})
}


bottomEvent();

function headAddContent(data) {
	if(data.head.back == ''){
		$('.header .back img').css({'display':'none'});
		$('.header .back span').css({'text-indent':'0.5rem'})
		$('.header .back span').text('')
	}else{
		$('.header .back span').text(data.head.back);
		$('.header .back img').css({'display':'block'});
		$('.header .back span').css({'text-indent':'0.5rem'})
	}
	$('.header .title span').text(data.head.content);
	$('.header .ability span').text(data.head.right.text);
}

function headback(page) {
	if(page != '') {
		$('.back').unbind();
		$('.back').on('click', function() {
			$.mobile.changePage('#' + page, {
				'transform': 'none'
			})
			head(page, headData);
		});
	} else {
		return;
	}
}
function rightAblity(data, page) {
	if(data.head.right.text != '') {
		$('.ability').unbind();
		if(data.head.right.eventType == 'addfeedback') {
			$('.ability').click(function() {
				$.mobile.changePage('#' + page, {
					'transform': 'none'
				});
				head(page, headData)
			})
		} else
		if(data.head.right.eventType == 'savedraft') {
			$('.ability').click(function() {
				$.mobile.changePage('#' + page, {
					'transform': 'none'
				});
				head(page, headData)
			})
		} else
		if(data.head.right.eventType == 'languageChose') {
			$('.ability').click(function() {
				$('#Language').find('.LanguageList ul li').each(function() {
					var Languagestate = $(this).find('img');
					if(!Languagestate.hasClass('DidPlayNone')) {
						$('#setAndHelp').find('.LanguageText').find('span').text($(this).find('span').text());
						alert('12');
						$.mobile.changePage('#setAndHelp', {
							'transform': 'none',
						});
						head(page, headData);
					}
				});
			})
		} else
		if(data.head.right.eventType == 'phoneCheck') {
			$('.ability').click(function() {
				var PhomeNumber = $('#myPhone').find('.myPhoneIn .myPhoneNumber input').val();
				if(/^1[3|4|5|7|8]\d{9}$/.test(PhomeNumber)) {
					$('#' + page).find('.myinfo .Belong .PhoneNumber span').text(PhomeNumber);
					$.mobile.changePage('#' + page, {
						'transform': 'none'
					});
					head(page, headData);
				} else {
					$('#myPhone').find('.PopupWarn').removeClass('DisplayNone');
					if(!/^\d+$/g.test(PhomeNumber)) {
						$('#myPhone').find('.myPhoneIn .myPhoneNumber input').val('');
					}
				}
			})
		} else
		if(data.head.right.eventType == 'EmileCheck') {
			$('.ability').click(function() {
				var EmaileDress = $('#Emaile').find('.EmaileText input').val();
				var Emailereg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				if(EmaileDress != "" && Emailereg.test(EmaileDress)) {
					$('#' + page).find('.EmailAddress span').text(EmaileDress);
					$.mobile.changePage('#' + page, {
						'transform': 'none',
					});
					head(page, headData);
				} else {
					$('#Emaile').find('.PopupWarn').removeClass('DisplayNone');
					if(/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(EmaileDress)) {
						$('#Emaile').find('.EmaileText input').val("");
					}
				}
			})
		} else
		if(data.head.right.eventType == 'testCarNum') {
			$('.ability').click(function() {
				$('#testCardNum').find('.PublicChoseList ul li').each(function() {
					if(!$(this).find('img').hasClass('DisplayNone')) {
						var testValue = $(this).find('span').text();
						$('#' + page).find('.testCardNum').find('span').text(testValue);
						$.mobile.changePage('#' + page, {
							'transform': 'none',
						});
						head(page, headData);
					}
				});
			})
		} else
		if(data.head.right.eventType == 'testPlant') {
			$('.ability').click(function() {
				$('#testPlant').find('.PublicChoseList ul li').each(function() {
					if(!$(this).find('img').hasClass('DisplayNone')) {
						var testValue = $(this).find('span').text();
						$('#' + page).find('.testPlant').find('span').text(testValue);
						$.mobile.changePage('#' + page, {
							'transform': 'none',
						});
						head(page, headData);
					}
				});
			})
		}else
		if(data.head.right.eventType == 'workLine') {
			$('.ability').click(function() {
				$('#workLine').find('.PublicChoseList ul li').each(function() {
					if(!$(this).find('img').hasClass('DisplayNone')) {
						var testValue = $(this).find('span').text();
						$('#' + page).find('.workLine').find('span').text(testValue);
						$.mobile.changePage('#' + page, {
							'transform': 'none',
						});
						head(page, headData);
					}
				});
			})
		}else
		if(data.head.right.eventType == 'testCraft') {
			$('.ability').click(function() {
				$('#testCraft').find('.PublicChoseList ul li').each(function() {
					if(!$(this).find('img').hasClass('DisplayNone')) {
						var testValue = $(this).find('span').text();
						$('#' + page).find('.testCraft').find('span').text(testValue);
						$.mobile.changePage('#' + page, {
							'transform': 'none',
						});
						head(page, headData);
					}
				});
			})
		}else
		if(data.head.right.eventType == 'testProcess') {
			$('.ability').click(function() {
				$('#testProcess').find('.PublicChoseList ul li').each(function() {
					if(!$(this).find('img').hasClass('DisplayNone')) {
						var testValue = $(this).find('span').text();
						$('#' + page).find('.testProcess').find('span').text(testValue);
						$.mobile.changePage('#' + page, {
							'transform': 'none',
						});
						head(page, headData);
					}
				});
			})
		}
	}
}
