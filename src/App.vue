<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- Cabeçalho -->
  <header>
    <!-- Barra de navegação -->
      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        |
        <RouterLink to="/sobre">Sobre</RouterLink>
        |
        <RouterLink to="/restrito">Restrito</RouterLink>
      </nav>
  </header>

  <!-- Exibição das rotas -->
  <RouterView />
</template>

