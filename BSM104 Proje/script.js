const app = Vue.createApp({
    data() {
      return {
        fullName: '',
        email: '',
        message: '',
        successModal: null
      };
    },
    mounted() {
      // Başarı modalını oluştur
      this.successModal = new bootstrap.Modal(document.getElementById('successModal'));
    },
    methods: {
      submitForm() {
        if (!this.fullName.trim()) {
          this.showMessage('error', 'İsim Soyisim boş olamaz.');
          return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.email)) {
          this.showMessage('error', 'Geçerli bir e-mail adresi giriniz.');
          return;
        }
        if (!this.message.trim()) {
          this.showMessage('error', 'Boş mesaj gönderilemez.');
          return;
        }
        this.showMessage('success', 'Form başarıyla gönderildi. Teşekkür ederiz!');
        this.successModal.show(); // Başarı modalını göster
        this.resetForm();
      },
      resetForm() {
        this.fullName = '';
        this.email = '';
        this.message = '';
        this.showMessage('info', 'Form sıfırlandı.');
      },
      showMessage(type, message) {
        this.message = message;
        setTimeout(() => {
          this.message = '';
        }, 5000);
      }
    }
  });
  
  app.mount('#app');




// *******pokemon*******
document.querySelector('#search').addEventListener("click", getPokemon);

function getPokemon(e){
  const name= document.querySelector("#pokemonName").value;
fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
.then((response)=> response.json())
.then((data)=> {
 document.querySelector(".pokemonBox").innerHTML = ` <div>
 <img src="${data.sprites.other["official-artwork"].front_default}" 
 alt="${data.name}" 
 />
</div>
<div class="pokemonInfo">
   <h1>${data.name}</h1>
   <p>Wight: ${data.weight}</p>
   </div>
 `;
})
.catch((err)=> {
  console.log("Pokemon bulunamadı",err);
});

  e.preventDefault();

}


https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png















  