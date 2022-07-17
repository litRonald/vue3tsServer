<template>
    <div>
    </div>
</template>
<script lang="ts" setup>

import { mount, shallowMount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'

const Test = defineComponent({
  name: 'Test',
  setup() {
    return () => h('span', '123')
  },
})

const HelloWorld = defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(props) {
    return () => {
      return h('div', [h(Test)])
    }
  },
})

//  安装sass时出现以下问题 需要注意
// vue-jest@3.0.7" has incorrect peer dependency "vue@^2.x".

//  Cannot read properties of null (reading 'package')

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', async () => {
    const msg = 'new message'
    const swrapper = shallowMount(HelloWorld as any)
    const wrapper = mount(HelloWorld)
    const ss = swrapper.find('span') 
    const s = wrapper.find('span') //查找节点
    //查找组件
    const helloWorld = wrapper.findComponent({
      name: 'HelloWrold',
    })

    //2函数的区别
    console.log('1111', ss) //shallowMount 不会渲染子组件，所以找不到span标签
    console.log('2222', s) //mount 会渲染子组件，所以找到了span标签
    //注意：shallowMount会执行子组件Test，但不会渲染，不会执行return
    expect(wrapper.text()).toEqual(msg)
  })
})
</script>