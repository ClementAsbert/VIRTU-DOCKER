<template>
  <div>
    <NavBarComponent/>
    <RouterView/>
  </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";

export default {
  name: "MainView",
  components: {
    NavBarComponent,
  },
};
</script>

<style scoped>
.add-button-container {
  position: absolute;
  top: 70px; /* Ajustez en fonction de la hauteur de votre navbar */
  right: 20px; /* Distance du bord droit */
  z-index: 10; /* Assurez-vous que le bouton reste au-dessus des autres éléments */
}
</style>
