<template>
  <footer id="bottom-footer">
    <img id="book-footer" src="@/assets/book-logo.svg" alt="Book" />
    <div id="footer-div">
      <h3>Version 1.0</h3>
      <h3>Skapad av JAVA21 & UX22</h3>
      <h3>Av API Open Library</h3>
      <h3>Yrgo Göteborg</h3>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
#bottom-footer {
  height: 10%;
  width: 100%;
  position: relative;
  margin-top: 100%;
  padding-bottom: 35%;
  bottom: 0;
  background-color: #bfd6d9;
}

#book-footer {
  margin-left: 3%;
  margin-top: 1%;
  height: 20%;
  width: 30%;
}

#footer-div {
  float: right;
  margin-right: 10%;
}

#footer-div > * {
  margin-bottom: -5%;
  color: #736a6b;
  font-weight: 100;
  font-size: 0.65rem;
}

@media screen and (min-height: 800px){
#bottom-footer {
    margin-top: 35rem;
  }
}
@media screen and (min-width: 700px) {
  #footer-div > * {
    font-size: 1.2rem;
  }

  #bottom-footer {
    padding-bottom: 4%;
    margin-top: 29%;
  }

  #book-footer {
    height: auto;
    width: auto;
  }

}
</style>
