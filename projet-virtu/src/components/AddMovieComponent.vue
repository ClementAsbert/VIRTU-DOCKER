<template>
    <div>
      <!-- Bouton Ajouter -->
      <button class="add-button" @click="openModal">Ajouter un Film</button>
  
      <!-- Modal -->
      <div v-if="isModalVisible" class="modal-overlay">
        <div class="modal">
          <h2>Ajouter un Film</h2>
          <form @submit.prevent="handleSubmit">
            <!-- Champ Nom -->
            <div class="form-group">
              <label for="name">Nom</label>
              <input id="name" v-model="formData.name" required />
              <label for="type">Type</label>
              <input id="type" v-model="formData.type" required />
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
    name: "AddMovieComponent",
    data() {
      return {
        isModalVisible: false, // Contrôle la visibilité de la modal
        formData: {
          name: "",
          type: "",
          description: "",
        },
      };
    },
    methods: {
      openModal() {
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
  width: 90%; /* Réduction de la largeur des champs pour s'adapter à la modal */
  padding: 8px 12px; /* Réduction du padding */
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  color: #333333;
  background-color: #f9f9f9;
  transition: all 0.2s ease-in-out;
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
  