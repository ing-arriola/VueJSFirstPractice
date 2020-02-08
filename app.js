new Vue({
    el:'#app',
    data:{
        greeting:'Hello World!!',
        link:'https://ingjaimearriola.blogspot.com/'
    },
    methods:{
        sayHello:function(){
            this.greeting='Hello App'
            return this.greeting
        },
        renderLink:function(){
            return '<a href="https://github.com/ing-arriola">Check My Github Profile</a>'
        }
    }

})