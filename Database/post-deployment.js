use snackMachine

db.getCollection('card').insert({ 
        'number':'001',
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