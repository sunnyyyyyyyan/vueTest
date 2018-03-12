new Vue({
    el:'#app',
    data:{
        firstName:'lin',
        lastName:'junjie'
    },
    methods:{
      deal(){
          this.fullName = 'sunny ch';  //调用fullName的setter方法
      }
    },
    computed:{
        /*fullName(){     //方法计算属性里的get方法
            return this.firstName + ' ' + this.lastName;
        }*/

        fullName:{
            get(){
                return this.firstName + ' ' + this.lastName;
            },
            set(str){
                //alert(0);
                let nameArr = str.split(' ');
                this.firstName = nameArr[0];
                this.lastName = nameArr[1];
            }
        }
    }
})