//Responsive Navbar...

const toggleButton = document.getElementsByClassName('toggle_button')[0];
const navbarLinks = document.getElementsByClassName('navbar_links')[0];

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active');
});

// Main Body........

const teamList = [
    {
        "id": "1",
        "teamname":"Mumbai Indian",
        "teamlogo": "https://tse1.mm.bing.net/th?id=OIP.274mLsTLr9ABcH3Uhcws9wHaEK&pid=Api&P=0",
        "description": "Mumbai Indians are a franchise cricket team based in Mumbai, Maharashtra, that competes in the Indian Premier League. Founded in 2008, the team is owned by India's biggest conglomerate, Reliance Industries, through its 100% subsidiary IndiaWin Sports." ,
        "TeamCaption": "Rohit Sharma",
        "teamground":"Wankhede Stadium",
        "coach": "Mahela Jayawardene",
        "owner": "Indiawin Sports Pvt. Ltd.",
        "moreDetails": "./Mi.html"
    },
    {
        "id": "2",
        "teamname":"Chennai Super Kings",
        "teamlogo": "https://tse1.mm.bing.net/th?id=OIP.j5uUwx2jMbjb92qehHkRmgHaEK&pid=Api&P=0",
        "description": "Chennai Super Kings are a franchise cricket team based in Chennai, Tamil Nadu, India. They play in the Indian Premier League . Founded in 2008, the team plays its home matches at the M. A. Chidambaram Stadium in Chennai." ,
        "TeamCaption": "Mahendra Singh Dhoni",
        "teamground":"M.A. Chidambaram Stadium",
        "coach": "Stephen Fleming",
        "owner": "India Cements",
        "moreDetails": "./csk.html"
    },
    {
        "id": "3",
        "teamname":"Royal Challengers Bangalore",
        "teamlogo": "https://tse4.mm.bing.net/th?id=OIP.E3DnD8lgmNJqqVyAAUevWgHaEn&pid=Api&P=0",
        "description": "Royal Challengers Bangalore are a franchise cricket team based in Bangalore, Karnataka, that plays in the Indian Premier League . It was founded in 2008 by United Spirits and named after the company's liquor brand Royal Challenge." ,
        "TeamCaption": "Faf du Plessis",
        "teamground":"M. Chinnaswamy Stadium ",
        "coach": "Sanjay Bangar",
        "owner": "Royal Challengers Sports Private Ltd.",
        "moreDetails": "./RCB.html"
    },
    {
        "id": "4",
        "teamname":"Delhi Capitals",
        "teamlogo": "https://tse4.mm.bing.net/th?id=OIP.q6f0Xn-egFuMNp8ZEGeE3wHaFj&pid=Api&P=0",
        "description": "Delhi Capitals are a franchise cricket team based out of Delhi in the Indian Premier League . The franchise is jointly owned by the GMR Group and the JSW Group. The team's home ground is Arun Jaitley Stadium, located in New Delhi. " ,
        "TeamCaption": " Rishabh Pant",
        "teamground":"Arun Jaitley Stadium",
        "coach": "Ricky Ponting",
        "owner": "GMR Sports Pvt. Ltd & JSW Sports Pvt Ltd.",
        "moreDetails": "./more3.html"
    },
    {
        "id": "5",
        "teamname":"Kolkata Knight Riders",
        "teamlogo": "https://tse1.mm.bing.net/th?id=OIP.bnlYaa9luiTpCWmybvda3AHaDx&pid=Api&rs=1&c=1&qlt=95&w=212&h=108",
        "description": "The 2022 season will be the 15th season for the Indian Premier League franchise Kolkata Knight Riders (KKR). They will one of the ten teams that compete in the 2022 Indian Premier League. The franchise qualified for the IPL playoffs for the first time in 2011 and won the tournament in 2012 and 2014." ,
        "TeamCaption": "Shreyas Iyer",
        "team-ground":"Eden Gardens",
        "coach": "Brendon McCullum",
        "owner": "Knight Riders Sports Private Ltd.",
        "moreDetails": "./more4.html"
    },
    {
        "id": "6",
        "teamname":"Lucknow Super Giants",
        "teamlogo": "https://tse1.mm.bing.net/th?id=OIP.e6jLeAXCQp4gnlFj0i7FGQHaD3&pid=Api&P=0",
        "description": "Lucknow Super Giants is a franchise cricket team based in Lucknow, Uttar Pradesh. They play in the Indian Premier League (IPL).The team is owned by RPSG Group who previously owned the Rising Pune Supergiant franchise in 2016 and 2017. The team is captained by KL Rahul and coached by Andy Flower." ,
        "TeamCaption": "KL Rahul",
        "teamground":"BRSABV Ekana Cricket Stadium",
        "coach": "Andy Flower",
        "owner": "RPSG Group",
        "moreDetails": "./more5.html"
    },
    {
        "id": "7",
        "teamname":"Sunrisers Hyderabad",
        "teamlogo": "https://tse1.mm.bing.net/th?id=OIP.e_tuUIHP0whTcys1cM-IgQHaEo&pid=Api&rs=1&c=1&qlt=95&w=174&h=108",
        "description": "Sunrisers Hyderabad (often abbreviated as SRH) are a franchise cricket team based in Hyderabad, Telangana, which plays in the Indian Premier League (IPL). They are one of the ten teams to compete in the 2022 Indian Premier League, making their tenth appearance in all IPL tournaments." ,
        "TeamCaption": "Kane Williamson",
        "team-ground":"Rajiv Gandhi Intl. Cricket Stadium",
        "coach": "Tom Moody",
        "owner": "SUN TV Network",
        "moreDetails": "./more6.html"
    },
    {
        "id": "8",
        "teamname":"Gujarat Titans",
        "teamlogo": "https://tse1.mm.bing.net/th?id=OIP.vzUGYFdDkQxIy36sr8c3rgHaEo&pid=Api&rs=1&c=1&qlt=95&w=173&h=108",
        "description": "Gujarat Titans is a franchise cricket team based in Ahmedabad, Gujarat, India, that plays in the 2022 Indian Premier League (IPL). The team was coached by Ashish Nehra and captained by Hardik Pandya." ,
        "TeaCaption": "Hardik Pandya",
        "team-ground":"Narendra Modi Stadium",
        "coach": "Ashish Nehra",
        "owner": "CVC Capital",
        "moreDetails": "./more7.html"
    },
    {
        "id": "9",
        "teamname":"Rajasthan Royals",
        "teamlogo": "https://tse1.mm.bing.net/th?id=OIP.ppG-dPD9b-ZWeH7nY8zlfQHaFj&pid=Api&P=0",
        "description": "Rajasthan Royals (RR) is a franchise cricket team based in Rajasthan, India, which has played in the Indian Premier League (IPL) since the first edition of the tournament in 2008. They will be among the ten teams to compete in the 2022 Indian Premier League." ,
        "TeamCaption": "Sanju Samson",
        "teamground":"Sawai Mansingh Stadium",
        "coach": " Kumar Sangakkara",
        "owner": "Royal Multisport Pvt. Ltd",
        "moreDetails": "./more8.html"
    },
    {
        "id": "10",
        "teamname":"Punjab Kings",
        "teamlogo": "https://tse4.mm.bing.net/th?id=OIP._n2xYkXfTbexIQxKLKLhYQHaEK&pid=Api&P=0",
        "description": "The 2022 season will be the 15th season for the Indian Premier League franchise Punjab Kings. They will be one of the ten teams compete in the 2022 Indian Premier League." ,
        "TeamCaption": "Shikhar Dhawan",
        "teamground":"Punjab Cricket Association IS Bindra Stadium",
        "coach": "Anil Kumble",
        "owner": "KPH Dream Cricket Private Limited",
        "moreDetails": "./more9.html"
    }
];

