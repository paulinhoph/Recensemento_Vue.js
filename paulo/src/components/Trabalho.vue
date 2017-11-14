<template>
	<div id="Perfil">
		<section class="lista">
			<h1>Recenseamento</h1>
			<div class="lista-item">
				<label class="" for="nome">Name:</label>
     			<input type="text"  name="nome" placeholder="Insira aqui.." v-model="nome">
     		</div>	
     		<div class="lista-item">
     			<label class="" for="idade"  >Idade:</label>
     			<input  type="text"  name="idade" placeholder="Insira aqui.." v-model="idade">
     		</div>
     		<div class="lista-item">	
     			<label class="" for="cep">Cep:</label>
     			<input type="text"  name="cep" placeholder="Insira aqui.." v-model="cep">
     		</div>	
     		<button class="lista-btn" v-on:click="send()">ENVIAR</button>
		</section>
		<section class="lista-moradores">
			
			<fieldset>
			<legend>Moradores</legend>
			<div v-if="moradores.length">
				<p v-for="morador in moradores"> {{ morador.nome }},
				{{ morador.idade }}, {{ morador.cep }}</p>
			</div>
			<div v-else>
				<p>Os moradores aparecerão aqui</p>
			</div>
			</fieldset>
		</section>
	</div>
</template>
<script>
		export default {
  		name: 'Trabalho',
  		data(){
  			return{
  				nome:'',
  				idade:'',
  				cep:'',
  				show:false,
  				moradores: []	
  			}
  		},
  		methods:{
  			send(){
  				this.moradores.push({
  					nome: this.nome,
  					idade: this.idade,
  					cep: this.cep
  				})
  				show=true;
  			}

  		}
	}
</script>
<style scoped>
	.lista{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.lista-item{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 2%;
	}
	input{
		padding: 2% 10%;
	}
	fieldset{
		padding: 20% 10%;
	}
	legend{
		text-align: left;
	}
	.lista-btn{
		background-color: #2c3e50;
		color:;
		padding: 1% 2%;
	}

	
</style>
