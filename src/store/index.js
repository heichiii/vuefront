import { defineStore } from 'pinia'
import { getToken,setToken } from '@/utils/token'
import { useRouter } from 'vue-router'
import {reUserInfo} from '@/api/common.js'

//存储用户的身份信息与拥有权限的路由
export const useUserStore=defineStore("user",{
    state:()=>{
        return {
            token:getToken(),
            role:"visitor",
            username:"visitor",
            phone:null,
            isLogin:false,
            userRoutes:[],

            id:null,
            name:null,
            department:null,
            position:null,
            email:null,
        }
    },
    actions:{
        async  updataUserInfo(){
            let info=await reUserInfo();
            if(info.code==200){
                this.role=info.data.role;
                this.username=info.data.username;
                this.phone=info.data.phone;
                this.isLogin=info.data.isLogin;

                this.id=info.data.id;
                this.name=info.data.name;
                this.department=info.data.department;
                this.position=info.data.position;
                this.email=info.data.email;

                return true;
            }
            else return false;
        },

        resetUserInfo(){
            this.role="visitor";
            this.username="visitor";
            this.phone=null;
            this.isLogin=false;
        },

        updataToken(token){
            setToken(token);
            this.token=token;
        },

        getUserRoutes(){
            const router = useRouter();
            const routes=router.getRoutes();
            let showMenu=[];
            routes.forEach(item => {
                if(!item.meta.hideInMenu&&item.path.match(/\//g).length==1)
                    if( !item.meta.limit || item.meta.limit.indexOf(this.role)!=-1)
                        showMenu.push(item);
            });
            this.userRoutes=showMenu;
        }
    }
})

//项目设置
export const useSetStore=defineStore("set",{
    state:()=>{
        return {
            siderbarThumbnail:false,
            setShow:false,
            siderLogoShow:true,
            tagViewsShow:true,
            fixNavbar:true,
        }
    },
})
