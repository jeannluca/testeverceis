async function testarPagina(url) {
  try {
    console.log("Testando:", url);

    const response = await fetch(url);

    console.log("Status:", response.status);
    console.log("Status Text:", response.statusText);
    console.log("URL Final:", response.url);
    console.log("OK:", response.ok);

    if (response.status === 404) {
      console.log("❌ Página NÃO encontrada (NOT_FOUND)");
    } else {
      console.log("✅ Página encontrada");
    }

  } catch (erro) {
    console.error("Erro ao acessar a página:");
    console.error(erro.message);
  }
}

// EXEMPLO DE USO
testarPagina("https://seu-projeto.vercel.app");