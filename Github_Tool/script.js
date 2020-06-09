// SEACRCH
 const btn = document.getElementById('btn1');
 const img1 = document.getElementById('uImg');
 const uName = document.getElementById('uName');
 const uRep = document.getElementById('uRep');
 const uFw = document.getElementById('uFw');
 const uFg = document.getElementById('uFg');
 
 btn.addEventListener("click", getData);

 function getData()
 {
    let user = document.getElementById('search').value;
     console.log(user);

     fetch(`https://api.github.com/users/${user}`)
        .then(function (response) {
          return response.json();
        })
        .then(function (user) {
          console.log(user.name);
          
          if(`${user.name}`==='null')
          {
            alert("Enter a valid User-Id");                        //NULL CHECK            
          } 
          else
          {
            img1.setAttribute("src", user.avatar_url);
            uName.innerHTML = `Name: ${user.name}`;
            uRep.innerHTML= `Repositories: ${user.public_repos}`;
            uFw.innerHTML= `Followers: ${user.followers}`;
            uFg.innerHTML= `Following: ${user.following}`;    

            let myChart= document.getElementById('chart').getContext('2d');

            let detChart = new Chart(myChart, {
              type:'horizontalBar',
              data: {
                labels:['REPOSITORIES','FOLLOWERS','FOLLOWING'],
                datasets:[{
                  label: 'NUMBER',
                  data:[
                    `${user.public_repos}`,
                    `${user.followers}`,
                    `${user.following}`
                  ],
                  backgroundColor:[
                              'cornflowerblue',
                              'rgb(114, 133, 165)',
                              'rgb(63, 224,208)'
                  ]
                }]
              },
              options: {}
            });
          }
        })
        .catch(function (error) {
          alert("Some error occured");
          console.error(error);
        });
 };