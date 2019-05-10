<template>
  <div class="header">
    <div class="content">
      <el-dropdown
        trigger="click"
        class="hidden-sm-and-up">
        <span class="el-dropdown-link">
          <img src="https://img.icons8.com/ios/16/000000/menu.png">
        </span>            
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
              v-for="NavMenu in this.$store.state.Site.NavMenu"
              :key="NavMenu.To"
              @click.native="$router.push(NavMenu.To)">
              {{ NavMenu.Name }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="info">
        <div class="telefono">
          <img src="https://img.icons8.com/ios/16/000000/phone-filled.png">
          <span>+598 2601 7321</span>
        </div>
        <div class="logo" >
          <router-link to="/" tag="img" :src="this.$store.state.Site.LogoURL" />
        </div>
      </div>
      <div class="w-buscar">
        <el-button type="text" size="mini" style="border: none;">
          <img src="https://img.icons8.com/ios/16/000000/search.png">
          <span>Buscar</span>
        </el-button>
      </div>
      <div class="w-mi-cuenta">
        <el-button type="text" size="mini" style="border: none;">
          <img src="https://img.icons8.com/ios/16/000000/gender-neutral-user-filled.png">
          <span>Mi Cuenta</span>
        </el-button>
      </div>
      <div class="w-mi-compra">
        <el-button type="text" size="mini" style="border: none;">
          <img src="https://img.icons8.com/ios/16/000000/shopping-bag-filled.png">
          <span>$ 0.00</span>
        </el-button>
      </div>
      <div class="principal">
        <div class="logo" >
          <router-link to="/" tag="img" :src="this.$store.state.Core.Site.LogoURL" />
        </div>
        <nav class="menu">
          <el-button
            type="text"
            v-for="NavMenu in this.$store.state.Core.Site.NavMenu"
            :key="NavMenu.To"
            @click.native="$router.push(NavMenu.To)">
            {{ NavMenu.Name }}
            </el-button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'w-header',
})
</script>
