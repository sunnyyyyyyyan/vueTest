new Vue({
    el:'#app',
    data:{
        name:'sunny chen'
    },
    methods:{
        reverseStr(){
            return this.name.split('').reverse().join('');
        }
    },

    //计算选项
    computed:{
        //get方法
        reverse(){
            return this.name.split('').reverse().join('');
        }
    }
})