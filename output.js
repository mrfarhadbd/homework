function output(){
//input value
var name=document.getElementById('farhad').value;
//creat text node 
var node=document.createTextNode(name);
//creat element in div 
var h=document.createElement('h2');
//append node in element
h.appendChild(node);
//get perent by div id
var publish=document.getElementById('publish')
//append element
publish.appendChild(h)
//null value for clear history
document.getElementById('farhad').value = '';
}