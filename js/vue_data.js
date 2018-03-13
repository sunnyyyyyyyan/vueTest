
let data = {
    count:0
};
//实例化组件
Vue.component('my-data',{
    template:'#my-data',
    data(){
        return data
    }
})

new Vue({
    el:'#app'
})