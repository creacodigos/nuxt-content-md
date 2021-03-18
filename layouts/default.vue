<template>
  <div>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <div class="container navbar">
            <nuxt-link to="/" class="title">Chuletas</nuxt-link>

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

                <b-nav-item-dropdown text="Lang" right>
                  <b-dropdown-item href="#">EN</b-dropdown-item>
                  <b-dropdown-item href="#">ES</b-dropdown-item>
                  <b-dropdown-item href="#">RU</b-dropdown-item>
                  <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
          </div>            
        </b-navbar>
    </div>
    <Nuxt  class="container p-3" />
  </div>
</template>

<style scoped>
.navbar a{
  color: white;
}
.navbar a.title{
  font-size: 1.5rem;
  margin-right: 2rem;
}
</style>