new Vue({
    el:'#app',
    data:{
        greeting:'Hello World From VueJs!!',
        link:'https://ingjaimearriola.blogspot.com/',
        dynamicText:"Input a text",
        image:"JaimeArriola.jpg"
    },
    methods:{
        sayHello:function(){
            this.greeting='Hello App'
            return this.greeting
        },
        renderLink:function(){
            return '<a href="https://github.com/ing-arriola">Check My Github Profile</a>'
        },
        changeText:function(e){
            this.dynamicText=e.target.value
        }
    }

})