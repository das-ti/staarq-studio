const input = document.getElementById("telefone");

input.addEventListener("input", function (e) {
  let valor = e.target.value.replace(/\D/g, "");

  if (valor.length > 11) {
    valor = valor.slice(0, 11);
  }

  let formatado = "";

  if (valor.length > 0) {
    formatado = "(" + valor.substring(0, 2);

    if (valor.length > 2) {
      formatado += ") ";

      if (valor.length <= 6) {
        formatado += valor.substring(2);
      } else if (valor.length <= 10) {
        formatado += valor.substring(2, 6) + "-" + valor.substring(6);
      } else {
        formatado += valor.substring(2, 7) + "-" + valor.substring(7);
      }
    }
  }

  e.target.value = formatado;
});

input.addEventListener("keydown", function (e) {
  if (e.key === "Backspace" || e.key === "Delete") {
    return;
  }

  if (
    !/\d/.test(e.key) &&
    e.key !== "Tab" &&
    e.key !== "ArrowLeft" &&
    e.key !== "ArrowRight"
  ) {
    e.preventDefault();
  }
});
