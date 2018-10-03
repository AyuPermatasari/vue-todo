var app = new Vue({
    el: '#app',
    data: {
        value: '',
        list:[],
        
    },
    methods : {
        add: function(){
            if(this.value==''){
                alert("todo can't empty")
            } else{
                this.list.push(this.value)
                this.value=''
            }
            
        },
        del(index){
            const conf =confirm('Are you sure to delete this?')
            if(conf == true ){
                this.list.splice(index,1)
            }
            
        }
    },
    
        
})
  