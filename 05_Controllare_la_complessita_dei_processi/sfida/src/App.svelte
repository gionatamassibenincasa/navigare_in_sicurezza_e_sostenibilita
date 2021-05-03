<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
  <!--script src="https://raw.githubusercontent.com/felixhao28/JSCPP/gh-pages/dist/JSCPP.es5.min.js"></script-->
  <script src="JSCPP.es5.min.js"></script>
  <title>Sfide in C/C++</title>
</svelte:head>

<script lang="ts">
	import { AceEditor } from "svelte-ace";
	import "brace/mode/c_cpp";
	import "brace/theme/chrome";
	import esercizi  from "./esercizi";
	//import * from "./JSCPP.es5.min";
	
  let nome = '';
  let cognome = '';
  let classe = 'Navigare in sicurezza e sostenibilità';
  let soluzione = new Array(esercizi.length);
  let vconsole  = new Array(esercizi.length);
  let vconsole_style = new Array(esercizi.length);
  const vc_normal = "min-height: 25px; background-color: grey; color: azure;";
  const vc_error = "min-height: 25px; background-color: red; color: yellow;";
  for (let i = 0; i < esercizi.length; i++) {
	  soluzione[i] = esercizi[i].scheletro;
	  vconsole[i] = "";
	  vconsole_style[i] = vc_normal;
  };
</script>

<h1>Sfide di programmazione in C/C++</h1>

<h2>1. Immetti i tuoi dati</h2>

<form>
  <label for="cognome">Cognome: <input name="cognome" id="cognome" bind:value={cognome}></label>
  <label name="nome" id="nome" for="nome">Nome: <input bind:value={nome}></label>
</form>

<hr />

{#if (cognome != "" && nome != "") || location.hostname == 'localhost'}
<h2>2. Risolvi gli esercizi</h2>

{#each esercizi as esercizio, indice}
{#if indice > 1}
	<hr />
{/if}
<h3>Es. {indice + 1} --  {esercizio.progetto}</h3>
<p>{@html esercizio.testo}</p>
<AceEditor
on:selectionChange={(obj) => console.log(obj.detail)}
on:paste={(obj) => console.log(obj.detail)}
on:input={(obj) => console.log(obj.detail)}
on:focus={() => console.log('focus')}
on:documentChange={(obj) => console.log(`document change : ${obj.detail}`)}
on:cut={() => console.log('cut')}
on:cursorChange={() => console.log('cursor change')}
on:copy={() => console.log('copy')}
on:init={(editor) => console.log(editor.detail)}
on:commandKey={(obj) => console.log(obj.detail)}
on:changeMode={(obj) => console.log(`change mode : ${obj.detail}`)}
on:blur={() => console.log('blur')}
width='100%'
height='300px'
lang="c_cpp"
theme="chrome"
bind:value={soluzione[indice]} />

<!--textarea bind:value={soluzione[indice]}></textarea-->
<button on:click={
	() => {
	vconsole[indice] = "";
	try {
		JSCPP.run(soluzione[indice], "", 
		{
			stdio: {
				write: s => {
					vconsole[indice] += s;
					console.log(s);
				}
			}
		});
		vconsole_style[indice] = vc_normal;
	} catch(err) {
		vconsole_style[indice] = vc_error;
		vconsole[indice] += err;
	}
	}
}>Esegui</button>
<pre style={vconsole_style[indice]}>{vconsole[indice]}</pre>
{/each}

<hr />

<!--h2>3. Invia il compito</h2>

<button>
  <a href={`mailto:gionata.massi@savoiabenincasa.it?subject=${mail_sub}&body=${mail_body}`}>
	  Invia
  </a>
</button-->

{/if}