document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/books')
        .then(response => response.json())
        .then(books => {
            const table = document.createElement('table');
            const headerRow = table.insertRow();
            headerRow.innerHTML = '<th>ID</th><th>Title</th><th>Author</th>';
            books.forEach(book => {
                const row = table.insertRow();
                row.innerHTML = `<td>${book._id}</td><td>${book.title}</td><td>${book.author}</td>`;
            });
            document.getElementById('books').appendChild(table);
        })
        .catch(error => console.error('Error fetching books:', error));
});
