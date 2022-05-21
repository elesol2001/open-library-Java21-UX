<script>
import AppLayout from "@/components/AppLayout.vue"

export default {
  components: {
    AppLayout,
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
<<<<<<< HEAD
  <AppLayout />
  <div id="container">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/start">Start</RouterLink>
          <RouterLink to="/title">Title</RouterLink>
          <RouterLink to="/mylib">LIB</RouterLink>
          <RouterLink :to="{ name: 'SearchIndex' }">SearchIndex</RouterLink>
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
=======
    <div id="container">

        <header>
            <div class="wrapper">
                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                    <RouterLink to="/start">Start</RouterLink>
                    <RouterLink to="/title">Title</RouterLink>
                    <RouterLink to="/mylib">Lib</RouterLink>
                    <RouterLink :to="{ name: 'SearchIndex'}">SearchIndex</RouterLink>
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
>>>>>>> b1c7928aaa22648c79db39e2ecfdf6e07eeb2ae4
</template>

<style>
body {
  margin: 0em;
}
</style>
