<template>
    <div>
      <h2>用户信息修改</h2>
      <form>
        <label for="username">用户名：</label>
        <input type="text" id="username" v-model="profile.username" />
        <br />
        <label for="email">邮箱：</label>
        <input type="email" id="email" v-model="profile.email" />
        <br />
        <label for="id">编号：</label>
        <input type="text" id="id" v-model="profile.id" />
        <br />
        <label for="name">姓名：</label>
        <input type="text" id="name" v-model="profile.name" />
        <br />
        <label for="department">部门：</label>
        <input type="text" id="department" v-model="profile.department" />
        <br />
        <label for="position">职位：</label>
        <input type="text" id="position" v-model="profile.position" />
        <br />
        <label for="phone">电话：</label>
        <input type="text" id="phone" v-model="profile.phone" />
        <br />
        <label for="role">角色：</label>
        <input type="text" id="role" v-model="profile.role" />
        <br />
        <button @click="updateProfile">提交</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, reactive, defineComponent } from "vue";
  import axios from 'axios';
  import { useUserStore } from "@/store";
  import { changeUserInfo } from '@/api/common';
  
  export default defineComponent({
    setup() {
      const userStore = useUserStore();
      const profile = reactive({
        username: userStore.username,
        email: userStore.email,
        id: userStore.id,
        name: userStore.name,
        department: userStore.department,
        position: userStore.position,
        phone: userStore.phone,
        role: userStore.role,
      });
  
      async function updateProfile() {
        const params = {...profile };
        const result = await changeUserInfo(params);
        if (result.code && result.code === 200) {
          await userStore.updataUserInfo();
          alert('更新用户信息成功');
        } else {
          alert('更新用户信息失败，请稍后再试');
        }
      }
  
      return {
        profile,
        updateProfile
      }
    }
  });
  </script>
  
  <style scoped>
  form {
    width: 300px;
    margin: 0 auto;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    margin-bottom: 10px;
    padding: 5px;
  }
  button {
    padding: 8px 15px;
  }
  </style>