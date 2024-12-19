import request from './request'

//获取可选课程
export function getAccessibleCourse(){
    return request.get('/accessible_course');
}

//获取已选课程
export function getSelectedCourse(){
    return request.get('/selected_course');
}

//选课 & 退课
export function selectCourse(params){
    return request.post('/select_course',params);
}

//获取已发布的课程
export function getPublishedCourse(){
    return request.get('/published_course');
}

//发布课程
export function addCourse(params){
    return request.post('/publish_course',params);
}


//获取可查看的课程列表
export function reCourseList(){
    return request.get('/option_course');
}

//修改成绩
export function updateGrade(params){
    return request.post('/set_grade',params);
}


//获取课程学生列表
export function reCourseStudentList(coursename){
    return request.get(`/CourseStudentList?coursename=${coursename}`);
}

//获取教学安排
export function reTeachSchedule(params){
    return request.get(`/teachSchedule?selMode=${params.selMode}&modeParam=${params.modeParam}`);
}

//获取课程表
export function reTimetable(params){
    return request.get(`/getTimetable?selMode=${params.selMode}&selParam=${params.selParam}`);
}

//获取已选课程
export function reSelectCourse(){
    return request.get('/selected_course');
}

//获取可选的课程列表
export function reOptionCourse(){
    return request.get('/getOptionCourse');
}

//选择或取消选择课程
export function reSelectOrCancelCourse(params){
    return request.get(`/select_course?action=${params.action}&courseName=${params.courseName}`);
}
