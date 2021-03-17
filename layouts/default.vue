<template>
  <div>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <div class="container">
              <b-navbar-brand href="#">Chuletas</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/">Listado</b-nav-item>
                <b-nav-item href="/blog/">Sobre mi</b-nav-item>
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