import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import {userModel} from './user.schema.js'


export const registerUser = async(data)=>{
    try{
        data.password = await bcrypt.hash(data.password, 12);
        const newUser = new userModel(data)
        await newUser.save();
        if(newUser) return {success:true, res: newUser};
        else return {success: false, err: 'user email already exist.'}
    }
    catch(err){
        return {success: false, err};
    }
    
}

export const loginUser = async(data) =>{
    try{
        const {email, password} = data;
        const user = await userModel.findOne({email});
        if(!user) return {success: false, err:'user not found'}
        else{
            let user_Auth = await bcrypt.compare(password, user.password);
            if(user_Auth){
                const token = jwt.sign({_id: user._id}, 'UserAuthentication', {expiresIn: '30m'});
                return {success: true, res:user, token}
            }
            else{
                return{success: false, err: 'Password is incorrect'}
            }
        }
    }
    catch(err){
        return{success: false, err}
    }
};