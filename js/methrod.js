 $(document).ready(function() {

	HYlogin('HYlogin', 'workHome', login); //登录事件接口
	findPassWord('HYlogin', ToNext); //密码找回事件接口

	HYWorkCreatesDom('workHome', simulationData1.workHome.data); //工作创建Dom
	//HYWorkChangeData('HYWorkHome', data);//工作-修改数据
	HYWorkEvent('workHome', 'HYPlantManage', simulationData1.workHome.data,HYworke); //工作-事件接口
	banners('banner');

	PublicCreateDom('HYPlantManage', simulationData1.plantManage.data); //工厂管理-创建 Dom
	HYPlantManageEvent('HYPlantManage', simulationData1.plantManage.data, 'message', HYPlantManage); // 工厂管理-事件接口
	//	HeadBack('HYPlantManage', 'workHome'); //工厂管理头部返回
	//HYPlantManageChangeData('HYPlantManage', data) //工厂管理-修改数据

	PublicCreateDom('message', simulationData1.message.data); //消息 创建Dom

	PublicCreateDom('feedback', simulationData1.feedback.data); //现场问题反馈
	historyInspectSearch('historyInspect', historyInspect);
	ListChangepage('feedback', 'minuteTickling');
	feedbackDraftReceive('feedback');

//	PublicClickPage('feedback', 'feedbackEdit', 'AddFeedBack'); //现场问题编辑
	feedbackToEdit('feedback','feeedbackEdit')
	feedbackEditAddAttachment('feedbackEdit');
	feedbackDeleteParameters('feedbackEdit');
	feedbackTitle('feedbackEdit');
	parameterSkip('feedbackEdit');
//	feedbackEditSaveDraft('feedbackEdit', 'feedback', saveDraft);
	feedbackEditSubmit('feedbackEdit', feedbackSubmit);

	PublicCreateDom('historyInspect', simulationData1.historyInspect.data); //往年问题核查
	ListChangepage('historyInspect', 'taskCheck'); //往年问题核查

	PublicCreateDom('taskCheck', simulationData1.taskCheck.data); //任务查看
	taskCheckCreateDom('taskCheck', simulationData1.taskCheck.data);
	//	HeadBack('taskCheck', 'historyInspect');
	taskCheckBtn('taskCheck', 'message');

	//	HeadBack('minuteTickling', 'feedback'); //
	minuteTicklingCreateDome('minuteTickling', simulationData1.minuteTickling.data);

	/*任务跟踪*/
	PublicCreateDom('taskTrace', simulationData1.taskTrace.data);
	//	HeadBack('taskTrace', 'HYPlantManage');
	ListChangepage('taskTrace', 'trackingDetails');

	//任务跟踪详情
	//	HeadBack('trackingDetails', 'taskTrace');
	trackingDetailsCreateDom('trackingDetails', simulationData1.trackingDetails.data);
	//	trackingDetailsOpenOff('trackingDetails');

	//测试信息选择
	PublicChoseListDom('testCardNum', simulationData1.brandChoice.data);
	PublicChoseListDom('testPlant', simulationData1.testPlant.data);
	PublicChoseListDom('workLine', simulationData1.workLine.data);
	PublicChoseListDom('testCraft', simulationData1.testCraft.data);
	PublicChoseListDom('testProcess', simulationData1.testProcess.data);
	testAffirm('testCardNum', 'feedbackEdit');
	testAffirm('testPlant', 'feedbackEdit');
	testAffirm('workLine', 'feedbackEdit');
	testAffirm('testCraft', 'feedbackEdit');
	testAffirm('testProcess', 'feedbackEdit');

	remindEvent('trackingDetails', 'remindHandle', remindBack);
	//添加提醒
	remindAddList('remindHandle');
	//	HeadBack('remindHandle', 'trackingDetails');
	remindChose('remindHandle');
	//	remindChange('remindHandle', 'trackingDetails')

	//提醒详情
	//	HeadBack('crewTrackingDetails', 'trackingDetails');
	crewTrackingDetailsDom('crewTrackingDetails', simulationData1.crewTrackingDetails.data);

	/* 我的*/
	myPhoneDelete('myPhone'); //手机号码
	myPhoneCheck('myPhone', 'myinfo');
	PublicClickPage('myPhone', 'myinfo', 'back');
	WarnCancel('myPhone');

	EmaileDelete('Emaile'); //邮箱

	EmaileCheck('Emaile', 'myinfo');

	myinfoAddData('myinfo', simulationData1.user);
	PublicClickPage('Language', 'setAndHelp', 'back');
	setAndHelpPassword('setAndHelp');

	LanguageChange('Language'); //语言选择
	LanguageAffirm('Language', 'LanguageText');

	validation('ChangePassword'); //密码修改

	myinfoCamera('myinfo');
	PublicClickPage('myinfo', 'myself', 'back');

	myinfoClip('myinfo', 'photoClip');
	//	photoClips('photoClip', 'myinfo');

	//页面跳转
	HeadBack('testCardNum', 'feedbackEdit');
	HeadBack('testPlant', 'feedbackEdit');
	HeadBack('workLine', 'feedbackEdit');
	HeadBack('testCraft', 'feedbackEdit');
	HeadBack('testProcess', 'feedbackEdit');

//	HYWorkEvent('myself');
	myinfoChange('myinfo');
	PublicClickPage('workHome', 'myself', 'main');
	PublicClickPage('myself', 'workHome', 'work');
	PublicClickPage('HYFactoryList', 'HYPlantManage', 'HYFactoryList');
	PublicClickPage('setAndHelp', 'Language', 'setAndHelpChooseLanguage');
	PublicClickPage('setAndHelp', 'myself', 'back');
	PublicClickPage('setAndHelp', 'ChangePassword', 'setAndHelpChanghePassword');

	function login(userMessage) {
		console.log("该用户的信息为=用户名：" + userMessage[0].username + "====密码：" + userMessage[1].userpassword);
	}

	function ToNext() {
		console.log('找回密码跳转方法');
	}

	function HYworke(obj) {
		console.log('==该元素唯一码' + obj.attr('value') + '====');
	}

	function HYPlantManage(obj) {
		console.log(obj.attr('value'));
	}

	function historyInspect() {

	}

	function remindBack() {

	}

	function crewTrackingDetailsBack() {

	}

	function saveDraft() {

	}

	function feedbackSubmit() {

	}
});

function banners(id) {
	$("#" + id).HZYBanner({
		banner: invokingBanner,
	})
}
//start login 登录
function HYlogin(id, page, callback) { // 登录 Fu - HZY
	$('#' + id).find('.HYlogin button').unbind();
	$('#' + id).find('.HYlogin').unbind();

	$('#' + id).find('.HYlogin .HYloginBox .HYloginBtn').bind('click', function(e) {
		e.stopPropagation();
		var usernames = $('#' + id).find('.HYlogin .HYloginBox .HYloginBoxUserName div input').val();
		var passwords = $('#' + id).find('.HYlogin .HYloginBox .HYloginBoxPassWord div input').val();
		var userMessage = [{
			username: usernames,
		}, {
			userpassword: passwords,
		}];
		var str = userMessage[0].username;
		console.log(str + '============' + userMessage[1].userpassword);
		if(userMessage[0].username.length != 0 && userMessage[1].userpassword.length != 0) {
			var reg = /^[\u4e00-\u9fa5a-zA-Z]{1}$/;
			var result = str.match(reg);

			if(reg.test(str)) {
				alert('帐户格式不对');
			} else {
				$.mobile.changePage('#' + page, {
					transform: 'none',
				});
				head(page, headData);
				callback && callback(userMessage);
			}
		} else {
			alert('帐户或密码不能为空');
		}
	});
}

