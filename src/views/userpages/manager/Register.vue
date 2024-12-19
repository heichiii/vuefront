<template>
    <div class="course-create-container">
        <div class="form-header">
            <h2>添加用户</h2>
        </div>
        <form @submit.prevent="addUser">
            <div class="form-group">
                <label for="username">用户名</label>
                <input id="username" v-model="userForm.username" type="text" placeholder="请输入用户名">
            </div>
            <div class="form-group">
                <label for="password">密码</label>
                <input id="password" v-model="userForm.password" type="text" placeholder="请输入密码">
            </div>
            <div class="form-group">
                <label for="email">邮箱</label>
                <input id="email" v-model="userForm.email" type="text" placeholder="请输入课程日期">
            </div>
            <div class="form-group">
                <label for="id">工号</label>
                <input id="id" v-model="userForm.id" type="text" placeholder="请输入内容链接">
            </div>
            <div class="form-group">
                <label for="name">姓名</label>
                <input id="name" v-model="userForm.name" type="text" placeholder="请输入部门">
            </div>
            <div class="form-group">
                <label for="department">部门</label>
                <input id="department" v-model="userForm.department" type="text" placeholder="请输入部门">
            </div>
            <div class="form-group">
                <label for="position">职位</label>
                <input id="position" v-model="userForm.position" type="text" placeholder="请输入部门">
            </div>
            <div class="form-group">
                <label for="phone">电话</label>
                <input id="phone" v-model="userForm.phone" type="text" placeholder="请输入部门">
            </div>
            <div class="form-group">
                <label for="role">角色</label>
                <input id="role" v-model="userForm.role" type="text" placeholder="请输入部门">
            </div>
            <button type="submit">提交</button>
        </form>
        <div v-if="message" :class="['message', message.type]">{{ message.text }}</div>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { register } from '@/api/user';

export default {
    setup() {
        const userForm = ref({
            username: '',
            password: '',
            email: '',
            id: '',
            name: '',
            department: '',
            position: '',
            phone: '',
            role: ''
        });

        const addUser = async () => {
            const token = 'your_token_here';
            const result = await register(userForm.value);
            if (result.code && result.code === 200) {
                console.log("success", result);
                alert("用户添加成功！");
                userForm.value = {
                    username: '',
                    password: '',
                    email: '',
                    id: '',
                    name: '',
                    department: '',
                    position: '',
                    phone: '',
                    role: ''
                };
            } else console.log("err", result);

        };

        return {
            userForm,
            addUser,
        };
    }
};
</script>

<style scoped>
body {
    background-color: #f5f5f5;
    font-family: 'Arial', sans-serif;
}

.course-create-container {
    width: 600px;
    margin: 50px auto;
    padding: 40px;
    border: 1px solid #e4e7ed;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    text-align: left;
}

.form-header {
    text-align: center;
    margin-bottom: 30px;
}

.form-header h2 {
    color: #409EFF;
    margin: 0;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
}

input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s ease;
}

input:focus {
    border-color: #409EFF;
    outline: none;
}

button {
    background-color: #409EFF;
    color: #fff;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    width: 100%;
}

button:hover {
    background-color: #3a8ee6;
}

.message {
    margin-top: 20px;
    padding: 15px;
    border-radius: 5px;
    font-size: 16px;
}

.message.success {
    background-color: #67C23A;
    color: #fff;
}

.message.error {
    background-color: #F56C6C;
    color: #fff;
}
</style>