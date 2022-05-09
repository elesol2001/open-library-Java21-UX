<script>
import * as search from '../search.js'

export default {
        name : 'Search',
        data (){
            return {
                searchterm: ''
            }
        },
        methods : {
            onSubmit(e){
                e.preventDefault()
                //if(!this.name){
                //    alert('Please Add a Name')
                //    return
               // }
               search.searchAuthor(this.searchterm)
                
            }
        }
    }
</script>
<template>
<div>
<form @submit="onSubmit" class="search-form">
  <div class="about">
    <h2>This is a search page</h2>
     <p> searchterm is: {{ searchterm }}</p>
     <input v-model="searchterm" placeholder="search here"/>
  </div>
  <input type="submit" value="Search" class="btn btn-block" />
  </form>
  <ul id="books"></ul>
  </div>
</template>

<style>
</style>