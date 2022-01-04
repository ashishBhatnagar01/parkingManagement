export const getUserName=function(){
    const name=JSON.parse(localStorage.getItem("userData"))[1];
    return name;
}