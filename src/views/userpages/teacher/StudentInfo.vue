<template>
    <div class="appmain">
        <div class="appcart selcart">
            <!-- <SelectBlock atr="学期" describe="请选择" v-model="data.semester">
                <li>第一学期</li>
            </SelectBlock> -->
            
            <SelectBlock atr="课程" describe="请选择" v-model="data.course" :change="getCourseStudentList">
                <option v-for="(course, index) in courses.courseList" :key="index" :value="course.name">{{ course.name }}</option>

            </SelectBlock>
        </div>
        <div class="appcart">
            <table class="apptable">
                <tr>
                    <th>序号</th>
                    <th>工号</th>
                    <th>姓名</th>
                    <th>成绩</th>
                </tr>
                <tr v-show="data.CourseStudentList.length == 0"><td class="nodata" colspan="5"> No Data </td></tr>
                <tr v-for="(item, index) in data.CourseStudentList">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.employee_id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.grade }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup>
import SelectBlock from "@/components/SelectBlock.vue";
import { reactive,onBeforeMount } from "vue";
import { reCourseStudentList,reCourseList } from "@/api/user";

const courses=reactive({
    courseList:[],
})

const data = reactive({
    course: "",
    CourseStudentList: [],
});
//获取课程数据
async function updataData() {
    const result = await reCourseList();
    if (result.code && result.code === 200) {
        courses.courseList = result.data;
    } else console.log("err", result);
}



//获取学生信息
async function getCourseStudentList() {
    const result = await reCourseStudentList(data.course);
    if (result.code && result.code === 200) {
        data.CourseStudentList = result.data;
    } else console.log("err", result);
}

onBeforeMount(() => {
    updataData();
});

</script>

<style lang="less" scoped>
//改变选择器组件的默认样式
.selcart:deep(.select-wrap) {
    margin-right: 20px;
}
</style>
