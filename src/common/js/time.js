export function timeHandle(endTime){
    let myDate = new Date()
    let curTime = myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate()
    let endTimeNum = new Date(endTime.replace(/\-/g, "\/")) 
    let curTimeNum = new Date(curTime.replace(/\-/g, "\/")) 
    if(endTime !='' && curTime !='' && endTimeNum >= curTimeNum){  
        return true
    }else{
        return false
    }  
}

