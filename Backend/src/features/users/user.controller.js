import { loginUser, registerUser } from "./user.repository.js";
import {amadeusAuth} from '../../utils/auth.config.js'

export const userRegister = async(req, res) =>{
    const resp = await registerUser(req.body);
    if (resp.success){
        res.status(201).json(resp);
    }
    else{
        res.status(400).json(res.err);
    }
    
}

export const userLogin = async(req, res) =>{
    const resp = await loginUser(req.body);
    if(resp.success){
        res.cookie('jwt_token', resp.token, {
            secure: true,
            sameSite: 'Strict',
            path: '/',
            maxAge: 30 * 60 * 1000
        })
        const auth_token = await amadeusAuth();
        if(auth_token.success){
        res.cookie('auth_token', auth_token.token, {
            secure: true,
            sameSite: 'Strict',
            path: '/',
            maxAge: 30 * 60 * 1000
        })
        res.status(200).json({success: true, msg:'user loggedin', res: resp.res, auth_token:auth_token.token, jwt_token:resp.token})
        }
        else res.status(404).json({success: false, msg: 'token failed to generate'});
    }
    else res.status(404).json({success: false, msg: resp.err});
}