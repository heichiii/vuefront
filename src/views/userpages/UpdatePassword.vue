<template>
    <div class="update-wrapper">
        <div class="update-cart">
            <p class="update-text">修改密码</p>

            <!-- 输入 -->
            <div class="input-wrapper">
                <input type="password" placeholder="请输入原密码" v-model="pswdata.current_password" ref="oldPasswordInput" />
                <i class="iconfont icon-hide icon" @click="changOldPasswordShow" ref="oldIconHide"></i>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="请输入新密码" v-model="pswdata.new_password" ref="newPasswordInput" />
                <i class="iconfont icon-hide icon" @click="changNewPasswordShow" ref="newIconHide"></i>
            </div>

            <button class="updatebt" @click="updateHandle">提 交</button>
            <!-- <p class="tip">账号:任意&nbsp;&nbsp;&nbsp;密码:任意</p> -->
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store";
import { changePassword } from "@/api/common.js";

const router = useRouter();
const userStore = useUserStore();

const oldPasswordInput = ref();
const newPasswordInput = ref();
const oldIconHide = ref();
const newIconHide = ref();

const pswdata = reactive({
    current_password: "",
    new_password: "",
});

// 改变原密码显示状态
function changOldPasswordShow() {
    oldPasswordInput.value.type = oldPasswordInput.value.type === "password"? "text" : "password";
    oldIconHide.value.className = oldIconHide.value.className.indexOf("icon-hide") > -1? "iconfont icon-browse icon" : "iconfont icon-hide icon";
}

// 改变新密码显示状态
function changNewPasswordShow() {
    newPasswordInput.value.type = newPasswordInput.value.type === "password"? "text" : "password";
    newIconHide.value.className = newIconHide.value.className.indexOf("icon-hide") > -1? "iconfont icon-browse icon" : "iconfont icon-hide icon";
}


// 处理登录请求
async function updateHandle() {
    const params = {...pswdata };
    const result = await changePassword(params);
    if (result.code && result.code === 200) {
        alert("修改成功");
    } else {
        alert("修改失败");
    }
}
</script>

<style lang="less" scoped>
.update-wrapper {
    background-image: url("@/assets/imgs/login_back.jpg");
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: relative;

   .update-cart {
        background-color: rgba(100, 100, 100, 0.25);
        backdrop-filter: blur(8px);
        width: 500px;
        height: 400px;
        box-shadow: 2px 2px 16px 2px rgba(39, 39, 39, 0.5);
        border-radius: 18px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

       .update-text {
            margin-top: 18px;
            line-height: 60px;
            text-align: center;
            color: rgb(255, 255, 255);
            font-size: 32px;
        }

       .input-wrapper {
            box-sizing: border-box;
            margin: 22px auto;
            background-color: rgba(255, 255, 255, 0.1);
            width: 400px;
            height: 50px;
            outline: 0.5px solid rgba(27, 182, 27, 0.3);
            border-radius: 5px;
            padding: 4px 12px;
            transition: 0.5s;
            text-align: left;
            display: flex;
            align-items: center;

           .icon {
                font-size: 24px;
                color: rgba(224, 224, 224, 0.5);
            }

           .icon-hide,
           .icon-browse {
                cursor: pointer;
            }

            input {
                display: inline-block;
                background-color: transparent;
                width: 100%;
                height: 100%;
                border: 0;
                color: white;
                font-size: 16px;
                padding: 4px 14px;

                &:focus-visible {
                    outline: 0;
                }
            }

            &:focus-within {
                outline: 0.5px solid rgb(142, 190, 138);
            }
        }

       .role-wrap {
            width: 400px;
            height: 30px;
            line-height: 30px;
            margin: -10px auto;
            text-align: left;

            input[type="radio"] {
                display: none;
            }
            input[type="radio"]:checked + label::after {
                position: absolute;
                content: "✔";
                font-size: 8px;
                left: -6px;
                color: rgb(142, 190, 138);
            }
            label {
                position: relative;
                color: white;
                font-size: 14px;
                margin-left: 8px;
                margin-right: 16px;
                &:before {
                    display: inline-block;
                    position: relative;
                    left: -8px;
                    top: 2px;
                    width: 14px;
                    height: 14px;
                    border: 1px solid rgba(236, 204, 204, 0.5);
                    border-radius: 4px;
                    content: "";
                    cursor: pointer;
                    box-sizing: border-box;
                }
            }
        }

       .updatebt {
            background-color: rgba(116, 185, 110, 0.9);
            border: 0;
            color: white;
            margin: 25px 10px;
            width: 400px;
            height: 50px;
            border-radius: 5px;
            font-size: 18px;
            padding: 4px 16px;
            cursor: pointer;

            &:hover {
                background-color: rgb(142, 190, 138);
            }
        }

       .tip {
            color: rgb(240, 240, 240);
            font-size: 12px;
            margin-left: 55px;
            text-align: left;
        }
    }
}
</style>