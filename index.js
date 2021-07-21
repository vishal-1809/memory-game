document.addEventListener('DOMContentLoaded', ()=>{

    const url = "https://pokeres.bastionbot.org/images/pokemon";
    const arr = [
        {
            name: "one",
            vy: "1",
            links : `${url}/${1}.png`,
        },
        {
            name: "two",
            vy: "2",
            links : `${url}/${2}.png`,
        },
        {
            name: "three",
            vy: "3",
            links : `${url}/${3}.png`,
        },
        {
            name: "four",
            vy: "4",
            links : `${url}/${4}.png`,
        },
        {
            name: "five",
            vy: "5",
            links : `${url}/${5}.png`,
        },
        {
            name: "six",
            vy: "6",
            links : `${url}/${6}.png`,
        },
        {
            name: "seven",
            vy: "7",
            links : `${url}/${7}.png`,
        },
        {
            name: "eight",
            vy: "8",
            links : `${url}/${8}.png`,
        },
        {
            name: "nine",
            vy: "9",
            links : `${url}/${9}.png`,
        },
        {
            name: "ten",
            vy: "10",
            links : `${url}/${10}.png`,
        },
        {
            name: "eleven",
            vy: "11",
            links : `${url}/${11}.png`,
        },
        {
            name: "twelve",
            vy: "12",
            links : `${url}/${12}.png`,
        },
        {
            name: "thirteen",
            vy: "13",
            links : `${url}/${13}.png`,
        },
        {
            name: "fourteen",
            vy: "14",
            links : `${url}/${14}.png`,
        },
        {
            name: "fifteen",
            vy: "15",
            links : `${url}/${15}.png`,
        },
        {
            name: "sixteen",
            vy: "16",
            links : `${url}/${16}.png`,
        },
        {
            name: "seventeen",
            vy: "17",
            links : `${url}/${17}.png`,
        },
        {
            name: "eighteen",
            vy: "18",
            links : `${url}/${18}.png`,
        },
        {
            name: "nineteen",
            vy: "19",
            links : `${url}/${19}.png`,
        },
        {
            name: "twenty",
            vy: "20",
            links : `${url}/${20}.png`,
        },
        {
            name: "twentyone",
            vy: "21",
            links : `${url}/${21}.png`,
        },
        {
            name: "twentytwo",
            vy: "22",
            links : `${url}/${22}.png`,
        },
        {
            name: "twentythree",
            vy: "23",
            links : `${url}/${23}.png`,
        },
        {
            name: "twentyfour",
            vy: "24",
            links : `${url}/${24}.png`,
        },
        {
            name: "twentyfive",
            vy: "25",
            links : `${url}/${25}.png`,
        },
        {
            name: "twentysix",
            vy: "26",
            links : `${url}/${26}.png`,
        },
        {
            name: "twentyseven",
            vy: "27",
            links : `${url}/${27}.png`,
        },
        {
            name: "twentyeight",
            vy: "28",
            links : `${url}/${28}.png`,
        },
        {
            name: "twentynine",
            vy: "29",
            links : `${url}/${29}.png`,
        },
        {
            name: "thirty",
            vy: "30",
            links : `${url}/${30}.png`,
        },
        {
            name: "thirtyone",
            vy: "31",
            links : `${url}/${31}.png`,
        },
        {
            name: "thirtytwo",
            vy: "32",
            links : `${url}/${32}.png`,
        },
        {
            name: "one",
            vy: "9",
            links : `${url}/${1}.png`,
        },
        {
            name: "two",
            vy: "10",
            links : `${url}/${2}.png`,
        },
        {
            name: "three",
            vy: "11",
            links : `${url}/${3}.png`,
        },
        {
            name: "four",
            vy: "12",
            links : `${url}/${4}.png`,
        },
        {
            name: "five",
            vy: "13",
            links : `${url}/${5}.png`,
        },
        {
            name: "six",
            vy: "14",
            links : `${url}/${6}.png`,
        },
        {
            name: "seven",
            vy: "15",
            links : `${url}/${7}.png`,
        },
        {
            name: "eight",
            vy: "16",
            links : `${url}/${8}.png`,
        },
        {
            name: "nine",
            vy: "9",
            links : `${url}/${9}.png`,
        },
        {
            name: "ten",
            vy: "10",
            links : `${url}/${10}.png`,
        },
        {
            name: "eleven",
            vy: "11",
            links : `${url}/${11}.png`,
        },
        {
            name: "twelve",
            vy: "12",
            links : `${url}/${12}.png`,
        },
        {
            name: "thirteen",
            vy: "13",
            links : `${url}/${13}.png`,
        },
        {
            name: "fourteen",
            vy: "14",
            links : `${url}/${14}.png`,
        },
        {
            name: "fifteen",
            vy: "15",
            links : `${url}/${15}.png`,
        },
        {
            name: "sixteen",
            vy: "16",
            links : `${url}/${16}.png`,
        },
        {
            name: "seventeen",
            vy: "17",
            links : `${url}/${17}.png`,
        },
        {
            name: "eighteen",
            vy: "18",
            links : `${url}/${18}.png`,
        },
        {
            name: "nineteen",
            vy: "19",
            links : `${url}/${19}.png`,
        },
        {
            name: "twenty",
            vy: "20",
            links : `${url}/${20}.png`,
        },
        {
            name: "twentyone",
            vy: "21",
            links : `${url}/${21}.png`,
        },
        {
            name: "twentytwo",
            vy: "22",
            links : `${url}/${22}.png`,
        },
        {
            name: "twentythree",
            vy: "23",
            links : `${url}/${23}.png`,
        },
        {
            name: "twentyfour",
            vy: "24",
            links : `${url}/${24}.png`,
        },
        {
            name: "twentyfive",
            vy: "25",
            links : `${url}/${25}.png`,
        },
        {
            name: "twentysix",
            vy: "26",
            links : `${url}/${26}.png`,
        },
        {
            name: "twentyseven",
            vy: "27",
            links : `${url}/${27}.png`,
        },
        {
            name: "twentyeight",
            vy: "28",
            links : `${url}/${28}.png`,
        },
        {
            name: "twentynine",
            vy: "29",
            links : `${url}/${29}.png`,
        },
        {
            name: "thirty",
            vy: "30",
            links : `${url}/${30}.png`,
        },
        {
            name: "thirtyone",
            vy: "31",
            links : `${url}/${31}.png`,
        },
        {
            name: "thirtytwo",
            vy: "32",
            links : `${url}/${32}.png`,
        }
    ]

    let grid = document.querySelector('#grid');

    let clicked = [];
    let clickedid = [];

    let score = 0;
    let moves = 0;

    arr.sort(() => 0.5-Math.random());

    function create(){
        for (let index = 0; index < arr.length; index++) {
            let create = document.createElement('img');
            create.className+='imgs';
            create.setAttribute('src',"https://i.stack.imgur.com/mwFzF.png");
            // create.setAttribute('src',arr[index].links);
            create.setAttribute('id',index+1);
            create.addEventListener('click',flip);
            grid.appendChild(create);
        }
    }

    function check(){
        let chosen = document.querySelectorAll('img');

        if(clicked[0]===clicked[1]){
            // alert("success");
            let one = arr[clickedid[0]-1].links;
            let two = arr[clickedid[1]-1].links;
            chosen[clickedid[0]-1].setAttribute('src',one);
            chosen[clickedid[1]-1].setAttribute('src',two);
            chosen[clickedid[0]-1].style="visibility: hidden";
            chosen[clickedid[1]-1].style="visibility: hidden";
            score++;
            document.getElementById("score").innerText=`${score}`;
            if(score===32){
                document.getElementById("score").innerText="Congratulations! You Won, Reload to start a New Game";
            }
        }
        else{
            // alert("try again");
            chosen[clickedid[0]-1].setAttribute('src',"https://i.stack.imgur.com/mwFzF.png");
            chosen[clickedid[1]-1].setAttribute('src',"https://i.stack.imgur.com/mwFzF.png");
        }
        clicked=[];
        clickedid=[];
    }

    function flip(){
        clicked.push(arr[this.id-1].name);
        clickedid.push(this.id);
        this.setAttribute('src',arr[this.id-1].links);
        this.setAttribute('alt',"arr[this.id-1].links");
        if(clickedid.length===2){
            // console.log(clicked[0],clicked[1]);
            if(clickedid[0]==clickedid[1]){
                clickedid.pop();
                clicked.pop();
            }
            else{
                setTimeout(check,800);
                moves++;
                document.getElementById('moves').innerHTML=`${moves}`;
            }
        }
    }

    create();


});
