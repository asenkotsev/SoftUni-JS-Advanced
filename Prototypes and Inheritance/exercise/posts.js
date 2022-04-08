function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return 'Post: ' + this.title + '\n' + 'Content: ' + this.content
        };
    }


    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let superString = super.toString();
            let rating = this.likes - this.dislikes;

            if (this.comments.length > 0) {
                let commentsToPrint = '';
                for (let comment of this.comments) {
                    commentsToPrint += `\n * ${comment}`;
                }

                return superString + '\n' + 'Rating: ' + rating + '\n' + 'Comments:' + commentsToPrint;
            } else {
                return superString + '\n' + 'Rating: ' + rating;
            }
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            let superString = super.toString();
            return superString + `\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}


let classes = solve();

let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);

test.addComment("1");
test.addComment("2");
test.addComment("3");
console.log(test.toString());