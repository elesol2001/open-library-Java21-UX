<script>
import { RouterLink, RouterView } from "vue-router"

export default {
  methods: {
    displayInfo,
  },
  components: {
    RouterLink,
    RouterView,
  },
}

function displayInfo() {
  let dim = document.createElement("div")
  let popup = document.createElement("div")
  dim.id = "dim"
  popup.id = "popup"
  document.body.append(dim)
  document.body.append(popup)
  let para = document.createElement("p")
  para.id = "infoparagraph"
  para.innerHTML = "Version 1.0 skapad av JAVA21 & UX22 API: OpenLibrary YRGO Göteborg"
  popup.append(para)
  let xbutton = document.createElement("button")
  xbutton.id = "xbutton"
  popup.append(xbutton)
  xbutton.addEventListener("click", () => {
    document.body.removeChild(popup)
    document.body.removeChild(dim)
  })
}
</script>

<template>
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
  <nav id="top-navigation-bar">
    <RouterLink id="booklogo" to="/"><img src="@/assets/book-logo.svg" alt="Logo" /></RouterLink>
    <div id="top-navigation-logo">
      <RouterLink to="/mylib"><img src="@/assets/library-icon.svg" alt="Library" /></RouterLink>
    </div>
    <input id="appsearch" class="searchfield" placeholder="search title, author"> 
    <RouterLink to="/searchIndex"><img id="small" src="@/assets/search-icon.svg" alt="Search"></RouterLink>
    <input type="image" @click="displayInfo" id="info-button"
      src="https://cdn.discordapp.com/attachments/957985598944194573/973834193052246066/Informationikon.png"
      alt="info"
    />
  </nav>

  <RouterView />

  <nav id="bottom-navigation-bar">
    <RouterLink to="/"><img src="@/assets/home-icon.svg" alt="Home" /></RouterLink>
    <RouterLink to="/searchIndex"><img src="@/assets/search-icon.svg" alt="Search" /></RouterLink>
    <RouterLink to="/mylib"><img src="@/assets/library-icon.svg" alt="Library" /></RouterLink>
  </nav>
</template>

<style>
.body-view {
  display: flex;
}

#top-navigation-bar {
  position: sticky;
  top: 0px;
  background-color: #f2eeeb;
}

#booklogo {
  padding-left: 4%;
}


#top-navigation-logo {
  display: none;
}
.searchfield {
  box-sizing: border-box;
  position: fixed;
  height: 5%;
  left: 46%;
  right: 15%;
  top: 0.1%;
  text-indent: 10%;
  background: #ffffff;
  border: 2px solid #8aa1a6;
  border-radius: 20px;
  margin-top: 2.5%; 
}

#info-button {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 93%;
  top: 25%;
  margin-left: auto;
  float: right;
  color: rgba(89, 84, 86, 1);
}

#bottom-navigation-bar {
  
  position: sticky;
  width: 100%;
  background-color: #bfd6d9;
  display: flex;
  justify-content: space-evenly;
}

#popup {
  height: 40%;
  background: #f2eeeb;
  position: fixed;
  top: 35%;
  left: 50%;
  margin-top: -15%;
  margin-left: -45%;
  border-radius: 5%;
  width: 90%;
}

#xbutton {
  height: 50px;
  width: 50px;
  background-image: url("https://cdn4.iconfinder.com/data/icons/xbox-one-thin-line-set/64/ico-xbx-bttn-x-512.png");
  background-color: transparent;
  border: none;
  background-size: cover;
  float: right;
  margin-top: -60%;
}

#dim {
  position: fixed;
  margin: 0;
  padding: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 40%;
  background: gray;
  height: 100%;
  width: 100%;
}

#infoparagraph {
  align-self: center;
  font-size: 0.7cm;
  padding-left: 3%;
  padding-top: 5%;
}

/*DESKTOP */
@media screen and (min-width: 700px) {
  #popup {
    width: 50%;
    margin-left: -25%;
  }

  #xbutton {
    margin-top: -20%;
  }

  #searchfield {
    padding: 1%;
    margin-top: 4%;
    z-index: -1;
    position: absolute;
    display: inline;
  }
  #small {
  margin-left: 55%;
  margin-top: 4%;
  width: 1.4%;
  position:fixed;
}

  #top-navigation-logo {
    display: inline;
    position: absolute;
    margin-left: 70%;
    margin-top: 1.5em;
  }

  #bottom-navigation-bar {
    display: none;
  }
}
@media screen and (max-width: 700px) {
#small {
  display: none;
}
}
</style>
