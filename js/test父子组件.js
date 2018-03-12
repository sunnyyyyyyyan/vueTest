
//１．子组件构造器
    let Child1 = Vue.extend({
        template:  `<img src="img/test.jpg" width="200" >
        `
    });

    let Child2 = Vue.extend({
        template: `
            <p>sunny </p>
        `
    });

    Vue.component('child1',Child1);   //注册全局组件构造器

    //2.父组件构造器
    Vue.component('parent',{
        components:{
            'my-child1':Child1,
            'my-child2':Child2
        },
        template:`
            <div>
                <my-child1></my-child1>
                <my-child2></my-child2>
            </div>
        `
    });

    new Vue({
        el:'#app',
        data:{
            msg:'hello'
        }
    })