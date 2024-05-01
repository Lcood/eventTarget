// exercice sur event.target qui renvoie l'élèment cliqué

const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  const dataId = e.target.dataset.id;
  // si j'appuie sur les boutons
  if (dataId) {
    // enlever la class active des autres boutons et l'ajouter au bonton cliquer
    btns.forEach(function (btn) {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    // caccher les articles et affiche celui qui match avec id
    articles.forEach(function (article) {
      article.classList.remove('active');
    });
    const element = document.getElementById(dataId);
    element.classList.add('active');
  }
});