function findPassWord(id, callback) { // 找回密码 Fu-HZY
	$('#' + id).find('.HYlogin .HYloginFindPassword').unbind();
	$('#' + id).find('.HYlogin .HYloginFindPassword').bind('click', function(e) {
		e.stopPropagation();
		callback && callback();

	});
}

//end login 登录

//start work 工作
function HYWorkCreatesDom(id, data) {
	var str = '<li><div class="HYFactoryList">';
	str += '<div class="HYFactoryListContent PUBLIC-CENTER"><img src="" alt="" /><div class="Layer"></div>';
	str += '</div></div></li>';
	var factoryL = data[0].factorys.length;
	var adL = data[0].adverts.length;
	for(var i = 0; i < factoryL; i++) {
		$('#' + id).find('.HYFactory ul').append($(str));
	}
	HYWorkAddData(id, data);
}

function HYWorkAddData(id, data) { //工作页面数据添加 Fu-HZY
	for(var k = 0; k < data[0].factorys.length; k++) {
		$('#' + id).find('.HYFactory ul li').eq(k).find('.HYFactoryList').attr('value', data[0].factorys[k].number);
		$('#' + id).find('.HYFactory ul li').eq(k).find('.HYFactoryList .HYFactoryListContent img').attr('src', data[0].factorys[k].main_url);
		$('#' + id).find('.HYFactory ul li').eq(k).find('.HYFactoryList .HYFactoryListContent').attr('data-content', data[0].factorys[k].unread);
		if(data[0].factorys[k].unread != 0 && data[0].factorys[k].unread != '' && data[0].factorys[k].unread != null) {
			$('#' + id).find('.HYFactory ul li').eq(k).find('.HYFactoryList .HYFactoryListContent').addClass('HYFactoryListUnread');
		} else {
			$('#' + id).find('.HYFactory ul li').eq(k).find('.HYFactoryList .HYFactoryListContent').removeClass('HYFactoryListUnread');
		}
	}
}

function HYWorkChangeData(id, data) { //工作数据更新 Fu-HZY
	var doml = $('#' + id).find('.HYFactory ul li').length;
	var datal = data[0].factorys.length + data[0].adverts.length;
	if(doml > datal) {
		for(var i = 0; i < doml - datal; i++) {
			$('#' + id).find('.HYFactory ul li').eq(i).remove();
		}
		HYWorkAddData(id, data);
	} else if(doml < datal) {
		for(var j = 0; j < datal - doml; j++) {
			$('#' + id).find('.HYFactory ul li').eq(0).clone(true);
		}
		HYWorkChangeData(id, data);
	}
	console.log('=====数据更新成功======');
}

function HYWorkEvent(id, page, data, callback) {//HYWorkEvent('workHome', 'HYPlantManage', simulationData1.workHome.data,HYworke);
	var x = data[0].value;
	switch(x) {
		case '0':
			$('#' + id).find('.HYFactory ul li .HYFactoryList[value=001]').find('.maskLayer').addClass('DisplayNone');
			$('#' + id).find('.HYFactory ul li .HYFactoryList[value=001]').click(function() {
				$(this).parent('li').siblings().find('HYFactoryListContent').unbind();
				var obj = $(this);
				console.log('====进入组员视角=====');
				$.mobile.changePage('#' + page, {
					transfome: 'none',
				});
				head(page, headData)
				callback && callback(obj);
			});
			break;
		case '1':
			$('#' + id).find('.HYFactory ul li .HYFactoryList[value=000]').find('.maskLayer').addClass('DisplayNone');
			$('#' + id).find('.HYFactory ul li .HYFactoryList[value=000]').click(function() {
				$(this).parent('li').siblings().unbind();
				var obj = $(this);
				console.log('====进入组长视角=====');
				$.mobile.changePage('#' + page, {
					transfome: 'none',
				});
				head(page, headData)
				callback && callback(obj);
			});
			break;
		case '2':
			$('#' + id).find('.HYFactory ul li .maskLayer').addClass('DisplayNone');
			$('#' + id).find('.HYFactory ul li .HYFactoryList').click(function() {
				var obj = $(this);
				console.log('====进入领导视角=====');
				$.mobile.changePage('#' + page, {
					transfome: 'none',
				});
				head(page, headData)
				callback && callback(obj);
			});
	}
}

//end work 工作

//start planetManage 工厂管理

function HYPlantManageChangeData(id, data) { // 修改数据 Fu-Hzy
	var doml = $('#' + id).find('.PublicList ul li').length;
	var datal = data[0].factorys.length + data[0].adverts.length;
	if(doml > datal) {
		for(var i = 0; i < doml - datal.length; i++) {
			$('#' + id).find('.PublicList ul li').eq(i).remove();
		}
		HYPlantManageAddData(id, data);
	} else if(doml < datal) {
		for(var j = 0; j < datal - doml; j++) {
			$('#' + id).find('.PublicList ul').append($('#' + id).find('ul li').eq(0).clone(true));
		}
		HYPlantManageAddData(id, data);
	} else {
		HYPlantManageAddData(id, data);
	}
}

function HYPlantManageEvent(id, data, page, callback) { //列表点击事件接口 FU - Hzy
	var x = data[0].value;
	switch(x) {
		case '0':
			$('#' + id).find('.PublicList ul li[value=000]').click(function() {
				var obj = $(this);
				$.mobile.changePage('#message', {
					transform: 'none',
				});
				head('message', headData)
				callback && callback(obj);
			});
			$('#' + id).find('.PublicList ul li[value=002]').click(function() {
				var obj = $(this);
				$.mobile.changePage('#feedback', {
					transform: 'none',
				});
				head('feedback', headData)
				callback && callback(obj);
			});
			$('#' + id).find('.PublicList ul li[value=001]').click(function() {
				var obj = $(this);
				$.mobile.changePage('#taskTrace', {
					transform: 'none',
				});
				head('taskTrace', headData)
				callback && callback(obj);
			});

			//			$('#' + id).find('.PublicList ul li[value=001]').unbind();
			break;
		case '1':
			$('#' + id).find('.PublicList ul li').click(function() {
				var obj = $(this);
				$.mobile.changePage('#' + page, {
					transform: 'none',
				});

				callback && callback(obj);
			});
			break;
		case '2':
			$('#' + id).find('.PublicList ul li').click(function() {
				var obj = $(this);
				$.mobile.changePage('#' + page, {
					transform: 'none',
				});

				callback && callback(obj);
			});
	}
}

//end planetManage 工厂管理

// strat myself 我的

