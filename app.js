new Vue({
    el:'#app',
    data:{
        greeting:'Hello World!!'
    },
    methods:{
        sayHello:function(){
            this.greeting='Hello App'
            return this.greeting
        }
    }

})