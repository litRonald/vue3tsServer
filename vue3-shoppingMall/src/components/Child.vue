<template>
<div>
    <div style="border-top: 1px solid #adfadd">
        child
    </div>
    <p>msg:{{msg}}</p>
    
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Child',
    props: ['msg'],

    beforeCreate() {
        console.log('beforeCreate')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    
    // 界面渲染
    mounted() {},
    // setup 细节问题：
    // setup 实在 beforeCreate之前执行的 组件为创建出来之前就已经出现了
    // this 是underfined 
    // 组合式api 都不能用
    setup(props) {
        console.log('setup')
        return {

        }
    }
})
</script>