function ChangPageMyself(id) {
	$('#' + id).find('.myselfList').eq(0).click(function(e) {
		$.mobile.changePage('#myinfo', {
			transform: 'none',
		});
		head('myinfo', headData)
	});

	$('#' + id).find('.myselfList').eq(1).click(function(e) {
		$.mobile.changePage('#setAndHelp', {
			transform: 'none'
		});
		head('setAndHelp', headData)
	});
}
// end myself 我的
// start myinfo 个人信息
function myinfoCamera(id) {
	$('#' + id).find('.HeadPortraits').click(function() {
		$('#' + id).find('.cameraDialogMask').removeClass('DisplayNone');
		$('#' + id).find('.cameraDialog').removeClass('DisplayNone');
	});
	$('#' + id).find('.cameraDialog .cameraExit').click(function() {
		$('#' + id).find('.cameraDialogMask').addClass('DisplayNone');
		$('#' + id).find('.cameraDialog').addClass('DisplayNone');
	});
	$('#' + id).find('.cameraDialogMask').click(function(e) {
		e.stopPropagation;
		$('#' + id).find('.cameraDialogMask').addClass('DisplayNone');
		$('#' + id).find('.cameraDialog').addClass('DisplayNone');
	});
}

function myinfoChange(id) {
	$('#' + id).find('.myinfo .Belong ul li').eq(1).click(function() {
		$.mobile.changePage('#myPhone', {
			transform: 'none'
		});
		head('myPhone', headData)
	});
	$('#' + id).find('.myinfo .Belong ul li').eq(3).click(function() {
		$.mobile.changePage('#Emaile', {
			transform: 'none'
		});
		head('Emaile', headData);
	});
}

function myinfoAddData(id, data) {
	$('#' + id).find('.HeadPortraits img').eq(0).text(data[1].data[0].userImg);
	$('#' + id).find('.UserName span').text(data[1].data[0].name);
	$('#' + id).find('.sex span').text(data[1].data[0].sex);
	$('#' + id).find('.branch>span').text(data[1].data[0].role);
	$('#' + id).find('.PhoneNumber span').text(data[1].data[0].phone);
	$('#' + id).find('.Seniority span').text(data[1].data[0].seniority);
	$('#' + id).find('.EmailAddress span').text(data[1].data[0].email);
}

function myinfoClip(id, page) {
	var $img = $("#" + page).find('.photoContentPic');
	$("#" + id).find('.cameraDialog div:first input').change(function() {
		var $file = $(this);
		var fileObj = $file[0];
		var windowURL = window.URL || window.webkitURL;
		var dataURL;
		if(fileObj && fileObj.files && fileObj.files[0]) {
			dataURL = windowURL.createObjectURL(fileObj.files[0]);
			$img.attr('src', dataURL);
			$.mobile.changePage('#' + page, {
				'transform': 'none',
			});
			photoClips(page, id, dataURL);
			head(page, headData);
		} else {
			dataURL = $file.val();
			var imgObj = $("#" + page).find('.photoContentPic')[0];
			imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
			imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
			$img.attr('src', dataURL);
			$.mobile.changePage('#' + page, {
				'transform': 'none',
			});
			photoClips(page, id, dataURL);
			head(page, headData);
		}
		$('#' + id).find('.cameraDialogMask').addClass('DisplayNone');
		$('#' + id).find('.cameraDialog').addClass('DisplayNone');
		return dataURL;
	});
}
//end myinfo 个人信息

//头像裁剪
function photoClips(id, page, url) {
	var $image = $('#' + id).find('.photoContentPic');
	var $result = $('#' + page).find(".HeadPortraits");
	//	setTimeout(function() {
	$image.one('load', function() {
		setTimeout(function() {
			$image.cropper({
				guides: false, //网格开关	
				background: false, //缩放开关
				minCanvasWidth:$(window).width(),
				crop: function(data) {
					
				},
				aspectRatio: 1 / 1
			});
		$image.cropper('replace', url);
		}, 300)
		if($('#' + id)) {
			$('.ability').click(function() {
				var croppedCanvas;
				croppedCanvas = $image.cropper('getCroppedCanvas');
				CropendCanvas = croppedCanvas.toDataURL();
				$result.find('img:first').attr('src', CropendCanvas);
				$.mobile.changePage('#' + page, {
					'transform': 'none',
				});
				head(page, headData);
			})
		}
	});
}

//头像裁剪

// start setAndHelp 设置与帮助

function setAndHelpPassword(id) {
	var f = true;
	$('#' + id).find('.setAndHelpList ul li .ONOFF').click(function() {
		if(f == true) {
			$(this).find('.ONOFFcontiner div').animate({
				'left': '-50%'
			}, 300, function() {
				$(this).find('span').eq(0).css({
					'background-color': '#FFF',
				});
				$(this).find('span').eq(1).css({
					'border-color': '#999',
				});
			});
			f = false;
		} else if(f == false) {
			$(this).find('span').eq(0).css({
				'background-color': "green",
			});
			$(this).find('.ONOFFcontiner div').animate({
				'left': '0',
			}, 300, function() {
				$(this).find('span').eq(1).css({
					'border-color': "green",
				});
			});
			f = true;
		}
	});
}
//end setAndHelp 设置与帮助

//start myPhone 手机号码
function myPhoneDelete(id) {
	$('#' + id).find('.myPhoneIn .myPhoneNumber .myPhoneDelete').click(function() {
		$('#' + id).find('.myPhoneIn .myPhoneNumber input').val("");
	});
}

function myPhoneCheck(id, page) {
	$('#' + id).find('.header .ability').click(function() {
		var PhomeNumber = $('#' + id).find('.myPhoneIn .myPhoneNumber input').val();
		if(/^1[3|4|5|7|8]\d{9}$/.test(PhomeNumber)) {
			$('#' + page).find('.myinfo .Belong .PhoneNumber span').text(PhomeNumber);
			$.mobile.changePage('#' + page, {
				'transform': 'none'
			});
			head(page, headData);
		} else {
			$('#' + id).find('.PopupWarn').removeClass('DisplayNone');
			if(!/^\d+$/g.test(PhomeNumber)) {
				$('#' + id).find('.myPhoneIn .myPhoneNumber input').val('');
			}
		}
	});
}

function WarnCancel(id) {
	$('.PopupWarn .PopupWarnBtn').click(function() {
		$('.PopupWarn').addClass('DisplayNone');
	});
}

//end myPhone 手机号码

//start Emaile

function EmaileCheck(id, page) {
	$('#' + id).find('.ability').click(function() {
		var EmaileDress = $('#' + id).find('.EmaileText input').val();
		var Emailereg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(EmaileDress != "" && Emailereg.test(EmaileDress)) {
			$('#' + page).find('.EmailAddress span').text(EmaileDress);
			$.mobile.changePage('#' + page, {
				'transform': 'none',
			});
			head(page, headData);
		} else {
			$('#' + id).find('.PopupWarn').removeClass('DisplayNone');
			if(/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(EmaileDress)) {
				$('#' + id).find('.EmaileText input').val("");
			}
		}
	});
}

function EmaileDelete(id) {
	$('#' + id).find('.EmaileIn .EmaileEdit .EmaileDelete').click(function() {
		$('#' + id).find('.EmaileEdit input').val("");
	});
}
//end Emaile

// start  Language 语言选择
function LanguageChange(id) {
	$('#' + id).find('.LanguageList ul li').each(function() {
		$(this).bind('click', function() {
			$(this).find('div img').removeClass('DisplayNone');
			$(this).siblings().find('div img').addClass('DisplayNone');
		});
	});
}

