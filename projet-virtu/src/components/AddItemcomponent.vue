<template>
    <div>
      <!-- Bouton Ajouter -->
      <button class="add-button" @click="openModal">Ajouter</button>
  
      <!-- Modal -->
      <div v-if="isModalVisible" class="modal-overlay">
        <div class="modal">
          <h2>Ajouter un {{ activeTab === 'games' ? 'jeu' : 'film' }}</h2>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Nom</label>
              <input id="name" v-model="formData.name" required />
            </div>
  
            <div v-if="activeTab === 'games'" class="form-group">
              <label for="type">Type</label>
              <input id="type" v-model="formData.type" required />
            </div>
  
            <div class="form-group">
              <label for="description">Description</label>
              <textarea id="description" v-model="formData.description" required></textarea>
            </div>
  
            <div class="form-actions">
              <button type="submit" class="btn">Ajouter</button>
              <button type="button" class="btn cancel" @click="closeModal">Annuler</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AddItemComponent",
    data() {
      return {
        isModalVisible: false, // Contrôle la visibilité de la modal
        activeTab: "games", // Peut être "games" ou "movies"
        formData: {
          name: "",
          type: "",
          description: "",
        },
      };
    },
    methods: {
      openModal() {
        console.log("Modal ouverte");
        this.isModalVisible = true; // Ouvre la modal
      },
      closeModal() {
        this.isModalVisible = false; // Ferme la modal
      },
      handleSubmit() {
        console.log("Données soumises :", this.formData);
        // Réinitialiser le formulaire
        this.formData = {
          name: "",
          type: "",
          description: "",
        };
        this.closeModal(); // Ferme la modal après soumission
      },
    },
  };
  </script>
  
  <style scoped>
  /* Bouton Ajouter */
  .add-button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 12px 25px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .add-button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
  }
  
  .add-button:active {
    transform: translateY(1px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Modal Overlay */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* Modal */
  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-actions {
    display: flex;
    justify-content: space-between;
  }
  
  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn.cancel {
    background: #ccc;
  }
  
  .btn:hover {
    opacity: 0.9;
  }
  </style>
  