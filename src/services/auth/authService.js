
const tokenKey = 'token'
const userKey = 'user'

function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userKey);
}

//  function getCurrentUser(){
//    try {
    
//     const jwt:string|null|any = getJWT()
//     const decodedToken:any = JWTDecode(jwt)
//     const date:Date = new Date();
//     const now:number = date.getTime()
//     const timeStamp:number=(Math.ceil(now/1000));
//     if (timeStamp > decodedToken.exp) return null;
//     else {
//       return decodedToken
//    }
//   } catch (error) {
//     return null
//   }
// }
 
 const setJWT= (token) =>{
  localStorage.setItem(tokenKey,token);
}
 const setUser= (user) =>{
  localStorage.setItem(userKey,user);
}
 
 
 
const getJWT =  () => {
   return localStorage.getItem(tokenKey)
 }
const getUser =  ()  => {
   return localStorage.getItem(userKey)
 }

 export const auth = {logout,setJWT,getJWT, setUser, getUser}
export default auth
