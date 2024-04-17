class Blog {
    constructor() {
        this.posts = [
            {
                id: "1",
                title: "Node.js",
                body: "lorem ipsum dolor sit amet consectetur",
                date: "15-04-2024",
            },
            {
                id: "2",
                title: "PHP",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos!",
                date: "14-04-2024",
            },
            {
                id: "3",
                title: "Laravel",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                date: "13-04-2024",
            },
            {
                id: "4",
                title: "Plesk",
                body: "Nullam dapibus ante sed arcu posuere, ac ornare orci interdum.",
                date: "12-04-2024",
            },
        ];
    }

    listPosts() {
        this.posts.forEach((post) => {
            console.log(`ID: ${post.id}, Başlık: ${post.title}, Açıklama: ${post.body}, Tarih: ${post.date}`);
        });
    }

    addPost(id, title, body, date) {
        this.posts.push({
            id: id,
            title: title,
            body: body,
            date: date,
        });
    }
}

const myBlog = new Blog();

myBlog.posts[0].title = "Node.js";
myBlog.posts[0].body = "lorem ipsum dolor sit amet consectetur";
myBlog.posts[0].date = "15-04-2024";

myBlog.posts[1].title = "PHP";
myBlog.posts[1].body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos!";
myBlog.posts[1].date = "14-04-2024";

myBlog.posts[2].title = "Laravel";
myBlog.posts[2].body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
myBlog.posts[2].date = "13-04-2024";

myBlog.posts[3].title = "Plesk";
myBlog.posts[3].body = "Nullam dapibus ante sed arcu posuere, ac ornare orci interdum.";
myBlog.posts[3].date = "12-04-2024";


console.log("Mevcut Gönderiler:");
myBlog.listPosts();


myBlog.addPost("5", "React.js", "Lorem ipsum dolor sit amet", "11-04-2024");


console.log("\nGüncellenmiş Gönderiler:");
myBlog.listPosts();
