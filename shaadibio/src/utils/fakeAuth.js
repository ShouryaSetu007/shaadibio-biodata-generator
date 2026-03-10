export const registerUser = (user)=>{
localStorage.setItem("user",JSON.stringify(user));
};

export const loginUser = (email,password)=>{

const user = JSON.parse(localStorage.getItem("user"));

if(user && user.email === email && user.password === password){
return true;
}

return false;

};