function LanguageAffirm(id, className) {
	if($('#' + id)) {
		$('.ability').click(function() {
			console.log("XXX")
			$('#' + id).find('.LanguageList ul li').each(function() {
				var Languagestate = $(this).find('img');
				if(!Languagestate.hasClass('DidPlayNone')) {
					$('#setAndHelp').find('.' + className).find('span').text($(this).find('span').text());
					$.mobile.changePage('#setAndHelp', {
						'transform': 'none',
					});
					head(page, headData);
				}
			});
		});
	}
}

//end Language  语言选择

//start ChangePassword  修改密码
function validation(id) {
	var firstPassword, secendPassword;
	$('#' + id).find('.ChangePassword .NewPassworOne input').blur(function() {
		secendPassword = $('#' + id).find('.NewPasswordTwo input').val();
		firstPassword = $(this).val();
		console.log(firstPassword);
		console.log(secendPassword);
		if(firstPassword != secendPassword) {
			console.log('输入密码不一致');
		}
	});
	$('#' + id).find('.ChangePassword .NewPassworTwo input').blur(function() {
		firstPassword = $('#' + id).find('.NewPasswordOne input').val();
		secendPassword = $(this).val();
		console.log(firstPassword);
		console.log(secendPassword);
		if(secendPassword != firstPassword) {
			console.log('两次输入密码不一致');
		}
	});
}

//end ChangePassword 修改密码

//start historyInspect 往年问题核查
function historyInspectSearch(id, callback) {
	$('#' + id).find('.feedbackSerach input').focus(function() {
		$('#' + id).find('.historyInspectList').addClass('DisplayNone').removeClass('DisplayBlock');
		$('#' + id).find('.historyInspectFocus').removeClass('DisplayNone');
		callback && callback();
	});

	$('#' + id).find('.feedbackSerach input').blur(function() {
		var d = $('#' + id).find('.historyInspectFocus');
		if(d.html() == "") {
			$('#' + id).find('.historyInspectList').addClass('DisplayBlock').removeClass('DisplayNone');
			$('#' + id).find('.historyInspectFocus').addClass('DisplayNone');
			callback && callback();
		}
	});
}

// end historyInspect 往年问题核查

// start taskCheck 任务查看

function taskCheckCreateDom(id, data) {
	var str = '<li value=""><div class="taskCheckContentListIcon">';
	str += '<img class="PUBLIC-CENTER-SPAN" src="" alt="" /></div>';
	str += '<div class="taskCheckContentListTitle">';
	str += '<span class="PUBLIC-CENTER-V-SPAN"></span></div>';
	str += '<div class="taskCheckContentListText">';
	str += '<span class="PUBLIC-CENTER-V-SPAN"></span></div></li>';
	var str1 = '<li><div class="taskCheckContentListIcon">';
	str1 += '<img class="PUBLIC-CENTER-SPAN" src="" alt="" /></div>';
	str1 += '<div class="taskCheckContentListTitle">';
	str1 += '<span class="PUBLIC-CENTER-V-SPAN"></span></div>';
	str1 += '<div class="taskCheckContentListText">';
	str1 += '<textarea data-role="none"></textarea></div></li>';
	$('#' + id).find('.taskCheckContentList').append($("<ul></ul>"));
	for(var i = 0; i < data[0].data.text.length - 1; i++) {
		$('#' + id).find('.taskCheckContentList ul').append($(str));
	}
	$('#' + id).find('.taskCheckContentList ul').append($(str1));
	taskCheckAddData(id, data);
}

function taskCheckAddData(id, data) {
	//	var data[0].data.text.length
	for(var j = 0; j < data[0].data.text.length - 1; j++) {
		$('#' + id).find('.taskCheckContentList ul li').eq(j).find('.taskCheckContentListIcon img').attr('src', data[0].data.text[j].main_url);
		$('#' + id).find('.taskCheckContentList ul li').eq(j).find('.taskCheckContentListTitle span').text(data[0].data.text[j].content);
		$('#' + id).find('.taskCheckContentList ul li').eq(j).find('.taskCheckContentListText span').text(data[0].data.text[j].title);
		$('#' + id).find('.taskCheckContentList ul li').eq(j).attr('value', data[0].data.text[j].number);
	}
	$('#' + id).find('.taskCheckContentList ul li').eq(data[0].data.text.length - 1).find('.taskCheckContentListIcon img').attr('src', data[0].data.text[data[0].data.text.length - 1].main_url);
	$('#' + id).find('.taskCheckContentList ul li').eq(data[0].data.text.length - 1).find('.taskCheckContentListTitle span').text(data[0].data.text[data[0].data.text.length - 1].content);
	$('#' + id).find('.taskCheckContentList ul li').eq(data[0].data.text.length - 1).find('.taskCheckContentListText textarea').text(data[0].data.text[data[0].data.text.length - 1].title);
}

function taskCheckBtn(id, page) {
	$('#' + page).find('.PublicList ul li').attr('data-state', 'true');
	$('#' + page).find('.PublicList ul li').each(function() {
		var _This = $(this);
		if(_This.attr('data-state') == 'true') {
			_This.click(function() {
				$('#' + id).find('.taskCheckSuer').css({
					'background-color': 'red',
				})
				$('#' + id).find('.taskCheckSuer span').text('确认')
				$.mobile.changePage('#' + id, {
					'transform': 'none',
				})
				head(id, headData);
			})
			$('#' + id).find('.taskCheckSuer').click(function() {
				$(this).find('span').text('已确认');
				$(this).css({
					'background-color': '#A6A6A6',
				});
				_This.attr('data-state', 'false');
			});
		} else if(This.attr('data-state') == 'false') {
			_This.click(function() {
				$.mobile.changePage('#' + id, {
					'transform': 'none',
				})
				head(id, headData);
			})
			$('#' + id).find('.taskCheckSuer').css({
				'background-color': '#A6A6A6',
			});
			$('#' + id).find('.taskCheckSuer span').text('已确认');
			$('#' + id).find('.taskCheckSuer').unbind();
		}
	})

}

//start taskCheck 任务查看

//start minuteTickling 现场成问题反馈详情
function minuteTicklingCreateDome(id, data) {
	var str = '<li class="CLEAR-BOTH" value=""><div class="minuteTicklingListTitle"><span></span></div>';
	str += '<div class="minuteTicklingListText"><span></span></div>';
	str += '</li>';
	//<div class="minuteTicklingListRight"><img class="PUBLIC-CENTER-SPAN" src="images/right.png" alt="" /></div>
	$('#' + id).find('.minuteTicklingList').append($('<ul></ul>'));
	for(var i = 0; i < data[0].data.text.length; i++) {
		$('#' + id).find('.minuteTicklingList ul').append($(str));
	}
	minuteTicklingAddData(id, data);
}

function minuteTicklingAddData(id, data) {
	for(var j = 0; j < data[0].data.text.length; j++) {
		$('#' + id).find('.minuteTicklingList ul li').eq(j).attr('value', data[0].data.text[j].number);
		$('#' + id).find('.minuteTicklingList ul li').eq(j).find('.minuteTicklingListTitle span').text(data[0].data.text[j].main);
		$('#' + id).find('.minuteTicklingList ul li').eq(j).find('.minuteTicklingListText span').text(data[0].data.text[j].content);
	}
}
//end minuteTickling 现场成问题反馈详情

