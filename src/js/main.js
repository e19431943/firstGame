 var items = document.querySelectorAll('.item');
 var item2 = document.getElementsByClassName('item');
 console.log(items);
 console.log(item2);
 var obj={};
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
            item.innerHTML = obj[index].data;
            npc();
        }
        else{
            console.log("重複")
        }  
    });
 });

 function npc()
 {
     console.log(obj.state);
 }