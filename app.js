let input = document.querySelector('input');
let btn = document.querySelector('.btn');
let content = document.querySelector('.get_content');


btn.onclick = function getUser() {

     if(input.value == '') {
         content.innerHTML = '<span>please insert username</sapn>';
     } else {
         content.innerHTML = '';

         fetch(`https://api.github.com/users/${input.value}/repos`)
         .then((response) => response.json())
         .then((datas => {

            datas.forEach(data => {

               let mainDiv = document.createElement('div');
                   mainDiv.appendChild(document.createTextNode(data.name));
               
               let url = document.createElement('a');
                   url.appendChild(document.createTextNode('visited'));
                   url.href = `http://github.com/${input.value}/${data.name}`;
                   url.setAttribute('target', '_blank');
               mainDiv.appendChild(url);

               let startSpan = document.createElement('span');
                   startSpan.appendChild(document.createTextNode(`stars ${data.stargazers_count}`));
               mainDiv.appendChild(startSpan);

               mainDiv.className = 'get_box';

              content.appendChild(mainDiv);

            })

         }))
     }

};