teamList.forEach((element, i) => {
    
const main = document.querySelector(".main");

console.log(main);

const card = document.createElement('div');
card.classList = 'card';

//click function:

card.addEventListener("click", cardClick);

function cardClick(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.querySelector(".Page1").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", `${teamList[i].moreDetails}`, true);
    xhttp.send();
   
}

const TeamCard = `

<img class="team_img" src=${teamList[i].teamlogo}>
<div class="team_info">
    <h2 class="team_name">${teamList[i].teamname}</h2>
  
    <p>Description:${teamList[i].description}</p>
     
      <h4>
          Owner: ${teamList[i].owner}<br>
          Coach: ${teamList[i].coach}<br>
          Caption: ${teamList[i].TeamCaption}<br>
          Home Ground: ${teamList[i].teamground}
      </h4> 


</div> `;

card.innerHTML += TeamCard;

main.appendChild(card);

});


// Search Functionality--:

const searchFun = () =>{
    let filter = document.getElementById('myInput').value.toUpperCase();

    let myTable = document.getElementById('storeList');
    let tr = myTable.getElementsByTagName('tr');

    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[0];

        if(td){
            let textvalue = td.textContent || td.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display="";

            }else{
                tr[i].style.display="none"; 
            }
        }
    }
};





//Add PLayer .......