//现场问题反馈编辑
function feedbackEditAddAttachment(id) {
	$('#' + id).find('.addPot').click(function() {
		var str = '<div class="feedbackEditAttachment"><ul><li >';
		str += '<div><span class="PUBLIC-CENTER-V-SPAN">参数点</span></div>';
		str += '<div><span class="PUBLIC-CENTER-V-SPAN"></span></div>';
		str += '<div><img class="PUBLIC-CENTER-SPAN" src="images/remove_para.PNG" alt="" /></div></li>';
		str += '<li><div><span class="PUBLIC-CENTER-V-SPAN">图片</span></div>';
		str += '<div><span class="PUBLIC-CENTER-V-SPAN"></span></div>';
		str += '<div><img class="PUBLIC-CENTER-SPAN" src="images/Feedback/picLinkage.png" alt="" /></div></li>';
		str += '<li><div><span class="PUBLIC-CENTER-V-SPAN">参数描述</span></div>';
		str += '<div><textarea data-role="none" name="" rows="" cols=""></textarea></div></li></ul></div>';
		if(!$('#' + id).find('.feedbackEditAttachment:last').length) {
			$('#' + id).find('.feedbackEditBasic').after($(str));
			feedbackDeleteParameters(id);
		} else {
			$('#' + id).find('.feedbackEditAttachment:last').after($(str));
			feedbackDeleteParameters(id);
		}
	});
}

function feedbackDeleteParameters(id) {
	$('#' + id).find('.feedbackEditAttachment').each(function() {
		$(this).find('ul li').eq(0).find('div:last-child').click(function() {
			$(this).parent().parent().parent().remove();
		});
	});
}

function feedbackDraftReceive(id) {
	$('#' + id).find('.draftReceive .draft').click(function() {
		$('#' + id).find('.feedbackContent').addClass('DisplayNone');
		$('#' + id).find('.feedbackDraftList').removeClass('DisplayNone');
		$(this).css({
			'background-color': '#FFF',
			'color': '#2C6BB9'
		});
		$(this).siblings().css({
			'background-color': '#2C6BB9',
			'color': '#FFF'
		});
	});
	$('#' + id).find('.draftReceive .receive').click(function() {
		$('#' + id).find('.feedbackContent').removeClass('DisplayNone');
		$('#' + id).find('.feedbackDraftList').addClass('DisplayNone');
		$(this).css({
			'background-color': '#FFF',
			'color': '#2C6BB9'
		});
		$(this).siblings().css({
			'background-color': '#2C6BB9',
			'color': '#FFF'
		});
	});
}

function feedbackToEdit(id,page){
//	
//	if($('#'+id)	){
//		$('.ability').unbind();
//		$('.ability').click(function(){
//			$.mobile.changePage('#'+page,{
//				'transform':'none'
//			})
//		})
//	}
}

function feedbackEditSubmit(id, callback) {
	var _This = $('#' + id).find('.feedbackEditBasic ul li');

	var feedbackTitle = _This.eq(0).find('div').eq(1).find('span').text();
	var feedbackUser = _This.eq(1).find('div').eq(1).find('span').text();
	var feedbackCardNum = _This.eq(2).find('div').eq(1).find('span').text();
	var feedbackPlant = _This.eq(3).find('div').eq(1).find('span').text();
	var feedbackProductionLine = _This.eq(4).find('div').eq(1).find('span').text();
	var feedbackTestWorkPart = _This.eq(5).find('div').eq(1).find('span').text();
	var feedbackWorkProcess = _This.eq(5).find('div').eq(1).find('span').text();

	var feedback = [{
		feedbacktitle: feedbackTitle,
		feedbackuser: feedbackUser,
		feedbackcardNum: feedbackCardNum,
		feedbackplant: feedbackPlant,
		feedbackproductionLine: feedbackProductionLine,
		feedbacktestWorkPart: feedbackTestWorkPart,
		feedbackworkProcess: feedbackWorkProcess,
	}];
	$('#' + id).find('.feedbackEditAttachment').each(function() {
		$(this).find('ul li').eq(1).find('div span').text();

	});

	$('#' + id).find('.putIn').click(function(e) {
		e.stopPropagation();
		console.log(feedback);
	});
}

//function feedbackEditSaveDraft(id, page, callback) {
//	if($('#'+id)){
//		$('.ability').click(function() {
//			$.mobile.changePage('#' + page, {
//				'transform': 'none'
//			});
//			head(page, headData);
//		});
//		callback && callback();
//	}
//}

function feedbackTitle(id) {
	$('#' + id).find('.feedbackEditBasic ul li').eq(0).click(function() {
		$('#' + id).find('.PopupImport').removeClass('DisplayNone');
		$('#' + id).find('.PopupImport').find('.PopupImportText textarea').val("");
	});
	$('#' + id).find('.PopupBtn div:first').click(function() {
		$('#' + id).find('.PopupImport').addClass('DisplayNone');
	});

	$('#' + id).find('.PopupBtn div:last-child').click(function() {
		var values = $('#' + id).find('.PopupImportText textarea').val();
		console.log(values);
		if(values != "") {
			$('#' + id).find('.feedbackEditBasic ul li').eq(0).find('div').eq(1).find('span').text(values);
			$('#remindHandle').find('.remindHandleList ul li:last-child').find('.remindHandleText span').text(values);
			$('#remindHandle').find('.remindHandleList ul li:last-child').find('.remindHandlePic img').removeClass('DisplayNone');
			//$('#remindHandle').find('.remindHandleList ul li:last-child').siblings().find('.remindHandlePic img').addClass('DisplayNone');
			alert(id);
			$('#remindHandle').find('.remindHandleList ul li:last-child').siblings().find('.remindHandlePic img').addClass('DisplayNone');
			$('#' + id).find('.PopupImport').addClass('DisplayNone');
		} else {
			alert('请输入标题');
		}
	});
}

function parameterSkip(id) {
	$('#' + id).find('.feedbackEditBasic ul li').each(function() {
		var num = $(this).index();

		switch(num) {
			case 2:
				$(this).click(function() {
					$.mobile.changePage('#testCardNum', {
						'transform': 'none',
					});
					head('testCardNum', headData);
				});
				break;
			case 3:
				$(this).click(function() {
					$.mobile.changePage('#testPlant', {
						'transform': 'none',
					});
					head('testPlant', headData);
				});

				break;
			case 4:
				$(this).click(function() {
					$.mobile.changePage('#workLine', {
						'transform': 'none',
					});
					head('workLine', headData);
				});
				break;
			case 5:
				$(this).click(function() {
					$.mobile.changePage('#testCraft', {
						'transform': 'none',
					});
					head('testCraft', headData);
				});
				break;
			case 6:
				$(this).click(function() {
					$.mobile.changePage('#testProcess', {
						'transform': 'none',
					});
					head('testProcess', headData);
				});
				break;
		}
	});
}

//现场问题反馈编辑

