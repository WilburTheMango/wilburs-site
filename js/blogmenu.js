document.addEventListener('DOMContentLoaded', function () {
    function extractDateFromFileName(fileName) {
        const match = fileName.match(/blogpost_(\d{1,2})-(\d{1,2})-(\d{2,4})\.md/);
        if (match) {
            const day = match[1];
            const month = match[2];
            const year = match[3].length === 2 ? `20${match[3]}` : match[3];
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        }
        return null;
    }

    function generateMarkdownLinks(files) {
        const container = document.getElementById('markdown-links-container');

        files.sort((a, b) => {
            const dateA = extractDateFromFileName(a);
            const dateB = extractDateFromFileName(b);
            return dateB.localeCompare(dateA);
        });

        files.forEach(file => {
            const date = extractDateFromFileName(file);
            const dateText = file.substring(9, file.indexOf("."));
            console.log("/blogposts/" + dateText + ".jpg");
            const filePath = `blogposts/${file}`;
            const imageUrl = `blogposts/${dateText}.jpg`; // Assuming images are stored in an "images" folder

            fetch(filePath)
                .then(response => response.text())
                .then(markdownContent => {
                    // Extract the first line of the blog post (Markdown title)
                    const firstLine = markdownContent.split('\n')[0].replace(/^#\s*/, '');

                    // Generate the HTML card
                    const link = `
          <div class="cardMini">
            <a href="../blogpost.html?post=${file}">
              <img src="${imageUrl}" alt="Blog Post for ${date}">
              ${firstLine}
            </a>
          </div>
          `;
                    container.innerHTML += link;
                })
                .catch(error => {
                    console.error(`Error loading file: ${file}`, error);
                });
        });
    }
    const fileNames = [
        "blogpost_12-1-23.md",
        "blogpost_12-2-23.md",
        "blogpost_12-3-23.md",
    ];

    generateMarkdownLinks(fileNames);
});