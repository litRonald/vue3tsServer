<template>
    <main>
        <div>
            <p> 账号 <input type="text" /></p>
            <p> 密码 <input type="password" name="" id="" /></p>
            <p>验证码 <input type="text" width="120px" /></p>
            <!-- <img src="@/assets/img/pc_BG.jpeg" alt=""> -->
        </div>
    </main>

</template>
<script lang="ts" setup>

</script>

<style lang="scss" scoped>
    main{
        height: 100vh;
        width: 100vw;
        background: url('~@/assets/img/login.jpg') no-repeat;
        // background:  url("~@/assets/img/pc_BG.jpeg") no-repeat;
       div{
            margin-top: 20vh;
        }
        
        p{
            text-align: center;
        }
    }
</style>