// 任务跟踪-任务详情
function trackingDetailsCreateDom(id, data) { //创建Dom
	var str1 = '<div class="trackListUserIcon"><img class="PUBLIC-CENTER-SPAN" src="images/tobaccoFactory/message.png" alt="" /></div>';
	str1 += '<div class="trackListUSerText">';
	str1 += '<div class="trackListUSerMaxText"><span class="PUBLIC-BOTTOM"></span></div>';
	str1 += '<div  class="trackListUSerMinText"><span class="PUBLIC-CENTER-V-SPAN"></span></div></div>';
	str1 += '<div class="trackListUserState"><div><span class="PUBLIC-BOTTOM"></span></div>';
	str1 += '<div><span class="PUBLIC-CENTER-V-SPAN"></span></div></div>';
	var str2 = '<li><div class="trackListPeson CLEAR-BOTH">';
	str2 += '<div class="trackListPesonUser"><img src="images/tobaccoFactory/feedback.png" alt="" /> </div>';
	str2 += '<div class="trackListPesonText"><div class="trackListPesonMaxText"><span></span></div>';
	str2 += '<div class="trackListPesonMinText"><span></span></div></div>';
	str2 += '<div class="trackListPesonRight"><div><span class="downBackground"></span><span></span></div>';
	str2 += '<div></div></div></div>';
	str2 += '<div class="trackListdyties CLEAR-BOTH">';
	str2 += '<div class="trackListdytiesState"><div class="CLEAR-BOTH"><img src="images/taskRemind/amount.png" alt="" /> <span>总数</span></div>';
	str2 += '<div> <span>5</span></div></div>';
	str2 += '<div class="trackListdytiesState"><div class="CLEAR-BOTH"><img src="images/taskRemind/untreated.png" alt="" /> <span>未处理</span></div>';
	str2 += '<div> <span>5</span></div></div>';
	str2 += '<div class="trackListdytiesState"><div class="CLEAR-BOTH"><img src="images/taskRemind/in-process.png" alt="" /> <span>处理中</span></div>';
	str2 += '<div> <span>5</span></div></div>';
	str2 += '<div class="trackListdytiesState"><div class="CLEAR-BOTH"><img src="images/taskRemind/Completed.png" alt="" /> <span>已完成</span></div>';
	str2 += '<div> <span>5</span></div></div></div>';
	str2 += '<div class="trackListremind DisplayNone"><ul></ul></div></li>';
	var str3 = '<li data-state="true" class="CLEAR-BOTH"><div class="trackListremindPot"><span></span></div>';
	str3 += '<div class="trackListremindText"><div><span></span></div>';
	str3 += '<div><span></span></div></div>';
	str3 += '<div class="trackListremindBtn"><span>提醒</span></div></li>';

	$('#' + id).find('.trackList').append($('<ul></ul>'));
	$('#' + id).find('.trackListUSer').append($(str1));
	for(var j = 0; j < data[0].list.text.length; j++) {
		$('#' + id).find('.trackList>ul').append($(str2));
	}

	for(var j = 0; j < data[0].list.text.length; j++) {
		for(var k = 0; k < data[0].list.text[j].taskList.length; k++) {
			$('#' + id).find('.trackList>ul>li').eq(j).find('.trackListremind ul').append($(str3));
		}
	}
	trackingDetailsAddData(id, data);
	trackingDetailsOpenOff(id);
}

function trackingDetailsAddData(id, data) { //添加数据
	for(var x = 0; x < data[0].listUser.text.length; x++) {
		$('#' + id).find('.trackListUSer').eq(x).find('.trackListUserIcon img').attr('src', data[0].listUser.text[x].main_url);
		$('#' + id).find('.trackListUSer').eq(x).find('.trackListUSerMaxText span').text(data[0].listUser.text[x].max_text);
		$('#' + id).find('.trackListUSer').eq(x).find('.trackListUSerMinText span').text(data[0].listUser.text[x].left_min_text);
		$('#' + id).find('.trackListUSer').eq(x).find('.trackListUserState div:first span').text(data[0].listUser.text[x].time);
		$('#' + id).find('.trackListUSer').eq(x).find('.trackListUserState div:last-child span').text(data[0].listUser.text[x].state.text).attr('value', data[0].listUser.text[x].state.number);
		$('#' + id).find('.trackListUSer').eq(x).find('.trackListUserState div:last-child span').css({
			'color': data[0].listUser.text[x].state.color
		});
		$('#' + id).find('.trackListUSer').attr('value', data[0].listUser.text[0].number);
	}
	$('#' + id).find('.trackListTitle span').text(data[0].list.title.text);
	for(var y = 0; y < data[0].list.text.length; y++) {
		$('#' + id).find('.trackList>ul>li').eq(y).find('.trackListPesonUser img').attr('src', data[0].list.text[y].main_url);
		$('#' + id).find('.trackList>ul>li').eq(y).find('.trackListPesonMaxText span').text(data[0].list.text[y].max_text);
		$('#' + id).find('.trackList>ul>li').eq(y).find('.trackListPesonMinText span').text(data[0].list.text[y].time);
		$('#' + id).find('.trackList>ul>li').eq(y).find('.trackListPesonRight div span:last').text(data[0].list.text[y].state.text);
		$('#' + id).find('.trackList>ul>li').eq(y).find('.trackListPesonRight div span:last').css({
			'color': data[0].list.text[y].state.color
		});
		$('#' + id).find('.trackList>ul>li').eq(y).find('.trackListdytiesState').eq(0).find('div:last-child span').text(data[0].list.text[y].task.total);
		$('#' + id).find('.trackList>ul>li').eq(y).find('.trackListdytiesState').eq(1).find('div:last-child span').text(data[0].list.text[y].task.not);
		$('#' + id).find('.trackList>ul>li').eq(y).find('.trackListdytiesState').eq(2).find('div:last-child span').text(data[0].list.text[y].task.hand);
		$('#' + id).find('.trackList>ul>li').eq(y).find('.trackListdytiesState').eq(3).find('div:last-child span').text(data[0].list.text[y].task.stocks);
		for(var z = 0; z < data[0].list.text[y].taskList.length; z++) {
			$('#' + id).find('.trackList>ul>li').eq(y).find('.trackListremind ul li').eq(z).find('.trackListremindText div:first span').text(data[0].list.text[y].taskList[z].max_text);
			$('#' + id).find('.trackList>ul>li').eq(y).find('.trackListremind ul li').eq(z).find('.trackListremindText div:last-child span').text(data[0].list.text[y].taskList[z].taskState.text);
			$('#' + id).find('.trackList>ul>li').eq(y).find('.trackListremind ul li').eq(z).find('.trackListremindText div:last-child span').css({
				"color": data[0].list.text[y].taskList[z].taskState.color
			});
			if(data[0].list.text[y].taskList[z].taskState.text == "已完成") {
				$('#' + id).find('.trackList>ul>li').eq(y).find('.trackListremind ul li').eq(z).find('.trackListremindBtn span').text("已提醒");
				$('#' + id).find('.trackList>ul>li').eq(y).find('.trackListremind ul li').eq(z).attr('data-state', 'false');
				$('#' + id).find('.trackList>ul>li').eq(y).find('.trackListremind ul li').eq(z).find('.trackListremindBtn').css({
					"background-color": "#A6A6A6"
				});
			}
		}
	}
}

