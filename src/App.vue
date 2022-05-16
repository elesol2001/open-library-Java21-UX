<script setup>
import { RouterLink, RouterView } from "vue-router"

function displayInfo() {
  let dim = document.createElement("div")
  let popup = document.createElement("div")
  dim.id = "dim"
  popup.id = "popup"
  document.body.append(dim)
  document.body.append(popup)
  let para = document.createElement("p")
  para.id = "infoparagraph"
  para.innerHTML = "Version 1.0 <br><br> Bokhylla skapad av Java21 och UX22"
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
  <div id="container">
    <h1>Hi</h1>
    <h1>Greetings</h1>
    <h1>Hello</h1>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/title">Title</RouterLink>
          <RouterLink to="/mylib">LIB</RouterLink>
        </nav>
      </div>
    </header>
    <input
      type="image"
      @click="displayInfo"
      id="info-button"
      src="https://cdn.discordapp.com/attachments/957985598944194573/973834193052246066/Informationikon.png"
      alt="info"
      width="50"
      height="50"
    />
  </div>
  <RouterView />
</template>

<style>
#container {
  display: flex;
  flex-direction: row;
}

#info-button {
  margin-left: auto;
  float: right;
}

#popup {
  height: 40%;
  background: white;
  position: fixed;
  top: 35%;
  left: 50%;
  margin-top: -15%;
  margin-left: -45%;
  border-radius: 5%;
  width: 90%;
  border: 2px gray solid;
}

#xbutton {
  height: 50px;
  width: 50px;
  background-image: url("https://cdn4.iconfinder.com/data/icons/xbox-one-thin-line-set/64/ico-xbx-bttn-x-512.png");
  background-color: transparent;
  border: none;
  background-size: cover;
  float: right;
  margin-top: -45%;
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
}

@media screen and (min-width: 500px) and (min-height: 700px) {
  #xbutton {
    margin-top: -18%;
  }
}

@media screen and (min-width: 900px) {
  #popup {
    width: 50%;
    margin-left: -25%;
  }
}
</style>
