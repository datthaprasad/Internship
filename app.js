//Simple project to read,add,remove and list users name and phone

const yargs=require('yargs');
const users=require('./Data_Manipulation/User');

//add users
yargs.command({
    command:"add",
    describe:"Add users",
    builder:{
        name:{
            describe:"Name of user",
            demandOption:true,
            type:"string"
        },
        phone:{
            describe:"Phone number",
            demandOption:true,
            type:"integer"
        }
    },
    handler(argv){
            users.addUser(argv.name,argv.phone);
    }
})

//remove users
yargs.command({
    command:"remove",
    describe:"Remove users",
    builder:{
        name:{
            describe:"Name of user",
            demandOption:true,
            type:"string"
        },
    },
    handler(argv){
            users.removeUser(argv.name);
    }
})

//List all the users
yargs.command({
    command:"list",
    describe:"List users",
    handler(argv){
            users.listUsers()
    }
})

//read/watch single user with his phone number
yargs.command({
    command:"watch",
    describe:"Watch users",
    builder:{
        name:{
            describe:"Name of user",
            demandOption:true,
            type:"string"
        },
    },
    handler(argv){
            users.getUser(argv.name)
;    }
})

yargs.parse()