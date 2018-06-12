use snackMachine

db.getCollection('card').insert({ 
        'lastDateAccess': '', 
        'balance': '', 
        'active': true 
})
db.createUser( 
    { 
    user: 'user_database', 
    pwd: 'g6WzsDeDsb2trs56*', 
    roles: [ {role:'readWrite', db: 'user_database'}]  
    } 
) 