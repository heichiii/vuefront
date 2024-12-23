const resdata={
    loginSuccess:{
        token:'qwer',
    },
    userInfo:{
        role:"student",
        username:"禾与禾云",
        phone:'123456',
        isLogin:true,
    },
    loginHistory:{
        logMethods:['密码登录','扫码登录','短信验证码'],
        logMechine:['ic-1','ds-2','pe-5','desc'],
        logSystem:['android','ios','pc','macos'],
        logTime:['2022-2-16 16:37:32'],
        logPlace:['广州','深圳','杭州','上海','乌鲁木齐','石河子'],
        id:'',
    },
    logHistoryList:[],
    classRoomQuery:{
        area:['ds','zq','ql','xq'],
        areaname:{
            ds:"东区",
            zq:"主校区",
            ql:"启林",
            xq:"西校区",
        },
        Cid:"",
        id:'',
        timeSlot:['授课','空闲','维修','会议','活动'],
        seat:[22,32,56,64],
    },
    classRoomQueryList:[],
    courseStudent:{
        studentId:'2017'+'1-11'+'1-11'+'100-900',
        lastName:['李','连','张','欧阳','林','刘','王','陈','何','赵','杨','林'],
        name1:['艺','子','佳','玉','景','淑','润','世','昌','杰'],
        name2:['萱','九霄','纯','翔','胜','勇','思','娴','益','月','',''],
        name:'',
        college:['生命科学学院','材料与能源学院','数学与信息学院','园艺学院'],
        class:'1-5',
    },
    courseStudentList:[],

    teachScheduleList:[
        {
            course:'果树栽培学',
            className:'园艺六班',
            area:'东区',
            Cid:'ds109',
            arrange:[
                [1,11,12,13],
                [1,1,2],
                [1,11,12,13],
                [1,1,2],
                [1,11,12,13],
                [1,1,2],
                [1,11,12,13],
                [1,1,2],
                [1,11,12,13],
                [1,1,2],
                [1,11,12,13],
                [1,1,2],[],[],[],[],
            ]
        },
        {
            course:'园艺产品储运学',
            className:'茶学四班',
            area:'东区',
            Cid:'ds501',
            arrange:[
                [1,3,4],
                [2,3,4],
                [3,3,4],
                [4,3,4],
                [5,3,4],
                [6,3,4],
                [7,3,4],
                [1,3,4],
                [2,3,4],
                [3,3,4],
                [4,3,4],
                [5,3,4],
                [6,11,12,13],
                [7,11,12,13],
                [6,11,12,13],
                [7,11,12,13]
            ]
        },
        {
            course:'数据库原理',
            className:'软工一班',
            area:'西校区',
            Cid:'xq201',
            arrange:[
                [2,11,12,13],
                [2,11,12,13],
                [2,11,12,13],
                [2,11,12,13],
                [2,5,6],
                [2,5,6],
                [2,1,2],
                [2,1,2],
                [2,1,2],
                [2,11,12,13],
                [2,1,2],
                [2,1,2],
                [2,1,2,3,4],
                [2,1,2,3,4],
                [2,1,2,3,4],
                [2,1,2,3,4],
            ]
        },
        {
            course:'数据结构',
            className:'网工一班',
            area:'西校区',
            Cid:'xq105',
            arrange:[
                [3,11,12,13],
                [3,7,8],
                [3,11,12,13],
                [3,7,8],
                [3,1,2],
                [3,7,8],
                [3,11,12,13],
                [3,7,8],
                [3,1,2],
                [4,11,12,13],
                [4,1,2],
                [4,7,8],
                [3,7,8,9,10],
                [4,7,8,9,10],
                [3,7,8,9,10],
                [4,7,8,9,10],
            ]
        },
        {
            course:'大学体育3',
            className:'设施二班',
            area:'启林',
            Cid:'ql404',
            arrange:[
                [5,9,10],
                [5,7,8],
                [5,9,10],
                [5,7,8],
                [5,9,10],
                [5,7,8],
                [5,9,10],
                [5,7,8],
                [5,9,10],
                [5,7,8],
                [5,9,10],
                [5,7,8],[],[],[],[],
            ]
        }
    ],
       
    myInform:{
        infoType:['教师','选课','教务','课程','其他'],
        infoList:[
            '课程评分提醒',
            '课程"蔬菜栽培学实验"上课时间变动提醒',
            '您有一门课程待确认',
            '课程"昆虫学实验"安排',
            '师生互评系统开启',
            '成绩单打印结果',
            '教室预约提醒',
        ],
        date:'',
        id:'',
    },
    notice:{
        infoType:['学校','体育部','教务处','新媒体','其他'],
        infoList:[
            '给予学生XXX记过处分的公示',
            '单位内调配岗位信息(2022年第5次)',
            '关于推荐广东省林业科普专家库成员的通知',
            '关于组织学生参加2022年开学典礼暨本科新生军训动员大会的通知',
            '关于录入2021-2022学年第二学期必修课补考成绩的通知',
            '关于报送农村科技特派员驻镇帮镇扶村工作进展的通知',
            '关于组织我校教师参加“2022年度广东省网络学习空间应用优秀教师”评优申报的通知',
        ],
        date:'',
        id:'',
    },
    myArrange:{
        text1:['课程:','会议:','活动'],
        text2:[['园艺产品储运学','插花艺术','数据结构','计算机组成原理'],
        ['银杏性染色体分子进化研究进展汇报','低温胁迫引起的粉蕉果实后熟障碍机制报告','高水平替加环素耐药机制Tet(X)研究报告','玉米GOLDEN 2提高水稻的遗传转化效率的可行性分析'],
        ['“我为群众办实事”','培训:CAS SciFindern“农化信息获取策略"',':海关总署“统计、普法服务进校园”讲座',':校内雅思/托福2022年暑假集训']],
        area:['启林','东区','主校区','西校区'],
        cId:'',
    },
    timetable:{
        course:['蔬菜栽培学(各论)','园艺产品储运学','插花艺术','数据结构','计算机组成原理','计算机系统','计算机网络'],
        firstName:['谢','黄','魏','赵','董','戴','包','贺','邵'],
        lastName:['明','月景','清','长明','昌','明旭','闰华','燕春','辉'],
        area:['启林','东区','主校区','西校区'],
        cId:'',
        timeSlot:[],
        id:'',
    },
    timetableList:[],
}

module.exports = resdata;