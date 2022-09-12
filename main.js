const cardObj = [
    {
        title: "North West",
        states: ["Kaduna", "Kebbi"],
        admins: [
            {
                name: "Abba Ibrahim",
                phone: "+234 802 311 1368",
            },

            {
                name: "Laban Sanni",
                phone: "+234 806 536 5339",
            },

        ],
        
        contact: "https://chat.whatsapp.com/FfmJc61Jhgu6SqSU3USWJh",
    },

    {
        title: "South East",
        states: ["Enugu"],
        admins: [
            {
                name: "Emmanuel Ede",
                phone: "+234 701 137 2790",
            },

            {
                name: "Chucks Ndibe",
                phone: "+234 803 786 2137",
            },


        ],
        
        contact: "https://chat.whatsapp.com/7gRdMLaEYLCFZ5vKumbVZT",
    },

    {
        title: "South West",
        states: ["Oyo"],
        admins: [
            {
                name: "Qamar Adebowale",
                phone: "+234 803 810 0152",
            },


        ],
        
        contact: "https://chat.whatsapp.com/ECGIBQ4YtopITOifBH3lXs",
    },

    {
        title: "South South",
        states: ["Benin,", "Bayelsa", "Port Harcourt"],
        admins: [
            {
                name: "Bright Idahosa",
                phone: "+234 813 113 4576",
            },

            {
                name: "Desmond August",
                phone: "+234 810 472 3674",
            },

            {
                name: "Ngozi Orji",
                phone: "+234 809 877 1079",
            },


        ],
        
        contact: "https://chat.whatsapp.com/KwKr09wDgVC0RPoXq5edyC",
    },


    {
        title: "North Central",
        states: ["Abuja Central", "Jos", "Kwara", "Lafia"],
        admins: [
            {
                name: "Chris Nnamani",
                phone: "+234 803 606 8769",
            },

            {
                name: "Mayowa Kabir Aliyu",
                phone: "+234 803 390 6282",
            },

            {
                name: "Idonreyin",
                phone: " ",
            },
          

        ],
        
        contact: "https://chat.whatsapp.com/KwKr09wDgVC0RPoXq5edyC",
    },

    {
        title: "North East",
        states: ["Adamawa"],
        admins: [
            {
                name: "Eli Joel",
                phone: "+234 703 373 8377",
            },

            {
                name: "Ishaya",
                phone: "+234 706 869 0084",
            },          

        ],
        
        contact: " ",
    },

    {
        title: "NSF General Chatroom",
        states: ["NSF"],
        admins: [
            {
                name: "  Toke Aka Segun",
                phone: " ",
            },         
        ],
        
        contact: "https://chat.whatsapp.com/DbWiUJDC8f3CDm3yxYNzOn",
    },

    {
        title: "Clubs in Nigeria",
        states: ["Clubs"],
        admins: [
            {
                name: "  Toke Aka Segun",
                phone: " ",
            },         
        ],
        
        contact: "https://nigeriascrabble.com/clubs/",
    },
    

];


function iterateCards(){
  const result =   cardObj.map((item) => {
       return cardComponent(item);
    });

    return result;
}

function cardComponent(props){
    return (
        `
    <div class="content" id="container">

        <div class="card">
            <div class="card_head">
                <div>
                    <h3>${props.title}</h3>
                </div>

                <div>
                    ${props.states.forEach(item => {
                        return `<span>${item}</span>`
                    })}
                </div>
            </div>

            <div class="card_body">
                <h4>Zone Admins:</h4>
                <div class="admin">
                    ${props.admins.forEach((item, i) => {
                        return `
                            <div class="admin_list">
                                <span>${i + 1}</span>
                            </div>

                            <div class="admin_details">
                                <h3>${item.name}</h3>
                                <h5>${item.phone}</h5>
                            </div>

                        
                        `
                    })}
                </div>


            <div class="card_footer">
                    
                <a href="${props.contact}">Contact Us</a>
            </div>
        </div>

        
    </div>  
        `
    );
}


const container = document.getElementById('container');
// container.innerHTML = iterateCards();



