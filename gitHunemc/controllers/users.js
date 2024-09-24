import {v4 as uuidv4} from 'uuid';

let users=[];

export const getUsers=(req,res)=>{
    console.log(users);
    res.send(users);
}

export const createUser=(req,res)=>{
    const user=req.body;
    res.send(user);

    users.push({  ...user, id: uuidv4()  });
    res.send(`User with the name ${user.firstName} added to the dataBase`);
}

export const getUser= (req,res)=>{
    const {id}=req.params;

    const foundUser=users.find((user)=>user.id==id);

    res.send(foundUser);
}
export const deleteUser=(req,res)=>{
    const {id}=req.params;

    users= users.filter((user)=>user.id!==id);

    res.send(`User with the ${id} is deleted`)
}
export const patchUser=(req,res)=>{
    const {id}=req.params;
    const user= users.find((user)=>user.id==id);

    const {firstName,lastName,age}=req.body;

    if(firstName){user.firstName=firstName;}
    if(lastName){user.lastName=lastName;}
    if(age){user.age=age; }

    res.send(`User with the id ${id} has been updated`)
}