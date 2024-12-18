<template>
    <div class="appmain">
        <!-- 个人介绍 -->
        <div class="app-blockdiv intro-wrap">
            <div class="appcart intro-cart">
                <div class="portrait-wrap">
                    <img src="@/assets/imgs/head_portrait.jpg" />
                </div>
                <h2 class="username">{{ userStore.username }}</h2>
                <p class="brief-intro">保持好奇与思考,不拘泥于表象</p>
                <div class="github"><i class="iconfont icon-github-fill"></i> <a href="https://github.com/heichiii"
                        target="_blank">Github</a></div>
                <div class="detail-area">
                    <p> <span>用户名：{{ userStore.username }}</span> </p>
                    <p> <span>姓名：{{ userStore.name }}</span> </p>
                    <p> <span>工号：{{ userStore.id }}</span> </p>
                    <p> <span>部门：{{ userStore.department }}</span> </p>
                    <p> <span>职务：{{ userStore.position }}</span> </p>
                    <p> <span>电话：{{ userStore.phone }}</span> </p>
                    <p> <span>邮箱：{{ userStore.email }}</span> </p>
                    <p> <span>角色：{{ userStore.role }}</span> </p>
                    <p class="tagp">个性标签</p>
                    <div class="tag-wrap">
                        <span class="tag">认真</span>
                        <span class="tag">爱好学习</span>
                        <span class="tag">摄影</span>
                        <span class="tag">运动</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from "@/store";
import { reactive, onBeforeMount } from "vue";
import { reLogHistory } from "@/api/common.js";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
const data = reactive({
    historyList: null,
});

//获取登录历史
async function getHistory(page = 1) {
    const result = await reLogHistory(page);
    if (result.code && result.code === 200) {
        data.historyList = result.data.logHistoryList;
    } else {
        console.log("err!");
    }
}

onBeforeMount(() => {
    getHistory(1);
});
</script>

<style lang="less" scoped>
.intro-wrap {
    width: 100%;
    align-items: flex-start;
    flex: 0 0 auto;

    .intro-cart {
        display: flex;
        flex-direction: column;
        align-items: center;

        .portrait-wrap {
            width: 15%;
            border-radius: 50%;
            overflow: hidden;
            margin: 12px;

            img {
                width: 100%;
            }
        }

        .username {
            font-weight: bolder;
            font-size: calc(@baseSize * 1.4);
        }

        .brief-intro {
            color: rgb(170, 170, 170);
            margin: 6px;
        }

        .github {
            display: flex;
            align-items: center;
            border-radius: 999em;
            background-color: @theme-main-color1;
            color: white;
            padding: 2px 16px;
            margin: 8px;
            cursor: pointer;

            &:hover {
                background-color: @theme-main-color2;
            }

            i {
                font-size: 22px;
            }

            a {
                margin-left: 8px;
                font-size: @baseSize;
                text-decoration: none;
                color: white;
            }
        }

        .detail-area {
            width: 85%;
            margin: 20px;

            p {
                color: rgb(51, 51, 51);
                font-size: @baseSize;
                margin: 8px 0px;

                i {
                    font-size: calc(@baseSize * 1.1);
                    margin-right: 4px;
                    font-weight: bolder;
                }
            }

            .tagp {
                border-top: 1px solid rgb(211, 211, 211);
                margin-top: 12px;
                padding: 12px 0px;
                font-weight: bolder;
            }

            .tag-wrap {
                .tag {
                    background-color: rgb(236, 245, 255);
                    color: rgb(107, 172, 247);
                    border: 1px solid rgb(193, 211, 233);
                    font-size: @baseSize;
                    margin-right: 8px;
                    padding: 2px 6px;
                }
            }
        }
    }
}

.info-wrap {
    width: 70%;
    align-items: flex-start;
    flex-direction: row;

    .top {
        width: 20%;
        height: 80px;
        flex: 1 0 auto;
        position: relative;
        padding: 12px 8px;

        .icon-wrap {
            display: inline-block;
            width: 40px;
            height: 40px;
            line-height: 40px;
            border-radius: 50%;
            background-color: grey;
            text-align: center;
            color: white;
            box-shadow: 0px 0px 5px 5px rgba(212, 162, 162, 0.2);

            i {
                font-size: 22px;
            }
        }

        .phone {
            background-color: rgb(197, 148, 202);
            box-shadow: 0px 0px 5px 5px rgba(182, 151, 201, 0.3);
        }

        .email {
            background-color: rgb(109, 166, 219);
            box-shadow: 0px 0px 5px 5px rgba(109, 166, 219, 0.3);
        }

        .weixin {
            background-color: rgb(128, 207, 181);
            box-shadow: 0px 0px 5px 5px rgba(133, 218, 190, 0.3);
        }

        .qq {
            background-color: rgb(241, 176, 122);
            box-shadow: 0px 0px 5px 5px rgba(241, 176, 122, 0.3);
        }

        .bind-text {
            display: inline-block;
            margin-left: 16px;
            height: 40px;
            vertical-align: bottom;

            h3 {
                margin-top: 2px;
                font-weight: bolder;
            }

            p {
                margin-top: 3px;
                color: rgb(180, 180, 180);
            }
        }

        .change-bt {
            position: absolute;
            bottom: 8%;
            right: 5%;
            font-size: calc(@baseSize * 0.9);
            color: white;
            padding: 6px 12px;
            border: 0;
            border-radius: 5px;
            box-shadow: 0px 0px 0px 0px;
            cursor: pointer;
        }
    }

    .login-history-wrap {
        width: 100%;

        .icon {
            display: inline-block;
            height: 20px;
            line-height: 20px;
            font-size: 20px;
            padding-right: 4px;
            color: rgb(49, 49, 49);
        }

        .block-header {
            padding-bottom: 12px;
            margin-bottom: 12px;
            border-bottom: 1px solid rgb(204, 204, 204);
            font-size: calc(@baseSize * 1.2);
            font-weight: bolder;
            color: rgb(100, 100, 100);
            position: relative;

            span.more {
                position: absolute;
                right: 2%;
                bottom: 12px;
                font-size: calc(@baseSize * 0.9);
                font-weight: normal;
                cursor: pointer;
                color: rgb(156, 156, 156);

                &:hover {
                    color: @theme-main-color2;
                }
            }
        }

        .login-history {
            outline: 0;

            th,
            td {
                outline: 0;
                border-bottom: 1px solid rgb(226, 226, 226);
            }

            tr:hover {
                background-color: rgb(241, 241, 241);
            }
        }
    }
}
</style>
