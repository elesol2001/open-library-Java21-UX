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
  <AppLayout />
</template>

<style>
body {
  margin: 0em;
}
</style>
