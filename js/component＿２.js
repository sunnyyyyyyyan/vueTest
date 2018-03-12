//创建组件的构造器
/*let Profile = Vue.extend({
    //1.1模板选项
    template:`
        <div>
              <input type="date">
              <p>hello sunny</p>
        </div>
    `
});*/
let Profile2 = Vue.extend({
    //1.1模板选项
    template:`
        <div>
              <input type="color">
              <p>color</p>
        </div>
    `
});

new Vue({
    el:'#app',
    data:{
        msg:'hello'
    },
    components:{        //注册局部组件
        'my-data2':{
            //1.1模板选项
            template:`
        <div>
              <input type="date">
              <p>hello sunny</p>
        </div>
    `
        },
        'my-color':Profile2
    }
})
new Vue({
    el:'#app1',
    data:{
        msg:'hello'
    },

})