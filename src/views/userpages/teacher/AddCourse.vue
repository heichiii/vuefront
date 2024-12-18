<template>
    <div class="course-create-container">
      <div class="form-header">
        <h2>创建课程</h2>
      </div>
      <form @submit.prevent="publishCourse">
        <div class="form-group">
          <label for="id">课程ID</label>
          <input id="id" v-model="courseForm.id" type="text" placeholder="请输入课程ID">
        </div>
        <div class="form-group">
          <label for="name">课程名称</label>
          <input id="name" v-model="courseForm.name" type="text" placeholder="请输入课程名称">
        </div>
        <div class="form-group">
          <label for="date">课程日期</label>
          <input id="date" v-model="courseForm.date" type="text" placeholder="请输入课程日期">
        </div>
        <div class="form-group">
          <label for="content_url">内容链接</label>
          <input id="content_url" v-model="courseForm.content_url" type="text" placeholder="请输入内容链接">
        </div>
        <div class="form-group">
          <label for="department">部门</label>
          <input id="department" v-model="courseForm.department" type="text" placeholder="请输入部门">
        </div>
        <button type="submit">提交创建课程</button>
      </form>
      <div v-if="message" :class="['message', message.type]">{{ message.text }}</div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  import { addCourse } from '@/api/user';
  
  export default {
    setup() {
      const courseForm = ref({
        id: '',
        name: '',
        date: '',
        content_url: '',
        department: ''
      });
  
      const publishCourse = async () => {
        const token = 'your_token_here'; 
        const result = await addCourse(courseForm.value);
        if (result.code && result.code === 200) {
            console.log("success", result);
            alert("课程创建成功！");
            courseForm.value = {
                id: '',
                name: '',
                date: '',
                content_url: '',
                department: ''
            };
        } else console.log("err", result);
          
      };
  
      return {
        courseForm,
        publishCourse,
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