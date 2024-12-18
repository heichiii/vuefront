<template>
    <div class="appmain">
        <!-- <div class="appcart">
            <SelectBlock atr="学期" describe="请选择" v-model="data.semester">
                <li>第一学期</li>
            </SelectBlock>
        </div> -->

        <div class="appcart courselist-wrap">
            <h2 class="title">发布的课程</h2>
            <table class="apptable">
                <tr>
                    <th>课程名称</th>
                    <th>课程号</th>
                    <th>开课日期</th>
                    <th>内容</th>
                    <th>选课人数</th>
                </tr>
                <tr v-show="data.courseList.length == 0">
                    <td class="nodata" colspan="6">No Data</td>
                </tr>
                <tr v-for="item in data.courseList" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.id }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.content_url }}</td>
                    <td>{{item.stcnt}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, reactive } from "vue";
import { getPublishedCourse, reSelectOrCancelCourse } from "@/api/user.js";
import SelectBlock from "@/components/SelectBlock.vue";
import Bus from "@/utils/bus";

const data = reactive({
    courseList: [],
    maskShow: false,
    toBeSelect: null,
});

//获取课程数据
async function updataData() {
    const result = await getPublishedCourse();
    if (result.code && result.code === 200) {
        data.courseList = result.data;
    } else console.log("err", result);
}


onBeforeMount(() => {
    updataData();
});
</script>

<style lang="less" scoped>
.courselist-wrap {
    .title {
        color: rgb(148, 148, 148);
        font-size: calc(@baseSize * 1.2);
        font-weight: bolder;
        width: 180px;
        margin: auto;
        margin-bottom: 16px;
    }
}

.icon-zengjia1 {
    display: inline-block;
    color: white;
    font-size: 20px;
    background-color: rgb(185, 185, 185);
    padding: 2px 12px;
    border-radius: 4px;
    cursor: pointer;
}
.bt-active {
    color: @theme-main-color1;
    background-color: white;
    outline: 1px solid @theme-main-color2;
    &:hover {
        background-color: @theme-main-color2;
        color: white;
    }
}

.apptable {
    tr:hover {
        background-color: rgb(241, 241, 241);
    }
}
</style>
