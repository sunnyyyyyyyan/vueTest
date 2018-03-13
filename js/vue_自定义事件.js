
Vue.component('my_btn',{
    template:'#my_btn',
    data(){
        return{
            count:0
        }
    },
    methods:{
        total(){
            this.count += 1;
            this.$emit('total');  //通知外界，我调用了这个方法
        }
    }
});


new Vue({
    el:'#app',
    data:{
        allCounter:0
    },
    methods:{
        allcount(){
            this.allCounter += 1;
        }
    }
})