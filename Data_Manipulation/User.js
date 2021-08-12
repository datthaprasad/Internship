const fs=require('fs');
const chalk=require('chalk');

const addUser=(name,phone)=>{
    const users=loadUsers();

    if(!users.find((user)=>user.name===name)){
        users.push({
            name:name,
            phone:phone}
        )
        saveUsers(users);
        console.log(chalk.bgGreen("User added Succesfully"));

    }
    else{
        console.log(chalk.bgRed("User Already exist"));
    }

}

const removeUser=(name)=>{
    const users=loadUsers();
    const updatedUsers=users.filter((user)=>user.name===name);
    if(users.length>updatedUsers.length){
        console.log(chalk.bgGreen("User removed successfully"));
        saveUsers(updatedUsers);
    }
    else{
        console.log(chalk.bgRed('User remove unsuccesfull'));
    }

}

const listUsers=(name)=>{
    
    
    const users=loadUsers()
    if(users.length!=0){
        console.log(chalk.bgBlue.bold('Users List'));
        users.forEach(element => {
            console.log(chalk.blue('Name : '+element.name+" and Phone : "+element.phone ));
        });
    }

    else{
        console.log(chalk.bgRed.bold('Users List Empty'));
    }
}

const getUser=(name)=>{
    const users=loadUsers();
    const user=users.find((user)=>user.name===name);
    if(user){
        console.log(chalk.green.bold('Users is '+user.name+" And Phone number is "+user.phone));
    }
    else{
        console.log(chalk.red.bold('User not found'));
    }

}

const loadUsers=()=>{
    try{
        const usersBuffer=fs.readFileSync('users.json');
        const users=usersBuffer.toString();
        return JSON.parse(users);

    }
    catch(error){
        return [];
    }
}

const saveUsers=(users)=>{
    const data=JSON.stringify(users);
    fs.writeFileSync('users.json',data);
}

module.exports={
    addUser:addUser,
    removeUser:removeUser,
    listUsers:listUsers,
    getUser:getUser
}