new Vue({
    el:'#app',
    data:{
        persons:[
            {name:'sunny',sex:'woman',age:18,phone:'13588140000'},
            {name:'candy',sex:'man',age:20,phone:'13588140123'},
            {name:'tom',sex:'woman',age:28,phone:'13588141340'},
            {name:'sky',sex:'man',age:17,phone:'13588140789'},
            {name:'lily',sex:'woman',age:18,phone:'13588140770'}
        ],
        newPerson:{name:'',sex:'woman',age:0,phone:''}  //添加的对象
    },
    methods:{
        createPerson(){  //创建一条新记录
            if (this.newPerson.name === '') { //姓名不能为空
                alert('姓名不能为空');
                return;
            }
            if (this.newPerson.age <= 0){

                alert('请输入正确的年龄');
                return;
            }
            if (this.newPerson.phone === ''){  //手机号码不能为空
                alert('请输入正确的手机号码');
                return;
            }
            this.persons.unshift(this.newPerson);//往数组中添加一条记录
            this.newPerson = {name:'',sex:'woman',age:0,phone:''};  //清空数据

        },
        deletePerson(index){   //删除一条记录
            this.persons.splice(index,1);
        }

    }
})