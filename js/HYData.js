//alert(121212)

function getSimulation(page, obj) {
	var page = HLPUBLICCLASS.FUNCTION.ISID(page, true);
	var data;
	var number = Math.floor((Math.random() * 2))
	console.log(number);
	// console.log(obj);
	switch(page) {
		case "workHome":
			data = simulationData[page];
			break;
		case "plantManage":
			data = simulationData[page]
			var str = "c"
			if(obj.type === '2') {
				str = "r"
			}
			$.each(data.data[0].list.text, function() {
				this.side = str
			})
			break
		case "message":
			data = simulationData[page]
			break
		case "historyInspect":
			if(obj.type === '1' || obj.type === '2') {
				data = simulationData.submit
			} else {
				data = simulationData[page]
			}

			break;
		case "QJNewDynamicParticularsReceiver":
			if(obj.type === "1") {
				data = simulationData[page][0]
			} else {
				data = simulationData[page][1]
			}

			break;
		case "ProductionKanban":
			data = simulationData[page][number]
			break;
		case "BasicInformation":
			data = simulationData[page][number];
			break;
		case "QJCreatMessage":
			data = simulationData[page]
			break
		case "QJAddPlan":
			if(!obj.type) {
				data = simulationData[page]
			} else {
				data = simulationData.submit
			}

			break
			
		case "QJMessagingReceiver": //DynamicParticulars
			data = simulationData[page]
			break
		case "QJMessagingTime": //DynamicParticulars
			data = simulationData[page]
			break
		case "QJMessagingStatus": //DynamicParticulars
			data = simulationData[page]
			break
		case "GroupManage": //DynamicParticulars
			if(obj.type !== "4") {
				data = simulationData.submit
			} else {
				data = simulationData[page]
			}
			break

		case "QJNoticeUnusual": //DynamicParticulars
			data = simulationData[page]
			break
		case "DailyBusinessData": //DynamicParticulars
			data = simulationData["QJNoticeUnusual"]
			break
		case "QJBacklogParticulars": //DynamicParticulars
			if(obj.type !== undefined) {
				data = simulationData.submit
			} else {
				data = simulationData[page]
			}

			break
			// case "QJPushMessage":  //DynamicParticulars
			// 	data = simulationData[page]
			// 	break
	}
	console.log(data);

	return data;
}

