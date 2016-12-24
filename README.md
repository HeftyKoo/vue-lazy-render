# vue-lazy-render

[![GitHub issues](https://img.shields.io/github/issues/yeyuqiudeng/vue-lazy-render.svg)](https://github.com/yeyuqiudeng/vue-lazy-render/issues)
[![GitHub forks](https://img.shields.io/github/forks/yeyuqiudeng/vue-lazy-render.svg)](https://github.com/yeyuqiudeng/vue-lazy-render/network)
[![GitHub stars](https://img.shields.io/github/stars/yeyuqiudeng/vue-lazy-render.svg)](https://github.com/yeyuqiudeng/vue-lazy-render/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/yeyuqiudeng/vue-lazy-render.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

[![NPM](https://nodei.co/npm/vue-lazy-render.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-lazy-render/)

## Description

A vue component for vue component lazy rending.

Vue组件,用于Vue组件的延迟渲染,改善初次进入页面或者数据量较大的页面操作时出现卡顿的情况

## Installation

    npm install vue-lazy-render
   
## Usage

    import LazyRender from 'vue-lazy-render'
    Vue.use(LazyRender)

## Props

| property      | description   | type  | default |required|
| ------------- |:-------------:|:-----:|:-------:|-------:|
|time|多长时间后开始渲染组件|Number|10|false|
|immediately|是否立即开启延迟渲染,vue-lazy-render组件会在路由切换时,会进行一次延迟渲染,如果在同一个路由中需经常对某个组件进行延迟渲染,可以将immediately由false设为true,就会马上开启一次延迟渲染|Boolean|--|false|
|data|如果需要延迟加载的组件是由数组渲染的,可以将数据的数据prop进vue-lazy-render组件,组件会根据配置监测数组变化,决定开启延迟加载的时机|array|--|false|
|trackByData|是否根据data的变化来开启延迟加载,如果设为true,需将data prop进来,并且路由切换时不会再进行延迟渲染|Boolean|--|false|
|limit|在数据超过多少后才开启延迟渲染,需要data和将trackByData设为true|Boolean|--|false|
|maskClass|等待渲染时的遮罩层样式|String|--|false|
|tip|等待渲染时的提示文字|String|--|false|

## Example

### 基础用法
    <lazy-render>
        <my-component></my-component>
    </lazy-render>

### trackByData
    <lazy-render :data="myArray" :time="300" :limit="50" track-by-data>
        <my-component :data="myArray"></my-component>
    </lazy-render>


