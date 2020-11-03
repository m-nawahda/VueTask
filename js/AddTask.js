
var vm = new Vue({
    el:'#root',
    data:{
        currentName:'',
        selectedTask:null,
        tasks:[
          
        ]
    },
    methods:{
        addNewTask () {
            if(this.currentName=="")return
            this.tasks.push({
                taskName:this.currentName,
            })
            this.currentName='';  
        },
        clearField () {
            this.currentName='';
        },
        evaluateColor(index){
            return  {
                backgroundColor: `rgba(${255},${0},${0},${0.7-index/this.tasks.length})`
            }
        },
        increasePriority (task,index) {
            var nextIndex = Math.min( this.tasks.length, ( index + 1 ) );
            this.tasks.splice( index, 1 );
            this.tasks.splice( nextIndex, 0, task );
            this.selectedTask = task;
        },
        decreasePriority (task,index) {
            var nextIndex = Math.max( 0, ( index - 1 ) );
            this.tasks.splice( index, 1 );
            this.tasks.splice( nextIndex, 0, task );
            this.selectedTask = task;
        },
        

    }
})
