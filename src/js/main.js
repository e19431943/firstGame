 var items = document.querySelectorAll('.item');
 var item2 = document.getElementsByClassName('item');
 const row =[[0,1,2],[3,4,5],[6,7,8]];
 const col =[[0,3,6],[1,4,7],[2,5,8]];
 const tilted =[[0,4,8],[2,4,6]];
 var npcFlag = false;;
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
            npcFlag =true;
            npc();
        }
        else{
            console.log("重複")
        }  
    });
 });


function arrayCheck(item,index)
{
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
    /*row判斷 */
    rowCheck();
    
    
    //*隨機區 */
    if(false)
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
        console.log(row.length);
    }
 }

 function rowCheck()/*row判斷 */
 {
     if(npcFlag == false){ return 0}
     for(let i=0 ;i<row.length;i++)
     {
        let rowNum =0;
        for(let j = 0 ;j<row[i].length ; j++)
        {
            if(obj[row[i][j]].data == "O"){
                rowNum++;
            }
            else if(obj[row[i][j]].data == "X")
            {
                rowNum--;
            }
            else
            {
                rowNum=rowNum+0;
            }
        }
        if(rowNum == -2)
        {  
            row[i].forEach(function(num)
            {
                console.log(obj[num].state);
               if(obj[num].data == "")
               {
                   obj[num].data ="X";
                   obj[num].state = true;
                   targetNum =obj[num].index;
                   items[obj[num].index].innerHTML = "X";
                   rundomTable = rundomTable.filter(arrayCheck);
                   npcFlag =false;
               }
            });
            return ;
        }else if(rowNum == 2)
        {
            row[i].forEach(function(num)
            {
                console.log(obj[num].state);
               if(obj[num].data == "")
               {
                   obj[num].data ="X";
                   obj[num].state = true;
                   targetNum =obj[num].index;
                   items[obj[num].index].innerHTML = "X";
                   rundomTable = rundomTable.filter(arrayCheck);
                   npcFlag =false;
               }
            });
            console.log("repkdd");
            return ;
        }
    }
    colCheck();
 }
 function colCheck()/*col判斷 */
 {
    if(npcFlag == false){ return 0}
     for(let i=0 ;i<col.length;i++)
     {
        let colNum =0;
        for(let j = 0 ;j<col[i].length ; j++)
        {
            if(obj[col[i][j]].data == "O"){
                colNum++;
            }
            else if(obj[col[i][j]].data == "X")
            {
                colNum--;
            }
            else
            {
                colNum=colNum+0;
            }
        }
        if(colNum == -2)
        {  
            
            col[i].forEach(function(num)
            {
                console.log(obj[num].state);
               if(obj[num].data == "")
               {
                   obj[num].data ="X";
                   obj[num].state = true;
                   targetNum =obj[num].index;
                   items[obj[num].index].innerHTML = "X";
                   rundomTable = rundomTable.filter(arrayCheck);
                   npcFlag =false;
               }
            });
            return;
        }
        else if(colNum == 2)
        {  
            
            col[i].forEach(function(num)
            {
                console.log(obj[num].state);
               if(obj[num].data == "")
               {
                   obj[num].data ="X";
                   obj[num].state = true;
                   targetNum =obj[num].index;
                   items[obj[num].index].innerHTML = "X";
                   rundomTable = rundomTable.filter(arrayCheck);
                   npcFlag =false;
               }
            });
            return;
        }
    }
    
    tiltedCheck();
 }
 function tiltedCheck()/*tilted 判斷 */
 {
    if(npcFlag == false){ return 0}
     for(let i=0 ;i<tilted.length;i++)
     {
        let tiltedNum =0;
        for(let j = 0 ;j<tilted[i].length ; j++)
        {
            if(obj[tilted[i][j]].data == "O"){
                tiltedNum++;
            }
            else if(obj[tilted[i][j]].data == "X")
            {
                tiltedNum--;
            }
            else
            {
                tiltedNum=tiltedNum+0;
            }
        }
        if(tiltedNum == -2)
        {  
            
            tilted[i].forEach(function(num)
            {
                console.log(obj[num].state);
               if(obj[num].data == "")
               {
                   obj[num].data ="X";
                   obj[num].state = true;
                   targetNum =obj[num].index;
                   items[obj[num].index].innerHTML = "X";
                   rundomTable = rundomTable.filter(arrayCheck);
                   npcFlag =false;
               }
            });
            return;
        }
        if(tiltedNum == 2)
        {  
            
            tilted[i].forEach(function(num)
            {
                console.log(obj[num].state);
               if(obj[num].data == "")
               {
                   obj[num].data ="X";
                   obj[num].state = true;
                   targetNum =obj[num].index;
                   items[obj[num].index].innerHTML = "X";
                   rundomTable = rundomTable.filter(arrayCheck);
                   npcFlag =false;
               }
            });
            return;
        }
    }
    runCheck();
 }
 function runCheck()//*隨機區 */
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
        console.log(row.length);
}