//创建组件的构造器
/*
let Profile = Vue.extend({
    //1.1模板选项
    template:`
        <div>
              <input type="date">
              <p>hello sunny</p>
        </div>
    `
});

    //2.注册一个全局的组件
    Vue.component('my-data',Profile);
*/

Vue.component('my-data',{
    //1.1模板选项
    template:`
        <div>
              <input type="date">
              <p>hello sunny</p>
        </div>
    `
});


new Vue({
    el:'#app',
    data:{
        msg:'hello'
    }
})

new Vue({
    el:'#app1',
    data:{
        msg:'hello'
    }
})