function trackingDetailsOpenOff(id) {
	$('#' + id).find('.trackList>ul>li').each(function() {
		var _This = $(this);
		_This.on('click', '.trackListPeson', function(e) {
			if(!_This.find('.trackListremind').hasClass('DisplayNone')) {
				_This.siblings().find('.trackListremind').slideUp('slow');
				_This.find('.trackListPeson .trackListPesonRight:first span:first').addClass('downBackground').removeClass('upBackground');
				_This.find('.trackListremind').slideUp('slow', function() {
					_This.find('.trackListremind').addClass('DisplayNone');
				});
			} else {
				_This.find('.trackListremind').slideDown('slow', function() {
					_This.find('.trackListremind').removeClass('DisplayNone');
				});
				_This.find('.trackListPeson .trackListPesonRight:first span:first').removeClass('downBackground').addClass('upBackground');
				_This.siblings().find('.trackListPeson .trackListPesonRight:first span:first').addClass('downBackground').removeClass('upBackground');

				_This.siblings().find('.trackListremind').slideUp('slow');
				_This.siblings().find('.trackListremind').addClass('DisplayNone');
			}
		});

	});
}
//	remindEvent('trackingDetails', 'remindHandle', remindBack);
function remindEvent(id, page, callback) {
	$('#' + id).find('.trackList>ul>li').each(function() {
		$(this).find('.trackListremind>ul>li').each(function() {
			var _This = $(this);
			$(this).find('.trackListremindText').click(function(e) {
				e.stopPropagation();
				if(_This.attr('data-state') == 'false') {
					$('#crewTrackingDetails').find('.remindSubmit span').text('已提醒');
					$('#crewTrackingDetails').find('.remindSubmit').css({
						'background': '#A6A6A6'
					});
					$('#crewTrackingDetails').find('.remindSubmit').unbind();
					$.mobile.changePage('#crewTrackingDetails', {
						"transform": "none",
					});
					head('crewTrackingDetails', headData);
				} else if(_This.attr('data-state') == 'true') {
					$('#crewTrackingDetails').find('.remindSubmit span').text('提醒');
					$('#crewTrackingDetails').find('.remindSubmit').css({
						'background': 'red',
					});
					remindWubmits('crewTrackingDetails', page);
					$.mobile.changePage('#crewTrackingDetails', {
						"transform": "none",
					});
					head('crewTrackingDetails', headData);
					if(!$('#' + page).find('.remindHandleList ul li').hasClass('DisplayNone')) {
						if('#' + page) {
							$('.ability').click(function() {
								_This.find('.trackListremindBtn span').text('已提醒');
								_This.attr('data-state', 'false');
								_This.find('.trackListremindBtn').css({
									'background': '#A6A6A6'
								});
								$.mobile.changePage('#' + id, {
									"transform": "none",
								});
								head(id, headData);
							})
						}
					}
				}
			});
			$(this).find('.trackListremindBtn').on('click', function(e) {
				e.stopPropagation();
				if(_This.attr('data-state') == 'true') {
					console.log($(this).find('span').text());
					$.mobile.changePage('#' + page, {
						"transform": "none",
					});
					head(page, headData);
					if(!$('#' + page).find('.remindHandleList ul li').hasClass('DisplayNone')) {
						if('#' + page) {
							$('.ability').click(function() {
								_This.find('.trackListremindBtn span').text('已提醒');
								_This.attr('data-state', 'false');
								_This.find('.trackListremindBtn').css({
									'background': '#A6A6A6'
								});
								$.mobile.changePage('#' + id, {
									"transform": "none",
								});
								head(id, headData);
							})
						}
					}
					callback && callback();
				} else {
					return
				}
			});
		});
	});
}

//任务跟踪-任务详情

//任务提醒	remindAddList('remindHandle');
function remindAddList(id) {
	$('#' + id).find('.remindHandleBtn').click(function() {
		$('#' + id).find('.PopupImport').removeClass('DisplayNone');
		$('#' + id).find('.PopupImport').find('.PopupImportText textarea').val("");
	});
	$('#' + id).find('.PopupBtn div:first').click(function() {
		$('#' + id).find('.PopupImport').addClass('DisplayNone');
	});

	$('#' + id).find('.PopupBtn div:last-child').click(function() {
		var values = $('#' + id).find('.PopupImportText textarea').val();
		if(values != "") {
			$('#' + id).find('.remindHandleList ul').append($('#' + id).find('.remindHandleList ul li').eq(0).clone(true));
			$('#' + id).find('.remindHandleList ul li:last-child').find('.remindHandleText span').text(values);
			$('#' + id).find('.remindHandleList ul li:last-child').find('.remindHandlePic img').removeClass('DisplayNone');
			$('#' + id).find('.remindHandleList ul li:last-child').siblings().find('.remindHandlePic img').addClass('DisplayNone');
			$('#' + id).find('.PopupImport').addClass('DisplayNone');
		} else {
			alert('请输入内容');
		}
	});
}
//
function remindChose(id) {
	$('#' + id).find('.remindHandleList ul li').each(function() {
		$(this).click(function() {
			$(this).find('.remindHandlePic img').attr('src', 'images/choose.png');
			$(this).find('.remindHandlePic img').removeClass('DisplayNone');
			$(this).siblings().find('.remindHandlePic img').addClass('DisplayNone');
		});
	});
}
//任务提醒

//任务提醒详情
//crewTrackingDetailsDom('crewTrackingDetails', simulationData1.crewTrackingDetails.data);
function crewTrackingDetailsDom(id, data) {
	var str1 = '<div class="trackListUserIcon"><img class="PUBLIC-CENTER-SPAN" src="images/tobaccoFactory/message.png" alt="" /></div>';
	str1 += '<div class="trackListUSerText"><div class="trackListUSerMaxText"><span class="PUBLIC-BOTTOM">姓名</span></div>';
	str1 += '<div  class="trackListUSerMinText"><span class="PUBLIC-CENTER-V-SPAN">事件</span></div></div>';
	str1 += '<div class="trackListUserState"><div><span class="PUBLIC-BOTTOM">06-16上午9:30</span></div>';
	str1 += '<div><span class="PUBLIC-CENTER-V-SPAN"></span></div></div>';

	var str2 = '<li class="CLEAR-BOTH">';
	str2 += '<div class="crewTrackingDetailsListIcon"><img src="images/images/TaskDetails/28_03.png" alt="" /></div>';
	str2 += '<div class="crewTrackingDetailsListTitle"><span></span></div>';
	str2 += '<div class="crewTrackingDetailsListText"><span></span></div></li>';
	$('#' + id).find('.crewTrackingDetailsList').append($('<ul></ul>'));
	for(var j = 0; j < data[0].list.text.length; j++) {
		$('#' + id).find('.crewTrackingDetailsUser').append($(str1));
	}
	for(var i = 0; i < data[0].data.text.length; i++) {
		$('#' + id).find('.crewTrackingDetailsList ul').append($(str2));
	}
	crewTrackingDetailsData(id, data);
}

