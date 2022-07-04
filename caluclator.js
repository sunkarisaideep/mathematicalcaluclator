function pass(val)
{
    document.getElementById("show").value+=val;
}
function solve()
{
    x=document.getElementById("show").value;
    document.getElementById("show").value=eval(x);
}
function clr()
{
    document.getElementById("show").value=" ";
}
function back()
{
    x=document.getElementById("show").value
    x=x.slice(0,-1);
    document.getElementById("show").value=x;
}