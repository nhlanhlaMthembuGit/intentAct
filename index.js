var jsonFile = require('jsonfile')

var fileName = 'intent.json'




function getIntentAction(intentAction)
{
    
    // getMenuItem('R10')
    //Loop through the Menu Options/intent actions
    jsonFile.readFile(fileName, function(err, jsonData) {

        // console.log(jsonData.intent.length);

       if(intentAction=='Airtime')
       {

            console.log("");
            console.log(intentAction);
            for(let i = 0; i<jsonData.intent[0].sub_menu.length ; i++ )
            {
                    console.log(jsonData.intent[0].sub_menu[i]);

            }

       }else if(intentAction =='Data')
       {
           for(let i = 0; i< jsonData.intent[1].sub_menu.length; i++)
           {
            if(jsonData.intent[1].sub_menu[i]=='RushHour')
            {
                 
                    console.log("");
                    console.log(jsonData.intent[1].sub_menu[i]);
                   for(let x = 0; x< jsonData.intent[1].RushHour.length; x++)
                   {
                    console.log(jsonData.intent[1].RushHour[x]);

                   }

            }else if(jsonData.intent[1].sub_menu[i]=='Daily')
            {
                console.log("");
                console.log(jsonData.intent[1].sub_menu[i]);
               for(let x = 0; x< jsonData.intent[1].Daily.length; x++)
               {
                console.log(jsonData.intent[1].Daily[x]);

               }

            }else if(jsonData.intent[1].sub_menu[i]=='Weekly')
            {

                console.log("");
                console.log(jsonData.intent[1].sub_menu[i]);
               for(let x = 0; x< jsonData.intent[1].Weekly.length; x++)
               {
                console.log(jsonData.intent[1].Weekly[x]);

               }
            }else if(jsonData.intent[1].sub_menu[i]=='Monthly')
            {

                console.log("");
                console.log(jsonData.intent[1].sub_menu[i]);
               for(let x = 0; x< jsonData.intent[1].Monthly.length; x++)
               {
                console.log(jsonData.intent[1].Monthly[x]);

               }

            }

           }


       }else if(intentAction =='Social Bundles')
       {
           
        for(let i = 0; i< jsonData.intent[2].sub_menu.length; i++)
        {
         if(jsonData.intent[1].sub_menu[i]=='Youtube')
         {
              
                 console.log("");
                 console.log(jsonData.intent[2].sub_menu[i]);
                for(let x = 0; x< jsonData.intent[1].Youtube.length; x++)
                {
                 console.log(jsonData.intent[2].Youtube[x]);

                }

         }else if(jsonData.intent[2].sub_menu[i]=='WhatsApp')
         {


             
             console.log("");
             console.log(jsonData.intent[2].sub_menu[i]);
            for(let x = 0; x< jsonData.intent[2].WhatsApp.length; x++)
            {
             console.log(jsonData.intent[2].WhatsApp[x]);

            }

         }else if(jsonData.intent[2].sub_menu[i]=='Twitter')
         {

             console.log("");
             console.log(jsonData.intent[2].sub_menu[i]);
            for(let x = 0; x< jsonData.intent[2].Twitter.length; x++)
            {
             console.log(jsonData.intent[2].Twitter[x]);

            }


         }else if(jsonData.intent[2].sub_menu[i]=='Facebook')
         {

             console.log("");
             console.log(jsonData.intent[2].sub_menu[i]);
            for(let x = 0; x< jsonData.intent[2].Facebook.length; x++)
            {
             console.log(jsonData.intent[2].Facebook[x]);

            }


         }

        }



       }else if(intentAction=='Call center')
       {

            console.log("");
            console.log(intentAction);
            for(let i =0; i<jsonData.intent[3].sub_menu.length ; i++ )
            {
                    console.log(jsonData.intent[3].sub_menu[i]);

            }

       }


  
    });

   
}
getIntentAction("Airtime");

//Test Function====


function getMenuItem(menuItems, callBackData)
    {

        console.log("hhdhdhdh");
        jsonFile.readFile(fileName, function(jsonData){


            if(menuItems == 'RushHour')
            {

                if(callBackData == 'dataRushHourR2' || callBackData == 'dataRushHourR5' || callBackData == 'dataRushHourR12'|| callBackData == 'dataRushHourR30')
                {
                    console.log(jsonData.menuItems);
                }
            }
            else if(menuItems == 'Daily')
            {
                if(callBackData == 'dailyR2' || callBackData == 'dailyR5' || callBackData == 'dailyR12'|| callBackData == 'dailyR30')
                {
                    console.log(jsonData.menuItems);
                }
            }   
        //     for(let i = 0; i< jsonData.sub_menu.length;i++)
        //     {
                
        //         console.log(jsonData);
        //         if(jsonData.intent[1].sub_menu[i]== menuItems)
        //     {

        //            console.log("");
        //             console.log(jsonData.intent[1].sub_menu[i]);
        //            for(let x = 0; x< jsonData.intent[1].RushHour.length; x++)
        //            {
        //             console.log(jsonData.intent[1].RushHour[x]);

        //            }
        //     }
        // }
                
                

            
            
        })
    }
    getMenuItem('RushHour')

