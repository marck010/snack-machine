## snack-machine
Service to control a snack machine. 


- Dependencies 
  * Docker
  * Docker-Compose
  * npm
  
  Instal dependencies
    * To install dependencis execute script.
      >  ./instal-dependencies.sh
  
- Service    
 * To run the service run the command below.

      > sudo docker-compose up -build -d
   
      > The service will be start in port 8000
    
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
    
