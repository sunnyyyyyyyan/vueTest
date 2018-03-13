
//1.子组件的实例
let Child1 = Vue.extend({
    template:'#my-img',
    props:['imgsrc']
});

let Child2 = Vue.extend({
    template:'#my-title',
    props:['title']
});

//2.父组件的注册
Vue.component('my-parent',{
    props:['imgsrc','imgtitle'],
    components:{
        'child1':'Child1',
        'child2':'Child2'
    },
    template:'#my-parent'
})


new Vue({
    el:'#app',
    data:{
        title:'hello sunny2',
        img:'img/part-2.jpg'
    }
})