document.addEventListener('DOMContentLoaded', () => {

  // Selecciona todos los botones de editar
  const updateButton = document.querySelectorAll('.btnEdit');

  updateButton.forEach(button => {
    boton.addEventListener('click', (e) => {
      const row = e.target.closest('tr');

      // Obtiene los datos de la fila
      const id = row.children[0].textContent.trim();
      const title = row.children[1].textContent.trim();
      const author = row.children[2].textContent.trim();
      const year = row.children[3].textContent.trim();
      const genre = row.children[4].textContent.trim();
      const rating = row.children[5].textContent.trim();
      const availability = row.children[6].textContent.includes('Sí');

      // Rellena el modal
      document.getElementById('id_update').value = id;
      document.getElementById('title_update').value = title;
      document.getElementById('author_update').value = author;
      document.getElementById('year_update').value = year;
      document.getElementById('genre_update').value = genre;
      document.getElementById('rating_update').value = rating;
      document.getElementById('availability_update').checked = availability;

      // Muestra el modal
      const modal = new bootstrap.Modal(document.getElementById('modalBook'));
      modal.show();
    });
  });

});
