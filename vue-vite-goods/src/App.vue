<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>

   <!-- <div>
      app 
      <p>msg:{{msg}}</p>
      <button @click="msg+=3123">更新</button>
    </div>
    <Child :msg='msg'/>

    -------------
    <div>count:{{count}}</div> -->
</template>

<script lang="ts">
// vue3.0
import { defineComponent, ref } from "vue";
// 引入child
// import Child from './components/Child.vue'
export default defineComponent({
  name: 'App',
  components: {
    // Child,
  },

  setup(props) {
    // 定义一个Ref 类型数据
    const msg = ref('who are you')
    return {
      msg,
    }
  },
  // data return 的属性 跟 setup 内部对象中的属性 都可以直接在html中的属性一起使用
  // setup data 的属性会合并成为组件的对象属性
  data () {
    return {
      count: 10
    }
  },
  // 渲染完成后的属性
  mounted() {
    console.log(this)
  }
})


</script>