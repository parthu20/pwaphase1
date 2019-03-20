function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  career(data.carrer);
  education1(data.education);
  skill(data.skill)
})
var main=document.querySelector('.main');
var left=document.querySelector('.left');
var right=document.querySelector('.right');
function profile(pro){
  var h=document.createElement('h1');
  h.textContent="Profile";
  left.appendChild(h);
  var hr=document.createElement('hr');
  left.appendChild(hr);
  var image=document.createElement('img');
  image.src=pro.img;
  left.appendChild(image);
  main.appendChild(left);
  var name=document.createElement('h2');
  name.textContent=pro.name;
  left.appendChild(name);
  main.appendChild(left);
  var hr=document.createElement('hr');
  left.appendChild(hr);
  var rollno=document.createElement('h2');
  rollno.textContent=pro.rollno;
  left.appendChild(rollno);
  main.appendChild(left);
  var place=document.createElement('h2');
  place.textContent=pro.place;
  left.appendChild(place);
  main.appendChild(left);
}
function career(p){
  var head=document.createElement('h1');
  head.textContent="Resume";
  right.appendChild(head);
  var hr=document.createElement('hr');
  right.appendChild(hr);
  var rh1=document.createElement('h2');
  rh1.textContent="career objective";
  right.append(rh1);
  var des=document.createElement('des');
  des.textContent=p.info;
  right.appendChild(des);
  main .appendChild(right);
}
function education1(edu){
  var rh2=document.createElement('h2');
  rh2.textContent="Educational details";
  right.append(rh2);
  var hr=document.createElement('hr');
  right.appendChild(hr);

  var table=document.createElement('table');
  let row='';
  row += "<tr>"+"<th>"+"s.no" +"</th>"+
  "<th>"+"degree" +"</th>"+
  "<th>"+"institute" +"</th>"+
  "<th>"+"percentage" +"</th>"+
  "<th>"+"yop" +"</th>"+"</tr>";

   for (i in edu){

  row += "<tr>"+"<td>"+edu[i].sno +"</td>"+
  "<td>"+edu[i].degree +"</td>"+
  "<td>"+edu[i].institute +"</td>"+
  "<td>"+edu[i].percentage +"</td>"+
  "<td>"+edu[i].yop +"</td>"+"</tr>";
}
table.innerHTML=row;
right.appendChild(table);
main.appendChild(right);
}
function skill(sk){
  var rh2=document.createElement('h2');
  rh2.textContent="Skill Details";
  right.append(rh2);
  var hr=document.createElement('hr');
  right.appendChild(hr);
  var ul=document.createElement(ul);
  right.appendChild(ul);
  for (i in sk){
    var li=document.createElement("li");
    li.textContent=sk[i].info;
    ul.append(li);
  }

}