var simulationData1 = {
	user: // 用户表 -3
		[{
		data: [{
			code: 1
		}]
	}, {
		data: [{
			number: "001",
			name: "zhangsan	",
			pass: "123456",
			Track: "1.aspx",
			dep: "001",
			role: "001",
			rpass: false,
			autoLoad: false,
			userImg: "1.png",
			sex: "g",
			phone: "133115225",
			seniority: "2",
			email: "111@qq.com",
		}]
	}, {
		data: [{
			code: 1
		}]
	}],
	workHome: {
		data: [{ //工作 -5
			value:'0',// 0-组员 1-组长 2-领导
			factorys: [{
				number: "000",
				name: "昆明卷烟厂",
				main_url: "images/workHome/5_03.png",
				unread: "0"
			}, {
				number: "001",
				name: "红河卷烟厂",
				main_url: "images/workHome/5_05.png",
				unread: "1"
			}, {
				number: "002",
				name: "曲靖卷烟厂",
				main_url: "images/workHome/5_09.png",
				unread: "0"
			}, {
				number: "003",
				name: "会泽卷烟厂",
				main_url: "images/workHome/5_10.png",
				unread: "0"
			}, {
				number: "004",
				name: "乌兰卷烟厂",
				main_url: "images/workHome/5_13.png",
				unread: ""
			}, {
				number: "005",
				name: "新疆卷烟厂",
				main_url: "images/workHome/5_14.png",
				unread: "0"
			}],
			adverts: [{
				main_url: "images/workHome/5_02.png",
				number: "001"
			}, {
				main_url: "images/workHome/5_03.png",
				number: "001"
			}, {
				main_url: "images/workHome/5_09.png",
				number: "001"
			}],
		}]
	},
	plantManage: {
		data: [{ //工厂管理 -6
			value:'0',// 0-组员 1-组长 2-领导
			listUpdateType: "",
			list: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "消息", //列表主文本
					left_min_text: "张晟敏:工艺质量现场测试任务,请及时处理",
					right_min_text: "",
					time: "06-16上午9:30",
					boult_url: "", //小图标
					main_url: "images/tobaccoFactory/message.png",
					unread: 30, //number
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					file: [{
						file_type_url: "",
						type: "", //类型
						url: "", //地址
						size: "", //大小
						name: "null", //名字
					}],
					side: "r%c%t", //删除、确认、置顶
					number: "000", // 唯一标识符
				}, {
					max_text: "任务跟踪", //列表主文本
					left_min_text: "张晟敏:工艺质量现场测试任务",
					right_min_text: "",
					time: "06-16上午9:30",
					boult_url: "", //小图标
					main_url: "images/tobaccoFactory/task.png",
					unread: 0, //number
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					file: [{
                        file_type_url: "",
                        type: "", //类型
                        url: "", //地址
                        size: "", //大小
                        name: "null", //名字
                    }],
					side: "r%c%t", //删除、确认、置顶
					number: "001", // 唯一标识符
				}, {
					max_text: "现场问题反馈", //列表主文本
					left_min_text: "李维安:工艺质量现场测试问题反馈",
					right_min_text: "",
					time: "06-16上午9:30",
					boult_url: "", //小图标
					main_url: "images/tobaccoFactory/feedback.png",
					unread: 30, //number
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					file: [{
						file_type_url: "",
						type: "", //类型
						url: "", //地址
						size: "", //大小
						name: "null", //名字
					}],
					side: "r%c%t", //删除、确认、置顶
					number: "002", // 唯一标识符
				}]
			},
			adverts: [{
				main_url: "1.png",
				number: "001"
			}, {
				main_url: "1.png",
				number: "001"
			}],
		}]
	},
	message: {
		data: [{ //消息 8
			value:'0',// 0-组员 1-组长 2-领导
			listUpdataType: "",
			list: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "制丝跟批测试", //列表主文本
					left_min_text: "张晟敏：工艺质量现场测试任务,请及时处理",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "卷包跟批测试", //列表主文本
					left_min_text: "张晟敏：工艺质量现场测试任务,请及时处理",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "制丝过程消耗", //列表主文本
					left_min_text: "张晟敏：工艺质量现场测试任务,请及时处理",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "卷包过程消耗", //列表主文本
					left_min_text: "张晟敏：工艺质量现场测试任务,请及时处理",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "往年问卷核查", //列表主文本
					left_min_text: "张晟敏：工艺质量现场测试任务,请及时处理",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "在线工艺保障", //列表主文本
					left_min_text: "张晟敏：工艺质量现场测试任务,请及时处理",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}]
			}

		}]
	},

	historyInspect: {
		data: [{ //往年问题核查 -9
			value:'0',// 0-组员 1-组长 2-领导
			listUpdataType: "",
			list: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "提醒：请及时处理任务",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "急",
						number: "1",
						color: "red"
					}
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "提醒：请及时处理任务：",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "急",
						number: "1",
						color: "red"
					}
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "提醒：请及时处理任务：",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "急",
						number: "1",
						color: "red"
					}
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "围绕现场工艺质量测试问题核查,现场核查人员可利用",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "",
						number: "1",
						color: ""
					}
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "围绕现场工艺质量测试问题核查,现场核查人员可利用",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "",
						number: "1",
						color: ""
					}
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "围绕现场工艺质量测试问题核查,现场核查人员可利用",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "",
						number: "1",
						color: ""
					}
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "围绕现场工艺质量测试问题核查,现场核查人员可利用",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "",
						number: "1",
						color: ""
					}
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "围绕现场工艺质量测试问题核查,现场核查人员可利用",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "",
						number: "1",
						color: ""
					}
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "围绕现场工艺质量测试问题核查,现场核查人员可利用",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "",
						number: "1",
						color: ""
					}
				}]
			}

		}]
	},
	taskCheck: {
		data: [{ //任务查看
			value:'0',// 0-组员 1-组长 2-领导
			listUpdataType: "",
			list: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "提醒：请及时处理任务",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "急",
						number: "1",
						color: "red"
					}
				}]
			},
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main_url: "images/TaskDetails/28_03.png",
					content: "测试牌号",
					title: "云烟",
					number: "001"
				}, {
					main_url: "images/TaskDetails/28_06.png",
					content: "测试对象",
					title: "制丝车间",
					number: "001"
				}, {
					main_url: "images/TaskDetails/28_08.png",
					content: "任务截止日期",
					title: "2016-7-15",
					number: "001"
				}, {
					main_url: "images/TaskDetails/28_10.png",
					content: "测试线",
					title: "A线",
					number: "001"
				}, {
					main_url: "images/TaskDetails/28_10.png",
					content: "测试工段",
					title: "真空回潮",
					number: "001"
				}, {
					main_url: "images/TaskDetails/28_12.png",
					content: "测试工序",
					title: "松散回潮",
					number: "001"
				}, {
					main_url: "images/TaskDetails/28_12.png",
					content: "参数点",
					title: "工艺流量",
					number: "001"
				}, {
					main_url: "images/TaskDetails/28_14.png",
					content: "任务描述",
					title: "围绕现场工艺质量测试问题核查,现场核查人员可利用移动端的方式对现场问题进行拍摄,文字录入并将核查结果上报",
					number: "001"
				}]
			}

		}]
	},
	//taskTrace 任务跟踪 -30
	taskTrace: {
		data: [{
			value:'0',// 0-组员 1-组长 2-领导
			listUpdataType: "",
			list: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "3个组员正在处理,2人未处理,1人已处理",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "已完成",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "已完成",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "已完成",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "已完成",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "已完成",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "已完成",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}, {
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "已完成",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
				}]
			},
		}]
	},
	trackingDetails: { //任务跟踪详情  -31 32
		data: [{
			
			listUpdateType: "",
			listUser: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "3个组员正在处理,2人未处理,1人已处理",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
							text: "紧急",
							number: "1",
							color: "red"
						}, //一般、紧急
				}]
			},
			list: {
				title: {
					text: "共6位组员" //大标题
				},
				text: [{
					max_text: "陈毅", //列表主文本
					left_min_text: "",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state:{
						text:"未处理",
						color:"red",
						number:"001",
					},
					task:{
						 total: "6",
						 not: "1",
						 hand: "3",
						 stocks: "2"
					},
					taskList: [{
						taskState: {
							text: "未处理",
							number: "1",
							color: "red"
						},
						state: {
							text: "紧急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "处理中",
							number: "1",
							color: "red"
						},
						state: {
							text: "一般",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "处理中",
							number: "1",
							color: "red"
						},
						state: {
							text: "一般",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "处理中",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "已完成",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "已完成",
							number: "1",
							color: "green"
						},
						state: {
							text: "一般",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}]
				}, {
					max_text: "陈毅", //列表主文本
					left_min_text: "",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state:{
						text:"已完成",
						color:"green",
						number:"001",
					},
					task:{
						 total: "6",
						 not: "1",
						 hand: "3",
						 stocks: "2"
					},
					taskList: [{
						taskState: {
							text: "未处理",
							number: "1",
							color: "red"
						},
						state: {
							text: "",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "未处理",
							number: "1",
							color: "red"
						},
						state: {
							text: "",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "未处理",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "未处理",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "未处理",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, ]
				}, {
					max_text: "陈毅", //列表主文本
					left_min_text: "",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					task:{
						 total: "6",
						 not: "1",
						 hand: "3",
						 stocks: "2"
					},
					state:{
						text:"未处理",
						color:"red",
						number:"001",
					},
					taskList: [{
						taskState: {
							text: "未处理",
							number: "1",
							color: "red"
						},
						state: {
							text: "",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "处理中",
							number: "1",
							color: "blue"
						},
						state: {
							text: "",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "处理中",
							number: "1",
							color: "blue"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "处理中",
							number: "1",
							color: "blue"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "已完成",
							number: "1",
							color: "green"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "已完成",
							number: "1",
							color: "green"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}]
				}, {
					max_text: "陈毅", //列表主文本
					left_min_text: "",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					task:{
						 total: "6",
						 not: "1",
						 hand: "3",
						 stocks: "2"
					},
					state:{
						text:"处理中",
						color:"nlue",
						number:"001",
					},
					taskList: [{
						taskState: {
							text: "已完成",
							number: "1",
							color: "red"
						},
						state: {
							text: "紧急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "已完成",
							number: "1",
							color: "red"
						},
						state: {
							text: "一般",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "已完成",
							number: "1",
							color: "red"
						},
						state: {
							text: "一般",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "已完成",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}, {
						taskState: {
							text: "已完成",
							number: "1",
							color: "red"
						},
						state: {
							text: "急",
							number: "1",
							color: "red"
						}, //一般、紧急
						max_text: "制丝车间A线真空回潮松散回潮测试",
						number: "001",
					}]
				}],
				task: {
					total: "6",
					not: "1",
					hand: "3",
					stocks: "2"
				}
			},
		}]
	},
	crewTrackingDetails: {
		data: [{ //组员任务跟踪详情 -33
//			value:'0',// 0-组员 1-组长 2-领导
			listUpdataType: "",
			list: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "陈毅", //列表主文本
					left_min_text: "昆烟测试组",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					unread: 30, //number
					number: "001", // 唯一标识符
					state: {
						text: "处理中",
						number: "1",
						color: "blue"
					}
				}]
			},
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main_url: "images/TaskDetails/28_03.png",
					content: "测试牌号",
					title: "云烟",
					number: "001"
				}, {
					main_url: "images/TaskDetails/28_06.png",
					content: "测试对象",
					title: "制丝车间",
					number: "001"
				}, {
					main_url: "images/TaskDetails/28_08.png",
					content: "任务截止日期",
					title: "2016-7-15",
					number: "001"
				}, {
					main_url: "images/TaskDetails/28_10.png",
					content: "测试线",
					title: "A线",
					number: "001"
				}, {
					main_url: "images/TaskDetails/28_10.png",
					content: "测试工段",
					title: "真空回潮",
					number: "001"
				}, {
					main_url: "images/TaskDetails/28_12.png",
					content: "测试工序",
					title: "松散回潮",
					number: "001"
				}, {
					main_url: "images/TaskDetails/28_12.png",
					content: "参数点",
					title: "工艺流量",
					number: "001"
				}, {
					main_url: "images/TaskDetails/28_14.png",
					content: "任务描述",
					title: "围绕现场工艺质量测试问题核查,现场核查人员可利用移动端的方式对现场问题进行拍摄,文字录入并将核查结果上报",
					number: "001"
				}]
			}

		}]
	},
	reminderOptions: {
		data: [{ //提醒选项 -34
			deta: {
				title: {
					text: "任务信息",
				},
				text: [{
					main: "请尽快完成下发任务",
					number: "001"
				}, {
					main: "请尽快完成下发任务",
					number: "001"
				}, {
					main: "请尽快完成下发任务",
					number: "001"
				}, {
					main: "请尽快完成下发任务",
					number: "001"
				}]
			}
		}]
	},
	leadSeeTracking: {
		data: [{ //领导视角任务跟踪详情 -44
			value:'0',// 0-组员 1-组长 2-领导
			list: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "张晟敏：工艺质量现场测试任务", //列表主文本
					left_min_text: "处理中",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					state: {
						text: "紧急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}]
			},
			userList: {
				title: {
					text: "共6个确认" //大标题
				},
				text: [{
					max_text: "陈毅", //列表主文本
					main_url: "images/7-121222141042.jpg",
					number: "001", // 唯一标识符
				}, {
					max_text: "方元先", //列表主文本
					main_url: "images/7-121222141042.jpg",
					number: "001", // 唯一标识符
				}, {
					max_text: "李晓杰", //列表主文本
					main_url: "images/7-121222141042.jpg",
					number: "001", // 唯一标识符
				}, {
					max_text: "张大栾", //列表主文本
					main_url: "images/7-121222141042.jpg",
					number: "001", // 唯一标识符
				}]
			},
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main_url: "1.png",
					content: "昆明卷烟厂",
					main: "烟厂名称",
					number: "001"
				}, {
					main_url: "1.png",
					content: "2016-7-15",
					main: "任务截止日期",
					number: "001"
				}, {
					main_url: "1.png",
					content: "围绕现场工艺质量测试问题核查,现场核查人员可利用移动端的方式对现场问题进行拍摄,文字录入并将核查结果上报",
					main: "任务描述",
					number: "001"
				}]
			}
		}]
	},
	
	
	feedback: {
		data: [{ //feedback-13
			list: {
				title: {
					text: "标题" //大标题
				},
				text: [{
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午10:30",
					main_url: "images/7-121222141042.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}, {
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午10:30",
					main_url: "images/7-121222141042.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}, {
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午10:30",
					main_url: "images/7-121222141042.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}, {
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}, {
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午10:30",
					main_url: "images/7-121222141042.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}, {
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}, {
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}, {
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}, {
					max_text: "李维安：工艺质量现场测试问题反馈", //列表主文本
					left_min_text: "现场工艺质量测试问题核查",
					time: "06-16上午9:30",
					main_url: "images/7-121222141042.jpg",
					state: {
						text: "急",
						number: "1",
						color: "red"
					}, //一般、紧急
					number: "001", // 唯一标识符
				}]
			}
		}]
	},
	minuteTickling: {
		data: [{ //现场问题反馈 -14
			data: {
				title: {
					text: "",
				},
				text: [{
					main: "标题",
					content: "工艺质量现场测试问题反馈",
					number: "001"
				}, {
					main: "反馈人",
					content: "李维安",
					number: "001"
				}, {
					main: "测试牌号",
					content: "云烟",
					number: "001"
				}, {
					main: "测试车间",
					content: "制丝车间",
					number: "001"
				}, {
					main: "生产线",
					content: "A线",
					number: "001"
				}, {
					main: "测试工段",
					content: "真空回潮",
					number: "001"
				}, {
					main: "测试工序",
					content: "松散回潮",
					number: "001"
				}, {
					main: "参数点",
					content: "工艺流量",
					number: "001"
				}, {
					main: "图片",
					content: "",
					number: "001"
				}, {
					main: "结果描述",
					content: "哈素滴哦灰色空间淡淡的淡淡的淡淡的淡淡的淡淡的淡淡粉丝哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦不就是佛道两公里啊师傅打开了可能",
					number: "001"
				}]
			}
		}]
	},
	brandChoice: {
		data: [{ //牌号选择 -15
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main: "云烟",
					number: "001"
				}, {
					main: "云烟软紫",
					number: "001"
				}, {
					main: "云烟软珍",
					number: "001"
				}, {
					main: "云烟",
					number: "001"
				}, {
					main: "云烟软紫",
					number: "001"
				}, {
					main: "云烟软珍",
					number: "001"
				}, {
					main: "云烟",
					number: "001"
				}, {
					main: "云烟软紫",
					number: "001"
				}, {
					main: "云烟",
					number: "001"
				}, {
					main: "云烟软紫",
					number: "001"
				}, {
					main: "云烟软珍",
					number: "001"
				}, {
					main: "云烟软紫",
					number: "001"
				}, {
					main: "云烟软珍",
					number: "001"
				}, {
					main: "云烟软紫",
					number: "001"
				}, {
					main: "云烟软珍",
					number: "001"
				}]
			}
		}]
	},
	workLine: {
		data: [{ //生产线选择
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main: "生产线1",
					number: "001"
				}, {
					main: "生产线2",
					number: "001"
				}, {
					main: "生产线3",
					number: "001"
				}, {
					main: "生产线4",
					number: "001"
				}, {
					main: "生产线5",
					number: "001"
				}, {
					main: "生产线6",
					number: "001"
				}]
			}
		}]
	},
	testPlant: {
		data: [{ //车间选择
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main: "制丝车间",
					number: "001"
				}, {
					main: "卷包车间",
					number: "001"
				}]
			}
		}]
	},
	testCraft: {
		data: [{ //工段选择
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main: "工段1",
					number: "001"
				}, {
					main: "工段2",
					number: "001"
				}, {
					main: "工段3",
					number: "001"
				}, {
					main: "工段4",
					number: "001"
				}, {
					main: "工段5",
					number: "001"
				}]
			}
		}]
	},
	testProcess: {
		data: [{ //工序选择
			data: {
				title: {
					text: "任务信息",
				},
				text: [{
					main: "工序1",
					number: "001"
				}, {
					main: "工序2",
					number: "001"
				}, {
					main: "工序3",
					number: "001"
				}, {
					main: "工序4",
					number: "001"
				}, {
					main: "工序5",
					number: "001"
				}]
			}
		}]
	},
	parameterChoice: //参数点选择 -16
	{
		data: [{
			deta: {
				title: {
					text: "任务信息",
				},
				text: [{
					main: "参数1",
					number: "001"
				}, {
					main: "参数2",
					number: "001"
				}, {
					main: "参数3",
					number: "001"
				}, {
					main: "参数4",
					number: "001"
				}, {
					main: "参数5",
					number: "001"
				}, {
					main: "参数6",
					number: "001"
				}, {
					main: "参数7",
					number: "001"
				}, {
					main: "参数8",
					number: "001"
				}, {
					main: "参数9",
					number: "001"
				}, {
					main: "参数6",
					number: "001"
				}, {
					main: "参数7",
					number: "001"
				}, {
					main: "参数8",
					number: "001"
				}, {
					main: "参数9",
					number: "001"
				}, {
					main: "参数10",
					number: "001"
				}, {
					main: "参数11",
					number: "001"
				}]
			}
		}]
	},
	
	leadSeeTickling: { // 领导视角现场问题反馈详情 48
		data: [{
			listUpdateType: "", // top bottom new
			form: {
				title: "工艺质量现场测试问题反馈", //标题
				user: {
					name: "李维安",
					url: "",
					number: ""
				}, //反馈用户
				testmark: "云烟", //测试牌号
				testObj: "制丝车间", //测试车间
				deadline: "2016 - 7 - 15",
				holdingwire: "A线", //生产线
				section: "真空回潮", //测试工段
				teststep: "散松回潮", //测试工序
			},
			parameterset: [{
				parameter: "工艺流量",
				description: "当班设备3# 5# 卷烟机工艺质量测试问题核查完成",
				url: [""],
			}],
			parameterset: [{
				parameter: "参数点1",
				description: "当班设备3# 5# 卷烟机工艺质量测试问题核查完成",
				url: [""],
			}]
		}]
	},
	myInfo: //个人信息 -45
	{
		data: [{
			number: "001",
			name: "张晟敏	",
			pass: "123456",
			userTrack: "1.aspx",
			dep: "001",
			role: "001",
			rpass: false,
			autoLoad: false,
			userImg: "1.png",
			sex: "男",
			phone: "133115225",
			seniority: "2",
			email: "liwl@qujing.com",
		}]
	},

}
