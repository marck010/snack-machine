## snack-machine
Service to control a snack machine. 


- Dependencies 
  * Docker
  * Docker-Compose
  * npm
  
     - To install dependencies in linux `Ubuntu` execute script.
          >  ./instal-dependencies.sh
  
- Service    
    * To run the service run the command below.
         > sudo docker-compose up -build -d    #The service will be start in port 8000
    
     * Routes

           POST: /buyProduct/
           body:	{
                 "product_id": string,
                 "card_number": string
                 }

           POST: /insertCard/
           body:	{
                   "card_number": string
                 }
     
     * Test
       - To execute unit test run command in root directory of repository
         > npm test
   
- Database
 
   * Pre-registrated data  

         product_id = "5b220e6b2b53778e5a868587",
         card_number = "001"
 