function crewTrackingDetailsData(id, data) {
	$('#' + id).find('.trackListTitle span').text(data[0].data.title.text);
	for(var k = 0; k < data[0].list.text.length; k++) {
		$('#' + id).find('.trackListUserIcon img').attr('src', data[0].list.text[k].main_url);
		$('#' + id).find('.trackListUSerMaxText span').text(data[0].list.text[k].max_text);
		$('#' + id).find('.trackListUSerMinText span').text(data[0].list.text[k].left_min_text);
		$('#' + id).find('.trackListUserState div:first span').text(data[0].list.text[k].time);
		$('#' + id).find('.trackListUserState div:last-child span').text(data[0].list.text[k].state.text);
		$('#' + id).find('.crewTrackingDetailsUser').attr('value', data[0].list.text[k].number);
		$('#' + id).find('.trackListUserState div:last-child').attr('value', data[0].list.text[k].state.number);
		$('#' + id).find('.trackListUserState div:last-child span').css({
			'color': data[0].list.text[k].state.color
		});
	}
	for(var y = 0; y < data[0].data.text.length; y++) {
		$('#' + id).find('.crewTrackingDetailsList ul li').eq(y).find('.crewTrackingDetailsListIcon img').attr('src', data[0].data.text[y].main_url);
		$('#' + id).find('.crewTrackingDetailsList ul li').eq(y).find('.crewTrackingDetailsListTitle span').text(data[0].data.text[y].content);
		$('#' + id).find('.crewTrackingDetailsList ul li').eq(y).find('.crewTrackingDetailsListText span').text(data[0].data.text[y].title);
		$('#' + id).find('.crewTrackingDetailsList ul li').eq(y).attr('value', data[0].data.text[y].number);
	}
}

function remindWubmits(id, page) {
	$('#' + id).find('.remindSubmit').click(function() {
		if($(this).find('span').text() == '提醒') {
			$.mobile.changePage('#' + page, {
				'transform': 'none',
			});
			head(page, headData);
		} else {
			return;
		}
	});
}

//任务提醒详情

//测试牌号
function testAffirm(id, page) {
	console.log()
	if($('#' + id)) {
		$('.ability').click(function() {
			$('#' + id).find('.PublicChoseList ul li').each(function() {
				if(!$(this).find('img').hasClass('DisplayNone')) {
					var testValue = $(this).find('span').text();
					$('#' + page).find('.' + id).find('span').text(testValue);
					$.mobile.changePage('#' + page, {
						'transform': 'none',
					});
					head(page, headData);
				}
			});

		});
	}
}
//测试牌号

/*公共js*/
function PublicCreateDom(id, data) { //列表Dom生成
	var str = '<li class="CLEAR-BOTH">';
	str += '<div data-content="" class="PublicListImg"><img src="" alt="" /></div>';
	str += '<div class="PublicListRight CLEAR-BOTH"><div class="PublicListText">';
	str += '<div class="PublicListMax"><span></span></div>';
	str += '<div class="PublicListMin"><span ></span></div></div>';
	str += '<div class="PublicListRightText">';
	str += '<div class="PublicListTime"><span></span></div>';
	str += '<div class="PublicListState"><span></span></div>';
	str += '</div></div></li>';
	$('#' + id).find('.PublicList').append($('<ul></ul>'));
	for(var i = 0; i < data[0].list.text.length; i++) {
		$('#' + id).find('.PublicList ul').append($(str));
	}
	PublicAddData(id, data);
}

function PublicAddData(id, data) { //数据添加Fu-Hzy
	for(var j = 0; j < data[0].list.text.length; j++) {
		$('#' + id).find('.PublicList ul li').eq(j).find('.PublicListImg img').attr('src', data[0].list.text[j].main_url);
		$('#' + id).find('.PublicList ul li').eq(j).find('.PublicListMax span').text(data[0].list.text[j].max_text);
		$('#' + id).find('.PublicList ul li').eq(j).find('.PublicListMin span').text(data[0].list.text[j].left_min_text);
		$('#' + id).find('.PublicList ul li').eq(j).attr('value', data[0].list.text[j].number);
		if(data[0].list.text[j].unread != "" && data[0].list.text[j].unread != null && data[0].list.text[j].unread != 0) {
			$('#' + id).find('.PublicList ul li').eq(j).find('.PublicListImg').attr('data-content', data[0].list.text[j].unread).addClass('PublicListUnread');
		} else {
			$('#' + id).find('.PublicList ul li').eq(j).find('.PublicListImg').removeClass('PublicListUnread');
		}
		$('#' + id).find('.PublicList ul li').eq(j).find('.PublicListTime span').text(data[0].list.text[j].time);
		if(data[0].list.text[j].state != "" && data[0].list.text[j].state != null) {
			$('#' + id).find('.PublicList ul li').eq(j).find('.PublicListRight .PublicListState span').text(data[0].list.text[j].state.text);
			$('#' + id).find('.PublicList ul li').eq(j).find('.PublicListRight .PublicListState span').css({
				'color': data[0].list.text[j].state.color,
			});
		}

	}
}
//	PublicChoseListDom('testProcess', simulationData1.testProcess.data);
function PublicChoseListDom(id, data) {
	var str = '<li class="CLEAR-BOTH"><div class="PublicChoseListText"><span>text</span></div>';
	str += '<div class="PublicChoseListPic"><img class="DisplayNone" src="images/choose.png" alt="" /></div></li>';
	$('#' + id).find('.PublicChoseList').append($('<ul></ul>'));
	for(var i = 0; i < data[0].data.text.length; i++) {
		$('#' + id).find('.PublicChoseList ul').append($(str));
	}
	PublicChoseListData(id, data);
	PublicChoseListChange(id);
}

function PublicChoseListData(id, data) {
	for(var j = 0; j < data[0].data.text.length; j++) {
		$('#' + id).find('.PublicChoseList ul li').eq(j).attr('value', data[0].data.text[j].number);
		$('#' + id).find('.PublicChoseList ul li').eq(j).find('.PublicChoseListText span').html(data[0].data.text[j].main);
	}
	$('#' + id).find('.PublicChoseList ul li').eq(0).find('img').removeClass('DisplayNone');
}

function PublicChoseListChange(id) {
	$('#' + id).find('.PublicChoseList ul li').each(function() {
		$(this).click(function(e) {
			e.stopPropagation();
			$(this).find('.PublicChoseListPic img').removeClass('DisplayNone');
			$(this).siblings().find('.PublicChoseListPic img').addClass('DisplayNone');
		});
	});
}

/*页面跳转*/
function HeadBack(id, page) {
	$('#' + id).find('.back').each(function() {
		$(this).click(function() {
			console.log("=====跳转成功======");
			$.mobile.changePage('#' + page, {
				transition: 'none',
			});

		});
	});
}

function ListChangepage(id, page) {
	$('#' + id).find('.PublicList ul li').each(function() {
		$(this).click(function() {
			$.mobile.changePage('#' + page, {
				transition: 'none',
			});
			head(page, headData);
		});
	});
}

function PublicClickPage(id, page, className) { //jQuery mobile点击跳转方法,page:要跳转的页面id名,className:点击元素的class名
	$('#' + id).find('.' + className).each(function() {
		$(this).click(function() {
			$.mobile.changePage('#' + page, {
				transition: 'none',
			});
			head(page, headData);
		});
	});
}















































































































































