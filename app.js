new Vue({
    el:'#app',
    data:{
        title:'Hello World!!'
    },
    methods:{
        sayHello:function(){
            this.title='Hello App'
            return this.title
        }
    }

})