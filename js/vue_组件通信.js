
Vue.component('my-sunny',{
    template:'#my-sunny',
    props:['msg','imgsrc']   //驼峰式imgSrc会不显示出来，报错
});

new Vue({
    el:'#app'
})