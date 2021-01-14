export default {
    changeMsgSync(context){
        setTimeout(function(){
            context.commit('changeMsg')
        },3000)
    }
}