window.onload = function () {
  fetch("https://api.lanyard.rest/v1/users/734529813112684614")
    .then(response => response.json())
    .then(w => {
      const info = w.data.discord_user;
      const profileImg = document.querySelector('.profile-img');
      const nameElement = document.getElementById('name'); 
      const globalElement = document.getElementById('global'); 
      profileImg.src = info.avatar ? `https://cdn.discordapp.com/avatars/${info.id}/${info.avatar}.${info.avatar.startsWith("a_") ? 'gif' : 'png'}?size=512` : "https://cdn.discordapp.com/embed/avatars/5.png";
      nameElement.textContent = info.username;
      globalElement.textContent = info.global_name;
    })
    .catch(error => { });
};
