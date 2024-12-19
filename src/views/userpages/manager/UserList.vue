<template>
    <div class="appmain">
        <div class="appcart userList-wrap">
            <h2 class="title">用户列表</h2>
            <table class="apptable">
                <tr>
                    <th>用户名</th>
                    <th>邮箱</th>
                    <th>工号</th>
                    <th>姓名</th>
                    <th>部门</th>
                    <th>职位</th>
                    <th>电话</th>
                    <th>角色</th>
                </tr>
                <tr v-show="data.userList.length == 0"><td class="nodata" colspan="6"> No Data </td></tr>
                <tr v-for="item in data.userList" :key="item.id">
                    <td>{{ item.username }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.department }}</td>
                    <td>{{ item.position }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.role }}</td>
                    
                    <td>
                        <i class="iconfont icon-shanchu" :class="{ 'bt-active': !item.isNecess }" @click="confirmDelete(item)"></i>
                    </td>
                </tr>
            </table>
        </div>

        <div class="appmask" v-show="data.maskShow">
            <div class="mesbox">
                <p class="title">确认删除</p>
                <i class="comfirm-bt" @click="deleteUser()">确认</i>
                <i class="cancel-bt" @click="data.maskShow = false">取消</i>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, reactive } from "vue";
import { getUsers,redeleteUser } from "@/api/user.js";
import { useRouter } from "vue-router";
import Bus from "@/utils/bus";

const router = useRouter();

const data = reactive({
    userList: [],
    maskShow: false,
    toBeCancel: null,
});

//获取课程数据
async function updataData() {
    const result = await getUsers();
    if (result.code && result.code == 200) {
        data.userList = result.data;
    } else console.log("err", result);
}

//取消确认
function confirmDelete(item) {
    if (item.isNecess) {
        Bus.$emit("popMes", { type: "tip", text: "必修课程不可取消" });
        return;
    }
    data.maskShow = true;
    data.toBeCancel = item.username;
}
//删除用户
async function deleteUser() {
    const result = await redeleteUser({
        username: data.toBeCancel,
    });
    data.toBeCancel = null;
    data.maskShow = false;
    if (result.code && result.code == 200) {
        Bus.$emit("popMes", { type: "success", text: "用户删除成功" });
        updataData();
    } else console.log("err", result);
}

onBeforeMount(() => {
    updataData();
});
</script>

<style lang="less" scoped>
.userList-wrap {
    .title {
        color: rgb(148, 148, 148);
        font-size: calc(@baseSize * 1.2);
        font-weight: bolder;
        width: 180px;
        margin: auto;
        margin-bottom: 16px;
    }

    .selbt {
        padding: 10px 20px;
        background-color: @theme-main-color1;
        color: white;
        font-size: calc(@baseSize * 1.2);
        border: 0px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: @theme-main-color2;
        }
    }
}

.icon-shanchu {
    display: inline-block;
    color: white;
    font-size: 14px;
    background-color: rgb(185, 185, 185);
    padding: 6px 16px;
    border-radius: 4px;
}
.bt-active {
    background-color: rgb(218, 100, 100);
    cursor: pointer;
    &:hover {
        background-color: rgb(204, 139, 139);
    }
}

.apptable {
    tr:hover {
        background-color: rgb(241, 241, 241);
    }
}
</style>