var selectedRow=null;   //Global variable: use for later all incrementaion..

function onformSubmit(e){
    event.preventDefault();
    var formData = readformData();

    if(selectedRow===null){
        insertNewRecord(formData);
    }
    else{
       updateRecord(formData)
    }
    resetForm();
}


//Retieve the data
function readformData(){
    var formData = {};
    FormData["PlayerName"] = document.getElementById("PlayerName").value;
    FormData["PlayerPic"] = document.getElementById("PlayerPic").value;
    FormData["PlayerRole"] = document.getElementById("PlayerRole").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){

    var PlayerName = document.getElementById("PlayerName").value;
    var PlayerPic = document.getElementById("PlayerPic").value;
    var PlayerRole = document.getElementById("PlayerRole").value;
   var table = document.getElementById("storeList");
   var   newTable = table.getElementsByTagName('tbody')[0];
      newRow = newTable.insertRow(table.lenght);
    cell1 = newRow.insertCell(0), 
    cell2 = newRow.insertCell(1), 
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button> ` 
       
       cell1.innerHTML = PlayerName ; 
       cell2.innerHTML = `<img class="player_img" src=${PlayerPic} width="300px" height="150px">`;
       cell3.innerHTML = PlayerRole; 
}

// edit the data

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("PlayerName").value= selectedRow.cells[0].innerHTML;
    document.getElementById("PlayerPic").value= selectedRow.cells[1].innerHTML;
    document.getElementById("PlayerRole").value= selectedRow.cells[2].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.PlayerName;
    selectedRow.cells[1].innerHTML=formData.PlayerPic;
    selectedRow.cells[2].innerHTML=formData.PlayerRole;

}

//Delete the data

function onDelete(td){
    if(confirm("Do you want to delete this record?")){
           row = td.parentElement.parentElement;
           document.getElementById("storeList").deleteRow(row.rowIndex);
    }

    resetForm();
}

//Reset the data

function resetForm(){
    document.getElementById("PlayerName").value= " ";
    document.getElementById("PlayerPic").value= " ";
    document.getElementById("PlayerRole").value= " ";
}


//Team search function

const searchFun1 = () =>{
    let filter = document.getElementById('myInput1').value.toUpperCase();

    let myGrid = document.getElementsByClassName('main');
    let head = myGrid.getElementsByTagName('h2');

    for(var i=0; i<head.length; i++){
        let nametd = head[i].getElementsByTagName('h2')[0];

        if(nametd){
            let textvalue = nametd.textContent || nametd.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter) > -1){
                h2[i].style.display="";

            }else{
                h2[i].style.display="none"; 
            }
        }
    }
};