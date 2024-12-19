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
                    <th>操作</th>
                </tr>
                <tr v-show="data.CourseStudentList.length == 0"><td class="nodata" colspan="5"> No Data </td></tr>
                <tr v-for="(item, index) in data.CourseStudentList">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.employee_id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.grade }}</td>
                    <td><button @click="openGradeEditModal(item)">修改成绩</button></td>
                </tr>
            </table>
        </div>
        <!-- 成绩修改弹窗 -->
        <div v-if="showGradeEditModal" class="modal">
            <div class="modal-content">
                <h2>修改成绩</h2>
                <input v-model="editGrade" type="text" />
                <button @click="submitGradeChange(tmp_item)">提交</button>
                <div v-if="showModalResponse">{{ modalResponse }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SelectBlock from "@/components/SelectBlock.vue";
import { reactive, onBeforeMount,ref } from "vue";
import { reCourseStudentList, reCourseList ,updateGrade} from "@/api/user";

const courses = reactive({
    courseList: [],
});

const data = reactive({
    course: "",
    CourseStudentList: [],
});
const tmp_item=ref(null);
// 控制成绩修改弹窗的显示
const showGradeEditModal = ref(false);
// 要修改的成绩
const editGrade = ref('');
// 弹窗显示的返回值情况
const showModalResponse = ref(false);
const modalResponse = ref('');

// 获取课程数据
async function updataData() {
    const result = await reCourseList();
    if (result.code && result.code === 200) {
        courses.courseList = result.data;
    } else console.log("err", result);
}

// 获取学生信息
async function getCourseStudentList() {
    const result = await reCourseStudentList(data.course);
    if (result.code && result.code === 200) {
        data.CourseStudentList = result.data;
    } else console.log("err", result);
}

// 打开成绩修改弹窗
function openGradeEditModal(item) {
    showGradeEditModal.value = true;
    editGrade.value = item.grade;
    tmp_item.value=item;
}

// 提交成绩修改
async function submitGradeChange(item) {
    // 向后端发送修改成绩的请求，这里假设后端接口为 updateGrade，需要根据实际情况修改
    const result = await updateGrade({ course_id:courses.courseList.find(course=>course.name===data.course).id,employee_id: item.employee_id, grade: editGrade.value });
    if (result.code && result.code === 200) {
        showModalResponse.value = true;
        modalResponse.value = '修改成功';
        // 可以在这里刷新学生列表数据，保持数据一致性
        await getCourseStudentList();
    } else {
        showModalResponse.value = true;
        modalResponse.value = '修改失败，请重试';
    }
    // 关闭弹窗
    showGradeEditModal.value = false;
}

onBeforeMount(() => {
    updataData();
});
</script>

<style lang="less" scoped>
// 改变选择器组件的默认样式
.selcart:deep(.select-wrap) {
    margin-right: 20px;
}
// 弹窗样式
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
}
</style>