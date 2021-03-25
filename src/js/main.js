 var items = document.querySelectorAll('.item');
 var item2 = document.getElementsByClassName('item');
 console.log(items);
 console.log(item2);
 var obj=[];
 var rundomTable=[0,1,2,3,4,5,6,7,8];
 var targetNum=-1;
 items.forEach(function(item,index)
 {
     obj[index]={
         index:index,
         state:false,
         data:""
     }  
    item.addEventListener('click',function()
    {
        if(obj[index].state ==false)
        {
            obj[index].data ="O";
            obj[index].state =true;
            item.innerHTML = obj[index].data;
            targetNum =index; //紀錄index 全域變數
            rundomTable = rundomTable.filter(arrayCheck);
            npc();
        }
        else{
            console.log("重複")
        }  
    });
 });
console.log(obj);
function arrayCheck(item,index)
{
    console.log(item);
    if(item !=  targetNum)
    {
        return true;
    }
    else
    {
        return false;
    }

}


 function npc()
 {
    rundomTable = rundomTable.sort(function()
    {
        return (0.5-Math.random());
    });
    obj[rundomTable[0]].data="X";
    obj[rundomTable[0]].state=true;
    items[rundomTable[0]].innerHTML = obj[rundomTable[0]].data;
    targetNum = rundomTable[0];
    rundomTable = rundomTable.filter(arrayCheck);
    console.log(rundomTable);
 }