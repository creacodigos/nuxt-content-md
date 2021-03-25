<template>
  <div>
      <header style="flex-shrink: 0;">
          <b-navbar toggleable="lg" type="dark" class="navbar">
        <div class="container">
          <nuxt-link to="/" class="title">Creacódigos</nuxt-link>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>              
              <nuxt-link to="/sobre-mi">Sobre mi</nuxt-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <AppSearchInput />
              </b-nav-form>
              <!--
                <b-nav-item-dropdown text="Lang" right>
                  <b-dropdown-item href="#">EN</b-dropdown-item>
                  <b-dropdown-item href="#">ES</b-dropdown-item>
                  <b-dropdown-item href="#">RU</b-dropdown-item>
                  <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                
                <template #button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
              -->
          </b-navbar-nav>
          </b-collapse>
        </div>            
      </b-navbar>
      </header>
      <main style="flex-grow: 1;">
          <Nuxt  class="container p-3" />
      </main>
      <footer style="flex-shrink: 0;">
        Creado con @nuxt/content desde Canarias con ❤️
      </footer>
  </div>
</template>

<style>

html, body{
  font-size: 12px;
}
a, a:hover{
  text-transform: none;
  text-decoration: none;
  color: black;
}
a:hover{

    text-shadow: 0.25rem 0.25rem 0.25rem rgba(0,0,0,0.10);
}

h1, h2, h3, h4, h5 {
  font-weight: bold;
  line-height: 2em;
}
.author {
    padding: 1rem;
    margin: 1rem auto;
    border-radius: 0.5rem;
    display: flex;
    background-color: #eff1de;
}
.author > a{
  display: flex;
}
.author img{
  width: 100px;
  max-width: 100px;
  height: 100px;
  max-height: 100px;
  margin-right: 1rem;
}

img {
  max-width: 100%;
  border-radius: 0.5rem;
}
.article img{
  margin-bottom: 1rem;
}
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}

li.article {
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 0.5rem;
  box-shadow: 0.25rem 0.25rem 0.75rem rgba(0,0,0,0.10);
}

</style>

<style scoped>
.navbar {
    position: sticky;
    top: 0;
    z-index: 1;
}
.navbar a{
  color: white;
}
.navbar a.title{
  font-size: 1.5rem;
  margin-right: 2rem;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}

header, 
footer{
  background-color: black;
  color: white;
  padding: 5rem 0;
  text-align: center;
}
header{
  position: sticky;
  top: 0;
  padding: 1rem 0;
  z-index: 1;
}

@media only screen and (max-width: 768px) {
    
    .navbar-nav {
        flex-direction: unset;
        padding: 1rem 0;
    }

}
</style>