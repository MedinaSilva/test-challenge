// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

test( "Returns info about the user1", ()=> { 
    expect(getUser(1)).toStrictEqual({email: "sirious90@gmail.com", id: 1, password: "hArrydotCom", username: "hpLover4"}
    )   
})

test( "Returns info about the user 2", ()=> { 
    expect(getUser(2)).toStrictEqual({email: "parkerdapete@gmail.com", id: 2, password: "2D$aLzX9(_2", username: "piderman"}
    )   
})

test( "Returns info about the user3", ()=> { 
    expect(getUser(3)).toStrictEqual({email: "dotmeheart@outlook.com", id: 3, password: "12345abcde", username: "goosemotionless"}
    )   
})

test( "Returns info about the user4", ()=> { 
    expect(getUser(4)).toStrictEqual({email: "babariley77@gmail.com", id: 4, password: "Kashmir1970", username: "unsurejudy"}
    )   
})


// READ documentation