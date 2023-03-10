const { EntitySchema } = require("@mikro-orm/core");
const { BaseEntity } = require("./BaseEntity");

class Post extends BaseEntity {
  constructor(title, author, content) {
    super();
    this.title = title;
    this.author = author;
    this.content = content;
  }
}

const schema = new EntitySchema({
  class: Post,
  extends: "BaseEntity",
  properties: {
    title: { type: "string" },
    author: { type: "string" },
    content: { type: "string" },
  },
});

module.exports = {
  Post,
  entity: Post,
  schema,
  label: "postRepository",
};